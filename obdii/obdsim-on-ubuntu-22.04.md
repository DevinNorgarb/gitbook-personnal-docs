---
cover: ../.gitbook/assets/2022-06-19_21-58.png
coverY: 0
---

# obdsim on ubuntu 22.04

[https://stackoverflow.com/a/26878598](https://stackoverflow.com/a/26878598)

I had the same problem on Linux and I resolved it by installing some libraries and recompiling OBDSim.

I will put here the whole process to make a guide for new users like me.

1.  Download OBDSim:

    ```ruby
    wget http://icculus.org/obdgpslogger/downloads/obdgpslogger-0.16.tar.gz 
    ```

    Or get the most recent version from: [http://icculus.org/obdgpslogger/](http://icculus.org/obdgpslogger/)
2.  Install OBDSim:

    ```bash
    tar -zxvf obdgpslogger-0.16.tar.gz
    cd obdgpslogger-0.16
    mkdir build
    cd build
    ```

    I have to install only these libraries, but in your case keep attention to warning messages of cmake and install all that it ask you to install:

    ```bash
    sudo apt-get install libbluetooth-dev libfltk1.1-dev libfltk1.1 fltk1.1-doc fluid fftw3-dev libgps-dev libftdi-dev
    cmake .. 
    make obdsim
    cd ../bin/
    ```
3.  Run OBDSim:

    ```bash
    ./obdsim -b -g gui_fltk
    ```

    Now you have OBDSim running, but you need a channel to communicate it with your app. You need a serial port working as a bluetooth interface.
4.  Creating the serial->bluetooth interface:

    ```yaml
    sudo rfcomm bind 0 00:00:00:00:00:00 1 # Change this MAC address, putting the MAC of your device
    sudo sdptool add SP
    ```

    You can discover the MAC address of your device by using hcitool:

    ```
    hcitool scan 
    ```

    It only works when the bluetooth configuration "Visible to all nearby Bluetooth devices" is on  your device.
