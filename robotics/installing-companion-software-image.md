# Installing Companion Software Image

### Installing the Companion Computer Software Image <a href="#installing-the-companion-computer-software-image" id="installing-the-companion-computer-software-image"></a>

> The current version of Companion is **v0.0.31**. If your system is out of date you can update by either installing a fresh image with the instructions below or connecting to Wi-Fi and performing a [Software Update](/broken/pages/LKNT51F1rClueAwLimcY).

The operating system and supporting software is installed by writing a pre-configured `.img` file to an SD Card which is then inserted into the Companion Computer (Raspberry Pi).

1. Insert a microSD card with at least 4GB capacity into your topside computer with a card reader.
2. Download the Companion image [here](https://s3.amazonaws.com/downloads.bluerobotics.com/Pi/stable/ardusub-raspbian.img.zip) (updated 2021-Nov-30)
3. While the image downloads, download and install [Etcher](https://etcher.io/). Make sure you select the correct download for your Operating System!
4. Open Etcher, select the image file (no need to extract beforehand) and your SD card, click 'Flash' and wait for it to complete.&#x20;
5. Eject the SD card, and insert it into the Raspberry Pi.

### Network Setup <a href="#network-setup" id="network-setup"></a>

The _Companion Computer_ is assigned a static IP address of 192.168.2.2, and it expects the surface computer to have an IP address of 192.168.2.1. The network configuration on the surface computer needs to be set up before it can communicate with the ROV. Choose your operating system below to display the appropriate network setup instructions.

### Software Update <a href="#software-update" id="software-update"></a>

Before proceeding, it is recommended to check for the latest updates for the Companion Computer.

To perform a companion software update:

1. Plug a _fully charged_ battery into the vehicle and connect the tether to the topside computer.
2. Navigate to [192.168.2.2:2770/network](http://192.168.2.2:2770/network) in an internet browser (Chrome, Edge, Firefox, etc.) and ensure that the vehicle has access to a WiFi network. If a webpage is not found at this address, verify the network settings are correct. Troubleshooting steps can be found [here](/broken/pages/86F4wjST55Q0soIAtfH2).
3. Navigate to [192.168.2.2:2770/system](http://192.168.2.2:2770/system). Click the button that says 'Update Companion'. If you do not see this button, then the companion software is up to date.
4. The update process will take between 5 and 20 minutes depending on the Internet connection speed. Wait for the update process to complete.
5. When it completes, refresh the browser. The Companion version should be updated, and the update available message should no longer appear.
6. If the update fails (usually due to a loss of internet connectivity), a warning will appear that the vehicle will reboot and to leave the battery plugged in. At this point, once, it is safe to either power down the vehicle or attempt the update again.

### results matching ""

*

### No results matching ""
