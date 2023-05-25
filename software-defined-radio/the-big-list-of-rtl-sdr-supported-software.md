# The BIG List of RTL-SDR Supported Software

There are now dozens of software defined radio packages that support the ultra cheap [RTL-SDR](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/). On this page we will attempt to list, categorize and provide a brief overview of each software program. We categorize the programs into general purpose software, single purpose software, research software and software compatible with audio piping.

If you know of a program that is missing please leave a comment in the comments section at the bottom of the page.

13/02/2014 - Added Sodira, gr-wmbus, rtlsdr-waterfall, QTRadio, multimon, sdrangelove, lte-scanner, rtl\_tcp, rtl\_sdr\_FS20\_decoder.\
17/02/2014 - Updated the Linrad description.\
28/04/2014 - Added Modesdeco and Trunk88.\
30/05/2014 - Added RTL Panorama, RTL SDR Panoramic Spectrum Analyzer, Chrome Radio Receiver, SeeDeR, DAB Player, RTL SDR Installer, PD/Max Wrapper, SDRWeather, LTR Analyzer, softEOT/softDPU and ScanEyes.\
26/07/2014 - Added PiAware, OOK-Decoder, rtl\_fm\_python, rtl\_power heatmap viewer, RTL Bridge, threejs-spectrum, CANFI Software, PNAIS, FLARM Decoder, Xastir, RTLSDR-Airband, SDRTrunk.\
13/11/2014 - Added Touchstone, RFAnalyzer, RTL1090 XHSI Interface, Parus Decoder, PlotRTL1090, LRPT Decoder.\
05/02/2015 - Added rtl\_tool\_kit, CubicSDR, OregonWeather, FreqWatch.\
15/04/2015 - Added ADSBox, YouSDR, FlightAware Flight Feeder, Frequensea, Track your flight EUROPE, QSpectrumAnalyzer, Doppler & Demod, Redsea, rtl\_heatmap, gr-gsm, driveby, SDRecord.\
23/12/2015 - Added Remote rtl\_udp, AISRec, dump978, AISDeco2, SDRrecorder, OpenWebRX, dsame, RTL-Widespectrum, rtl\_ais, rtl\_gopow, ham2mon, rtl\_ais\_android, inmarsatdecoder, spektrum, qtcsdr, rtl\_power\_fftw, JAERO, GNSS-SDRLIB, SVxLink.\
8/09/2017 - Added inspectrum, gr-isdbt, telive, tetra-listener, gr-iridium, SDRuno, luaradio, rx\_tools, kukuruku, chronolapse, cloud-sdr, natpos, d3-waterfall, SDRDue, gqrx-ghostbox, ships, rtlmic, tsl-sdr, universal radio hacker, dumpvdl2, re-dected, aerial-tv, questasdr, welle.io, spyserver, dspectrumgui, atcsmonitor, NRSC5 HD Radio Decoder, leandvb, imsi-catcher, block stream receiver, salamandra, deinvert, RS.\
6/11/2017 - qradiolink\
15/06/18 - Zeus Radio\
11/01/19 - SCEPTRE\
13/01/20 - VDLM2DEC, Blockstream Satellite, TempestSDR, rtlsdr-wsprd, rtl\_map, Radwave, radiosonde\_auto\_rx, XRIT Decoder, SATNOGS, SigintOS, RadioCapture, EMI\_Mapper, xrit-rx (KOMSAT 2A), RTLion, WSJT-X, noaa-apt, rtlSpectrum, fingerprinting\_radios\_w\_ML, mySdrPlayback, QO-100\_SSB-WebSDR\_DATV-WebSpectrum, goestools, SigDigger, Tekmanoid EGC, Scytale-C, PEPYSCOPE, iridium-toolkit, Electrosense, ORBCOMM-receiver, r2cloud, coole-radar, vor-python-decoder, IridiumLive, radio\_analyser, DSDPlusUI, retrogram-rtlsdr, vortrack, rtl\_power-fm-multipath, glrpt, Spektrum SV Mod, gammaRF, SegDSP, rtl-ultrasound, radiosondy.info, OP25, RS41 Tool, TETRA Trunk Tracker, meteor\_demod, FreqShow, rtl\_tcp SDR, PLSDR, SDR Receiver, Echoes, rtlmm, FM2TXT, cnn-rtlsdr, Meteor Logger.\
04/03/21 - SDR++

### General Purpose RTL-SDR Software

We define general purpose SDR software as programs that allow the RTL-SDR to work like a normal wideband radio receiver.

### [SDR#](http://airspy.com/) (Windows) (Free)



SDR# (pronounced "SDR Sharp") is the most popular free RTL-SDR compatible software in use at the moment.  It is relatively simple to use compared to other SDR software and has a simple set up procedure. We have a full overview of the installation procedure on our [Quick Start Page](https://www.rtl-sdr.com/rtl-sdr-quick-start-guide/). SDR# is designed to be use with the $199 [Airspy](https://www.itead.cc/spyverter.html?acc=cfcd208495d565ef66e7dff9f98764da) SDR, but works just fine with the RTL-SDR.

SDR# is a simple to use program that also has some advanced features. It has a useful modular plugin type architecture, and [many plugins have already been developed](https://www.rtl-sdr.com/sdrsharp-plugins/) by third party developers. The basic SDR# download without any third party plugins includes a standard FFT display and waterfall, a frequency manager, recording plugin and a digital noise reduction plugin. SDR# also decodes RDS signals from broadcast FM.

### [HDSDR](http://www.hdsdr.de/) (Windows) (Free)



