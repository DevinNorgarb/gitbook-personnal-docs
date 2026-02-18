# Docker Pelias

Pelias is a geocoder powered completely by open data, available freely to everyone.

Pelias is a search engine for places worldwide, powered by open data. It turns addresses and place names into geographic coordinates, and turns geographic coordinates into places and addresses. With Pelias, you’re able to turn your users’ place searches into actionable geodata and transform your geodata into real places.

We think open data, open source, and open strategy win over proprietary solutions at any part of the stack and we want to ensure the services we offer are in line with that vision. We believe that an open geocoder improves over the long-term only if the community can incorporate truly representative local knowledge.

Links

* Local Installation: https://github.com/pelias/docker
* Cloud Webservice: https://geocode.earth/
* Documentation: https://github.com/pelias/documentation
* Community Chat: https://gitter.im/pelias/pelias

## Pelias in Docker

This repository contains a framework for downloading/preparing and building the Pelias Geocoder using Docker and Docker Compose.

### Projects

Example projects are included in the projects directory: https://github.com/pelias/docker/tree/master/projects

We recommend you start with the `portland-metro` example as a first-time user: it has lower disk and time requirements and can be used to help you familiarize yourself with the process.

### Prerequisites

You will need to have a modern version of `docker` (see: https://docs.docker.com/engine/release-notes/) and a modern version of `docker-compose` (see: https://github.com/docker/compose/blob/master/CHANGELOG.md) installed before continuing. If you are not using the latest version, please mention that in any bug reports.

This project supports Linux and Mac OSX operating systems. Windows is currently not supported: https://github.com/pelias/docker/issues/124

Permissions

* Pelias docker containers, and the `pelias` helper script, will not run as a root user.
* Be sure you are running as a non-root user and that this user can execute `docker` commands. See: https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user

### Requirements for Linux

* Install `util-linux` using your distribution's package manager:
  * Alpine Linux: `sudo apk add util-linux`
  * Debian/Ubuntu: `sudo apt-get install util-linux`

### Requirements for Mac OSX

* Install GNU coreutils with Homebrew: `brew install coreutils`.
* Max-out Docker computing resources (Memory-RAM and CPU cores) dedicated to Docker in Docker > Preferences > Advanced.

### System requirements

Scripts can easily download tens of GB of geographic data, so ensure you have enough free disk space!

At least 8GB RAM is required.

### How long will it take?

* You should be able to get started with the default Portland-metro area build in under an hour with a fast internet connection.
* On a machine with \~32 CPU cores, a full planet build can be done in under a day with the right settings.
* The interpolation build (`pelias prepare interpolation`), which is single threaded, will take 6+ days for the full planet. We generally recommend skipping it when you are first getting started.

For more info on time estimates and hardware requirements for large builds see: https://github.com/pelias/documentation/blob/master/full\_planet\_considerations.md

## Quickstart build script

The following shell script can be used to quickly get started with a Pelias build.

{% code title="quickstart.sh" %}
```bash
#!/bin/bash
set -x

# change directory to the where you would like to install Pelias
# cd /path/to/install

# clone this repository
git clone https://github.com/pelias/docker.git && cd docker

# install pelias script
# this is the _only_ setup command that should require `sudo`
sudo ln -s "$(pwd)/pelias" /usr/local/bin/pelias

# cd into the project directory
cd projects/portland-metro

# create a directory to store Pelias data files
# see: https://github.com/pelias/docker#variable-data_dir
# note: use 'gsed' instead of 'sed' on a Mac
mkdir ./data
sed -i '/DATA_DIR/d' .env
echo 'DATA_DIR=./data' >> .env

# run build
pelias compose pull
pelias elastic start
pelias elastic wait
pelias elastic create
pelias download all
pelias prepare all
pelias import all
pelias compose up

# optionally run tests
pelias test run
```
{% endcode %}

## Installing the Pelias helper script

This repository includes a helper script to make basic management of the Pelias Docker images easy. Ensure the `pelias` command is available on your PATH. The `pelias` file is in the root of this repository.

Example install steps:

{% code title="install pelias" %}
```bash
# change directory to the where you would like to install Pelias
# cd /path/to/install

# clone this repository
git clone https://github.com/pelias/docker.git && cd docker

# install pelias script
sudo ln -s "$(pwd)/pelias" /usr/local/bin/pelias
```
{% endcode %}

Confirm the command is available:

{% code title="which pelias" %}
```bash
which pelias
```
{% endcode %}

Resolving PATH issues

* If you have trouble, check that the target of the symlink is listed on your $PATH:

```bash
tr ':' '\n' <<< "$PATH"
```

If you used the `ln -s` command above then the directory `/usr/local/bin` should be listed. If not, add its location to your $PATH or create a symlink pointing to a location that is on your $PATH.

## Configure Environment

The `pelias` command looks for an `.env` file in your current working directory. This file contains information specific to your local environment.

If this is your first time, change directories to an example project before continuing:

```bash
cd projects/portland-metro
```

Ensure your current working directory contains the files: `.env`, `docker-compose.yml`, and `pelias.json` before continuing.

Variable: DATA\_DIR

* The only mandatory variable in `.env` is `DATA_DIR`.
* This path reflects the directory Pelias will use to store downloaded data and build its microservices.
* You must create a new directory for this project, for example:

```bash
mkdir /tmp/pelias
```

Then modify `.env` to reflect the new path:

```
COMPOSE_PROJECT_NAME=pelias
DATA_DIR=/tmp/pelias
```

Verify environment variables:

```bash
pelias system env
```

Variable: COMPOSE\_\*

* The compose variables are optional and documented here: https://docs.docker.com/compose/env-file/
* Note: changing `COMPOSE_PROJECT_NAME` is not advisable unless you know what you are doing. If migrating from the deprecated `pelias/dockerfiles` repository you can set `COMPOSE_PROJECT_NAME=dockerfiles` for backwards compatibility.

Variable: DOCKER\_USER

* This variable is no longer used and will be ignored. You can safely remove it from your `.env` file.

## CLI commands

List of supported CLI commands:

{% code title="pelias (help)" %}
```
$ pelias

Usage: pelias [command] [action] [options]

  compose   pull                     update all docker images
  compose   logs                     display container logs
  compose   ps                       list containers
  compose   top                      display the running processes of a container
  compose   exec                     execute an arbitrary docker-compose command
  compose   run                      execute a docker-compose run command
  compose   up                       start one or more docker-compose service(s)
  compose   kill                     kill one or more docker-compose service(s)
  compose   down                     stop all docker-compose service(s)
  download  wof                      (re)download whosonfirst data
  download  oa                       (re)download openaddresses data
  download  osm                      (re)download openstreetmap data
  download  tiger                    (re)download TIGER data
  download  transit                  (re)download transit data
  download  all                      (re)download all data
  elastic   drop                     delete elasticsearch index & all data
  elastic   create                   create elasticsearch index with pelias mapping
  elastic   start                    start elasticsearch server
  elastic   stop                     stop elasticsearch server
  elastic   status                   HTTP status code of the elasticsearch service
  elastic   wait                     wait for elasticsearch to start up
  elastic   info                     display elasticsearch version and build info
  elastic   stats                    display a summary of doc counts per source/layer
  import    wof                      (re)import whosonfirst data
  import    oa                       (re)import openaddresses data
  import    osm                      (re)import openstreetmap data
  import    polylines                (re)import polylines data
  import    transit                  (re)import transit data
  import    csv                      (re)import csv data
  import    all                      (re)import all data
  prepare   polylines                export road network from openstreetmap into polylines format
  prepare   interpolation            build interpolation sqlite databases
  prepare   placeholder              build placeholder sqlite databases
  prepare   all                      build all services which have a prepare step
  system    check                    ensure the system is correctly configured
  system    env                      display environment variables
  system    update                   update the pelias command by pulling the latest version
```
{% endcode %}

### Compose commands

Shortcut wrappers around docker-compose (they ensure environment is configured). See: https://docs.docker.com/compose/overview/

```bash
pelias compose pull
pelias compose logs
pelias compose ps
pelias compose top
pelias compose exec
pelias compose run
pelias compose up
pelias compose kill
pelias compose down
```

### Download commands

The download commands fetch and update geographic data from source. Example: `pelias download tiger` fetches street data from the US Census Bureau into DATA\_DIR.

```bash
pelias download wof
pelias download oa
pelias download osm
pelias download tiger
pelias download transit
pelias download all
```

### Prepare commands

Prepare commands run steps required to setup/configure or build microservices. They must be run after the download commands.

```bash
pelias prepare polylines
pelias prepare interpolation
pelias prepare placeholder
pelias prepare all
```

### Elastic commands

Control starting/stopping/configuring Elasticsearch. `pelias elastic wait` blocks until Elasticsearch is ready.

```bash
pelias elastic drop
pelias elastic create
pelias elastic start
pelias elastic stop
pelias elastic status
pelias elastic wait
pelias elastic info
pelias elastic stats
```

### Import commands

Import source data into Elasticsearch.

```bash
pelias import wof
pelias import oa
pelias import osm
pelias import polylines
pelias import transit
pelias import all
```

### System commands

Help debug issues with environment variables. `pelias system update` pulls the latest `pelias` script.

```bash
pelias system check
pelias system env
pelias system update
```

### Test command

Runs the fuzzy-tester tests against any test cases in your project.

```bash
pelias test run
```

## Optionally cleanup temporary files

After a full planet import you can delete large temporary folders. The sizes below are rough estimates.

{% code title="cleanup.sh" %}
```bash
# These folders can be entirely deleted after the import into elastic search
rm -rf /data/openaddresses # (~43GB)
rm -rf /data/tiger         # (~13GB)
rm -rf /data/openstreetmap # (~46GB)
rm -rf /data/polylines     # (~2.7GB)

# Within the content of the "interpolation" folder (~176GB) we must
# preserve "street.db" (~7GB) and "address.db" (~25GB), the rest can be deleted
cd /data/interpolation
rm -rf -- !("street.db"|"address.db")

# Within the content of the "placeholder" folder (~1.4GB), preserve "store.sqlite3" (~0.9GB)
cd /data/placeholder
rm -rf -- !("store.sqlite3")
```
{% endcode %}

## View status and logs

* View containers and ports:

```bash
pelias compose ps
```

* Inspect container logs:

```bash
pelias compose logs
```

## Example queries

Once imports are complete and services are running, you can make queries against your Pelias build.

API

* http://localhost:4000/v1/search?text=portland
* http://localhost:4000/v1/search?text=1901%20Main%20St
* http://localhost:4000/v1/reverse?point.lon=-122.650095\&point.lat=45.533467

Placeholder

* http://localhost:4100/demo/#eng

PIP (point in polygon)

* http://localhost:4200/-122.650095/45.533467

Interpolation

* http://localhost:4300/demo/#13/45.5465/-122.6351

Libpostal

* http://localhost:4400/parse?address=1730+ne+26th+ave,+portland,+or

Last updated: 3 years ago
