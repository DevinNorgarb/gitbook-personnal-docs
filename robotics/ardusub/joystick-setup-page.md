# Joystick Setup Page

When a compatible joystick is plugged into the topside computer, the Joystick Setup page will become active and a small red icon will appear in the top toolbar. After the calibration process is complete and the joystick is enabled, this icon will turn white.

### General Settings <a href="#general-settings" id="general-settings"></a>

The General Settings tab:

* Enables or disables a joystick. **After calibration, this box will be automatically checked.**
* Selecting the intended joystick, if more than one joystick is connected.
* Selecting the RC Mode Style.
  * Mode 3 is default. Other modes may be selected based on user preference.
* Quickly viewing axis movement and button presses.

### Button Assignment <a href="#button-assignment" id="button-assignment"></a>

This tab allows users to reconfigure buttons based on their preference.

Pressing a physical joystick button will highlight the number on the screen. The user can then select the desired button action from the dropdown.

#### Joystick Button Functions <a href="#joystick-button-functions" id="joystick-button-functions"></a>

Joystick buttons can be configured to perform different functions. Each button may be assigned a regular function and a shift function. To use shift functions, a button must be assigned the special _shift_ function. The shift button will then act like a shift key on a keyboard; when held, it modifies the other buttons to execute their assigned shift functions. The available button functions are described below.

**General**

* none: Do nothing, button is disabled
* shift: When held, act as a shift modifier for other buttons
* arm\_toggle: Toggle the armed state of the vehicle
* arm: Arm the vehicle
* disarm: Disarm the vehicle
* gain\_toggle: Toggle between minimum and maximum pilot input gain sensitivity
* gain\_inc: Increase pilot input gain/sensitivity
* gain\_dec: Decrease pilot input gain/sensitivity
* trim\_roll\_inc: Trim level target roll to the right
* trim\_roll\_dec: Trim level target roll to the left
* trim\_pitch\_inc: Trim level target pitch forward
* trim\_pitch\_dec: Trim level target pitch backward
* input\_hold\_toggle: Toggle holding current joystick axis inputs (cruise control on/off)
* roll\_pitch\_toggle: Toggle between roll/pitch and forward/lateral control on joystick input

**Mode Selection**

These button functions will command a switch to the corresponding flight mode. Please note that the advanced modes are in development and are not recommended for general use.

**Standard Modes**

* mode\_manual
* mode\_stabilize
* mode\_depth\_hold

**Advanced Modes**

* mode\_poshold
* mode\_auto
* mode\_circle
* mode\_guided
* mode\_acro

**Roll and Pitch Control**

