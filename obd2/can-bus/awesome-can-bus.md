# Awesome CAN Bus

## Awesome CAN Bus [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![GitHub stars](https://badgen.net/github/stars/iDoka/awesome-canbus)](https://github.com/iDoka/awesome-canbus/stargazers/) [![GitHub forks](https://badgen.net/github/forks/iDoka/awesome-canbus)](https://github.com/iDoka/awesome-canbus/network/) [![GitHub watchers](https://badgen.net/github/watchers/iDoka/awesome-canbus/)](https://github.com/iDoka/awesome-canbus/watchers/) [![GitHub contributors](https://badgen.net/github/contributors/iDoka/awesome-canbus)](https://github.com/iDoka/awesome-canbus/graphs/contributors/) [![GitHub pull-requests merged](https://badgen.net/github/merged-prs/iDoka/awesome-canbus)](https://github.com/iDoka/awesome-canbus/pulls?q=is%3Amerged) [![GitHub latest commit](https://badgen.net/github/last-commit/iDoka/awesome-canbus)](https://github.com/iDoka/awesome-canbus/commit/)

<div align="center">

<img src="https://github.com/iDoka/awesome-canbus/raw/main/media/can_logo.png" alt="CAN logo">

</div>

> :tractor: Awesome Tools, Hardware And Resources For CAN Bus

This curated list helps a reverse engineering CAN bus devices with lightly specializing in automotive embedded controller software and communication understanding.

> **Note** Items marked as "🔝" are highly recommended.

Permanent URL to this list: https://github.com/iDoka/awesome-canbus

### Contents

* Hacking and Reverse Engineering tools
* Test equipment and simulators
* Protocols
  * OBD-II tools
  * UDS
  * ISO-TP
  * J1939 Tools
  * J2534 Tools
* Utils
  * Common
  * Linux related
  * GUI Tools
  * Python Tools
  * CAN-over-IP
  * Other Utils
  * Libraries
  * Examples
* CAN Database
  * Formats (DBC, KCD)
  * Converters and Parsers
  * DBC only
* Hardware
  * ARM
  * Arduino
  * Espressif Systems (ESP8266, ESP32)
  * SBC
  * Others HW
  * Hardware related tools

### Hacking and Reverse Engineering tools

