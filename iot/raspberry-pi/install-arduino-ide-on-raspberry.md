---
description: https://linuxhint.com/install-arduino-ide-raspberry-pi/
---

# Install Arduino IDE on Raspberry

[Raspberry Pi](https://linuxhint.com/category/raspberry-pi/)

## How to Install Arduino IDE on Raspberry Pi

1 year agoby [Awais Khan](https://linuxhint.com/author/awaiskhan/)\
If you are a university student with friends who are studying electrical engineering, you have most likely heard of Arduino. This is due to the fact that Arduino is a tool that is commonly used by electrical engineering students today to create their projects.

Let’s use a pencil as an example because it allows you to write something on paper. If you don’t write, it won’t help you and the same is true for Arduino, which works when you program it. Arduino IDE provides you the environment where you can write your codes and check whether they are working fine. You cannot control a device using the Adriano module if you haven’t done proper coding on the IDE. In order to test the code before uploading it on the Arduino module, you will need an IDE for that purpose. If you are able to run your code successfully on your Arduino IDE you can then be able to upload it on the Arduino module.

### How to install Arduino IDE on Raspberry Pi

In this article, we will tell you how you can install Arduino IDE on Raspberry Pi by following the steps carefully. If you skip a step, you won’t be able to do your task on Arduino.

**Step 1:** Check whether your system is updated or not. If your packages are not updated, any command you write to install a software will install an older version of the software. So, it is necessary for you to have installed the updates by entering the below command in the terminal.

$ sudo apt-get update

\
**Step 2:** Now the first step is completed, you have to upgrade the packages as well using the given command in the terminal. This will upgrade your packages installed in your Raspberry Pi version.

<figure><img src="https://linuxhint.com/wp-content/uploads/2022/01/image6-19.png" alt=""><figcaption></figcaption></figure>

$ sudo apt-get upgrade

\
**Step 3:** After installing all the important updates and upgrades, the next thing you should do is to install the Arduino IDE by entering the command in the terminal of your Raspberry Pi.

<figure><img src="https://linuxhint.com/wp-content/uploads/2022/01/image8-16.png" alt=""><figcaption></figcaption></figure>

[Installing the ESP32 Board with Arduino IDE on Mac](https://linuxhint.com/installing-esp32-arduino-ide-mac/)40[How to Install KDevelop on Raspberry Pi](https://linuxhint.com/install-kdevelop-raspberry-pi/)65[How to Install Box86 on Raspberry Pi](https://linuxhint.com/install-box86-raspberry-pi/)45[How to Install Git on Raspberry Pi](https://linuxhint.com/install-git-raspberry-pi/)50[How to Install Netbeans IDE on Linux Mint 21](https://linuxhint.com/install-netbeans-ide-linux-mint/)8[How to Program ESP32 Using Arduino IDE to Blink an LED](https://linuxhint.com/program-led-esp32-arduino-ide/)57[How to Install deb File on Raspberry Pi](https://linuxhint.com/install-deb-file-raspberry-pi/)58[How to Install PowerShell on Raspberry Pi](https://linuxhint.com/install-powershell-raspberry-pi/)5[How to Install Musique on Raspberry Pi](https://linuxhint.com/install-musique-raspberry-pi/)21[How to Install Microsoft Teams on 32Bit Raspberry Pi OS](https://linuxhint.com/install-microsoft-teams-32bit-raspberry-pi/)33[How to Install Pidgin on Raspberry Pi](https://linuxhint.com/install-pidgin-raspberry-pi/)54[How to Interface LCD with ESP32 using Arduino IDE](https://linuxhint.com/interface-lcd-esp32-arduino-ide/)78[How to Install FFmpeg on Raspberry Pi](https://linuxhint.com/install-ffmpeg-raspberry-pi/)49[How to Install Apache Tomcat on Raspberry Pi](https://linuxhint.com/install-apache-tomcat-raspberry-pi/)78[How to Install Apache Pig on Raspberry Pi](https://linuxhint.com/install-apache-pig-raspberry-pi/)45[How to Install Adminer on Raspberry Pi](https://linuxhint.com/install-adminer-on-raspberry-pi/)32[How to download and install Visual Novel Engine Ren'Py on Raspberry Pi](https://linuxhint.com/download-install-visual-novel-engine-renpy-raspberry-pi/)58[How to Install Monaco Editor on Raspberry Pi](https://linuxhint.com/install-monaco-editor-raspberry-pi/)33[How to Install Empathy on Raspberry Pi](https://linuxhint.com/install-empathy-raspberry-pi/)14[How to Install and Use VeraCrypt on Raspberry Pi](https://linuxhint.com/install-use-veracrypt-raspberry-pi/)24[How to Install Subsonic Media Server on Raspberry Pi](https://linuxhint.com/install-subsonic-media-server-raspberry-pi/)13[How to Install RPM Packages on Raspberry Pi](https://linuxhint.com/install-rpm-packages-raspberry-pi/)25[How to Install and Use Scala on Raspberry Pi](https://linuxhint.com/install-scala-raspberry-pi/)42[How to Install GNOME Screenshot Utility on Raspberry Pi](https://linuxhint.com/install-gnome-screenshot-utility-raspberry-pi/)59[How to Install Openshot Video Editor on Raspberry Pi](https://linuxhint.com/install-openshot-video-editor-raspberry-pi/)53$ sudo apt install arduino

![](https://linuxhint.com/wp-content/uploads/2022/01/image7-19.png)\
The above command will install Arduino IDE on your Raspberry Pi desktop and you will be able to run it through the terminal by entering the following command.

$ arduino

![](https://linuxhint.com/wp-content/uploads/2022/01/image10-10.png)

The above command will run the Arduino and you will be able to see it on your screen.

![](https://linuxhint.com/wp-content/uploads/2022/01/image9-14.png)

### Setting up your Arduino IDE

After the installation, setting up your IDE is important so that you may be able to learn and understand how you can write code on Arduino IDE and how you can port it into the Arduino hardware. So, here are some steps you should check and understand:

You can run the Arduino IDE from the main menu option of the Raspberry Pi as well. For that you need to go to the main menu option and then in the programming option, you will be able to run Arduino by clicking on it.

![](https://linuxhint.com/wp-content/uploads/2022/01/image2-38.png)\
The latest version of Arduino IDE supports multiple board options. So, you don’t need to worry about the compatibility of your board with the Arduino IDE. You will find tons of options there. You can check your board by heading towards the tools option and then in the board option you will be able to see your required board in the list.

![](https://linuxhint.com/wp-content/uploads/2022/01/image1-39.png)\
If you want to test whether the Arduino is working fine or not but you don’t know how you can write a code. Then don’t need to worry about that as there are many examples available in Arduino, which you can easily select and run to check whether these are working fine on Arduino.

You can see those examples in the “File” option of Arduino IDE and then heading towards the “Examples” option. There you will be able to see a lot of examples which you can run on your IDE.

![](https://linuxhint.com/wp-content/uploads/2022/01/image4-28.png)\
Now you can easily verify whether the code is working fine or not by selecting the first option “Verify”. It will give you a confirmation message then your code is successfully compiled without any error.

![](https://linuxhint.com/wp-content/uploads/2022/01/image3-33.png)\
If you want to port your code with your Arduino board you can do that easily after the compilation and by clicking on the “Upload” option. But for that you first need to connect your board with your system otherwise it will give you an error message saying that your serial port “COM1” is not found.

### Uninstalling Arduino IDE on Raspberry Pi

If you are wishing to remove Arduino IDE on Raspberry Pi, you can do that quite easily through entering a simple command in the terminal.

$ sudo apt-get remove arduino

![](https://linuxhint.com/wp-content/uploads/2022/01/image5-22.png)

### Conclusion

If you are really interested in testing your skills on the Arduino IDE on Raspberry Pi, this is your best chance to get what you really want. The installation of Arduino IDE on Raspberry Pi is just a few steps away from you and if you successfully install it then you will be able to start your professional journey by writing codes on Arduino IDE.
