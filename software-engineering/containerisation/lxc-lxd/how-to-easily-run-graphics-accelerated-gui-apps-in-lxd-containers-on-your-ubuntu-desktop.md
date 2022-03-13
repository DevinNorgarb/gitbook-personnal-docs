# How to easily run graphics-accelerated GUI apps in LXD containers on your Ubuntu desktop

_**UPDATE June 2020**_: See newer post at [https://blog.simos.info/running-x11-software-in-lxd-containers/](https://blog.simos.info/running-x11-software-in-lxd-containers/) for simplified instructions. They require a recent LXD (version 4.0 or newer), and snap packages work.

_**Note:**_ This post is about [LXD containers](https://linuxcontainers.org/lxd/introduction/). These are _**system containers**_, which means they are similar to Docker but behave somewhat like virtual machines. When you start a LXD (_lex-dee_) container, you are starting a new system on your computer, with its own IP address and all. You can get LXD as _**a snap package**_. Go [https://docs.snapcraft.io/core/install](https://docs.snapcraft.io/core/install) to install snap support, then _**sudo snap install lxd**_. See also [Getting Started with LXD](https://linuxcontainers.org/lxd/getting-started-cli/).

In that older post, we saw how to manually setup a LXD container in order to run GUI apps from there, and have them appear on our X11 desktop.

In this post, we are going to see how to easily set up our LXD installation in order to be able to launch on demand containers that we can run GUI apps in them. First, we will see the instructions and explanation on how to use them. Then, we explain these instructions in detail. And finally we go through some common troubleshooting issues.

### Prerequisites

The following have been tested with

* the host runs either _**Ubuntu 18.04**_ or _**Ubuntu 16.04**_
* the containers run either _**Ubuntu 18.04**_ or _**Ubuntu 16.04**_ or _**Ubuntu 14.04**_ or _**Ubuntu 12.04**_
* LXD version 3.0 or newer (probably works fine with LXD 2.0.8+ as well)
* works fine with either the LXD _**deb package**_ or the LXD _**snap package**_

To verify whether you run the deb package or the snap package, run the command **`which lxd`**. If the output is `/usr/bin/lxd`, then you have the deb package of LXD. Otherwise, if it is `/snap/bin/lxd`, you have the snap package of LXD.

These instructions should work with other distributions as well. Read further below on the detailed explanation of the instructions in order to adapt to your favorite distribution.

In the following, we see the two steps to set up our system so that we can then create GUI containers on demand. Step 1 is _**only required if**_ you run _**the deb package**_ of LXD. In subsequent sections, we see an explanation of the instructions so that you can easily port of other Linux distributions. At the end, have a look at the _**Troubleshooting**_ section to see commons issues and how to solve them.

### Step 1 Mapping the user ID of the host to the container

This step is _**only required if**_ you run _**the deb package of LXD**_. If instead you have _**the snap package of LXD**_, skip to Step 2.

Run on the host (only once) the following command ([source](https://tribaal.io/nicer-mounting-home-in-lxd.html)): (_**Note:**_ if you do not use the _bash_ shell, then _**$UID**_ is the user-id of the current user. You can replace _**$UID**_ with _**$(id -u)**_ in that case.)

```
$ echo "root:$UID:1" | sudo tee -a /etc/subuid /etc/subgid
[sudo] password for myusername: 
root:1000:1
$
```

The command appends a new entry in both the _**/etc/subuid**_ and _**/etc/subgid**_ subordinate UID/GID files. It allows the LXD service (that runs as root) to remap our user’s ID ($UID, from the host) as requested.

### Step 2 Creating the _gui_ LXD profile

You will be creating a LXD profile with settings relevant to launching GUI applications. All configuration that you did manually at the old [How to run graphics-accelerated GUI apps in LXD containers on your Ubuntu desktop](https://blog.simos.info/how-to-run-graphics-accelerated-gui-apps-in-lxd-containers-on-your-ubuntu-desktop/) post, are now included in a single LXD profile.

Download the file [lxdguiprofile.txt](https://blog.simos.info/wp-content/uploads/2018/06/lxdguiprofile.txt) and save it locally.

Then, create an empty LXD profile with the name _**gui**_. Finally, put the downloaded profile configuration into the newly created _**gui**_ profile.

```
$ lxc profile create gui
Profile gui created

$ cat lxdguiprofile.txt | lxc profile edit gui
$
```

Verify that the profile has been created.

```
$ lxc profile list
+---------------+---------+
| NAME          | USED BY |
+---------------+---------+
| default       | 10      |
+---------------+---------+
| gui           | 0       |
+---------------+---------+
```

You can view the contents of the profile _**gui**_ by running _**lxc profile show gui**_. A discussion on the profile contents is found two sections below.

### Launching _gui_ containers in LXD

Let’s launch some GUI containers in LXD. The _**gui**_ LXD profile only has instructions related to running GUI applications. Due to this, you need to specify first another profile with information on the disk and the networking. The _**default**_ LXD profile is suitable for this. You may use [a _**bridge**_ profile](https://blog.simos.info/how-to-make-your-lxd-containers-get-ip-addresses-from-your-lan-using-a-bridge/) or [_**macvlan**_ profile](https://blog.simos.info/how-to-make-your-lxd-container-get-ip-addresses-from-your-lan/) instead.

```
$ lxc launch --profile default --profile gui ubuntu:18.04 gui1804
Creating gui1804
Starting gui1804

$ lxc launch --profile default --profile gui ubuntu:16.04 gui1604
Creating gui1604
Starting gui1604
```

You have launched two containers, with Ubuntu 18.04 and Ubuntu 16.04 respectively. You have specified two LXD profiles, _**default**_ and _**gui**_. This means that the new container gets configuration from _**default**_, then from _**gui**_.

Next, make sure that the containers are up and running. In the LXD profile there are instructions to install additional packages automatically for us. That takes time. Here is how we check. We get a shell as the non-root account _**ubuntu**_ in the container, and _**tail**_ the end of the _**cloud-init**_ log file. It says that it has _**0 failures**_, it took (on this case) about _**22 seconds**_ to complete, and the startup was _**successful**_.

```
$ lxc exec gui1804 -- sudo --user ubuntu --login
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@gui1804:~$ tail -6 /var/log/cloud-init.log 
2018-06-25 13:11:54,175 - main.py[DEBUG]: Ran 20 modules with 0 failures
2018-06-25 13:11:54,176 - util.py[DEBUG]: Creating symbolic link from '/run/cloud-init/result.json' => '../../var/lib/cloud/data/result.json'
2018-06-25 13:11:54,176 - util.py[DEBUG]: Reading from /proc/uptime (quiet=False)
2018-06-25 13:11:54,177 - util.py[DEBUG]: Read 12 bytes from /proc/uptime
2018-06-25 13:11:54,177 - util.py[DEBUG]: cloud-init mode 'modules' took 21.822 seconds (22.00)
2018-06-25 13:11:54,177 - handlers.py[DEBUG]: finish: modules-final: SUCCESS: running modules for final
ubuntu@gui1804:~$
```

Subsequently, run _**glxgears**_ to test graphics hardware acceleration. You may also try _**glxinfo**_.

```
ubuntu@gui1804:~$ glxgears 
366 frames in 5.0 seconds = 73.161 FPS
300 frames in 5.0 seconds = 59.999 FPS
300 frames in 5.0 seconds = 60.000 FPS

XIO: fatal IO error 11 (Resource temporarily unavailable) on X server ":0"
after 1047 requests (42 known processed) with 0 events remaining.
ubuntu@gui1804:~$
```

Finally, test the audio and whether Pulseaudio works.

```
ubuntu@gui1804:~$ pactl info
Server String: unix:/tmp/.pulse-native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 12
Tile Size: 65472
User Name: myusername
Host Name: mycomputer
Server Name: pulseaudio
Server Version: 8.0
Default Sample Specification: s16le 2ch 44100Hz
Default Channel Map: front-left,front-right
Default Sink: noechosink
Default Source: noechosource
Cookie: 4a83:ba9b
ubuntu@gui1804:~$
```

Audio works fine as well. If there was an error, the _**pactl info**_ command would have showed it here.

Now, you can install _**deb packages**_ of GUI programs in these containers, such as Firefox, Chromium browser, Chrome, Steam and so on. Installing snap packages inside the containers and having them appear on your desktop is not supported yet. That would require LXD 3.2 and a few modifications to the profile (not covered in this post).

In the following subsections, we see some useful examples.

#### Running a separate instance of a program

We are creating a GUI container in order to run Firefox from it. It will be a separate and independent instance of Firefox compared to our desktop browser.

```
$ lxc launch --profile default --profile gui ubuntu:18.04 firefox
Creating firefox
Starting firefox

$ lxc exec firefox -- sudo --user ubuntu --login
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@firefox:~$ sudo apt install firefox
ubuntu@firefox:~$ firefox
```

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/firefox-in-container.png?resize=634%2C713\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/firefox-in-container.png?ssl=1)

#### Running old programs in old versions of Ubuntu

[redet](http://billposer.org/Software/redet.html) is a Tcl/Tk program that [does not run easily on Ubuntu 18.04](https://askubuntu.com/questions/1031632/tcl-tk-programs-fails-after-upgrade-to-18-04) because it needs some extra packaging effort for newer versions of Ubuntu. One option would have been to install Ubuntu 12.04 in VirtualBox. Here is the LXD alternative: We launch an Ubuntu 12.04 container, then install _**redet**_ and finally run it. It took around 40 seconds from launch to GUI.

```
$ lxc launch --profile default --profile gui ubuntu:12.04 redet
Creating redet
Starting redet

$ lxc exec redet -- sudo su -l ubuntu
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@redet:~$ sudo apt-get install redet
...ubuntu@redet:~$ redet
Redet 8.26
Copyright (C) 2003-2008 William J. Poser.
This program is free software; you can redistribute it
and/or modify it under the terms of version 3 of the GNU General
Public License as published by the Free Software Foundation.
```

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/redet1204.png?resize=650%2C360\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/redet1204.png?ssl=1)

#### Running Windows programs with Wine

When you need to run a particular Windows program with Wine, you would prefer not to install all the dependencies on your desktop Ubuntu but rather have them confined into a container. Here is how to do this. We launch a new GUI container called _**wine**_, then [install Wine (package wine-stable, Wine version 3.0) according to the official instructions](https://wiki.winehq.org/Ubuntu), and finally install a Windows program. We can reuse the same container to install more Windows programs.

```
$ lxc launch --profile default --profile gui ubuntu:18.04 wine
Creating wine
Starting wine

$ lxc exec wine -- sudo --user ubuntu --login
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@wine:~$ sudo dpkg --add-architecture i386 
ubuntu@wine:~$ wget -nc https://dl.winehq.org/wine-builds/Release.key


ubuntu@wine:~$ sudo apt-key add Release.key
OK
ubuntu@wine:~$ sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
ubuntu@wine:~$ sudo apt install wine-stable
...
```

Then, you can set up the environment to run [winetricks](https://wiki.winehq.org/Winetricks) in order to easily install Windows programs.

```
ubuntu@wine:~$ echo export PATH=\"/opt/wine-stable/bin:\$PATH\" >> ~/.profile 
ubuntu@wine:~$ source ~/.profile 
ubuntu@wine:~$ which wine
/opt/wine-stable/bin/wine
ubuntu@wine:~$ sudo apt install zenity unzip cabextract
ubuntu@wine:~$ wget  https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
ubuntu@wine:~$ chmod +x winetricks 
ubuntu@wine:~$ ./winetricks
```

We have installed Internet Explorer through winetricks and here it is,

```
ubuntu@wine:~$ wine .wine/drive_c/Program\ Files/Internet\ Explorer/iexplore.exe
```

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/wine-ie.png?resize=750%2C527\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/wine-ie.png?ssl=1)

### A closer look into the _gui_ LXD profile

Let’s have a closer look at the _**gui**_ LXD profile contents.

```
$ lxc profile show gui
config:
  environment.DISPLAY: :0
  raw.idmap: both 1000 1000
  user.user-data: |
    #cloud-config
    runcmd:
      - 'sed -i "s/; enable-shm = yes/enable-shm = no/g" /etc/pulse/client.conf'
      - 'echo export PULSE_SERVER=unix:/tmp/.pulse-native | tee --append /home/ubuntu/.profile'
    packages:
      - x11-apps
      - mesa-utils
      - pulseaudio
description: GUI LXD profile
devices:
  PASocket:
    path: /tmp/.pulse-native
    source: /run/user/1000/pulse/native
    type: disk
  X0:
    path: /tmp/.X11-unix/X0
    source: /tmp/.X11-unix/X0
    type: disk
  mygpu:
    type: gpu
    name: gui
used_by:
- /1.0/containers/gui1804
```

#### The _**config**_ node

First, there is _**environment.DISPLAY**_, with the default value _**:0**_. This is an environment variable, and has the value of the default display of the host’s X11 server. You may have to change this to :1 if you have more displays (for example, multiple graphics cards). Here is how to set this to :1,

```
$ lxc profile set gui environment.DISPLAY :1
```

The [raw.idmap](https://github.com/lxc/lxd/blob/master/doc/userns-idmap.md) has a value that refers to the sets of $UID/$GID of the non-root user on the host and in the container. By default on Ubuntu the default ID for the first non-root account is 1000 (both user ID and group ID). This is necessary for the bind-mounting of sockets of the host to the container. If you need to change it, here is how to do it. Because we use the _**both**_ keyword, the first number (i.e. 1000) is the $UID/$GID on the host, and the second number (i.e. 1001) is the $UID/$GID of the non-user account in the container.

```
$ lxc profile set gui raw.idmap "both 1000 1001"
```

The _**user.user-data**_ are instructions for [cloud-init](http://cloudinit.readthedocs.io/en/latest/). The LXD container images from the _**ubuntu:**_ repository support _**cloud-init**_, and we use it to pass configuration to the newly created container.

In _**cloud-init**_, we use _**runcmd** _ to run two commands. First, disable _**shm**_ in PulseAudio so that it uses an alternative that works in LXD. Second, set the _**PULSE\_SERVER**_ environment variable to the Unix socket that have bind-mounted in the _**devices**_ node.

In _**packages**_, we get _**cloud-init**_ to install for us the minimal packages to get X11 libraries, Mesa libraries and the PulseAudio client libraries. On top of that, we get _**cloud-init**_ to run _**apt update**_ for us so that when we get into the container, we can install packages straight away.

#### The _**description**_ node

This node has the description text of the LXD profile.

#### The _**devices**_ node

The _**devices**_ node has two Unix sockets, one for PulseAudio and one for X11.

It also gives access to [the _**gpu**_ device](https://github.com/lxc/lxd/blob/master/doc/containers.md#type-gpu).

#### The _**used\_by**_ node

We do not edit this node, it will include the created containers that have this profile.

### Creating shortcuts to the _gui_ container applications

If you want to run Internet Exploerr from the container, you can simply run from a terminal window the following,

```
$ lxc exec wine -- sudo --login --user ubuntu /opt/wine-stable/bin/wine /home/ubuntu/.wine/drive_c/Program\ Files/Internet\ Explorer/iexplore.exe
```

and that’s it.

To make a shortcut, create the following .desktop file on the host and finally use _**desktop-file-install**_ to install into _**/usr/share/applications/**_.

```
$ cat > lxd-iexplore.desktop
[Desktop Entry]
Version=1.0
Name=Internet Explorer in LXD
Comment=Access the Internet with Wine Internet Explorer through a LXD container
Exec=lxc exec wine -- sudo --login --user ubuntu /opt/wine-stable/bin/wine /home/ubuntu/.wine/drive_c/Program\ Files/Internet\ Explorer/iexplore.exe %U
Icon=/usr/share/icons/HighContrast/scalable/apps-extra/firefox-icon.svg
Type=Application
Categories=Network;WebBrowser;
^D
$ sudo desktop-file-install lxd-iexplore.desktop
```

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/msie-dash.png?resize=249%2C249\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/06/msie-dash.png?ssl=1)

This is how the (randomly-selected) icon looks like in a File Manager.

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2017/05/lxd-firefox-on-launcher.png?resize=134%2C306\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2017/05/lxd-firefox-on-launcher.png?ssl=1)

Here is the icon on the Launcher. Simply drag from the File Manager and drop to the Launcher in order to get the application at your fingertips.

### Troubleshooting

**Error **_**sudo: unknown user: ubuntu**_** and **_**unable to initialize policy plugin**_

You get this error when you create a container and then very quickly try to connect to it with a shell. Here is how it looks.

```
$ lxc launch --profile default --profile gui ubuntu:18.04 gui1804
Creating gui1804
Starting gui1804

$ lxc exec gui1804 -- sudo --user ubuntu --login
sudo: unknown user: ubuntu
sudo: unable to initialize policy plugin
```

The Ubuntu container images come with _**cloud-init**_ instructions that, among others, create the non-root account _**ubuntu**_. When you launch a container, it takes several seconds to start the runtime and then execute the _**cloud-init**_ instructions. You get this error when you try to connect too soon, when the _**ubuntu**_ account has not been created yet. You can try again until the account is created.

**Error Pulseaudio, **_**Connection failure: Connection refused**_

You got a shell in the newly created container, but when you try to use the audio, you get _**Connection refused**_. Here is how it looks,

```
ubuntu@gui1804:~$ pactl info
Connection failure: Connection refused
ubuntu@gui1804:~$
```

The _**cloud-init**_ instructions in the _**gui**_ LXD profile have commands to install packages and commands to setup the PulseAudio environment variable. The sequence is to install first the packages, and then add _**PULSE\_SERVER**_ in the _**\~/.profile**_. This means that if you get a shell in the container before _**cloud-init**_ has completed, you have missed the addition of _**PULSE\_SERVER**_ in _**\~/.profile**_. As a solution, you can log out and then connect again. Or, do

```
ubuntu@gui1804:~$ source ~/.profile
ubuntu@gui1804:~$ pactl info
Server String: unix:/tmp/.pulse-native
Library Protocol Version: 32
Server Protocol Version: 32
...
```

**I have an existing container, can I make it a **_**gui**_** container?**

Yes, you can. You can assign profiles to a container, then restart the container. Here is how,

```
$ lxc profile assign oldcontainer default,gui
Profiles default,gui applied to oldcontainer
$ lxc restart oldcontainer
```

**I have a gui container, can I remove the gui profile from it?**

Yes, by assigning the default or any other profile. Then, restart the container.

```
$ lxc profile assign gui1804 default
Profiles default applied to gui1804
$ lxc restart gui1804
```

**More errors**

Report in the comments any issues that you encounter and I will be adding here.

I tested this on both Intel and AMD GPUs and they worked fine for me. For NVidia there might be some additional issues, so I would rather investigate again rather than copy from [the old post](https://blog.simos.info/how-to-run-graphics-accelerated-gui-apps-in-lxd-containers-on-your-ubuntu-desktop/).

### Discussion

A year ago, I wrote [the first version of the post on how to run GUI application in a LXD system container](https://blog.simos.info/how-to-run-graphics-accelerated-gui-apps-in-lxd-containers-on-your-ubuntu-desktop/). I had put together older sources from the Internet while writing that post. In this post, I used the comments and feedback of last year’s post to automate the process and make it less error-prone.

Up to now, we have seen how to reuse the existing display of our desktop for any GUI apps running in a container. The downside is that a malicious application in a container can attack the desktop because X11. One solution is to use Xephyr instead of our desktop’s DISPLAY (:0). It is elemental to adapt this post to use Xephyr. However, in terms of usability, it would be ideal to create some sort of VirtualBox clone that would use LXD containers instead of VMs to launch Linux distributions. In this VirtualBox clone, it would be easy to select whether we want to output in a window on the desktop’s DISPLAY or in a Xephyr window. Also, in a Xephyr window we can launch a window manager, therefore we can have a proper Linux desktop environment in a window.

![Simos Xenitellis](https://secure.gravatar.com/avatar/5c04c6b5f513d926ea9d77782a3843a1?s=100\&d=wavatar\&r=g)
