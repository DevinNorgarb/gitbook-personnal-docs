import{_ as s,o as a,c as p,ae as e}from"./chunks/framework.BGHOrOyn.js";const h=JSON.parse('{"title":"Simple Rally/Racing Dashboard","description":"","frontmatter":{},"headers":[],"relativePath":"obd2/guides/hackster.io/simple-rally-racing-dashboard.md","filePath":"obd2/guides/hackster.io/simple-rally-racing-dashboard.md"}'),t={name:"obd2/guides/hackster.io/simple-rally-racing-dashboard.md"};function l(i,n,o,r,c,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="simple-rally-racing-dashboard" tabindex="-1">Simple Rally/Racing Dashboard <a class="header-anchor" href="#simple-rally-racing-dashboard" aria-label="Permalink to &quot;Simple Rally/Racing Dashboard&quot;">​</a></h1><p><a href="https://www.hackster.io/Ankel2000/simple-rally-racing-dashboard-061883" target="_blank" rel="noreferrer">https://www.hackster.io/Ankel2000/simple-rally-racing-dashboard-061883</a></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p>An attempt to achieve: 1. Shifter LEDs with RPM display 2. Manual gearbox sensing and display 3. CAN bus values forwarding to RaceChrono.</p><p><a href="https://www.hackster.io/projects?difficulty=intermediate" target="_blank" rel="noreferrer">Intermediate</a>Work in progress12,410<img src="https://hackster.imgix.net/uploads/attachments/1055958/_VtumGBcuXn.blob?auto=compress%2Cformat&amp;w=900&amp;h=675&amp;fit=min" alt="Simple Rally/Racing Dashboard"></p><h3 id="things-used-in-this-project" tabindex="-1">Things used in this project <a class="header-anchor" href="#things-used-in-this-project" aria-label="Permalink to &quot;Things used in this project&quot;">​</a></h3><table tabindex="0"><thead><tr><th><h4>Hardware components</h4></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><img src="https://hackster.imgix.net/uploads/attachments/1206251/ph-a000066_iso_(1)_ztBMuBhMHo.jpg?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="Arduino UNO"></td><td>d13414383ca24197b6a78bef5e513d15</td><td>×</td><td>1</td><td></td></tr><tr><td><a href="https://www.hackster.io/arduino/products/arduino-uno1?ref=project-061883" target="_blank" rel="noreferrer">Arduino UNO</a></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>ee2b5bce7fa146e196511f94742fc3eb</td><td>×</td><td>1</td><td></td></tr><tr><td>Bluetooth Low Energy (BLE) Module (Generic)</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>ad5dade9b95249c3bc7cf0025eb8290e</td><td>×</td><td>1</td><td></td></tr><tr><td>CAN-BUS MCP2515 Module TJA1050 Receiver SPI Module</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/image/file/96146/1586-00.jpg?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="NeoPixel Ring: WS2812 5050 RGB LED"></td><td>848df9b307454ddf8554e0f06444f48a</td><td>×</td><td>1</td><td></td></tr><tr><td><a href="https://www.hackster.io/adafruit/products/neopixel-ring-ws2812-5050-rgb-led?ref=project-061883" target="_blank" rel="noreferrer">Adafruit NeoPixel Ring: WS2812 5050 RGB LED</a></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/attachments/248498/maxrefdes99fig00-_jYJED91FBe.png?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="MAXREFDES99# MAX7219 Display Driver Shield"></td><td>3247c075b3a74c1ca28a964df1bbafb2</td><td>×</td><td>1</td><td></td></tr><tr><td><a href="https://www.hackster.io/maxim-integrated/products/maxrefdes99-max7219-display-driver-shield?ref=project-061883" target="_blank" rel="noreferrer">Maxim Integrated MAXREFDES99# MAX7219 Display Driver Shield</a></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>dfe062314a054007962d2040af1ad211</td><td>×</td><td>1</td><td></td></tr><tr><td>DFRobot 16x2 1602 LCD Keypad Shield For Arduino</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><h4>Software apps and online services</h4></td><td></td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/image/file/144203/IDE_web.jpg?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="Arduino IDE"></td><td>6c6d2cb55dc94a0298429365d260f4af</td><td></td><td></td><td></td></tr><tr><td><a href="https://www.hackster.io/arduino/products/arduino-ide?ref=project-061883" target="_blank" rel="noreferrer">Arduino IDE</a></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>2c14b41202534921943a84b43d074801</td><td></td><td></td><td></td></tr><tr><td>RaceChrono</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="story" tabindex="-1">Story <a class="header-anchor" href="#story" aria-label="Permalink to &quot;Story&quot;">​</a></h3><h4 id="introduction" tabindex="-1">Introduction <a href="#toc-introduction-0" id="toc-introduction-0"></a> <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction &lt;a href=&quot;#toc-introduction-0&quot; id=&quot;toc-introduction-0&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>When I start to physically modify my BMW E46 328i Coupe to be more suitable for my occasional race track days or amateur rallying I quickly realize I need also some electronics to support my driving experience.</p><p>It starts with a simple target: To have the data logging in <a href="https://racechrono.com/" target="_blank" rel="noreferrer">RaceChrono</a> application in real-time. With my old BMW car, the refresh rate of OBDII values for RPM and throttle position is only about 2-3Hz at maximum - which is good to have an rough view, but for exporting the video with overlay gauges it is really too slow. The downshifts or RPM/throttle peaks are not even stored. It does not matter which OBD Bluetooth module I use (ELM327 China, or a $50 recommended module) I never get better performance. My goal was to feed RaceChrono with data at least each 100ms aka 10 Hz.</p><h4 id="preparations" tabindex="-1">Preparations <a href="#toc-preparations-1" id="toc-preparations-1"></a> <a class="header-anchor" href="#preparations" aria-label="Permalink to &quot;Preparations &lt;a href=&quot;#toc-preparations-1&quot; id=&quot;toc-preparations-1&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>I start to research how the instrument cluster/dashboard works in my car, how to hack in and what HW do I need to achieve the RaceChrono connection. Quite soon I end up with first proposal including an Arduino board with a Bluetooth and CAN modules to hook up directly to my car CANbus to read the raw values from ECU/DME and possibly also from other control units.</p><p>With such a smart Arduino device there were now opportunities to use it also for other stuff and the project evolve in a minimalistic race dashboard with:</p><ul><li>RPM LED ring</li><li>LCD with basic engine data (RPM, water coolant temp, oil temp..)</li><li>Gear/shift indicator that reads the current gear from the shift lever on top of manual gearbox</li></ul><p>During prototyping I use simulators of Arduino, because the progress in electrical scheme/setup was way faster than trial&amp;error on a real hardware. I&#39;m more an IT guy rather than an electrician.</p><h4 id="avr-simulator-tools-used" tabindex="-1">AVR Simulator tools used <a href="#toc-avr-simulator-tools-used-2" id="toc-avr-simulator-tools-used-2"></a> <a class="header-anchor" href="#avr-simulator-tools-used" aria-label="Permalink to &quot;AVR Simulator tools used &lt;a href=&quot;#toc-avr-simulator-tools-used-2&quot; id=&quot;toc-avr-simulator-tools-used-2&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>I started with <a href="https://www.tinkercad.com/" target="_blank" rel="noreferrer">Tinkercad</a> for the very beginning, but realize there is no possibility to include 3rd party libraries, which I need at least for simulating the real hardware devices. I moved to <a href="http://www.virtualbreadboard.com/" target="_blank" rel="noreferrer">VirtualBreadboard</a> (the older<a href="https://www.softpedia.com/get/Science-CAD/VirtualBreadboard.shtml" target="_blank" rel="noreferrer"> 6.0.x version</a>) which was way better and faster and also provide an integrated osciloscope. As it suddenly stop to work after some.NET update and I was unable to get it working again, I finally end up with <a href="https://www.labcenter.com/" target="_blank" rel="noreferrer">Proteus</a>. And I was astonished about its features. It is really a swiss army knife in microcontroller and circuit simulation and it provides also ton of debugging tools including I2C, SPI, oscilator, conditional code breakpoints and a lot more stuff including PCB designs and 3D models of the components used. Definitely recommended for &quot;bigger&quot; projects and pricing is also ok compared to how many features it has.</p><p><img src="https://hackster.imgix.net/uploads/attachments/1054396/proteus_simulation_INO729mRfO.png?auto=compress%2Cformat&amp;w=740&amp;h=555&amp;fit=max" alt="Proteus simulation with running serial consoles">1 / 2 • Proteus simulation with running serial consoles</p><h4 id="finished-project-tasks" tabindex="-1">Finished project tasks <a href="#toc-finished-project-tasks-3" id="toc-finished-project-tasks-3"></a> <a class="header-anchor" href="#finished-project-tasks" aria-label="Permalink to &quot;Finished project tasks &lt;a href=&quot;#toc-finished-project-tasks-3&quot; id=&quot;toc-finished-project-tasks-3&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><ul><li>LCD with menu for configuring NeoPixel RPM colors and their ranges. Fully customizable and stored in EEPROM</li><li>8x8 LED matrix using standard SPI instead of software seen in LedControl.h library</li><li>DAC for gears -simulated. A simple 4bit Digital to Analog converter to read 4 switches that will be mounted on the gear shift lever and based on which bits are High/Low displays correct gear on 8x8 matrix</li><li>MCP2515 CANbus successfully connected to a car and values from ECU sniffed and translated to human readable values of RPM, throttle position and Coolant temp</li><li>RaceChrono Bluetooth connection to Arduino to receive live data. Currently only Bluetooth2 is working as RFCOMM device. For Bluetooth4LE a more low-level configurable chip is needed to meet RaceChrono requirements (eg. ESP32/8266). I was unable to get it working with HM-10 breakboard and its Serial configuration only.</li><li>Measured, create and 3D print the dashboard enclosure for Arduino components and displays. As I have no experience, this task was a challenging journey for me. The modeling was done in SketchUp and final print looks awesome to me. Everything align nicely. Big thanksto my former colleagues to utilize their own profi 3D printer. I already purchased my own Ender3 for future projects 😁.</li></ul><p><img src="https://hackster.imgix.net/uploads/attachments/1125437/img_20200521_101517_87Fg5NGUU0.jpg?auto=compress%2Cformat&amp;w=740&amp;h=555&amp;fit=max" alt="Finalized 3D print">1 / 4 • Finalized 3D print<img src="https://hackster.imgix.net/uploads/attachments/1055946/img_20200114_162120_ipgaRoyHKt.jpg?auto=compress%2Cformat&amp;w=740&amp;h=555&amp;fit=max" alt="Work in progress - lights ON">1 / 2 • Work in progress - lights ON</p><h4 id="unfinished-project-tasks" tabindex="-1">Unfinished project tasks <a href="#toc-unfinished-project-tasks-4" id="toc-unfinished-project-tasks-4"></a> <a class="header-anchor" href="#unfinished-project-tasks" aria-label="Permalink to &quot;Unfinished project tasks &lt;a href=&quot;#toc-unfinished-project-tasks-4&quot; id=&quot;toc-unfinished-project-tasks-4&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><ul><li>Inspect CANbus messages for additional interesting data to process</li><li>Observe power consumptions and interferences when finally mounted in the car</li></ul><h4 id="possible-further-ideas-to-implement" tabindex="-1">Possible further ideas to implement <a href="#toc-possible-further-ideas-to-implement-5" id="toc-possible-further-ideas-to-implement-5"></a> <a class="header-anchor" href="#possible-further-ideas-to-implement" aria-label="Permalink to &quot;Possible further ideas to implement &lt;a href=&quot;#toc-possible-further-ideas-to-implement-5&quot; id=&quot;toc-possible-further-ideas-to-implement-5&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><ul><li>dynamically controlling the engine fan via PWM based on the coolant temps. As the fan control unit in my car is dead I have currently only simple switch/relay for 100% ON or OFF.</li><li>Oil temp is not available on CANbus for this DME, but can be read via service K-line. Not in focus currently, but some proof of concept solutions found based on sniffing the serial line while the original BMW service programs are running and displaying the Oil temp. UPDATE: a simpler option will be to read the raw temperature sensor coming to the ECU</li><li>Compensate the brightness of displays based on a light sensor in addition to a user manual configuration. Would be nice to have automatic dimming between day/night conditions.</li></ul><h3 id="custom-parts-and-enclosures" tabindex="-1">Custom parts and enclosures <a class="header-anchor" href="#custom-parts-and-enclosures" aria-label="Permalink to &quot;Custom parts and enclosures&quot;">​</a></h3><h4 id="rpm-gear-enclosure" tabindex="-1">RPM+Gear enclosure <a class="header-anchor" href="#rpm-gear-enclosure" aria-label="Permalink to &quot;RPM+Gear enclosure&quot;">​</a></h4><p><img src="https://hackster.imgix.net/uploads/attachments/1121281/export_0Swj77X1HS.jpg" alt=""></p><h4 id="rpm-gear-enclosure-with-components" tabindex="-1">RPM+Gear enclosure with components <a class="header-anchor" href="#rpm-gear-enclosure-with-components" aria-label="Permalink to &quot;RPM+Gear enclosure with components&quot;">​</a></h4><p><img src="https://hackster.imgix.net/uploads/attachments/1121283/export_with_components_in_VOnjuxnCkK.jpg" alt=""></p><h4 id="rpm-gear-enclosure-with-components-1" tabindex="-1">RPM+Gear enclosure with components <a class="header-anchor" href="#rpm-gear-enclosure-with-components-1" aria-label="Permalink to &quot;RPM+Gear enclosure with components&quot;">​</a></h4><h4 id="enclosure-3d-model" tabindex="-1">Enclosure 3D model <a class="header-anchor" href="#enclosure-3d-model" aria-label="Permalink to &quot;Enclosure 3D model&quot;">​</a></h4><h3 id="schematics" tabindex="-1">Schematics <a class="header-anchor" href="#schematics" aria-label="Permalink to &quot;Schematics&quot;">​</a></h3><h4 id="schematics-1" tabindex="-1">Schematics <a class="header-anchor" href="#schematics-1" aria-label="Permalink to &quot;Schematics&quot;">​</a></h4><p>Proteus simulation</p><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h3><h4 id="prototype" tabindex="-1">Prototype <a class="header-anchor" href="#prototype" aria-label="Permalink to &quot;Prototype&quot;">​</a></h4><p>Arduino</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## define DEBUG</span></span>
<span class="line"><span>## define noDEMO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &quot;debug.h&quot;</span></span>
<span class="line"><span>## include &quot;vars.h&quot;</span></span>
<span class="line"><span>## include &quot;Config.h&quot;</span></span>
<span class="line"><span>## include &lt;Adafruit_NeoPixel.h&gt;</span></span>
<span class="line"><span>## include &lt;LiquidCrystal.h&gt;</span></span>
<span class="line"><span>## include &lt;menu.h&gt;</span></span>
<span class="line"><span>## include &lt;menuIO/serialOut.h&gt;</span></span>
<span class="line"><span>## include &lt;menuIO/liquidCrystalOut.h&gt;</span></span>
<span class="line"><span>## include &lt;SoftwareSerial.h&gt;</span></span>
<span class="line"><span>//#include &lt;LedControl.h&gt;</span></span>
<span class="line"><span>## include &lt;LEDMatrixDriver.hpp&gt;</span></span>
<span class="line"><span>## include &lt;mcp_can.h&gt;</span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * GLOBAL VARIABLES</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## define RPM_MIN RPM_TRIGGER[0]</span></span>
<span class="line"><span>## define CONFIG configuration.data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// GEARS 8x8 LED Matrix</span></span>
<span class="line"><span>//LedControl        gears_lcd (PIN_GEARS_data,PIN_GEARS_clock,PIN_GEARS_select,PIN_GEARS_devices);</span></span>
<span class="line"><span>LEDMatrixDriver   gears_lcd(1, PIN_GEARS_select, LEDMatrixDriver::INVERT_Y);</span></span>
<span class="line"><span>// Multipurpose 16x2 LCD</span></span>
<span class="line"><span>LiquidCrystal     lcd (PIN_LCD_RS, PIN_LCD_ENABLE, PIN_LCD_D4, PIN_LCD_D5, PIN_LCD_D6, PIN_LCD_D7);</span></span>
<span class="line"><span>// Bluetooth Serial console</span></span>
<span class="line"><span>SoftwareSerial    BTserial (PIN_BT_RX, PIN_BT_TX);</span></span>
<span class="line"><span>// Neopixel Ring for RPM</span></span>
<span class="line"><span>Adafruit_NeoPixel neoring (NEORING_LEDS, PIN_NEORING, NEO_GRB + NEO_KHZ800);</span></span>
<span class="line"><span>// Configuration in EEPROM</span></span>
<span class="line"><span>// necessary to pass object inside via pointer to being able to interact and apply() configuration changes</span></span>
<span class="line"><span>Configuration configuration(gears_lcd,neoring);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * GLOBAL MENU</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>using namespace Menu;</span></span>
<span class="line"><span>bool lcd_menu_active=false;</span></span>
<span class="line"><span>## define MENU_MAX_DEPTH 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO: performance hit when using Configuration class members ? at least in VIRTUAL:</span></span>
<span class="line"><span>Menu::result menu_rpm_brightness(eventMask e,navNode&amp; nav,prompt&amp; item) {</span></span>
<span class="line"><span>  //neoring.setBrightness(map(set_rpm_brightness,0,100,0,255));</span></span>
<span class="line"><span>  configuration.apply(C_RPM);</span></span>
<span class="line"><span>  return proceed;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_gear_brightness(eventMask e,navNode&amp; nav,prompt&amp; item) {</span></span>
<span class="line"><span>  //gears_lcd.setIntensity(0,map(set_gear_brightness,0,100,0,15));</span></span>
<span class="line"><span>  configuration.apply(C_GEAR);</span></span>
<span class="line"><span>  return proceed;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_save_config() {</span></span>
<span class="line"><span>  configuration.save();</span></span>
<span class="line"><span>  return quit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## define MENU_PROCESSING \\</span></span>
<span class="line"><span>  lcd.clear();\\</span></span>
<span class="line"><span>  lcd.setCursor(0,0);\\</span></span>
<span class="line"><span>  lcd.print(F(&quot;&gt;&gt; PROCESSING &lt;&lt;&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_default_config() {</span></span>
<span class="line"><span>  MENU_PROCESSING;</span></span>
<span class="line"><span>  configuration.loadDefaults();</span></span>
<span class="line"><span>  configuration.save();</span></span>
<span class="line"><span>  configuration.apply();</span></span>
<span class="line"><span>  return quit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_back_action(){</span></span>
<span class="line"><span>  return quit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_rpm_change (eventMask e,navNode&amp; nav,prompt&amp; item) {</span></span>
<span class="line"><span>  MENU_PROCESSING;</span></span>
<span class="line"><span>  configuration.apply(C_COLOR);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_rpm_color_change (eventMask e,navNode&amp; nav,prompt&amp; item) {</span></span>
<span class="line"><span>  // nav.sel has the index of the menu that is currently selected and manipulated</span></span>
<span class="line"><span>  neoring.fill(myColorHSV(CONFIG.RPM_COLOR[nav.sel/2+1],CONFIG.RPM_COLOR_LIGHTNESS[nav.sel/2+1]));</span></span>
<span class="line"><span>  neoring.show();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result menu_rpm_color_display (eventMask e,navNode&amp; nav,prompt&amp; item) {</span></span>
<span class="line"><span>  switch (e)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    case enterEvent:</span></span>
<span class="line"><span>      DBG(F(&quot;ENTER CLR MENU&quot;));</span></span>
<span class="line"><span>      neoring_active=false;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case exitEvent:</span></span>
<span class="line"><span>      DBG(F(&quot;EXIT CLR MENU&quot;));</span></span>
<span class="line"><span>      menu_rpm_change(e,nav,item);</span></span>
<span class="line"><span>      neoring_active=true;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return proceed;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU(configMenu_RPM_limits,&quot;Set RPM limits&quot;,doNothing,noEvent,wrapStyle</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_TRIGGER[0],&quot;RPM min&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_MAX,&quot;RPM max&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_TRIGGER[1],&quot;Stage1&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_NUMPIXELS[1],&quot;Stage1 LEDs&quot;,&quot;&quot;,0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_TRIGGER[2],&quot;Stage2&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_NUMPIXELS[2],&quot;Stage2 LEDs&quot;,&quot;&quot;,0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_TRIGGER[3],&quot;Stage3&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_NUMPIXELS[3],&quot;Stage3 LEDs&quot;,&quot;&quot;,0,NEORING_LEDS,1,0, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_TRIGGER[4],&quot;StageFLSH&quot;,&quot;&quot;,0,11000,100,50, menu_rpm_change, exitEvent, noStyle)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU(configMenu_RPM_colors,&quot;Set RPM colors&quot;,menu_rpm_color_display, (eventMask)(enterEvent | exitEvent),wrapStyle</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR[1],&quot;Stage1&quot;,&quot;&quot;,0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[1],&quot;Stage1Light&quot;,&quot;&quot;,0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR[2],&quot;Stage2&quot;,&quot;&quot;,0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[2],&quot;Stage2Light&quot;,&quot;&quot;,0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR[3],&quot;Stage3&quot;,&quot;&quot;,0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[3],&quot;Stage3Light&quot;,&quot;&quot;,0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR[4],&quot;StageFLSH&quot;,&quot;&quot;,0,1529,50,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.RPM_COLOR_LIGHTNESS[4],&quot;StageFLLght&quot;,&quot;&quot;,0,255,20,1, menu_rpm_color_change, enterEvent, noStyle)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU(configMenu_SAVE,&quot;Save config?&quot;,doNothing,noEvent,wrapStyle</span></span>
<span class="line"><span>  ,OP(&quot;Yes&quot;,menu_save_config,enterEvent)</span></span>
<span class="line"><span>  ,OP(&quot;No&quot;,menu_back_action,enterEvent)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU(configMenu_DEFAULT,&quot;Reset Defaults?&quot;,doNothing,noEvent,wrapStyle</span></span>
<span class="line"><span>  ,OP(&quot;Yes&quot;,menu_default_config,enterEvent)</span></span>
<span class="line"><span>  ,OP(&quot;No&quot;,menu_back_action,enterEvent)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU (configMenu,&quot;Configuration&quot;,doNothing,noEvent,wrapStyle</span></span>
<span class="line"><span>  ,SUBMENU(configMenu_SAVE)</span></span>
<span class="line"><span>  ,SUBMENU(configMenu_DEFAULT)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU(mainMenu, &quot;Settings&quot;, doNothing, noEvent, wrapStyle</span></span>
<span class="line"><span>  ,FIELD(CONFIG.rpm_brightness,&quot;RPM LED&quot;,&quot;%&quot;,0,100,5,1, menu_rpm_brightness, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,FIELD(CONFIG.gear_brightness,&quot;Gear LED&quot;,&quot;%&quot;,0,100,5,1, menu_gear_brightness, enterEvent, noStyle)</span></span>
<span class="line"><span>  ,SUBMENU(configMenu_RPM_limits)</span></span>
<span class="line"><span>  ,SUBMENU(configMenu_RPM_colors)</span></span>
<span class="line"><span>  ,SUBMENU(configMenu)</span></span>
<span class="line"><span>  ,EXIT(&quot;&lt;Exit menu&quot;)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::noInput noinput;</span></span>
<span class="line"><span>//stringIn&lt;0&gt; menu_strIn;</span></span>
<span class="line"><span>//serialIn serial(Serial);</span></span>
<span class="line"><span>//MENU_INPUTS(in,&amp;serial);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MENU_OUTPUTS(out,MENU_MAX_DEPTH</span></span>
<span class="line"><span>  ,LIQUIDCRYSTAL_OUT(lcd,{0,0,16,2})</span></span>
<span class="line"><span>  ,NONE//must have 2 items at least</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NAVROOT(nav,mainMenu,MENU_MAX_DEPTH,noinput,out);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * SETUP()</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  // Serial comms init</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  BTserial.begin(9600);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Neoring init</span></span>
<span class="line"><span>  neoring.begin();</span></span>
<span class="line"><span>  // VIRTUAL: do not use low brightness in SIM as it&#39;s not visible. Keep brightness low for real NeoRing HW.</span></span>
<span class="line"><span>  //neoring.setBrightness(8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 8x8 LED Matrix init</span></span>
<span class="line"><span>  gears_lcd.setEnabled(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Apply EEPROM or Default config for Neoring, Gears matrix and RPM limits</span></span>
<span class="line"><span>  configuration.load();</span></span>
<span class="line"><span>  configuration.apply();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 16x2 LCD init</span></span>
<span class="line"><span>  lcd.begin(16,2);</span></span>
<span class="line"><span>  lcd.clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // set menu visibility on startup as &quot;idle&quot;</span></span>
<span class="line"><span>  // instead use our own Monitor screen and handle Menu callback in lcd_monitor_screen</span></span>
<span class="line"><span>  nav.idleTask=lcd_monitor_screen;</span></span>
<span class="line"><span>  nav.idleOn();</span></span>
<span class="line"><span>  lcd_monitor_screen(out[0],Menu::idling);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // play BMW logo rotation animation on startup</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>  gears_display(&amp;GEARS_GLYPH[10]);delay(1500);</span></span>
<span class="line"><span>  for (byte anim=0;anim&lt;4;anim++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    gears_display(&amp;GEARS_GLYPH[10]);delay(100);</span></span>
<span class="line"><span>    for (byte i=11;i&lt;=13;i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    gears_display(&amp;GEARS_GLYPH[i]);delay(100);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  gears_display(&amp;GEARS_GLYPH[10]);</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>  // fill the rpm_scale_val and rpm_scale_col arrays with boundaries for each neopixel</span></span>
<span class="line"><span>  //rpm_scale_compute();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  noInterrupts();</span></span>
<span class="line"><span>  // 10Hz interrupt on TIMER1 for Racechrono BT LE output</span></span>
<span class="line"><span>  TCCR1A = 0;// set entire TCCR1A register to 0</span></span>
<span class="line"><span>  TCCR1B = 0;// same for TCCR1B</span></span>
<span class="line"><span>  TCNT1  = 0;//initialize counter value to 0</span></span>
<span class="line"><span>  // set compare match register for 1hz increments</span></span>
<span class="line"><span>  OCR1A = 1562; // = (16*10^6) / (10*1024) - 1 (must be &lt;65536)</span></span>
<span class="line"><span>  // turn on CTC mode</span></span>
<span class="line"><span>  TCCR1B |= (1 &lt;&lt; WGM12);</span></span>
<span class="line"><span>  // Set CS10 and CS12 bits for 1024 prescaler</span></span>
<span class="line"><span>  TCCR1B |= (1 &lt;&lt; CS12) | (1 &lt;&lt; CS10);  </span></span>
<span class="line"><span>  // enable timer compare interrupt</span></span>
<span class="line"><span>  TIMSK1 |= (1 &lt;&lt; OCIE1A);</span></span>
<span class="line"><span>  interrupts();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ifdef DEMO</span></span>
<span class="line"><span>unsigned short r;</span></span>
<span class="line"><span>for (byte g=1;g&lt;7;g++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  gears_display(&amp;GEARS_GLYPH[g]);</span></span>
<span class="line"><span>  for (r=CONFIG.RPM_MIN;r&lt;5700;r+=10)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    rpm_fill(r);</span></span>
<span class="line"><span>    lcd.setCursor(0,1);</span></span>
<span class="line"><span>    lcd.print(&quot;     &quot;);</span></span>
<span class="line"><span>    lcd.setCursor(0,1);</span></span>
<span class="line"><span>    lcd.print(r);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>## endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int lcd_button=analogRead(PIN_LCD_INPUT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if ((millis()-last_debounce_time) &gt; debounce_delay)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    for (byte i=1;i&lt;=4;i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      if (lcd_button&gt;=lcd_button_range[i][1] &amp;&amp; lcd_button&lt;=lcd_button_range[i][2]) nav.doNav((Menu::navCmds) lcd_button_range[i][0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (lcd_button&lt;lcd_button_range[0][1])</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      DBG(F(&quot;Refresh menu&quot;));</span></span>
<span class="line"><span>      DBG(lcd_button);</span></span>
<span class="line"><span>      lcd_menu_active=true;</span></span>
<span class="line"><span>      last_debounce_time=millis();</span></span>
<span class="line"><span>      nav.doOutput();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // TODO: Integrate CANbus readings - currently only temporary PIN_RPM analog value used instead of CANBus</span></span>
<span class="line"><span>  // map analog PIN_RPM to values 0-xxxx(RPM_MAX)</span></span>
<span class="line"><span>  rpm = map(analogRead(PIN_RPM), 0,1023, 0,CONFIG.RPM_MAX);</span></span>
<span class="line"><span>  //rpm = int(RPM_MAX/float(1023)*analogRead(PIN_RPM));</span><span>    // read the input pin</span></span>
<span class="line"><span>  // display the Neoring RPM with that value</span></span>
<span class="line"><span>  rpm_fill(rpm);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // read the DAC convertor value</span></span>
<span class="line"><span>  gear_dac=analogRead(PIN_GEARS_INPUT);</span></span>
<span class="line"><span>  // and select gear based on DAC convertor lookup table. The lookup KEY is dynamically calculated so it is a direct access to the final gear to be displayed. No min/max Analogread comparisons.</span></span>
<span class="line"><span>  // 1024/16= 64 = full scale analogRead divided by 16 possible bits, and shifted by 32 (half of the &quot;ranges&quot;) to both sides to make the AnalogRead boundaries.</span></span>
<span class="line"><span>  //gear=pgm_read_byte(&amp;(gears_dac_lookup[(gear_dac+32)/(1024/16)][1]));</span></span>
<span class="line"><span>  gear=pgm_read_byte(&amp;gears_dac_lookup[(gear_dac+32)/(1024/16)][1]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // read GEARs from the serial console if available</span></span>
<span class="line"><span>  /*</span></span>
<span class="line"><span>  if (Serial.available())</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    String console=Serial.readStringUntil(&#39;\\n&#39;);</span></span>
<span class="line"><span>    gear=(byte) console.toInt();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // TODO: performance - move to Interrupt section ? Make a millis() for refresh?</span></span>
<span class="line"><span>  if( millis()-last_gear_refreshtime&gt;1000)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    gears_display(&amp;GEARS_GLYPH[gear]);</span></span>
<span class="line"><span>    last_gear_refreshtime=millis();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (last_rpm!=rpm &amp;&amp; !lcd_menu_active)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>   lcd.setCursor(0,1);</span></span>
<span class="line"><span>   lcd.print(&quot;     &quot;);</span></span>
<span class="line"><span>   lcd.setCursor(0,1);</span></span>
<span class="line"><span>   lcd.print(rpm);  // Write a character to display</span></span>
<span class="line"><span>   last_rpm=rpm;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Racechrono BT output interrupt each 100ms aka 10Hz</span></span>
<span class="line"><span>ISR(TIMER1_COMPA_vect)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char output[33];</span></span>
<span class="line"><span>  sprintf_P(output,PSTR(&quot;$RC2,,%u,,,,%d,%d,,,,,,,,*&quot;),RC_counter,rpm,gear);</span></span>
<span class="line"><span>  byte checksum = 0;</span></span>
<span class="line"><span>  char checksum_format[]=&quot;00&quot;;</span></span>
<span class="line"><span>  // to verify, check https://nmeachecksum.eqth.net/ for simple NMEA-CRC online calculator</span></span>
<span class="line"><span>  // calulate CRC only for the message &quot;body&quot; between $ and *. These are excluded from the CRC.</span></span>
<span class="line"><span>  for (int i = 1; i &lt; strlen(output)-1; i++)</span></span>
<span class="line"><span>  { </span></span>
<span class="line"><span>    checksum = checksum ^ (unsigned byte)output[i];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sprintf_P(checksum_format,PSTR(&quot;%02X&quot;),checksum);</span></span>
<span class="line"><span>  strcat(output,checksum_format);</span></span>
<span class="line"><span>  BTserial.println(output);</span></span>
<span class="line"><span>  RC_counter++;</span></span>
<span class="line"><span>  // as RC_counter is unsigned it roll over automatically 65535+1= back to 0</span></span>
<span class="line"><span>  // if (RC_counter==65535) RC_counter=0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void gears_display(const void *image_pointer)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  uint64_t image;</span></span>
<span class="line"><span>  memcpy_P(&amp;image,image_pointer,sizeof(uint64_t));</span></span>
<span class="line"><span>  for (int i = 0; i &lt; 8; i++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    byte row = (image &gt;&gt; i * 8);</span></span>
<span class="line"><span>    for (int j = 0; j &lt; 8; j++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      gears_lcd.setPixel(i, j, bitRead(row, j));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  gears_lcd.display();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Used to render Neoring with RPM value</span></span>
<span class="line"><span>void rpm_fill(int rpm)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  if (!neoring_active) return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  neoring.clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // if out of range, just clear the neoring and exit</span></span>
<span class="line"><span>  if (rpm &lt;= CONFIG.RPM_MIN || rpm &gt; CONFIG.RPM_MAX)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    if (neoring.canShow()) neoring.show();</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Flashing all</span></span>
<span class="line"><span>  if (rpm &gt;= CONFIG.RPM_TRIGGER[RPM_FLASH])</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    neoring.fill(RPM_COLOR[RPM_FLASH]);neoring.show();</span></span>
<span class="line"><span>    delay(50);</span></span>
<span class="line"><span>    neoring.fill(0);neoring.show();</span></span>
<span class="line"><span>    delay(50);</span></span>
<span class="line"><span>    neoring.fill(RPM_COLOR[RPM_FLASH]);neoring.show();</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Normal operation, fill the LEDs according to RPMs</span></span>
<span class="line"><span>  for (byte position=0;position &lt; NEORING_LEDS;position++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    if ( rpm &gt; rpm_scale_val[position]) neoring.setPixelColor(NEORING_LEDS-1-position,*rpm_scale_col[position]);</span></span>
<span class="line"><span>    else neoring.setPixelColor(NEORING_LEDS-1-position,0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (neoring.canShow()) neoring.show();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void rpm_scale_compute()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  byte position=0;</span></span>
<span class="line"><span>  //for all G,Y,R before FLASH calculate and fill the internal array of RPM values</span></span>
<span class="line"><span>  RPM_COLOR[RPM_FLASH]=myColorHSV(CONFIG.RPM_COLOR[RPM_FLASH],CONFIG.RPM_COLOR_LIGHTNESS[RPM_FLASH]);</span></span>
<span class="line"><span>  for (byte stage=1;stage &lt; RPM_FLASH;stage++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    RPM_COLOR[stage]=myColorHSV(CONFIG.RPM_COLOR[stage],CONFIG.RPM_COLOR_LIGHTNESS[stage]);</span></span>
<span class="line"><span>    position=position+CONFIG.RPM_NUMPIXELS[stage-1];</span></span>
<span class="line"><span>    if (position+CONFIG.RPM_NUMPIXELS[stage] &lt;= NEORING_LEDS)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      for (byte i=0;i&lt;CONFIG.RPM_NUMPIXELS[stage];i++)</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>      rpm_scale_val[position+i]=((CONFIG.RPM_TRIGGER[stage]-CONFIG.RPM_TRIGGER[stage-1])/CONFIG.RPM_NUMPIXELS[stage]*(i+0))+CONFIG.RPM_TRIGGER[stage-1];</span></span>
<span class="line"><span>      rpm_scale_col[position+i]=&amp;RPM_COLOR[stage];</span></span>
<span class="line"><span>      DBG(position+i);</span></span>
<span class="line"><span>      DBG(rpm_scale_val[position+i]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Menu::result lcd_monitor_screen(menuOut&amp; out,idleEvent e)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // idleStart - fired when entering idle state, but last menurefresh is still executed</span></span>
<span class="line"><span>  // idling - fired once when enering menu idle mode, and after all menu refresh/clear is done</span></span>
<span class="line"><span>  // idleEnd - fired when leaving idle state, but before any menu init is done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // so rely on idling state and prepare the lcd_monitor_screen to take over </span></span>
<span class="line"><span>  if (e==Menu::idling)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    out.clear();</span></span>
<span class="line"><span>    out.setCursor(0,0);</span></span>
<span class="line"><span>    out.print(&quot;RPM   WATER  OIL&quot;);</span></span>
<span class="line"><span>    // used for decision if menu must be polled/refreshed to save resources in loop()</span></span>
<span class="line"><span>    lcd_menu_active=false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint32_t myColorHSV(uint16_t hue, uint8_t val) {</span></span>
<span class="line"><span>  // Remap 0-65535 to 0-1529. Pure red is CENTERED on the 64K rollover;</span></span>
<span class="line"><span>  // 0 is not the start of pure red, but the midpoint...a few values above</span></span>
<span class="line"><span>  // zero and a few below 65536 all yield pure red (similarly, 32768 is the</span></span>
<span class="line"><span>  // midpoint, not start, of pure cyan). The 8-bit RGB hexcone (256 values</span></span>
<span class="line"><span>  // each for red, green, blue) really only allows for 1530 distinct hues</span></span>
<span class="line"><span>  // (not 1536, more on that below), but the full unsigned 16-bit type was</span></span>
<span class="line"><span>  // chosen for hue so that one&#39;s code can easily handle a contiguous color</span></span>
<span class="line"><span>  // wheel by allowing hue to roll over in either direction.</span></span>
<span class="line"><span>/////////  hue = (hue * 1530L + 32768) / 65536;</span></span>
<span class="line"><span>  // Because red is centered on the rollover point (the +32768 above,</span></span>
<span class="line"><span>  // essentially a fixed-point +0.5), the above actually yields 0 to 1530,</span></span>
<span class="line"><span>  // where 0 and 1530 would yield the same thing. Rather than apply a</span></span>
<span class="line"><span>  // costly modulo operator, 1530 is handled as a special case below.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  uint8_t r, g, b, sat;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (val&lt;128) {val=map(val,0,127,0,255);sat=255;}</span></span>
<span class="line"><span>  else if (val&gt;=128) {sat=map(val,128,255,255,0);val=255;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Convert hue to R,G,B (nested ifs faster than divide+mod+switch):</span></span>
<span class="line"><span>  if(hue &lt; 510) {         // Red to Green-1</span></span>
<span class="line"><span>    b = 0;</span></span>
<span class="line"><span>    if(hue &lt; 255) {       //   Red to Yellow-1</span></span>
<span class="line"><span>      r = 255;</span></span>
<span class="line"><span>      g = hue;            //     g = 0 to 254</span></span>
<span class="line"><span>    } else {              //   Yellow to Green-1</span></span>
<span class="line"><span>      r = 510 - hue;      //     r = 255 to 1</span></span>
<span class="line"><span>      g = 255;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else if(hue &lt; 1020) { // Green to Blue-1</span></span>
<span class="line"><span>    r = 0;</span></span>
<span class="line"><span>    if(hue &lt;  765) {      //   Green to Cyan-1</span></span>
<span class="line"><span>      g = 255;</span></span>
<span class="line"><span>      b = hue - 510;      //     b = 0 to 254</span></span>
<span class="line"><span>    } else {              //   Cyan to Blue-1</span></span>
<span class="line"><span>      g = 1020 - hue;     //     g = 255 to 1</span></span>
<span class="line"><span>      b = 255;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else if(hue &lt; 1530) { // Blue to Red-1</span></span>
<span class="line"><span>    g = 0;</span></span>
<span class="line"><span>    if(hue &lt; 1275) {      //   Blue to Magenta-1</span></span>
<span class="line"><span>      r = hue - 1020;     //     r = 0 to 254</span></span>
<span class="line"><span>      b = 255;</span></span>
<span class="line"><span>    } else {              //   Magenta to Red-1</span></span>
<span class="line"><span>      r = 255;</span></span>
<span class="line"><span>      b = 1530 - hue;     //     b = 255 to 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {                // Last 0.5 Red (quicker than % operator)</span></span>
<span class="line"><span>    r = 255;</span></span>
<span class="line"><span>    g = b = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Apply saturation and value to R,G,B, pack into 32-bit result:</span></span>
<span class="line"><span>  uint32_t v1 =   1 + val; // 1 to 256; allows &gt;&gt;8 instead of /255</span></span>
<span class="line"><span>  uint16_t s1 =   1 + sat; // 1 to 256; same reason</span></span>
<span class="line"><span>  uint8_t  s2 = 255 - sat; // 255 to 0</span></span>
<span class="line"><span>  return ((((((r * s1) &gt;&gt; 8) + s2) * v1) &amp; 0xff00) &lt;&lt; 8) |</span></span>
<span class="line"><span>          (((((g * s1) &gt;&gt; 8) + s2) * v1) &amp; 0xff00)       |</span></span>
<span class="line"><span>         ( ((((b * s1) &gt;&gt; 8) + s2) * v1)           &gt;&gt; 8);</span></span>
<span class="line"><span>}</span></span></code></pre></div><br>`,41)])])}const m=s(t,[["render",l]]);export{h as __pageData,m as default};
