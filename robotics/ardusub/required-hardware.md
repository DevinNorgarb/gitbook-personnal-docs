# Required Hardware

The following pages detail the minimum required hardware to have a functioning control system. Where applicable, alternate options are provided when they have been tested and confirmed to work.

To see each component's location and how to connects it in the system, check the connection diagrams.

* [Autopilot](broken-reference): The autopilot board/flight controller board processes the pilot input and sensor data, and controls the motors, lights, servos, and relays on the vehicle. It runs the ArduSub firmware.
* Companion Computer: The Companion Computer streams video to the Topside Computer, and relays [MAVLink](https://ardupilot.org/dev/docs/mavlink-basics.html) communications between the autopilot and the Topside Computer via Ethernet.
* Topside Computer: The topside computer is where the live video feed and telemetry information are received and displayed. It accepts operator input from a joystick to allow controlling the connected vehicle.
* Joystick: A joystick allows the operator to control the vehicle, using stick control movements and button presses.
* Camera: The camera allows the pilot to see and record from the vehicle's point of view. If paired with a Camera Tilt Mount or other gimbal it can be moved during operation.
* Electronic Speed Controls (ESCs): ESCs are used to control the speed/thrust of motors and thrusters.
* Thrusters: Thrusters are necessary to maneuver an underwater vehicle around. The number and orientation of thrusters on a vehicle determines the number of degrees of freedom (DoF) it may maneuver in.
* Power Sensing Module: A power sensing module provides analog current and voltage sensing to an autopilot onboard the vehicle. It's used to measure battery level, and how much power the vehicle is using.
* Power Supply: The power supply and distribution system powers all the onboard electronics, including the high current draw of the thrusters. A regulator converts the main supplied power (from a battery or otherwise) into appropriate voltages for the more sensitive electronics - it must ensure a steady supply to avoid the computers restarting and losing control of the vehicle.
* Tether: A tether is a length of cable which connects the Companion Computer to the Topside Computer. It allows low latency high-bandwidth communication to a vehicle in water, which other technologies are poorly suited to.

### results matching ""

*

### No results matching ""
