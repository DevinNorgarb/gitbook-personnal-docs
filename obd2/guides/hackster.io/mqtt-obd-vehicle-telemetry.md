# MQTT OBD Vehicle Telemetry

{% embed url="https://www.hackster.io/jassak/mqtt-obd-vehicle-telemetry-f120c4" %}

##

Fancy to see your's vehicle data online in real-time? If so, continue reading!

[Advanced](https://www.hackster.io/projects?difficulty=advanced)Full instructions provided12,538![MQTT OBD Vehicle Telemetry](https://hackster.imgix.net/uploads/attachments/1159022/_ZqigqGv3WJ.blob?auto=compress%2Cformat\&w=900\&h=675\&fit=min)

### Things used in this project

| <h4>Hardware components</h4>                                                                                                                           |                                  |   |   |   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | - | - | - |
| ![Arduino MKR1000](https://hackster.imgix.net/uploads/image/file/138055/ABX00004_Iso_Both.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff) | 64b1cfd238184992b614c9e55487bcd9 | × | 1 |   |
| [Arduino MKR1000](https://www.hackster.io/arduino/products/arduino-mkr1000?ref=project-f120c4)                                                         |                                  |   |   |   |
|                                                                                                                                                        |                                  |   |   |   |
| ![Jumper wires (generic)](https://hackster.imgix.net/uploads/image/file/44496/11026-02.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)    | 1633b4a9115e41d5af69cf55ce97adb1 | × | 1 |   |
| Jumper wires (generic)                                                                                                                                 |                                  |   |   |   |
|                                                                                                                                                        |                                  |   |   |   |
| ![Breadboard (generic)](https://hackster.imgix.net/uploads/image/file/44494/12002-04.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)      | 8aaaf485eb884a6faa76eaba38015416 | × | 1 |   |
| Breadboard (generic)                                                                                                                                   |                                  |   |   |   |
|                                                                                                                                                        |                                  |   |   |   |
|                                                                                                                                                        | 1789824106ea45fb97352496d39fa953 | × | 1 |   |
| u-blox NEO-6M                                                                                                                                          |                                  |   |   |   |
| GPS module                                                                                                                                             |                                  |   |   |   |
|                                                                                                                                                        | 2389cfec823541ac91b51676a9cd661c | × | 1 |   |
| ELM327                                                                                                                                                 |                                  |   |   |   |
|                                                                                                                                                        |                                  |   |   |   |

### Story

#### 1) In a nutshell <a href="#toc-1--in-a-nutshell-0" id="toc-1--in-a-nutshell-0"></a>

So today we will connect our car to the internet. Literally. Using Arduino MKR1000 & ELM327 micro-controllers we will send various data from car's engine control unit (RPM, Engine temperature, Velocity.....) to the IBM Watson Cloud using MQTT protocol. Also we will create responsive web-app interface using Node-RED (available on IBM Watson Cloud) and custom iOS application with SwiftUI & CocoaPod's MQTT library.

#### 2) Hardware needed <a href="#toc-2--hardware-needed-1" id="toc-2--hardware-needed-1"></a>

Core of the project is based on Arduino MKR1000. The advantage of this little device is embedded WiFi shield, that allows us create connection to the IBM Watson Cloud. Next part is ELM327 - micro-controller connected through UART to the Arduino. This little fellow allows us to read ECU's data using PID codes send from Arduino. Since we are connecting vehicle to the internet, it is good manner to see it's location. So for this reason we are also using NEO-6M GPS module.

#### 3) IBM Watson Cloud <a href="#toc-3--ibm-watson-cloud-2" id="toc-3--ibm-watson-cloud-2"></a>

Watson Cloud is great solution for processing & visualizing collected data. It has various resources, but what You'll basically need is to register on [https://cloud.ibm.com/](https://cloud.ibm.com/login) and create resource for **IoT platform.** This resource is used as MQTT broker and will generate URL for broker (server). Inside the platform we will create authentication credentials for two MQTT clients - Arduino & iOS application. Also we can change security of broker to TLS optional, since we are sending data in plain text on port 1883. Next thing is creating **Node-RED** resource. This will allow us to process data from MQTT clients (publishers/subscribers), but also create a web-interface. After successful creation of Node-RED resource we have to import custom palettes. For interconnection between Node-RED resource & IoT platform resource, import _node-red-contrib-scx-ibmiotap_. For creating web-app ui import _nodered-dashboard._ Last, but no least, to interconnect Node-RED with IoT platform, go back to your Node-RED resource in Watson Cloud, select **Connections/CreateConnection** and choose **Connect** to your resource of IoT platform.

It is important to mention that we are working with free version of IBM Watson Cloud. But since we are sending small ECU data (JSON format) using MQTT (min. overhead size is just 2 Bytes), Cloud's capacity at 200 MB / monthly means enough space in the end.

On figure 3.1 we can see final Node-RED flow, available at the end of this article. Basically You'll need to modify dark-blue nodes - change MQTT credentials based on your IoT platform. All other blocks can stay the same. Maybe there's question why do we have so many function blocks - the answer is, that they are used to split data based on the MQTT topic - e.g. if we have web-app gauge with engine temperature, we will send only engine temperature there and skip other data (RPM, velocity.......).

![Fig. 3.1: Node-RED flow](https://hackster.imgix.net/uploads/attachments/1159070/celkovy_tok_mKadI5p77v.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Fig. 3.1: Node-RED flow

After successful importing of flow code, hit the Deploy button. To access created web-app UI replace _**/red/xxxxxx**_ in your URL with _**/ui**_

#### 3) Hardware connection <a href="#toc-3--hardware-connection-3" id="toc-3--hardware-connection-3"></a>

Since Arduino MKR1000 has only one UART connection by default, connect GPS module RX pin to Arduino pin 0 and TX pin to Arduino pin 1. We will define second UART in.ino code.

#### 4) Arduino software <a href="#toc-4--arduino-software-4" id="toc-4--arduino-software-4"></a>

Code for Arduino is attached in the end of this article. What You'll need to do, is to make sure you have following libraries installed:

**WiFi101.h**

**MQTTClient.h**

**wiring\_private.h**

**TinyGPS++.h**

Next change your Wi-Fi credentials and MQTT credentials based on your IoT platform (broker and client credentials). There is also code for header file **premenne.h** - make sure you put this file into your project folder, as it obtains functions for retrieving data from vehicle's ECU, with their conversion from HEX to DEC.

#### 5) iOS application <a href="#toc-5--ios-application-5" id="toc-5--ios-application-5"></a>

This part is completely optional, and doesn't affect running of your web-app. But if you want to have dedicated application, follow these steps:

* Create new Xcode project
* Install Cocoapods using terminal with following commands: **sudo gem install cocoapod** and **pod setup**. This process takes a while, so don't worry.

SwiftUI project codes are included in the end of this article, only things You'll have to change are MQTT credentials in ContentView, based on IBM IoT platform. The output of application is displayed on figure 5.1, where we can see 3 horizontal parts:

a) Buttons on top - used for connecting to MQTT broker and publishing/subscribing to topic of our choice (Temperature, RPM.......)

b) MapView - map with annotation mark informing us of vehicle's current location

c) Horizontal-scrolling menu - gauges with ECU's data

![Fig. 5.1: iOS application](https://hackster.imgix.net/uploads/attachments/1159083/3_IXxAscMXQA.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Fig. 5.1: iOS application

#### 6) Final output of web-app <a href="#toc-6--final-output-of-web-app-6" id="toc-6--final-output-of-web-app-6"></a>

Created Node-RED web-app UI obtains two choices from hamburger menu: Static test - used for retrieving only one value from ECU and Dynamic test - retrieving value from ECU every 2 seconds (based on.ino delays - can be changed). Static test UI is displayed on figure below.

![Fig. 6.1: Node-RED web-app UI](https://hackster.imgix.net/uploads/attachments/1159228/static_tR4HsJPYxz.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)Fig. 6.1: Node-RED web-app UI

If You have any questions, do not hesitate to ask.

### Schematics

#### ELM327 + NEO-6M connection to Arduino MRK1000

Wiring diagram![](https://hackster.imgix.net/uploads/attachments/1159108/elschema_26EhSYoQKk.png)

### Code

* Main .ino file
* Header file premenne.h
* Node-RED flow
* ContentView - main Swift code
* MapView - Map with annotation mark Swift code
* Temperature Gauge - Swift code
* Battery voltage gauge - Swift code
* Velocity gauge - Swift code
* RPM gauge - Swift code

#### MapView - Map with annotation mark Swift code

SwiftFor iOS application

```
//
//  MapView.swift
//  RingViewRPM
//
//  Created by Kardan on 01/04/2020.
//  Copyright © 2020 Kardan. All rights reserved.
//

import SwiftUI
import MapKit


struct MapView: UIViewRepresentable {
    var predtym:Double
    var nazov:String="sevas"
    var dlzka = 34.011286
    var sirka = -116.166868
    @State var prava:Bool=true
    
    func makeUIView(context: Context) -> MKMapView {
        MKMapView(frame: .zero)
    }
    
    func updateUIView(_ uiView: MKMapView, context: Context) {
        
    
        let coordinate = CLLocationCoordinate2D(
            latitude: dlzka, longitude: sirka)
        let sponka=MKPointAnnotation()
        sponka.coordinate=coordinate
        sponka.title=nazov
        let span = MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01)
        let region = MKCoordinateRegion(center: coordinate, span: span)
        uiView.setRegion(region, animated: true)
        let annotations = uiView.annotations
        uiView.removeAnnotations(annotations)
        uiView.addAnnotation(sponka)
        
        
}
    
    
    
}
```
