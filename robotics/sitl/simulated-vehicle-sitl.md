# Simulated Vehicle (SITL)

The SITL (Software In The Loop) simulator allows you to create and test DroneKit-Python apps without a real vehicle (from your developer desktop).

SITL can run natively on Linux (x86 only), macOS and Windows, or within a virtual machine. It can be installed on the same computer as DroneKit, or on another computer on the same network.

This page explains how to install and run SITL, and how to connect DroneKit-Python and Ground Stations at the same time.

## DroneKit-SITL

DroneKit-SITL is the simplest, fastest and easiest way to run SITL on Windows, Linux (x86 only), or macOS. It is installed from Python’s pip tool on all platforms, and works by downloading and running pre-built vehicle binaries appropriate for the host OS.

For more information, see the project on GitHub: https://github.com/dronekit/dronekit-sitl

{% hint style="warning" %}
DroneKit-SITL is still relatively experimental and there are only a few pre-built vehicles (some are old/unstable).

Binaries are built and tested on Windows 10, Ubuntu Linux, and macOS “El Capitan”. Binaries are only available for x86 architectures. ARM builds (e.g. for Raspberry Pi) are not supported.

Please report issues on GitHub: https://github.com/dronekit/dronekit-sitl/issues
{% endhint %}

### Installation

Install or update the tool on all platforms using pip:

{% code title="Install DroneKit-SITL" %}
```bash
pip install dronekit-sitl -UI
```
{% endcode %}

### Running SITL

To run the latest Copter binary (downloading binaries if needed):

{% code title="Start latest Copter (default) - listens on 127.0.0.1:5760" %}
```bash
dronekit-sitl copter
```
{% endcode %}

SITL will start and wait for TCP connections on 127.0.0.1:5760.

To specify a particular vehicle/version and parameters (home location, vehicle model, etc.):

{% code title="Start a specific vehicle and home location" %}
```bash
dronekit-sitl plane-3.3.0 --home=-35.363261,149.165230,584,353
```
{% endcode %}

Other useful arguments:

```bash
dronekit-sitl -h            # List all parameters to dronekit-sitl.
dronekit-sitl copter -h     # List additional parameters for the specified vehicle (e.g. "copter").
dronekit-sitl --list        # List all available vehicles.
dronekit-sitl --reset       # Delete all downloaded vehicle binaries.
dronekit-sitl ./path [args...]  # Start SITL instance at target file location.
```

{% hint style="info" %}
You can also use dronekit-sitl to start a SITL executable you built locally. Put the file path of the executable in the SITL\_BINARY environment variable, or supply it as the first argument.
{% endhint %}

### Connecting to DroneKit-SITL

DroneKit-SITL waits for TCP connections on 127.0.0.1:5760. DroneKit-Python scripts running on the same computer can connect using:

{% code title="Connect from DroneKit-Python" %}
```python
vehicle = connect('tcp:127.0.0.1:5760', wait_ready=True)
```
{% endcode %}

After something connects to port 5760, SITL will wait for additional connections on subsequent ports (5763, 5766, 5769, etc.).

{% hint style="warning" %}
While you can connect to these additional ports, some users report problems when viewing running examples with Mission Planner. If you need to connect a ground station and DroneKit at the same time, we recommend using MAVProxy (see “Connecting an additional Ground Station”).
{% endhint %}

### DroneKit-SITL Python API

DroneKit-SITL exposes a Python API: https://github.com/dronekit/dronekit-sitl#api — use it to start and control simulation from within your scripts (useful for tests and examples).

## Building SITL from source

You can natively build SITL from source on Linux, Windows and macOS, or from within a Vagrant Linux VM. Building from source is useful to test the latest changes, use versions without pre-built binaries, or if DroneKit-SITL does not work for you.

Differences when building from source:

* MAVProxy is included and started by default. Use MAVProxy terminal to control the autopilot.
* You connect to SITL via UDP on 127.0.0.1:14550. Use MAVProxy’s output add to add additional ports.
* You may need to disable arming checks and load autotest parameters to run examples.
* It is easier to add a virtual rangefinder and add a virtual gimbal for testing.

ArduPilot wiki guides for native builds:

* http://dev.ardupilot.com/wiki/setting-up-sitl-on-linux/
* http://dev.ardupilot.com/wiki/simulation-2/sitl-simulator-software-in-the-loop/sitl-native-on-windows/
* http://dev.ardupilot.com/wiki/setting-up-sitl-using-vagrant/

## Connecting an additional Ground Station

You can connect a ground station to an unused port to which messages are forwarded. The most reliable way to add new ports is to use MAVProxy.

{% stepper %}
{% step %}
### If you built SITL from source (MAVProxy already running)

Add new ports in the MAVProxy console using:

```bash
output add 127.0.0.1:14552
```
{% endstep %}

{% step %}
### If you are using DroneKit-SITL

1. Install MAVProxy for your system:
   * http://dronecode.github.io/MAVProxy/html/getting\_started/download\_and\_installation.html
2. In a second terminal spawn MAVProxy to forward messages from TCP 127.0.0.1:5760 to UDP ports (example):

{% code title="Start MAVProxy to forward to UDP ports" %}
```bash
mavproxy.py --master tcp:127.0.0.1:5760 --sitl 127.0.0.1:5501 --out 127.0.0.1:14550 --out 127.0.0.1:14551
```
{% endcode %}
{% endstep %}
{% endstepper %}

Once you have available ports you can connect your DroneKit script to one UDP address and your Ground Control Station to another.

Example sequence:

1. Connect the script:

```python
vehicle = connect('127.0.0.1:14550', wait_ready=True)
```

2. Connect Mission Planner to the second UDP port:
   * Download and install Mission Planner: http://ardupilot.com/downloads/?did=82
   * In Mission Planner, ensure the top-right selection says UDP, click Connect, and enter the port number (e.g. 14552).

After connecting, vehicle parameters will be loaded into Mission Planner and the vehicle displayed on the map.

{% hint style="info" %}
If you’re using the DroneKit-SITL Python API you will instead have to connect to SITL’s TCP port (since you cannot set up MAVProxy in that API). So if DroneKit connects to TCP port 5760, you would connect your GCS to 5763.

Note that a few examples may not behave perfectly using this approach. If you need to observe them in a GCS you should run SITL externally and use MAVProxy to connect to it.
{% endhint %}
