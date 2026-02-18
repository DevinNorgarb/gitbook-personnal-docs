# OBD GPS Logger for Linux and OSX

\[ [Modules](/broken/pages/siPiolqkpsoiWBQTB7es) | [Screenshots](/broken/pages/siPiolqkpsoiWBQTB7es) | [Log Output](/broken/pages/siPiolqkpsoiWBQTB7es) | [Supported OSs](/broken/pages/siPiolqkpsoiWBQTB7es) | [Download](/broken/pages/siPiolqkpsoiWBQTB7es) | [Contact](/broken/pages/siPiolqkpsoiWBQTB7es) ]

It does exactly what it says on the tin. It logs OBDII and GPS data on Linux, OSX and others.

It can then take that logged data, and write useful output formats

If you find obdgpslogger useful, please don't hesitate to drop me an email at [chunky@icculus.org](mailto:chunky@icculus.org) and let me know of any success, failures, or questions you might have!

### Modules

OBD GPS Logger comes as a bunch of small tools, each intended to complete a single task. [I list these modules](/broken/pages/Hf6Ut5p5ayL5hbfzGUqt) on a page of their own.

Of specific mention is an [OBD II Simulator](/broken/pages/Rwu1u7PnFRIKTuZUWxVJ), which has been given its own page to explore some of its features.

Each module intended for end users has a manpage in the distribution. A simple text version of the manpages can be found here: [manpages](<../.gitbook/assets/manpages (1)>)

### Screenshots

#### Samples and Google Earth

This is what the output looks like when loaded in Google Earth

Click each screenshot below to take you to a page with higher resolution images, the logs, and the final output files.

| Cross-country road trip | [![](<../.gitbook/assets/small longfeltwant1>)](../.gitbook/assets/longfeltwant)                           | Bit of Coast  | [![](<../.gitbook/assets/small bitofcoast2 (1)>)](../.gitbook/assets/bitofcoast)      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------- |
| There and Back Again    | [![](<../.gitbook/assets/small there and back again1 (1)>)](<../.gitbook/assets/there and back again (1)>) | Testing Trips | [![](<../.gitbook/assets/small testing trips1 (1)>)](../.gitbook/assets/testingtrips) |
| Vegas trip for CES 2010 | [![](<../.gitbook/assets/small ces2010 1>)](<../.gitbook/assets/ces2010 (1)>)                              |               |                                                                                       |

#### GUI

obdgpslogger is actually a small group of command-line applications, and a UI that can be used to launch them. The UI is entirely optional, and the full capabilities of obdgpslogger are available without any graphical systems even running.

Here are some screenshots of it.

| When you first start the UI... | [![](<../.gitbook/assets/small firststart>)](<../.gitbook/assets/firststart (1)>) | While Driving...            | [![](<../.gitbook/assets/small driving (1)>)](<../.gitbook/assets/driving (1)>)       |
| ------------------------------ | --------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------- |
| Click "Convert log to..."      | [![](<../.gitbook/assets/small converter>)](../.gitbook/assets/converter)         | While converting the log... | [![](<../.gitbook/assets/small convertingcsv (1)>)](../.gitbook/assets/convertingcsv) |

### What does it do?

Your car has lots of interesting things it can tell you from its on-board computer while it's running. Things like how fast you're going, how fast the engine's going, the air flow into the engine, the throttle position... everything. If you want to know more, [google obdII](http://www.google.com/search?q=obdII), and enjoy the rabbit hole.

As with so many open-source projects, this is scratching an itch: There's a severe lack of applications that run on OSX or Linux that can log OBDII data.

My gem-of-an-idea from the outset was to be able to log this stuff as I was driving, along with GPS position, and later on plot an overlay on a map of where you drove, and how efficiently the car was running at each instant

### What do I need?

The core interest in this application is OBDII. To log from OBDII, you'll need an elm327-compatible device \[ie, "all of them"] plugged into your laptop and presenting itself as a serial port device. Just about anything you can find on the internet that says "elm327" and has a plug that fits a hole on your laptop should work.

