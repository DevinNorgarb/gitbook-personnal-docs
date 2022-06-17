# How to Hack and Upgrade Your Car, Using CAN Bus

### Introduction: How to Hack and Upgrade Your Car, Using CAN Bus

This document is aimed at those unfamiliar with CAN bus or the reverse engineering process, it will cover some very basic and advanced concepts.

It is assumed that the reader has moderate programming knowledge and basic electronics knowledge, however, links to resources will be provided in each section for those that need additional information.

#### In this tutorial you will cover:

* What is CAN bus?
* The basics of an Arduino microcontroller.
* Basic electronics knowledge.
* CAN bus electronics.
* How to retrieve data from a vehicle’s CAN bus network.
* How to interpret data from a CAN bus network.
* How to build a software or hardware interface to interpret the data.
* Required Electronics

To follow this tutorials content properly, you will need several key items which are listed below. Links to online sellers are included in the equipment sources section.

#### You will need:

* A Spark fun CAN bus shield
* A micro SD card.
* A DB9 to OBD connector, for connecting to the diagnostics port of the vehicle.
* Arduino UNO
* Arduino Pin headers for soldering to the CAN shield
* Arduino Male to Male, Male to Female and Female to Female jumper wires.
* Soldering Iron and solder.

Please note that you do not need the exact hardware listed, you can still use this tutorial should you use alternative hardware such as a Seeduino CAN bus shield, however, the code provided will only work with the Sparkfun shield, but can be modified for other hardware.

### Step 1: ​Required Knowledge

#### Required Knowledge

In order to follow this tutorial, you need: Some programming experience with C++, Java or similar programming languages, if you are not, there will be some help provided by the tutorial, but please refer to the electronics and programming resources section. Some electronics knowledge, you need to understand basic electronics concepts such as what voltage, current and a circuit are. If you do not know, there will some help provided by the tutorial, but please refer to electronics and programming resources section.

#### Required software: Arduino IDE

To work with Arduino and the Sparkfun CAN bus shield you will need to download some software, the most important piece of software is the Arduino programming interface, referred to as the Arduino IDE which can be downloaded from the link in the software sources section.

#### Required software: Serial Plot

To efficiently process and interpret the data received from the CAN bus network, it is recommended you install SerialPlot. It is a software tool that allows you to map the values outputted from the CAN bus network to several live graphs; this will make spotting data patterns and changes in behaviour much easier than with a raw data feed.

### Step 2: Safety and Legality

#### Safety and Legality

Please note, the systems you are working on are electrical, as such, there are precautions you should always take.

**When working with electrical systems that may have high voltage such as elevators.**

* Wear nonconductive or electrically insulating gloves
* Remove all jewellery
* Wear long sleeve overalls
* Wear any other appropriate Personal Protective Equipment (PPE)

**When working with electrically sensitive systems that may be damaged by static discharge take appropriate steps to protect yourself and others.**

* Wear a grounding wrist strap that is connected to the chassis of the device you are working on.
* Wear nonconductive or electrically insulating gloves.
* Avoid wearing clothing that builds a static charge

**When working with systems that cause injure yourself or others, practice safe behaviours.**

* Do not test systems in areas that put anyone in danger
* Do not test systems that put yourself in danger without appropriate precautions.
* Do not do anything to a system without research or investigation into the possible ramifications.
* Do not leave a system unattended or accessible whilst in a state where it may cause injury.

#### Legal requirements

Different countries have different regulations, systems that carry the potential of putting yourself or others in harm's way often have legal requirements or restrictions as to what can be done to them or requirements they must meet. Should you decide to work on an existing system, please make sure to research the legality of what you are doing and the requirements for that work.

In this project a vehicles dashboard cluster is produced, there are a number of legal requirements and restrictions for that device such as the cluster must have the ability to display specific types of information at all times, the cluster must display information within specific tolerances, and the cluster must display specific indicators at specific times.

#### Disclaimer

Every effort is made to ensure that the information provided is accurate, but no legal responsibility is accepted for any errors, omissions, misleading statements, damages or injuries that may occur whilst utilizing this document.

### Step 3: ​What Is CAN Bus?

#### What is CAN bus?

CAN-bus (Controller Area Network-bus) is the broad name for a set of standards which define the way for separate but connected devices to communicate with each other. Its primary uses are in the industrial, automotive and aviation sectors due to its extensive error checking, flexible implementation and built-in redundancy.

Most large equipment you see day to day uses CAN-bus in one way or another, elevators and airliners almost always use CAN-bus due to a number of factors including how long the communication wires can be without data corruption. Cars, elevators, aircraft, robotics and other systems all use CAN-bus because of its ability to operate with one pair of wires but hundreds of separate modules reliably (Avionics, 2018).

As with many other communication protocols, CAN does not define precisely how the data should be encoded into the CAN bus data frames, only its layout or format.

As such, the data being converted to binary could be done in any way the user likes, 001 or 010 or 100 or 111 could all mean the letter ‘A’, but each is a different way of representing that data, they are all proprietary implementations. The issue with proprietary implementations is the inability to perform maintenance without documentation which companies tend not to release.

#### Vehicle Network Topology

The topology of a network refers to how multiple devices are connected. A bus topology is a type of network where all devices are connected to one communication line. Please refer to the electronics and programming resources page if you are unfamiliar with network topologies.

