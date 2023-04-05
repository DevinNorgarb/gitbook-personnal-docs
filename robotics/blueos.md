# BlueOS

## External Integrations/Extensions <a href="#title-text" id="title-text"></a>

* ![](https://symbytech.atlassian.net/wiki/aa-avatar/557058:8b04d9b5-ae98-48b3-b3fe-9f36b1e559fa)

Created by [Devin Norgarb](https://symbytech.atlassian.net/wiki/people/557058:8b04d9b5-ae98-48b3-b3fe-9f36b1e559fa?ref=confluence\&src=profilecard)Mar 25, 20235 min read

One of the aims of the BlueOS structure is to make it easier to develop, provide, install, and use integrations than in the original Companion software. This post provides a general overview of the structure (as it currently stands), and describes our design intent for how extensions can be integrated most effectively. The system isn’t finalised yet, and we welcome discussion into the methods suggested here, along with whether there are particular details/permissions/access that are important to cover/include, or perhaps whether some alternative integrations system would work better.

## Contents <a href="#contents" id="contents"></a>

1. [Current (Beta) Structure](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#current-beta-structure-2)\
   1.1 [Core Functionality](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#core-functionality-3)\
   1.2 [Frontend (Web Interface)](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#frontend-web-interface-4)\
   1.3 [Integration Example - DVL](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#integration-example-dvl-5)
2. [Going Forwards](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#going-forwards-6)\
   2.1 [Dashboard](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#dashboard-7)\
   2.2 [Installing/Getting Extensions](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#installinggetting-extensions-8)\
   2.3 [Permissions/Access](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#permissionsaccess-9)\
   2.4 [Versioning & Compatibility](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#versioning-compatibility-10)\
   2.5 [Extending Core Functionality](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#extending-core-functionality-11)\
   2.6 [Documentation/Resources](https://discuss.bluerobotics.com/t/external-integrations-extensions/10912#documentationresources-12)

## Current (Beta) Structure <a href="#current-beta-structure" id="current-beta-structure"></a>

### Core Functionality <a href="#core-functionality" id="core-functionality"></a>

The core BlueOS functionality is run within a Docker container, which allows it to stay isolated, and be updated independently of other code/services running on the device.

To those unfamiliar with [Docker 9](https://docs.docker.com/get-started/overview/), it’s a way of keeping code environments/programs isolated while still having access to the underlying operating system. One isolated program block is called an “image”, which when run forms a “container”. Several containers can be run at once.

### Frontend (Web Interface) <a href="#frontend-web-interface" id="frontend-web-interface"></a>

The web interface searches/scans for webpages (running on BlueOS) that are accessible via TCP ports which are configured to ‘listen’, and can be accessed by external users (server at IP `0.0.0.0`). Those webpages are then listed at `≣/Tools/Available Services`, along with documentation if they provide it:

&#x20;

### Integration Example - DVL <a href="#integration-example-dvl" id="integration-example-dvl"></a>

As many of you are likely aware, the old Companion software has a beta integration of [DVL functionality 24](https://www.ardusub.com/developers/dvl-integration.html) focused on the [Water-Linked DVL-A50 24](https://discuss.bluerobotics.com/t/water-linked-launches-dvl-a50-doppler-velocity-log/7142). While DVL support is undoubtedly useful, it’s device specific and also not something that everyone with an ArduSub device needs to use, so in BlueOS that is instead implemented as an external integration, which users can enable if it’s relevant.

[@williangalvani](https://discuss.bluerobotics.com/u/williangalvani) has worked hard to make the [BlueOS-Water-Linked-DVL 54](https://github.com/bluerobotics/BlueOS-Water-Linked-DVL) repository, which serves as an example of what can be done already. The relevant functionality (communication with the DVL, sending mavlink messages, etc) is implemented with Python, and there’s a web interface created using the Flask library.\*

At the moment installation is handled by ssh’ing into the Onboard Computer (`ssh pi@companion.local`, password=`raspberry`), and telling docker to run the desired container. Docker then tries to find it locally (on the device), and when that fails it searches [the specified location in DockerHub 11](https://hub.docker.com/r/bluerobotics/blueos-water-linked-dvl/tags) (requires wifi) and downloads and runs it automatically. That process requires the Docker image of the relevant code (built using a `Dockerfile`) to be pushed to and hosted on DockerHub.

> \***Implementation Note:** [_Flask 6_](https://flask.palletsprojects.com/en/2.0.x/) _is just one possible way of creating a webpage. Many of BlueOS’s_ [_core services_](https://github.com/bluerobotics/BlueOS-docker/tree/master/core/services) _use_ [_uvicorn 2_](https://www.uvicorn.org/) _to serve_ [_FastAPI_](https://fastapi.tiangolo.com/)_-based webpages (which are self-documenting). The_ [_Version Chooser_](https://github.com/bluerobotics/BlueOS-docker/tree/master/core/services/versionchooser) _service uses_ [_Connexion_](https://connexion.readthedocs.io/en/latest/)_, which is a self-documenting wrapper around Flask. It’s also not a requirement to use Python if you don’t want to (e.g. the_ [_camera manager_](https://github.com/bluerobotics/BlueOS-docker/tree/master/core/tools/mavlink\_camera\_manager) _and_ [_mavlink2rest 3_](https://github.com/bluerobotics/BlueOS-docker/tree/master/core/tools/mavlink2rest) _are both written in Rust)._

## Going Forwards <a href="#going-forwards" id="going-forwards"></a>

### Dashboard <a href="#dashboard" id="dashboard"></a>

The main web interface will have a dashboard, to display information from the most important services. We’re intending to make it possible to embed web views from custom services as part of that dashboard, so that custom integrations can be presented prominently if desired.

To facilitate embedded views we’ll likely need to define some form of registering interface, where a service can present itself as view-compatible, and the user can choose between available views/services to display.

### Installing/Getting Extensions <a href="#installing-getting-extensions" id="installing-getting-extensions"></a>

We’re planning to make a ‘web store’ type page which allows a user to find and select integrations/extensions they’re interested in from within the BlueOS web interface. That will likely require some level of standardisation of the installation process for extensions, but comes with the significant benefit that extensions would become effectively plug-and-play for users.

### Permissions/Access <a href="#permissions-access" id="permissions-access"></a>

Different extensions require access to different things. Some will require access to connected peripherals (e.g. USB devices), and many will likely require some level of access to mavlink messages _from_ the autopilot, as well as the ability to send mavlink messages _to_ the autopilot and/or topside. It’s also possible that certain integrations will want/need to communicate with or interface with other extensions.

We’ll need to make these available, but for us to get this right from as early as possible it’s important for us to know what kind of extensions you’re interested in making - please feel free to comment below with extension ideas you may be interested in, or think others may find useful

### Versioning & Compatibility <a href="#versioning-and-compatibility" id="versioning-and-compatibility"></a>

As BlueOS and various extensions evolve and add new features, it’s important to make sure that the user’s version of BlueOS is compatible with a suitable version of an extension they want to install. The same idea applies for extensions that need to work together. There are two main ways this can be handled, and we’re interested in your preferences:

1. Versioning is handled entirely by individual extensions - as part of the extension installation process the extension accesses the current version number of BlueOS and determines how to set itself up to work with that (or provide some warning about an incompatibility/upgrading requirement)
2. BlueOS handles some or all of the version (and dependency) checking - requires extensions to store some standardised form of metadata, perhaps in something like [Docker object labels 3](https://docs.docker.com/config/labels-custom-metadata/)

### Extending Core Functionality <a href="#extending-core-functionality" id="extending-core-functionality"></a>

At this point there’s no way to extend core functionality (e.g. to add an extra camera type) without running a modified core image. It’s possible this problem can be avoided to some extent by splitting off commonly extensible functionality into its own Docker container (in which case you could replace just the camera module for example), but there remains the potential issue of a user wanting multiple integrations that replace the same component (e.g. to support two extra camera types), and replacing/overriding core functionality could mean the user misses out on useful updates for that component.

In cases like this it may make sense for us to make an intentionally extensible module, which supports some simple microservices to add some kind of common functionality. This is quite a challenging and nuanced issue, so please contribute to the discussion if it affects you and you have ideas or preferences on how it should best be handled.

### Documentation/Resources <a href="#documentation-resources" id="documentation-resources"></a>

While we of course intend to document all the functionality of BlueOS, along with how to develop for/with it, please let us know if there are particular topics you would like to see covered first, or concepts you’re particularly interested in examples of or resources for

> EDIT: Initial extensions documentation 5 is now available\*!
>
> \*The extensions manager is available from BlueOS >= 1.1.0-beta.13, which can be installed with Pirate Mode turned on
