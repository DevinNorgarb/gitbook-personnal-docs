# SITL Erle Robotics: MAV Tools

The SITL (Software In The Loop) simulator allows you to run APM without any hardware. It is a build of the autopilot code using an ordinary C++ compiler and gives you a native executable to test the behaviour of the code without hardware.

![SITL Linux](https://devthedev.gitbook.io/guides/~gitbook/image?url=http%3A%2F%2Fdev.ardupilot.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2013%2F04%2FSITL_Linux.png\&width=768\&dpr=3\&quality=100\&sign=21aeb423\&sv=2)

Installation (Ubuntu)

* Refer to the APM wiki for installation instructions: http://dev.ardupilot.com/wiki/setting-up-sitl-on-linux/

Launch the simulator

{% stepper %}
{% step %}
### Launch SITL

Run:

{% code title="Launch SITL" %}
```bash
sim_vehicle.sh -w
```
{% endcode %}

This launches the SITL simulator with the default settings.
{% endstep %}
{% endstepper %}

Installation (Mac OS)

{% stepper %}
{% step %}
### 1. Install command-line tools and Python modules

Install the command-line tools (including GCC) for macOS, then install Python modules:

{% code title="Install pip and Python dependencies" %}
```bash
sudo easy_install pip
sudo pip install pexpect
sudo pip install pyserial
```
{% endcode %}
{% endstep %}

{% step %}
### 2. Install MAVLink and MAVProxy (recommended)

Install via pip:

{% code title="Install MAVLink and MAVProxy" %}
```bash
sudo pip install pymavlink MAVProxy
```
{% endcode %}
{% endstep %}

{% step %}
### 3. Alternative: install MAVLink and MAVProxy from source

Clone the repositories and run the setup in each:

{% code title="Clone and install from source" %}
```bash
git clone https://github.com/tridge/MAVProxy
git clone https://github.com/tridge/mavlink

# In each cloned directory:
sudo python setup.py build install
```
{% endcode %}
{% endstep %}

{% step %}
### 4. Get the APM branch that compiles on macOS and build SITL

The erlerobot ardupilot macOS branch contains relevant changes:

{% code title="Clone ardupilot and build SITL on macOS" %}
```bash
git clone https://github.com/erlerobot/ardupilot
cd ardupilot
git checkout macos
cd ArduCopter
make configure
make sitl
```
{% endcode %}

A relevant commit: https://github.com/erlerobot/ardupilot/commit/337bd7bf1f6d285934e887ddb06563960d0aa157
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Refer to the APM wiki for additional setup details: http://dev.ardupilot.com/wiki/setting-up-sitl-on-linux/
{% endhint %}

Source:

* https://groups.google.com/forum/#!searchin/drones-discuss/SITL$20mac$20os/drones-discuss/kLx9kJAT9As/5UnGEn-mSQsJ
* https://github.com/erlerobot/ardupilot/commit/337bd7bf1f6d285934e887ddb06563960d0aa157

Last updated 3 years ago
