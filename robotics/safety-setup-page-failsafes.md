# Safety Setup Page (Failsafes)

The Safety Setup page allows you to configure the failsafe settings.

### Failsafe Triggers <a href="#failsafe-triggers" id="failsafe-triggers"></a>

Individual failsafes are triggered when a certain set of conditions are met. Failsafe actions can be configured individually for each failsafe trigger. When a failsafe is triggered, the cooresponding failsafe action is executed. Some failsafes have additional settings that allow you to adjust the trigger conditions, such as maximum acceptable pressure or temperature.

Failsafe actions are only executed once when a failsafe is triggered. The vehicle can be armed during an active failsafe condition if the arming checks are passing. The flight mode can be changed as long as the failsafe conditions do not prevent it. If an active failsafe is cleared, the failsafe action will be executed again if the failsafe re-triggers.

#### GCS (Ground Control Station) Heartbeat <a href="#gcs-ground-control-station-heartbeat" id="gcs-ground-control-station-heartbeat"></a>

Triggered when a HEARTBEAT from the ground control station matching SYSID\_MYGCS hasn't been received for more than 2.5 seconds. The failsafe is cleared immediately when a HEARTBEAT is received.

Note If the system id of the companion computer is a match with SYSID\_MYGCS , then the heartebeats originating from a process (ie MAVProxy) on the companion computer may prevent this failsafe from triggering when expected.

#### Leak <a href="#leak" id="leak"></a>

Triggered immediately when a configured Leak Detector detects a leak. The failsafe is cleared if the leak detector reports no leaks for two seconds.

#### Battery <a href="#battery" id="battery"></a>

Triggered when the battery voltage drops below the voltage specified by the FS\_BATT\_VOLTAGE parameter, or if the remaining capacity drops below the capacity specified by the FS\_BATT\_MAH parameter.

#### EKF <a href="#ekf" id="ekf"></a>

Triggered when the EKF compass or velocity variances exceed the threshold set by the FS\_EKF\_THRESH parameter.

#### Pilot Input <a href="#pilot-input" id="pilot-input"></a>

Triggered when pilot manual control input has not been received since the amount of time specified by the FS\_PILOT\_TIMEOUT parameter.

#### Internal Temperature <a href="#internal-temperature" id="internal-temperature"></a>

This is triggered when the internal temperature of the water tight enclosure (WTE) exceeds the threshold set by the FS\_TEMP\_MAX parameter. The failsafe is cleared immediately when the internal temperature is less than the threshold value.

#### Internal Pressure <a href="#internal-pressure" id="internal-pressure"></a>

This is triggered when the internal pressure of the water tight enclosure (WTE) exceeds the threshold set by the FS\_PRESS\_MAX parameter for two seconds. The failsafe is cleared immediately when the internal pressure is less than the threshold value.

### Failsafe Actions <a href="#failsafe-actions" id="failsafe-actions"></a>

#### Disabled <a href="#disabled" id="disabled"></a>

The failsafe is disabled, and nothing (not even event logging) will happen.

#### Warn Only <a href="#warn-only" id="warn-only"></a>

A message will be sent to the ground control station indicating the failsafe conditions have been met. The warning is sent via STATUSTEXT messages, there is no mechanism to immediately re-send the message in the case that it was not received by the ground control station. The warning is sent repeatedly at 20\~30 second intervals as long as the failsafe conditions are met.

These warnings are also sent if the failsafe action is set to anything other than Disabled.

#### Disarm <a href="#disarm" id="disarm"></a>

If the vehicle is armed, the vehicle will disarm immediately when the failsafe conditions are met. The vehicle can be re-armed after the failsafe triggers, even while the failsafe conditions are met, as long as the arming checks are passing. If the failsafe clears due to resolved conditions, the vehicle will disarm again if the failsafe is re-triggered.

#### Enter Position or Depth Hold <a href="#enter-position-or-depth-hold" id="enter-position-or-depth-hold"></a>

If the vehicle is armed, the vehicle will enter **Position Hold** mode, or **Depth Hold** mode, if positioning is not possible.

#### Enter Surface Mode <a href="#enter-surface-mode" id="enter-surface-mode"></a>

If the vehicle is armed, the vehicle will enter Surface flight mode. The flight mode can be changed by the pilot, and the vehicle may be disarmed at any point.

### Arming Checks <a href="#arming-checks" id="arming-checks"></a>

This panel sets which Pre-ARM Safety Checks are enabled.

Arming checks are enabled and disabled individually. This is a list of arming checks that may be enabled. Arming checks are performed each time there is an attempt to arm the vehicle.

#### All <a href="#all" id="all"></a>

All of the arming checks are performed.

#### Barometer <a href="#barometer" id="barometer"></a>

Fails if any of the _Barometers_ detected at boot are unhealthy. _bug_

#### Compass <a href="#compass" id="compass"></a>

Fails if the on board compass is enabled and any of the following are true:

* The compass is unhealthy
* The compass offsets have not been set and learning offsets is disabled
* The compass is currently calibrating
* The compass calibration requires a reboot
* The compass offsets are too large
* The current magnetic field vector length is too large
* Individual compasses have inconsistent measurements

#### GPS lock <a href="#gps-lock" id="gps-lock"></a>

> This feature requires an under water positioning system. A GPS antenna will not work under water.

Fails if the home position is unset and the GPS is not reporting a 3D fix.

#### INS <a href="#ins" id="ins"></a>

Fails if

* Any of the gyros are unhealthy
* Any of the gyros have a poor calibration
* Any of the accelerometers are unhealthy
* Any of the accelerometers have a poor calibration
* The accelerometer calibration requires a reboot
* Individual accelerometers have inconsistent measurements
* Individual gyros have inconsistent measurements
* The AHRS is unhealthy

#### Parameters <a href="#parameters" id="parameters"></a>

Does nothing! Not Implemented.

#### RC <a href="#rc" id="rc"></a>

Fails if the configured RC input ranges are invalid.

#### Board voltage <a href="#board-voltage" id="board-voltage"></a>

> This feature is not supported on all boards

Fails if the board voltage is below 4.3V or above 5.8V.

#### Battery Level <a href="#battery-level" id="battery-level"></a>

Fails if the battery failsafe is active, of if a battery voltage is below the threshold configured by the _ARMING\_MIN\_VOLT_ or _ARMING\_MIN\_VOLT2_ parameters.

#### Airspeed <a href="#airspeed" id="airspeed"></a>

> This setting does not apply to ArduSub. It _should_ have no effect, and should be left at the default value. It will be removed in the future.

#### Logging Available <a href="#logging-available" id="logging-available"></a>

Fails if there is no SD card inserted or if writing a log failed.

#### Hardware Safety switch <a href="#hardware-safety-switch" id="hardware-safety-switch"></a>

Fails if the hardware safety switch is enabled and the hardware safety switch is not in the armed state. The hardware switch is optional, it can be cumbersome to access the electronics in order to arm the autopilot at the hardware level. This is normally diabled.

#### GPS Configuration <a href="#gps-configuration" id="gps-configuration"></a>

Fails if any of the following is true:

* Any gps requires further configuration.
* Individual gps inputs are giving inconsistent readings.
* Blending of multiple gps inputs is unhealthy.