[Presently](https://github.com/ArduPilot/ardupilot/issues/9808) (due to legacy/inheritance reasons), there is no convenient way to control the roll and pitch of and ArduSub vehicle with QGroundControl. The available solution is to use the roll\_pitch\_toggle joystick button function. When this button is pushed, the forward and lateral joystick axes toggle between controlling the forward and lateral motion of the vehicle and controlling the roll and pitch of the vehicle.

The roll and pitch input behaves differently in different flight modes.

* MANUAL: The roll and pitch input control the **rotation rate** of the vehicle. As long as the joystick input is deflected, the vehicle will continue to rotate. A centered joystick input commands a rotation rate of zero.
* ACRO: This functions like MANUAL, but the rate of rotation is precisely controlled and stabilized.
* STABILIZE: The roll and pitch input control the **desired angle** of the vehicle attitude. When the joystick input is centered, the vehicle will stabilize a level attitude. When the joystick input is deflected, the vehicle will stabilize the deflected angle. There are two parameters that control the maximum angle of vehicle deflection: the pilot input gain (which scales the input), and the ANGLE\_MAX parameter (which controls the maximum angle that the vehicle will deflect in stabilize mode). For example, if the ANGLE\_MAX parameter is 80 degrees, and the input gain is 50%, when the the roll or pitch joystick input is completely deflected, the vehicle will deflect 40 degrees ( 0.5 \* 80 ). Press the roll\_pitch\_toggle joystick button while the vehicle is deflected to lock the current deflection angle and return to controlling forward and lateral motion. To clear the roll and pitch input command, switch to MANUAL mode, or press the roll\_pitch\_toggle button.
* DEPTH HOLD: This functions like STABILIZE mode, but the pressure-depth is also maintained. The throttle joystick is used to control the vehicle to the desired depth, and on joystick release the current depth will be stabilized to.

**Camera Control**

* mount\_center: Sets RC Input channel 8 pwm to the value configured by the _CAM\_TILT\_CENTER_ parameter
* mount\_tilt\_up: Increase RC Input channel 8 pwm by the amount configured by the _JS\_CAM\_TILT\_STEP_ parameter
* mount\_tilt\_down: Decrease RC Input channel 8 pwm by the amount configured by the _JS\_CAM\_TILT\_STEP_ parameter
* camera\_trigger: Trigger cameras shutter **NOT IMPLEMENTED**
* camera\_source\_toggle: Toggle video source, toggles RC Input channel 10 between 1100 and 1900 pwm
* mount\_pan\_right: Pan mount right
* mount\_pan\_left: Pan mount left

**Lights Control**

* lights1\_cycle: Increase or decrease RC Input channel 9 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter, switches between increasing and increasing when output limits are reached
* lights1\_brighter: Increase RC Input channel 9 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter
* lights1\_dimmer: Decrease RC Input channel 9 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter
* lights2\_cycle: Increase or decrease RC Input channel 10 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter, switches between increasing and increasing when output limits are reached
* lights2\_brighter: Increase RC Input channel 10 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter
* lights2\_dimmer: Decrease RC Input channel 10 pwm by the amount configured by the _JS\_LIGHTS\_STEP_ parameter

**Relay Control**

* relay\_1\_on: Sets the pin configured by the _RELAY\_PIN_ parameter to output HIGH
* relay\_1\_off: Sets the pin configured by the _RELAY\_PIN_ parameter to output LOW
* relay\_1\_toggle: Toggles the state of the pin configured by the _RELAY\_PIN_ parameter
* relay\_2\_on: Sets the pin configured by the _RELAY\_PIN2_ parameter to output HIGH
* relay\_2\_off: Sets the pin configured by the _RELAY\_PIN2_ parameter to output LOW
* relay\_2\_toggle: Toggles the state of the pin configured by the _RELAY\_PIN2_ parameter
* relay\_3\_on: Sets the pin configured by the _RELAY\_PIN3_ parameter to output HIGH
* relay\_3\_off: Sets the pin configured by the _RELAY\_PIN3_ parameter to output LOW
* relay\_3\_toggle: Toggles the state of the pin configured by the _RELAY\_PIN3_ parameter

**Servo Control**

* servo\_1\_inc: Increase _Aux1_ servo output by 50 pwm
* servo\_1\_dec: Decrease _Aux1_ servo output by 50 pwm
* servo\_1\_min: Set _Aux1_ servo output to the configured minimum pwm according to SERVO9\_MIN
* servo\_1\_max: Set _Aux1_ servo output to the configured maximum pwm according to SERVO9\_MAX
* servo\_1\_center: Set _Aux1_ servo output to the configured center according to SERVO9\_TRIM
* servo\_2\_inc: Increase _Aux2_ servo output by 50 pwm
* servo\_2\_dec: Decrease _Aux2_ servo output by 50 pwm
* servo\_2\_min: Set _Aux2_ servo output to the configured minimum pwm according to SERVO10\_MIN
* servo\_2\_max: Set _Aux2_ servo output to the configured maximum pwm according to SERVO10\_MAX
* servo\_2\_center: Set _Aux2_ servo output to the configured center according to SERVO10\_TRIM
* servo\_3\_inc: Increase _Aux3_ servo output by 50 pwm
* servo\_3\_dec: Decrease _Aux3_ servo output by 50 pwm
* servo\_3\_min: Set _Aux3_ servo output to the configured minimum pwm according to SERVO11\_MIN
* servo\_3\_max: Set _Aux3_ servo output to the configured maximum pwm according to SERVO11\_MAX
* servo\_3\_center: Set _Aux3_ servo output to the configured center according to SERVO11\_TRIM

**Custom**

These are reserved for developer use, and do not do anything by default

* custom\_1
* custom\_2
* custom\_3
* custom\_4
* custom\_5
* custom\_6

For more information, it's possible to check the ArduSub [joystick source code](https://github.com/ArduPilot/ardupilot/blob/master/ArduSub/joystick.cpp#L649).

### Calibration <a href="#calibration" id="calibration"></a>

This tab calibrates the joysticks control axis for recognition as proper inputs for QGC.

The calibration process wil only recognize 4 axis (0-3) even if there are more on the physical joystick.

#### Calibration Procedures <a href="#calibration-procedures" id="calibration-procedures"></a>

1. Press the Start button and then follow the on-screen instructions to calibrate/move the sticks.
2. The joystick is enabled as the last step of the calibration process.
3. Test the buttons and sticks work as intended by pressing them, and viewing the result in the Axis/Button monitor in the _General_ tab.

### Advanced Settings <a href="#advanced-settings" id="advanced-settings"></a>

Some additional options are available in this tab. These options may be useful for specific, unsual setups, for increasing sensibility, and for handling noisy joysticks.

Some options are not required or useful with ArduSub and may inhibit proper operation if used.

#### Throttle Options <a href="#throttle-options" id="throttle-options"></a>

* Full down stick is zero throttle: In this mode, lowered stick sends 0 in MANUAL\_CONTROL z, centered stick 500, and raised 1000.
* Center stick is zero throttle: Centered or lowered stick sends 0 in MANUAL\_CONTROL z, raised stick sends 1000.
  * Spring loaded throttle smoothing: In this mode you control not the throttle itself, but the rate at which it increases/decreases. This is useful for setups where the throttle stick is spring loaded, as the user can hold the desired throttle while releasing the stick.

#### Exponential Slider <a href="#exponential-slider" id="exponential-slider"></a>

The exponential slider allows you to make the sticks less sensitive in the center, allowing finer control in this zone. The slider adjusts the curvature of the exponential curve. The higher the Expo value, the flatter the curve is at the center, and steeper it is at the edges.

#### Further Advanced Settings <a href="#further-advanced-settings" id="further-advanced-settings"></a>

The advanced settings are not recommended for everyday users. They can cause unpredicted results if used incorrectly.

### results matching ""

*

### No results matching ""
