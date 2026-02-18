# IoT4Car

{% embed url="https://www.hackster.io/frankzhao/iot4car-1b07f1" %}

{% file src="../../../.gitbook/assets/frizling_schematics_M8kF26dafQ.fzz" %}



MKR WiFi 1000 talks to a car through OBD-II interface, and uploads the data to IoT cloud for real-time monitoring and post-processing.

[Intermediate](https://www.hackster.io/projects?difficulty=intermediate)Full instructions provided8 hours51,962![IoT4Car](https://hackster.imgix.net/uploads/attachments/558993/background_image_HckdSnofkc.png?auto=compress%2Cformat\&w=900\&h=675\&fit=min)

### Things used in this project

| <h4>Hardware components</h4>                                                                                                                                                  |                                  |   |   |   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | - | - | - |
| ![Arduino MKR1000](https://hackster.imgix.net/uploads/image/file/138055/ABX00004_Iso_Both.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                        | 24d48c6dbc184dbe8e2e966279c59c8f | × | 1 |   |
| [Arduino MKR1000](https://www.hackster.io/arduino/products/arduino-mkr1000?ref=project-1b07f1)                                                                                |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
| ![SparkFun Logic Level Converter - Bi-Directional](https://hackster.imgix.net/uploads/image/file/123204/12009-06.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff) | 08a4189022174c8490e36f7ee97b9276 | × | 1 |   |
| [SparkFun Logic Level Converter - Bi-Directional](https://www.hackster.io/sparkfun/products/sparkfun-logic-level-converter-bi-directional?ref=project-1b07f1)                 |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
|                                                                                                                                                                               | 7f1ffa9188fb423ea1f3d320f2febb06 | × | 1 |   |
| SparkFun OBD-II UART                                                                                                                                                          |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
|                                                                                                                                                                               | 4be678bc5afd418ca904dde8cdcb3115 | × | 1 |   |
| SparkFun OBD-II to DB9 Cable                                                                                                                                                  |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
| <h4>Software apps and online services</h4>                                                                                                                                    |                                  |   |   |   |
| ![Arduino IDE](https://hackster.imgix.net/uploads/image/file/144203/IDE_web.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                                      | ba7d013903bb4d76a14764f0144e1699 |   |   |   |
| [Arduino IDE](https://www.hackster.io/arduino/products/arduino-ide?ref=project-1b07f1)                                                                                        |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
|                                                                                                                                                                               | ce1ecfc339a942ea9ef7d7e3ab3e17a9 |   |   |   |
| freeboard                                                                                                                                                                     |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |
|                                                                                                                                                                               | 0d21da446cda43989485980eb3ae6fa1 |   |   |   |
| dweet                                                                                                                                                                         |                                  |   |   |   |
|                                                                                                                                                                               |                                  |   |   |   |

### Story

#### Background <a href="#toc-background-0" id="toc-background-0"></a>

When driving your vehicle, glancing at your dashboard, have you ever thought of collecting the meter readings and do some analysis? These data may contain hidden treasures. For individuals, it can reflect your driving habits, it can tell you your speed, your average mpg, how many traffic lights you have, and your waiting time at each cross. For companies, these data are critical for real-time monitoring in fleet management. Vehicle condition, work load distribution, gasoline efficiency, and even vehicle location can all be fed back to a central control system through cloud. Companies can use machine learning to feed the data into a training model to predict the cost and even analyze the driver's characteristics. As IoT is widely spreading, the above applications won't be far away. With the Arduino MKR boards, targeting at IoT applications, you can build a device that talks to your car and uploads telemetric data into cloud all by yourself. Isn't that cool?

#### Talking to a vehicle <a href="#toc-talking-to-a-vehicle-1" id="toc-talking-to-a-vehicle-1"></a>

We need an interface to access into the vehicle system. Where can we hack into the car? The answer is OBD-II interface.

**What is OBD-II?**

On-Board Diagnostics (OBD) is a vehicle's built-in self-diagnostic system, through which we can communicate with our cars. It was first introduced in United States in 1994, and became a requirement on all 1996 and newer US vehicles. Other countries, including Canada, parts of the European Union, Japan, Australia, and Brazil adopted similar legislation. OBD-II (second generation) has five signaling protocols, and Controller Area Network (CAN bus) is one of them. CAN bus is required to be implemented in all the US cars since 2008. There is a great introduction of [OBDII provided by CSS Electronics on Youtube](https://www.youtube.com/watch?v=OhShoU_E-0g). In this project, we will access data through the 16 pin OBD-II interfaces.

![OBD2 Adoption Year (Picture from OBD2 Explained - A Simple Intro (2018))](https://hackster.imgix.net/uploads/attachments/559835/obdii_mandatory_xQAHCnEQMl.PNG?auto=compress%2Cformat\&w=740\&h=555\&fit=max)OBD2 Adoption Year (Picture from OBD2 Explained - A Simple Intro (2018))

**My controller**

Arduino is an excellent platform for hobbyists, makers, and professionals. It has a variety of boards targeting at different applications. Here I use the Arduino MKR WiFi 1000 board due to its WiFi capability. Your can also use other boards that you like. I would recommend Arduino MKR GSM 1400, simply because GSM covers much wider areas than WiFi does. But don't worry, even with WiFi we can have internet access along the roads. I will show you the workaround.

**The interpret board**

Although Arduino itself has plenty of I/Os and numerous libraries, we still need a board that can translate OBD protocols into a language that Arduino can recognize. The board that I use is the [SparkFun OBD-II UART Board](https://www.sparkfun.com/products/9555).

![SparkFun OBD-II UART (picture from SparkFun.com)](https://hackster.imgix.net/uploads/attachments/559890/image_OujpsuM03U.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)SparkFun OBD-II UART (picture from SparkFun.com)

This board allows you to interface with your car’s OBD-II bus. It provides you a serial interface using the ELM327 command set and supports all major OBD-II standards such as CAN. The board contains an STN1110 chip, which is an OBD to UART interpreter that can be used to convert messages between any of the OBD-II protocols currently in use, and UART.

However, it should be pointed that the interpret board has an I/O voltage of 5 V, which may damage the Arduino MKR board I/O, if connecting them directly. Arduino MKR WiFI 1000 runs at a lower voltage and its I/O voltage is 3.3 V. Therefore, a level shifter is needed to convert signal from 5 V to 3.3 V and visa versa. Below is the image of the[ level shift](https://www.sparkfun.com/products/12009) that I use.

![SparkFun Logic Level Converter (picture from SparkFun.com)](https://hackster.imgix.net/uploads/attachments/559893/image_uW1w59mU32.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)SparkFun Logic Level Converter (picture from SparkFun.com)

**Hook it up**

Hooking up the circuit is pretty easy. Simply connecting your Arduino MRK pin 13 Rx and pin 14 Tx, to OBD-II UART board Tx and Rx pins through the level shifter. Of course, you need to connect the ground of the two boards together.

To ease debugging and demonstration, I also connected a LCD 1602 screen to Arduino to display the data in real-time. The LCD to Arduino wiring can be found to this [tutorial](https://www.arduino.cc/en/Tutorial/HelloWorld), and thus will not be elaborated here.

Below is the image of the breadboard connection. The green lines are for the wires connecting the Arduino and the OBD-II UART board, while the yellow lines are for the wires connecting the Arduino and the LCD. The schematic is also available in the attachment.

![IoT4Car bread board connection, created in Frizling.](https://hackster.imgix.net/uploads/attachments/559897/iot4car_connection_frizling_6SxJxYPg1T.PNG?auto=compress%2Cformat\&w=740\&h=555\&fit=max)IoT4Car bread board connection, created in Frizling.

The real connection is a bit messy due to the limited bread board area, but it follows the above schematic. I included the micro USB and [ODB-II to DB9 cable](https://www.sparkfun.com/products/10087) in the picture.

![final connection](https://hackster.imgix.net/uploads/attachments/559907/img_0709_fth6MU3IpT.JPG?auto=compress%2Cformat\&w=740\&h=555\&fit=max)final connection

**Serial1 not Serial**

All right, it is time to program our Arduino MKR board. Since my Arduino MKR board talks with the interpret board through UART, there is no need to install 3rd party libraries. Sending commands to the interpret board is simply like communicating with Serial Monitor. The only thing that I want to emphasize is that the serial port associated with Pin 13 and Pin 14 is **Serial 1**! Arduino MKR board _Serial port_ refers to its USB port which is used to communicate with your computer. Don't forget to initialize **Serial 1** port in the setup() function.

```
 Serial1.begin(9600);
```

And use **Serial 1** to push command to the interpret board.

```
 Serial1.println(message);
```

**Messages**

As you see, I use the variable "message" to store the commands. The OBD commands are made up of hexadecimal codes written in ASCII characters. The first two hexadecimal numbers refer to the service mode to be used. There are 10 diagnostic services described in the latest OBD-II standard SAE J1979. Since we are interested in real-time monitoring, we will only use **01** code to show current data in this project.

![10 diagnostic services in OBD commands (picture from https://en.wikipedia.org/wiki/OBD-II\_PIDs)](https://hackster.imgix.net/uploads/attachments/561007/image_dSMVaZ8tFn.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)10 diagnostic services in OBD commands (picture from https://en.wikipedia.org/wiki/OBD-II\_PIDs)

Any hex number after the service mode represents the Parameter ID (PID) to achieve special functions. Below is the screenshot of the PIDs in 01 service mode. More information can be found in [Wikipedia](https://en.wikipedia.org/wiki/OBD-II_PIDs).

![Screenshot of a few PIDs in Service 01 mode (https://en.wikipedia.org/wiki/OBD-II\_PIDs)](https://hackster.imgix.net/uploads/attachments/561023/image_YWCgugPmOK.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Screenshot of a few PIDs in Service 01 mode (https://en.wikipedia.org/wiki/OBD-II\_PIDs)

In this project, I will demonstrate how to get the car speed, the engine RPM, the fuel level, and the engine coolant temperature. The OBD commands for these four functions are：

* 010D // car speed
* 010C // engine RPM

**Decode the data**

Once the commands are sent out, Arduino MKR board will listen to Serial 1 port for any response. It is better to put a delay of 200 ms after sending out the commands. I use the following code to receive response.

```
void getResponse(void){
 while(Serial1.available() > 0) {
     // Start by checking if we've received the end of message character ('\r').
     if(Serial1.peek() == '\r'){
       // reach the end of the message, clear the Serial buffer
       inChar = Serial1.read();
       rxData[rxIndex] = '\0';
       // Reset the buffer index so that the next character goes back at the beginning of the string
       rxIndex = 0;  
     }
     // If we didnt get the end of the message character, just add the new character to the string
     else{
       // Get the new character from the Serial port:
       inChar = Serial1.read();
       // add the new character to the string, and increase the index variable:
       rxData[rxIndex++] = inChar;
     }  
 }
}
```

The response from the interpret board follows the format

">1 Repeated PIDs Data"

![Screenshot of the serial monitor demonstrating sending commands and receiving data](https://hackster.imgix.net/uploads/attachments/561090/serial_port_screenshot_yCeHtB85ZI.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Screenshot of the serial monitor demonstrating sending commands and receiving data

For example, in the above screenshot, I send out "010D" to get the car speed. The response is ">1 0D 00". The first 5 characters show that the car receives the command and repeats the PID 0x0D back. The last two digits return the speed data 0x00.

Then I send out "010C" to get the engine RPM, the response ">1 0C" shows the acknowledge of the command, the data 0x098C is 4 times the engine RPM value in hexadecimal. 0x098C / 4 = 611 dec, so the engine RPM is 611 rpm.

After that, I send out command "012F" to get the fuel level, and I get data 0x1D. The fuel level is calculated as 0x1D / 255 \* 100 = 11% dec.

The final command is "0105", which gives me the coolant temperature 0x79. The real temperature is 0x79 - 40 = 81 degreeC dec. Then the command sequence repeats itself.

As you can see, the response line has spaces between two hexadecimal digits, and the first 5 digits is simply repeating the commands. Therefore, the real data starts from the 6th character (first one starts from 0 index).

In programming and debugging, a serial monitor is helpful, but when it comes to real application, a LCD screen is more portable and it meets the IoT power requirement. Simply replace the serial monitor with a LCD screen, you can monitor your car data in real time. Below is the photo of using the project in my own car.

![Photo of boards in my car](https://hackster.imgix.net/uploads/attachments/561110/lcd_monitor_show_results_iEnFq1alL4.jpg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Photo of boards in my car

#### Cloud our data <a href="#toc-cloud-our-data-2" id="toc-cloud-our-data-2"></a>

The advantage of the Arduino MKR over UNO is its internet accessibility. Targeting at IoT application, Arduino MKR will make industries more intelligent and connective. In the automotive applications, MKR WiFi 1000 may not be the best board since WiFi signal is rare in outdoor environment, but I use my cell phone as a personal hotspot, so it's not a problem.

There are a lot other cloud platforms to store, view, and post process the data. You can choose whatever you like. I will to use [dweet.io](http://dweet.io/) and [freeboard.io](http://freeboard.io/) as an example. [Dweet.io](http://dweet.io/) provides API that you can send data to. [Freeboard.io](http://freeboard.io/) has handles to take the [dweet.io](http://dweet.io/) data and visualize them. There are several tutorials to set up [dweet.io](http://dweet.io/) and [freebboard.io](http://freebboard.io/), so I won't elaborate again. If you are interested, here are some examples, [example 1](https://www.instructables.com/id/HOME-MONITORING-USING-ARDUINO-AND-IOT/), [example 2](https://openhomeautomation.net/internet-of-things-dashboard).

The data push code is exhibited below as an illustration how to create dweet commands.

```
void httpRequest() {
 client.stop();
 // create data string to send to freeboard
 if (client.connect(server, 80)){
   Serial.println("Connected");
   String data = "POST /dweet/for/mkr1000?RPM="; 
   data.concat(vRPM); // upload engine RPM
   data.concat("&Speed=");
   data.concat(vSpeed);  // upload car speed
   data.concat("&Fuel=");
   data.concat(vFuel);  // upload fuel level
   data.concat("&Temp=");
   data.concat(vTemp);  // upload coolant temperature
   client.println(data);
   client.println("Host: https://www.dweet.io");
   client.println("Connection: close");  // end of connection
   client.println();
 }
 else {
   lcd.clear();
   lcd.setCursor(0,0);
   lcd.println("Connection failed");  
 }
}
```

On [freeboard.io](http://freeboard.io/), we need to create a new dashboard, and inside this dashboard, create a new datasource. Link this datasource to your [dweet.io](http://dweet.io/) thing that you defined in the code. In my case, it is mkr1000. The create a new Gauge widget that we will use to display the data. Give it a name, and link it to one of our variables. Below is a screenshot of my dashboard. It shows SPEED, RPM, FUEL LEVEL, and COOLANT TEMPERATURE.

![screenshot of my dashboard.](https://hackster.imgix.net/uploads/attachments/562266/freeboard_dashboar_vM1j7s7uqe.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)screenshot of my dashboard.

#### Conclusion <a href="#toc-conclusion-3" id="toc-conclusion-3"></a>

I tried the boards on my own car, and it works well. I am working on designing a PCB that includes all the functions in an integrated circuit. Hopefully, I will write more tutorials in the future. I may include a video demo as well. Sorry this time, I couldn't take video as well as driving my car. And you also want to be careful when debugging your code while driving on the street!

Arduino MKR WiFi board is good enough for this application. If I have more boards, I think I could try MKR GSM 1400 board. Feel free to use other IoT boards with this tutorial and tell me your feedback.

Working on the project is fun and educative. I enjoy the feeling of debugging a problem. It is also my pleasure to share what I know on the web. Thank you for reading. Let me know if you have any questions or comments.

### Schematics

#### IoT4Car

Connect Arduino MKR WiFi 1000, SparkFun OBD-II UART board, SparkFun Logic Level Shifter, and LCD 1602

### Code

#### IoT4Car\_code

C/C++This program will talk to vehicle using the OBDII-UART board, and display the results on the LCD, and upload to freeboard IoT platform

```
/*
* OBDII-UART-Serial version 9
* This program will talk to vehicle using the OBDII-UART board, 
* and display the results on the LCD, and upload to freeboard IoT platform
* 
* Author: zhaoshentech
* Updated: 2018-08-27
* 
* updates:
*   v3: modified the getResponse() function so that the buffer receives the correct response.
*       add the getRPM() to get the engine RPM from the vehicle.
*   v4: add the getSpeed() function to get the speed of the vehicle
*   v5: add the LCD module and display the speed and RPM on the LCD
*   v6: is the wifi version
*   v7: is the non-wifi, non-serial version. Remove serial initialization,
*       so that the board can work without a computer.
*   v8: is the non-wifi, non-serial version. Add fuel level and coolant temperature.
*       rearrange the display location.
*   v9: is the wifi, non-serial version. Upolad speed, RPM, fuel level and coolant temperture
* 
* LCD circuit connection:
* LCD RS pin to digitial pin 12
* LCD Enable pin to digital pin 11
* LCD D4 pin to digital pin 5
* LCD D5 pin to digital pin 4
* LCD D6 pin to digital pin 3 
* LCD D7 pin to digital pin 2
* LCD R/W pin to ground
* 10 K potentialmeter:
* ends to +5V and ground
* wiper to LCD VO pin (pin 3)
*/

////////////////////////////////////////////////////////
//
// WiFi related 
//
///////////////////////////////////////////////////////
#include<SPI.h>
#include<WiFi101.h>
char ssid[] = "YOUR WIFI SSID";  // wifi ID
char pass[] = "YOUR WIFI PSWD";   // wifi password
char server[] = "www.dweet.io";  // freeboard and dweet Settings
unsigned long lastConnectionTime = 0; // track the last connection time
const unsigned long postingInterval = 10L * 1000L; // post data every 10 seconds
WiFiClient client; //Initialize the wifi client
int status = WL_IDLE_STATUS; // the WiFi radio status


// include the LDC libaray
#include <LiquidCrystal.h>
const int rs = 12, en = 11, d4 =5, d5 =4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// This is a character buffer that will store the data from the serial port:
char rxData[20];
char rxIndex = 0;
char inChar = 0;
String message;

// Variables to hold the speed and the RPM data:
int vSpeed = 0;
int vRPM = 0;
int vFuel = 0;
int vTemp = 0;

void setup() {
  // Set up the LCD's number of columns and rows:
  lcd.begin(16,2);
  lcd.clear();

  // check the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    lcd.println("WiFi not ready");
    while(true);  
  }
  // attempt to connect to WiFi network:
  while (status != WL_CONNECTED) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.println("Connecting WiFi...");
    status = WiFi.begin(ssid, pass);
    // wait for 5 second for the connection:
    delay(5000);
  }
  lcd.setCursor(0, 1);
  lcd.println("Connected!");
  
  // Serial1 is the acutal port to talk to vehicle
  Serial1.begin(9600);
  resetBuffer();
}

void loop() {
  while ( status != WL_CONNECTED) {
    lcd.clear();
    lcd.setCursor(0,0);
    // Connect to WPA/WPA2 Wi-Fi network
    Serial.println("Connecting to Wifi");
    lcd.println("Connect WiFi...");
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection
    delay(5000);
  }
  getSpeed();
  getRPM();
  getFuel();
  getCoolTemp();
  if (millis() - lastConnectionTime > postingInterval) {
      httpRequest();
      lastConnectionTime = millis();
   }
}

// getRPM data sends the "010C" command to the Serial1 port
// and call the getResponse() to collect the data. Then it prints
// the RPM data on the Serial Monitor.

void getRPM(void){
  message = "010C";
  Serial1.println(message);
  delay(200);
  //clear the current line
  for (int i = 8; i < 16; ++i)
  {
    lcd.setCursor(i, 0);  // 0 row, i column
    lcd.write(' ');
  }
  lcd.setCursor(8,0); // first row second half in the LCD screen
  //wait reponse
  getResponse();
  // The RPM response divided by 4 gives the correct value.
  vRPM = ((strtol(&rxData[6],0,16)*256) + strtol(&rxData[9],0,16))/4;
  lcd.print(vRPM);
  lcd.print(" rpm");
}


void getSpeed(void){
  message = "010D";
  Serial1.println(message);
  delay(200);
  //clear the current line:
  for (int i = 0; i < 8; ++i)
  {
    lcd.setCursor(i, 0); // 0 row, i column
    lcd.write(' ');
  }
  lcd.setCursor(0,0);// first row first half in the LCD screen
  //wait for the response from the car
  getResponse();
  vSpeed = strtol(&rxData[6], 0, 16); // in the unit of km/h
  vSpeed = vSpeed * 0.621371; // in the unit of mph
  lcd.print(vSpeed);
  lcd.print(" mph");
}

void getFuel(void){
  message = "012F";
  Serial1.println(message);
  delay(200);
  // clear the current line:
  for (int i = 0; i < 8; i++){
    lcd.setCursor(i, 1); // 1st row, i column
    lcd.write(' ');  
  }
  lcd.setCursor(0, 1); // second row first half in the LCD screen  
  //wait for the response from the car
  getResponse();
  vFuel = strtol(&rxData[6], 0, 16); // in the scale of 255
  //vFuel = 244; // debug usage
  vFuel = 1.0* vFuel / 255 *100; // in the scale of 100
  lcd.print(vFuel);
  lcd.print(" %");
  //Serial.println(vFuel); // debug usage
}

void getCoolTemp(void){
  message = "0105";
  Serial1.println(message);
  delay(200);
  // clear the current line:
  for (int i = 8; i < 16; i++){
    lcd.setCursor(i, 1); // 1st row, i column
    lcd.write(' ');  
  }
  lcd.setCursor(8, 1); // second row second half in the LCD screen  
  //wait for the response from the car
  getResponse();
  vTemp = strtol(&rxData[6], 0, 16); // in the unit of C but offset by 40 degrees
  vTemp = vTemp - 40; // offset by 0
  lcd.print(vTemp);
  // print the degree C
  lcd.write(0xDF);
  lcd.print("C");
}

// The getResponse function collects incoming data from the UART into the rxData buffer
// and exits when the response is transferred. Once the carriage return string
// is detected, the rxData buffer is null terminated (so that we can treat it as a string)
// and the rxData index is reset to 0 so that the next string can be copied.


void getResponse(void){
  while(Serial1.available() > 0) {
      // Start by checking if we've received the end of message character ('\r').
      if(Serial1.peek() == '\r'){
        // reach the end of the message, clear the Serial buffer
        inChar = Serial1.read();
        rxData[rxIndex] = '\0';
        // Reset the buffer index so that the next character goes back at the beginning of the string
        rxIndex = 0;  
      }
      // If we didnt get the end of the message character, just add the new character to the string
      else{
        // Get the new character from the Serial port:
        inChar = Serial1.read();
        // add the new character to the string, and increase the index variable:
        rxData[rxIndex++] = inChar;
      }  
  }
}

void resetBuffer(void){
  for (int i = 0; i < 20; i++){
    rxData[i] = 0;  
  }
}

void httpRequest() {
  client.stop();
  // create data string to send to freeboard
  if (client.connect(server, 80)){
    Serial.println("Connected");
    String data = "POST /dweet/for/mkr1000?RPM="; 
    data.concat(vRPM); // upload engine RPM
    data.concat("&Speed=");
    data.concat(vSpeed);  // upload car speed
    data.concat("&Fuel=");
    data.concat(vFuel);  // upload fuel level
    data.concat("&Temp=");
    data.concat(vTemp);  // upload coolant temperature
    client.println(data);
    client.println("Host: https://www.dweet.io");
    client.println("Connection: close");  // end of connection
    client.println();
  }
  else {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.println("Connection failed");  
  }
}
```

<br>
