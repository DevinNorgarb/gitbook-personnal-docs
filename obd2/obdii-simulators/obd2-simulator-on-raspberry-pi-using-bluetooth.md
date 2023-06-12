---
description: ...that actually works
---

# OBD2 simulator on Raspberry Pi using Bluetooth

Start off by cloning the below repo

```
git clone git@github.com:DevinNorgarb/obdsim-arm64.git
```

Here is the README

```
OBDII/GPS Logging Tool
What?

Your car has lots of interesting things it can tell you from the
on-board computer while it's running. obdgpslogger is a small tool
to grab data from an OBDII device and log it to an sqlite database.
If you enable it [on by default, and a large part of this project's
point], then your gps position is also logged to the same database.

What are the other requirements?

Install gpsd first if you want gps support.
The GUI component requires FLTK and fluid.

How do I build this?

mkdir build
cd build
cmake .. # or ccmake .. to edit options
make
make install


And how do I run it?

obdgui # GUI for launching and getting live feedback from other tools
obdgpslogger [-s serialport] [-d sqlite database] # Actual logger
obd2kml [-d sqlite database] [-o output file] # Convert to Google Earth

More specific information is availble in --help or man pages
```

The bit is to to compile the firmware.

```bash
cd obdsim
```

```
mkdir build
```

```
cd build
```

```bash
cmake .. # or ccmake .. to edit options (TAKE NOTE)
```

```
make
```

```bash
sudo make install
```

I had an issue with gpsd breaking the build due to some syntax error.  If you also have the same issue run `ccmake ..` from the build directory and ensure your config looks similar to this:

<figure><img src="../../.gitbook/assets/image (1) (2).png" alt=""><figcaption><p>Ensure OBD_DISABLE_GPSD  is set to ON.</p></figcaption></figure>

You can then proceed with the installation.&#x20;

If you are wanting to use Bluetooth to connect your mobile phone to, so that you can use Torque, you will need to enable a few more settings.



Please replace the "DC:A6:32:F6:EA:E8"  with your own mac address when running the below command.&#x20;

```
sudo hciconfig
```

This should return your device bluetooth mac address, with the output being similar to this:

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Then run:

```bash
sudo rfcomm bind 0 DC:A6:32:F6:EA:E8 1
```

and finally:

```bash
sudo sdptool add SP
```

Now you can actually run the compiled software with bluetooth enabled by running:

```bash
obdsim -b
```
