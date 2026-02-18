# OBD GPS Logger Modules

OBD GPS Logger is, in true unix style, a bunch of small programs, each doing a single task \[and attempting to do it well]

Each individual program has its own manpage in the distribution. If you build and "make install", it will push the manpages into your system appropriately. They're also available online in a pre-rendered text format, here: [manpages](../../.gitbook/assets/manpages)

### For users

#### obdgpslogger

This is the core application - the tool that actually logs data from your car, using OBDII.

obdgpslogger itself is purely a command-line application, with the intention of being able to run on systems without a display, or as a background daemon for producing data to other front-end applications.

#### obdgui

For users that want a pointy-clikky way to launch obdgpslogger \[with a slightly reduced set of options], obdgui is the way to go.

The other major difference that obdgui provides is that it has a set of GUI dials, or graphs, for real-time visual reporting similar to your car's dashboard or other OBDII style applications.

#### obdsim

For testing without going down to your car, obdgpslogger's repository contains an ELM327 simulator. obdsim is deliberately kept independant of obdgpslogger at the source level; they share some libraries, but this sim can be used with other OBDII applications.

One of the main features of this simulator is that it uses plugins for actual number generation. Please visit the [page specifically for obdsim for more information](/broken/pages/EsNvNePDPeoLEq47Nn08)

#### obd2kml

Once you have your logfile, a sqlite database, you will want to convert it to something more human-friendly. One tool for doing this is obd2kml, which exports charts to Google Earth .kml files.

Multiple charts are drawn in the kml file. One example is a colored chart that shows how fast you were travelling at each point in the trip, and colors the chart based on how efficiently the engine was running at each instant.

#### obd2gpx

GPX is a common format used by many applications including openstreetmap. obd2gpx is a fairly simple tool that converts obdgpslogger logfiles to gpx

You can also open gpx files locally using your XML editor of choice

#### obd2csv

For users that are a little more technically inclined and wish to do their own graphing or analysis, another tool to export logs is obd2csv, which exports to .csv files.

These files can easily imported into your spreadsheet or statistical package of choice, specifically it's known to work with Excel or OpenOffice.

#### obdlogrepair

Occasionally, incidental issues crop up in logfiles. obdlogrepair will check logfiles for internal consistency. It can also be used to change logfiles to work with new versions of the software in the event of schema changes.

#### obdftdipty

A little proxy to use libftdi and present a posix pseudoterminal in /dev, for when the ftdi-sio kernel module isn't available \[eg, the SheevaPlug]

### For developers

#### obdinfo

A list of PIDs and information about them, including functions to convert to and from raw OBDII values.

#### conf

Configuration module common to all obdgpslogger components.

[Gary (-;\
\<chunky@icculus.org>](mailto:chunky@icculus.org)

<br>