HDSDR is based on the old WinRAD SDR program. HDSDR supports the RTL-SDR through use of an ExtIO.dll module. To install HDSDR, download the program from the link on the main HDSDR page, then to use the RTL-SDR you will need to download the ExtIO\_RTL2832.dll file an place it into the HDSDR folder. When opening HDSDR, select the newly copied ExtIO\_RTL2832.dll. The other dlls that come with HDSDR will not work with the RTL-SDR, even though they have RTL-SDR in their filename. The official installation instructions [can be found here](http://hdsdr.de/RTLSDR\_with\_HDSDR.pdf).

Along with a FFT display and waterfall, HDSDR has some extra advanced features. Users will also find an Audio FFT and waterfall display on the bottom of the screen. The output audio can also be bandpass filtered by dragging the filter borders on the display. Bandpass filtering the audio can really help clean up a noisy signal. The audio processing also supports placing of notch filters either manually or automatically. There are also noise reduction and noise blanker features and an automatic frequency centering algorithm which will automatically center the signal, so you don't need to click exactly in the center of a signal. Traditional ham radio users will also enjoy the S-units signal strength meter and the built in frequency manager.

### [SDR-RADIO.COM V2/V3](http://v2.sdr-radio.com/) (Windows) (Free)



SDR-RADIO.COM V2 and the newer V3 is a popular SDR program with many advanced features. As such is it a fair amount more difficult to learn and use compared to SDR# and HDSDR. Be sure you install version 2 and not V1.5 as only V2 has RTL-SDR support.

Once sdr-radio is installed, to get it working with the RTL-SDR you will need to compile or download three .dll files (SDRSourceRTL2832U.dll, rtlsdr.dll and libusb-1.0.dll) and place them into the sdr-radio folder. To compile your own dlls see the [instructions here](http://sdrnuke.wces.net/Support/RTLSDRs/BuildingDlls.aspx), otherwise download the dlls directly from the [bottom of this link](http://www.aa5sh.com/?page\_id=65). If the dlls were placed in the correct folder you will be able to add your RTL-SDR as a receiver by clicking on the +Definitions button, and then finding and adding the RTL SDR (USB) option under the search drop down menu.

Like HDSDR, not only does sdr-radio have a RF FFT signal and waterfall display, but also an optional audio spectrum FFT and waterfall display. Built in are also several DSP features like a noise blanker, noise reduction filter, notch filter and squelch options. The EMNS noise reduction filter is particularly good at automatically cleaning up and clarifying voice signals.

To add to the feature list, sdr-radio also has built in PSK, RTTY and RDS decoders, and also comes with a satellite tracker. Furthermore, sdr-radio V2 (not V3 yet) has an excellent remote server which will allow you to easily set up and connect to a remote RTL-SDR server over a network or the internet. Finally, sdr-radio is capable of listening to up to 6 signals in the same chunk of visible spectrum at a time.

### [SDR++](https://github.com/AlexandreRouma/SDRPlusPlus) (Windows, Linux, OSX, BSD) (Free) ([Related Post](https://www.rtl-sdr.com/sdr-recent-updates-plugins-multi-vfo-multi-platform-native-rtl-sdr-and-more/))



SDR++ is a cross platform opensource general receiver program for various SDRs including the RTL-SDR. As expected from the program name, it is implemented in C++. The GUI is simple to understand and mimics SDR#. The program is in it's beta stages at the time of writing, but it is quickly improving and having features added. Right now it already supports interesting advanced features like multi-VFO and has support for future plugins.

Windows binaries can be found on the [Github Releases page](https://github.com/AlexandreRouma/SDRPlusPlus/releases).

### [Linrad](http://www.sm5bsz.com/linuxdsp/linrad.htm) (Windows/Linux/OSX) (Free) ([Related Post](https://www.rtl-sdr.com/spotlight-linrad/))



Linrad is a free advanced SDR program with a steeper learning curve compared to most other SDR programs. Many users prefer to use Linrad as it can be set up to have a very high amount of information density on the screen and it also has an advantage with receiving signals with the E4000 tuner as it can be made it run in a special linearity mode which significantly improves the dynamic range.

Linrad also has some very advanced features not found in most other SDR receivers. It has multi-frequency interval I/Q correction, a very powerful "smart" noise blanker, multicast output, weak signal optimized waterfall, settings to aid in taking performance measurements, two RF channel input, superior AGC and an adaptable automatic frequency controller (AFC). Linrad is probably the software most superior in terms of actual signal processing performance.

To install Linrad on Windows first download and run the setup-dll installer, and then download and extract the actual Linrad program. You will need to go through a [text based set up](http://www.sm5bsz.com/linuxdsp/usage/newco/newcomer.htm) at the very beginning.

### [GQRX](http://gqrx.dk/) (OSX/Linux) (Free)



GQRX is a free simple to use SDR receiver which runs on Linux and Mac systems. It is similar to SDR# in terms of features and simplicity of use, but does not have plugins. GQRX comes with a standard FFT spectrum and waterfall display and a number of common filter settings.

### [CubicSDR](https://github.com/cjcliffe/CubicSDR) (Linux/Windows/OSX) (Free)

A new cross platform SDR receiver which is based on the liquid-dsp libraries. Fairly mature now, but still a little clunky to use.

### [Studio1](http://www.sdrapplications.it/) (Windows) (Paid)



Studio1 is a non-free commercial SDR receiver with advanced DSP capabilities, and is claimed to have the lowest CPU usage of any general purpose SDR software. Studio1 supports the RTL-SDR through use of an ExtIO.dll module.

Studio1 claims that it has a very efficient DSP engine that can run well on older Pentium 4 machines.

### [SDRUno](http://www.sdrplay.com/windows.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/sdrplay-releases-sdruno-free-sdr-software-for-the-rsp/))

SDRplay have now acquired the rights to Studio1 and have released a free version of it called SDRUno. SDRUno is designed mostly for use with their SDRplay units, but they have also added compatibility with RTL-SDR units.

A fairly feature rich piece of software, although the interface can be a bit clunky and difficult to use at times. Essentially the same as Studio1, but with continued development focused on SDRplay devices.

### [SigDigger](https://batchdrake.github.io/SigDigger/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/sigdigger-a-graphical-digital-signal-analyzer-for-linux/))



A free SDR receiver program that has a similar UI to GQRX. However, it's main feature is that it is not based on GNU Radio, but rather on a custom DSP library that is designed for use on multi-core CPUs. Also has interesting features like a digital signal inspector.

### [ShinySDR](https://github.com/kpreid/shinysdr) (GNU Radio) (Free) ([Related Post](https://www.rtl-sdr.com/shinysdr-new-sdr-software-package-supports-rtl-sdr/))



ShinySDR is an SDR application built in GNU Radio with a web based interface. Since ShinySDR is controlled via a web interface it can easily be controlled over a network or the internet. It also has a plugin type development feature which allows demodulators to be easily written and integrated.

The current main technical advantage to ShinySDR is that it has a persistent waterfall, meaning that the waterfall can be moved, zoomed and re-tuned without loss of any history like in other SDR software.

### [WebRadio](http://www.mike-stirling.com/redmine/projects/webradio) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-work-in-progress-webradio-software-for-the-rtl-sdr-released/))



WebRadio is a Linux based application that is attempting to build an open source system for the RTL-SDR and other software defined radios similar to the closed source WebSDR . The WebSDR system allows for multiple public users to connect to a radio over the internet and tune to various frequencies. WebRadio is currently functional but still under development.

### [OpenWebRX](https://github.com/simonyiszk/openwebrx) (Python Based) (Free) ([Related Post](https://www.rtl-sdr.com/openwebrx-an-multi-user-rtl-sdr-receiver-with-web-interface/))

A web based server and interface for remotely accessing RTL-SDRs. Seems to be more developed and active than WebRadio. There is an active list of OpenWebRX receivers listed at [sdr.hu](http://sdr.hu/). Note that OpenWebRX is now discontinued in terms of future development, but the code is open source, and other branches exist.



### [Sodira](http://www.dsp4swls.de/sodira/sodiraeng.html) (Windows) (Trial/Paid)&#x20;



Sodira is a Windows application that is capable of decoding AM and FM+RDS radio as well as DRM/DRM+ and time signals DCF77/HBG. It supports the use of the RTL-SDR through use of the ExtIO\_RTL2832.dll module. The same ExtIO\_RTL2832.dll module that is used with HDSDR and whose download is linked to in [this HDSDR tutorial](http://hdsdr.de/RTLSDR\_with\_HDSDR.pdf) can be used with Sodira. Just place the dll in the same folder as Sodira, and then under Configuration->Receiver select the dll file and then click on HW Init + Start to activate the RTL-SDR.

### [SDR Touch](https://play.google.com/store/apps/details?id=marto.androsdr2\&hl=en) (Android) ([Kindle](https://amzn.to/2KLuhAv)) (Trial/Paid) ([Related Post](https://www.rtl-sdr.com/sdr-touch-brings-rtl-sdr-to-android/))



SDRTouch was the first Android based RTL-SDR software receiver available. There is a free restricted trial version and the full version can be bought from the Google Play store. To run SDR Touch you need a modern Android 4.0+ device with decent processing power and USB OTG support. You will also need a USB OTG cable to connect to the Android device to an RTL-SDR dongle.

SDR Touch has several standard features such as FFT spectrum and waterfall displays, WFM/FM/AM/SSB tuning and a frequency manager.

Also available on Kindle devices via [the Amazon store](https://amzn.to/2KLuhAv).

### [Wavesink Plus](https://play.google.com/store/apps/details?id=de.ses.wavesink\&hl=en) (Android) (Trial/Paid) ([Related Post](https://www.rtl-sdr.com/wavesink-new-android-rtl-sdr-app-fmrdsdabdrm/))



Wavesink Plus is another Android based RTL-SDR receiver with a free trial and paid full version. Wavesinks main feature is that it is capable of decoding DAB+ and DRM+ digital radio signals. As well as the digital radio signals, it can also receive standard FM and do FM-RDS decoding as well. To use Wavesink, like SDR Touch you will need a decently powerful Android 4.0+ device with USB OTG cable.

### [RFAnalyzer](https://play.google.com/store/apps/details?id=com.mantz\_it.rfanalyzer) (Android) (Free/Paid)

### [![rfanalyzer](https://www.rtl-sdr.com/wp-content/uploads/2014/11/rfanalyzer-500x333.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2014/11/rfanalyzer.jpg)&#x20;

Android app similar to SDR Touch. Originally for the HackRF, but now also supports the RTL-SDR. Still under heavy development. Available for a small price on the Google Play store, or for free from the [GitHub](https://github.com/demantz/RFAnalyzer).

### [cuSDR](http://openhpsdr.org/download.php) (Windows) (Free)



An SDR receiver intended for use with the HPSDR project SDR hardware, but can be used with the RTL-SDR through use of the [RTL\_HPSDR](https://www.rtl-sdr.com/rtl\_hpsdr-rtl-sdr-hpsdr-translation-server/) translation server program. One advantage to cuSDR is that it can support up to seven simultaneous RTL-SDR dongles. cuSDR is still currently under development.

### [PowerSDR](http://www.flex-radio.com/Products.aspx?topic=powersdr1x) (Windows) (Free)



PowerSDR is an SDR receiver intended for use with the FlexRadio SDR hardware. It is compatible with the RTL-SDR through use of the [RTL\_HPSDR](https://www.rtl-sdr.com/rtl\_hpsdr-rtl-sdr-hpsdr-translation-server/) translation server program. PowerSDR is capable of supporting up to four simultaneous RTL-SDR dongles.

### [QtRadio](http://napan.ca/ghpsdr3/index.php/RTL-SDR) (Windows/Linux) (Free)



QtRadio is an open source SDR receiver that is based on a client-server architecture from the ground up. It is designed so that multiple clients can connect to a single server. QtRadio comes with a special RTL-SDR server which you will need to download and run.

### [Multimode](https://www.cgran.org/browser/projects/multimode/trunk) (GNU Radio) (Free)

A simple GNU Radio based "multi mode" receiver which can receive AM, FM, SSB, WFM, and TV-FM.

### [Sdrangelove](http://sdr.osmocom.org/trac/wiki/sdrangelove) (Linux) (Free)



Sdrangelove is an SDR receiver primarily designed for the OsmoSDR hardware but also supports the RTL-SDR.

### [Kukuruku](https://brmlab.cz/user/jenda/kukuruku) (Browser Based) (Free) ([Related Post](https://www.rtl-sdr.com/kukuruku-a-new-sdr-client-that-supports-rtl-sdr/))



A browser based SDR client. Is efficient because it only sends the filtered narrowband channels and the waterfall pixels instead of the entire IQ data. Has some other intteresting features too like multiple demodulators, history browsing, pluggable demodulators, improved squelch, histogram, autotune and scanning features.

It seems that the server is Python based and the server runs on Linux.

### [Natpos](http://www.ecstaticlyrics.com/radio/sdr/natpos/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/natpos-new-linux-sdr-software/))



Another RTL-SDR compatible general purpose receiver program and this one runs via an rtl\_tcp connection. Mostly seems to be a proof of concept. Have some interesting features though, like waterfall history replay.

### [QuestaSDR](http://sdr-labs.com/) (Windows/Android) (Free) ([Related Post](https://www.rtl-sdr.com/unosdr-new-multi-mode-rtl-sdr-compatible-receiver-program/))



Another simple multi-mode general purpose receiver. Previously known as UnoSDR (not to be confused with SDRUno).

### [QIRX SDR](http://softsyst.com/QIRX/qirx) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/qirx-sdr-a-new-multimode-rtl-sdr-program-with-built-in-dab-decoder/))



A simple C# based multimode decoder. One interesting feature is that is contains a built in DAB+ demodulator.

### [Zeus Radio](https://www.hfrelectronics.com/en/zeus-radio/) (Windows/Linux)(Paid)

A general purpose receiver like the others, but has transmit capabilities to for capable radios. Works with various radios like the ZS-1, Hermes, HIQSDR, Odysset, as well as ExtIO radios like the RTL-SDR. Is one of the few paid options, and costs 2000 RUR (\~32 USD) for the RX only version, and 6000 RUR (\~96 USD) for the version with transmit capabilities. The trial version allows you to use the software for 10 minutes at a time.



### [QO-100\_SSB-WebSDR\_DATV-WebSpectrum](https://github.com/dj0abr/QO-100\_SSB-WebSDR\_DATV-WebSpectrum) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/an-rtl-sdr-sdrplay-based-websdr-designed-specifically-for-qo-100-eshail-2-monitoring/))

Custom WebSDR software specifically for monitoring Es'Hail-2 with an RTL-SDR or SDRplay.



### [PLSDR](https://arachnoid.com/PLSDR/) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/plsdr-a-python-based-sdr-app-with-rtl-sdr-support/))

A multimode Python based receiver compatible with RTL-SDRs.

### Single Purpose RTL-SDR Software

Here we list single purpose RTL-SDR supported software. By single purpose we mean an application that decodes a single protocol, or performs a single function.

### [RTL SDR Installer](https://www.rtl-sdr.com/forum/viewtopic.php?f=1\&t=74) (Windows) (Free)

A script that can be used to aid in installing the RTL-SDR. Works on XP and abov

### [RTL\_FM](http://kmkeen.com/rtl-demod-guide/index.html) (Windows/Linux) (Free)

RTL\_FM is a command line based FM receiver for the RTL-SDR which is bundled in the official RTL-SDR release. It is extremely useful in Linux as it can be used to pipe decoded FM audio to decoder software.

### [SoftFM](https://github.com/jorisvr/SoftFM) (Linux) (Free)

SoftFM is a command line FM receiver for the RTL-SDR that is similar to RTL\_FM. The difference is that SoftFM claims to get much better audio results compared to RTL\_FM.

### [RTL\_UDP](https://github.com/sysrun/rtl-sdr) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_udp-port-rtl\_fm-udp-controls/))

RTL\_UDP is a modification of RTL\_FM which allows FM audio to be broadcast over a network or the internet via UDP.

### [Remote RTL\_UDP](http://michelinok76.blogspot.it/2015/04/how-to-configure-your-raspberrypi-or-pc.html) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/remote-rtl\_udp-rtl-sdr-remote-control-android-app/))

Allows you to control a rtl\_udp server via an Android app.



### [RTL\_TCP](http://sdr.osmocom.org/trac/wiki/rtl-sdr) (Windows/Linux) (Free)

RTL\_TCP is used to stream IQ data from the RTL-SDR over a TCP network. Many programs can connect to this, for example in SDR# there is the RTL-SDR/TCP option.

### [SpyServer](http://airspy.com/download/) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/spyserver-2-0-released-efficient-streaming-airspy-rtl-sdr/))

An efficient alternative to rtl\_tcp. Designed for the Airspy, but also made compatible with the RTL-SDR. Unlike rtl\_tcp which streams the entire IQ bandwidth, SpyServer only streams the IQ data of the currently selected IF bandwidth in SDR#. The waterfall is compressed and sent as efficient data as well.

The only downsides are that it only works with SDR# at the moment, and the server needs more powerful computing hardware as the computations are all performed server side.

### [RTL\_FM\_PYTHON](https://github.com/th0ma5w/rtl\_fm\_python) (Windows/Mac/Linux) (Free)



A Python program based on rtl\_fm that allows you to tune to any station using a web interface.

### [RX\_Tools](https://medium.com/@rxseger/rx-tools-command-line-sdr-tools-for-rtl-sdr-bladerf-hackrf-and-more-rx-fm-rx-sdr-rx-power-2e74f59a9e79#.yo12m6dr3) (Windows/Mac/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rx\_tools-rtl-sdr-command-line-tools-rtl\_power-rtl\_fm-rtl\_sdr-now-compatible-with-almost-any-sdr/))

An SDR independent implementation of rtl\_fm/rtl\_power etc. Uses the SoapySDR abstraction layer.

### [RTLSDR Scanner](http://eartoearoak.com/software/rtlsdr-scanner) (Windows/Linux/Mac) (Free) - Wideband Frequency Scanner



RTLSDR Scanner is a simple cross platform python based wideband spectrum analyzer for the RTL-SDR. It can scan an arbitrarily large frequency bandwidth. The scanner also has an auto calibration feature which can help find the PPM offset of a dongle. Newer versions also have a GPS feature, which allows you to interface a hardware GPS receiver to the software and do signal mapping experiments.

### [RTL-SDR Wide Spectrum Analyzer](http://zolli.altervista.org/rtl\_sdr\_wide\_spectrum/index.html) (Windows) (Free) - Wideband Frequency Scanner



Similar to the RTLSDR scanner but written in the basic for gambas programming language. Essentially a front end for rtl\_power.

### [RTL Panorama](http://sourceforge.net/projects/guiforrtlpower/) (Windows) (Free) - Wideband Frequency Scanner



Another wideband RTL-SDR scanner but based on the command line software rtl\_power. Essentially a GUI interface for rtl\_power. Scans much faster compared to RTLSDR Scanner.

### [Spektrum](https://github.com/pavels/spektrum) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/spektrum-new-rtl-sdr-spectrum-analyzer-software/)) - Wideband Frequency Scanner

Another interface to rtl\_power, but this one has a special relative mode that allows you to make easy SWR and filter measurtements with a noise source.



### [Spektrum SV Mod](https://github.com/SV8ARJ/spektrum) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/spektrum-sv-mod-rtl-sdr-spectrum-analyzer-software-now-with-improved-ui/))

A modification to Spektrum with UI improvements.

### [RTL SDR Panoramic Spectrum Analyzer](https://www.rtl-sdr.com/new-rtl-sdr-panoramic-spectrum-analyzer/) (Windows) (Free) - Wideband Frequency Scanner

Another GUI interface for rtl\_power. Similar in function to RTL Panorama.

### [SDR-J](http://www.sdr-j.tk/index.html) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/sdr-j-decoding-dab-radio-in-software-using-rtl-sdr/)) - DAB



SDR-J is a free program that is split into two different programs. There is the SDR-J DAB/DAB+ receiver program and the SDR-J FM decoder program. The DAB decoder is the most popular of the two. To install the SDR-J DAB receiver go to the SDR-J website and download the dabstick-radio.zip file, unzip it and run dabreceiver.exe. If your RTL-SDR is plugged in you'll be able to click the start button and begin choosing the DAB band in your country using the left drop down box.

### [DAB Player](http://www.ukwtv.de/cms/downloads-aside/281-dab-player-von-andreas-gsinn.html) (Windows) (Free) - DAB



DAB Player is software for listening to DAB radio. It requires use of the official manufacturer RTL2832U drivers.

### [Welle.io](https://www.welle.io/) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/welle-io-new-rtl-sdr-airspy-dab-dab-decoder-available-windowslinux/))



Another DAB/DAB+ decoder, but one with a very nice and professional looking interface.

### [RTL-SDR Radio Receiver for Chrome](https://chrome.google.com/webstore/detail/radio-receiver/miieomcelenidlleokajkghmifldohpo) (Chrome)(Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-radio-receiver-chrome/)) - FM Receiver



An RTL-SDR WBFM receiver app for Chrome. Runs in the Chrome browser and works on Chrome Books too.

### [ADSB#](http://sdrsharp.com/index.php/a-simple-and-cheap-ads-b-receiver-using-rtl-sdr) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Decoder



ADSB# is a Windows Mode S ADS-B decoder for the RTL-SDR written by the author of SDR#. Use this program to broadcast data via TCP/IP locally via TCP to a graphical radar program such as Virtual Radar Server, Planeplotter or adsbSCOPE.

### [RTL1090](http://rtl1090.web99.de/) (Windows) (Free)  ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Decoder



RTL1090 is another Windows Mode S ADS-B decoder for the RTL-SDR. As with ADSB# you need to use this program to broadcast data via TCP/IP to a graphical radar program. The latest installation program known as the RTL1090 IMU simplifies the installation by automatically downloading some required .dll files. The current series 2 beta version aims to improve decoding and also has a built in radar display.

### [dump1090](https://github.com/MalcolmRobb/dump1090) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Decoder

Dump1090 is a lightweight command line Windows and Linux based Mode S ADS-B decoder. It also has a built in web service which can display the decoded aircraft positions on Google maps. Many people report that dump1090 has the best decoding performance.

### [dump978](https://github.com/mutability/dump978) (Windows/Linux) (Free) - UAT Decoder

Decodes UAT, which is similar to ADS-B, but more commonly used by light aircraft.

### [ADSBox](http://diseqc.alh.org.ua/projects/hard/adsb/index.html) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/adsbox-new-ads-b-decoding-software-for-linux/)) - ADS-B Decoder

An ADS-B decoder similar to dump1090, with built in web interface and Google maps interface. Also has a Google Earth interface. Link is in Russian, see the Related Post for extra info about compilation.



### [Modesdeco2](http://xdeco.org/) (Windows/Linux/Mac/RPi) - ADS-B Decoder

A multiplatform command line based ADS-B Mode S and Mode A/C decoder for the RTL-SDR. Can feed Basestation natively without the need for com port converters. Can also decode Mode S and mode A/C simultaneously.

### [cocoa1090](http://www.blackcatsystems.com/software/cocoa1090.html) (Mac) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Decoder

Cocoa1090 is a Mac based Mode S ADS-B decoder. It connects to the RTL-SDR via rtl\_tcp.

### [gr-air-modes](https://www.cgran.org/wiki/gr-air-modes) (GNU Radio) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Decoder

gr-air-modes is a GNU Radio based program which performs Mode S ADS-B decoding.

### [ADS-B on USB SDR RTL](https://play.google.com/store/apps/details?id=com.wilsonae.android.usbserial\&hl=en) (Android) (Paid) ([Related Post](https://www.rtl-sdr.com/ads-b-decoder-rtl-sdr-now-available-android/)) - ADS-B Decoder and Radar



ADS-B on USB SDR RTL is an Android app that can help receive, decode and display on a map ADS-B aircraft positions with the RTL-SDR. Now also supports decoding of NEXRAD weather data. To run this program you will need an Android 4.0+ device with a decent processor, a USB OTG cable and an RTL-SDR dongle.

### [PiAware](https://flightaware.com/adsb/piaware/) (Raspberry Pi) (Free) ([Related Post](https://www.rtl-sdr.com/flightaware-introduces-piaware-use-rtl-sdr-dump1090-raspberry-pi/)) - ADS-B Data Sharer

PiAware is software for the Raspberry Pi which allows data coming from dump1090 to be shared with the FlightAware.com public servers.

### [FlightAware Flight Feeder](https://play.google.com/store/apps/details?id=com.flightaware.android.flightfeeder) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/new-ads-b-mapping-and-decoder-app-for-android-from-flightaware/)) - ADS-B Decoder, Radar and Data Sharer

An Android app that not only decodes ADS-B data, but also plots it on a map and shares the data with the FlightAware network.



### [Track your flight EUROPE](https://play.google.com/store/apps/details?id=org.qtproject.example.Android\_Application\_ADSB\_final) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/new-ads-b-android-app-for-europe/)) - ADS-B Decoder and Radar

Android based ADS-B decoder with offline maps for Europe.

### [FLARM Decoder](http://wiki.glidernet.org/start) (Raspberry Pi/ARM/x86 Linux) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-decoding-flarm-tracking-gliders-helicopters-etc-using-rtl-sdr/))

A decoder for FLARM, a protocol similar to ADS-B but used for smaller aircraft like gliders and helicopters.

### [SDRWeather](https://play.google.com/store/apps/details?id=org.thecongers.sdrweather) (Android) (Paid) - Weather Radio



An Android app for listening to weather radio in the US and Canada. Can also decode EAS alerts. To run this program you will need an Android 4.0+ device with a decent processor, a USB OTG cable and an RTL-SDR dongle.

### [rtl\_acars\_ng](https://github.com/gat3way/rtl\_acars\_ng) (Linux) (Free) - ACARS

rtl\_acars\_ng is an improvement of the old rtl\_acars command line based Linux ACARS decoder.  It is capable of scanning multiple frequencies and has a built in airline database. See [this post](https://www.rtl-sdr.com/rtl\_acars-updated/) for some more information.

### [Acarsdec](http://sourceforge.net/projects/acarsdec/) (Linux) (Free) - ACARS

Acarsdec is a mulithreaded, multi channel (up to four simultaneous channels can be monitored) ACARS decoder with error detection.

### [PNAIS](https://sites.google.com/site/f4eyuradio/eyu-ais-decodeur-d-ais) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/new-ais-decoder-rtl-sdr-pnais/)) - AIS



Software that connects directly to the RTL-SDR and decodes AIS data. Outputs NMEA data via UDP.

### [AISRec](http://shop114459024.taobao.com/) (Windows) (Free/Paid) ([Related Post](https://www.rtl-sdr.com/aisrec-for-android-new-ais-decoder/)) - AIS

Appears to be a very good AIS decoder. Note that website is in Chinese.

### [rtl\_ais](https://github.com/dgiardini/rtl-ais) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-rtl-sdr-software-rtl\_ais/)) - AIS

Another AIS decoder that combines rtl\_fm and aisdecoder into a single command line program.

### [AISdeco2](http://xdeco.org/) (Windows/Linux/Mac) - AIS

Currently the AIS decoder that we recommend using.

### [rtl\_ais\_android](https://github.com/ebc81/Rtl\_Ais\_Android) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/a-new-ais-decoder-for-the-rtl-sdr-on-android/)) - AIS

rtl\_ais but for Android.

### [dsame](https://github.com/cuppa-joe/dsame) (Python, all platforms) - EAS

A program that allows you to decode EAS/SAME (Emergency Alert System/Specific Area Message Encoding) alert messages.

### [TVSharp](https://www.rtl-sdr.com/analogue-tv-with-rtl-sdr/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/analogue-tv-with-rtl-sdr/)) - PAL/NTSC TV



TVSharp is a simple analogue PAL/NTSC TV decoder. Due to the RTL-SDRs limited bandwidth in SDR mode it is only capable of decoding black and white images.

### [Unitrunker](http://www.unitrunker.com/) (Windows) (Free) - Trunking Control

Unitrunker is a trunking control channel decoder and controller. It can be used in conjuction with general purpose SDR receiver software like SDR#, or the latest preview version can be used directly with the RTL-SDR. Unitrunker listens to a control channel, and then can correctly tune SDR# (via a plugin), or itself in the preview version to the correct channel in order to successfully follow a trunked voice conversation.



### [Trunk88](http://wiki.trunk88.com/index.php/Main\_Page) (Windows) (Free) - Trunking Control

A trunking control channel decoder and controller. Supports most Motorola systems. Can connect directly to the RTL-SDR.



### [SDRTrunk](https://code.google.com/p/sdrtrunk/) (Windows/Linux/Java) (Free) - Trunking Control

SDRTrunk is a java based application for decoding and trunk tracking multiple analog and digital radio channels across multiple USB dongle tuners and/or sound card inputs from discriminator-tapped scanner radios.



### [NRF905 Decoder](https://github.com/texane/nrf/tree/master/unit/range/nrf905\_decoder) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/nrf905-rtl-sdr-decoder/)) - Digital Signal Decoder

A decoder for the NRF905 tranceiver.

### [NRF24-BTLE Decode](https://github.com/omriiluz/NRF24-BTLE-Decoder) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/sniffing-decoding-nrf24l01-bluetooth-le-packets-rtl-sdr/)) - Digital Signal Decoder

A decoder for the NRF24-BTLE tranceiver. This protocol is used by many common devices such as mice and keyboards.

### [RTL\_433](https://github.com/merbanan/rtl\_433) (Linux) (Free) - Digital Signal Decoder

A program to decode temperature and many other types of ISM band sensors on the 433 MHz and other ISM bands.

### [GR-Elster](https://github.com/argilo/gr-elster) (GNU Radio) (Free) ([Related Post](https://www.rtl-sdr.com/elster-r2s-smart-meters-gnu-radio-decoder/)) - Digital Signal Decoder

A program to decode data sent by Elster R2S smart meters.

### [ec3k](https://github.com/avian2/ec3k) (GNU Radio) (Free) (Related Post) - Digital Signal Decoder

A command line program that allows the decoding of EnergyCount 3000 energy loggers.

### [rtlamr](https://github.com/bemasher/rtlamr) (Linux) (Free) - Digital Signal Decoder

A command line program for decoding smart meters on the 900 MHz ISM band.

### [RTL\_HPSDR](https://github.com/n1gp/rtl\_hpsdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_hpsdr-rtl-sdr-hpsdr-translation-server/)) - HPSDR

A translation server which allows the RTL-SDR to be used on HPSDR specific software.

### [GR-RDS](https://www.cgran.org/wiki/RDS) (GNU Radio) (Free) ([Related Post](https://www.rtl-sdr.com/gr-rds-fm-rds-receiver-gnu-radio-supports-rtl-sdr/)) - RDS

A gnuradio RDS decoder.

### [Airprobe](https://www.rtl-sdr.com/rtl-sdr-tutorial-analyzing-gsm-with-airprobe-and-wireshark/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-analyzing-gsm-with-airprobe-and-wireshark/)) - GSM

A GSM decoder.

### [gr-gsm](https://github.com/ptrkrysik/gr-gsm) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/sniffing-analyzing-gsm-signals-gr-gsm/)) - GSM

An upgraded version of Airprobe.

### [RTL\_Tool\_Kit](https://github.com/banjaxbanjo/rtl\_tool\_kit) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-cell-phone-imsi-tmsi-key-sniffer/)) - GSM

An upgraded version of gr-gsm that can also connect and control a test mobile phone.

### [RTL-Entropy](https://github.com/pwarren/rtl-entropy) (Linux) (Free)

rtl\_entropy is a command line Linux program which uses the RTL-SDR as an entropy (randomness) source.

### [GR-AIS](https://github.com/bistromath/gr-ais) (GNU Radio) (Free) - AIS

GNU Radio based AIS decoder which can decode both AIS channels simultaneously.

### [GR-Phosphor](https://sdr.osmocom.org/trac/wiki/fosphor) (GNU Radio) (Free) - Spectrum Display

A GPU accelerated spectrum viewer.

### [ViewRF](http://robotics.ong.id.au/2013/08/25/viewrf-rtl-sdr-spectrum-analyzer-for-bbb-software/) (BeagleBone Black) (Free) ([Related Post](https://www.rtl-sdr.com/viewrf-rtl-sdr-spectrum-analyzer-software-beaglebone-black-released/)) - Spectrum Display

ViewRF is software that displays a FFT RF display on a BeagleBone Black mini computer.

### [rtl\_power](https://github.com/keenerd/rtl-sdr) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-command-line-utility-rtl\_power/)) - Spectrum Display

rtl\_power is a wideband spectrum monitor. This tool let’s you gather signal data over a very wide area of the frequency spectrum, and then that data can be used to find active areas of the spectrum.

### [rtl\_power\_fftw](https://github.com/AD-Vega/rtl-power-fftw) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_power\_fftw-a-modified-version-of-rtl\_power-designed-for-radio-astronomy/)) - Spectrum Display

A modified version of rtl\_power that uses more efficient FFT processing libraries.

### [RTL-WideSpectrum](http://cygnusa.blogspot.co.nz/2015/06/new-way-to-feed-radio-sky-spectrograph.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/radio-astronomy-rtl-bridge-radio-sky-spectrograph/)) - Spectrum Display

Similar to rtl\_power but designed for radio astronomy use.

### [kalibrate-rtl](https://github.com/steve-m/kalibrate-rtl) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/how-to-calibrate-rtl-sdr-using-kalibrate-rtl-on-linux/)) - Calibration

Kalibrate-rtl is a command line Linux tool that is used to determine an RTL-SDR dongles frequency offset in PPM. It uses the time synchronization information in GSM signals to do this.

### [pymultimonaprs](https://github.com/asdil12/pymultimonaprs) (Linux) (Free) - APRS

An APRS-IS gateway which supports the RTL-SDR.

### [gr-wmbus](https://github.com/oWCTejLVlFyNztcBnOoh/gr-wmbus) (Linux) (Free) - M-Bus

Receiver for wireless m-bus (EN 13757-4) based on the RTL-SDR

### [rtlsdr-waterfall](https://github.com/keenerd/rtlsdr-waterfall) (Linux) (Free) - Waterfall Display

A simple waterfall display for the RTL-SDR.

### [LTE-Scanner](https://github.com/Evrytania/LTE-Cell-Scanner) (Linux) (Free) - LTE

A collection of tools to locate and track LTE basestation cells which supports the RTL-SDR.

### [LTE-Scanner (TD-LTE Support)](https://github.com/JiaoXianjun/LTE-Cell-Scanner) (Linux) (Free) - LTE

A fork of LTE-Scanner which supports decoding of Time Division LTE (TD-LTE) signals.

### [rtl\_sdr\_FS20\_decoder](https://github.com/eT0M/rtl\_sdr\_FS20\_decoder) (Linux) (Free) - FS20

A tool for decoding the FS20 protocol which is used in home automation.

### [LibRedio](https://github.com/ade-ma/LibRedio) (Linux) (Free) - Digital Signal Decoder

LibRedio is a tool which can decode temperature and humidity readings that are broadcast from many commercially available wireless environmental sensors.

### [PureData and MAX RTL-SDR Wrapper](https://github.com/tkzic/pd-rtlsdr) (PD/MAX) (Free)

PureData and Max/MSP are graphical programming tools for creating music, sound, video and interactive graphics applications. This software is a wrapper for RTL-SDR that allows the dongle to be used in these tools.

### [OOK-Decoder](https://github.com/jimstudt/ook-decoder) (Linux/MacOS) (Free) ([Related Post](https://www.rtl-sdr.com/reverse-engineering-wireless-wall-outlets-automatically-clone-ook-signals/))

A On-Off Keying (OOK) decoder for radio data commonly found in the 433 MHz ISM band.

### [RTL Bridge](broken-reference) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/radio-astronomy-rtl-bridge-radio-sky-spectrograph/))



RTL Bridge allows a connection between the RTL-SDR dongle and the Radio-SkyPipe and Radio-Sky Spectrograph radio astronomy software.

### [Threejs-Spectrum](https://github.com/ttrftech/threejs-spectrum) (Chrome) (Free) ([Related Post](https://www.rtl-sdr.com/3d-frequency-spectrum-visualization-chrome-rtl-sdr/))



Software for the Chrome browser that allows you to view an RTL-SDR waterfall in 3D.

### [CANFI Software](http://www.canfi.eu/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/making-cheap-noise-figure-indicator-rtl-sdr/))



Software for using the RTL-SDR as a cheap noise figure indicator. Requires extra hardware.

### [Touchstone](http://rfexplorer.com/touchstone/) (Windows) (Free/Paid)&#x20;

[![touchstone](https://www.rtl-sdr.com/wp-content/uploads/2014/02/touchstone-500x280.png)](https://www.rtl-sdr.com/wp-content/uploads/2014/02/touchstone.png)

RF Spectrum analyser software. Pro version unlocks extra features such as recording/playback mode, zoom, topographic maps and logging.

### [RTLSDR-Airband](https://github.com/szpajder/RTLSDR-Airband) (Windows/Mac/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/monitoring-multiple-channels-rtl-sdr-airband/))

Software that allows you to decode up to eight airband channels simultaneously and stream them to online services like liveatc.net.

### [OregonWeather](https://github.com/enlarsen/OregonWeather) (Mac) (Free)

A Mac only app that can receive data from Oregon Scientific weather temperature sensors.

### [FreqWatch](https://github.com/covertcodes/freqwatch) (Windows/Mac/Linux) (Free)

Freqwatch makes use of rtl\_power to scan a wide swath of RF spectrum and then automatically records and stores in a database sound files of active signals by using rtl\_fm.

### [YouSDR](https://github.com/sixuniform/yousdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-web-based-rtl-sdr-remote-control-software-yousdr/)) - Web based streaming and control

Runs a server which broadcasts audio from an RTL-SDR. Has a web interface which allows for remote control of the server.



### [Frequensea](https://github.com/fdb/frequensea) (Linux, OSX, Raspberry Pi) (Free) ([Related Post](https://www.rtl-sdr.com/visualizing-the-electromagnetic-spectrum-with-frequensea-and-an-rtl-sdr/)) - Visualisation

Allows you to visualise the FFT in various 3D modes.

### [QSpectrumAnalyzer](https://github.com/xmikos/qspectrumanalyzer) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-gui-for-rtl\_power-qspectrumanalyzer/)) - rtl\_power GUI

A Python based spectrum analyser rtl\_power GUI. Tested on Linux but may work on Windows and OSX too.



### [Redsea](https://github.com/windytan/redsea) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/new-rtl-sdr-radio-data-system-rds-decoder-redsea/)) - RDS

A command line utility for decoding Radio Data System (RDS). Uses rtl\_fm.

### [Driveby](https://github.com/timhavens/driveby) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/measuring-power-line-noise-neighbourhood-rtl-sdr-driveby-system/)) - RF Noise Finder

Helps to pinpoint RF noise by driving around with several RTL-SDR dongles.

### [Sigmira](http://www.saharlow.com/technology/sigmira/) (Windows/Linux) (Free) - Ham digital mode decoder

Sigmira is a free software program that is capable of decoding a wide range of ham radio signals. Sigmira is best known for it's support for decoding the "Japanese Navy Slot Machine" signal and STANAG4285 signals. Newer versions of Sigmira can interface directly with the RTL-SDR, or use in conjunction with a general purpose SDR receiver and pipe the audio output to Sigmira.

### [Ham2Mon](https://github.com/madengr/ham2mon) (Linux) (Free) - Scanner

Unlike conventional radio scanners that lock and demodulate a single channel, this SDR scanner can demodulate and record audio from N channels in parallel within the digitizing bandwidth. The N (number of) channels is basically just limited by processor speed.

### [QTCSDR](https://github.com/ha7ilm/qtcsdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/building-a-ham-tranceiver-with-an-rtl-sdr-raspberry-pi-and-rpitx/)) - Transceiver Application

This program runs on a Raspberry Pi and allows you to use the Raspberry Pi's data pins as a crude transmitter. At the same time it also interfaces with an RTL-SDR dongle to act as a receiver.



### [GR-ISDBT](https://github.com/git-artes/gr-isdbt) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/a-gnu-radio-based-isdb-t-and-rtl-sdr-compatible-1seg-decoder/)) - ISDBT Receiver

A 1-seg ISDBT receiver for the RTL-SDR. Runs via GNU Radio. 1-seg and ISDB-T is commonly used on things like TV for small devices like mobile phones.

### [Telive](https://github.com/sq5bpf/telive) (Linux/Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-listening-tetra-radio-channels/)) - TETRA Decoder

Telive is a program that can be used to decode TETRA digital voice signals. It is available for Linux, and there is also a Windows port now available. See the related post for a tutorial on setting it up.



### [TETRA Listener](https://github.com/itds-consulting/tetra-listener-vagrant) (Linux via Vagrant) (Free) ([Related Post](https://github.com/itds-consulting/tetra-listener-vagrant)) - TETRA Decoder

Another TETRA decoder. Isn't as popular as telive, probably due to the requirement that it requires Vagrant which seems to need a licence.

### [TETRA Trunk Tracker](https://www.rtl-sdr.com/forum/viewtopic.php?f=3\&t=2452\&start=40) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/new-tetra-trunk-tracker-for-use-with-sdr-and-the-tetra-demodulator-plugin/))

Works in conjunction with the TETRA demodulator plugin for SDR# for following calls on the TETRA network.

### [gr-iridium](https://github.com/muccc/gr-iridium) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/talk-decoding-data-from-iridium-satellites/)) - Iridium Decoder

A decoder for Iridium satellites. Can currently decode calls and some short messages. Difficult to set up and use, a more advanced project.

### [Iridium-Toolkit](https://github.com/muccc/iridium-toolkit) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/hacking-iridium-satellites-with-iridium-toolkit/))

Another decoder for Iridium satellites. More developed than gr-iridium.

### [Cloud-SDR](http://www.cloud-sdr.com/) (Linux/Windows) (Free - Paid Options Available) ([Related Post](https://www.rtl-sdr.com/cloudsdr-a-tool-for-remotely-accessing-sdrs-like-the-rtl-sdr-and-airspy/)) - Streaming Server

A network streaming server compatible with RTL-SDR dongles. Similar to rtl\_tcp but much more efficient as it only streams the selected IF.

### [SDRDue](http://www.kaminski.up.lublin.pl/RTL-SRD.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/sdrdue-new-software-for-passive-radar-with-two-coherent-rtl-sdr-dongles/)) - Passive Radar

A program that can be used with two RTL-SDR dongles that share the same clock for passive radar detection.



### [GQRX-Ghostbox](https://github.com/DougHaber/gqrx-ghostbox) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/gqrx-ghostbox-electronic-voice-phenomenon-paranormal-research-tool/)) - EVP Tool

Can be used to supposedly detect ghosts and spirits via the Electronic Voice Phenomenon (EVP). Basically quickly tunes the RTL-SDR between various broadcast FM stations and you're supposed to hear voices from ghosts.

GhostSDR

### [Ships](https://play.google.com/store/apps/details?id=net.videgro.ships) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/ships-new-rtl-sdr-compatible-android-app-for-ais-reception-and-plotting/)) - AIS Decoder and Mapper

An AIS decoder and mapping app for Android.

### [rtlmic](https://github.com/marcan/rtlmic) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtlmic-wireless-microphone-receiver-for-rtl-sdr/)) - Microphone Base Station

A tool that turns an RTL-SDR into a microphone base stations for events.

### [tsl-sdr](https://github.com/pvachon/tsl-sdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/a-multichannel-fm-demodulator/))

'The Standard Library' is a set of tools and demodulators for software defined radio like the RTL-SDR. The main program is MultiFM which allows you to monitor multiple FM channels at once. tsl-sdr also comes with a pager decoder.

### [dumpvdl2](https://github.com/szpajder/dumpvdl2) (Linux/Windows) (Free) ([Related Post](https://www.rtl-sdr.com/dumpvdl2-lightweight-vdl2-decoder/)) - VDL2 Decoder

A lightweight command line based VDL2 decoder.

### [VDLM2DEC](https://github.com/TLeconte/vdlm2dec) (Linux) (Free) (Related Post) - VDL2 Decoder

Another VDL2 decoder based on libacars. Can decoder up to 8 frequencies simultaenously.

### [RE-DECTED](https://github.com/znuh/re-DECTed) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/re-dected-rtl-sdr-dect-decoder/)) - DECT Decoder

A GNU Radio based DECT decoder. The DECT protocol is commonly used on modern digital cordless phones.

### [Aerial TV](https://play.google.com/store/apps/details?id=info.martinmarinov.aerialtv\&rdid=info.martinmarinov.aerialtv) (Android) (Free with Paid Options) ([Related Post](https://www.rtl-sdr.com/aerial-tv-android-dvb-t-decoder-rtl-sdr/)) - DVB-T Decoder



An Android app for using the RTL-SDR as a standard DVB-T decoder.

### [NRSC5 HD Radio Decoder](https://github.com/theori-io/nrsc5) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/decoding-and-listening-to-hd-radio-nrsc-5-with-an-rtl-sdr/))

A decoder for the HD Radio signal found in the USA. This is a digital FM radio broadcasting signal that can be identified on a RF spectrum as the two solid blocks surrounding a standard wideband FM radio station. The protocol is closed sourced, but the author of NRSC5 managed to reverse engineer it and create a decoder.

### [IMSI-Catcher](https://github.com/Oros42/IMSI-catcher) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/using-an-rtl-sdr-as-a-simple-imsi-catcher/))

A simple Python scipt that works with gr-gsm for collecting IMSI numbers on cell phones spotted.



### [Blockstream Receiver](https://github.com/blockstream/satellite) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-the-bitcoin-blockchain-from-satellites-with-an-rtl-sdr/))

A decoder for the blockstream project. This is a project that tries to beam down the bitcoin block chain from a satellite, with an RTL-SDR used as the receiver. See the related post for further information.

### [Salamandra](https://github.com/eldraco/Salamandra) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/salamandra-detecting-and-locating-spy-microphones-with-an-rtl-sdr/))

A simple program that aims to detect wireless bugs based on the strength of the signal emitted by the bug.

### [QRadioLink](http://qradiolink.org/) (Linux/Android) (Free) ([Related Post](https://www.rtl-sdr.com/comparing-ssb-nfm-codec2-and-opus-with-qradiolink-and-an-rtl-sdr/))

GNU Radio based decoders and encoders for digital speech modes such as Codec and Opus.

### [SCEPTRE](http://www.3db-labs.com/software-development) (Linux/Windows/MacOS) (Paid)

An expensive but highly sophisticated signal processing suite with various advanced decoders and analysis tools. Aimed towards military and professional SIGINT users, but also supports the RTL-SDR.



### [Blockstream Satellite](https://github.com/blockstream/satellite) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-the-bitcoin-blockchain-from-satellites-with-an-rtl-sdr/))

Receive the Blockstream Bitcoin satellite, allowing you to download the Bitcoin blockchain over satellite.

### [TempestSDR](https://github.com/martinmarinov/TempestSDR) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/tempestsdr-a-sdr-tool-for-eavesdropping-on-computer-screens-via-unintentionally-radiated-rf/))

Reconstructs unintentionally transmitted signals from monitors/TVs into live video.



### [rtlsdr-wsprd](https://github.com/Guenael/rtlsdr-wsprd) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/creating-a-standalone-wspr-receiver-with-an-rtl-sdr-v3-and-raspberry-pi-3/))

Decode WSPR signals with your RTL-SDR

### [rtl\_map](https://github.com/orhun/rtl\_map) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_map-a-simple-fft-visualizer-for-rtl-sdr/))

A simple FFT visualization tool for the RTL-SDR. Good code reference showing how to access the RTL-SDR.

### [Radwave](https://play.google.com/store/apps/details?id=com.radwave.radwave.android\&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) (Android) (Free) ([Related Post](https://www.rtl-sdr.com/radwave-beta-android-rtl-sdr-rf-analyzer-app-with-spectrum-pause-and-rewind-features/))

Simple Android based spectrum explorer with pause and rewind for the RTL-SDR.

### [radiosonde\_auto\_rx](https://github.com/projecthorus/radiosonde\_auto\_rx) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/tracking-radiosondes-with-an-rtl-sdr-and-radiosonde\_auto\_rx/))

Automatically scans for and tracks Radiosondes using an RTL-SDR and rtl\_power.

### [XRIT Decoder](https://usa-satcom.com/xrit-decoder-for-goes-satellite/) (Windows) (Paid) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-com-goes-16-17-and-gk-2a-weather-satellite-reception-comprehensive-tutorial/))

Can be used with an RTL-SDR to decode LRIT and HRIT GOES weather satellite images. To purchase the software you must [contact Joe](https://usa-satcom.com/contact\_form/) by email.



### [xrit-rx (KOMPSAT-2A)](https://github.com/sam210723/xrit-rx) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-com-goes-16-17-and-gk-2a-weather-satellite-reception-comprehensive-tutorial/))

A LRIT decoder and file processor that lets you receive images from the GEO-KOMPSAT-2A Korean weather satellite.

### [goestools](https://github.com/pietern/goestools) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-com-goes-16-17-and-gk-2a-weather-satellite-reception-comprehensive-tutorial/))

Used for receiving GOES weather satellite images. Is a combination of goeslrecv, goeslrit, and goesproc. The full system results in an image file.

### [SATNOGS](https://github.com/satnogs) (Linux) (Free)

SATNOGs is a project that is aiming to set up crowd sourced satellite ground stations world wide. Typically an RTL-SDR is used as the receiver.

### [SigintOS](https://www.sigintos.com/) (Linux) (Free/Paid) (Related Post)

SigintOS is a Linux distrobution that includes a program called "SigintOS". It combines multiple mobile phone analysis tools. The LTE IMSI catcher is a paid upgrade.

### [RadioCapture](https://github.com/MattMills/radiocapture-rf) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/radiocapture-software-to-capture-archive-and-listen-to-trunked-radio-from-many-sources-now-open-sourced/))

A frontend + backend web app that uses RTL-SDRs to capture trunked radio communications, and share them as recordings via a web based interface.

### [EMI\_Mapper](https://github.com/CGrassin/EMI\_mapper) (Linux) (Free) (Related Post)

Combines a camera with OpenCV, RTL-SDR and an EMI probe to create EMI image heat maps of circuits.



### [RTLion](https://github.com/RTLion-Framework/RTLion) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtlion-the-multipurpose-rtl-sdr-framework/))

A framework for RTL-SDRs which includes features like spectrum density visualization and remote scanning.

### [rtlSpectrum](https://github.com/dernasherbrezon/rtlSpectrum) (Windows/Linux/OSX) (Free) ([Related Post](https://www.rtl-sdr.com/rtlspectrum-a-new-gui-for-rtl\_power/))

Plots data from rtl\_power.

### [PICTOR](https://github.com/0xCoto/PICTOR) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/pictor-an-open-source-low-cost-radio-telescope-based-on-rtl-sdr/))

Open source hydrogen line radio astronomy observation software with web interface. Uses an RTL-SDR as the receiver

### [fingerprinting\_radios\_w\_ML](https://medium.com/datadriveninvestor/authenticating-low-end-wireless-sensors-with-deep-learning-sdr-f059ed6d8840) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/using-an-rtl-sdr-rf-fingerprinting-and-deep-learning-to-authenticate-rf-devices/))

Research project code that uses Machine Learning and RTL-SDR to fingerprint individual radios.

### [PEPYSCOPE](https://github.com/mcogoni/pypanadapter) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/pepyscope-a-simple-panadapter-for-hf-radios-using-rtl-sdr-direct-sampling/))

A simple a fast panadapter for your HF radio which uses the RTL-SDR.

### [Electrosense](https://electrosense.org/open-source) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/electrosense-rtl-sdr-based-crowd-sourced-spectrum-monitoring-with-a-dc-to-6-ghz-rtl-sdr-up-downconverter/))

Software which allows you to use your RTL-SDR to join the Electrosense spectrum monitoring network.

### [ORBCOMM-receiver](https://github.com/fbieberly/ORBCOMM-receiver) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/orbcomm-receiver-new-open-source-software-for-monitoring-orbcomm-satellites/))

Decodes packets from ORBCOMM satellites (no personal data, just satellite telemetry and positional data)

### [r2cloud](https://github.com/dernasherbrezon/r2cloud) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/r2cloud-software-for-automatically-decoding-apt-lrpt-weather-satellites-and-cubesats-on-a-raspberry-pi-with-rtl-sdr/))

Raspberry Pi software that uses an RTL-SDR to create an APT, LRPT and Cubesat decoding ground base station.

### [vor-python-decoder](https://github.com/martinber/vor-python-decoder) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/a-new-vor-decoder-written-in-python/))

A decoder for the VOR aircraft navigational beacons.

### [vortrack](https://github.com/TLeconte/vortrack) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/an-open-source-vor-receiver-for-airspy-and-rtl-sdr/))

Another VOR decoder but written in C.

### [retrogram-rtlsdr](https://github.com/r4d10n/retrogram-rtlsdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-retrogram-ascii-art-spectrum-analyzer/))

A terminal based retro styled spectrum analyzer for the RTL-SDR.

### [rtl\_power-fm-multipath](https://github.com/jj1bdx/rtl\_power-fm-multipath) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/measuring-broadcast-fm-multipath-distortion-with-an-rtl-sdr/))

FM broadcasting multipath distortion estimation by D/U ratio measurement

### [glrpt](http://www.5b4az.org/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/a-complete-linux-based-receiver-and-decoder-application-for-meteor-m2/))

Meteor M2 LRPT satellite image decoder. Connects directly to an RTL-SDR.

### [meteor\_demod](https://github.com/dbdexter-dev/meteor\_demod) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/a-lightweight-meteor-m2-demodulator/))

A command line based Meteor M2 demodulator. Requries the use of LRPTofflineDecoder to decode the image.

### [gammarf](https://www.gammarf.io/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/gammarf-distributed-radio-signal-collection-and-analysis-with-rtl-sdr-and-hackrf/))

Client-server radio data collection system. Allows you to collect data from multiple RTL-SDR/SDR nodes.

### [SegDSP](https://github.com/racerxdl/segdsp) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/segdsp-distributed-cloud-based-sdr-with-spyserver/))

A web based GUI for SpyServer compatible SDRs. (Still a work in progress)

### [rtl-ultrasound](https://github.com/wlmeng11/rtl-ultrasound) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_ultrasound-using-a-piezoelectric-transducer-with-an-rtl-sdr-to-create-an-ultrasound-imager/))

Code for a hardware system that uses an RTL-SDR in a home brew ultra sound imager.

### [radiosondy.info](https://radiosondy.info/) (Linux) (Free) (Related Post)

A custom image and software program for the Raspberry Pi which allows you toi set up a radiosondy.info tracking station for tracking radiosondes, and feeding the radiosondy.info aggregator.

### [OP25](http://osmocom.org/projects/op25/wiki) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/tutorial-on-setting-up-op25-for-p25-phase-2-digital-voice-decoding/))

A P25 Phase 2 decoder which can use the RTL-SDR as a radio.

### [FreqShow](https://github.com/adafruit/FreqShow) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/an-enhanced-version-of-freqshow-for-raspberry-pis-with-touch-screens/))

Turns your Raspberry Pi into a frequency scanning and display tool with an RTL-SDR.

### [rtl\_tcp SDR](https://apps.apple.com/us/app/rtl-tcp-sdr/id1351164646?ls=1) (iOS) (Paid) ([Related Post](https://www.rtl-sdr.com/rtl\_tcp-sdr-ios-software-defined-radio-app-with-spectrum-display/))

An iOS app that connects to an rtl\_tcp server running on another device to display and demodulate the spectrum.

### [SDR Receiver](https://apps.apple.com/us/app/sdr-receiver/id1289939888?mt=8%2F) (iOS) (Paid) ([Related Post](https://www.rtl-sdr.com/new-rtl-sdr-receiver-app-for-ios-released/))

Another iOS app which also connects to an rtl\_tcp server running on another device. Audio AM and FM only, no visual spectrum display.

### [Echoes](https://sourceforge.net/projects/echoes/) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/echoes-an-rtl-sdr-tool-for-meteor-scatter-detection/))

RTL-SDR compatible tool for detecting meteor scatter reflections.

### [rtlmm](https://github.com/ps2/rtlmm) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/sniffing-minimed-insulin-pump-rf-packets-with-an-rtl-sdr/))

Use an RTL-SDR to sniff packets from Minimed Insulin pumps.

### [FM2TXT](https://sourceforge.net/projects/fm2txt-rtlsdr/?source=typ\_redirect) (Windows/Linux/OSX) (Free) ([Related Post](https://www.rtl-sdr.com/fm2txt-automatically-perform-speech-to-text-on-fm-signals/))

Logs FM station speech to a text file via Google text to speech.

### [cnn-rtlsdr](https://github.com/randaller/cnn-rtlsdr) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/deep-learning-neural-network-based-signal-identification-software-for-the-rtl-sdr/))

Use a deep learning neural network for signal classification. Can only classify WFM, TV SECAM, DMR, and "Others" at the moment.

### Research

Under this heading we list RTL-SDR software that is mainly intended for education and research purposes.

### [GNU Radio](http://gnuradio.org/redmine/projects/gnuradio/wiki) (Linux) (Free)

[![GNU Radio RDS Decoder](https://www.rtl-sdr.com/wp-content/uploads/2013/07/GNURADIO-RDSdata.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2013/07/GNURADIO-RDSdata.jpg)

GNU Radio is a powerful digital signal processing (DSP) package for creating software defined radios. DSP programs can be written visually using block diagrams in the GNU Radio Companion software. It supports the RTL-SDR with an RTL2832U source block. Various decoders are written in GNU Radio and require it to be installed to run.

### [Redhawk](http://redhawksdr.github.io/Documentation/) (CentOS) (Free)

[![RTL TCP Block for REDHAWK](https://www.rtl-sdr.com/wp-content/uploads/2013/05/rtltcpsourceredhawk.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/05/rtltcpsourceredhawk.png)

Redhawk is another digital signal processing package that is very similar to GNU Radio. It is designed to aid in the development, deployment, and management of real-time software radio applications

### [MATLAB RTL-SDR Support](http://www.mathworks.com.au/hardware-support/rtl-sdr.html) (MATLAB) (Paid) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-now-supported-matlab/))

MATLAB is a well known mathematical computing language. With this support package MATLAB can interface with the RTL-SDR, and digital signal processing algorithm can then be written in MATLAB.

### [SDR Lab](http://ha5kfu.sch.bme.hu/sdrlab) (LabVIEW) (Paid) ([Related Post](https://www.rtl-sdr.com/sdrlab-rtl-sdr-interface-labview-educational-purposes/))

[![ha5kfu\_sdrlab\_release](https://www.rtl-sdr.com/wp-content/uploads/2013/09/ha5kfu\_sdrlab\_release.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/09/ha5kfu\_sdrlab\_release.png)

LabVIEW is a software package usually used for control systems engineering. With SDR Lab, the RTL-SDR is able to interface with LabVIEW.

### [LuaRadio](http://luaradio.io/docs/installation.html) (Linux/MacOS) ([Related Post](https://www.rtl-sdr.com/luaradio-new-flowgraph-based-digital-signal-processing-framework-for-sdr/))



A visual block based DSP framework kind of similar to GNU Radio but based in LUA. It's main advantage is that it claims to be extremely lightweight.

### Programs Compatible Through Piping

These programs do not directly access the RTL-SDR but are compatible with the RTL-SDR either through piping of the audio output via software like VBCable, Virtual Audio Cable, Windows Stereo Mix, Linux pipes or a physical Audio Cable or via receiving RTL-SDR received data through some other way such as through a network. Most of these are general ham radio programs that have found wider use with the RTL-SDR.

### [WxtoIMG](https://wxtoimgrestored.xyz/) (Windows) (Free - Abonware) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-noaa-weather-satellite-images/)) - NOAA Weather Satellites



WxToImg to a program which can be used to decode NOAA weather satellite data and then display and post process the weather images. Use in conjunction with a general purpose SDR receiver and pipe the audio output to WxToIMG.

### [noaa-apt](https://noaa-apt.mbernardi.com.ar/index.html) (Windows/Linux/OSX) (Free) ([Related Post](https://www.rtl-sdr.com/noaa-apt-software-decoder-users-guide-now-available/))

Simple GPL open source NOAA APT signal decoder. Black and white color only.

### [PDW](http://www.discriminator.nl/pdw/index-en.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-pocsag-pager-decoding/)) - POCSSAG/Flex Pagers

[![PDW Decoding](https://www.rtl-sdr.com/wp-content/uploads/2013/05/PDWWorking.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/05/PDWWorking.png)

PDW is a POCSAG/Flex pager decoding program. Use in conjunction with a general purpose SDR receiver and pipe the audio output to PDW.

### [DSD](http://wiki.radioreference.com/index.php/Digital\_Speech\_Decoder\_\(software\_package\))/[DSD+](https://www.rtl-sdr.com/dsd-version-1-5-released/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-radio-scanner-tutorial-decoding-digital-voice-p25-with-dsd/)) - Digital Speech Codecs



DSD is an acronym for digital speech decoder. It is a program that is capable of decoding digital speech codecs such as P25, DMR/MOTOTRBO, NXDN and D-Star. DSD+ is a new version of DSD which has the same features as DSD, but has improved decoding performance. For DSD you will need to copy cygwin.dll into the same direction as dsd to run the program. For DSD+ you won't need cygwin, but instead you will need lame\_enc.dll. Use in conjunction with a general purpose SDR receiver and pipe the audio output to DSD/DSD+.

There is now also the in development [DSD 1.7](https://github.com/szechyjs/dsd) which supports new features like D-Star voice decoding.

### [DREAM](http://sourceforge.net/apps/mediawiki/drm/index.php?title=Main\_Page) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/tutorial-drm-radio-using-rtl-sdr/)) - DRM

[![DREAM](https://www.rtl-sdr.com/wp-content/uploads/2013/04/DREAMss.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/DREAMss.png)

DREAM is a Digital Radio Monodiale (DRM) decoder. You will need an upconverter to receive DRM signals with the RTL-SDR as they are on the HF band. To use DREAM you'll need to also compile or download an AAC decoder dll file, see our tutorial for a pre-made .dll. Use in conjunction with a general purpose SDR receiver and pipe the audio output to DREAM.

### [SondeMonitor](https://www.coaa.co.uk/sondemonitor.htm) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-weather-balloon-data-with-rtl-sdr/)) - Weather Balloons

[![SondeMonitorTelemetryGraph](https://www.rtl-sdr.com/wp-content/uploads/2013/06/SondeMonitorTelemetryGraph.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/06/SondeMonitorTelemetryGraph.png)

SondeMonitor is commercial software with a 21 day free trial that is used to decode various weather balloon (radiosonde) telemetry signals.  Use in conjunction with a general purpose SDR receiver and pipe the audio output to SondeMonitor.

### [RS](https://github.com/rs1729/RS) (Windows) (Free) - Weather Balloons

A free radiosonde decoder. Command line based and supports most common radiosonde protocols.

### [RS41 Tool](http://escursioni.altervista.org/Radiosonde/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rs41-radiosonde-tracking-software/))

Decodes RS41 radiosondes with a Windows GUI.

### [dl-fldigi](http://ukhas.org.uk/projects:dl-fldigi) (Windows/Mac/Linux) (Free) - High Altitude Balloons 

A modification of fldigi that can receive telemetry from amateur high altitude balloons (HABs). Use in conjunction with a general purpose SDR receiver and pipe the audio output to dl-fldigi.

### [PlanePlotter](http://www.coaa.co.uk/planeplotter.htm) (Windows) (Paid) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Radar/ACARS

[![Plane Plotter Example](https://www.rtl-sdr.com/wp-content/uploads/2013/04/PlanePlotterExample.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/PlanePlotterExample.png)

PlanePlotter is a commercial advanced graphical ADS-B radar display with a 21 day free trial. With the RTL-SDR, use in conjunction with an ADS-B decoder. PlanePlotter also has an excellent ACARS decoder. To use the ACARS decoder, use with a general purpose SDR receiver and pipe the audio output to PlanePlotter.

### [GlobeS](http://rtl1090.jetvision.de/homepage/index.php?way=1\&site=READOUT\&DERNAME=Globe-S%20RTL1090\&dm=rtl1090\&USER=rtl1090\&goto=1\&XURL=web99.de\&WB=1\&EXTRAX=X\&PIDX=104245) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Radar

[![Globe-S Screenshot](https://www.rtl-sdr.com/wp-content/uploads/2013/05/GlobeSScreenShot.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/05/GlobeSScreenShot.png)

GlobeS is a simple lightweight graphical ADS-B radar display. With the RTL-SDR, use in conjunction with an ADS-B decoder.

### [adsbSCOPE](http://www.sprut.de/electronic/pic/projekte/adsb/adsb\_en.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B Radar

[![ADSBScope Screenshot](https://www.rtl-sdr.com/wp-content/uploads/2013/04/adsbScopeScreenShot1.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/adsbScopeScreenShot1.png)

adsbSCOPE is a graphical ADS-B radar display. With the RTL-SDR, use in conjunction with an ADS-B decoder.

### [Virtual Radar Server](http://www.virtualradarserver.co.uk/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/)) - ADS-B

### [![Virtual Radar Server](https://www.rtl-sdr.com/wp-content/uploads/2013/04/VirtualRadarServerExample.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/VirtualRadarServerExample.jpg)

Virtual Radar Server is a free program which will display ADS-B data on a Google Maps window. With the RTL-SDR, use in conjunction with an ADS-B decoder.

### [Acarsd](http://www.acarsd.org/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-radio-scanner-tutorial-receiving-airplane-data-with-acars/)) - ACARS



Acarsd is a free ACARS decoder program. It contains a database of aircraft and will display their images if they exist. Use in conjunction with a general purpose SDR receiver and pipe the audio output to Acarsd.

### [ShipPlotter](http://www.coaa.co.uk/shipplotter.htm) (Windows) (Trial/Paid) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/)) - AIS

[![ShipPlotter Ship View](https://www.rtl-sdr.com/wp-content/uploads/2013/04/ShipPlotterShipViewSS1.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/ShipPlotterShipViewSS1.png)

ShipPlotter is a commercial program which can plot ship positions on a nautical map or Google maps from decoded AIS datastreams. It has a 21-day free trial. Use in conjunction with a general purpose SDR receiver and pipe the audio output to ShipPlotter.

### [AISMon](https://groups.yahoo.com/neo/groups/aismon/info) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/)) - AIS

[![AISMon UDP Enabled](https://www.rtl-sdr.com/wp-content/uploads/2013/04/AISMonUDPEnabled.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/AISMonUDPEnabled.png)

AISMon is a free AIS data decoder. It can output decoded AIS data through a UDP stream for use in other programs that display the ship positional data such an OpenCPN. Use in conjunction with a general purpose SDR receiver and pipe the audio output to ShipPlotter.

### [OpenCPN](http://opencpn.org/ocpn/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/)) - AIS

[![OpenCPN Screenshot](https://www.rtl-sdr.com/wp-content/uploads/2013/04/OpenCPNSS.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/04/OpenCPNSS.png)

OpenCPN is a free nautical AIS mapping tool which can display ship positions on a map using AIS data. Use this software in conjunction with a program that decodes AIS data, such as AISMon.

### [RDS Spy](http://rdsspy.com/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-rds-spy-hdsdr/)) - RDS



RDS Spy is a free and very sensitive Radio Data System (RDS) decoder. Use in conjunction with a general purpose SDR receiver and pipe the audio output to RDS Spy.

### [Orbitron](http://www.stoff.pl/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-noaa-weather-satellite-images/)) - Satellite Tracking

[![Orbitron Running](https://www.rtl-sdr.com/wp-content/uploads/2013/05/OrbitronRunning.png)](https://www.rtl-sdr.com/wp-content/uploads/2013/05/OrbitronRunning.png)

Orbitron is a free satellite tracker. With a plugin, Orbitron can be made to control the tuned frequency in SDR# allowing for automatic satellite tracking, and doppler effect correction. Use in conjunction with the [Orbitron SDR# plugin](https://www.rtl-sdr.com/video-tutorial-setting-satellite-tracking-sdrsharp-orbitron/).

### [Qtmm AFSK1200 Decoder](http://sourceforge.net/projects/qtmm/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-iss-data-comms-rtl-sdr/)) - AFSK Decoder

AFSK1200 is an AFSK1200 decoder. This mode is used by APRS radio hobbyists. Use in conjunction with a general purpose SDR receiver and pipe the audio output to AFSK1200.

### [FunCube Telemetry Dashboard](http://funcube.org.uk/working-documents/funcube-telemetry-dashboard/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/using-rtl-sdr-listen-funcube-satellite/)) - FunCube

This is a program designed to decode the Funcube satellite telemetry data. Use in conjunction with a general purpose SDR receiver and pipe the audio output to the dashboard.

### [GNSS-SDR](http://gnss-sdr.org/node/50) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/using-rtl-sdr-software-gps-receiver/)) - GPS

A software GPS receiver code base which supports the RTL-SDR.

### [GNSS-SDRLIB](https://github.com/taroz/GNSS-SDRLIB) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/receiving-gps-with-an-rtl-sdr-dongle-and-gps-antenna/)) - GPS

Another GPS decoder but compatible with Windows. See the related post for a tutorial on its operation.



### [DStar](http://www.radioamatoripeligni.it/i6ibe/hdsdr/dstar/dstar.htm) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/decoding-d-star-headers-rtl-sdr/)) - Dstar

Dstar is an DStar decoder program. Use in conjunction with a general purpose SDR receiver and pipe the audio output to dstar.

### [SvxLink](http://www.svxlink.org/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/svxlink-now-supports-the-rtl-sdr/)) - Repeater Control Software

A general purpose voice services system. Is used to control a repeater tower. Using RTL-SDR's allows you to add extra receiving frequencies to the repeater.

### [Spectrum Lab](http://www.qsl.net/dl4yhf/spectra1.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/meteor-detection-rtl-sdr/)) - Audio Analysis

Spectrum Lab is a free specialized audio analyzer, filter, frequency converter, hum filter, data logger. It is usually used in the field of radio astronomy for things like meteor detection. Use in conjunction with a general purpose SDR receiver and pipe the audio output to Spectrum Lab.

### [Baudline](http://www.baudline.com/) (Mac/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/detecting-perseids-meteor-shower-rtl-sdr-passive-radar/)) - Audio Analysis

Baudline is a free audio spectrum analyzer usually used to analyze radio data signals. Use in conjunction with a general purpose SDR receiver and pipe the audio output to Baudline.

### [HROFFT](http://www.amro-net.jp/about-hro/hro2-d.htm) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/perseids-meteor-reflection-observations-with-the-rtl-sdr/)) - Audio Analysis

HROFFT is a specialized audio analysis software program designed for monitoring meteor scatter signals. Use in conjunction with a general purpose SDR receiver and pipe the audio output to HROFFT.

### [multiPSK](http://f6cte.free.fr/index\_anglais.htm) (Windows) (Free for non-commercial use) - Ham digital mode decoder

multiPSK is a popular ham digital mode decoder and supports a very wide range of digital modes. It also directly supports connecting to the RTL-SDR via RTL\_TCP.exe. You will need to download the [rtlsdr official Windows release](http://sdr.osmocom.org/trac/attachment/wiki/rtl-sdr/RelWithDebInfo.zip), and copy the rtl\_tcp.exe, rtlsdr.dll, pthreadVC2-w64.dll and libusb-1.0.dll into the same directory as multipsk.exe to use this option. Otherwise you can simply pipe the audio from a general purpose SDR receiver into multiPSK.

### [Fldigi](http://www.w1hkj.com/Fldigi.html) (Windows/Mac/Linux) (Free) - Ham digital mode decoder

Fldigi is a free software program capable of decoding various ham radio digital data signals such as CW, Contestia, Domino, Feld Hell, Olivia, MT63, PSK, RTTY, Thor and WEFAX. Use in conjunction with a general purpose SDR receiver and pipe the audio output to Fldigi.

### [multimonNG](http://eliasoenal.com/2012/05/24/multimonng/) (Windows/Mac/Linux) (Free) - Ham digital mode decoder

multimonNG is a fork of the multimon software. It is a general purpose decoder capable of decoding POCSAG512, POCSAG1200, POCSAG2400, EAS, UFSK1200, CLIPFSK, AFSK1200, AFSK2400, AFSK2400\_2, AFSK2400\_3, HAPN4800, FSK9600, DTMF and ZVEI. Use in conjunction with a general purpose SDR receiver and pipe the audio output to MixW.

### [MixW](http://mixw.net/) (Windows) (Free) - Ham digital mode decoder

MixW is a free software program used for decoding various digital ham radio signals. It is capable of decoding CW, BPSK31, QPSK31, FSK31, RTTY, Packet, Pactor, Amtor, MFSK, Throb, MT63, Hellschreiber, WEFAX and SSTV. Use in conjunction with a general purpose SDR receiver and pipe the audio output to MixW.

### [Sorcerer](http://www.radioaficion.com/HamNews/archivo/vagabundos-del-dial/5814-sorcerer-decoder.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/stanag-4285-decoding-with-rtl-sdr/)) - Ham digital mode decoder

Sorcerer is a free software program capable of decoding a wide range of ham radio signals. Sorcerer is known for its decoder support for rarely used signals, but it is mostly used to decode STANAG 4285 signals. Use in conjunction with a general purpose SDR receiver and pipe the audio output to Sorcerer.

### [Rivet](https://github.com/IanWraith/Rivet/) (Windows/Mac/Linux) (Free) - Ham digital mode decoder

Rivet is a free open source decoder for various spy agency and numbers station related HF signals such as Baudot, CCIR493-4, CIS36-50, CROWD36, FSK200/500, FSK200/1000, FSK, GW FSK, XPA and XPA2.

### [DMRDecode](http://borg.shef.ac.uk/dmrdecode/) (Windows/Mac/Linux) (Free) - DMR Decoder

DMRDecode is a free open source DMR decoder which currently only displays DMR frames in text.

### [CWSkimmer](http://www.dxatlas.com/cwskimmer/) (Windows) (Paid) ([Related Post](https://www.rtl-sdr.com/cw-morse-code-with-rtl-sdr/)) - CW Decoder

CWSkimmer is a Morse code (CW) decoder. It is generally regarded as one of the best CW decoders available. Use in conjunction with a general purpose SDR receiver and pipe the audio output to CWSkimmer.

### [MMSSTV](http://hamsoft.ca/pages/mmsstv.php) (Windows) (Free) - SSTV

MMSSTV is a dedicated SSTV decoder program.

### [Taxidecoder](http://sourceforge.net/projects/taxidecoder/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/decoding-taxi-mobile-data-terminal-signals-with-rtl-sdr/)) - MDT Decoder

Taxidecoder is a free mobile data terminal (MDT) decoder. It will only work in countries that use MDT data signals that taxi decoder supports. Use in conjunction with a general purpose SDR receiver and pipe the audio output to taxidecoder.

### [ScanEyes](http://tylerwatt12.com/introducing-scaneyes/) (Free) - Archiver

A PHP based web server program which can be used to record, log and analyze trunked radio traffic.

### [LTR Analyzer](http://home.ica.net/\~phoenix/wap/LTR/) (Free) ([Related Post](https://www.rtl-sdr.com/logic-trunked-radio-analyzer-rtl-sdr/)) - LTR

Used to analyze trunked LTR signals.

### [softEOT/softDPU](https://groups.yahoo.com/neo/groups/SoftEOT/info) (Free) ([Related Post](https://www.rtl-sdr.com/decoding-hot-eot-dpu-train-data/)) - Trains

Can be used to decode end of train, head of train and distributed power unit telemetry which is used on some trains.

### [Xastir](http://xastir.org/index.php/Main\_Page) (Free) ([Related Post](https://www.rtl-sdr.com/using-xastir-rtl-sdr/)) - APRS

Linux software that allows you to visualize APRS signals on a map.

### [RTL1090 XHSI Interface](https://github.com/tomvd/rtl1090xhsi) (Free) ([Related Post](https://www.rtl-sdr.com/ads-b-onboard-737-realtime-primary-flight-navigation-display/)) - ADS-B

Allows RTL1090 to interface with XHSI, a program that can emulate airplane flight instruments.

### [Parus Decoder](https://www.rtl-sdr.com/decoding-russian-parus-cosmos-navigation-satellites-rtl-sdr/) (Free) ([Related Post](https://www.rtl-sdr.com/decoding-russian-parus-cosmos-navigation-satellites-rtl-sdr/)) - Satellites

Decodes data from the Russian Parus military communications and navigation satellites.

### [PlotRTL1090](https://gist.github.com/JorgeGT/9937f2c54d3636599164) (Free) ([Related Post](https://www.rtl-sdr.com/visualizing-ads-b-data-3d-using-matlab/)) - ADS-B

Creates a 3D image of ADS-B data from dump1090 using MATLAB.

### [LRPT Decoder](https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-meteor-m-n2-lrpt-weather-satellite-images-rtl-sdr/) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-meteor-m-n2-lrpt-weather-satellite-images-rtl-sdr/)) - LRPT Satellites

Decodes LRPT weather satellite images.

### [SDRecord](https://github.com/cybernova/SDRecord) (Free) - Recorder

Used for recording audio from an SDR with squelch feature that stops recording when there is no sound.

### [SDRRecorder](http://michelinok76.blogspot.it/2015/04/sdrrecorder-v10-record-your-iq-stream.html) (Linux) (Free) - Recorder

A linux script that helps automate I/Q recordins.

### [Doppler & Demod](https://www.rtl-sdr.com/linux-command-line-based-doppler-correction-and-demodulation-tools/) (Free) ([Related Post](https://www.rtl-sdr.com/linux-command-line-based-doppler-correction-and-demodulation-tools/)) - Satellites

Two Linux based programs which work with the piped output of rtl\_sdr to correct for satellite doppler shift and to also demodulate FM.

### [rtl\_heatmap](https://github.com/donothingloop/rtl\_heatmap/) (Free) ([Related Post](https://www.rtl-sdr.com/new-software-rtl\_heatmap-web-based-waterfall-plotter-rtl\_power/)) - FFT Plotting

Create a heatmap image from an rtl\_power scan.

### [rtl-gopow](https://github.com/dhogborg/rtl-gopow) (Go, multiplatform) (Free) ([Related Post](https://www.rtl-sdr.com/rtl-gopow-new-heat-map-tool/))

Can be used to render a nice heat map from an rtl\_power scan.

### [Inmarsatdecoder](http://www.inmarsatdecoder.com/) (Windows) (Free/Paid) ([Related Post](https://www.rtl-sdr.com/rtl-sdr-tutorial-decoding-inmarsat-std-c-egc-messages/))

Allows decoding of Inmarsat STD-C EGC messages.

### [Tekmanoid EGC / LES Decoder](http://www.tekmanoid.com/egc.shtml) (Windows) (Free)

Decodes STD-C Inmarsat signals.

### [Scytale-C](https://bitbucket.org/scytalec/scytalec/src/develop/) (Windows) (Free)

Decodes STD-C Inmarsat signals.



### [Rtl\_power Heatmap Viewer](https://github.com/DE8MSH/rhv) (Windows/Mac/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/rtl\_power-heatmap-viewer/))



Software that allows you to visualize the output of a rtl\_power scan using a generated waterfall image in a web browser. Shows the current frequency and time wherever the mouse is.

### [JAERO](http://jontio.zapto.org/hda1/jaero.html) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/jaero-a-new-rtl-sdr-compatible-decoder-for-inmarsat-aero-signals/))

Can be used to decode AERO signals from Inmarsat satellites. AERO is similar to ACARS but sent via satellite communications.



### [Inspectrum](https://github.com/miek/inspectrum) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/inspectrum-a-new-tool-for-analyzing-captured-signals/))

A tool very useful for reverse engineering digital signals. Helps you extra the binary string and timing information.

[![](https://www.rtl-sdr.com/wp-content/uploads/2014/02/inspectrum-500x282.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2014/02/inspectrum.jpg)

### [DSpectrum/DSpectrumGUI](https://github.com/tresacton/dspectrumgui) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/signal-reverse-engineering-tool-dspectrum-upgraded-to-dspectrumgui/))

An upgrade to Inspectrum which gives it a GUI and more visual decoding features. Extremely useful for reverse engineering digital signals.

[![DSpectrumGUI](https://www.rtl-sdr.com/wp-content/uploads/2017/05/dspectrumGUI-500x487.png)](https://www.rtl-sdr.com/wp-content/uploads/2017/05/dspectrumGUI.png)

### [Chronolapse](https://www.chronolapse.com/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/creating-a-long-term-averaged-waterfall-on-hdsdr-with-chronolapse/))

Not something you use via piping, but has can be useful for making timelapse waterfall recordings when a program does not have that feature by default. See the related post for more info.

### [d3-waterfall](https://www.dcddcc.com/blog/2016-10-09-wideband-surveying-with-software-defined-radio.html) (HTML5) (Free) ([Related Post](https://www.rtl-sdr.com/software-for-creating-an-interactive-rtl\_power-visualization/))

A tool for converting rtl\_power scans in csv format into a nice HTML based waterfall graph. Also takes data from sigidwiki.com and overlays it on top of the waterfall.

### [Universal Radio Hacker](https://github.com/jopohl/urh) (Windows/MacOS/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/reverse-engineering-signals-universal-radio-hacker-software/))

A tool somewhat similar but a bit more advanced to Inspectrum for reverse engineering digital radio signals.



### [ATCS Monitor](http://www.atcsmon.com/) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/tracking-trains-monitoring-railroad-atcs-control-signals-with-an-rtl-sdr/))

A decoder for ATCS signals that come from trains. Can be used to track train track status and positions of trains. Compatible with the signals used in the USA. Note that to download the software you will need to join the ATCS Monitor Yahoo! Group.

### [leandvb](https://github.com/pabr/leansdr) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/demodulating-the-outernet-signal-with-leandvb-and-an-rtl-sdr/))

A lightweight DVB-S decoder for receiving Digital Amateur TV like HamTV from the International Space Station. Can also be used to decode the L-band Outernet signal.

### [deinvert](https://github.com/windytan/deinvert) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/deinvert-a-voice-inversion-descrambler/))

A simple program to deinvert analog radio signals scrambled with voice inversion scrambling.

### [WSJT-X](https://physics.princeton.edu/pulsar/K1JT/wsjtx.html) (Windows/Linux/MacOD) (Free) ([Related Post](https://www.rtl-sdr.com/tutorial-setting-up-a-low-cost-qrp-ft8-jt9-wspr-etc-monitoring-station-with-an-rtl-sdr-v3-and-raspberry-pi-3/))

Decodes ham QRP modes like FT8 and WSPR.

### [mySdrPlayback](http://www.blackcatsystems.com/software/sdr\_iq\_recording\_playback\_program.html) (OSX) (Free) ([Related Post](https://www.rtl-sdr.com/mysdrplayback-macos-software-for-browsing-through-iq-recordings-from-sdr-sdruno-and-more/))

OSX only software that allows you to browse IQ recordings from SDR#, SDRUno and other software.

### [coole-radar](https://github.com/wiseman/coole-radar) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/coole-radar-a-retro-terminal-based-radar-display-for-ads-b-aircraft-data/))

A retro styled terminal based radar app for displaying ADS-B data.

### [IridiumLive](https://github.com/microp11/iridiumlive) (Windows/Linux) (Free) ([Related Post](https://www.rtl-sdr.com/iridiumlive-new-software-to-plot-iridium-satellites-as-they-pass-overhead-with-an-rtl-sdr/))

Plots Iridium satellite tracks with data coming from gr-iridium.

### [radio\_analyser](https://bitbucket.org/zeddy1024/radio\_analyser/src/master/) (Linux) (Free) ([Related Post](https://www.rtl-sdr.com/radio-analyser-new-program-for-plotting-dsdplus-statistics/))

Plots talk group statistics from DSDPlus.

### [DSDPlusUI](https://groups.io/g/DSDPlusUI) (Windows) (Free) ([Related Post](https://www.rtl-sdr.com/dsdplusui-a-graphical-user-interface-for-dsd/))

A GUI for DSD+

### [Meteor Logger](http://www.ars-electromagnetica.de/robs/download.html) (Windows) (Free) (Related Post)

Detects and logs meteor scatter detections via the audio from any radio like an RTL-SDR.