Early on in the adoption of CAN bus and the OBD diagnostics system, manufacturers implemented the CAN system because of its benefits, but used simple topologies, such as a bus topology where every device on the network was connected to a single bus, this meant all ECU’s were directly accessible on the diagnostics port and could communicate with each other. As CAN bus became more popular, other methods of implementation occurred. The method most common in vehicles today, including the vehicle being used for this project is a series of electrically separate networks that run between a small number of VCU’s acting as repeaters only for necessary information. The best description of this topology is a hybrid layout of a star, tree and bus topology (Walz, 2018).

On the vehicle being used for this project, the main VCU called the BSI (Built-in Systems Interface) branches out to other VCUs in the vehicle from the centre of its star network. The other modules on the network may branch to separate modules or may have several modules all connected on a single bus from it

### Step 4: Tapping Into a CAN Bus Network

#### How to access your system

In order to follow along with the project, you will need to have a device with CAN bus or other protocols supported by the Sparkfun shield. You also need to find documentation on your system such as wiring diagrams; if you cannot locate these resources, then you may have to make your own wiring diagram however this will require specific electronics knowledge.

When working with CAN bus, you will need the ignition in the vehicle to be on so that the systems are communicating; the engine does not need to be running, there just needs to be power to devices such as the stereo and dashboard cluster.

#### Locate a wiring diagram

The image for this step shows a partial wiring diagram for a Peugeot 407.

With most vehicles, you can purchase a Haynes manual or locate a wiring diagram as they are very necessary when doing any kind of electronics work with a vehicle. The diagrams will not only tell you where CAN bus lines are in the vehicle but may also tell you important things about the connection such as how the devices are connected, which pins of the plug those lines go to etc.

If you are working on a non-automotive system such as an elevator or aircraft, you will likely find the wiring diagram glued to the back of the panel covering the wires or in a pouch of some kind for maintenance.

Unfortunately, locating these diagrams is a process specific to your vehicle or system, however, recommended avenues to locate these diagrams include:

* Haynes Manual
* Maintenance manual for the equipment
* Diagrams glued to internal panels
* Search engine searches
* Ask a local garage
* Ask an authorized dealer or garage

If you are unable to locate a wiring diagram from any of these sources, then there are alternative options.

#### Documenting the process

Because of the complexity of this project, it is highly recommended that you document everything you have done for future reference, you will need to take notes on wire colours, voltages, data patterns and you may need to make wiring diagrams.

These documents will allow you to work on your project whilst away from the system you are tapping into; it will also make debugging problems with your methods or implementation easier for you and for others that encounter your work.

### Step 5: Part 1: Accessing the CAN Bus Lines

#### 1.1 Diagnostics port

In the Automotive industry, the typical way to access CAN bus in a vehicle is the ODB2 port which is a standardized connector that, as mandated by law, has been a requirement in all consumer vehicles since 2006 and in most since 1999, in Europe and the US. Vehicles are required to use a standardized communication system such as CAN bus or Van bus (OBD Solutions, 2017).

OBD2 ports typically look like the one pictured in this step. They all have that distinctive shape. By European and US law, the port has to be accessible from the driver's seat without specialized tools. However, it may be hidden behind a removable panel, in a closed compartment or in a hard to reach location such as under the steering column.

#### 1.2 Tapping into CAN bus wires.

Depending on what your intentions are you may not be able to use the diagnostics port to access the CAN network in your vehicle. In this project, a custom dashboard cluster is going to be built to use the data created during the reverse engineering process, but the diagnostics port does not output all the information needed for a dashboard cluster nor is it in the location of the cluster. To tap into the wires, you may have to pierce the plastic covers, remember to tape the holes over after you have finished with the wires.

#### 1.3 Make your own wiring diagram or notes.

The electronics and programming section contains a link to an in-depth tutorial on locating CAN bus lines. However some basic principles will be discussed here, in order to make your own diagram, you could ask someone skilled or proficient in electronics design to assist you, or you can try it yourself.

You will need a Multimeter and an oscilloscope; you can purchase very cheap versions of these products from the links in the equipment sources page.

The recommended oscilloscope is the DSO138 available from many sources online for about £20/$25; any multimeter will be sufficient.

CAN bus operates at 0 to 5v. When data is not being sent the two wires should be at about 2v relative to the vehicles ground or 0v relative to each other. When data is sent down the CAN wires, a pulse is represented by a change of 2v. In order to locate the CAN lines, you will need to connect the oscilloscope to the CAN high and CAN low wires. To locate those wires, you can find clues as to which wires they may be by looking at the wire colouring.

Vehicles tend to use consistent wire colours, as such if you look at the rear of the OBD2 port for the CAN bus lines going to it, you will see some of the wire colours the vehicle uses to represent different wires, make a note of what each colour wire goes to. Specifically noting the CAN line colours, the wires for different CAN networks can be different colours, so this is not a guaranteed way to find them however if you see wires that are undocumented colours, they could be the CAN lines.

#### 1.4 Practice

Test your equipment works and refine your testing methods by connecting the multimeter and Oscilloscope to the OBD2 port CAN bus pins, you should be able to see the signal pulses on pins 6 and 14, if you connect the multimeter with the 5v DC or closest setting, you should see a fluctuating voltage of a maximum 5v and voltage difference of about 2v when you connect between the vehicles ground pins 4 or 5 and CAN bus pins 6 or 14, if you cannot detect CAN bus data on those pins, you vehicle may be too old or uses a different protocol.

