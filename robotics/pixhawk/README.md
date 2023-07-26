# PixHawk



## Pixhawk Wiring Quick Start[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#pixhawk-wiring-quick-start)

This article provides high level information about how to power Pixhawk and connect its most important peripherals.

Warning

Do not connect any servos or other devices to the PWM outputs of your receiver. The RCIN port on the Pixhawk is designed for low power devices only, and a servo or relay may draw a lot of current from the receiver. If you connect a servo directly onto your receiver while the receiver is powered from the RCIN port of your Pixhawk you may damage your Pixhawk.

### Pixhawk Wiring Chart[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#pixhawk-wiring-chart)

[![../\_images/pixhawk\_connect\_essential\_peripherals.jpg](https://ardupilot.org/copter/\_images/pixhawk\_connect\_essential\_peripherals.jpg)](https://ardupilot.org/copter/\_images/pixhawk\_connect\_essential\_peripherals.jpg)

Copter users should also see the [Advanced Pixhawk Quadcopter Wiring Chart](https://ardupilot.org/copter/docs/advanced-pixhawk-quadcopter-wiring-chart.html#advanced-pixhawk-quadcopter-wiring-chart).

### Power Pixhawk[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#power-pixhawk)

Pixhawk is typically powered via its “power” port, as shown in the picture below. The power port simultaneously powers Pixhawk and reads voltage and current analog measurements produced by an optional power module. Information about powering the Pixhawk can be found in the topic [Powering the Pixhawk](https://ardupilot.org/copter/docs/common-powering-the-pixhawk.html#common-powering-the-pixhawk).

[![../\_images/pixhawkpower-port.jpg](https://ardupilot.org/copter/\_images/pixhawkpower-port.jpg)](https://ardupilot.org/copter/\_images/pixhawkpower-port.jpg)

### Connect remote control inputs[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#connect-remote-control-inputs)

Pixhawk is compatible with

> 1. PPM-Sum receivers
> 2. SBus receivers
> 3. IBUS receivers
> 4. [FPort Receivers](https://ardupilot.org/copter/docs/common-FPort-receivers.html#common-fport-receivers)
> 5. [Spektrum DSM, DSM2, and DSM-X Satellite receivers](https://ardupilot.org/copter/docs/common-spektrum-rc.html#common-spektrum-rc)
> 6. [SRXL version 1 and version 2 receivers](https://ardupilot.org/copter/docs/common-srxl-receivers.html#common-srxl-receivers)
> 7. [Graupner SUM-D](https://ardupilot.org/copter/docs/common-graupner-rc.html#common-graupner-rc)

For traditional single-wire-per-channel (PWM) receivers a PPM encoder can be used to convert the receiver outputs to PPM-SUM.

Tip

Information about compatible receivers and how they are connected can be found in [Radio Control Systems](https://ardupilot.org/copter/docs/common-rc-systems.html#common-rc-systems)

[![../\_images/FRSkyTaranis.jpg](https://ardupilot.org/copter/\_images/FRSkyTaranis.jpg)](https://ardupilot.org/copter/\_images/FRSkyTaranis.jpg)

FRSky Taranis Transmitter[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#id1)

### Connect buzzer and safety switch[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#connect-buzzer-and-safety-switch)

The buzzer and safety switch button are mandatory for Pixhawk. Connect to the BUZZER and SWITCH ports as shown.

[![../\_images/pixhawk-required\_peripherals.jpg](https://ardupilot.org/copter/\_images/pixhawk-required\_peripherals.jpg)](https://ardupilot.org/copter/\_images/pixhawk-required\_peripherals.jpg)

Warning

Mount the beeper at least 5cm away from the flight controller or the noise may upset the accelerometers.

### 3DR GPS+Compass[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#dr-gps-compass)

The [3DR UBlox GPS + Compass Module](https://ardupilot.org/copter/docs/common-installing-3dr-ublox-gps-compass-module.html#common-installing-3dr-ublox-gps-compass-module) is the recommended GPS for Pixhawk on ArduPilot. The GPS ports are connected with the six-position DF13 cable, and the MAG port is connected to the I2C port with the four-position DF13 cable.

[![../\_images/GPS\_TopAndSide.jpg](https://ardupilot.org/copter/\_images/GPS\_TopAndSide.jpg)](https://ardupilot.org/copter/\_images/GPS\_TopAndSide.jpg)

3DR UBlox GPS + Compass Module[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#id2)

The topic [3DR UBlox GPS + Compass Module](https://ardupilot.org/copter/docs/common-installing-3dr-ublox-gps-compass-module.html#common-installing-3dr-ublox-gps-compass-module) shows how to connect to Pixhawk and include additional configuration and mounting information.

### Connect Motors[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#connect-motors)

[![../\_images/pixhawk\_motor\_outputs.jpg](https://ardupilot.org/copter/\_images/pixhawk\_motor\_outputs.jpg)](https://ardupilot.org/copter/\_images/pixhawk\_motor\_outputs.jpg)

For Copter see [Connect ESCs and Motors](https://ardupilot.org/copter/docs/connect-escs-and-motors.html#connect-escs-and-motors).

In overview, for copters connect each signal wire from the PDB to the main output signal (S) pins by motor number:

* Pin 1 = Motor 1 - - Pin 5 = Motor 5
* Pin 2 = Motor 2 - - Pin 6 = Motor 6
* Pin 3 = Motor 3 - - Pin 7 = Motor 7
* Pin 4 = Motor 4 - - Pin 8 = Motor 8

### Connect other peripherals[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#connect-other-peripherals)

Depending on your hardware there may be any number of other peripherals attached, including sensors, cameras, grippers etc. These can be found as sub-pages of the topic [Optional Hardware](https://ardupilot.org/copter/docs/common-optional-hardware.html#common-optional-hardware).

Information about connecting these peripherals to Pixhawk is found in the respective pages.

### Related information[¶](https://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html#related-information)

* [Pixhawk Overview](https://ardupilot.org/copter/docs/common-pixhawk-overview.html#common-pixhawk-overview) - includes specifications, pin assignments etc.
* [Powering the Pixhawk](https://ardupilot.org/copter/docs/common-powering-the-pixhawk.html)
* [Advanced Pixhawk Quadcopter Wiring Chart](https://ardupilot.org/copter/docs/advanced-pixhawk-quadcopter-wiring-chart.html)