I have all these three devices. I use the OBDLink the most \[it's the fastest at sampling, and has the most powerful set of power-saving settings], followed by the OBDPros. I rarely use the OBDKey anymore:

* [OBDLink device](http://www.scantool.net/obdlink.html)
* [OBDPros USB](http://www.obdpros.com/product_info.php?products_id=133)
* [Bluetooth OBDKey](http://www.obdkey.com/)

If you want to use the GPS logging part, you'll need a [GPS receiver compatible with gpsd](http://gpsd.berlios.de/hardware.html), and gpsd. For bluetooth, I'm using one of these: [Globalsat BT-359](http://www.amazon.com/gp/product/B000GWGHOK) and am very happy with it. In general, though, I prefer the [BU-353](http://store.mp3car.com/BU_353_USB_GPS_Receiver_p/gps-002.htm) since you don't have to deal with batteries or turning on and enabling gpsd. \[yay hotplug]

### Can it hurt my car?

No.

OBDII is purely a way to get diagnostic information from the car. The only thing that could be classed as "writing" to the car's computer through the OBDII port is clearing diagnostic codes - which the engine dutifully sets again if whatever-was-wrong is still wrong.

### What do I do with my "logs"?

#### Google Earth

Included in the distribution is a program called obd2kml. This reads the database generated by obdlogger and exports to a Google Earth .kml file

#### Spreadsheet export

Included in the distribution is a program called obd2csv. This reads the database generated by obdogger and exports it to a CSV file with a couple extra useful columns pre-calculated.

Then open obdlogger.csv in your favorite spreadsheet to use as you please.

#### GPX export

GPX is a standard format for GPS data. You can upload it to [openstreetmap](http://openstreetmap.org/) among others, and many tools recognise it.

### Supported Operating Systems

Short Version: OSX, Linux, cygwin on Windows

Long Version: I'm doing most development and testing on OSX, but it's fully POSIX-compliant. Which means it works on OSX, Linux, Solaris. If you use windows, it works with cygwin \[see below]

Longer, opaque version: I have run it on ARM Linux, x86 Linux, x86\_64 Linux, PPC Linux, PPC OSX 10.4, Intel OSX 10.4 and 10.5, various flavors of Cygwin. Most modules work under MSYS, except the logger itself.

### Download

#### Typical doc type things

Some links to typical documents \[direct links to svn versions]:

* [README](http://svn.icculus.org/obdgpslogger/trunk/README?view=markup)
* [ChangeLog](http://svn.icculus.org/obdgpslogger/trunk/ChangeLog?view=markup)
* [TODO](http://svn.icculus.org/obdgpslogger/trunk/TODO?view=markup)
* [COPYING](http://svn.icculus.org/obdgpslogger/trunk/COPYING?view=markup). The license is GPLv2+.

#### Distribution Packages

Packaging stuff for various distros is in svn://svn.icculus.org/obdgpslogger/branches/packaging

At time of writing, packages are available through your distribution if you're running Debian Sid or Testing \[will be in Wheezy], Ubuntu Oneiric, or Arch AUR.

OpenSolaris spec files are in the svn packaging, but Oracle have killed Jucr so I no longer have an easy install path for end users.

Packaging is in progress, but not yet official, for [Fedora](https://bugzilla.redhat.com/show_bug.cgi?id=709125), [OpenSuSE](https://build.opensuse.org/package/binaries?package=obdgpslogger\&project=home%3Arandybb%3Atesting\&repository=openSUSE_11.4), and Meego. That may have changed by the time you read this.

#### Tarball

The current version is downloadable as source here: [obdgpslogger-0.16.tar.gz](<../.gitbook/assets/obdgpslogger 0.16 (1).tar>)

#### Mac Users

There's a macintel bundle, with included gpsd, here: [OBDGPSLogger-0.11-Darwin.dmg](<../.gitbook/assets/OBDGPSLogger 0 (1).11 Darwin>)

#### Subversion Checkout

This is probably more recent than the numbered tarball above, but may have issues

```
svn co svn://svn.icculus.org/obdgpslogger/trunk obdgpslogger
```

You can browse the svn repo here: [http://svn.icculus.org/obdgpslogger/](http://svn.icculus.org/obdgpslogger/)

#### Building

I strongly suggest installing gpsd first.

Build it using cmake:

```
mkdir build
cd build
cmake .. # or ccmake to edit options
make
make install # optional
```

Binaries are placed in the "bin" dir of your top level source directory. If you want to install to a different prefix, change CMAKE\_INSTALL\_PREFIX when you run ccmake

#### Building on Windows

On Windows, the software works with [cygwin](http://www.cygwin.com/). \[obdsim also works with msys/mingw]

You need the following packages \[install them through cygwin's setup.exe, selecting some of them may select others automatically, you should leave those ones on]:

* devel/cmake
* devel/gcc
* devel/make
* devel/subversion

Open Cygwin from the desktop or start menu entry, and then run the same commands as "building" above

### Mailing List and Forum

OBD GPS Logger has a mailing list. Subscribe to it by visiting the icculus.org mailman page for it: [http://icculus.org/mailman/listinfo/obdgpslogger](http://icculus.org/mailman/listinfo/obdgpslogger)

mp3car have provided me some forum space for this project here: [http://www.mp3car.com/vbulletin/obdii-gps-logger/](http://www.mp3car.com/vbulletin/obdii-gps-logger/)

[Gary (-;\
\<chunky@icculus.org>](mailto:chunky@icculus.org)

<br>