Observe the colours of the wires connected to the rear of the diagnostics port; you will likely see:

· Red wires which connect to +12v pins such as pin 16 of the OBD port.

· Black wires which connect to ground pins such as 4 and 5 of the OBD port

· The other wires can be whatever colour the manufacturer chooses as they aren’t standardized.

#### 1.5 Manually locating CAN bus lines.

At the point where you are going to access the CAN bus lines, if it a stereo, there will likely be several wires going to speakers, microphones and other devices. These other wires can make determining the CAN bus lines difficult. However, there is almost always a wiring diagram for the stereo in a vehicle, so go and check online first! Otherwise look at the wire colour from the target lines, to see if they match the CAN lines colour from the OBD2 connector, if the colours match, it is likely that they are CAN lines, if they do not, check if they match the other wire colours from your notes, you should be able to rule out what wires are not CAN bus though colour comparisons and may be left with a few unknown wires, document everything observed into your diagram or notes.

Alternatively if you are tapping into a removable module such as the dashboard cluster, if possible, observe the circuit board the wires are connected to, sometimes you can figure out which pins are CAN bus by observing two electrical traces from the plug that go directly into a large chip without branching out to other areas of the board.

For all of the different ways to try locating CAN bus lines, try repeating the process from 1.4 Practice, on the wires you are targeting. If you are unable to figure out which lines are CAN bus, try probing the matching pairs of wires with the oscilloscope to see pulses of data like those seen when practising, if you are still unable to locate the CAN lines, there may not be CAN lines going to that specific device.

#### 1.6 Cannot find CAN bus lines

If you cannot locate the CAN bus lines, then it is likely your vehicle does not have any in the location you are trying to find them, in this case, try to find the CAN bus lines to a module more likely to have CAN bus such as the stereo or LCD panel (if your vehicle has one) and note the wire colors, you may be able to achieve your desired goal using the CAN bus lines you have found by using a wireless adaptor or extension wires to the place you need them.

#### 1.7 Successfully found CAN bus lines

If you have successfully found CAN bus lines, then you should do the following:

* Make a note of the other wires near the CAN lines or connected to the same device the CAN lines are connected to.
* Read the voltages from the wires with the multimeter by connecting one probe to ground and the other to each of the wires, noting this information down.
* Draw a clean diagram of the circuit you are going to interface with.

#### 1.8 Next steps

Now that you have successfully accessed the CAN bus lines of your systems you need to think about what types of data you expect to retrieve from the network. For instance, if you are connected to the dashboard clusters, you will be expecting information such as:

* ABS ( Anti-Lock Braking System)
* ESP ( Electronic Stability Control )
* SRS (Supplement restrain system AKA: Airbags)
* Seat belt not in use
* Tire pressure warning
* Indicators (independent left and right or joined light)
* All external lighting configurations ( Beam, dipped, fog, side lights, hazards etc.)
* Speed
* Engine Faults.
* Tachometer ( Distance counter )

Note the expected information down in a grid like the one in the pictures for this step

At the moment you will only be populating the information and ID columns.

### Step 6: Part 2: Reading Data From the CAN Bus

#### Reading data from the CAN bus

Now that you have found the CAN bus lines and have noted down the expected data, you are going to connect to the CAN network with the use of the Arduino and Sparkfun shield.

#### 2.1 Connecting the Arduino to the Shield

To use the Sparkfun CAN bus shield, you will need to connect the shield to the Arduino. When you ordered your CAN bus shield, it likely did not come with the pins pre-soldered which means you will have to solder them on yourself.

Please refer to the electronics and programming resources at the bottom on this document for help with soldering and setting up the Sparkfun shield. Once soldered connect the Sparkfun board to the Arduino as you would with any Arduino shield

Take note that there are two wires coming off the top of the CAN bus shield, these wires are connected to the CAN high and low pins of the shield and on the other end, the CAN high and low pins of a cars dashboard cluster.

This setup allows the Arduino to communicate with the cluster; commands can be sent to control the cluster and received to detect replies from the cluster.

#### 2.2 Connecting to the CAN bus

CAN bus has different modes for communication; it also has different speeds which are call baud rates. To successfully connect to the CAN system you will need to determine the baud rate. You can use an oscilloscope and count the time between pulses to determine the baud rate of the CAN bus network, depending on your oscilloscope, standard baud rates are 125 kbit/s, 250 kbit/s, 500 kbit/s and 1 Mbit/s. Please refer to the electronics and programming resources if you need help with this process. Alternatively, you can experiment to find the correct baud rate.

#### 2.3 Physically connecting the Arduino to the vehicles CAN bus.

As shown mentioned in the previous section, you can connect the Arduino to the CAN bus lines via the pins on the top of the Sparkfun shield. If you choose to connect to the CAN bus in this manner, take care to connect the lines the correct way around, damage will not occur if you connect incorrectly, the shield will simply not receive any data.

The alternative method for connecting the shield to the vehicle is to use the DB9 to OBD2 adaptor cable which plugs into the large serial port on the Sparkfun shield and the diagnostics port on the vehicle, it is recommended that you follow this tutorial using the diagnostic port first as you reduce the risk of harming the vehicle.

### Step 7: Part 3: Retrieving Data From the Network

#### Retrieving data from the network

