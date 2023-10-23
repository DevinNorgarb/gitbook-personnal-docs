# Page 3

nRF24L01 – How It Works, Arduino Interface, Circuits, Codes Photo of author by Dejan

•

104 Comments

•

Arduino Tutorials

In this tutorial we will learn how to make wireless communication between two Arduino boards using the nRF24L01 transceiver modules. The nRF24L01 module is very popular choice for wireless communication when using Arduino.

I have already used this module for numerous Arduino projects and you can check out some of them here:

DIY Arduino RC Transmitter Arduino RC Airplane | 100% DIY DIY Arduino based RC Hovercraft Arduino Wireless Weather Station Project You can watch the following video or read the written tutorial below. It includes everything we need to know about the nRF24L01 transceiver module, such as the module pinout, working principle, wiring and several code examples.

Overview For explaining the wireless communication we will make two examples, the first one will be sending a simple “Hello World” message from one Arduino to another, and in the second example we will have a bi-directional communication between the Arduino boards, where using the Joystick at the first Arduino we will control the servo motor at the second Arduino, and vice versa, using the push button at the second Arduino we will control the LED at the first Arduino.

nRF24L01 Transceiver Module Let’s take a closer look at the NRF24L01 transceiver module. It uses the 2.4 GHz band and it can operate with baud rates from 250 kbps up to 2 Mbps. If used in open space and with lower baud rate its range can reach up to 100 meters.

NRF24L01 Transceiver Module Here are complete specifications:

Frequency range 2.4 – 2.5GHz ISM band Data rates 250Kbps / 1Mbps / 2Mbps Max. output power 0dBm Operating voltage 1.9 – 3.6V Max. operating current 12.3mA Standby current 22µA Logic inputs 5V tolerant Communication range 100m (open space) How It Works The module can use 125 different channels which gives a possibility to have a network of 125 independently working modems in one place. Each channel can have up to 6 addresses, or each unit can communicate with up to 6 other units at the same time.

Working Principles of Channels and Addresses The power consumption of this module is just around 12mA during transmission, which is even lower than a single LED. The operating voltage of the module is from 1.9 to 3.6V, but the good thing is that the other pins tolerate 5V logic, so we can easily connect it to an Arduino without using any logic level converters.

NRF24L01 Transceiver Module Pinouts Connections Three of these pins are for the SPI communication and they need to be connected to the SPI pins of the Arduino, but note that each Arduino board has different SPI pins. The pins CSN and CE can be connected to any digital pin of the Arduino board and they are used for setting the module in standby or active mode, as well as for switching between transmit or command mode. The last pin is an interrupt pin which doesn’t have to be used.

Module variations There are several variations of the NRF24L01 modules. The most popular is the one with on-board antenna. This makes the module to be more compact, but on the other hand, lowers the transmission range to a distance of about 100 meters.

Various modules based on the NRF24L01 chip The second variation, instead of on-board antenna, it has a SMA connector and which we can attach a duck antenna for better transmission range.

The third variation shown here, in addition to the duck antenna, it has a RFX2401C chip which includes PA (Power Amplifier) and LNA (Low-Noise Amplifier). This amplifies the NRF24L01 signal and enables even better transmission range of up to 1000 meters in open space.

nRF24L01 Module Pinout Here’s a detailed look at the NRF24L01 pinout, as well as the NRF24L01+ PA/LNA module.

NRF24L01 Pinout & NRF24L01+ PA LNA .png Both modules, the NRF24L01 and the NRF24L01+ PA/LNA have the same pinout, so we can connect them in our circuit the same way.

How to Connect the nRF24L01 to Arduino Here’s how we need to connect the NRF24L01 modules to the Arduino boards.

NRF24L01 and Arduino Tutorial Circuit Schematic As I already mentioned, each Arduino board has different SPI pins, so keep that in mind when connecting the modules to your Arduino board.

Arduino SCK MISO MOSI SS Uno 13 12 11 10 Nano 13 12 11 10 Mega 52 50 51 53 SPI pins on different Arduino boards You can get the components needed for this Arduino tutorial from the links below:

NRF24L01 Transceiver Module……… Amazon / Banggood / Aliexpress Arduino Board ……………………………… Amazon / Banggood / Aliexpress Breadboard and Jump Wires ………… Amazon / Banggood / Aliexpress Disclosure: These are affiliate links. As an Amazon Associate I earn from qualifying purchases.

