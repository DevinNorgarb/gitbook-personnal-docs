# Autopilot

In the ArduSub control system, the autopilot board (also known as a flight controller) is the component which the ArduSub firmware is loaded onto. The autopilot processes the pilot input and sensor data, and controls the motors, lights, servos, and relays on the vehicle.

Although there are many different autopilot boards available, here are the general characteristics:

* Ability to load any ArduPilot binary firmware file (Copter, Plane, Rover/Boat, Sub)
* Contains input and output connections for connecting multiple peripherals
* Contains embedded IMU(s), magnetic compass(es) and gyroscope(s) to determine vehicle's orientation
* Capable of saving vehicle logs

### Recommended Autopilots <a href="#recommended-autopilots" id="recommended-autopilots"></a>

The first autopilot board recommended for ArduSub was the [Pixhawk 1](https://docs.px4.io/v1.10/en/flight\_controller/pixhawk.html) manufactured by 3D Robotics (3DR) from 2013-2016. When 3DR exited manufacturing hardware in 2016, different manufacturers took the open source design files and created their own flight controllers.

The following list is the recommended autopilot boards for use with ArduSub:

1. The original [3DR (3D Robotics) Pixhawk 1](https://docs.px4.io/v1.10/en/flight\_controller/pixhawk.html)
2. [mRobotics (Mayan Robotics) Pixhawk 1](https://docs.px4.io/v1.10/en/flight\_controller/mro\_pixhawk.html)

### Not Recommended Autopilots <a href="#not-recommended-autopilots" id="not-recommended-autopilots"></a>

With feedback from other users, the following autopilot boards are not recommended for use with Ardusub:

1. [Cube Module](https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview) (all colors) and corresponding carrier board
   * Issue: Does not autoconnect to Companion computer with firmware v4.0 and above. [Github Issue #322](https://github.com/bluerobotics/companion/issues/322)
2. [RadioLink Pixhawk](https://www.foxtechfpv.com/pixhawk-autopilot-combo.html)
   * Issues: Proprietary firmware binaries, only works with RadioLink version of Mission Planner, incorrect connectors.
3. Any autopilot with [Picoblade](https://www.molex.com/molex/products/family/picoblade) series connectors instead of [DF13](https://bluerobotics.com/learn/wl-connector-standard/#hirose-df13-series-not-recommended-for-new-designs) connectors.
   * Issue: Is not connector compatible with DF13, which is used on many Blue Robotics products.

### Other Autopilots That Haven't Been Tested <a href="#other-autopilots-that-havent-been-tested" id="other-autopilots-that-havent-been-tested"></a>

ArduPilot has has a list of other compatible autopilots: [Autopilot Hardware Options](https://ardupilot.org/copter/docs/common-autopilots.html)

These boards have not been tested or reported to work with ArduSub.

### results matching ""

*

### No results matching ""