DO NOT CONNECT TO THE CAN BUS BEFORE READING SECTION 3.1 Once you have connected, you need to set the baud rate in software. Section 2.2 provides a way to determine the baud rate of the CAN bus network you are connecting to; however, if you do not have an oscilloscope or cannot figure out how to use it, there is an alternative method.

Connect the Arduino to the computer and upload the code provided in the demonstration code entitles “Demo 1” at the end of this document. If you get errors such as “No such file or directory” when trying to upload the code, this means you have not installed the library for the Sparkfun board correctly, If you get “An error occurred while uploading the sketch” this means the Arduino is not connected or the software has not been set up correctly. Other errors likely mean you have incorrectly copied the code.

With the code uploaded to the Arduino successfully, you will have it configured to connect to a CAN bus network operating at 500kbps as this is what the demo code is set to which the line “if(Canbus.init(CANSPEED\_500)){ “. You can change the configured speed by modifying the value of 500 to a different value, e.g: Canbus.init(CANSPEED\_125) for 125kbps.

#### 3.1 Guessing the baud rate.

Depending on the network you are connecting to, the baud rate may have different speeds, the diagnostics connector in a vehicle is generally 500kbps or 1mbps due to the amount of data it is outputting. However, other devices such as the stereo may only be 125kbps because it only outputs a small amount of data. For the vehicle used in the project ( A Peugeot 407 ), the diagnostics port runs as 500kbps whereas the cluster runs at 125kbps.

Before you start guessing your baud rate, be ready to unplug the CAN bus lines very quickly and make sure the engine is not running, if you connect to a CAN bus network at the wrong baud rate, you can cause glitching to occur which may make the vehicle's systems misbehave.

With the Arduino connected to the computer and serial monitor open, you should see the repeating message: “No data”, this means the Arduino is connected to the computer correctly, and data is coming in, at this point connect to the CAN bus network, you should instantly see data coming in, if you do not, but nothing else happens such as a check engine light, check your connection. • If glitching does not occur but you do not receive any data, and you have connected via the pins on the shield, you may have the CAN bus lines connected the wrong way around or to the wrong wires. • If no glitching occurs and you have no data, check that you did not accidentally disconnect the Arduino from the computer by seeing if the no data message is still coming in or by closing the serial monitor window and opening it again. If you have no success and are connected via the CAN H and L pins rather than the diagnostics port, please try the process on the diagnostics port to determine if the hardware setup is at fault.

#### 3.2 Requesting diagnostic CAN data

If you are following these instructions whilst connected to the diagnostics port of the vehicle, you may be able to request diagnostic data from the diagnostic CAN network fi your vehicle is using the same CAN bus standard as a Peugeot 407.

**Read part 4 then if you are unfamiliar with CAN bus frames.**

When making a diagnostic request for data, the query consists of 4 variable bytes.\
ID, the first byte is ID which is always 2015 ( A data request ).

* Ch1, the second is the query length (Always 2 bytes for SAE Standard)
* Ch2, the third byte is the mode (Wikipedia, 2017).
* Ch3, the fourth is the data requested, these are called Parameter ID’s (PIDS)\[1]
* Ch4 – ch8 are unused in a request.

You send the following frame to get back diagnostics data:

The PID for throttle position is 17, as such we send the following:\
< Request 2015, query length 2, Mode 1 Live data, PID 17,0,0,0,0,0 >\
The reply is: < requested 17, Throttle = 0 to 255, 0,0,0,0> or <2024, 3,65,17, 0,0,0,0,0>

The unused last five channels may or may not all be used to represent the requested PID depending on its precision requirements.

Most are of a range to be adequately represented when divided into values between 0 and 255. However, some may require more granularity such as RPM.In order to send data into the network, you will need to use the code from the demonstration code entitled “Demo 2”, you will need to changes the values in the bottom of the code for the ID which looks like this: “message.id = 0;” to the Data request ID of 2015. You will also need to change the code for each channel from this: message.data\[0] = 0; to the respective value as explained above.

* message.id = 2015; //The ID for the frame you are sending
* message.data\[0] = 2; // place your custom value for ch1 here
* message.data\[1] = 1; // place your custom value for ch2 here
* message.data\[2] = 17; // place your custom value for ch3 here
* message.data\[3] = 0; // place your custom value for ch4 here
* message.data\[4] = 0; // place your custom value for ch5 here
* message.data\[5] = 0; // place your custom value for ch6 here
* message.data\[6] = 0; // place your custom value for ch7 here
* message.data\[7] = 0; // place your custom value for ch8 here

which will result in the following being sent to the CAN network: < 2015, 2, 1, 17,0,0,0,0,0 >

\[1] [https://en.wikipedia.org/wiki/OBD-II\_PIDs](https://en.wikipedia.org/wiki/OBD-II\_PIDs)

### Step 8: Part 4: What Is a CAN Bus Data Frame

#### What is a CAN bus data frame

Every manufacturer uses their own encoding method for packaging data into a CAN bus communication frames. This is a similar concept to basic encryption as the goal is not compression only transformation into the format required for the form of communication.

A CAN bus frame is complex, there are multiple types, but the most common type of frame (A base frame) consists of 11 identifier subframes, only two of which are relevant for most users, these are subframes two and seven.

Subframe two is up to 11 bits in size; it is the ID of the frame. Subframe seven is the data field; it stores data relevant to the ID in eight comma-separated, one-byte values (Vector.com, 2018).

Please note that different CAN bus networks in the same vehicle may use the same ID’s to refer to different data, do not presume that because the networks are within the same vehicle, they all use the same format.

#### 4.1 Diagnostic Port, Raw CAN Data

the smallest image Is the layout of useful data in a CAN bus message; it is called a “frame”. The layout you see is the format that the Arduino is outputting with the demo code provided in the demonstration code entitled “Demo 1”.

Unlike Diagnostic data frames which have a defined layout that is well documented and consistent, raw data frames have only the basic CAN frame layout, as shown above, channels one though to eight can represent anything and data can use multiple or single channels with a range of 0 to 255 to represent their values, often the layout is manufacturer or vehicle specific.

The ID frame represents a specific set of data and will always represent the same values assigned to it. For instance, the frame with ID 520 on the diagnostics port of a Peugeot 407 always represents the following data:\
< 520, RPM, Voltage, Turbo pressure, Brake Light, 0, 0, 0, 0 >

ID 520 will always represent those four pieces of information on the diagnostic port, but the data itself may change values. Although eight bytes are used to represent the data of the frame, only the first four channels of the frame are actually In use potentially wasting 4 bytes of bandwidth. The reasoning behind this is manufacturer specific; it is unknown why they chose to represent these four values only and leave other channels empty.

#### 4.2 Binary and Bitwise Operations

In order to interpret the data in each channel of the CAN frames, the information would need to be interpreted using bitwise operations.

The vehicle encodes the status of systems using a form of binary encoding. Each channel can be a value of 0 to 255 with 0 being nothing activated and 255 being everything activated. If you deconstruct the value into binary, you get 00000000 for 0 and 11111111 for 255. Each digit which can only be 1 or 0 represents a different state for a system, if we assume the number representing 32 is the left indicator and the number representing 64 is the right indicator, we know if the value of the channel is 96 that both indicators must be activated, or if the value is 32 only the left indicator is activated.

### Step 9: Part 5: Reverse Engineering CAN Information.

#### Reverse engineering CAN information.

Now that you understand how a CAN bus frame works, you need to be able to link a data frame to the data it represents.

#### 5.1 Analysis method: Serial Monitor

For retrieving the raw data from CAN , there are a number of methods and tools to assist in the process. The initial method for interpreting what each frame on the network represents is to do the following steps:

1. log a few seconds of all raw data coming through the network and save this in a document.
2. One by one pick a frame from the list and change the code to filter all but that frame.
3. Trigger events in the vehicle and note changes.
4. Remove that frame from the list
5. Repeat from step 2.

This is a long process but will allow you to easily correlate the data on a CAN network to the frame you are monitoring. In order to set a filter in the Arduino code to only show one frame though serial monitor, change the value -1 to the ID you are working on and != to ==, for the line “if(message.id != -1) {“ in the code.

e.g: “if(message.id != -1) {“ to “if(message.id == 520) {“

#### 5.2 Alternative analysis method: Serial Plot

SerialPlot was the next tool for use in reverse engineering and interpreting the data.

It can produce a live graph of each channel on the same graph or on separate smaller graphs.The tool allowed data to be exported or viewed live. SerialPlot allows trends and behaviours to be viewed easily and relative changes in data can be spotted and interpreted. one of the included images is a sample of frame 1294 forms the Peugeot 407; the sample explains what each channel of that frame does for channels that have changing data.

#### 5.3 Alternative Analysis Method: SuperSniffer

Whilst working on the raw information , Serial Monitor and SerialPlot can be a bottleneck for locating useful CAN frames as each frame has to be picked one by one from the listing due to it not being supported. This is where another tool became very useful.

Once you have the process of retrieving data and processing it using the aforementioned processes, you may wish to try using SuperSniffer. The supplied code for reading messages on the CAN bus network is already configured to work with SuperSniffer.

SuperSniffer is a software tool built specifically for analysis of CAN bus.

It requires data to be fed into it in a specific format which was an easy task to complete as the data was already being outputted from the Arduino in a CSV format, the only change necessary was the addition of chevron brackets at the start and finish of the frame. SuperSniffer operates in a similar manner to Wireshark; it displays a live feed of data with a number of coulombs which give statistics about the data, the important coulombs being the CAN frame, message count, change count and ASCII.

The CAN frame contains the relevant CAN data, the message counter, counts how many times the same frame has been refreshed, the change count counts how many times the same frame has been changed, and the ASCII Coulombe converts the frame to ASCII which allows one to detect if the frame contains text visually.

The software also features the ability to auto-hide frames that do not change for a specified amount of time and reveal them back into view should they change.

To install SuperSniffer refer to the software sources section of the document.

#### 5.4 Methods for removable hardware

If the network you are intercepting data from is connected to a removable module, the approach to interpreting the data can be drastically different as recorded data can be played into the hardware or custom commands could be injected without risk of damaging the vehicle. The demo code entitled “Demo 3” will allow you to send custom messages using joystick of the Sparkfun shield to the change the values live.

#### 5.4.1 Record And Playback

Instead of targeting frames one by one, activating systems in the vehicle and observing each frame, a new approach can be taken whereby the communications between the vehicle and module are recorded whilst every conceivable system relevant to the module is activated, then, because the module in the vehicle is removable, the data can be played back into the module whilst it is powered on a desk rather than in the vehicle and the behaviors observed.

#### 5.4.2 Brute force injection

Coupled with the record and playback methods, brute force data injection can also be used. The method of feeding in frames one by one starting at ID 0 and fluctuating each channel from 0 to 255 allows for the documenting of behaviours the module supports but the vehicle may not and behaviours that may not have been possible to activate manually such as engine or airbag faults.

#### 5.4.3 Safety

The aforementioned new approaches are not safe on the diagnostics port or on any network in the vehicle as they could cause damage to safety-critical devices, activated dangerous behaviours such as airbags or engine start or damage difficult/expensive to replace components. Whereas with a module being removable, It may be cheap to obtain, easy to access and replace and will not cause immediate danger if damaged or operated out of designed parameters.

#### 5.5 testing your interpreted data.

Now that you have produced some data from interpreting CAN bus frames, it is time to test if your interpretations are correct by producing code with conditional statements that detect if the expected values occur.

When producing a conditional statement for detecting the state of indicators, we need a way to determine if the channel contains the value 32. A number of solutions are possible such as converting the decimal value into binary and parsing the string of 1s and 0s. However, a simple solution is to use an operator built into C++ called ‘bitwise AND’, which is represented by the ampersand symbol &.

Take the bitwise operator and place it between a decimal value and the test value, if the result of the operation is the test value, then you know the decimal value contains the test value. An example of this is: if((input & 64) == 64){ //right indicator activated } (Arduino.cc, 2018).

The demonstration code entitled “Demo 4” provides the code you need to test your interpretations. It is currently configured to check channel 4 for the value 128 of the frame with ID 54.

#### 5.6 Interpreting Cluster Communications in a Peugeot 407

Whilst testing the cluster in the vehicle and during playback of recorded data, it was a simple process to identify which frames represented RPM, Speed and several other indicators, however, some frames proved to be a much bigger challenge to locate to obtain the desired information. These included the oil temperature, fuel level, coolant temperature and several images displayed on the clusters display. This is because the data changes are slow or change rarely.

During the process of data injection to try find the missing frames, it was observed that even when frames known to move the dials were fed in, nothing happened.

The reason behind this was difficult to find and also happened to be the solution to the previously mentioned problem of slow or rarely changing data.

In order to find the reason behind the behaviour, the recorded data had frames removed one by one whilst being played into the cluster; the intention was only to have the frames specific to moving the RPM and speed dials.

During the process, it was discovered that In order to move the dials you need to feed an enable frame with ID 246 and specific channel values into the cluster every few seconds or the dials will lock back in position zero. You can then send the frames for speed, RPM and fuel level to have the dials move.

Incidentally, it was observed that the frame that enabled the dials also happens to contain the channel for oil temperature, engines status, the mileage counter and the indicator lights thus solving the missing values problem.

### Step 10: Part 6: Building an Interface

#### Building an Interface

Now that the reverse engineering part of the project is understood and documentation on the vehicle's network is produced, it is time to build an interface to use this data.

#### 6.1 Software interface

The images with a slider shows a simple Java program. This program works in conjunction with an Arduino to display a slider on the screen which is controlled by a dial connected to the Arduino. Building a graphical interface, depending on the method chosen, is likely to be one of the most difficult but rewarding methods for displaying the interpreted information. Almost complete freedom is afforded in the design, and the result is easy to duplicate.

The problem with this type of interface is its limitations, should you wish to build an interface to be fixed in a vehicle, you would need a computer such as a Raspberry Pi to drive the display and run the software interface, this means the user would have to wait for boot up and security risks may need to be factored in if the device is running critical safety systems.

To try the Java example program, refer to the demo code entitled “Demo 5”

#### 6.2 Hardware Interface

There are several avenues for building an interface to display information retrieved from the CAN network; some are simple and easy to implement such as using LEDs or 7 segment displays, others are far more complex using embedded computers, as mentioned in the previous section. The solution used as an example in this tutorial is a compromise between the simple and complex options discussed.

An Arduino which is connected to the CAN bus will retrieve data from the network.

The data will be processed using logical operations as discussed in section 5.5; the program will interpret the frames and the data they contain; the relevant information will then be sent to displays connected to the Arduino.

#### 6.3 Display Hardware

Most displays that exist for the Arduino UNO are expensive in large display sizes, processor intensive; requiring the Arduino to draw the display or pin hogs; using up most IO on the Arduino.

The Nextion display is a “Smart” display; it contains its own processor, Inputs and Outputs, memory and SD card interface, It can run independently or in conjunction with other hardware using serial communication.

It supports a very basic programming language and a very capable graphical programming interface called Nextion editor that runs on a PC. You can design your GUI in the Nextion editor with simple drag and drop operations and control the icons and gauges with commands using its custom programming language.

For projects that heavily utilise an Arduino, a display such as the Nextion is an excellent option; it provides a lot of flexibility in designing your interface without the difficulty of programming it. Although expensive when compared with other “dumb” displays such as the one shown in the images above , they offer several features aside from ease of use such as being compact at four times thinner than the Arduino shield display and independent not requiring the Arduino to use its very limited resources to drive the display in addition to whatever else it may be doing.

For very simple projects that utilise an Arduino, the generic LCD display may be better suited due to its low price. However, time constraints need to be factored in as programming the interface for these displays can be difficult and slow going.

**The Nextion 2.4” display:**

* Cost - £12
* Dimensions – 60 x 40 x 6mm
* Operation – Completely Independently or in conjunction with other hardware
* Features – General Purpose Input Outputs, Real Time Clock, RGB Screen, Touchscreen.
* Control – Can control other hardware or be controlled by other hardware

**Generic Arduino 2.4” display:**

* Cost - £3 + Arduino
* Dimensions – 60 x 40 x 24mm
* Operation – Requires Arduino to operate
* Features – RGB Screen, Touchscreen.
* Control – Can be controlled by Arduino.

#### 6.4 Interface using nextion

The displays have their programming transferred via micro SD card, as such when designing an enclosure for the displays, ensure the placement of the screens in the design allows for easy access to the SD card slot to program them.

Whilst designing an interface, you may go through several iterations of an idea to produce a clean result. one of the images show testing of a needle gauge design, The limitations of the display meant that images could not be rotated to simulate the needle of a gauge moving. However, the displays are capable of operating similar to a video by showing lots of images successively to simulate smooth motion. The problem is, manually moving the needle and capturing its image for each position would take hours of work, however, there is a much simpler solution, the needle design and background image can be imported into video editing software where the needle image is rotated to produce a video of the needle moving from minimum to maximum position, the video can then exported as hundreds of frames.

Alexander Richardson, a freelance graphic designer, volunteered to assist after seeing the prototype interface, in creating the GUI based on the design requirements and limitations identified.\
Several design iterations gave the result shown in the images for this step.

For help on using Nextion displays, please refer to the electronics and programming resources.

### Step 11: ​Equipment Sources

#### Equipment Sources

**Multimeter:**

[https://amzn.to/2Ec2VOj](https://amzn.to/2Ec2VOj)

Soldering iron kit:

[https://amzn.to/2JdF0Si](https://amzn.to/2JdF0Si)

[https://amzn.to/2uKoPsC](https://amzn.to/2uKoPsC)

[https://amzn.to/2q2ePoC](https://amzn.to/2q2ePoC)

**Sparkfun CAN bus shield:**

[https://amzn.to/2pXhjVq](https://amzn.to/2pXhjVq)

[https://amzn.to/2H56EjF](https://amzn.to/2H56EjF)

[https://goo.gl/oSMiqL](https://goo.gl/oSMiqL)

**DB9 to OBD2 cable:**

[https://amzn.to/2pYqswZ](https://amzn.to/2pYqswZ)

[https://amzn.to/2Edz5sw](https://amzn.to/2Edz5sw)

**Arduino UNO:**

[https://amzn.to/2Gq9x1q](https://amzn.to/2Gq9x1q)

[https://amzn.to/2pZTigz](https://amzn.to/2pZTigz)

**Arduino wiring set:**

[https://amzn.to/2uEwatr](https://amzn.to/2uEwatr)

[https://amzn.to/2EdrKcB](https://amzn.to/2EdrKcB)

**Arduino Pin headers:**

[https://amzn.to/2pZIqPA](https://amzn.to/2pZIqPA)

[https://amzn.to/2pZIOh0](https://amzn.to/2pZIOh0)

[https://amzn.to/2pZJ2om](https://amzn.to/2pZJ2om)

**Nextion displays:**

7”

[https://amzn.to/2GJCx3D](https://amzn.to/2GJCx3D)

5”

[https://amzn.to/2uEePAO](https://amzn.to/2uEePAO)

4.3”

[https://amzn.to/2GvAIUq](https://amzn.to/2GvAIUq)

[https://amzn.to/2pXWLfs](https://amzn.to/2pXWLfs)

3.2”

[https://amzn.to/2GvnqHC](https://amzn.to/2GvnqHC)

2.8”

[https://amzn.to/2GrN6op](https://amzn.to/2GrN6op)

2.4”

[https://amzn.to/2pZC5DY](https://amzn.to/2pZC5DY)

[https://amzn.to/2GIFOQL](https://amzn.to/2GIFOQL)

**Oscilloscope:**

[https://amzn.to/2IjIDVC](https://amzn.to/2IjIDVC)

Below are links to various suppliers on Amazon for the electronics used in this tutorial, these are UK affiliate links to Amazon and as such if outside the UK, when you have selected one of these links, change the .co.uk to .com or your countries respective URL.

#### Software Sources

In order to program the Arduino you will need to download the Arduino IDE, It is available from [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)

In order to process CAN bus data efficiently, it is recommended you download SerialPlot from [https://bitbucket.org/hyOzd/serialplot](https://bitbucket.org/hyOzd/serialplot)

and SuperSniffer from [http://techtinker.co.za/forum/viewtopic.php?f=14&...](http://techtinker.co.za/forum/viewtopic.php?f=14\&t=18)

#### Electronics and Programming resources

This section contains links to resources that can educate you on the physics and concepts behind electronic circuitry.

It is recommended you purchase a kit to learn the basics such as the one linked here: [https://amzn.to/2GvGSUy](https://amzn.to/2GvGSUy)

[https://www.electronics-tutorials.ws/ ](https://www.electronics-tutorials.ws)is the recommended source for learning the electronics and some programming knowledge required to follow this document.

Please learn the following topics:

* Binary numbers
* DC circuits
* Input/output devices

And for further knowledge to assist with following this document, please learn:

* logic gates
* Systems

For Programming knowledge, please refer to: [https://www.arduino.cc/en/Guide/ArduinoUno](https://www.arduino.cc/en/Guide/ArduinoUno)

Followed by: [https://www.arduino.cc/en/Tutorial/BuiltInExample...](https://www.arduino.cc/en/Tutorial/BuiltInExamples)

Please work through the following to understand how the Arduino operates:

* Section 1: Analog Read Serial
* Section 1: Digital Read Serial
* Section 2: Button
* Section 2: Debounce
* Section 4: Serial Passthrough
* Section 5: Arrays
* Section 5: For loop
* Section 5: If statements
* Section 5: While statements

For knowledge relating to networks, please refer to the following resource:

[https://en.wikipedia.org/wiki/Network\_topology](https://en.wikipedia.org/wiki/Network\_topology)

Please read about:

* Bus networks
* Star networks
* Point to Point networks

For knowledge related to locating CAN bus lines, please refer to:

[https://www.testandmeasurementtips.com/exploring-c...](https://www.testandmeasurementtips.com/exploring-canbus-oscilloscope/)

For knowledge on how CAN bus works electrically, please refer to: [https://en.wikipedia.org/wiki/CAN\_bus](https://en.wikipedia.org/wiki/CAN\_bus)

Go to the Architecture section.

For knowledge on how to solder, please refer to:

For knowledge on how to setup and use the Sparkfun shield, please refer to:

[https://learn.sparkfun.com/tutorials/can-bus-shiel...](https://learn.sparkfun.com/tutorials/can-bus-shield-hookup-guide)

To download the Sparkfun Arduino library code, please refer to:

[https://github.com/sparkfun/SparkFunCAN-Bus\_Arduin...](https://github.com/sparkfun/SparkFunCAN-Bus\_Arduino\_Library/archive/master.zip)

For knowledge on how to determine the baud rate of CAN bus using an oscilloscope, please refer to: [https://racelogic.support/02VBOX\_Motorsport/01Gen...](https://racelogic.support/02VBOX\_Motorsport/01General\_Information/Knowledge\_Base/How\_to\_measure\_CAN\_bus\_Baud\_rate\_using\_an\_oscilloscope)

For knowledge on how to operate a Nextion display refer to:

[https://www.itead.cc/wiki/Nextion\_Editor\_Quick\_Sta...](https://www.itead.cc/wiki/Nextion\_Editor\_Quick\_Start\_Guide)

For knowledge on how to operate the inexpensive Arduino display, please refer to:

[https://www.adafruit.com/product/2478](https://www.adafruit.com/product/2478)

### Step 12: Demonstration Code

#### Demo1 - CAN bus data retrieval

The demo1 code, coupled with the Arduino library which you can download using the link in the electronics and programming resources page, Is all you need to receive data from a CAN bus network and display it via the Arduino IDE’s built-in serial monitor.

#### Demo 2 - CAN bus send and receive messages

The demo2 code allows you to send and receive CAN bus messages. It is only slightly different from the previous code because it has additional lines, but the previous lines to read messages remain.

#### Demo 3 - CAN bus send custom messages using joystick

In order to streamline the process of sending custom messages to devices so that you can change the values with the program running rather than by reuploading new values, this code will allow you to control the value of each channel with the joystick.

#### Demo 4 - CAN frame data check.

This code is a variation on the demo code used to read values from a network; it has been modified to only check if channel 4 of frame 54 contains the value 128.

You should change the values in the function called dataInterpreter to represent frames you have identified and interpreted. Should you wish to compare different channels or different frame ID’s at the same time without changing the values in code, you will need to add additional functions to the code.

Each id function is called in dataInterpreter, if it matches the expected ID, the corresponding function for that it is called, the function checks if the channel sent to it is the one expected and then checks if the content of that channel contains the desired value.

#### Demo 5 - Java graphical interface demo program

The file entitled slider.java is a Java program, to use it, you will need to follow the Java tutorial here: https://docs.oracle.com/javase/tutorial/getStarted/cupojava/win32.html

This tutorial will explain how to download and install Java, create a simple Java program and run it. Where the tutorial gives you example code, simply replace the example code with this code.

You will then need to program an Arduino to output a number though serial print statements; the Arduino serial needs to be running at a baud of 38400, when you run the Java program and connect it to the Arduino, the slider will move to represent the value, the Arduino is outputting.

### Step 13: The Final Result

### Step 14: References

Avionics. (2018). CAN Bus in Aviation - Avionics. \[online] Available at: http://www.aviationtoday.com/2009/05/01/can-bus-in-aviation/ \[Accessed 21 Mar. 2018].

Walz, E. (2018). Automotive Networking: CAN-bus Topology. \[online] linked in. Available at: https://www.linkedin.com/pulse/automotive-networking-can-bus-topology-eric-walz/ \[Accessed 12 Mar. 2018].

OBD Solutions. (2017). What is OBD? - OBD Solutions. \[online] Available at: http://www.obdsol.com/knowledgebase/on-board-diagnostics/what-is-obd/ \[Accessed 29 Nov. 2017].

Arduino.cc. (2018). Arduino Reference. \[online] Available at: https://www.arduino.cc/reference/en/language/structure/bitwise-operators/bitwiseand/ \[Accessed 15 Mar. 2018].

Vector.com. (2018). Vector Solution for CAN. \[online] Available at: https://vector.com/vi\_can\_solutions\_en.html \[Accessed 21 Nov. 2017].

### Be the First to Share

### Recommendations
