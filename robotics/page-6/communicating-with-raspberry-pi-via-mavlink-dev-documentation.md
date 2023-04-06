# Communicating with Raspberry Pi via MAVLink — Dev documentation

This page explains how to connect and configure a Raspberry Pi (RPi) so that it is able to communicate with a flight controller using the MAVLink protocol over a serial connection. This can be used to perform additional tasks such as image recognition which simply cannot be done by the flight controller due to the memory requirements for storing images.

### Connecting the Flight controller and RPi Hardware[¶](broken-reference)



Connect the flight controller’s TELEM2 port to the RPi’s Ground, TX and RX pins as shown in the image above. More details on the individual RPi’s pin functions can be found [here](http://elinux.org/RPi\_Low-level\_peripherals).

The RPi can be powered by connecting +5V source to the +5V pin **or** from USB in.

Addon boards such as the [Pi-Connect](https://www.rpanion.com/product/pi-connect-lite/) can simplify the connection of the RPi by providing a power supply and telemetry port.

Tip

Depending on the model of RPi used and internal/external peripherals used, +5V power requirements can vary from 80mA to close to 2.5A. The power budget for the particular system configuration should be assessed to determine the requirements for the +5V supply current. It is usually not recommended that +5v be supplied via the flight controller’s TELEM port connector.

### Setting up the flight controller[¶](broken-reference)

Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

* [SERIAL2\_PROTOCOL](https://ardupilot.org/copter/docs/parameters.html#serial2-protocol) = 2 (the default) to enable MAVLink 2 on the serial port.
* [SERIAL2\_BAUD](https://ardupilot.org/copter/docs/parameters.html#serial2-baud) = 921 so the flight controller can communicate with the RPi at 921600 baud.
* [LOG\_BACKEND\_TYPE](https://ardupilot.org/copter/docs/parameters.html#log-backend-type) = 3 if you are using APSync to stream the dataflash log files to the RPi

### Configure the serial port (UART)[¶](broken-reference)

If not already configured, the Raspberry Pi’s serial port (UART) will need to be enabled. Use the Raspberry Pi configuration utility for this.

Type:

And in the utility, select “Interfacing Options”:



RasPiConfiguration Utility[¶](broken-reference)

And then “Serial”:



When prompted, select `no` to “Would you like a login shell to be accessible over serial?”.

When prompted, select `yes` to “Would you like the serial port hardware to be enabled?”.

Reboot the Raspberry Pi when you are done.

The Raspberry Pi’s serial port will now be usable on `/dev/serial0`.

### Configure the Wifi[¶](broken-reference)

If desired, the Raspberry Pi’s Wifi can be configured to create a Wifi access point. This will allow other clients to connect to the RPi and stream telemetry. See the [official RPi documentation](https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md) for details.

Tip

The built-in Wifi on the Raspberry Pi does not have a large range. If range is an issue, consider a USB Wifi adapter with external antenna.

### Setup the RPi Software[¶](broken-reference)

There are a few different software options for communicating with the flight controller. All use the MAVLink protocol for communication.

#### APSync[¶](broken-reference)

The easiest way to setup the RPi is to flash one of the existing APSync images:

* Purchase a formatted 8GB or 16GB SD card (16GB is better because some 8GB cards will not be quite large enough to fit the image) and insert into your laptop/desktop computer’s SD card slot
* Download the latest [image from firmware.ardupilot.org](https://firmware.ardupilot.org/Companion/apsync). Look for the file starting with “apsync-rpi”.
* Use the [Etcher](https://www.balena.io/etcher/) software to load the image onto the micro SD card.
*   Insert the micro SD card into into the Pi’s micro SD card slot

    > Note
    >
    > There is a more recent APSync build for the RPi in the [forums](https://discuss.ardupilot.org/t/new-apsync-build-for-raspberry-pi/49528).

The APSync image will have the serial port (UART) already enabled.

#### MAVProxy[¶](broken-reference)

MAVProxy can be used to send commands to the flight controller from the Pi. It can also be used to route telemetry to other network endpoints.

This assumes you have a SSH connection to the Pi. If not, see see the the [RPi Documentation](https://www.raspberrypi.org/documentation/remote-access/ssh/).

See the [MAVProxy Documentation](https://ardupilot.org/mavproxy/docs/getting\_started/download\_and\_installation.html#mavproxy-downloadinstalllinux) for install instructions

To test the RPi and flight controller are able to communicate with each other first ensure the RPi and flight controller are powered, then in a console on the RPi type:

```
python3 mavproxy.py --master=/dev/serial0 --baudrate 921600 --aircraft MyCopter
```

Once MAVProxy has started you should be able to type in the following command to display the `ARMING_CHECK` parameters value

```
param show ARMING_CHECK
param set ARMING_CHECK 0
arm throttle
```



Note

If you get an error about not being able to find log files or if this example otherwise doesn’t run properly, make sure that you haven’t accidentally assigned these files to another username, such as Root.

To run MAVProxy as a telemetry router on the Pi, set it up to run as a service and use the –daemon and –non-interactive parameters. For example:

```
mavproxy.py --daemon --non-interactive --default-modules='' --continue --master=/dev/serial0 --baudrate 1500000 --out=udp:pro:14550
```

Note

If the Raspberry PI is heavily loaded, mavproxy.py might not provide a reliable connecton for telemetry routing. This is more likely on older/slower devices like the Raspberry PI Zero. If this happens, consider using mavlink-routerd. See this post on the ArduPilot forum for a detailed discussion: [MavLink Routing with Router software](https://discuss.ardupilot.org/t/mavlink-routing-with-a-router-software/82138#solution-1-3).

#### Mavlink-router[¶](broken-reference)

Mavlink-router is used to route telemetry between the RPi’s serial port and any network endpoints. See the [documentation](https://github.com/intel/mavlink-router) for install and running instructions.

After installing, edit the mavlink-router config file’s `/etc/mavlink-router/main.conf` UART section to:

```
[UartEndpoint to_fc]
Device = /dev/serial0
Baud = 921600
```

You will also need to add an additional UDP endpoint allow other ground stations on the same network to connect to the Pi. Edit the mavlink-router config file `/etc/mavlink-router/main.conf` to include:

```
[UdpEndpoint to_14550_external]
Mode = eavesdropping
Address = 0.0.0.0
Port = 14550
PortLock = 0
```

#### mavp2p[¶](broken-reference)

mavp2p is a flexible and efficient Mavlink proxy / bridge / router, implemented in the form of a command-line utility. Functioning like MAVProxy’s router, mavp2p can replace MAVProxy in companion computers with limited resources. mavp2p has pre-built binaries for most common Raspberry PI architectures. [MAVp2p](https://github.com/aler9/mavp2p).

#### DroneKit[¶](broken-reference)

The most up-to-date instructions for [Installing DroneKit](https://dronekit-python.readthedocs.io/en/latest/guide/quick\_start.html) on Linux are in the DroneKit-Python documentation.

#### Rpanion-server[¶](broken-reference)

[Rpanion-server](https://www.docs.rpanion.com/software/rpanion-server) is a web-based GUI for configuring flight controller telemetry, logging, video streaming and network configuration.

Installation is via a disk image:

* Purchase a formatted 8GB (or larger) micro SD card and insert into your laptop/desktop computer’s SD card slot
* Download the latest [image](https://www.docs.rpanion.com/software/rpanion-server).
* Use the [Etcher](https://www.balena.io/etcher/) software to load the image onto the micro SD card.
* Insert the micro SD card into into the Pi’s micro SD card slot

The Rpanion-server image will have the serial port (UART) already enabled.

### Connecting with the Mission Planner[¶](broken-reference)

The flight controller will respond to MAVLink commands received through Telemetry 1 and Telemetry 2 ports (see image at top of this page) meaning that both the RPi and the regular ground station (i.e. Mission planner, etc) can be connected. In addition it is possible to connect the Mission Planner to the MAVProxy application running on the RPi similar to how it is done for SITL.

Primarily this means adding an `--out <ipaddress>:14550` to the MAVProxy startup command with the being the address of the PC running the mission planner. On windows the `ipconfig` can be used to determine that IP address. On the computer used to write this wiki page the MAVProxy command became:

```
mavproxy.py --master=/dev/ttyAMA0 --baudrate 57600 --out 192.168.137.1:14550 --aircraft MyCopter
```

Connecting with the mission planner is shown below:

