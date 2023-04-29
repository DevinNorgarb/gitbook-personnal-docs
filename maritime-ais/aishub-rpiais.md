# AISHub RPiAIS

{% embed url="https://www.aishub.net/ais-dispatcher?tab=linux" %}

### AIS Dispatcher -  Linux

AIS Dispatcher for Linux supports wide range of Linux distributions on x86\_64 / ARM architectures (including Raspberry Pi).

### Installation

```
wget https://www.aishub.net/downloads/dispatcher/install_dispatcher
chmod 755 install_dispatcher
sudo ./install_dispatcher
```

### Opening AIS Dispatcher configuration

Start your browser and open URL:

```
http://IPADDRESS:8080 (change IPADDRESS with your IP address)
```

Default web login credentials are:

* Username: admin
* Password: admin

WARNING Don't forget to change the default password after the first login!

### Configuring AIS Dispatcher

After login the web page displays the current status of your AIS station:

![rPiAIS Dashboard](https://www.aishub.net/images/pages/rpiais/config\_1.png)

To configure your AIS Dispatcher select “Configuration” from the left panel.

![rPiAIS Configuration](https://www.aishub.net/images/pages/rpiais/config\_2.png)

There are 3 sections in the configuration panel:

* **Input** – configuration of connection to your AIS receiver/data source.
* **Output** – configuration of the destinations where AIS data will be forwarded to
* **Settings** – additional settings and enable/disable of AIS Dispatcher

#### INPUT

AIS Dispatcher supports 3 input options:

* **Serial input** (AIS receivers connected via serial/USB interface)38400,8,N,1 settings are applied to the serial interface by default![rPiAIS Input Serial](https://www.aishub.net/images/pages/rpiais/input\_serial.png)“View devices” button displays all available serial devices in your Raspberry Pi. You can easily select the device where your AIS receiver is connected by clicking on corresponding “Select” button (preferably use selection “By ID” if you don’t have two devices with same ID)![rPiAIS Input Serial devices](https://www.aishub.net/images/pages/rpiais/input\_serial\_devices.png)WARNING Mаny Raspberry Pi users, who are using serial connection (or AIS shield), have troubles because by default Linux console is enabled on this serial port. If you are using Raspberry OS you should disable the Linux console, [follow the instructions on this link](https://www.raspberrypi.org/documentation/configuration/uart.md)
* **TCP Client** (AIS Dispatcher creates TCP connection to your AIS receiver/data source)![rPiAIS TCP Client](https://www.aishub.net/images/pages/rpiais/input\_tcp\_client.png)
* **TCP Server** (your AIS data source creates TCP connection to your RPi)![rPiAIS TCP Server](https://www.aishub.net/images/pages/rpiais/input\_tcp\_server.png)
* **UDP Server** (AIS Dispatcher listens for incoming UDP packets)![rPiAIS UDP Server](https://www.aishub.net/images/pages/rpiais/input\_udp\_server.png)

#### OUTPUT

Output section contains all destinations where your data will be forwarded to.\
Current version supports UDP data streaming to 1 or more destination IP addresses / UDP ports.\
![rPiAIS Output](https://www.aishub.net/images/pages/rpiais/output.png)By default, AIS Dispatcher streams data to AISHub anonymous port and your data is displayed at [VesselFinder](https://www.vesselfinder.com/)

#### Settings

![rPiAIS Settings](https://www.aishub.net/images/pages/rpiais/settings.png)

* **Inactivity timeout** – Restarts TCP connection if no AIS messages have been received for more than specified time interval (in seconds)
* **Reconnect timeout** – Time interval (in seconds) between two sequential connection attempts
* **Downsampling time** – Reduces outgoing traffic by transmitting only 1 position report per ship in the specified time frame (in seconds from 0 to 60)
* **Log verbosity** – Verbosity of log messages (errors only, errors+connection status, errors + connection status + debug info)
* **Duplicates removal** – Reduces outgoing traffic by removal of duplicated AIS messages
* **Tag** – Adds NMEA v4.10 tags in the beginning of output NMEA sentences
* **Non-VDM** – Dispatches all non-VDM (non-AIS) messages (for example GPS messages)
* **Enabled** – Start / Stop AIS Dispatcher

NOTE! Don’t forget to ENABLE AIS Dispatcher and SAVE your configuration!

### Map

If the input configuration is OK it is time to click on Map menu and start having fun with your AIS coverage.

<figure><img src="https://www.aishub.net/images/pages/rpiais/map.png" alt=""><figcaption></figcaption></figure>
