# Vehicle Fleet Monitoring

{% embed url="https://hackster.io/virgilvox/vehicle-fleet-monitoring-810940" %}

{% file src="../../../.gitbook/assets/hologram-vehicle-monitor-master.zip" %}

##

Use Hologram's cellular network to monitor a fleet of vehicles using OBDII, Raspberry Pi, GPS, and GSM.

[Intermediate](https://www.hackster.io/projects?difficulty=intermediate)Full instructions provided9,706![Vehicle Fleet Monitoring](https://hackster.imgix.net/uploads/attachments/465225/image\_uploaded\_from\_ios\_tQsQdOFApT.jpg?auto=compress%2Cformat\&w=900\&h=675\&fit=min)

### Things used in this project

| <h4>Hardware components</h4>                                                                                                                              |                                                                                                                                                                                                                                                    |   |   |   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | - | - |
| ![Hologram Nova](https://hackster.imgix.net/uploads/attachments/358779/nova-icon\_lijwM6pMK7.png?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff) | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/hologram/products/hologram-nova?ref=project-810940">Hologram Nova</a></td></tr><tr><td></td></tr></tbody></table>                       | × | 1 |   |
| [Hologram Nova](https://www.hackster.io/hologram/products/hologram-nova?ref=project-810940)                                                               |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           |                                                                                                                                                                                                                                                    |   |   |   |
| ![Raspberry Pi 3 Model B](https://hackster.imgix.net/uploads/image/file/127603/Pi\_3-02.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)      | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><a href="https://www.hackster.io/raspberry-pi/products/raspberry-pi-3-model-b?ref=project-810940">Raspberry Pi 3 Model B</a></td></tr><tr><td></td></tr></tbody></table> | × | 1 |   |
| [Raspberry Pi 3 Model B](https://www.hackster.io/raspberry-pi/products/raspberry-pi-3-model-b?ref=project-810940)                                         |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           | <table><thead><tr><th>OBDII ELM327 Reader</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                               | × | 1 |   |
| OBDII ELM327 Reader                                                                                                                                       |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           | <table><thead><tr><th>GPS Module (Generic)</th></tr></thead><tbody><tr><td>OPTIONAL</td></tr></tbody></table>                                                                                                                                      | × | 1 |   |
| GPS Module (Generic)                                                                                                                                      |                                                                                                                                                                                                                                                    |   |   |   |
| OPTIONAL                                                                                                                                                  |                                                                                                                                                                                                                                                    |   |   |   |
| ![Jumper wires (generic)](https://hackster.imgix.net/uploads/image/file/44496/11026-02.jpg?auto=compress%2Cformat\&w=48\&h=48\&fit=fill\&bg=ffffff)       | <table><thead><tr><th>Jumper wires (generic)</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                            | × | 1 |   |
| Jumper wires (generic)                                                                                                                                    |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           |                                                                                                                                                                                                                                                    |   |   |   |
| <h4>Software apps and online services</h4>                                                                                                                |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           | <table><thead><tr><th>Adafruit.io</th></tr></thead><tbody><tr><td></td></tr></tbody></table>                                                                                                                                                       |   |   |   |
| Adafruit.io                                                                                                                                               |                                                                                                                                                                                                                                                    |   |   |   |
|                                                                                                                                                           |                                                                                                                                                                                                                                                    |   |   |   |

### Story

#### What is Vehicle Fleet Monitoring? <a href="#toc-what-is-vehicle-fleet-monitoring-0" id="toc-what-is-vehicle-fleet-monitoring-0"></a>

I'm glad you asked! There are numerous reasons to monitor a fleet of vehicles. Some organizations just want to track location, which is essentially just asset tracking, while others want to monitor the health of a vehicle. This can be helpful when needing to ensure that your vehicles are getting the maintenance they need. This improves safety and provides an insight into how to improve operations. It also helps in deploying a vehicle to where it can best serve.

#### Wow! That's so cool! But how can I, a humble maker, build something so complicated? <a href="#toc-wow--that-s-so-cool--but-how-can-i--a-humble-maker--build-something-so-complicated-1" id="toc-wow--that-s-so-cool--but-how-can-i--a-humble-maker--build-something-so-complicated-1"></a>

Easy! For the next couple of weeks I'm going to be documenting my journey as I set out to build a DIY solution using off-the-shelf maker friendly hardware. I've already listed the bare minimum low-cost parts needed.

#### The Hardware <a href="#toc-the-hardware-2" id="toc-the-hardware-2"></a>

I'll be using a USB OBDII adapter (see link above) connected to a Raspberry Pi with a standard GPS module wired to the GPIO pins. With the Hologram Nova, a USB GSM modem, I'll be able to add remote connectivity to the vehicle tracker. [Hologram.io](http://hologram.io/) provides amazing coverage at a very maker friendly cost. Best part is, someone could easily take this hack and turn it into a product ready to deploy.

#### The Software <a href="#toc-the-software-3" id="toc-the-software-3"></a>

There are two parts to this.

The first being the piece of code that runs to collect relevant information from the OBDII reader periodically and couples it with GPS data to then send as a data message through the [Hologram.io](http://hologram.io/) network.

In the interest of transparency, I'm working through building this in nodejs, however the OBD-II libraries seem to be very outdated, so the first hurdle is writing out a useable implementation using the node-serialport library. If node doesn't work out this part might get built in python! If anyone reading this happens to have had experience with this, please reach out!

The second part is the web app that will be used to view a realtime map with vehicle data. As this project moves along I hope to build out a way to provision new vehicles easily. This web app will be written in React, a javascript framework for building progressive web apps.

#### How can I help?! <a href="#toc-how-can-i-help---4" id="toc-how-can-i-help---4"></a>

If you want to follow along and perhaps even help contribute, you can order the exact parts and contribute to the GitHub project!

[https://github.com/HologramEducation/hologram-vehicle-monitor](https://github.com/HologramEducation/hologram-vehicle-monitor)

#### A few takeaways before we begin.. <a href="#toc-a-few-takeaways-before-we-begin--5" id="toc-a-few-takeaways-before-we-begin--5"></a>

* [Node.JS](http://node.js/) didn't work out. I spent a lot of time trying to get the node libraries working and found that a lot of them had been neglected a long while and with so many version changes of node in that time, a few things didn't work out as efficiently. So I've switched to Python, which I think is better for beginners as it has less dependencies.
* I started off with what I didn't realize was a knockoff of the USB ScanTool OBDII reader. This caused some compatibility issues as it had no firmware support. I reccomend using this one [https://www.amazon.com/gp/product/B005ZWM0R4/ref=oh\_aui\_detailpage\_o00\_s00?ie=UTF8\&psc=1](https://www.amazon.com/gp/product/B005ZWM0R4/ref=oh\_aui\_detailpage\_o00\_s00?ie=UTF8\&psc=1)

**Alright, with that in mind, lets get started!**

#### THE PART OF THE GUIDE THAT MATTERS <a href="#toc-the-part-of-the-guide-that-matters-6" id="toc-the-part-of-the-guide-that-matters-6"></a>

#### Get your Hardware Ready <a href="#toc-get-your-hardware-ready-7" id="toc-get-your-hardware-ready-7"></a>

You should have:

* Raspberry Pi 3
* Hologram Nova USB Modem

#### Setup a Raspberry Pi <a href="#toc-setup-a-raspberry-pi-8" id="toc-setup-a-raspberry-pi-8"></a>

Burn the latest Raspbian image to a raspberry pi. I recommend [Etcher.io ](http://etcher.io/)- Its a lightweight tool that figures out all the magic of burning an image to an SD card.

You can find the latest image here. Choose whatever flavour works for you.

[https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)

#### Setup Hologram Nova <a href="#toc-setup-hologram-nova-9" id="toc-setup-hologram-nova-9"></a>

You'll need a [Hologram.io](http://hologram.io/) account to provision your SIM card that comes included with your Nova. All you really need to do is activate your SIM card since we won't be using the Hologram data routers. We will be using the Python SDK to get the cell tower location and the Hologram CLI to connect to the internet so we can relay information to [Adafruit.io](http://adafruit.io/)

#### Plug in the ScanTool and Nova to your Pi <a href="#toc-plug-in-the-scantool-and-nova-to-your-pi-10" id="toc-plug-in-the-scantool-and-nova-to-your-pi-10"></a>

This requires a mastery of USB ports. Not for the faint of heart.

![](https://hackster.imgix.net/uploads/attachments/477866/31731998\_10216002495357643\_3188841976933908480\_n\_LNenYoyuuj.jpg?auto=compress%2Cformat\&w=740\&h=555\&fit=max)

#### Setup Adafruit.io account and Dashboard <a href="#toc-setup-adafruit-io-account-and-dashboard-11" id="toc-setup-adafruit-io-account-and-dashboard-11"></a>

Go to [Adafruit.io](http://adafruit.io/) and set up an account.

Goto **Feeds** -> **Actions** -> **Create A New Feed** and name it **fleet**

Goto **Dashboards** and create a new dashboard.

Start by adding a Map view. Set Hours of History to 9999 for a full historical view of GPS locations.

Repeat this with the **Dial** module. Use the same feed, we send both sensor value and GPS location up in the same message, it grabs the first value sent and display it, which in our example is Speed.

**Grab your AIO Key and stash it for when** **we** **run** **the** **code.** There is a link from the main page.

If you are more curious about the API or the dashboard visit these links.

[https://learn.adafruit.com/adafruit-io/mqtt-api](https://learn.adafruit.com/adafruit-io/mqtt-api)

[https://cdn-learn.adafruit.com/downloads/pdf/adafruit-io-basics-gps.pdf](https://cdn-learn.adafruit.com/downloads/pdf/adafruit-io-basics-gps.pdf)

![](https://hackster.imgix.net/uploads/attachments/477873/screen\_shot\_2018-05-01\_at\_1\_27\_33\_pm\_cJvNqJhBeg.png?auto=compress%2Cformat\&w=740\&h=555\&fit=max)1 / 3

#### Get a Shell to your Raspberry PI <a href="#toc-get-a-shell-to-your-raspberry-pi-12" id="toc-get-a-shell-to-your-raspberry-pi-12"></a>

There are a few ways you can do this.

* Monitor and Keyboard
* SSH

I prefer serial because it makes it easier when you are working out of a car and don't have wifi. Adafruit has a great guide on that [https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/)

**ProTip:** On the Pi 3, when bluetooth is enabled it interferes with the serial pins. Mount the SD card on a computer and edit the [config.txt](http://config.txt/) file and add this line.

```
dtoverlay=pi3-disable-bt
```

#### Lets get this code going! <a href="#toc-lets-get-this-code-going-13" id="toc-lets-get-this-code-going-13"></a>

Finally! Lets do this!

All the code and instructions can be found at the github repository here [https://github.com/HologramEducation/hologram-vehicle-monitor](https://github.com/HologramEducation/hologram-vehicle-monitor)

#### Installation <a href="#toc-installation-14" id="toc-installation-14"></a>

Run the following in a terminal, it will install the [Hologram,](https://hologram.io/docs/guide/nova/developer-tools/) [Adafruit-IO ](https://github.com/adafruit/io-client-python)and [OBD ](https://github.com/brendan-w/python-OBD)Python SDKs as well as the Hologram CLI.

```
curl -L hologram.io/python-install | bash
curl -L hologram.io/python-update | bash
sudo pip install adafruit-io
sudo pip install obd
```

#### Run the Example <a href="#toc-run-the-example-15" id="toc-run-the-example-15"></a>

* Clone this repo

```
git clone https://github.com/HologramEducation/hologram-vehicle-monitor
```

* Create a file adafruitConfig.py with the following:

```
ADAFRUIT_IO_KEY      = 'YOUR ADAFRUIT IO KEY'
ADAFRUIT_IO_USERNAME = 'YOUR ADAFRUIT IO USERNAME'
```

* Spin up the network connection through the NOVA

```
sudo hologram network connect
```

* Plugin the other end of the OBD ScanTool to an active vehicle.
* Start the script

```
sudo python
```

#### WHOA!! <a href="#toc-whoa---16" id="toc-whoa---16"></a>

So you'll notice every two minutes data is being sent to the Adafruit cloud. You can change this interval by editing the sleep time at the bottom of the [main.py](http://main.py/) script.

Now go to your adafruit dashboard, you should see the map hone in on your location and the dial should show the speed of your vehicle!

I hope you enjoyed this project and I hope you'll help contribute and share what you do with it! This was my first time creating a Python project so I'm sure it can be improved!

#### OBD-II Commands - What else can you do?! <a href="#toc-obd-ii-commands---what-else-can-you-do--17" id="toc-obd-ii-commands---what-else-can-you-do--17"></a>

The main example send up values returned from the SPEED command. Below is a basic example of how to use the OBD python library.

**Here is a link to all the supported commands**: [https://github.com/brendan-w/python-OBD/blob/master/docs/Command%20Tables.md](https://github.com/brendan-w/python-OBD/blob/master/docs/Command%20Tables.md)

Give different ones a shot and see if there is data that you might find more useful from your vehicle.

```
import obd
connection = obd.OBD() # auto-connects to USB or RF port
cmd = obd.commands.STATUS # select an OBD command (sensor)
response = connection.query(cmd) # send the command, and parse the response

print(response.value) # returns unit-bearing values thanks to Pint
```

### Code

#### Hologram Vehicle Monitoring



#### [HologramEducation](https://github.com/HologramEducation) / [hologram-vehicle-monitor](https://github.com/HologramEducation/hologram-vehicle-monitor)

[12](https://github.com/HologramEducation/hologram-vehicle-monitor/watchers) [0](https://github.com/HologramEducation/hologram-vehicle-monitor/forks)

Relay information from an OBD-II reader to an MQTT broker via Hologram Nova — [Read More](https://github.com/HologramEducation/hologram-vehicle-monitor#readme)

Latest commit to the **master** branch on 4-26-2018

[Download as zip](https://github.com/HologramEducation/hologram-vehicle-monitor/archive/master.zip)\
