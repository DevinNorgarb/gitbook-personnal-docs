---
description: Credit https://curatedpython.com/p/yacht-yet-cantoolz-cantoolz/index.html
---

# CuratedPython

### CANToolz

#### a.k.a.

. It provides multiple modules that can be chained using CANToolz's `pipe` system and used by security researchers, automotive/OEM security testers in black-box analysis.

CANToolz can be used for ECU discovery, MitM testing, fuzzing, brute-forcing, scanning or R\&D, testing and validation. More can easily be implemented with a new module.

Many tools are already available for CAN analysis, with Charlie Miller and Chris Valasek tools, UDS/CAN tools by Craig Smith and many more . Each of them is cool and useful but it can be tedious when trying to use several of them at once. One may need to have a working setup for each them, modify/hack some of their source code, implement new features to be specific to one's project, etc.

The CANToolz framework is an attempt to unify most (if not all) the tricks, tools and others things that one would need to do CAN analysis in one unique place. A single installation process and many modules already available. The more people we bring in, the more useful it will become! No stunt-hack to bring the people, just a practical and useful tool for anyone to use. Implementing new modules is fairly easy and can be merged with the framework is the community finds it useful.

The framework is really module-oriented, where one could use one, two, a couple of them as part of a testing process or to create more sophisticated simulation scenarios to work with CAN bus.

> "I don't get why everyone releases new "car hacking tools" all the time. @nudehaberdasher and I released ours in 2013 and they work fine." - (c) Charlie Miller (@0xcharlie)

> "Looking for our car hacking tools / data / scripts? http://illmatics.com/content.zip" - (c) Chris Valasek @nudehaberdasher

More details and use-case examples available on:

* Author's blog
* CANToolz's Telegram group.
* CANToolz's Wiki.

### Supported hardware

CANToolz supports the following hardware to communicate with CAN bus:

1. USBtin
2. CANBus Triple
3. Seeed CAN-BUS Shield 1.2

More hardware could be supported. Feel free to open a request.

### Install

Using manual installation (installing missing dependencies as well):

```
$ python setup.py install
```

The installation process will create a `cantoolz` alias command in your bin/ folder. To start `cantoolz`, simply run:

```
$ cantoolz -g w -c examples/can_sniff.py
```

Then go to CANToolz's web interface at http://localhost:4444

Help is available with:

```
$ cantoolz -h
```

_Last stable release for Python 2.7: https://github.com/eik00d/CANToolz/tree/Python\_2.7\_last\_release_

### VIRCar starting:

VIRCar is a Virtual Car simulated using CANToolz's features and modules:

1. Run VIRCar `cantoolz -g w -p 5555 -c examples/car_config.py`
2. Go to http://localhost:5555/index.html and press `START`
3. Go to http://localhost:5555/vircar.html to see your own Virtual Car!

Now, to start hacking your new virtual car, you can load the existing configuration example:

1. Run CANToolz `cantoolz -g w -c examples/car_hacker.py` to load and start the hacking session
2. Go to http://localhost:4444/index.html and you are now connected to VIRCar with `car_hacker` configuration, using TCP2CAN for I/O hardware and connected to VIRCar's OBD2 and CABIN buses, and ready to start playing around

### Available modules

| Module            | Description                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| hw\_CANBusTriple  | IO module for CANBus Triple HW                                                                                      |
| hw\_USBtin        | IO module for USBtin                                                                                                |
| hw\_CANSocket     | IO module for CANSocket (Linux only)                                                                                |
| hw\_TCP2CAN       | client/server IO component for tunnelinc raw CAN traffic over TCP                                                   |
| hw\_CAN232        | IO module for LAWICEL (USB to Serial) CAN devices (e.g. SeeedStudio CAN bus shield)                                 |
| firewall          | module for blocking CAN message by ID                                                                               |
| fuzz              | Simple 'Proxy' fuzzer (1 byte) Can be combined with ping/replay                                                     |
| mod\_printMessage | printing CAN messages                                                                                               |
| analyze           | CAN messages statistic (with .csv file output) / Analysis option (c analyze a) will try to find UDS/ISO TP messages |
| ping              | generating CAN messages with chosen IDs (ECU/Service discovery)                                                     |
| replay            | save and replay packets                                                                                             |

We are working on supporting other types of I/O hardware and modules. Please join us! With your help, we can create modules that can be useful for all of us!

### Usage Examples

* CAN Switch filter scanner
* Checking which CAN frames can be passed from diagnostic interface to HU and back
* MITM with firewall (ECU ID detection)
* Checking what packets are responsible for chosen "action"
* Replay discovery
* Checking what packets are responsible for chosen "action"
* Ping discovery (with ISO TP and UDS support)
* UDS detection, etc.

And many other possible scenarios. Some of them can be found in the example folder of this repository.

Just use modules as "needed":

* Example with DIFF mode, to find door unlock commands.

### Sniffing and UDS detection example

### Use it as-is

As one can expect from hacker tools, CANToolz is very early-uber-alpha. It needs to be tested more; the code can be ugly some times; bugs remain to be found. We are working on that, step by step ;)

Therefore, use it as-is!

### A question/comment?

* IRC: #cantoolz @ freenode.net
* Telegram: https://t.me/CANToolz

### With best regards

* Alexey Sintsov (@asintsov) / \[email protected] -- Creator of CANtoolz