Arduino and nRF24L01 Code Once we connect the NRF24L01 modules to the Arduino boards we are ready to make the codes for both the transmitter and the receiver.

First we need to download and install the RF24 library which makes the programming less difficult. We can also install this library directly from the Arduino IDE Library Manager. Just search for “rf24” and find and install the one by “TMRh20, Avamander”.

Here are the two codes for the wireless communication and below is the description of them.

Transmitter Code /\*

* Arduino Wireless Communication Tutorial
* ```
  Example 1 - Transmitter Code
  ```
*
* by Dejan Nedelkovski, www.HowToMechatronics.com
*
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h>

RF24 radio(7, 8); // CE, CSN

const byte address\[6] = "00001";

void setup() { radio.begin(); radio.openWritingPipe(address); radio.setPALevel(RF24\_PA\_MIN); radio.stopListening(); }

void loop() { const char text\[] = "Hello World"; radio.write(\&text, sizeof(text)); delay(1000); }

Receiver Code /\*

* Arduino Wireless Communication Tutorial
* ```
    Example 1 - Receiver Code
  ```
*
* by Dejan Nedelkovski, www.HowToMechatronics.com
*
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h>

RF24 radio(7, 8); // CE, CSN

const byte address\[6] = "00001";

void setup() { Serial.begin(9600); radio.begin(); radio.openReadingPipe(0, address); radio.setPALevel(RF24\_PA\_MIN); radio.startListening(); }

void loop() { if (radio.available()) { char text\[32] = ""; radio.read(\&text, sizeof(text)); Serial.println(text); } }

Code Description So we need to include the basic SPI and the newly installed RF24 libraries and create an RF24 object. The two arguments here are the CSN and CE pins.

RF24 radio(7, 8); // CE, CSN

Next we need to create a byte array which will represent the address, or the so called pipe through which the two modules will communicate.

const byte address\[6] = "00001";

We can change the value of this address to any 5 letter string and this enables to choose to which receiver we will talk, so in our case we will have the same address at both the receiver and the transmitter.

In the setup section we need to initialize the radio object and using the radio.openWritingPipe() function we set the address of the receiver to which we will send data, the 5 letter string we previously set.

radio.openWritingPipe(address);

On the other side, at the receiver, using the radio.setReadingPipe() function we set the same address and in that way we enable the communication between the two modules.

radio.openReadingPipe(0, address);

Then using the radio.setPALevel() function we set the Power Amplifier level, in our case I will set it to minimum as my modules are very close to each other.

radio.setPALevel(RF24\_PA\_MIN);

Note that if using a higher level it is recommended to use a bypass capacitors across GND and 3.3V of the modules so that they have more stable voltage while operating.

Next we have the radio.stopListening() function which sets module as transmitter, and on the other side, we have the radio.startListening() function which sets the module as receiver.

// at the Transmitter radio.stopListening();

// at the Receiver radio.startListening();

In the loop section, at the transmitter, we create an array of characters to which we assign the message “Hello World”. Using the radio.write() function we will send that message to the receiver. The first argument here is the variable that we want to be sent.

void loop() { const char text\[] = "Hello World"; radio.write(\&text, sizeof(text)); delay(1000); }

By using the “&” before the variable name we actually set an indicating of the variable that stores the data that we want to be sent and using the second argument we set the number of bytes that we want to take from that variable. In this case the sizeof() function gets all bytes of the strings “text”. At the end of the program we will add 1 second delay.

Using the radio.write() function we can send maximum of 32 bytes at a time.

On the other side, at the receiver, in the loop section using the radio.available() function we check whether there is data to be received. If that’s true, first we create an array of 32 elements, called “text”, in which we will save the incoming data.

void loop() { if (radio.available()) { char text\[32] = ""; radio.read(\&text, sizeof(text)); Serial.println(text); } }

Using the radion.read() function we read and store the data into the “text” variable. At the end we just print text on the serial monitor. So once we upload both programs, we can run the serial monitor at the receiver and we will notice the message “Hello World” gets printed each second.

Troubleshooting It’s worth noting that power supply noise is one of the most common issues people experience when trying to make successful communication with the NRF24L01 modules. Generally, RF circuits or radio frequency signals are sensitive to power supply noise. Therefore, it’s always a good idea to include a decoupling capacitor across the power supply line. The capacitor can be anything from 10uF to 100uF.

NRF24L01 Troubleshooting- decoupling capacitor and external power supply Another common issue is that the 3.3V pin of the Arduino boards, cannot always supply enough power to the NRF24L01 module. So, powering the module with an external power source is also a good idea.

