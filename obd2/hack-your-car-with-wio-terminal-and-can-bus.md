# Hack Your Car With Wio Terminal and CAN Bus

{% embed url="https://www.hackster.io/longan_labs/hack-your-car-with-wio-terminal-and-can-bus-c6ddf4" %}

{% file src="../.gitbook/assets/Eagle_File_Serial_CAN_Bus-master.zip" %}

{% file src="../.gitbook/assets/OBD-II-Demo-x-Wio-Terminal-master (1).zip" %}

Hack your car and read the cycling speed, rotation speed, oil temperature and other information, displayed on the Wio Terminal screen.

[Intermediate](https://www.hackster.io/projects?difficulty=intermediate)Full instructions provided1,760![Hack Your Car With Wio Terminal and CAN Bus](https://hackster.imgix.net/uploads/attachments/1279245/\_NWDIaPWC5C.blob?auto=compress%2Cformat\&w=900\&h=675\&fit=min)

### Things used in this project

| <h4>Hardware components</h4>                                                                                                                                           |                                                                                                                                                                                                                                      |   |   |   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | - | - | - |
|                                                                                                                                                                        | <table><thead><tr><th>OBD-II Serial CAN Bus Dev Kit</th></tr></thead><tbody><tr><td>Important Note: This project needs the V1.3 version or later of Serial can bus module.</td></tr></tbody></table>                                 | × | 1 |   |
| OBD-II Serial CAN Bus Dev Kit                                                                                                                                          |                                                                                                                                                                                                                                      |   |   |   |
| Important Note: This project needs the V1.3 version or later of Serial can bus module.                                                                                 |                                                                                                                                                                                                                                      |   |   |   |
| ![Wio Terminal](https://hackster.imgix.net/uploads/attachments/1336801/2021-08-17\_11\_13\_45\_iktDtmkGww.png?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff) | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/seeed/products/wio-terminal?ref=project-c6ddf4">Seeed Studio Wio Terminal</a></td></tr><tr><td></td></tr></tbody></table> | × | 1 |   |
| [Seeed Studio Wio Terminal](https://www.hackster.io/seeed/products/wio-terminal?ref=project-c6ddf4)                                                                    |                                                                                                                                                                                                                                      |   |   |   |
|                                                                                                                                                                        |                                                                                                                                                                                                                                      |   |   |   |
|                                                                                                                                                                        | <table><thead><tr><th>Wio Terminal Chassis - Battery (650mAh)</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                             | × | 1 |   |
| Wio Terminal Chassis - Battery (650mAh)                                                                                                                                |                                                                                                                                                                                                                                      |   |   |   |
|                                                                                                                                                                        |                                                                                                                                                                                                                                      |   |   |   |
| <h4>Hand tools and fabrication machines</h4>                                                                                                                           |                                                                                                                                                                                                                                      |   |   |   |
| ![Soldering iron (generic)](https://hackster.imgix.net/uploads/image/file/79853/09507-01.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                  | <table><thead><tr><th>Soldering iron (generic)</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                            |   |   |   |
| Soldering iron (generic)                                                                                                                                               |                                                                                                                                                                                                                                      |   |   |   |
|                                                                                                                                                                        |                                                                                                                                                                                                                                      |   |   |   |
| ![Solder Wire, Lead Free](https://hackster.imgix.net/uploads/attachments/842592/4966285.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)                   | <table><thead><tr><th>Solder Wire, Lead Free</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                              |   |   |   |
| Solder Wire, Lead Free                                                                                                                                                 |                                                                                                                                                                                                                                      |   |   |   |
|                                                                                                                                                                        |                                                                                                                                                                                                                                      |   |   |   |

### Story

If you have some understanding of CAN Bus and Arduino programming, and want to hack your car, then this tutorial can provide you with a solution.

As for why you want to hack your car, I don't know, but this is indeed an interesting thing.

This project mainly used the Serial CAN Bus Module by [**Longan Labs**](https://www.longan-labs.cc/) and the Wio Terminal main control board by [**Seeed Studio**](https://www.seeedstudio.com/).

The [**OBD-II Serial CAN Bus Dev Kit**](https://www.longan-labs.cc/1030002.html) is a CAN Bus control kit designed by Longan Labs. It uses UART to communicate with the single-chip microcomputer. It is compact and easy to use.

Wio Terminal comes from Seeedstuio, which is a development board with a screen that can be programmed with Arduino.

In this project, the following functions are mainly realized:

* Read the cycling speed, rotation speed and oil temperature and other information, displayed on the Wio Terminal screen

If you want more date from the car, please refer to [https://en.wikipedia.org/wiki/OBD-II\_PIDs](https://en.wikipedia.org/wiki/OBD-II\_PIDs)

#### Step 1 : Principle Introduction <a href="#toc-step-1---principle-introduction-0" id="toc-step-1---principle-introduction-0"></a>

Almost all modern vehicles have an OBD-II interface, which is a bridge between the car and the outside world. We can get all the car information and control the car through the OBD-II interface.

And, it is a dangerous thing to control the car, you'd better have a deep understanding of the OBD-II interface before proceeding. This article only reads some basic information from the car, so you can safely follow the steps provided in this tutorial.

#### Step 2 : Get Components Ready <a href="#toc-step-2---get-components-ready-1" id="toc-step-2---get-components-ready-1"></a>

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [Wio Terminal Battery Chassis](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

Important Note: This project needs the V1.3 version or later of Serial can bus module.

#### Step 3: Soldering <a href="#toc-step-3--soldering-2" id="toc-step-3--soldering-2"></a>

![](https://hackster.imgix.net/uploads/attachments/1279335/fvqepwkkf73rjkw\_DYpbJIIcr0.jpeg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 3

This may be the most difficult step, if you have never used a soldering iron.

We need to solder the wire provided by OBD-II CAN-BUS Dev kit to an OBD-connector. You can look at the picture, we soldered the red wire to the 6pin of the connector, and the black wire to 14pin. When 6pin represents CANH, 14pin represents CANL.

#### Step 4: Hardware Connection <a href="#toc-step-4--hardware-connection-3" id="toc-step-4--hardware-connection-3"></a>

![](https://hackster.imgix.net/uploads/attachments/1279332/f0kdo3ekf73rjl0\_3rwwb4nFw5.jpeg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 3

* The Serial CAN Bus Module included in the OBD-II CAN-BUS Dev kit is connected to the Wio Terminal UART interface via Grove cable
* Connect the wires from the previous step to the Serial CAN Bus Module, connect red to CANH and black to CANL.

#### Step 5: Software and Settings <a href="#toc-step-5--software-and-settings-4" id="toc-step-5--software-and-settings-4"></a>

![](https://hackster.imgix.net/uploads/attachments/1279338/f07c1gtkf73rjpd\_fXt2lSOIWu.jpeg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)

Here we need to make some settings for the serial can bus module.

Before we start, we need to download the code of this project. You can click to download [Arduino Library](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal).

If you are using wio terminal for the first tme, you can check [wiki for wio terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)

First, we open the setting demo in the sketch, where we will set the mask and filter of the serial can bus module.

Then burning the setting demo to the wio terminal, open the serial monitor and enter a character at random to see whether the setting is successful or not.

After the setting is completed, burn the demo to the wio terminal and you can see the data on the screen.

#### Step 6: Test on Your Car <a href="#toc-step-6--test-on-your-car-5" id="toc-step-6--test-on-your-car-5"></a>

![](https://hackster.imgix.net/uploads/attachments/1279339/f2t1gtqkf73rlm1\_57AaNjZTLs.jpeg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 3

Next, we need to go to the car and test it. You can find the OBD-II interface under the steering wheel, plug the connector into the OBD-II interface, turn on the wio terminal, and you can see the result.

#### Step 7: What Can Be Improved <a href="#toc-step-7--what-can-be-improved-6" id="toc-step-7--what-can-be-improved-6"></a>

Wio is a powerful main control board, we used quite a few functions in it. For example, Bluetooth, wi-wifi, etc.

Of course, you can also make a more beautiful interface. In short, you can play and enjoy the production process.

More CAN Bus gadgets: [Longan Labs Official Site](https://www.longan-labs.cc/)

### Schematics

#### Schematics of Serial CAN Bus Module in the Dev Kit



### Code

#### Arduino Library for the demo of OBD-II and Wio Terminal



#### [Longan-Labs](https://github.com/Longan-Labs) / [OBD-II-Demo-x-Wio-Terminal](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal)

[12](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal/watchers) [0](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal/forks)

No description — [Read More](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal#readme)

Latest commit to the **master** branch on 5-8-2021

[Download as zip](https://github.com/Longan-Labs/OBD-II-Demo-x-Wio-Terminal/archive/master.zip)

### Credits
