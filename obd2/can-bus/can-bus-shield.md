# CAN Bus Shield

## CAN-BUS Shield <a href="#firstheading" id="firstheading"></a>

[Jump to navigation](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#mw-head)[Jump to search](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#p-search)

### Contents

* [1Introduction](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Introduction)
* [2Features](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Features)
* [3Usage](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Usage)
  * [3.1Hardware Installation](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Hardware\_Installation)
  * [3.2Upload the program](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Upload\_the\_program)
* [4Reference](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Reference)
  * [4.11. Set the BaudRate](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#1.\_Set\_the\_BaudRate)
  * [4.22. Set Receive Mask and Filter](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#2.\_Set\_Receive\_Mask\_and\_Filter)
  * [4.33. Check Receive](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#3.\_Check\_Receive)
  * [4.44. Get CAN ID](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#4.\_Get\_CAN\_ID)
  * [4.55. Send Data](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#5.\_Send\_Data)
  * [4.66. Receive Data](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#6.\_Receive\_Data)
* [5Resources](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield#Resources)

### Introduction

CAN-BUS is a common industrial bus because of its long travel distance, medium communication speed and high reliability. It is widely used as the automotive diagnostic bus, and also commonly used on modern machine tools. This CAN-Bus shield gives the Arduino CAN-Bus capability, It uses the Microchip MCP2515 CAN controller with MCP2551 CAN transceiver, the CAN connection is via a standard 9-way sub-D for use with OBD-II cable, ideal for automotive CAN application. The shield also has a Micro SD card holder, which helps you store the diagnostic information in the SD card directly, making this shield ideal for data logging application.\


Model: [AS54887CAN](http://www.elecrow.com/canbus-shield-p-1133.html)\
[![CAN-BUS Shield1.jpg](https://www.elecrow.com/wiki/images/thumb/a/ac/CAN-BUS\_Shield1.jpg/400px-CAN-BUS\_Shield1.jpg)](https://www.elecrow.com/wiki/index.php?title=File:CAN-BUS\_Shield1.jpg)

### Features

* Arduino Mega and Leonardo compatible
* Implements CAN V2.0B at up to 1 Mb/s
* SPI Interface up to 10 MHz
* Standard (11 bit) and extended (29 bit) data and remote frames
* Two receive buffers with prioritized message storage
* Industrial standard 9 pin sub-D connector
* Two LED indicators
* SD card holder for information storage
* Dimensions(mm):74.3(L)x53.6(W)x23.5(H)

### Usage

#### Hardware Installation

Plug the CAN-BUS Shield onto the Arduino. And then connect the Crowduino to PC with USB cable.\
\


<figure><img src="https://www.elecrow.com/wiki/images/thumb/3/36/CAN-BUS_Shield_connect.jpg/400px-CAN-BUS_Shield_connect.jpg" alt=""><figcaption></figcaption></figure>

#### Upload the program

1\. Download the [CAN-BUS Source code file for Arduino 1.0](http://www.elecrow.com/wiki/index.php?title=File:CAN\_BUS\_Shield\_master.zip) and release it in the libraries file in the Arduino-1.0 program.: ..\arduino-1.0\libraries.

If the folder name include "-master", just remove it.

2\. Open the Arduino-1.0, and you will find 8 examples: receive\_check ,send and receive\_interrupt and so on. Here we'll use send and receive\_check, open it then you should get two programming windows now.

[![Open CAN BUS examples send.jpg](https://www.elecrow.com/wiki/images/thumb/3/37/Open\_CAN\_BUS\_examples\_send.jpg/400px-Open\_CAN\_BUS\_examples\_send.jpg)](https://www.elecrow.com/wiki/index.php?title=File:Open\_CAN\_BUS\_examples\_send.jpg)[![Open CAN BUS examples receive.jpg](https://www.elecrow.com/wiki/images/thumb/a/aa/Open\_CAN\_BUS\_examples\_receive.jpg/400px-Open\_CAN\_BUS\_examples\_receive.jpg)](https://www.elecrow.com/wiki/index.php?title=File:Open\_CAN\_BUS\_examples\_receive.jpg)\
2.1 Send data:\


```
// demo: CAN-BUS Shield, send data
#include <mcp_can.h>
#include <SPI.h>

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);

START_INIT:

    if(CAN_OK == CAN.begin(CAN_500KBPS))                   // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init ok!");
    }
    else
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println("Init CAN BUS Shield again");
        delay(100);
        goto START_INIT;
    }
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}
```

2.2 Receive data\


```
// demo: CAN-BUS Shield, receive data with check mode
// send data coming to fast, such as less than 10ms, you can use this way


#include <SPI.h>
#include "mcp_can.h"


// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);

START_INIT:

    if(CAN_OK == CAN.begin(CAN_500KBPS))                   // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init ok!");
    }
    else
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println("Init CAN BUS Shield again");
        delay(100);
        goto START_INIT;
    }
}


void loop()
{
    unsigned char len = 0;
    unsigned char buf[8];

    if(CAN_MSGAVAIL == CAN.checkReceive())            // check if data coming
    {
        CAN.readMsgBuf(&len, buf);    // read data,  len: data length, buf: data buf

        unsigned char canId = CAN.getCanId();
        
        Serial.println("-----------------------------");
        Serial.println("get data from ID: ");
        Serial.println(canId);

        for(int i = 0; i<len; i++)    // print the data
        {
            Serial.print(buf[i]);
            Serial.print("\t");
        }
        Serial.println();
    }
}
```

3\. Upload two examples to two boards separately. Choose the board via the path: Tools -->Serial Port-->COMX. Note down which board is assigned as a "send" node and which board is assigned as a "receive" node.

4\. Open the "Serial Monitor" on the "receive" COM, you will get message sent from the "send" node. Here we have the preset message "0 1 2 3 4 5 6 7" showing in the following picture.

\


<figure><img src="https://www.elecrow.com/wiki/images/thumb/8/82/CAN_BUS_message1.jpg/400px-CAN_BUS_message1.jpg" alt=""><figcaption></figcaption></figure>

### Reference

#### 1. Set the BaudRate

This function is used to initialize the baudrate of the CAN Bus system.

The available baudrates are listed as follws:

CAN\_5KBPS, CAN\_10KBPS, CAN\_20KBPS, CAN\_40KBPS, CAN\_50KBPS, CAN\_80KBPS, CAN\_100KBPS, CAN\_125KBPS, CAN\_200KBPS, CAN\_250KBPS, CAN\_500KBPS and CAN\_1000KBPS

#### 2. Set Receive Mask and Filter

There are 2 receive mask registers and 5 filter registers on the controller chip that guarantee you get data from the target device. They are useful especially in a large network consisting of numerous nodes.

We provide two functions for you to utilize these mask and filter registers. They are:

_init\_Mask(unsigned char num, unsigned char ext, unsigned char ulData);_ & _init\_Filt(unsigned char num, unsigned char ext, unsigned char ulData);_

_"num"_ represents which register to use. You can fill 0 or 1 for mask and 0 to 5 for filter.

_"ext"_ represents the status of the frame. 0 means it's a mask or filter for a standard frame. 1 means it's for a extended frame.

_"ulData"_ represents the content of the mask of filter.

#### 3. Check Receive

The MCP2515 can operate in either a polled mode, where the software checks for a received frame, or using additional pins to signal that a frame has been received or transmit completed. Use the following function to poll for received frames.

_INT8U MCP\_CAN::checkReceive(void);_

The function will return 1 if a frame arrives, and 0 if nothing arrives.

#### 4. Get CAN ID

When some data arrive, you can use the following function to get the CAN ID of the "send" node.

_INT32U MCP\_CAN::getCanId(void)_

#### 5. Send Data

_CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data\_buf);_

is a function to send data onto the bus. In which:

_"id"_ represents where the data come from.

_"ext"_ represents the status of the frame. '0' means standard frame. '1' means extended frame.

_"len"_ represents the length of this frame.

_"data\_buf"_ is the content of this message.

For example, In the 'send' example, we have:

```
  
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};

CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

#### 6. Receive Data

The following function is used to receive data on the 'receive' node:

_CAN.readMsgBuf(unsigned char len, unsigned char buf);_

In conditions that masks and filters have been set. This function can only get frames that meet the requirements of masks and filters.

_"len"_ represents the data length.

_"buf"_ is where you store the data.\


### Resources

* [CAN-BUS Source code file for Arduino 1.0](http://www.elecrow.com/wiki/index.php?title=File:CAN\_BUS\_Shield\_master.zip)
* [MCP2551 datasheet](http://www.elecrow.com/wiki/index.php?title=File:Mcp2551en.pdf)
* [MCP2515 datasheet](http://www.elecrow.com/wiki/index.php?title=File:MCP2515.pdf)

### Navigation menu

* [Log in](https://www.elecrow.com/wiki/index.php?title=Special:UserLogin\&returnto=CAN-BUS+Shield)
* [Page](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield)
* [Discussion](https://www.elecrow.com/wiki/index.php?title=Talk:CAN-BUS\_Shield\&action=edit\&redlink=1)

#### Search

* [Elecrow Bazaar](https://www.elecrow.com/)

#### Manu <a href="#p-manu-label" id="p-manu-label"></a>

* [Main page](https://www.elecrow.com/wiki/index.php?title=Main\_Page)
* [recent changes](https://www.elecrow.com/wiki/index.php?title=Special:RecentChanges)
* [Random page](https://www.elecrow.com/wiki/index.php?title=Special:Random)
* [Help about MediaWiki](https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Contents)

#### Tools <a href="#p-tb-label" id="p-tb-label"></a>

* [What links here](https://www.elecrow.com/wiki/index.php?title=Special:WhatLinksHere/CAN-BUS\_Shield)
* [Related changes](https://www.elecrow.com/wiki/index.php?title=Special:RecentChangesLinked/CAN-BUS\_Shield)
* [Special pages](https://www.elecrow.com/wiki/index.php?title=Special:SpecialPages)
* [Printable version](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield\&printable=yes)
* [Permanent link](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield\&oldid=63)
* [Page information](https://www.elecrow.com/wiki/index.php?title=CAN-BUS\_Shield\&action=info)
* \






{% file src="../../.gitbook/assets/MCP2515 (1).pdf" %}

{% file src="../../.gitbook/assets/Mcp2551en (1).pdf" %}

{% file src="../../.gitbook/assets/CAN_BUS_Shield_master (1).zip" %}



{% file src="../../.gitbook/assets/Mcp2551en (1) (1).pdf" %}
