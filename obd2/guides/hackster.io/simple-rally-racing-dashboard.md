# Simple Rally/Racing Dashboard



{% embed url="https://www.hackster.io/Ankel2000/simple-rally-racing-dashboard-061883" %}



##

An attempt to achieve: 1. Shifter LEDs with RPM display 2. Manual gearbox sensing and display 3. CAN bus values forwarding to RaceChrono.

[Intermediate](https://www.hackster.io/projects?difficulty=intermediate)Work in progress12,410![Simple Rally/Racing Dashboard](https://hackster.imgix.net/uploads/attachments/1055958/\_VtumGBcuXn.blob?auto=compress%2Cformat\&w=900\&h=675\&fit=min)

### Things used in this project

| <h4>Hardware components</h4>                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                |   |   |   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | - | - |
| ![Arduino UNO](https://hackster.imgix.net/uploads/attachments/1206251/ph-a000066\_iso\_\(1\)\_ztBMuBhMHo.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                          | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/arduino/products/arduino-uno1?ref=project-061883">Arduino UNO</a></td></tr><tr><td></td></tr></tbody></table>                                                                                       | × | 1 |   |
| [Arduino UNO](https://www.hackster.io/arduino/products/arduino-uno1?ref=project-061883)                                                                                                        |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                | <table><thead><tr><th>Bluetooth Low Energy (BLE) Module (Generic)</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                                                                   | × | 1 |   |
| Bluetooth Low Energy (BLE) Module (Generic)                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                | <table><thead><tr><th>CAN-BUS MCP2515 Module TJA1050 Receiver SPI Module</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                                                            | × | 1 |   |
| CAN-BUS MCP2515 Module TJA1050 Receiver SPI Module                                                                                                                                             |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
| ![NeoPixel Ring: WS2812 5050 RGB LED](https://hackster.imgix.net/uploads/image/file/96146/1586-00.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                                 | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/adafruit/products/neopixel-ring-ws2812-5050-rgb-led?ref=project-061883">Adafruit NeoPixel Ring: WS2812 5050 RGB LED</a></td></tr><tr><td></td></tr></tbody></table>                                 | × | 1 |   |
| [Adafruit NeoPixel Ring: WS2812 5050 RGB LED](https://www.hackster.io/adafruit/products/neopixel-ring-ws2812-5050-rgb-led?ref=project-061883)                                                  |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
| ![MAXREFDES99# MAX7219 Display Driver Shield](https://hackster.imgix.net/uploads/attachments/248498/maxrefdes99fig00-\_jYJED91FBe.png?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff) | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/maxim-integrated/products/maxrefdes99-max7219-display-driver-shield?ref=project-061883">Maxim Integrated MAXREFDES99# MAX7219 Display Driver Shield</a></td></tr><tr><td></td></tr></tbody></table> | × | 1 |   |
| [Maxim Integrated MAXREFDES99# MAX7219 Display Driver Shield](https://www.hackster.io/maxim-integrated/products/maxrefdes99-max7219-display-driver-shield?ref=project-061883)                  |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                | <table><thead><tr><th>DFRobot 16x2 1602 LCD Keypad Shield For Arduino</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                                                               | × | 1 |   |
| DFRobot 16x2 1602 LCD Keypad Shield For Arduino                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
| <h4>Software apps and online services</h4>                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                |   |   |   |
| ![Arduino IDE](https://hackster.imgix.net/uploads/image/file/144203/IDE\_web.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                                                      | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/arduino/products/arduino-ide?ref=project-061883">Arduino IDE</a></td></tr><tr><td></td></tr></tbody></table>                                                                                        |   |   |   |
| [Arduino IDE](https://www.hackster.io/arduino/products/arduino-ide?ref=project-061883)                                                                                                         |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                | <table><thead><tr><th>RaceChrono</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                                                                                                    |   |   |   |
| RaceChrono                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                |   |   |   |
|                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |   |   |   |

### Story

#### Introduction <a href="#toc-introduction-0" id="toc-introduction-0"></a>

When I start to physically modify my BMW E46 328i Coupe to be more suitable for my occasional race track days or amateur rallying I quickly realize I need also some electronics to support my driving experience.

It starts with a simple target: To have the data logging in [RaceChrono](https://racechrono.com/) application in real-time. With my old BMW car, the refresh rate of OBDII values for RPM and throttle position is only about 2-3Hz at maximum - which is good to have an rough view, but for exporting the video with overlay gauges it is really too slow. The downshifts or RPM/throttle peaks are not even stored. It does not matter which OBD Bluetooth module I use (ELM327 China, or a $50 recommended module) I never get better performance. My goal was to feed RaceChrono with data at least each 100ms aka 10 Hz.

#### Preparations <a href="#toc-preparations-1" id="toc-preparations-1"></a>

I start to research how the instrument cluster/dashboard works in my car, how to hack in and what HW do I need to achieve the RaceChrono connection. Quite soon I end up with first proposal including an Arduino board with a Bluetooth and CAN modules to hook up directly to my car CANbus to read the raw values from ECU/DME and possibly also from other control units.

With such a smart Arduino device there were now opportunities to use it also for other stuff and the project evolve in a minimalistic race dashboard with:

* RPM LED ring
* LCD with basic engine data (RPM, water coolant temp, oil temp..)
* Gear/shift indicator that reads the current gear from the shift lever on top of manual gearbox

During prototyping I use simulators of Arduino, because the progress in electrical scheme/setup was way faster than trial\&error on a real hardware. I'm more an IT guy rather than an electrician.

#### AVR Simulator tools used <a href="#toc-avr-simulator-tools-used-2" id="toc-avr-simulator-tools-used-2"></a>

I started with [Tinkercad](https://www.tinkercad.com/) for the very beginning, but realize there is no possibility to include 3rd party libraries, which I need at least for simulating the real hardware devices. I moved to [VirtualBreadboard](http://www.virtualbreadboard.com/) (the older[ 6.0.x version](https://www.softpedia.com/get/Science-CAD/VirtualBreadboard.shtml)) which was way better and faster and also provide an integrated osciloscope. As it suddenly stop to work after some.NET update and I was unable to get it working again, I finally end up with [Proteus](https://www.labcenter.com/). And I was astonished about its features. It is really a swiss army knife in microcontroller and circuit simulation and it provides also ton of debugging tools including I2C, SPI, oscilator, conditional code breakpoints and a lot more stuff including PCB designs and 3D models of the components used. Definitely recommended for "bigger" projects and pricing is also ok compared to how many features it has.

![Proteus simulation with running serial consoles](https://hackster.imgix.net/uploads/attachments/1054396/proteus\_simulation\_INO729mRfO.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 2 • Proteus simulation with running serial consoles

#### Finished project tasks <a href="#toc-finished-project-tasks-3" id="toc-finished-project-tasks-3"></a>

* LCD with menu for configuring NeoPixel RPM colors and their ranges. Fully customizable and stored in EEPROM
* 8x8 LED matrix using standard SPI instead of software seen in LedControl.h library
* DAC for gears -simulated. A simple 4bit Digital to Analog converter to read 4 switches that will be mounted on the gear shift lever and based on which bits are High/Low displays correct gear on 8x8 matrix
* MCP2515 CANbus successfully connected to a car and values from ECU sniffed and translated to human readable values of RPM, throttle position and Coolant temp
* RaceChrono Bluetooth connection to Arduino to receive live data. Currently only Bluetooth2 is working as RFCOMM device. For Bluetooth4LE a more low-level configurable chip is needed to meet RaceChrono requirements (eg. ESP32/8266). I was unable to get it working with HM-10 breakboard and its Serial configuration only.
* Measured, create and 3D print the dashboard enclosure for Arduino components and displays. As I have no experience, this task was a challenging journey for me. The modeling was done in SketchUp and final print looks awesome to me. Everything align nicely. Big thanksto my former colleagues to utilize their own profi 3D printer. I already purchased my own Ender3 for future projects 😁.

![Finalized 3D print](https://hackster.imgix.net/uploads/attachments/1125437/img\_20200521\_101517\_87Fg5NGUU0.jpg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 4 • Finalized 3D print![Work in progress - lights ON](https://hackster.imgix.net/uploads/attachments/1055946/img\_20200114\_162120\_ipgaRoyHKt.jpg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 2 • Work in progress - lights ON

#### Unfinished project tasks <a href="#toc-unfinished-project-tasks-4" id="toc-unfinished-project-tasks-4"></a>

* Inspect CANbus messages for additional interesting data to process
* Observe power consumptions and interferences when finally mounted in the car

#### Possible further ideas to implement <a href="#toc-possible-further-ideas-to-implement-5" id="toc-possible-further-ideas-to-implement-5"></a>

* dynamically controlling the engine fan via PWM based on the coolant temps. As the fan control unit in my car is dead I have currently only simple switch/relay for 100% ON or OFF.
* Oil temp is not available on CANbus for this DME, but can be read via service K-line. Not in focus currently, but some proof of concept solutions found based on sniffing the serial line while the original BMW service programs are running and displaying the Oil temp. UPDATE: a simpler option will be to read the raw temperature sensor coming to the ECU
* Compensate the brightness of displays based on a light sensor in addition to a user manual configuration. Would be nice to have automatic dimming between day/night conditions.

### Custom parts and enclosures

#### RPM+Gear enclosure

![](https://hackster.imgix.net/uploads/attachments/1121281/export\_0Swj77X1HS.jpg)

#### RPM+Gear enclosure with components

![](https://hackster.imgix.net/uploads/attachments/1121283/export\_with\_components\_in\_VOnjuxnCkK.jpg)

#### RPM+Gear enclosure with components



#### Enclosure 3D model



### Schematics

#### Schematics

Proteus simulation

### Code

#### Prototype

Arduino

```
#define DEBUG
#define noDEMO

#include "debug.h"
#include "vars.h"
#include "Config.h"
#include <Adafruit_NeoPixel.h>
#include <LiquidCrystal.h>
#include <menu.h>
#include <menuIO/serialOut.h>
#include <menuIO/liquidCrystalOut.h>
#include <SoftwareSerial.h>
//#include <LedControl.h>
#include <LEDMatrixDriver.hpp>
#include <mcp_can.h>
#include <SPI.h>

/*
 * GLOBAL VARIABLES
 */

#define RPM_MIN RPM_TRIGGER[0]
#define CONFIG configuration.data

// GEARS 8x8 LED Matrix
//LedControl        gears_lcd (PIN_GEARS_data,PIN_GEARS_clock,PIN_GEARS_select,PIN_GEARS_devices);
LEDMatrixDriver   gears_lcd(1, PIN_GEARS_select, LEDMatrixDriver::INVERT_Y);
// Multipurpose 16x2 LCD
LiquidCrystal     lcd (PIN_LCD_RS, PIN_LCD_ENABLE, PIN_LCD_D4, PIN_LCD_D5, PIN_LCD_D6, PIN_LCD_D7);
// Bluetooth Serial console
SoftwareSerial    BTserial (PIN_BT_RX, PIN_BT_TX);
// Neopixel Ring for RPM
Adafruit_NeoPixel neoring (NEORING_LEDS, PIN_NEORING, NEO_GRB + NEO_KHZ800);
// Configuration in EEPROM
// necessary to pass object inside via pointer to being able to interact and apply() configuration changes
Configuration configuration(gears_lcd,neoring);

/*
 * GLOBAL MENU
 */
using namespace Menu;
bool lcd_menu_active=false;
#define MENU_MAX_DEPTH 3

// TODO: performance hit when using Configuration class members ? at least in VIRTUAL:
Menu::result menu_rpm_brightness(eventMask e,navNode& nav,prompt& item) {
  //neoring.setBrightness(map(set_rpm_brightness,0,100,0,255));
  configuration.apply(C_RPM);
  return proceed;
}

Menu::result menu_gear_brightness(eventMask e,navNode& nav,prompt& item) {
  //gears_lcd.setIntensity(0,map(set_gear_brightness,0,100,0,15));
  configuration.apply(C_GEAR);
  return proceed;
}

Menu::result menu_save_config() {
  configuration.save();
  return quit;
}

#define MENU_PROCESSING \
  lcd.clear();\
  lcd.setCursor(0,0);\
  lcd.print(F(">> PROCESSING <<"));

Menu::result menu_default_config() {
  MENU_PROCESSING;
  configuration.loadDefaults();
  configuration.save();
  configuration.apply();
  return quit;
}

Menu::result menu_back_action(){
  return quit;
}

Menu::result menu_rpm_change (eventMask e,navNode& nav,prompt& item) {
  MENU_PROCESSING;
  configuration.apply(C_COLOR);
}

Menu::result menu_rpm_color_change (eventMask e,navNode& nav,prompt& item) {
  // nav.sel has the index of the menu that is currently selected and manipulated
  neoring.fill(myColorHSV(CONFIG.RPM_COLOR[nav.sel/2+1],CONFIG.RPM_COLOR_LIGHTNESS[nav.sel/2+1]));
  neoring.show();
}

Menu::result menu_rpm_color_display (eventMask e,navNode& nav,prompt& item) {
  switch (e)
  {
    case enterEvent:
      DBG(F("ENTER CLR MENU"));
      neoring_active=false;
      break;
    case exitEvent:
      DBG(F("EXIT CLR MENU"));
      menu_rpm_change(e,nav,item);
      neoring_active=true;
      break;
  }
  return proceed;
}

MENU(configMenu_RPM_limits,"Set RPM limits",doNothing,noEvent,wrapStyle
  ,FIELD(CONFIG.RPM_TRIGGER[0],"RPM min","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_MAX,"RPM max","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_TRIGGER[1],"Stage1","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_NUMPIXELS[1],"Stage1 LEDs","",0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_TRIGGER[2],"Stage2","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_NUMPIXELS[2],"Stage2 LEDs","",0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_TRIGGER[3],"Stage3","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_NUMPIXELS[3],"Stage3 LEDs","",0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)
  ,FIELD(CONFIG.RPM_TRIGGER[4],"StageFLSH","",0,11000,100,50, menu_rpm_change, exitEvent, noStyle)
);

MENU(configMenu_RPM_colors,"Set RPM colors",menu_rpm_color_display, (eventMask)(enterEvent | exitEvent),wrapStyle
  ,FIELD(CONFIG.RPM_COLOR[1],"Stage1","",0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[1],"Stage1Light","",0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR[2],"Stage2","",0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[2],"Stage2Light","",0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR[3],"Stage3","",0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[3],"Stage3Light","",0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR[4],"StageFLSH","",0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)
  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[4],"StageFLLght","",0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)
);

MENU(configMenu_SAVE,"Save config?",doNothing,noEvent,wrapStyle
  ,OP("Yes",menu_save_config,enterEvent)
  ,OP("No",menu_back_action,enterEvent)
);

MENU(configMenu_DEFAULT,"Reset Defaults?",doNothing,noEvent,wrapStyle
  ,OP("Yes",menu_default_config,enterEvent)
  ,OP("No",menu_back_action,enterEvent)
);

MENU (configMenu,"Configuration",doNothing,noEvent,wrapStyle
  ,SUBMENU(configMenu_SAVE)
  ,SUBMENU(configMenu_DEFAULT)
);

MENU(mainMenu, "Settings", doNothing, noEvent, wrapStyle
  ,FIELD(CONFIG.rpm_brightness,"RPM LED","%",0,100,5,1, menu_rpm_brightness, enterEvent, noStyle)
  ,FIELD(CONFIG.gear_brightness,"Gear LED","%",0,100,5,1, menu_gear_brightness, enterEvent, noStyle)
  ,SUBMENU(configMenu_RPM_limits)
  ,SUBMENU(configMenu_RPM_colors)
  ,SUBMENU(configMenu)
  ,EXIT("<Exit menu")
);

Menu::noInput noinput;
//stringIn<0> menu_strIn;
//serialIn serial(Serial);
//MENU_INPUTS(in,&serial);

MENU_OUTPUTS(out,MENU_MAX_DEPTH
  ,LIQUIDCRYSTAL_OUT(lcd,{0,0,16,2})
  ,NONE//must have 2 items at least
);

NAVROOT(nav,mainMenu,MENU_MAX_DEPTH,noinput,out);

/*
 * SETUP()
 */

void setup() {
  // Serial comms init
  Serial.begin(9600);
  BTserial.begin(9600);

  // Neoring init
  neoring.begin();
  // VIRTUAL: do not use low brightness in SIM as it's not visible. Keep brightness low for real NeoRing HW.
  //neoring.setBrightness(8);

  // 8x8 LED Matrix init
  gears_lcd.setEnabled(true);

  // Apply EEPROM or Default config for Neoring, Gears matrix and RPM limits
  configuration.load();
  configuration.apply();

  // 16x2 LCD init
  lcd.begin(16,2);
  lcd.clear();

  // set menu visibility on startup as "idle"
  // instead use our own Monitor screen and handle Menu callback in lcd_monitor_screen
  nav.idleTask=lcd_monitor_screen;
  nav.idleOn();
  lcd_monitor_screen(out[0],Menu::idling);

  // play BMW logo rotation animation on startup
/*
  gears_display(&GEARS_GLYPH[10]);delay(1500);
  for (byte anim=0;anim<4;anim++)
  {
    gears_display(&GEARS_GLYPH[10]);delay(100);
    for (byte i=11;i<=13;i++)
    {
    gears_display(&GEARS_GLYPH[i]);delay(100);
    }
  }
  gears_display(&GEARS_GLYPH[10]);
 */
  // fill the rpm_scale_val and rpm_scale_col arrays with boundaries for each neopixel
  //rpm_scale_compute();

  noInterrupts();
  // 10Hz interrupt on TIMER1 for Racechrono BT LE output
  TCCR1A = 0;// set entire TCCR1A register to 0
  TCCR1B = 0;// same for TCCR1B
  TCNT1  = 0;//initialize counter value to 0
  // set compare match register for 1hz increments
  OCR1A = 1562; // = (16*10^6) / (10*1024) - 1 (must be <65536)
  // turn on CTC mode
  TCCR1B |= (1 << WGM12);
  // Set CS10 and CS12 bits for 1024 prescaler
  TCCR1B |= (1 << CS12) | (1 << CS10);  
  // enable timer compare interrupt
  TIMSK1 |= (1 << OCIE1A);
  interrupts();
}

void loop() {
  
#ifdef DEMO
unsigned short r;
for (byte g=1;g<7;g++)
{
  gears_display(&GEARS_GLYPH[g]);
  for (r=CONFIG.RPM_MIN;r<5700;r+=10)
  {
    rpm_fill(r);
    lcd.setCursor(0,1);
    lcd.print("     ");
    lcd.setCursor(0,1);
    lcd.print(r);
  }
}
#endif

  int lcd_button=analogRead(PIN_LCD_INPUT);

  if ((millis()-last_debounce_time) > debounce_delay)
  {
    for (byte i=1;i<=4;i++)
    {
      if (lcd_button>=lcd_button_range[i][1] && lcd_button<=lcd_button_range[i][2]) nav.doNav((Menu::navCmds) lcd_button_range[i][0]);
    }

    if (lcd_button<lcd_button_range[0][1])
    {
      DBG(F("Refresh menu"));
      DBG(lcd_button);
      lcd_menu_active=true;
      last_debounce_time=millis();
      nav.doOutput();
    }
  }

  // TODO: Integrate CANbus readings - currently only temporary PIN_RPM analog value used instead of CANBus
  // map analog PIN_RPM to values 0-xxxx(RPM_MAX)
  rpm = map(analogRead(PIN_RPM), 0,1023, 0,CONFIG.RPM_MAX);
  //rpm = int(RPM_MAX/float(1023)*analogRead(PIN_RPM));    // read the input pin
  // display the Neoring RPM with that value
  rpm_fill(rpm);

  // read the DAC convertor value
  gear_dac=analogRead(PIN_GEARS_INPUT);
  // and select gear based on DAC convertor lookup table. The lookup KEY is dynamically calculated so it is a direct access to the final gear to be displayed. No min/max Analogread comparisons.
  // 1024/16= 64 = full scale analogRead divided by 16 possible bits, and shifted by 32 (half of the "ranges") to both sides to make the AnalogRead boundaries.
  //gear=pgm_read_byte(&(gears_dac_lookup[(gear_dac+32)/(1024/16)][1]));
  gear=pgm_read_byte(&gears_dac_lookup[(gear_dac+32)/(1024/16)][1]);

  // read GEARs from the serial console if available
  /*
  if (Serial.available())
  {
    String console=Serial.readStringUntil('\n');
    gear=(byte) console.toInt();
  }
  */

  // TODO: performance - move to Interrupt section ? Make a millis() for refresh?
  if( millis()-last_gear_refreshtime>1000)
  {
    gears_display(&GEARS_GLYPH[gear]);
    last_gear_refreshtime=millis();
  }

  if (last_rpm!=rpm && !lcd_menu_active)
  {
   lcd.setCursor(0,1);
   lcd.print("     ");
   lcd.setCursor(0,1);
   lcd.print(rpm);  // Write a character to display
   last_rpm=rpm;
  }
}

// Racechrono BT output interrupt each 100ms aka 10Hz
ISR(TIMER1_COMPA_vect)
{
  char output[33];
  sprintf_P(output,PSTR("$RC2,,%u,,,,%d,%d,,,,,,,,*"),RC_counter,rpm,gear);
  byte checksum = 0;
  char checksum_format[]="00";
  // to verify, check https://nmeachecksum.eqth.net/ for simple NMEA-CRC online calculator
  // calulate CRC only for the message "body" between $ and *. These are excluded from the CRC.
  for (int i = 1; i < strlen(output)-1; i++)
  { 
    checksum = checksum ^ (unsigned byte)output[i];
  }
  sprintf_P(checksum_format,PSTR("%02X"),checksum);
  strcat(output,checksum_format);
  BTserial.println(output);
  RC_counter++;
  // as RC_counter is unsigned it roll over automatically 65535+1= back to 0
  // if (RC_counter==65535) RC_counter=0;
}


void gears_display(const void *image_pointer)
{
  uint64_t image;
  memcpy_P(&image,image_pointer,sizeof(uint64_t));
  for (int i = 0; i < 8; i++)
  {
    byte row = (image >> i * 8);
    for (int j = 0; j < 8; j++)
    {
      gears_lcd.setPixel(i, j, bitRead(row, j));
    }
  }
  gears_lcd.display();
}


// Used to render Neoring with RPM value
void rpm_fill(int rpm)
{
  if (!neoring_active) return;

  neoring.clear();

  // if out of range, just clear the neoring and exit
  if (rpm <= CONFIG.RPM_MIN || rpm > CONFIG.RPM_MAX)
  {
    if (neoring.canShow()) neoring.show();
    return;
  }
  
  // Flashing all
  if (rpm >= CONFIG.RPM_TRIGGER[RPM_FLASH])
  {
    neoring.fill(RPM_COLOR[RPM_FLASH]);neoring.show();
    delay(50);
    neoring.fill(0);neoring.show();
    delay(50);
    neoring.fill(RPM_COLOR[RPM_FLASH]);neoring.show();
    return;
  }
  
  // Normal operation, fill the LEDs according to RPMs
  for (byte position=0;position < NEORING_LEDS;position++)
  {
    if ( rpm > rpm_scale_val[position]) neoring.setPixelColor(NEORING_LEDS-1-position,*rpm_scale_col[position]);
    else neoring.setPixelColor(NEORING_LEDS-1-position,0);
  }

  if (neoring.canShow()) neoring.show();
}

void rpm_scale_compute()
{
  byte position=0;
  //for all G,Y,R before FLASH calculate and fill the internal array of RPM values
  RPM_COLOR[RPM_FLASH]=myColorHSV(CONFIG.RPM_COLOR[RPM_FLASH],CONFIG.RPM_COLOR_LIGHTNESS[RPM_FLASH]);
  for (byte stage=1;stage < RPM_FLASH;stage++)
  {
    RPM_COLOR[stage]=myColorHSV(CONFIG.RPM_COLOR[stage],CONFIG.RPM_COLOR_LIGHTNESS[stage]);
    position=position+CONFIG.RPM_NUMPIXELS[stage-1];
    if (position+CONFIG.RPM_NUMPIXELS[stage] <= NEORING_LEDS)
    {
      for (byte i=0;i<CONFIG.RPM_NUMPIXELS[stage];i++)
      {
      rpm_scale_val[position+i]=((CONFIG.RPM_TRIGGER[stage]-CONFIG.RPM_TRIGGER[stage-1])/CONFIG.RPM_NUMPIXELS[stage]*(i+0))+CONFIG.RPM_TRIGGER[stage-1];
      rpm_scale_col[position+i]=&RPM_COLOR[stage];
      DBG(position+i);
      DBG(rpm_scale_val[position+i]);
      }
    }
  }
}

Menu::result lcd_monitor_screen(menuOut& out,idleEvent e)
{
  // idleStart - fired when entering idle state, but last menurefresh is still executed
  // idling - fired once when enering menu idle mode, and after all menu refresh/clear is done
  // idleEnd - fired when leaving idle state, but before any menu init is done

  // so rely on idling state and prepare the lcd_monitor_screen to take over 
  if (e==Menu::idling)
  {
    out.clear();
    out.setCursor(0,0);
    out.print("RPM   WATER  OIL");
    // used for decision if menu must be polled/refreshed to save resources in loop()
    lcd_menu_active=false;
  }
}

uint32_t myColorHSV(uint16_t hue, uint8_t val) {
  // Remap 0-65535 to 0-1529. Pure red is CENTERED on the 64K rollover;
  // 0 is not the start of pure red, but the midpoint...a few values above
  // zero and a few below 65536 all yield pure red (similarly, 32768 is the
  // midpoint, not start, of pure cyan). The 8-bit RGB hexcone (256 values
  // each for red, green, blue) really only allows for 1530 distinct hues
  // (not 1536, more on that below), but the full unsigned 16-bit type was
  // chosen for hue so that one's code can easily handle a contiguous color
  // wheel by allowing hue to roll over in either direction.
/////////  hue = (hue * 1530L + 32768) / 65536;
  // Because red is centered on the rollover point (the +32768 above,
  // essentially a fixed-point +0.5), the above actually yields 0 to 1530,
  // where 0 and 1530 would yield the same thing. Rather than apply a
  // costly modulo operator, 1530 is handled as a special case below.

  uint8_t r, g, b, sat;

  if (val<128) {val=map(val,0,127,0,255);sat=255;}
  else if (val>=128) {sat=map(val,128,255,255,0);val=255;}
  
  // Convert hue to R,G,B (nested ifs faster than divide+mod+switch):
  if(hue < 510) {         // Red to Green-1
    b = 0;
    if(hue < 255) {       //   Red to Yellow-1
      r = 255;
      g = hue;            //     g = 0 to 254
    } else {              //   Yellow to Green-1
      r = 510 - hue;      //     r = 255 to 1
      g = 255;
    }
  } else if(hue < 1020) { // Green to Blue-1
    r = 0;
    if(hue <  765) {      //   Green to Cyan-1
      g = 255;
      b = hue - 510;      //     b = 0 to 254
    } else {              //   Cyan to Blue-1
      g = 1020 - hue;     //     g = 255 to 1
      b = 255;
    }
  } else if(hue < 1530) { // Blue to Red-1
    g = 0;
    if(hue < 1275) {      //   Blue to Magenta-1
      r = hue - 1020;     //     r = 0 to 254
      b = 255;
    } else {              //   Magenta to Red-1
      r = 255;
      b = 1530 - hue;     //     b = 255 to 1
    }
  } else {                // Last 0.5 Red (quicker than % operator)
    r = 255;
    g = b = 0;
  }

  // Apply saturation and value to R,G,B, pack into 32-bit result:
  uint32_t v1 =   1 + val; // 1 to 256; allows >>8 instead of /255
  uint16_t s1 =   1 + sat; // 1 to 256; same reason
  uint8_t  s2 = 255 - sat; // 255 to 0
  return ((((((r * s1) >> 8) + s2) * v1) & 0xff00) << 8) |
          (((((g * s1) >> 8) + s2) * v1) & 0xff00)       |
         ( ((((b * s1) >> 8) + s2) * v1)           >> 8);
}
```

\