* 🔝[CarHackingTools](https://github.com/jgamblin/CarHackingTools) - Collection of Common Car Hacking Tools a scripts collection to help jump start car research and hacking.
* 🔝[Caring Caribou](https://github.com/CaringCaribou/caringcaribou) - A friendly car security exploration tool for the CAN bus.
* 🔝[CAN\_Reverse\_Engineering](https://github.com/brent-stone/CAN\_Reverse\_Engineering) - Automated Payload Reverse Engineering Pipeline for the Controller Area Network (CAN) protocol.
* 🔝[carhacking](https://github.com/daedalus/carhacking) - Car hacking scripts and docs collection.
* [ReCAN](https://github.com/Cyberdefence-Lab-Murcia/ReCAN) - Reverse engineering of Controller Area Networks.
* [parse\_can\_logs](https://github.com/v-ivanyshyn/parse\_can\_logs) - Parse CAN logs and visualize data streams on plot.
* [reversegear](https://github.com/linklayer/reversegear) - Offline Reverse Engineering Tools for Automotive Networks.
* 🔝[CANalyzat0r](https://github.com/schutzwerk/CANalyzat0r) - Security analysis toolkit for proprietary car protocols.
* 🔝[CANToolz](https://github.com/CANToolz/CANToolz) - Black-box CAN network analysis framework.
* [GVRET](https://github.com/collin80/GVRET) - Generalized Electric Vehicle Reverse Engineering Tool (Arduino FW).

### Test equipment and simulators

* [ECU-simulator](https://github.com/lbenthins/ecu-simulator) - Tool that simulates some vehicle diagnostic services. It can be used to test OBD-II dongles or tester tools that support the UDS (ISO 14229) and ISO-TP (ISO 15765-2) protocols.
* [ELM327-emulator](https://github.com/Ircama/ELM327-emulator) - ELM327 Emulator for testing software interfacing OBDII via ELM327 adapter supporting multi-ECU simulation.

### Protocols

#### OBD-II tools

* [DDT4All](https://github.com/cedricp/ddt4all) - Tool to create your own ECU parameters screens and connect to a CAN network with a cheap ELM327 interface.
* [ELM327SLCAN](https://github.com/qnx425/ELM327SLCAN) - ELM327 based vehicle's CAN bus sniffer.
* [Arduino-OBD2-Async](https://github.com/v-ivanyshyn/Arduino-OBD2-Async) - Arduino OBD library with asynchronous data requesting.
* [CAN-Shark](https://github.com/quantyle/CAN-Shark) - Working with OBD PIDs from Arduino + MCP2515 shield.
* [OBD2-Scantool](https://github.com/AustinMurphy/OBD2-Scantool) - A python scantool to read OBD2 info from cars.
* [O2OO](https://www.vanheusden.com/O2OO/) - OBD-II compliant car diagnostic tool. It reads sensor data from a car into an sqlite database.
* [freediag](https://github.com/fenugrec/freediag) - Free diagnostic software for OBD-II compliant motor vehicles.
* [pyvit](https://github.com/linklayer/pyvit) - Python Vehicle Interface Toolkit _(archived)_.

#### UDS

_ISO 14229 Standard_

* [python-UDSonCAN](https://github.com/pylessard/python-udsoncan) - Python implementation of UDS ISO-14229 standard.
* [uds-c](https://github.com/openxc/uds-c) - Unified Diagnostics Service (UDS) and OBD-II C Library.
* [iso14229](https://github.com/driftregion/iso14229) - C implementation of UDS ISO-14229 server and client for embedded systems.

#### ISO-TP

_ISO 15765-2 Standard_

* [isotp-c](https://github.com/openxc/isotp-c) - An implementation of the ISO-TP (ISO15765-2) CAN protocol in C.
* [python-can-IsoTP](https://github.com/pylessard/python-can-isotp) - Python implementation of the ISO-TP (ISO15765-2) CAN protocol.
* [CanTp](https://github.com/Sauci/CanTp) - Implementation of the CanTp module (ISO 15765-2), according to AUTOSAR specification v4.4.0.
* [aioisotp](https://github.com/christiansandberg/aioisotp) - ISO-TP implemenation for asyncio Python.

#### J1939 Tools

_SAE J1939 Standard_

* [J1939-CANBUS](https://github.com/taha842/J1939-CANBUS) - Supported Engines CAT, Perkins, Wartsalla, MTU, VOLVO.
* [J1939-Framework](https://github.com/famez/J1939-Framework) - Framework to work with J1939 Frames used in CAN bus in bus, car and trucks industries.
* [python-j1939](https://github.com/milhead2/python-j1939) - SAE J1939 support dependent on python-can package. Provides codec and filtering by PGN but not full SPN decoding.
* [can-utils with J1939 support](https://github.com/kurt-vd/can-utils/tree/j1939-v6) - Fork of can-utils with a few additional tools for J1939.
* [test-can-j1939](https://github.com/kurt-vd/test-can-j1939) - How to use CAN J1939 on linux.
* [libj1939](https://github.com/paoloteti/libj1939) - Library to work with J1939 Frames (intended to be used in microcontrollers).
* [Pretty-J1939](https://github.com/nmfta-repo/pretty\_j1939) - Python libs and scripts for pretty-printing J1939 logs.
* [TruckDevil](https://github.com/LittleBlondeDevil/TruckDevil) - A tool and framework for interacting with and assessing ECUs that use J1939 for communications on the CANBUS.
* [python-can-j1939](https://github.com/juergenH87/python-can-j1939) - Package provides SAE J1939 support for Python developers.
* [Open-SAE-J1939](https://github.com/DanielMartensson/Open-SAE-J1939) - SAE J1939 protocol free to use for embedded systems or PC with CAN-bus.

#### J2534 Tools

_SAE J2534 Standard_

* [~~JCanalog~~](https://github.com/ZacharyWalsh57/JCanalog) - ~~Easy To Use J2534 Vehicle Logger~~ _(left for history)_.
* [j2534-tcp](https://github.com/brandonros/j2534-tcp) - Virtual J2534 driver over TCP/IP.
* [SharpWrap2534](https://github.com/MEAT-Inc/SharpWrap2534) - The Ultimate J2534 Wrapper Suite.
* [gocanflasher](https://github.com/roffe/gocanflasher) - Trionic 5/7/8 CANbus flasher with J2534 support.

### Utils

#### Common

* 🔝[cantools](https://github.com/mwkpe/cantools) - Collection of CLI tools for the CAN bus network.
* [BUSMASTER](https://github.com/rbei-etas/busmaster) - An Open Source Software tool to simulate, analyze and test data bus systems such as CAN.
* [signalbroker-server](https://github.com/AleksandarFilipov/signalbroker-server) - Tool to read and write CAN/LIN/flexray and other buses using gRPC which allows usage of preferred language.
* [CANiBUS](https://github.com/Hive13/CANiBUS/) - CAN Device Vehicle Research Server (OpenGarages.org).

#### Linux related

* 🔝[Linux CAN Utils](https://github.com/linux-can/can-utils) - Linux-CAN / SocketCAN user space useful utils.
* [CAN support in Linux](https://elinux.org/CAN\_Bus#CAN\_Support\_in\_Linux) - Linux kernel support for CAN hardware interfaces.
* [SocketCAN](https://docs.kernel.org/networking/can.html) - Linux kernel support (kernel >= 2.6).
* [J1939](https://docs.kernel.org/networking/j1939.html) - Linux kernel support (kernel >= 5.4) also see [can-j1939 kernel module](https://github.com/linux-can/can-utils/blob/master/can-j1939-install-kernel-module.md).
* [elmcan](https://github.com/norly/elmcan) - Linux SocketCAN kernel driver for ELM327 based devices (kernel >= 6.0).
* [can-isotp](https://github.com/hartkopp/can-isotp) - Linux Kernel Module for ISO 15765-2:2016 CAN transport protocol (part of the Linux kernel >= 5.10).
* [gs\_usb](https://github.com/ryedwards/gs\_usb) - Linux/Windows CAN driver based on WCID for Geschwister Schneider USB/CAN devices and candleLight USB CAN interfaces.

#### GUI Tools

* [CANdevStudio from GENIVI](https://github.com/GENIVI/CANdevStudio) - CAN simulation software using a drag-and-drop style GUI with interconnected functional blocks.
* [CANAL-View](https://github.com/rusoku/CANAL-View) - Qt GUI for TouCAN USB to CAN bus converter.
* [wxCAN-Sniffer](https://github.com/KruFFT/wxCAN-Sniffer) - CAN bus sniffer (PC side) with animation and chart.
* [CANLogger](https://github.com/olegel/CANLogger) - CAN bus logger and analyzer tool.
* [Seeeed-USB-CAN-Analyzer](https://github.com/SeeedDocument/USB-CAN-Analyzer/) - Closed source binary for noname Chinese USB-CAN adapter.
* [CANtact-app](https://github.com/linklayer/cantact-app) - Desktop application for CANtact hardware interface.
* [SavvyCAN](https://github.com/collin80/SavvyCAN) - Cross-platform Qt based GUI analysis tool. Supports SocketCAN compatible interfaces.
* [openCanSuite](https://github.com/sebi2k1/openCanSuite) - Set of tools for analyzing, simulating and visualizing a CAN system.
* [Plotter and Scanner from SmartGauges](https://github.com/smartgauges/obd2-bt-stm32/tree/master/qt) - Scanning and visualizing tool for automotive systems.
* [ICSim](https://github.com/zombieCraig/ICSim) - Instrument Cluster Simulator for SocketCAN by OpenGarages.
* [CANgaroo](https://github.com/HubertD/cangaroo) - Qt-based CAN bus analyzer software.
* [CAN-X](https://github.com/karlyamashita/CAN-X) - C# CAN bus analyzer software.
* [CAN-Monitor-qt](https://github.com/tixiv/CAN-Monitor-qt) - Universal CAN bus monitoring program.
* [CANBUS-Analyzer](https://github.com/amund7/CANBUS-Analyzer) - Development tool/companion software for graphs, displays and analyzes both known and unknown CANBUS packets.
* [SLSS-CANAnalyser](https://github.com/SeppHansen/SLSS-CANAnalyser) - SLSS CANAnalyser is Windows CAN-Bus-Analysis-Software to show, record and evaluate CAN-Bus signals.
* [TSMaster](https://github.com/TOSUN-Shanghai/TSMaster) - Powerful open environment for automotive bus monitoring, simulation, testing, diagnostics, calibration and so on _(Closed source)_.
* [CAN++](https://github.com/TDahlmann/canpp) - Windows program for receiving and transmitting CAN bus messages. After import of CAN data base files (`*.dbc` or `*.kcd`) CAN signals are shown in symbolic form. In addition they can be shown as graphics (wave forms).
* [CANcool](https://github.com/MHS-Elektronik/CANcool) - CAN bus Analyser and Simulation Software with CAN-FD support.
* [Kayak](https://github.com/dschanoeh/Kayak) - Java-based CAN traffic GUI analysis tool _(archived)_.
* [PlotJuggler](https://github.com/facontidavide/PlotJuggler) - The Powerful Time Series Visualization Tool (With panda hardware, cabana and plotjuggler, you can quickly RE the entire car in a few days).
* [PlotJuggler::CAN-dbs](https://github.com/PlotJuggler/plotjuggler-CAN-dbs) - Plugin to visualize CAN .dbs (or .dbc?) files in PlotJuggler.
* [OpenSourceLogger](https://github.com/DanielMartensson/OpenSourceLogger) - Data acquisition software that can collect measurement, analyze CAN-messages and send SAE-J1939 messages to other ECUs.

#### Python Tools

* 🔝[cantools](https://github.com/cantools/cantools) - CAN BUS tools in Python.
* 🔝[python-can](https://github.com/hardbyte/python-can) - CAN package provides controller area network support for Python developers.

#### CAN-over-IP

* [cannelloni](https://github.com/mguentner/cannelloni) - SocketCAN over Ethernet tunnel.
* [tincan](https://github.com/mwkpe/tincan) - Visualization of CAN bus traffic via UDP interface.
* [pican](https://github.com/ovravna/pican) - TCP CAN reader.
* [canny](https://github.com/m10k/canny) - Simple CAN-over-IP gateway.

#### Other Utils

* [Seeeed-USB-CAN-Linux](https://github.com/alexmohr/usb-can) - CLI Linux Support for noname Chinese USB-CAN adapter.
* [opendlv-device-can-replay](https://github.com/chalmers-revere/opendlv-device-can-replay) - OpenDLV Microservice to replay captured CAN frames to a CAN interface.
* [c0f](https://github.com/zombieCraig/c0f/) - CAN bus fingerprinting tool is designed to analyze CAN bus traffic and fingerprint the Maker and Model.
* [canqv](https://github.com/kurt-vd/canqv) - Quick CAN frame inspection using CAN\_RAW.
* [Candle.NET](https://github.com/elliotwoods/Candle.NET) - .NET wrapper for the Candle API for candlelight CAN bus gateways/analysers (e.g. CANable, CANtact, etc).
* [canSerializer](https://github.com/zainahm3d/canSerializer) - Lib for serializing and deserializing CAN frames for transmission over a non CAN transport layer (Can be used to transport CAN frames over UART, SPI, etc).

#### Libraries

* [libwecan](https://github.com/nisennenmondai/libwecan) - Header only lib to encode and decode CAN signal.
* [VCAN](https://github.com/TheMatjaz/VCAN) - A tiny virtual CAN and CAN-FD bus library in C.
* [IMCTFD](https://github.com/tonton81/IMCTFD) - Improved Microchip CAN Teensy FlexData Library MCP2517FD.
* [go-socketcan](https://github.com/linklayer/go-socketcan) - Golang library for SocketCAN.
* [Qt CAN Bus](https://doc.qt.io/qt-5/qtcanbus-backends.html) - A multiplatform C++ plugin based library with support for various CAN Devices (SocketCAN, Sys Tec, PEAK, Virtual).
* [JavaCAN](https://github.com/pschichtel/JavaCAN) - A Java binding library for SocketCAN with support for RAW, BCM and ISO-TP sockets using epoll-based event-driven IO.
* [iso15765-canbus](https://github.com/devcoons/iso15765-canbus) - Implementation of ISO15765-2 in C.

#### Examples

* [CAN-Examples](https://github.com/craigpeacock/CAN-Examples) - Example C code for CAN Sockets on Linux.
* [socketcan-demo](https://github.com/zhanglongqi/socketcan-demo) - Set of example programs which highlight how to make use of SocketCAN on Linux.

### CAN Database

#### Formats (DBC, KCD)

**DBC**

DBC - The de facto standard for CAN databases is the DBC file format developed by Vector Informatik GmbH. It is a proprietary format in that no official public documentation or specification is available.

* [DBC Format Specification v1.0](http://read.pudn.com/downloads766/ebook/3041455/DBC\_File\_Format\_Documentation.pdf) - Leaked DBC file format specification v1.0 (the obsolete specification).
* [DBC Format](http://socialledge.com/sjsu/index.php/DBC\_Format) - Brief explanations about various sections, many examples and explains multiplexed signals well.
* [DBC File Explained](https://www.csselectronics.com/screen/page/can-dbc-file-database-intro/language/en) - A Simple Intro to DCB file format.
* [J1939 and DBC introduction](https://www.kvaser.com/developer-blog/an-introduction-j1939-and-dbc-files/) - An Introduction to J1939 and DBC files.
* 🔝[cabana](https://github.com/commaai/cabana) - CAN visualizer and DBC maker (a tool developed to view raw CAN data; one use for this is creating and editing CAN Dictionaries (DBC files)).

**KCD**

* [KCD](https://github.com/julietkilo/kcd) - An open format to describe communication relationships in CAN. similar to DBC format but written in XML.

#### Converters and Parsers

* 🔝[cantools by Erik Moqvist](https://github.com/eerimoq/cantools) - CAN tools in python for DBC, KCD, SYM, ARXML 4 and CDD file parsing.
* [cantools by Andreas Heitmann](https://github.com/aheit/cantools) - A set of libraries and command line tools for handling ASC, BLF, CLG, VSB, MDF, and DBC files.
* [CanDB](https://github.com/skysky97/Candb) - Generate CAN dbc file with OEM defined CAN matrix (xls).
* [canmatrix](https://github.com/ebroecker/canmatrix) - Converting CAN Database Formats .arxml .dbc .dbf .kcd.
* [CANBabel](https://github.com/julietkilo/CANBabel) - Translator for several CAN description formats (supports KCD r/w and DBC read).
* [can4python](https://github.com/caran/can4python) - A useful package for showing the contents of KCD files (also those converted from DBC files).

#### DBC only

* [Vector DBC](https://bitbucket.org/tobylorenz/vector\_dbc) - Library to access CAN Databases (aka CANdb, aka DBC files) from Vector Informatik.
* [dbcppp](https://github.com/xR3b0rn/dbcppp) - C/C++ DBC file parser/tool.
* [can\_decoder](https://github.com/CSS-Electronics/can\_decoder) - API module for decoding raw CAN bus data to physical values using a DBC CAN database.
* [CANdb from GENIVI](https://github.com/GENIVI/CANdb) - Library for parsing DBC - CAN bus database description formats.
* [dbc-parser](https://github.com/msalau/dbc-parser) - A Flex/Bison/Lemon parser/scanner for DBC files.
* [Vector CANdb++ DBC file parser](https://github.com/kdschlosser/vector\_dbc) - Modified version of the dbc file parser of eerimoq.
* [dbc\_reader](https://github.com/autti/dbc\_reader) - Virtual can bus reader from dbc file (python).
* [CAN\_BUS\_DBC\_VIEWER](https://github.com/akshaych92/CAN\_BUS\_DBC\_VIEWER) - GUI based CAN bus dbc viewer.
* [dbcview](https://github.com/driftregion/dbcview) - DBC visualization tool - plots a graph of sending and receiving nodes linked by messages.
* [VectorDbcChecker](https://github.com/Golyshkin/VectorDbcChecker) - Vector DBC Checker a Python GUI application for checking DBC files for messages duplication, missed network nodes, signals overlap in message, etc.
* [pydbc](https://github.com/Sauci/pydbc) - AST generator for dbc format.
* [pydbc](https://github.com/christoph2/pydbc) - Process vehicle network descriptions (CAN .dbc files).

### Hardware

All kind of HW like CAN bus USB2CAN dongles, loggers, sniffers, adapters, etc.

#### ARM

* [USB\_CAN-FD on ATSAME51](https://github.com/RudolphRiedel/USB\_CAN-FD) - This is an Open Source Hardware USB to CAN-FD Interface (ATSAME51J).
* [SuperCAN](https://github.com/jgressmann/supercan) - An open source USB to CAN-FD protocol firmware (ATSAME51).
* [FlexCAN](https://github.com/collin80/FlexCAN\_Library) - Arduino library for CAN on Teensy 3.1, 3.2, 3.5, and 3.6.
* [ELM327](https://github.com/ObdDiag-Net/allpro) - Open-source ELM327 OBD adapter based on LPC1517JDB48.
* [Open-OBD2-datalogger](https://github.com/arturlangner/Open-OBD2-datalogger) - NXP Kinetis E datalogger that saves live engine data to SD card (Visualization is done with HTML5 and JavaScript).
* [CANBootloader](https://github.com/596142041/CANBootloader-Qt) - GUI + CAN booloader protocol.

**STM32**

* 🔝[panda](https://github.com/commaai/panda) - It supports 3x CAN, 2x LIN, and 1x GMLAN (and it has J2534 over USB on host side). It uses an STM32F413 (Using a panda with cabana provides the best RE and development suites for CANBUS).
* 🔝[STM32duino\_CAN\_Library](https://github.com/adamczykpiotr/STM32duino\_CAN\_Library) - CanBus library for STM32F103 running on STM32duino.
* 🔝[pcan\_pro\_x](https://github.com/moonglow/pcan\_pro\_x) - PEAK PCAN PRO/PRO FD firmware for STM32F4 based boards.
* [CANnon](https://github.com/mxcd/CANnon) - A versatile CAN bootloader for the STM32 and friends.
* [hadoucan-fw on STM32H750](https://github.com/suburbanembedded/hadoucan-fw) - Firmware for SM-1301 USB-CAN FD adapter based on.
* [CANCAN](https://github.com/DDolphin/CANCAN) - CAN recorder based on STM32F407ZGTx.
* [stm32-CAN-bus-example-HAL-API](https://github.com/timsonater/stm32-CAN-bus-example-HAL-API) - A simple example of CAN bus communications between two STM32 microcontrollers using the updated HAL API functions.
* [CAN-to-USB-lawicel-for-stm32](https://github.com/kolyandex/CAN-to-USB-lawicel-for-stm32) - CAN to USB adapter using Lawicel/Canhacker protocol based on STM32F103.
* [stm32-slcan](https://github.com/walmis/stm32-slcan) - SLCAN compatible firmware for BluePill based on STM32f103C8T6.
* [cantact-pro-hw](https://github.com/linklayer/cantact-pro-hw) - Hardware for the CANtact Pro, use [cantact-pro-fw](https://github.com/linklayer/cantact-pro-fw) as firmware.
* [STM32-CAN-Busadapter](https://github.com/IvanDev2018/STM32-CAN-Busadapter) - CAN adapter on MCU stm32f303cb.
* [Ethernet-CAN converter](https://github.com/MikhailBerezhanov/cncu-01) - Based on STM32F407.
* [CANBUS\_UART](https://github.com/Oktay97/Canbus\_Uart) - CANBUS to UART for STM32F1 (BluePill and Nucleo boards).
* [Arduino-STM32-CAN](https://github.com/nopnop2002/Arduino-STM32-CAN) - Can communication example for Arduino Core STM32.
* [eXoCAN](https://github.com/exothink/eXoCAN) - CAN Library for the STM32F103 aka Blue Pill.
* [CAN-BUS-Man-In-The-Middle](https://github.com/damienmaguire/CAN-BUS-Man-In-The-Middle) - Dual CAN MitM-device based on STM32F105.
* [CAN-Bus-Arduino\_Core\_STM32](https://github.com/seeers/CAN-Bus-Arduino\_Core\_STM32/blob/master/CanLowlevel.ino) - Lowlevel CanBUS Example for Arduino Core STM32.
* [BudgetCANv2](https://github.com/ryedwards/budgetcan\_fw) - FW for use on STM32 microcontroller to implement FDCAN and USB using the STM32 HAL. Tested on [BudgetCANv2-HW](https://github.com/ryedwards/BUDGETCANFD\_G0-Hardware).
* [CanDybugFW](https://github.com/IntergatedCircuits/CanDybugFW) - Embedded firmware of the CanDybug, a CAN bus traffic analyzer which uses a custom protocol over a USB serial port emulation (STM32F302/STM32F042).
* [CAN-USB-dongle-fw](https://github.com/cvra/CAN-USB-dongle-fw) - A slcan firmware for the CVRA CAN to USB dongle (STM32F302).
* [zubax\_babel](https://github.com/Zubax/zubax\_babel) - High performance CAN-USB/CAN-UART adapter + UAVCAN devboard (STM32F37x).
* [CAN-RS485-adapter](https://github.com/YuriyLogvin/CAN-RS485-adapter) - CAN-RS485 Adapter (STM32F103).
* [vector\_can](https://github.com/moonglow/vector\_can) - Vector VN1610 protocol implementation for cheap STM32F407/405 hardware (Two CAN channel).
* [CAN\_OMEGA](https://github.com/zjlywjh001/CAN\_OMEGA) - Ultimate CAN Bus hardware for Car hacking based on STM32F411. Full Featured [firmware](https://github.com/zjlywjh001/CAN\_Omega\_Firmware) & [software](https://github.com/zjlywjh001/CAN\_OMEGA\_Tools).

**STM32F0x2 based HW**

* [candleLight\_fw](https://github.com/candle-usb/candleLight\_fw) - Compatible firmware for candleLight, cantact, canable, CANAlyze, VulCAN.
* [CANsniffer on STM32F042](https://github.com/majbthrd/CANsniffer) - CANbus sniffer less complicated than existing commercial products.
* [candleLight](https://github.com/HubertD/candleLight) - KiCAD project of usb-can adapter based on STM32F0.
* [cantact-hw](https://github.com/linklayer/cantact-hw) - Hardware design files for the CANtact tool, use [cantact-fw](https://github.com/linklayer/cantact-fw) as firmware source.
* [cantact](https://github.com/linklayer/cantact/) - Drivers and Command Line Interface for CANtact tools.
* [USB2CAN](https://github.com/roboterclubaachen/usb2can) - Compact and isolated USB-to-CAN Adapter.
* [CANAlyze](https://kkuchera.github.io/canalyze/) - An open source, native CAN interface for Linux that can be built entirely using open source tools, use [canalyze-fw](https://github.com/kkuchera/canalyze-fw) as firmware source.
* [Cantact FW](https://github.com/x893/cantact-fw) - Cantact FirmWare by x893.
* [ELM329](https://github.com/ObdDiag-Net/elm329) - Open-source ELM329 OBD adapter based on STM32F042.
* [OBD2CAN](https://github.com/autosportlabs/OBD2CAN) - Bridge between any OBD2 compliant vehicle and the CAN bus interface (firmware is targeted for the STM32F072, and uses ChibiOS as a RTOS).
* [pcan\_cantact](https://github.com/moonglow/pcan\_cantact) - XCAN firmware for CANtact ( CANable ) or any other similar boards based on STM32F042.
* [kvaser\_cantact](https://github.com/moonglow/kvaser\_cantact) - Xvaser LL v2 firmware for CANtact/CANable or any other similar boards based on STM32F042.

#### Arduino

* 🔝[arduino-canhacker](https://github.com/autowp/arduino-canhacker) - CanHacker (lawicel) CAN adapter on Arduino + MCP2515.
* [open-usb-can from Fabio Baltieri](https://github.com/fabiobaltieri/open-usb-can) - CAN-to-USB dongle based on ATMega32U and MCP2515.
* [Arduino-CAN-bus-SD-logger](https://github.com/DieselDuz42/Arduino-CAN-bus-SD-logger) - Arduino script to log CAN bus information to SD card. Mainly focused on J1939.
* [Arduino-canbus-monitor](https://github.com/latonita/arduino-canbus-monitor) - Can bus monitoring tool based on arduino and can bus shield. Implements CAN ASCII/SLCAN protocol compatible with Lawicel CAN232/CANUSB.
* [Arduino-psa-comfort-can-adapter](https://github.com/ludwig-v/arduino-psa-comfort-can-adapter) - Arduino sketch to operate new PSA (Peugeot, Citroen, DS, Opel) comfort devices (CAN2010) on old BSI CAN-BUS (CAN2004).
* [epasuino](https://github.com/srenner/epasuino) - Arduino based Speed sensitive electric power steering for automobiles Speed sensitive electric power steering for automobiles.
* [carfuino](https://github.com/srenner/carfuino) - Arduino based Automotive performance computer with Megasquirt integration.
* [W203-canbus](https://github.com/rnd-ash/W203-canbus) - Arduino project for W211/W219 W203/W209 Mercedes (bluetooth audio control and more).
* [CANBus-Triple](https://github.com/CANBus-Triple/CANBus-Triple-Hardware) - The car hacking platform based on AVR and MCP2515 works with [this firmware](https://github.com/CANBus-Triple/CANBus-Triple).
* [GVRET](https://github.com/collin80/GVRET) - Generalized Electric Vehicle Reverse Engineering Tool (Arduino FW).

#### Espressif Systems (ESP8266, ESP32)

* [ESP-IDF-CANBus-Monitor](https://github.com/nopnop2002/esp-idf-CANBus-Monitor) - Monitor Canbus traffic ESP32.
* [connected-car](https://github.com/marmotton/connected-car) - Connecting a Nissan e-NV200 (or Leaf) to MQTT.
* [PSASteeringWheelAdapter](https://github.com/morcibacsi/PSASteeringWheelAdapter) - ESP32 based steering wheel adapter for Peugeot and Citroen cars.
* [esp32-slcan](https://github.com/mintynet/esp32-slcan) - ESP32 slcan compatible device.
* [esp32s3-slcan](https://github.com/Pacerino/TWAI\_SLCAN) - SLCAN implementation for ESP32-S3 (based on [esp32-slcan](https://github.com/mintynet/esp32-slcan)).

#### SBC

**SBC** - Single Board Computers.

* [beaglebone\_black\_socketcan](https://github.com/BlueAndi/beaglebone\_black\_socketcan) - How to get access to the CAN bus on a BeagleBone Black via socketcan interface.
* [rpi-can-logger](https://github.com/JonnoFTW/rpi-can-logger) - Project to log CAN bus data from a PiCAN2 and a GPS module.
* [CANoPi](https://github.com/SushiBits/CANoPi) - CAN interface for Raspberry Pi Zero.

#### Others HW

* [Michrochip CAN BUS Analyzer on PIC18F2550/PIC18F2680 Firmware](https://github.com/rkollataj/mcba\_firmware) - Michrochip CAN BUS Analyzer firmware.
* [Michrochip CAN BUS Analyzer on PIC18F2550/PIC18F2680 Driver](https://github.com/rkollataj/mcba\_usb) - Linux kernel driver for Microchip CAN BUS Analyzer Tool.
* [BB-to-STM32](https://github.com/mvollrath/canbus\_bbone\_stm32) - LED sync between BeagleBone Black and STM32F4 Discovery Board.
* [elm327\_clone](https://github.com/darkspr1te/elm327\_clone) - ELM327 firmware for pic18f25k80 chip from china clone OBD2.

#### Hardware related tools

* [CAN Bus Bit Timing Calculator](https://www.kvaser.com/support/calculators/bit-timing-calculator/) - Online tool for obsolete SJA1000 and MCP2510 (probably it works for MCP2515).
* [STM8S208 CAN Speed Calculator](https://github.com/iDoka/STM8S208-CAN-Speed-Calculator) - CAN Speed Calculator for STM8 (perhaps it also works for STM32 family).

***

### Contributing

* Your contributions are always welcome! Please read the contribution guidelines first.

### Footnotes

1. Please follow [this](https://github.com/iDoka/awesome-canbus) root-repo for lastest updates.
2. The another awesome list :arrow\_forward: [CAN ID collections](https://github.com/iDoka/awesome-automotive-can-id) :arrow\_backward: also might be useful.
3. Also might be useful [this curated list](https://github.com/iDoka/awesome-linbus) of awesome tools and resources for LIN bus reverse engineering, LIN hardware development and debugging.