Bi-directional Wireless Communication with two NRF24L01 and Arduino Let’s see the second example, a bi-directional wireless communication between two Arduino boards. Here’s the circuit schematics:

Arduino Wireless Communication NRF24L01 Circuit Schematic Tutorial You can get the components needed for this example from the links below:

NRF24L01 Transceiver Module………… Amazon / Banggood / AliExpress Arduino Board…………………………………. Amazon / Banggood / AliExpress Joystick Module ………………………………. Amazon / Banggood / AliExpress Servo Motor ……………………………………. Amazon / Banggood / AliExpress Pushbutton …………………………………….. Amazon / Banggood / AliExpress LED ………………………………………………… Amazon / Banggood / AliExpress Disclosure: These are affiliate links. As an Amazon Associate I earn from qualifying purchases.

See Also How To Build an Arduino Wireless Network with Multiple NRF24L01 Modules

nRF24L01 Source Code Here are the two codes and their description below.

Transmitter Code

/\*

* Arduino Wireless Communication Tutorial
* ```
  Example 2 - Transmitter Code
  ```
*
* by Dejan Nedelkovski, www.HowToMechatronics.com
*
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h>

\#define led 12

RF24 radio(7, 8); // CE, CSN const byte addresses\[]\[6] = {"00001", "00002"}; boolean buttonState = 0;

