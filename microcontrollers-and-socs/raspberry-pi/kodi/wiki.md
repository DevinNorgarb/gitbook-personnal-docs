# Wiki

{% embed url="https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1" %}

| [![Home icon grey.png](https://kodi.wiki/images/a/aa/Home_icon_grey.png)](https://kodi.wiki/view/Main_Page) |   |   | ![▶](https://kodi.wiki/images/5/5f/TriangleArrow-Right.png) [Raspberry Pi](https://kodi.wiki/view/Raspberry_Pi) | ![▶](https://kodi.wiki/images/5/5f/TriangleArrow-Right.png) HOW-TO:Install Kodi on Raspberry Pi |
| ----------------------------------------------------------------------------------------------------------- | - | - | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |

The basic hardware you will need is

* the R-Pi board itself
* a power supply (Micro-USB, 5V, upto 2500 mA)
* a (micro)SDHC memory card to install the software. (Because video decoding is more resource-intensive than many other operations, it may be more important to have a fast/high quality memory card for Kodi than for other uses.)

<br>

### Contents <a href="#mw-toc-heading" id="mw-toc-heading"></a>

* [1Basic options](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1#Basic_options)
* [2Specific install guides](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1#Specific_install_guides)
  * [2.1Raspberry Pi OS](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1#Raspberry_Pi_OS)
  * [2.2RetroPie](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1#RetroPie)
* [3Compiling Kodi](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi?https=1#Compiling_Kodi)

### Basic options

Easy / Kodi centric distributions

* [LibreELEC](https://kodi.wiki/view/LibreELEC) - [Download](https://libreelec.tv/downloads_new/) • [Wiki](https://wiki.libreelec.tv/) • [Forum](http://forum.libreelec.tv/)
* [OSMC](https://kodi.wiki/view/OSMC) - [Home](https://osmc.tv/) [Installing](https://osmc.tv/download/) • [Wiki](https://osmc.tv/wiki) • [Support Forum](https://discourse.osmc.tv/)

<br>

Advanced / can be used with Kodi

* Arch Linux ARM - [RPi4](https://archlinuxarm.org/platforms/armv8/broadcom/raspberry-pi-4) • [RPi3](https://archlinuxarm.org/platforms/armv8/broadcom/raspberry-pi-3) • [RPi2](http://archlinuxarm.org/platforms/armv7/broadcom/raspberry-pi-2) • [RPi1](http://archlinuxarm.org/platforms/armv6/raspberry-pi)

Note that Arch ARM provides different Kodi packages optimized for different RPi models. All builds offer some flavor of HW accelerated decoding just like LibreELEC. The following packages will supply the current stable version of Kodi:

[kodi-rpi](https://github.com/archlinuxarm/PKGBUILDs/tree/master/alarm/kodi-rpi) for RPi 3/4/400

[kodi-rpi-legacy](https://github.com/archlinuxarm/PKGBUILDs/tree/master/alarm/kodi-rpi-legacy) for RPi 2

Users wanting to track the master branch may select:

[kodi-rpi-git](https://github.com/archlinuxarm/PKGBUILDs/tree/master/alarm/kodi-rpi) for RPi 3/4/400 only

* Batocera Linux - [Learn More](https://batocera-linux.xorhub.com/#learn)
* [Buildroot](https://kodi.wiki/view/Buildroot) - For experienced users only !

<br>

* RetroPie - See [full guide here](https://kodi.wiki/view/HOW-TO:Install_Kodi_on_Raspberry_Pi#RetroPie)

### Specific install guides

For installs that don't directly include and/or boot into Kodi automatically.

#### Raspberry Pi OS

[_Editor note_](https://kodi.wiki/view/Template:Editor_note)_: We need to expand on this section, but here are the basic commands if you are familiar with the command-line:_

(Current Version - 18.7)

```
sudo apt-get update
sudo apt-get install kodi
```

<br>

PVR Addons

* PVR Addons can be installed directly from the command line:

```
sudo apt-get update
sudo apt-get install PACKAGENAMEHERE
```

but replace PACKAGENAMEHERE with the PVR addon required.

```
example: sudo apt-get install kodi-pvr-hts
```

The PVR client add-on should now be installed. If Kodi was already running, restart it to load the add-on.

#### RetroPie

Here's a [youtube guide](https://www.youtube.com/watch?v=MyeCQS7ITnU):

### Compiling Kodi

Notes for advanced users who wish to try and build Kodi from source code.

* Various good notes mentioned here: [https://github.com/xbmc/xbmc/blob/master/docs/README.RaspberryPi.md](https://github.com/xbmc/xbmc/blob/master/docs/README.RaspberryPi.md)
