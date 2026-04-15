import{_ as n,o as s,c as e,ae as t}from"./chunks/framework.BGHOrOyn.js";const u=JSON.parse('{"title":"nRF24","description":"","frontmatter":{},"headers":[],"relativePath":"microcontrollers-and-socs/nrf24.md","filePath":"microcontrollers-and-socs/nrf24.md"}'),o={name:"microcontrollers-and-socs/nrf24.md"};function i(r,a,p,l,c,d){return s(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="nrf24" tabindex="-1">nRF24 <a class="header-anchor" href="#nrf24" aria-label="Permalink to &quot;nRF24&quot;">​</a></h1><h2 id="nrf24l01-–-how-it-works-arduino-interface-circuits-codes" tabindex="-1">nRF24L01 – How It Works, Arduino Interface, Circuits, Codes <a class="header-anchor" href="#nrf24l01-–-how-it-works-arduino-interface-circuits-codes" aria-label="Permalink to &quot;nRF24L01 – How It Works, Arduino Interface, Circuits, Codes&quot;">​</a></h2><p><a href="https://howtomechatronics.com/category/tutorials/arduino/" target="_blank" rel="noreferrer">Arduino Tutorials</a></p><p>In this tutorial we will learn how to make <strong>wireless communication</strong> between two Arduino boards using the <strong>nRF24L01</strong> transceiver modules. The nRF24L01 module is very popular choice for wireless communication when using Arduino.</p><p>I have already used this module for numerous Arduino projects and you can check out some of them here:</p><ul><li><a href="https://howtomechatronics.com/projects/diy-arduino-rc-transmitter/" target="_blank" rel="noreferrer">DIY Arduino RC Transmitter</a></li><li><a href="https://howtomechatronics.com/projects/arduino-rc-airplane-diy/" target="_blank" rel="noreferrer">Arduino RC Airplane | 100% DIY</a></li><li><a href="https://howtomechatronics.com/projects/diy-arduino-based-rc-hovercraft/" target="_blank" rel="noreferrer">DIY Arduino based RC Hovercraft</a></li><li><a href="https://howtomechatronics.com/tutorials/arduino/arduino-wireless-weather-station-project/" target="_blank" rel="noreferrer">Arduino Wireless Weather Station Project</a></li></ul><p>You can watch the following video or read the written tutorial below. It includes everything we need to know about the nRF24L01 transceiver module, such as the module pinout, working principle, wiring and several code examples.</p><h3 id="overview" tabindex="-1">Overview <a href="#h-overview" id="h-overview"></a> <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview &lt;a href=&quot;#h-overview&quot; id=&quot;h-overview&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>For explaining the wireless communication we will make two examples, the first one will be sending a simple “Hello World” message from one Arduino to another, and in the second example we will have a bi-directional communication between the Arduino boards, where using the Joystick at the first Arduino we will control the servo motor at the second Arduino, and vice versa, using the push button at the second Arduino we will control the LED at the first Arduino.</p><h3 id="nrf24l01-transceiver-module" tabindex="-1">nRF24L01 Transceiver Module <a href="#h-nrf24l01-transceiver-module" id="h-nrf24l01-transceiver-module"></a> <a class="header-anchor" href="#nrf24l01-transceiver-module" aria-label="Permalink to &quot;nRF24L01 Transceiver Module &lt;a href=&quot;#h-nrf24l01-transceiver-module&quot; id=&quot;h-nrf24l01-transceiver-module&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Let’s take a closer look at the NRF24L01 transceiver module. It uses the 2.4 GHz band and it can operate with baud rates from 250 kbps up to 2 Mbps. If used in open space and with lower baud rate its range can reach up to 100 meters.</p><figure><img src="https://howtomechatronics.com/wp-content/uploads/2017/02/NRF24L01-Transceiver-Module-.jpg?ezimgfmt=rs:701x426/rscb2/ng:webp/ngcb2" alt="NRF24L01 Transceiver Module" height="426" width="701"><figcaption></figcaption></figure><p>Here are complete specifications:</p><table tabindex="0"><thead><tr><th>Frequency range</th><th>2.4 – 2.5GHz ISM band</th></tr></thead><tbody><tr><td>Data rates</td><td>250Kbps / 1Mbps / 2Mbps</td></tr><tr><td>Max. output power</td><td>0dBm</td></tr><tr><td>Operating voltage</td><td>1.9 – 3.6V</td></tr><tr><td>Max. operating current</td><td>12.3mA</td></tr><tr><td>Standby current</td><td>22µA</td></tr><tr><td>Logic inputs</td><td>5V tolerant</td></tr><tr><td>Communication range</td><td>100m (open space)</td></tr></tbody></table><h3 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h3><p>The module can use 125 different channels which gives a possibility to have a network of 125 independently working modems in one place. Each channel can have up to 6 addresses, or each unit can <a href="https://howtomechatronics.com/tutorials/arduino/how-to-build-an-arduino-wireless-network-with-multiple-nrf24l01-modules/" target="_blank" rel="noreferrer">communicate with up to 6 other units at the same time</a>.</p><figure><img src="https://howtomechatronics.com/wp-content/uploads/2017/02/NRF24L01-Working-Principles-of-Channels-and-Addresses.png?ezimgfmt=rs:600x322/rscb2/ng:webp/ngcb2" alt="Working Principles of Channels and Addresses" height="322" width="600"><figcaption></figcaption></figure><p>The power consumption of this module is just around 12mA during transmission, which is even lower than a single LED. The operating voltage of the module is from 1.9 to 3.6V, but the good thing is that the other pins tolerate 5V logic, so we can easily connect it to an Arduino without using any logic level converters.</p><figure><img src="https://howtomechatronics.com/wp-content/uploads/2017/02/NRF24L01-Transceiver-Module-Pinouts-Connections.jpg?ezimgfmt=rs:400x300/rscb2/ng:webp/ngcb2" alt="NRF24L01 Transceiver Module Pinouts Connections"><figcaption></figcaption></figure><p>Three of these pins are for the SPI communication and they need to be connected to the SPI pins of the Arduino, but note that each Arduino board has different SPI pins. The pins CSN and CE can be connected to any digital pin of the Arduino board and they are used for setting the module in standby or active mode, as well as for switching between transmit or command mode. The last pin is an interrupt pin which doesn’t have to be used.</p><h3 id="module-variations" tabindex="-1">Module variations <a class="header-anchor" href="#module-variations" aria-label="Permalink to &quot;Module variations&quot;">​</a></h3><p>There are several variations of the NRF24L01 modules. The most popular is the one with on-board antenna. This makes the module to be more compact, but on the other hand, lowers the transmission range to a distance of about 100 meters.</p><p>The second variation, instead of on-board antenna, it has a SMA connector and which we can attach a duck antenna for better transmission range.</p><p>The third variation shown here, in addition to the duck antenna, it has a RFX2401C chip which includes <strong>PA</strong> (Power Amplifier) and <strong>LNA</strong> (Low-Noise Amplifier). This amplifies the NRF24L01 signal and enables even better transmission range of up to 1000 meters in open space.</p><h3 id="nrf24l01-module-pinout" tabindex="-1">nRF24L01 Module Pinout <a href="#h-nrf24l01-module-pinout" id="h-nrf24l01-module-pinout"></a> <a class="header-anchor" href="#nrf24l01-module-pinout" aria-label="Permalink to &quot;nRF24L01 Module Pinout &lt;a href=&quot;#h-nrf24l01-module-pinout&quot; id=&quot;h-nrf24l01-module-pinout&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Here’s a detailed look at the NRF24L01 pinout, as well as the NRF24L01+ PA/LNA module.</p><p>Both modules, the NRF24L01 and the NRF24L01+ PA/LNA have the same pinout, so we can connect them in our circuit the same way.</p><h3 id="how-to-connect-the-nrf24l01-to-arduino" tabindex="-1">How to Connect the nRF24L01 to Arduino <a href="#h-how-to-connect-the-nrf24l01-to-arduino" id="h-how-to-connect-the-nrf24l01-to-arduino"></a> <a class="header-anchor" href="#how-to-connect-the-nrf24l01-to-arduino" aria-label="Permalink to &quot;How to Connect the nRF24L01 to Arduino &lt;a href=&quot;#h-how-to-connect-the-nrf24l01-to-arduino&quot; id=&quot;h-how-to-connect-the-nrf24l01-to-arduino&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Here’s how we need to connect the NRF24L01 modules to the Arduino boards.</p><p>As I already mentioned, each Arduino board has different SPI pins, so keep that in mind when connecting the modules to your Arduino board.</p><table tabindex="0"><thead><tr><th>Arduino</th><th>SCK</th><th>MISO</th><th>MOSI</th><th>SS</th></tr></thead><tbody><tr><td>Uno</td><td>13</td><td>12</td><td>11</td><td>10</td></tr><tr><td>Nano</td><td>13</td><td>12</td><td>11</td><td>10</td></tr><tr><td>Mega</td><td>52</td><td>50</td><td>51</td><td>53</td></tr></tbody></table><p>You can get the components needed for this Arduino tutorial from the links below:</p><ul><li>NRF24L01 Transceiver Module……… <a href="https://howtomechatronics.com/recommends/nrf24l01-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/nrf24l01-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/nrf24l01-aliexpress/" target="_blank" rel="noreferrer"><strong>Aliexpress</strong></a></li><li>Arduino Board ……………………………… <a href="https://howtomechatronics.com/recommends/arduino-mega-board-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/arduino-mega-board-bg/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/arduino-mega-board-aliexpress/" target="_blank" rel="noreferrer"><strong>Aliexpress</strong></a></li><li>Breadboard and Jump Wires ………… <a href="https://howtomechatronics.com/recommends/breadboard-and-jump-wires-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/breadboard-and-jump-wires-banggod/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/breadboard-and-jump-wires-aliexpress/" target="_blank" rel="noreferrer"><strong>Aliexpress</strong></a></li></ul><p><em>,Disclosure: These are affiliate links. As an Amazon Associate I earn from qualifying purchases.</em></p><h3 id="arduino-and-nrf24l01-code" tabindex="-1">Arduino and nRF24L01 Code <a href="#h-arduino-and-nrf24l01-code" id="h-arduino-and-nrf24l01-code"></a> <a class="header-anchor" href="#arduino-and-nrf24l01-code" aria-label="Permalink to &quot;Arduino and nRF24L01 Code &lt;a href=&quot;#h-arduino-and-nrf24l01-code&quot; id=&quot;h-arduino-and-nrf24l01-code&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Once we connect the NRF24L01 modules to the Arduino boards we are ready to make the codes for both the transmitter and the receiver.</p><p>First we need to download and install the <a href="https://github.com/tmrh20/RF24/" target="_blank" rel="noreferrer">RF24 library</a> which makes the programming less difficult. We can also install this library directly from the Arduino IDE Library Manager. Just search for “rf24” and find and install the one by “TMRh20, Avamander”.</p><p>Here are the two codes for the wireless communication and below is the description of them.</p><h4 id="transmitter-code" tabindex="-1">Transmitter Code <a class="header-anchor" href="#transmitter-code" aria-label="Permalink to &quot;Transmitter Code&quot;">​</a></h4><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>*     Example 1 - Transmitter Code</span></span>
<span class="line"><span>*                </span></span>
<span class="line"><span>* by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span>* </span></span>
<span class="line"><span>* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const byte address[6] = &quot;00001&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openWritingPipe(address);</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>  radio.stopListening();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  const char text[] = &quot;Hello World&quot;;</span></span>
<span class="line"><span>  radio.write(&amp;text, sizeof(text));</span></span>
<span class="line"><span>  delay(1000);</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><h3 id="receiver-code" tabindex="-1">Receiver Code <a class="header-anchor" href="#receiver-code" aria-label="Permalink to &quot;Receiver Code&quot;">​</a></h3><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>*       Example 1 - Receiver Code</span></span>
<span class="line"><span>*                </span></span>
<span class="line"><span>* by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span>* </span></span>
<span class="line"><span>* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const byte address[6] = &quot;00001&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openReadingPipe(0, address);</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>  radio.startListening();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  if (radio.available()) {</span></span>
<span class="line"><span>    char text[32] = &quot;&quot;;</span></span>
<span class="line"><span>    radio.read(&amp;text, sizeof(text));</span></span>
<span class="line"><span>    Serial.println(text);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><h3 id="code-description" tabindex="-1">Code Description <a class="header-anchor" href="#code-description" aria-label="Permalink to &quot;Code Description&quot;">​</a></h3><p>So we need to include the basic SPI and the newly installed RF24 libraries and create an RF24 object. The two arguments here are the CSN and CE pins.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RF24 radio(7, 8); // CE, CSNCode language: Arduino (arduino)</span></span></code></pre></div><p>Next we need to create a byte array which will represent the address, or the so called pipe through which the two modules will communicate.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const byte address[6] = &quot;00001&quot;;Code language: Arduino (arduino)</span></span></code></pre></div><p>We can change the value of this address to any 5 letter string and this enables to choose to which receiver we will talk, so in our case we will have the same address at both the receiver and the transmitter.</p><p>In the setup section we need to initialize the radio object and using the radio.openWritingPipe() function we set the address of the receiver to which we will send data, the 5 letter string we previously set.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>radio.openWritingPipe(address);Code language: Arduino (arduino)</span></span></code></pre></div><p>On the other side, at the receiver, using the radio.setReadingPipe() function we set the same address and in that way we enable the communication between the two modules.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>radio.openReadingPipe(0, address);Code language: Arduino (arduino)</span></span></code></pre></div><p>Then using the radio.setPALevel() function we set the Power Amplifier level, in our case I will set it to minimum as my modules are very close to each other.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>radio.setPALevel(RF24_PA_MIN);Code language: Arduino (arduino)</span></span></code></pre></div><p>Note that if using a higher level it is recommended to use a bypass capacitors across GND and 3.3V of the modules so that they have more stable voltage while operating.</p><p>Next we have the radio.stopListening() function which sets module as transmitter, and on the other side, we have the radio.startListening() function which sets the module as receiver.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// at the Transmitter</span></span>
<span class="line"><span>radio.stopListening();Code language: Arduino (arduino)</span></span></code></pre></div><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// at the Receiver</span></span>
<span class="line"><span>radio.startListening();Code language: Arduino (arduino)</span></span></code></pre></div><p>In the loop section, at the transmitter, we create an array of characters to which we assign the message “Hello World”. Using the radio.write() function we will send that message to the receiver. The first argument here is the variable that we want to be sent.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void loop() {</span></span>
<span class="line"><span> const char text[] = &quot;Hello World&quot;;</span></span>
<span class="line"><span> radio.write(&amp;text, sizeof(text));</span></span>
<span class="line"><span> delay(1000);</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><p>By using the “&amp;” before the variable name we actually set an indicating of the variable that stores the data that we want to be sent and using the second argument we set the number of bytes that we want to take from that variable. In this case the sizeof() function gets all bytes of the strings “text”. At the end of the program we will add 1 second delay.</p><p>Using the radio.write() function we can send maximum of 32 bytes at a time.</p><p>On the other side, at the receiver, in the loop section using the radio.available() function we check whether there is data to be received. If that’s true, first we create an array of 32 elements, called “text”, in which we will save the incoming data.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void loop() {</span></span>
<span class="line"><span>  if (radio.available()) {</span></span>
<span class="line"><span>    char text[32] = &quot;&quot;;</span></span>
<span class="line"><span>    radio.read(&amp;text, sizeof(text));</span></span>
<span class="line"><span>    Serial.println(text);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><p>Using the radion.read() function we read and store the data into the “text” variable. At the end we just print text on the serial monitor. So once we upload both programs, we can run the serial monitor at the receiver and we will notice the message “Hello World” gets printed each second.</p><h3 id="troubleshooting" tabindex="-1">Troubleshooting <a href="#h-troubleshooting" id="h-troubleshooting"></a> <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting &lt;a href=&quot;#h-troubleshooting&quot; id=&quot;h-troubleshooting&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>It’s worth noting that <strong>power supply noise</strong> is one of the most common issues people experience when trying to make successful communication with the NRF24L01 modules. Generally, RF circuits or radio frequency signals are sensitive to power supply noise. Therefore, it’s always a good idea to include a decoupling capacitor across the power supply line. The capacitor can be anything from 10uF to 100uF.</p><p>Another common issue is that the 3.3V pin of the Arduino boards, cannot always supply enough power to the NRF24L01 module. So, powering the module with an external power source is also a good idea.</p><h3 id="bi-directional-wireless-communication-with-two-nrf24l01-and-arduino" tabindex="-1">Bi-directional Wireless Communication with two NRF24L01 and Arduino <a href="#h-bi-directional-wireless-communication-with-two-nrf24l01-and-arduino" id="h-bi-directional-wireless-communication-with-two-nrf24l01-and-arduino"></a> <a class="header-anchor" href="#bi-directional-wireless-communication-with-two-nrf24l01-and-arduino" aria-label="Permalink to &quot;Bi-directional Wireless Communication with two NRF24L01 and Arduino &lt;a href=&quot;#h-bi-directional-wireless-communication-with-two-nrf24l01-and-arduino&quot; id=&quot;h-bi-directional-wireless-communication-with-two-nrf24l01-and-arduino&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Let’s see the second example, a bi-directional wireless communication between two Arduino boards. Here’s the circuit schematics:</p><figure><img src="https://howtomechatronics.com/wp-content/uploads/2017/02/Arduino-Wireless-Communication-NRF24L01-Circuit-Schematic-Tutorial.png?ezimgfmt=rs:701x418/rscb2/ng:webp/ngcb2" alt="Arduino Wireless Communication NRF24L01 Circuit Schematic Tutorial" height="418" width="701"><figcaption></figcaption></figure><p>You can get the components needed for this example from the links below:</p><ul><li>NRF24L01 Transceiver Module………… <a href="https://howtomechatronics.com/recommends/nrf24l01-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/nrf24l01-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/nrf24l01-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li><li>Arduino Board…………………………………. <a href="https://howtomechatronics.com/recommends/arduino-nano-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/arduino-nano-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/arduino-nano-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li><li>Joystick Module ………………………………. <a href="https://howtomechatronics.com/recommends/joystick-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/joystick-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/joystick-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li><li>Servo Motor ……………………………………. <a href="https://howtomechatronics.com/recommends/micro-servo-motor-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/micro-servo-motor-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/micro-servo-motor-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li><li>Pushbutton …………………………………….. <a href="https://howtomechatronics.com/recommends/push-button-momentary-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/push-button-momentary-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/push-button-momentary-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li><li>LED ………………………………………………… <a href="https://howtomechatronics.com/recommends/leds-5mm-amazon/" target="_blank" rel="noreferrer"><strong>Amazon</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/leds-banggood/" target="_blank" rel="noreferrer"><strong>Banggood</strong></a> <strong>/</strong> <a href="https://howtomechatronics.com/recommends/leds-5mm-aliexpress/" target="_blank" rel="noreferrer"><strong>AliExpress</strong></a></li></ul><p><em>Disclosure: These are affiliate links. As an Amazon Associate I earn from qualifying purchases.</em></p><figure><img src="https://howtomechatronics.com/wp-content/uploads/2018/07/How-To-Build-an-Arduino-Wireless-Network-with-Multiple-NRF24L01-Modules-Tutorial-300x169.jpg?ezimgfmt=rs:213x120/rscb2/ng:webp/ngcb2" alt="" height="120" width="213"><figcaption></figcaption></figure><p>See Also<br><a href="https://howtomechatronics.com/tutorials/arduino/how-to-build-an-arduino-wireless-network-with-multiple-nrf24l01-modules/" target="_blank" rel="noreferrer"><strong>How To Build an Arduino Wireless Network with Multiple NRF24L01 Modules</strong></a></p><h4 id="nrf24l01-source-code" tabindex="-1">nRF24L01 Source Code <a href="#h-nrf24l01-source-code" id="h-nrf24l01-source-code"></a> <a class="header-anchor" href="#nrf24l01-source-code" aria-label="Permalink to &quot;nRF24L01 Source Code &lt;a href=&quot;#h-nrf24l01-source-code&quot; id=&quot;h-nrf24l01-source-code&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>Here are the two codes and their description below.</p><p><strong>Transmitter Code</strong></p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>*     Example 2 - Transmitter Code</span></span>
<span class="line"><span>*                </span></span>
<span class="line"><span>* by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span>* </span></span>
<span class="line"><span>* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## define led 12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span>const byte addresses[][6] = {&quot;00001&quot;, &quot;00002&quot;};</span></span>
<span class="line"><span>boolean buttonState = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  pinMode(12, OUTPUT);</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openWritingPipe(addresses[1]); // 00002</span></span>
<span class="line"><span>  radio.openReadingPipe(1, addresses[0]); // 00001</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  delay(5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  radio.stopListening();</span></span>
<span class="line"><span>  int potValue = analogRead(A0);</span></span>
<span class="line"><span>  int angleValue = map(potValue, 0, 1023, 0, 180);</span></span>
<span class="line"><span>  radio.write(&amp;angleValue, sizeof(angleValue));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  delay(5);</span></span>
<span class="line"><span>  radio.startListening();</span></span>
<span class="line"><span>  while (!radio.available());</span></span>
<span class="line"><span>  radio.read(&amp;buttonState, sizeof(buttonState));</span></span>
<span class="line"><span>  if (buttonState == HIGH) {</span></span>
<span class="line"><span>    digitalWrite(led, HIGH);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  else {</span></span>
<span class="line"><span>    digitalWrite(led, LOW);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Receiver Code</strong></p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>*     Example 2 - Receiver Code</span></span>
<span class="line"><span>*                </span></span>
<span class="line"><span>* by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span>* </span></span>
<span class="line"><span>* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span>## include &lt;Servo.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## define button 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span>const byte addresses[][6] = {&quot;00001&quot;, &quot;00002&quot;};</span></span>
<span class="line"><span>Servo myServo;</span></span>
<span class="line"><span>boolean buttonState = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  pinMode(button, INPUT);</span></span>
<span class="line"><span>  myServo.attach(5);</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openWritingPipe(addresses[0]); // 00001</span></span>
<span class="line"><span>  radio.openReadingPipe(1, addresses[1]); // 00002</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  delay(5);</span></span>
<span class="line"><span>  radio.startListening();</span></span>
<span class="line"><span>  if ( radio.available()) {</span></span>
<span class="line"><span>    while (radio.available()) {</span></span>
<span class="line"><span>      int angleV = 0;</span></span>
<span class="line"><span>      radio.read(&amp;angleV, sizeof(angleV));</span></span>
<span class="line"><span>      myServo.write(angleV);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delay(5);</span></span>
<span class="line"><span>    radio.stopListening();</span></span>
<span class="line"><span>    buttonState = digitalRead(button);</span></span>
<span class="line"><span>    radio.write(&amp;buttonState, sizeof(buttonState));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>What’s different here from the previous example is that we need to create two pipes or addresses for the bi-directional communication.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const byte addresses[][6] = {&quot;00001&quot;, &quot;00002&quot;};Code language: Arduino (arduino)</span></span></code></pre></div><p>In the setup section we need to define both pipes, and note that the writing address at the first Arduino needs to be the reading address at the second Arduino, and vice versa, the reading address at the first Arduino needs to be the writing address at the second Arduino.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// at the Transmitter</span></span>
<span class="line"><span>radio.openWritingPipe(addresses[1]); // 00001</span></span>
<span class="line"><span>radio.openReadingPipe(1, addresses[0]); // 00002Code language: Arduino (arduino)</span></span></code></pre></div><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// at the Receiver</span></span>
<span class="line"><span>radio.openWritingPipe(addresses[0]); // 00002</span></span>
<span class="line"><span>radio.openReadingPipe(1, addresses[1]); // 00001Code language: Arduino (arduino)</span></span></code></pre></div><p>In the loop section using the radio.stopListening() function we set the first Arduino as transmitter, read and map the value of Joystick from 0 to 180, and using the radio.write() function send the data to the receiver.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>radio.stopListening();</span></span>
<span class="line"><span>int potValue = analogRead(A0);</span></span>
<span class="line"><span>int angleValue = map(potValue, 0, 1023, 0, 180);</span></span>
<span class="line"><span>radio.write(&amp;angleValue, sizeof(angleValue));Code language: Arduino (arduino)</span></span></code></pre></div><p>On the other side, using the radio.startListening() function we set the second Arduino as receiver and we check whether there is available data. While there is data available we will read it, save it to the “angleV” variable and then use that value to rotate the servo motor.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>radio.startListening();</span></span>
<span class="line"><span>  if ( radio.available()) {</span></span>
<span class="line"><span>    while (radio.available()) {</span></span>
<span class="line"><span>      int angleV = 0;</span></span>
<span class="line"><span>      radio.read(&amp;angleV, sizeof(angleV));</span></span>
<span class="line"><span>      myServo.write(angleV);</span></span>
<span class="line"><span>    }Code language: Arduino (arduino)</span></span></code></pre></div><p>Next, at the transmitter, we set the first Arduino as receiver and with an empty “while” loop we wait for the second Arduino the send data, and that’s the data for the state of the push button whether is pressed or not. If the button is pressed the LED will light up. So these process constantly repeats and both Arduino boards are constantly sending and receiving data.</p><h3 id="example-3-–-sending-multiple-variables-in-a-single-package" tabindex="-1">Example 3 – Sending multiple variables in a single package <a class="header-anchor" href="#example-3-–-sending-multiple-variables-in-a-single-package" aria-label="Permalink to &quot;Example 3 – Sending multiple variables in a single package&quot;">​</a></h3><p>Let’s take a look at one more example code using the NRF24L01 modules. Everything remains the same as in the previous examples, expect for the way we structure and send the date.</p><p><strong>Transmitter Code</strong></p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>  Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>      Example 1 - Transmitter Code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const byte address[6] = &quot;00001&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Max size of this struct is 32 bytes - NRF24L01 buffer limit</span></span>
<span class="line"><span>struct Data_Package {</span></span>
<span class="line"><span>  byte a = 0;</span></span>
<span class="line"><span>  byte b = 125;</span></span>
<span class="line"><span>  byte c = 255;</span></span>
<span class="line"><span>  int d = 1024;</span></span>
<span class="line"><span>  float e = 3.141592;</span></span>
<span class="line"><span>  String f = &quot;Test&quot;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Data_Package data; // Create a variable with the above structure</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openWritingPipe(address);</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>  radio.stopListening();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Send the whole data from the structure to the receiver</span></span>
<span class="line"><span>  radio.write(&amp;data, sizeof(Data_Package));</span></span>
<span class="line"><span>  delay(500);</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><p>So, we can create a struct which is actually a collection of various types of variables.</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Max size of this struct is 32 bytes - NRF24L01 buffer limit</span></span>
<span class="line"><span>struct Data_Package {</span></span>
<span class="line"><span>  byte a = 0;</span></span>
<span class="line"><span>  byte b = 125;</span></span>
<span class="line"><span>  byte c = 255;</span></span>
<span class="line"><span>  int d = 1024;</span></span>
<span class="line"><span>  float e = 3.141592;</span></span>
<span class="line"><span>  String f = &quot;Test&quot;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Data_Package data; // Create a variable with the above structureCode language: Arduino (arduino)</span></span></code></pre></div><p>We should keep in mind that the maximum size of this struct data can be 32 bytes. Here we can see I included three variables type byte, one integer variable (4 bytes), one float variable (4 bytes) and one String containing four characters (4 bytes). That’s total of 15 bytes.</p><p><strong>Receiver Code</strong></p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*</span></span>
<span class="line"><span>  Arduino Wireless Communication Tutorial</span></span>
<span class="line"><span>        Example 1 - Receiver Code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  by Dejan Nedelkovski, www.HowToMechatronics.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Library: TMRh20/RF24, https://github.com/tmrh20/RF24/</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## include &lt;SPI.h&gt;</span></span>
<span class="line"><span>## include &lt;nRF24L01.h&gt;</span></span>
<span class="line"><span>## include &lt;RF24.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RF24 radio(7, 8); // CE, CSN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const byte address[6] = &quot;00001&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Max size of this struct is 32 bytes - NRF24L01 buffer limit</span></span>
<span class="line"><span>struct Data_Package {</span></span>
<span class="line"><span>  byte a = 0;</span></span>
<span class="line"><span>  byte b = 125;</span></span>
<span class="line"><span>  byte c = 255;</span></span>
<span class="line"><span>  int d = 1024;</span></span>
<span class="line"><span>  float e = 3.141592;</span></span>
<span class="line"><span>  String f = &quot;Test&quot;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Data_Package data; //Create a variable with the above structure</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  radio.begin();</span></span>
<span class="line"><span>  radio.openReadingPipe(0, address);</span></span>
<span class="line"><span>  radio.setPALevel(RF24_PA_MIN);</span></span>
<span class="line"><span>  radio.startListening();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Check whether there is data to be received</span></span>
<span class="line"><span>  if (radio.available()) {</span></span>
<span class="line"><span>    radio.read(&amp;data, sizeof(Data_Package)); // Read the whole data and store it into the &#39;data&#39; structure</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Serial.print(&quot;a: &quot;);</span></span>
<span class="line"><span>  Serial.print(data.a);</span></span>
<span class="line"><span>  Serial.print(&quot; b: &quot;);</span></span>
<span class="line"><span>  Serial.print(data.b);</span></span>
<span class="line"><span>  Serial.print(&quot; c: &quot;);</span></span>
<span class="line"><span>  Serial.print(data.c);</span></span>
<span class="line"><span>  Serial.print(&quot; d: &quot;);</span></span>
<span class="line"><span>  Serial.print(data.d);</span></span>
<span class="line"><span>  Serial.print(&quot; e: &quot;);</span></span>
<span class="line"><span>  Serial.print(data.e);</span></span>
<span class="line"><span>  Serial.print(&quot; f: &quot;);</span></span>
<span class="line"><span>  Serial.println(data.f);</span></span>
<span class="line"><span>}Code language: Arduino (arduino)</span></span></code></pre></div><p>At the receiver side, we have to define the same struct data in order to be able to receive the incoming data. For testing whether the wireless communication works properly, I printed each variable on the serial monitor.</p><h3 id="conclusion" tabindex="-1">Conclusion <a href="#h-conclusion" id="h-conclusion"></a> <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion &lt;a href=&quot;#h-conclusion&quot; id=&quot;h-conclusion&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>The NRF24L01 module is a great option for when you need wireless communication for your Arduino project. I have already used this module in many of my <a href="https://howtomechatronics.com/arduino-projects/" target="_blank" rel="noreferrer">Arduino projects</a>.</p><p>Here I will list all of my projects in which I have used these modules.</p><ul><li><a href="https://howtomechatronics.com/tutorials/arduino/arduino-robot-car-wireless-control-using-hc-05-bluetooth-nrf24l01-and-hc-12-transceiver-modules/" target="_blank" rel="noreferrer">Arduino Robot Car Wireless Control using HC-05 Bluetooth, NRF24L01 and HC-12 Transceiver Modules</a></li><li><a href="https://howtomechatronics.com/tutorials/arduino/arduino-wireless-weather-station-project/" target="_blank" rel="noreferrer">Arduino Wireless Weather Station Project</a></li><li><a href="https://howtomechatronics.com/projects/diy-arduino-rc-transmitter/" target="_blank" rel="noreferrer">DIY Arduino RC Transmitter</a></li><li><a href="https://howtomechatronics.com/projects/arduino-ant-hexapod-robot/" target="_blank" rel="noreferrer">Arduino Ant Hexapod Robot</a></li><li><a href="https://howtomechatronics.com/projects/diy-arduino-based-rc-hovercraft/" target="_blank" rel="noreferrer">DIY Arduino based RC Hovercraft</a></li><li><a href="https://howtomechatronics.com/projects/arduino-mecanum-wheels-robot/" target="_blank" rel="noreferrer">Arduino Mecanum Wheels Robot</a></li><li><a href="https://howtomechatronics.com/projects/diy-arduino-rc-receiver/" target="_blank" rel="noreferrer">DIY Arduino RC Receiver for RC Models and Arduino Projects</a></li><li><a href="https://howtomechatronics.com/projects/arduino-rc-airplane-diy/" target="_blank" rel="noreferrer">Arduino RC Airplane | 100% DIY</a></li></ul><p>Each of these projects/ tutorials has a detailed explanation how to use the NRF24L01 module, including circuit diagrams, improved code implementation for better communication and so on.</p><p>My favorite project is this custom designed Arduino RC Transmitter. It’s actually a 14-channel RC controller which can be used for controlling pretty much any Arduino Project.</p><p>That’s all for this tutorial, I hope you enjoyed it and learned something new. As always, feel free to ask any question in the comments section below.</p><p>Categories<a href="https://howtomechatronics.com/category/tutorials/arduino/" target="_blank" rel="noreferrer"><br></a></p>`,110)])])}const g=n(o,[["render",i]]);export{u as __pageData,g as default};