void setup() { pinMode(12, OUTPUT); radio.begin(); radio.openWritingPipe(addresses\[1]); // 00002 radio.openReadingPipe(1, addresses\[0]); // 00001 radio.setPALevel(RF24\_PA\_MIN); }

void loop() { delay(5);

radio.stopListening(); int potValue = analogRead(A0); int angleValue = map(potValue, 0, 1023, 0, 180); radio.write(\&angleValue, sizeof(angleValue));

delay(5); radio.startListening(); while (!radio.available()); radio.read(\&buttonState, sizeof(buttonState)); if (buttonState == HIGH) { digitalWrite(led, HIGH); } else { digitalWrite(led, LOW); } }

Receiver Code

/\*

* Arduino Wireless Communication Tutorial
* ```
  Example 2 - Receiver Code
  ```
*
* by Dejan Nedelkovski, www.HowToMechatronics.com
*
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h> #include \<Servo.h>

\#define button 4

RF24 radio(7, 8); // CE, CSN const byte addresses\[]\[6] = {"00001", "00002"}; Servo myServo; boolean buttonState = 0;

void setup() { pinMode(button, INPUT); myServo.attach(5); radio.begin(); radio.openWritingPipe(addresses\[0]); // 00001 radio.openReadingPipe(1, addresses\[1]); // 00002 radio.setPALevel(RF24\_PA\_MIN); }

void loop() { delay(5); radio.startListening(); if ( radio.available()) { while (radio.available()) { int angleV = 0; radio.read(\&angleV, sizeof(angleV)); myServo.write(angleV); } delay(5); radio.stopListening(); buttonState = digitalRead(button); radio.write(\&buttonState, sizeof(buttonState)); } }

What’s different here from the previous example is that we need to create two pipes or addresses for the bi-directional communication.

const byte addresses\[]\[6] = {"00001", "00002"};

In the setup section we need to define both pipes, and note that the writing address at the first Arduino needs to be the reading address at the second Arduino, and vice versa, the reading address at the first Arduino needs to be the writing address at the second Arduino.

// at the Transmitter radio.openWritingPipe(addresses\[1]); // 00001 radio.openReadingPipe(1, addresses\[0]); // 00002

// at the Receiver radio.openWritingPipe(addresses\[0]); // 00002 radio.openReadingPipe(1, addresses\[1]); // 00001

In the loop section using the radio.stopListening() function we set the first Arduino as transmitter, read and map the value of Joystick from 0 to 180, and using the radio.write() function send the data to the receiver.

radio.stopListening(); int potValue = analogRead(A0); int angleValue = map(potValue, 0, 1023, 0, 180); radio.write(\&angleValue, sizeof(angleValue));

On the other side, using the radio.startListening() function we set the second Arduino as receiver and we check whether there is available data. While there is data available we will read it, save it to the “angleV” variable and then use that value to rotate the servo motor.

radio.startListening(); if ( radio.available()) { while (radio.available()) { int angleV = 0; radio.read(\&angleV, sizeof(angleV)); myServo.write(angleV); }

Next, at the transmitter, we set the first Arduino as receiver and with an empty “while” loop we wait for the second Arduino the send data, and that’s the data for the state of the push button whether is pressed or not. If the button is pressed the LED will light up. So these process constantly repeats and both Arduino boards are constantly sending and receiving data.

Example 3 – Sending multiple variables in a single package Let’s take a look at one more example code using the NRF24L01 modules. Everything remains the same as in the previous examples, expect for the way we structure and send the date.

Transmitter Code

/\* Arduino Wireless Communication Tutorial Example 1 - Transmitter Code

by Dejan Nedelkovski, www.HowToMechatronics.com

Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h>

RF24 radio(7, 8); // CE, CSN

const byte address\[6] = "00001";

// Max size of this struct is 32 bytes - NRF24L01 buffer limit struct Data\_Package { byte a = 0; byte b = 125; byte c = 255; int d = 1024; float e = 3.141592; String f = "Test"; };

Data\_Package data; // Create a variable with the above structure

void setup() { radio.begin(); radio.openWritingPipe(address); radio.setPALevel(RF24\_PA\_MIN); radio.stopListening(); }

void loop() { // Send the whole data from the structure to the receiver radio.write(\&data, sizeof(Data\_Package)); delay(500); }

So, we can create a struct which is actually a collection of various types of variables.

// Max size of this struct is 32 bytes - NRF24L01 buffer limit struct Data\_Package { byte a = 0; byte b = 125; byte c = 255; int d = 1024; float e = 3.141592; String f = "Test"; };

Data\_Package data; // Create a variable with the above structure

We should keep in mind that the maximum size of this struct data can be 32 bytes. Here we can see I included three variables type byte, one integer variable (4 bytes), one float variable (4 bytes) and one String containing four characters (4 bytes). That’s total of 15 bytes.

Receiver Code

/\* Arduino Wireless Communication Tutorial Example 1 - Receiver Code

by Dejan Nedelkovski, www.HowToMechatronics.com

Library: TMRh20/RF24, https://github.com/tmrh20/RF24/ \*/

\#include \<SPI.h> #include \<nRF24L01.h> #include \<RF24.h>

RF24 radio(7, 8); // CE, CSN

const byte address\[6] = "00001";

// Max size of this struct is 32 bytes - NRF24L01 buffer limit struct Data\_Package { byte a = 0; byte b = 125; byte c = 255; int d = 1024; float e = 3.141592; String f = "Test"; };

Data\_Package data; //Create a variable with the above structure

void setup() { Serial.begin(9600); radio.begin(); radio.openReadingPipe(0, address); radio.setPALevel(RF24\_PA\_MIN); radio.startListening(); }

void loop() { // Check whether there is data to be received if (radio.available()) { radio.read(\&data, sizeof(Data\_Package)); // Read the whole data and store it into the 'data' structure } Serial.print("a: "); Serial.print(data.a); Serial.print(" b: "); Serial.print(data.b); Serial.print(" c: "); Serial.print(data.c); Serial.print(" d: "); Serial.print(data.d); Serial.print(" e: "); Serial.print(data.e); Serial.print(" f: "); Serial.println(data.f); }

At the receiver side, we have to define the same struct data in order to be able to receive the incoming data. For testing whether the wireless communication works properly, I printed each variable on the serial monitor.

Sending multiple variables as a single package Conclusion The NRF24L01 module is a great option for when you need wireless communication for your Arduino project. I have already used this module in many of my Arduino projects.

Here I will list all of my projects in which I have used these modules.

Arduino Robot Car Wireless Control using HC-05 Bluetooth, NRF24L01 and HC-12 Transceiver Modules Arduino Wireless Weather Station Project DIY Arduino RC Transmitter Arduino Ant Hexapod Robot DIY Arduino based RC Hovercraft Arduino Mecanum Wheels Robot DIY Arduino RC Receiver for RC Models and Arduino Projects Arduino RC Airplane | 100% DIY Each of these projects/ tutorials has a detailed explanation how to use the NRF24L01 module, including circuit diagrams, improved code implementation for better communication and so on.

My favorite project is this custom designed Arduino RC Transmitter. It’s actually a 14-channel RC controller which can be used for controlling pretty much any Arduino Project.

DIY Arduino RC Transmitter - Arduino Robot Car Wireless Control DIY Arduino RC Transmitter Example That’s all for this tutorial, I hope you enjoyed it and learned something new. As always, feel free to ask any question in the comments section below.

Categories
