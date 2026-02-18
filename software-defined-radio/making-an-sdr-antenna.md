---
description: Making Antennas for 1090MHz ADS-B Aircraft Tracking
---

# Making an SDR Antenna

Page found on this link originally [https://lucsmall.com/2017/02/06/making-antennas-for-1090mhz-ads-b-aircraft-tracking/](https://lucsmall.com/2017/02/06/making-antennas-for-1090mhz-ads-b-aircraft-tracking/)

Over the southern hemisphere summer of 2016/2017 I made a flurry of antennas tuned to 1090MHz to capture position information from aircraft ADS-B broadcasts. Here I document them, from newest to oldest.

The nice thing about making antennas for Gigahertz frequencies is that they tend to be rather compact. The wavelength of a 1090MHz transmission is approximately 275mm. Since the length of the antenna elements shares a relationship with the wavelength, this means you can make antennas with few materials, very inexpensively.

The newer antennas use F connectors to attach to my [ruggedised USB DVB-T dongle](http://lucsmall.com/2017/02/01/ruggedised-usb-dvb-t-dongle-for-sdr/), which in turn connects to my [ruggedised Orange Pi Zero](http://lucsmall.com/2017/01/31/ruggedised-orange-pi-zero/) which [runs software to track aircraft](http://lucsmall.com/2017/01/29/aircraft-tracking-with-the-orange-pi-zero/).

[!["A 16 radial spider antenna for ADSB mounted on a tripod, at sunset"](https://lucsmall.com/images/preview/2017-02-06-00-spider-antenna-by-night.png)](https://lucsmall.com/images/2017-02-06-00-spider-antenna-by-night.png)

### Calculations

Here are the relevant calculations:

```
wavelength = speed of light / frequency
wavelength = 299,792,000 m/s / 1,090,000,000Hz

wavelength = 0.275m = 275mm
half wavelength = 137.5mm
quarter wavelength = 68.75mm
```

For most antenna’s below, it’s the quarter wavelength measurement that we’re interested in. I round this up to **69mm** for convenience.

### 16 radial spider

I think this is a good looking antenna, as far as antennas go. One 69mm wire forms the antenna, while sixteen 69mm wires bent downwards at 45° form the ground plane. They are soldered to a [copper end cap](https://www.bunnings.com.au/kinetic-15mm-copper-capillary-end-cap_p4880053) with a hole drilled in the middle for an F-connector. The wire is 1mm solid core electrical cable with the insulation stripped:

<figure><img src="https://lucsmall.com/images/preview/2017-02-06-06-spider-antenna-16-radial.jpg" alt=""><figcaption></figcaption></figure>

### 8 radial spider

Before the 16 radial spider, there was this 8 radial spider built around the lid of a powdered stock tin. The antenna wire is 69mm. And the radials are 69mm long from the edge of the tin to their ends. They are bent downwards at approximately 45°. In the centre of the lid, I drilled a hole to accommodate an F-connector. The wire is 1mm solid core electrical cable with the insulation stripped.

I’m not entirely sure if the 69mm radial length should be measured from the edge of the tin lid (as I have done). Or whether they should be cut shorter to account for the ground plane effect of the tin lid. I’ve read that sometimes antenna radials are “tuned” (i.e. are sized to be resonant at the desired frequency) and at other times they are simply designed to be large with respect to the antenna. I’m not sure what’s best at 1090MHz; fodder for a future experiment, I guess.

<figure><img src="https://lucsmall.com/images/preview/2017-02-06-05-spider-antenna-8-radial.jpg" alt=""><figcaption></figcaption></figure>

### 4 radial spider

Before the 8 radial spider was the 4 radial spider taking inspiration from [this post](http://discussions.flightaware.com/ads-b-flight-tracking-f21/three-easy-diy-antennas-for-beginners-t20177.html). Very simple construction using a 69mm antenna and four 69mm radials soldered to a bulkhead BNC connector:

[!["4 radial spider"](https://lucsmall.com/images/preview/2017-02-06-04-spider-antenna-4-radial.jpg)](https://lucsmall.com/images/2017-02-06-04-spider-antenna-4-radial.jpg)

I was a bit miffed after making this antenna, because its performance seemed every bit as good as the coaxial collinear antenna I had made earlier, yet it took about a tenth of the time to build!

### The coaxial collinear (co-co)

Wanting something better than the (albeit tuned) original antenna described next, I followed the instructions in my copy of the [September 2013 Sillicon Chip Magazine](http://www.siliconchip.com.au/Issue/2013/September/Collinear+Antennas+For+Aircraft+ADS-B+Signals?res=nonflash) to build this coax collinear (co-co) antenna:

[!["Coaxial collinear antenna"](https://lucsmall.com/images/preview/2017-02-06-03-coaxial-collinear.jpg)](https://lucsmall.com/images/2017-02-06-03-coaxial-collinear.jpg)

I used a coax stripper to very carefully cut 12 identical lengths of coax. I based the length of the sections (114mm each) on the half wavelength (137.5mm) scaled down by the velocity factor of the Belden RG6 coax cable (0.83) I was using. I assembled, terminated with a BNC socket, and housed the antenna inside electrical conduit.

The co-co antenna was better than the tuned original antenna. But after the very simple 4 radial spider performed just as well, I concluded that homebrew coaxial collinear antennas may just not be worth all the additional effort. That said, with greater accuracy in construction and perhaps different coax, I think they could give results. It’s just hard to achieve this accuracy with fairly basic tools and no network analyser to characterise the finished antenna.

A very similar design is described [here](https://www.balarad.net/).

### A tuned the stock antenna

This was my first custom antenna. Taking the stock antenna and trimming it to 69mm. The improvement after trimming the antenna was noticeable.

[!["Modified vs unmodified antenna"](https://lucsmall.com/images/preview/2017-02-06-02b-tuned-vs-untuned-antenna.jpg)](https://lucsmall.com/images/2017-02-06-02b-tuned-vs-untuned-antenna.jpg)

[!["Tuned antenna"](https://lucsmall.com/images/preview/2017-02-06-02a-tuned-antenna.jpg)](https://lucsmall.com/images/2017-02-06-02a-tuned-antenna.jpg)

### The stock antenna

The stock antenna is 115mm long meaning it’s tuned for approximately 650MHz. Good, no doubt, for DVB-T broadcasts in many countries, but not an efficient antenna for ADS-B at 1090MHz. In spite of this, the stock antenna’s performance was surprisingly good. I was tracking 4 or so planes from inside my home the evening I first played with SDR. Talk about instant gratification.

[!["Original antenna"](https://lucsmall.com/images/preview/2017-02-06-01-original-antenna.jpg)](https://lucsmall.com/images/2017-02-06-01-original-antenna.jpg)x

Posted by Luc Small Feb 6th, 2017
