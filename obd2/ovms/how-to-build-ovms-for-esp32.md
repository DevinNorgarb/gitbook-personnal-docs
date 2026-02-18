# How to Build OVMS for ESP32

OVMS

<br>

Open Vehicle Monitoring System

\
\
\
![](https://lh7-us.googleusercontent.com/hx_cUnzS0BUNWmsdXQIe9wyGBPcQzyU4YWd66PlMG2rFpvxfSgjt3bFb-RqBY3_Bu0oygYeUGokBz_HRBZsMhecsdBKoThSiiq-7tQv4p467V86IOJkaoGvbbdIGX7kVr-LnmQc4fBLP-f4nrahvjQ)

[www.openvehicles.com\
<br>](http://www.openvehicles.com)OVMS Developer Guide

v3.0.2 (24th August 2022)

\
For OVMS Hardware Module v3.x and Firmware v3.x.x

<br>

History

<br>

v3.0.0 20th Sep 2017 Initial version written

v3.0.1 20th Sep 2020 New chapter: Developing with Visual Studio Code

v3.0.2 24th Aug 2022 Minor edit to title of tools section for Linux/Mac

<br>

Table of Contents

<br>

[Welcome 4](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.x6wx14c7um3i)

[A short history of OVMS 4](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.htuv6x7csnq0)

[Development Overview 6](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.t2ak98ld6zf9)

[Developing with Visual Studio Code (on Windows) 6](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.bx3i08hw9cn7)

[ESP-IDF (toolchain) 7](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.qc1x5iitc7w)

[Using a higher toolchain/xtensa version 7](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.kzgsy1j1of0e)

[Install OVMS’s own ESP-IDF 7](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.87wcje3uoqbd)

[Get and build the OVMS source code 8](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.iq9ytb4muvpt)

[Optional: Flashing the OVMS hardware directly 9](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.bsn4e02cwh75)

[Install USB driver for the OVMS 9](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.l16d3d7dj6qo)

[Tell ESP-IDF the serial port 9](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.k8qy4s6pwthj)

[Flash the OVMS 9](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.nfleuot8stv8)

[Install and configure portable Visual Studio Code and Git 9](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.3cz8lao0yozf)

[Install VSC portable 10](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.u6jdm0jeydbr)

[Install Git for Windows portable 10](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.gwvg22j6k0iv)

[Configure VSC 10](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.igp82pufjg8a)

[Coding OVMS in VSC 12](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.ln3pxsvpco17)

[Vehicle Firmware Development Tools (Linux/Mac) 13](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.ps7gqk91cb3s)

[Module USB Development Port 15](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.346c9c4vxe87)

[ESP-32 WROOM-32 Module eFuses 20](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.q1djv6mrt3yo)

[Vehicle Firmware Overview 21](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.19hxbmisent8)

[Command Line Interpreter 21](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.lmwrnrfhp7kl)

[OVMS Vehicle Modules 25](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.t6s09orr514x)

[Vehicle Metrics 28](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.fh0kcxaejyzy)

[Configuration 30](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.pffpx5icm90)

[Access config flash filesystem 35](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.k0icuclfdl3m)

[Module Circuit Design 37](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.rggw49gq3ecc)

[Main Board Overview 37](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.nu2ueh2elr10)

[WROOM-32 and Support Circuits 38](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.qa5ilic49nox)

[128MB External SPI Flash 38](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.dfxsex3f0swh)

[MAX7317 GPIO Expansion 39](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.5boaosaifec9)

[ESP32 Boot/Flash Control via USB 40](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.c35d63don59a)

[AOZ1280CI Power 41](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.jjhtibd7zy25)

[BTS452R Switched 12V Power 41](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.unpcpexvrio9)

[CP2102 USB 42](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.xjf0xsc19ker)

[Micro SD Card 42](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.wvmpsm5vxa8q)

[CAN Buses 45](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.opia2rs096e6)

[CAN1 - On Board 45](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.zaey2jnok9tx)

[CAN2 and CAN3 via MCP2515 45](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.elqrlm6k84i5)

[Expansion 46](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.3wzaabu7jje2)

[Internal Expansion Bus 46](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.65lmef8k4svm)

[DA26 External Expansion Connector 46](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.oxufbua9kmuu)

[DB9 External Expansion Connector 48](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.l23dpridikk3)

[Conclusions 49](https://docs.google.com/document/d/1q5M9Lb5jzQhJzPMnkMKwy4Es5YK12ACQejX_NWEixr0/edit#heading=h.p3p8tei5qmk6)

## Welcome

The OVMS (Open Vehicle Monitoring System) team is a group of enthusiasts who are developing a means to remotely communicate with our cars, and are having fun while doing it.

&#x20;

The OVMS module is a low-cost hardware device that you install in your car simply by installing a SIM card, connecting the module to your car’s Diagnostic port connector, and positioning a cellular antenna. Once connected, the OVMS module enables remote control and monitoring of your car.

&#x20;

This document presents an overview of the development tools and techniques you will need to work on the OVMS system. You might be extending what OVMS does already (either for general consumption, or for your own private use), adding support for a new vehicle, or using the OVMS framework to implement something completely different. Whatever your purpose, please remember that OVMS is an Open Source project without restrictions, that has got to where it is today by the contributions of so many; so please try to share what you yourself do with it.

### A short history of OVMS![](https://lh7-us.googleusercontent.com/YvqGbLe2iRHdUjblmub5GOnQTpmz4noOl2b4ugo_mGoxHjYliXknbwvXbadZxer3CNvfegzKX-puDjokgpDn3dI4HYs5eiD7Pkts-Cr2RgGwYO5hQ6s5W4Vy5Gb2-MwM0oxT8vw6Tli_DJ-C7RaG1w)

The Open Vehicle Monitoring System (OVMS) started out as a hobbyist project to bring cellphone control to the Tesla Roadster electric car. Three hobbyist, Michael Stegen, Mark Webb-Johnson, and Sonny Chen, built OVMS from the ground-up as an open source project.

<br>

The first batch of in-vehicle modules (now called ‘v1’) were hand-built in time for christmas 2011. These modules combined a vehicle control board (based on the PIC18F2680 processor) and a standard SIMCOM SIM900 cellular base board, housed in a relatively large white box.

<br>

In the early days, developers and those extremely technically capable were the only ones using OVMS, but as time went by more and more users wanted to benefit from cellular monitoring of their electric vehicles, and a community was born.

<br>

As the number of users grew, and the pain of hand-producing circuit boards got worse with volume, the developers started work on a new version of the hardware (now called ‘v2’). This would use a standard metal industrial enclosure, a single mass-produced PCB (with cellular or one side, and PIC18F2685 processor on the other), and most importantly an industry standard DB9 connector allow vehicles other than the Tesla Roadster to be supported via vehicle-specific adaptor cables. We also upgraded the SIMCOM to a SIM908 (and later SIM808) module, which supported GPS (for those vehicle types without onboard GPS). This new version was released late in 2012, with Fasttech (in China) as the distributor.

<br>

Both the v1 and v2 hardware modules used the same firmware code, and 2G SIMCOM modems. Over the years, the limitation of this hardware become more and more restrictive, as developers continued to push the limits with more vehicle support, and more advanced functionality. By 2016, a dozen vehicle types were supported, and both RAM and FLASH memory were at capacity. In addition, the phase-out of 2G by AT\&T in USA began to be an issue.

<br>

So, in 2017, the core development team began work on a version 3 (now called ‘v3’) of the OVMS module. This would be a complete re-write of the module firmware on a new platform:

\
![](https://lh7-us.googleusercontent.com/WOtA5j2yi-3rcStN8uxSEnP06nbYsqMzxYmZdS5C3tA0mohZPzHavya8JWS6bBIVZVpx7ejmvAa_AebER9JTM4Ls7ZZS07ZKy-_4TX3z4T6CV8xDnK18Jc-FbTN60vYbGi-8vOYYrgE37PEA_UQfqA)

* Espressif IDF\
  (based on Open Source GNU C/C++)
* ESP32 dual-core ARM processor
* 16MB flash and 520KB RAM
* Wifi
* Bluetooth
* 3x CAN buses
* GPIO expansion ports
* A new DB26 external expansion port
* An internal expansion slot
* SD CARD support
* USB port
* 3G and 4G modem options

<br>

The first ten v3 developer modules were produced in September 2017.

<br>

### Development Overview

&#x20;

OVMS development can be divided into three main parts:

&#x20;

1. Vehicle Firmware Development – working on the module inside vehicles.
2. Server Development – working with the OVMS server code.
3. App Development – working with the remote Apps that access the vehicle information.

&#x20;

While some information presented here is specific to a particular area of development, in general we try to cover all three parts.

## Developing with Visual Studio Code (on Windows)

This chapter describes how you install and successfully build and flash OVMS using Visual Studio Code on Windows with the current (2020-07-14) version of OVMS. It may be applicable to other OSes as well.&#x20;

<br>

This will be a portable installation. Meaning you can do everything on a flash drive and can take it to any other computer. You cannot (easily) just change the location on a computer though as some software saves their absolute path in their config. Nevertheless the whole installation won’t save anything in AppData/User/etc. folders. So a backup of the installation folder will backup everything.\
In this example everything will be installed in D:\OVMS which will be the root path and the user-name will be soko (change it to your Windows user name). The only important thing is that the whole path needs to be ASCII characters only with no spaces, symlinks or accents.&#x20;

### ESP-IDF (toolchain)

(Based on: [https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup.html](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup.html))

<br>

The current version of the OVMS specific ESP-IDF ([https://github.com/openvehicles/esp-idf](https://github.com/openvehicles/esp-idf)) is v3.3. So download the toolchain v3.3:

[https://dl.espressif.com/dl/esp32\_win32\_msys2\_environment\_and\_toolchain\_idf3-20200601.zip](https://dl.espressif.com/dl/esp32_win32_msys2_environment_and_toolchain_idf3-20200601.zip)

Open the ZIP-file and extract the content of its containing msys32 folder to C:\OVMS so the path to mingw32.exe is C:\OVMS\mingw32.exe.

#### Using a higher toolchain/xtensa version

It can happen that the xtensa version in the zip file downloaded above is too old (happened 2020-07-16). The newer version should be lister at [https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup-scratch.html#updating-existing-windows-environment](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup-scratch.html#updating-existing-windows-environment) under section “Alternative Setup: Just download a toolchain”. Download this zip file. Then goto C:\OVMS\opt , delete the xtensa-esp32-elf folder that’s in there and replace it with the one in the zip file.

#### Install OVMS’s own ESP-IDF

Doubleclick on this mingw32.exe (don’t use mingw64.exe!). This is your environment bash shell.

Type in and execute:

$ git clone https://github.com/openvehicles/esp-idf.git

$ cd esp-idf

$ git submodule update --init --recursive

$ cd ..

<br>

Now the OVMS specific version of ESP-IDF is on your computer. To later pull an ESP IDF update, issue:

$ cd esp-idf

$ git pull

$ git submodule update --recursive

$ cd ..

<br>

Now tell the toolchain the setup path of ESP-IDF by creating a new file named export\_idf\_path.sh in C:\OVMS\etc\profile.d with the content

export IDF\_PATH="C:/OVMS/home/soko/esp-idf"

(use forward slashes and don’t forget to replace soko by your user name!).

<br>

Close the window and start mingw32.exe again. Type

$ printenv IDF\_PATH

Which should give you the path you put into the file if everything is correct.

<br>

Next install the required python packages. To do so type

$ python -m pip install --user -r $IDF\_PATH/requirements.txt

<br>

### Get and build the OVMS source code

Type the following to get the latest version of OVMS from github:

$ git clone[ https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git)

$ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3

$ git submodule update --init --recursive

<br>

Next set the default build configurations:&#x20;

$ cp support/sdkconfig.default.hw31 sdkconfig

$ make menuconfig

<br>

The last command will open a DOS-GUI window. Just choose “EXIT” for now which will close the window. After a while the prompt will come back.

<br>

If everything worked out as it should the source should build successfully by typing:

$ make -j17 all

<br>

The 17 behind -j should be the number of your CPU cores in your machine + 1 (so 17 for 16 cores). This option just speeds up the build process.

<br>

Congrats! You have now your own build OVMS firmware in the file

C:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3\build\ovms3.bin&#x20;

<br>

You can now put this file onto a HTTP-server/website and use the firmware update option “OTA” on the OVMS web interface. Unfortunately there is no way to upload this file directly to OVMS.

#### Optional: Flashing the OVMS hardware directly

As an option you can connect the OVMS box directly via USB to your computer and flash it. This may be dangerous though as a broken firmware may render your hardware inaccessible.

<br>

**Install USB driver for the OVMS**

So Windows recognize the OVMS as a virtual COM/Serial port a driver for the “CP210x USB to UART Bridge” is needed from here:  [https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

<br>

Download the correct version for your Windows version and unpack it somewhere. Plug in the OVMS via USB and point Windows to the unpacked folder when it asks for the driver.

<br>

Now you need to know the serial port name (i.e. “COM3”) the OVMS was installed as. Open the Windows Device Manager to find out.

**Tell ESP-IDF the serial port**&#x20;

Start mingw32.exe again and type:

$ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3

$ make menuconfig

<br>

Don’t close the DOS-GUI window. Instead choose “Serial flasher config” then the first entry “...Default serial port”. Delete whatever is written there, type COM3 and press Enter. Select EXIT two times and answer YES when asked if you want to save the changes.

**Flash the OVMS**

To build and flash, instead of just building type:

$ cp make -j17 flash

### Install and configure portable Visual Studio Code and Git

Programming with a decent IDE with Code Completion makes the day to day development so much easier. Here is how to use Visual Studio Code (VSC) and Git as portable installation. Until now you used the build in Git of ESP-IDF. VSC can’t use this unfortunately. This is why you have to install it again.

#### Install VSC portable

Download current version as a ZIP-file from [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

Unpack the content of the ZIP-file to C:\OVMS\VSC and then create the folder C:\OVMS\VSC\data which will make the installation a portable installation.

#### Install Git for Windows portable

Download the current version as portable EXE from [https://git-scm.com/download/win](https://git-scm.com/download/win)

Use the EXE-File itself to unpack the content to C:\OVMS\GIT

Hint: The EXE-unpacking executes a batch file at the end which ties this installation to this absolute path. So it cannot be moved anymore afterwards.

#### Configure VSC

Now it’s time to start VSC the first time with C:\OVMS\VSC\Code.exe. This usually triggers the installation of the C/C++ IntelliSense extension. Just let it happen… It might also show up later when opening the OVMS folder.

Tell VSC the path of the portable Git installation by opening “File”, “Preferences”, “Settings”. Then “Extensions”, “Git” and scroll until you find the “Path” section. Click on “Edit in settings.json”. In file edit this line to:

"git.path": "C:\\\OVMS\\\GIT\\\cmd\\\git.exe"

And save it. Close VSC for now.

<br>

To tell VSC how to cooperate with the OVMS Source you need some additional files. In the Windows Explorer create this folder (be aware it has a dot in front. So it’s “.vscode”. Depending on your Explorer settings it might not allow you to create such a folder or removes the dot automatically) c:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3\\.vscode\\&#x20;

<br>

Place the following three files with the listed content into this folder:

c\_cpp\_properties.json:

{

&#x20;   "configurations": \[

&#x20;       {

&#x20;           "name": "OVMS",

&#x20;           "includePath": \[

&#x20;               "${workspaceFolder}",

&#x20;           "${workspaceFolder}\\\\..\\\\..\\\\..\\\esp-idf\\\components\\\\\*\*",

&#x20;           "${workspaceFolder}\\\\\*\*"

&#x20;           ],

&#x20;           "defines": \[

&#x20;               "\_DEBUG",

&#x20;               "UNICODE",

&#x20;               "\_UNICODE"

&#x20;           ],

&#x20;           "intelliSenseMode": "msvc-x64"

&#x20;       }

&#x20;   ],

&#x20;   "version": 4

}

<br>

settings.json:

{

&#x20;   "terminal.integrated.shell.windows": "C:\\\OVMS\\\usr\\\bin\\\bash.exe",

&#x20;   "terminal.integrated.shellArgs.windows": \["--login"],

&#x20;   "terminal.integrated.env.windows": {&#x20;

&#x20;       "MSYSTEM": "MINGW32",&#x20;

&#x20;       "CHERE\_INVOKING":"1"

&#x20;   },

&#x20;   "files.associations": {

&#x20;       "forward\_list": "cpp"

&#x20;   }

}

<br>

tasks.json (again change the -j17 to your number):

{

&#x20;   "version": "2.0.0",

&#x20;   "tasks": \[

&#x20;     {

&#x20;       "type": "shell",

&#x20;       "label": "ALL",

&#x20;       "command": "make -j17 all",

&#x20;       "options": {

&#x20;         "cwd": "${workspaceFolder}"

&#x20;       },

&#x20;       "problemMatcher": \[

&#x20;         "$gcc"

&#x20;       ],

&#x20;       "group": {

&#x20;         "kind": "build",

&#x20;         "isDefault": true

&#x20;       }

&#x20;     },

&#x20;     {

&#x20;       "type": "shell",

&#x20;       "label": "FLASH",

&#x20;       "command": "make -j17 flash",

&#x20;       "options": {

&#x20;         "cwd": "${workspaceFolder}"

&#x20;       },

&#x20;       "problemMatcher": \[

&#x20;         "$gcc"

&#x20;       ],

&#x20;       "group": {

&#x20;         "kind": "build",

&#x20;         "isDefault": true

&#x20;       }

&#x20;     },

&#x20;     {

&#x20;       "type": "shell",

&#x20;       "label": "CLEAN",

&#x20;       "command": "make -j17 clean",

&#x20;       "options": {

&#x20;         "cwd": "${workspaceFolder}"

&#x20;       },

&#x20;       "problemMatcher": \[

&#x20;         "$gcc"

&#x20;       ],

&#x20;       "group": {

&#x20;         "kind": "build",

&#x20;         "isDefault": true

&#x20;       }

&#x20;     }

&#x20;   ]

&#x20; }

#### Coding OVMS in VSC

Start VSC again and choose “File”, “Open Folder…” and choose the folder

C:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3&#x20;

<br>

Now choose “Terminal”, “New Terminal” and press the “Accept”-Button on the windows that pop up. Open a New Terminal again. Now you should see the same shell as with mingw32.exe.

<br>

To build inside VSC just select “Terminal”, “Run Task” and then “ALL” which executes the “make -j17 all” command of the tasks.json file.

<br>

Have fun coding in VSC with IntelliSense and using it’s integrated Git features! It’s not as good as “Visual Studio 2019” but better than nothing ;)

<br>

## Vehicle Firmware Development Tools (Linux/Mac)![](https://lh7-us.googleusercontent.com/FuStMxordbXdlJpovykAWUTzJ0yzozmS9ivbcLE1WzYFvELtMaoFnh4xAoQ5NgzXKgoiIbtw0qlhIeFsP7RR2SA3FKkqJW6SP4ICY5ngAugxDoa0nN4ORwVPZWxxcBAmuAnyc_Cg-42vP5-6i1bulw)

Version 3 (v3) of the Open Vehicle Monitor System module is based on an Espressif ESP-32 microcontroller module (Wifi and Bluetooth support, dual core ARM processor, RAM and FLASH).

<br>

The Software Development Kit used is Espressif’s ESP IDF, which is based on the open source GCC compiler plus a large number of support libraries and FreeRTOS based operating system. ESP IDF runs under Windows, Linux and Mac OSX.

<br>

You need to use the OVMS fork of the Espressif ESP IDF. It is a direct clone of the Espressif IDF, but includes some modifications especially for OVMS. You can find that here::

[https://github.com/openvehicles/esp-idf](https://github.com/openvehicles/esp-idf)

and you can find setup guides at the same place.

\
The usual installation steps are:

<br>

1. Install pre-requisite tools
2. Install xtensa toolchain
3. Git clone the ESP IDF repository
4. Setup the environment

<br>

The latest ESP IDF instructions are [here](https://esp-idf.readthedocs.io/en/latest/get-started/index.html), (but don’t use the latest version of the esp-idf install instructions, because the OVMS fork is a couple of versions older) :\
<br>

<br>

Use the esp-idf instructions for the [release version matching the current OVMS branch version (currently: 3.3)](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html)&#x20;

[https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html)

selected from the esp-idf-readthedocs.io documentation, to ensure that you get the correct versions of the prerequisites and toolchain.

<br>

After installing the prerequisites and the xtensa toolchain, Git clone the OVMS ESP IDF repository:

<br>

$ git clone [https://github.com/openvehicles/esp-idf.git](https://github.com/openvehicles/esp-idf.git)

$ cd esp-idf

$ git submodule update --init --recursive

\
<br>

To later pull an ESP IDF update, issue:

<br>

$ cd esp-idf

$ git pull

$ git submodule update --recursive

<br>

Once you’ve got the Espressif ESP IDF installed, we recommend you try to compile one or more examples to make sure your environment works as expected.

<br>

Git clone the OVMS v3 repository and init the build configuration:

<br>

$ git clone [https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git)

$ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3

$ git submodule update --init --recursive

$ cd vehicle/OVMS.V3

$ cp support/sdkconfig.default.hw31 sdkconfig

$ make menuconfig

<br>

The config tool may prompt for some new config options, use the default values for all. Check the flasher serial port, leave other options at defaults.

<br>

Build and flash your first OVMS firmware to a connected V3 module:

<br>

$ make flash

<br>

Note to Mac OS X users with brew: If you have upgraded your OS, to High Sierra for instance, and you’ve already had tools installed via brew before: You will need to upgrade some component(s) such as bison as Apple has deeply modified some underlying libraries, otherwise you might end up having make commands fail. Launching the following command will download and install the adapted build even if it is the same version.

<br>

$ brew upgrade bison

<br>

This has been sufficient (with the proper paths) to get things working properly.

<br>

## Module USB Development Port![](https://lh7-us.googleusercontent.com/FY0Kok1e42Q_0EvxdrvTpMqX21-m38e_WHtAQs2O1-T22nojMOHctH0z2Rko91Zhf0BPLa_iglXWZIHKyJtYDhNNmUD1BEDZ3wjrqxowRpMnaQ3UU9h-EmE221nPn-_2AH4xWOet9gjfCG3a2RiZaA)![](https://lh7-us.googleusercontent.com/eFy27to7__ldz9WLt-Ippdpg0JE2hI8psocc9mh19R7N0pn0oGI9J-dEdf3FtPPpQqop-GdC79m--7UjgXknr6RuhrFqQmxma_6i5WAuImk7j0Wb2pvmDeymQt33j5QF7vZGT04c1BDZYiKpcAAX-g)

The base OVMS module has a micro USB port next to the big DB26 expansion connector. This is the port connected to the ESP-32 microcontroller. It uses a Silicon Labs CP2102 USB-to-UART controller. If your operating system doesn’t have this driver already installed, you can download and install it from the Silicon Labs website.

<br>

[https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

<br>

Linux note: if your distribution includes the braille display driver “brltty”, you may need to uninstall that, as it claims any CP2102 device to be a braille device. This applies e.g. to openSuSE 15.0.

<br>

There is a second USB port on the optional modem board (above the GSM and GPS antennas, and next to the SIM card slot). This provides direct access to the USB on the SIMCOM modem module, and requires special SIMCOM drivers. It is used for firmware updates, and direct debugging of the SIMCOM module, so can generally be ignored.

\
![Yellow, Triangle, Border, Exclamation, Mark, Caution](https://lh7-us.googleusercontent.com/oMh709pcuAU_qnlWfz-Qya-mYpKnepd_sTE7Hv_WNKziMbnhwr6ZRlT0_MbS5VMnNFAJfQ5WLSqB1tSWNVkgIqyBkcZaPAtpbXQf4gARApJDB2A87lwYubU3rWeYYNsG8hN3UvHgSZoNFWmK8IZXyA)

Note that OVMS v3 is currently in prototype stage, and has not received CE/FCC approval. In particular, while the v3.0 circuit board has protection diodes on the power supply pins, it will most likely require extra ESD and line noise filtering before approval. It is hobbyist kit.

\
As such, we recommend against directly connecting to the USB ports on your computer. Instead, please use a powered USB hub to ensure that the module receives adequate power, and there is some isolation between the module and your computer.

\
<br>

The module can be powered by USB (including the optional modem), and provides a serial console as well as flash programming capability. You can use Espressif’s ‘make monitor’ tool to connect to the module as a serial terminal.

<br>

$ make monitor

rst:0x1 (POWERON\_RESET),boot:0x1f (SPI\_FAST\_FLASH\_BOOT)

...

I (45) boot: ESP-IDF v2.1-2-g7138fb02 2nd stage bootloader

I (46) boot: compile time 09:50:02

I (79) boot: Enabling RNG early entropy source...

I (79) boot: SPI Speed      : 40MHz

I (79) boot: SPI Mode       : DIO

I (87) boot: SPI Flash Size : 16MB

I (100) boot: Partition Table:

I (111) boot: ## Label            Usage          Type ST Offset   Length

I (134) boot:  0 nvs              WiFi data        01 02 00009000 00004000

I (157) boot:  1 otadata          OTA data         01 00 0000d000 00002000

I (180) boot:  2 phy\_init         RF data          01 01 0000f000 00001000

I (204) boot:  3 factory          factory app      00 00 00010000 00400000

I (227) boot:  4 ota\_0            OTA app          00 10 00410000 00400000

I (250) boot:  5 ota\_1            OTA app          00 11 00810000 00400000

I (273) boot:  6 store            Unknown data     01 81 00c10000 00100000

...

I (1755) heap\_alloc\_caps: Initializing. RAM available for dynamic allocation:

I (1778) heap\_alloc\_caps: At 3FFAFF10 len 000000F0 (0 KiB): DRAM

I (1798) heap\_alloc\_caps: At 3FFC9D20 len 000162E0 (88 KiB): DRAM

I (1819) heap\_alloc\_caps: At 3FFE0440 len 00003BC0 (14 KiB): D/IRAM

I (1840) heap\_alloc\_caps: At 3FFE4350 len 0001BCB0 (111 KiB): D/IRAM

I (1862) heap\_alloc\_caps: At 40094FD0 len 0000B030 (44 KiB): IRAM

...

I (1883) cpu\_start: Pro cpu start user code

I (1940) command: Initialising COMMAND (1000)

I (1952) events: Initialising EVENTS (1200)

I (1954) config: Initialising CONFIG (1400)

...

I (1556) ovms\_main: Starting HOUSEKEEPING...

I (1556) housekeeping: Initialising HOUSEKEEPING Framework...

I (1616) housekeeping: Executing on CPU core 1

I (1616) housekeeping: Starting PERIPHERALS...

I (1616) peripherals: Initialising OVMS Peripherals...

I (1626) peripherals:   ESP32 system

I (1626) peripherals:   SPI bus

I (1626) peripherals:   MAX7317 I/O Expander

I (1636) peripherals:   ESP32 CAN

I (1636) peripherals:   ESP32 WIFI

I (1646) peripherals:   ESP32 BLUETOOTH

I (1646) peripherals:   ESP32 ADC

I (1656) peripherals:   MCP2515 CAN 1/2

I (1656) peripherals:   MCP2515 CAN 2/2

I (1666) peripherals:   SD CARD

I (1666) peripherals:   SIMCOM MODEM

I (1666) housekeeping: Starting USB console...

<br>

Welcome to the Open Vehicle Monitoring System (OVMS) - Async Console

OVMS >

There are some important things shown in that boot screen, so let’s look in some detail.

<br>

$ make monitor

rst:0x1 (POWERON\_RESET),boot:0x1f (SPI\_FAST\_FLASH\_BOOT)

<br>

The OVMS v3 module includes two push-button switches on the motherboard, BOOT and ENABLE. Pressing the ENABLE switch will reset the processor. Holding down the BOOT switch, while pressing ENABLE, will boot into firmware download mode.

<br>

To simplify development, and flashing of modules, OVMS includes some transistor logic controlled by async control lines (RTS, DTR, etc) to control this ENABLE and BOOT functionality. When you type “make flash”, Espressif will connect to the serial port, then manipulate the control lines to hold down BOOT and then toggle ENABLE, to switch to firmware download mode. By default, every time you type “make monitor”, Espressif will also toggle the ENABLE pin to reset the device. You can change this behaviour in “make menuconfig”, or use your own terminal emulator, to avoid this (if you don’t want it).

<br>

I (45) boot: ESP-IDF v2.1-2-g7138fb02 2nd stage bootloader

I (46) boot: compile time 09:50:02

I (79) boot: Enabling RNG early entropy source...

I (79) boot: SPI Speed      : 40MHz

I (79) boot: SPI Mode       : DIO

I (87) boot: SPI Flash Size : 16MB

<br>

The default flash in the ESP-32 WROOM-32 module we use is 4MB, but that is insufficient. So, OVMS includes an external 16MB flash and the ESP-32 chips we use are modified to permanently burn fuses inside the chip, in order to select and use this external flash. At the moment, we are using 40Mhz DIO mode to access this chip; but we may switch to QIO mode and increase the speed later when we are comfortable with the performance requirements and stability.

<br>

I (100) boot: Partition Table:

I (111) boot: ## Label            Usage          Type ST Offset   Length

I (134) boot:  0 nvs              WiFi data        01 02 00009000 00004000

I (157) boot:  1 otadata          OTA data         01 00 0000d000 00002000

I (180) boot:  2 phy\_init         RF data          01 01 0000f000 00001000

I (204) boot:  3 factory          factory app      00 00 00010000 00400000

I (227) boot:  4 ota\_0            OTA app          00 10 00410000 00400000

I (250) boot:  5 ota\_1            OTA app          00 11 00810000 00400000

I (273) boot:  6 store            Unknown data     01 81 00c10000 00100000

<br>

By default, OVMS partitions this 16MB flash to NVS (general parameter=value key storage), otadata (control data for the Over-The-Air update facility), phy\_init (RF data), factory (the firmware App flashed at the factory), ota\_1 (OTA image #1), ota\_2 (OTA image #2), and store (a FAT filesystem mounted as /store during boot).

<br>

The factory, ota\_0 and ota\_1 partitions are all 4MB in size - and that is the largest firmware image that can be loaded onto the chip. The otadata partition contains a pointer to one of these three partitions, to tell the bootloader which to map to during boot.

<br>

When first delivered, we will be running the factory firmware in the factory partition, and otadata will point to that. If an Over-The-Air update is performed, it will be downloaded to ota\_0 and otadata modified to point to ota\_0. Upon next reboot, the bootloader will then run the image in ota\_0. If a second Over-The-Air update is performed, while running in ota\_0 partition, it will be flashed to ota\_1, and then otadata modified to point to ota\_1. Note that all the operating addressing of all these images is the same, irrespective of the partition offset in the flash - the bootloader deals with mapping physical memory to these partitions, via it’s cache. If the bootloader fails to boot into an OTA partition, it will fall back to the factory partition. In this way, the factory partition is always there as a backup.

<br>

Note that ‘make flash’ will flash all these partitions (including bootloader, partition table, factory partition, etc). Generally, it is quicker to ‘make app-flash’ to flash just the factory application partition.

<br>

I (1755) heap\_alloc\_caps: Initializing. RAM available for dynamic allocation:

I (1778) heap\_alloc\_caps: At 3FFAFF10 len 000000F0 (0 KiB): DRAM

I (1798) heap\_alloc\_caps: At 3FFC9D20 len 000162E0 (88 KiB): DRAM

I (1819) heap\_alloc\_caps: At 3FFE0440 len 00003BC0 (14 KiB): D/IRAM

I (1840) heap\_alloc\_caps: At 3FFE4350 len 0001BCB0 (111 KiB): D/IRAM

I (1862) heap\_alloc\_caps: At 40094FD0 len 0000B030 (44 KiB): IRAM

<br>

Memory is limited. This is an embedded system. Take care.

<br>

I (1883) cpu\_start: Pro cpu start user code

I (1940) command: Initialising COMMAND (1000)

I (1952) events: Initialising EVENTS (1200)

I (1954) config: Initialising CONFIG (1400)

<br>

OVMS boots in a very defined order. If you need a component to hook into this initialisation system, it is generally best to contact the lead developers for information on where precisely to hook in.

<br>

I (1556) ovms\_main: Starting HOUSEKEEPING...

I (1556) housekeeping: Initialising HOUSEKEEPING Framework...

I (1616) housekeeping: Executing on CPU core 1

I (1616) housekeeping: Starting PERIPHERALS...

I (1616) peripherals: Initialising OVMS Peripherals...

I (1626) peripherals:   ESP32 system

I (1626) peripherals:   SPI bus

I (1626) peripherals:   MAX7317 I/O Expander

I (1636) peripherals:   ESP32 CAN

I (1636) peripherals:   ESP32 WIFI

I (1646) peripherals:   ESP32 BLUETOOTH

I (1646) peripherals:   ESP32 ADC

I (1656) peripherals:   MCP2515 CAN 1/2

I (1656) peripherals:   MCP2515 CAN 2/2

I (1666) peripherals:   SD CARD

I (1666) peripherals:   SIMCOM MODEM

I (1666) housekeeping: Starting USB console...

<br>

Welcome to the Open Vehicle Monitoring System (OVMS) - Async Console

OVMS >

<br>

Once the boot is complete, you’ll be presented with the OVMS async console prompt, and can type commands.

<br>

## ESP-32 WROOM-32 Module eFuses

As part of the factory production process for OVMS v3, we custom burn some ESP-32 eFuses on the WROOM-32 module to suite our requirements (in particular for external 16MB flash). If you ever replace the WROOM-32 module, or wish to use custom hardware with OVMS firmware and flash partition layout, you will need to custom-burn these eFuses. Below is the documentation for what we do.

<br>

espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_REG 1

espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_TIEH 1

espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_FORCE 1

espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_CLK 6

espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_Q 7

espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_D 8

espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_HD 9

espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_CS0 22

<br>

If you do it right, it will look like this:

<br>

Config fuses:

XPD\_SDIO\_FORCE         Ignore MTDI pin (GPIO12) for VDD\_SDIO on reset    = 1 R/W (0x1)

XPD\_SDIO\_REG           If XPD\_SDIO\_FORCE, enable VDD\_SDIO reg on reset   = 1 R/W (0x1)

XPD\_SDIO\_TIEH          If XPD\_SDIO\_FORCE & XPD\_SDIO\_REG, 1=3.3V 0=1.8V   = 1 R/W (0x1)

SPI\_PAD\_CONFIG\_CLK     Override SD\_CLK pad (GPIO6/SPICLK)                = 6 R/W (0x6)

SPI\_PAD\_CONFIG\_Q       Override SD\_DATA\_0 pad (GPIO7/SPIQ)               = 7 R/W (0x7)

SPI\_PAD\_CONFIG\_D       Override SD\_DATA\_1 pad (GPIO8/SPID)               = 8 R/W (0x8)

SPI\_PAD\_CONFIG\_HD      Override SD\_DATA\_2 pad (GPIO9/SPIHD)              = 9 R/W (0x9)

SPI\_PAD\_CONFIG\_CS0     Override SD\_CMD pad (GPIO11/SPICS0)               = 22 R/W (0x16)

DISABLE\_SDIO\_HOST      Disable SDIO host                                 = 0 R/W (0x0)

<br>

Note that this is a one-time operation. Once these eFuses are burned, the change is permanent and irreversible.

## Vehicle Firmware Overview

### Command Line Interpreter

NOTE: This documentation is no longer maintained.  Please see [https://docs.openvehicles.com/en/latest/cli/index.html](https://docs.openvehicles.com/en/latest/cli/index.html) for the current documentation.

<br>

The command line interpreter or command parser presented by the OVMS async serial console is constructed as a tree of command word tokens.  Enter a single "?" followed by \<RETURN> to get the root command list, like this:

<br>

OVMS# ?

.                       Run a script

bms                 BMS framework

boot                 BOOT framework

can                  CAN framework

...

<br>

A root command may be followed by one of a list of additional tokens called subcommands which in turn may be followed by further subcommands down multiple levels.  The command and subcommand tokens may be followed by parameters.  Use "?" at any level in the command

sequence to get the list of subcommands applicable at that point.  If the next item to be entered is a parameter rather than a subcommand, then a usage message will be displayed to indicate the required or optional parameters.  The usage message will also be shown if the command as entered is not valid.  The usage message is described in further detail below.

<br>

Command tokens can be abbreviated so long as enough characters are entered to uniquely identify the command, then optionally pressing \<TAB> will auto-complete the token.  If the abbreviated form is not sufficient to be unique (in particular if no characters have been&#x20;

entered yet) then \<TAB> will show a concise list of the possible subcommands and then retype the portion of the command line already entered so it can be completed.  Pressing \<TAB> is legal at any point in the command; if there is nothing more that can be completed automatically then there will just be no response to the \<TAB>.

<br>

The OvmsCommand::RegisterCommand() function is used to add command and subcommand tokens are added to the tree.  New commands are added to the root of the tree using the global MyCommandApp.RegiserCommand().  Subcommands are added as children of a command using the OvmsCommand pointer returned when RegisterCommand() is called for the parent, thus building the tree.  For example:

<br>

OvmsCommand\* cmd\_wifi = MyCommandApp.RegisterCommand("wifi","WIFI framework", wifi\_status);

cmd\_wifi->RegisterCommand("status","Show wifi status",wifi\_status);

cmd\_wifi->RegisterCommand("reconnect","Reconnect wifi client",wifi\_reconnect);

<br>

The RegisterCommand() function takes the following arguments:

<br>

* const char\* name – the command token
* const char\* title – one-line description for command list
* void (\*execute)(...) – does the work of the command
* const char \*usage – the "Usage:" line describing parameters
* int min – minimum number of parameters allowed
* int max – maximum number of parameters allowed
* bool secure – true for commands permitted only after "enable"
* int (\*validate)(...) – validates parameters as explained later

<br>

It's important to note that many of these arguments can and should be defaulted.  The default values are as follows:

<br>

* execute = NULL
* usage = ""
* min = 0
* max = 0
* secure = true
* validate = NULL

<br>

For example, for secure, non-terminal commands, such as the top-level "framework" commands like "bms" in the list of root commands shown earlier, the model should simply be:

<br>

RegisterCommand("name", "Title");

<br>

For secure, terminal (sub)commands that don't require any additional parameters, the model should be:

<br>

RegisterCommand("name", "Title", execute);

<br>

This model also applies if the command has children but the command itself wants to execute a default operation if no subcommand is specified.  It is incorrect to specify min = 0, max = 1 to indicate an optional subcommand; that is indicated by the presence of the execute function at the same time as a non-empty children array.

<br>

Any command with required or optional parameters should provide a usage string hinting about the parameters in addition to specifying the minimum and maximum number of parameters allowed:

<br>

RegisterCommand("name", "Title", execute, "usage", min, max);

<br>

The usage argument only needs to describe the parameters that follow this (sub)command because the full usage message is dynamically generated.  The message begins with the text "Usage: " followed by names of the ancestors of the this (sub)command back to the root of the tree plus the name of this (sub)command itself.  That is, the message starts with all the tokens entered to this point followed by additional description of subcommands or parameters that may be entered next, as determined by the usage string.

<br>

The usage string syntax conventions for specifying alternative and optional parameters are similar to those of usage messages in Unix-like systems.  The string can also include special codes to direct the dynamic generation of the message:

<br>

* $C expands to the list of children commands as child1|child2|child3.
* \[$C] expands to optional children as \[child1|child2|child3].
* $G$ expands to the usage string of the first child; this would typically used after $C so the usage message shows the list of children and then the parameters or next-level subcommands that can follow the children.  This is useful when the "usage" string is the same for all or most of the children as in this example:

<br>

Usage: power adc|can1|can2|can3|egpio|esp32|sdcard|simcom|spi|wifi deepsleep|devel|off|on|sleep|status

<br>

* $Gfoo$ expands to the usage of the child named "foo"; this variant would be used when not all the children have the same usage but it would still be helpful to show the usage of one that's not first.
* $L lists a separate full usage message for each of the children.  This provides more help than just showing the list of children but at the expense of longer output.
* For terminal (sub)commands (those with no children) that take additional parameters, the usage string contains explicit text to list the parameters:
*
  * Parameter names or descriptions are enclosed in angle brackets to distinguish the them from command tokens, for example "\<metric> \<value>".
  * Parameters that are optional are further enclosed in square brackets, like

"\<id> \<name> \[\<value>]".

* When there are alternative forms or meanings for a parameter, the alternatives are separated by vertical bar as in "\[\<task names or ids>|\*|=]" which indicates that the parameter can be either of the characters '\*' or '=' instead of a list of task names or ids.  An variant form encloses the alternatives in curly braces as in

"\<param> {\<instance> | \*}".

* One or more additional lines of explanatory text can be included like this: "\<id>\nUse ID from connection list / 0 to close all".

<br>

For non-terminal commands (those with children subcommands) the usage argument can be omitted because the default value of "" is interpreted as "$C".  For commands that have children subcommands that are optional (because an execute function is included) the default usage argument is interpreted as “\[$C]”.

<br>

Most commands do not need to specify a validate function.  It supports two extensions of the original command parser design:

<br>

1. For commands that store the possible values of a parameter in a NameMap\<T> or CNameMap\<T>, the validate function enables \<TAB> auto-completion when entering that parameter.  For example, see the "config" command in main/ovms\_config.cpp.
2. The original design only allowed parameters to be collected by the terminal subcommand.  That forced an unnatural word order for some commands.  The validate function enables non-terminal subcommands to take one or more parameters followed by multiple children subcommands.  The parameters may allow \<TAB> completion if the possible values are stored in NameMap\<T> or CNameMap\<T> or they could be something else like a number that can be validated by value.  The validate function must indicate success for parsing to continue to the children subcommands.  The return value is the number of parameters validated if successful or -1 if not.

<br>

The "location" command is an example that includes an intermediate parameter and also utilizes the "$L" form of the usage string:

<br>

OVMS# location action enter ?

Usage: location action enter \<location> acc \<profile>

Usage: location action enter \<location> homelink 1|2|3

Usage: location action enter \<location> notify \<text>

<br>

See components/ovms\_location/src/ovms\_location.cpp for the implementation of the location\_validate() function and the RegisterCommand() calls to build the command subtree.

\
<br>

## OVMS Vehicle Modules

All functionality to support a particular type of vehicle should be implemented in OVMS vehicle modules. These are in the following directories:

<br>

components/vehicle\_\*

<br>

Steps to take, to stub support for a new vehicle type, are:

<br>

1. Decide on a short type code for the vehicle (upper case, minimum two characters), that doesn’t conflict with any existing vehicle (vehicle list shows the currently defined vehicles). Build the code from an abbreviation of the brand/manufacturer and an abbreviation of the vehicle. Examples:
2.
   1. TR – Tesla Roadster
   2. RT – Renault Twizy
   3. VWUP – VW e-Up

<br>

2. Decide on a long vehicle name. This is normally just the vehicle name itself (such as “Tesla Roadster”).\
   <br>
3. Decide on a unique log tag to use in all your modules. Use prefix “v-” followed by a lower case short name of the vehicle for the log tag. The logging system allows to set different log levels per log tag. See existing vehicle modules for reference on how to define and use the log tag. Examples:
4.
   1. “v-twizy”
   2. “v-vweup”
   3. “v-bmwi3”\
      <br>
5. Decide on a unique namespace prefix for your custom configuration, metrics and commands. The custom namespace shall be a lower case code beginning with “x” followed by at least two characters for the vehicle type. Try to keep this at three characters in length. Examples:
6.
   1. “xrt” – Renault Twizy
   2. “xvu” – VW e-Up
   3. “xi3” – BMW i3/i3s\
      <br>
7. Create the directory structure\
   \
   components/vehicle\_\<lower-case-long-name>\
   /component.mk\
   /src\
   /vehicle\_\<lower-case-long-name>.{h,cpp}\
   \
   You can use vehicle\_none as a template for this.\
   <br>
8. Change main/Kconfig to add a menu configuration item in the “Vehicle Support” section\
   \
   OVMS\_VEHICLE\_\<upper-case-long-name>\
   <br>
9. Change your component.mk to selectively compile in support for your vehicle, based on that CONFIG\_OVMS\_VEHICLE\_\* menu configuration.\
   <br>
10. Add all the above to git, make sure it compiles, commit and push.

<br>

Once basic support is stubbed, as above, you can start work on actual implementation of the vehicle module. We suggest you look at vehicle\_teslaroadster for a practical example of how things should be done. These notes may help.

<br>

* A short OvmsVehicleXXXInit object handles registration of your vehicle name, with associated vehicle implementation object, at init\_priority 9000. All vehicle initialise at this priority level, unless they are dependent on other vehicle modules.\
  <br>
* A reception queue, and task, will be created and managed for you automatically.\
  <br>
* Create a member function “void IncomingFrameCan1(CAN\_frame\_t\* p\_frame)” in your vehicle implementation object. This will be used to receive incoming CAN bus messages on CAN bus #1. You can also create IncomingFrameCan2 and IncomingFrameCan3 for the other two buses (if you require). The vehicle framework will automatically deliver CAN bus messages to your functions.\
  \
  <br>
* Implement the constructor for your vehicle implementation. You will need to define the CAN buses your vehicle requires in the vehicle constructor function, with RegisterCanBus(int bus, CAN\_mode\_t mode, CAN\_speed\_t speed). Here is a simple example:\
  \
  OvmsVehicleTeslaRoadster::OvmsVehicleTeslaRoadster()\
  &#x20; {\
  &#x20; ESP\_LOGI(TAG, "Tesla Roadster v1.x, v2.x and v3.0 vehicle module");\
  &#x20; RegisterCanBus(1,CAN\_MODE\_ACTIVE,CAN\_SPEED\_1000KBPS);\
  &#x20; }\
  <br>
* Implement a destructor for your vehicle implementation to perform any necessary cleanup. The base vehicle module destructor will automatically handle cleanup of the task, queue, and any CAN buses you are using.\
  <br>
* Implement your IncomingFrameCanX handlers to process the incoming CAN frames. You will usually be decoding the messages, and updating metrics with the decoded vehicle data, appropriately.

<br>

You can use the ‘vehicle set …’ console command to switch to your vehicle.

<br>

Note that vehicle specific command registration can also be made in the OvmsVehicleXXXInit constructor. This is the preferred mechanism for implementing vehicle-specific commands. You can use MyVehicleFactory.m\_currentvehicle to make sure a vehicle is currently set to run, and VehicleName() on that, to ensure it is your vehicle type.

## Vehicle Metrics

OVMS v3 is all about ‘metrics’. Vehicle modules update the metrics, and apps consume them via network protocols. A metric is a single piece of information, and its associated current value.

<br>

The metrics subsystem is implemented in main/ovms\_metrics.{h,cpp} as a C++ object. The primary interface to metrics is via the MyMetrics static object. Using that interface, new metrics can be registered, and values set. In addition, listeners can be established to be notified whenever a particular metric changes.

<br>

The metrics themselves are implemented in a virtual base class OvmsMetric. Currently, OVMS supports metrics of types boolean (OvmsMetricBool), integer (OvmsMetricInt), floating point (OvmsMetricFloat) and string (OvmsMetricString). All metric types support the base functionality on OvmsMetric for setting and reading the current value as strings (converting as necessary to the base data type), as well as indicators for whether an initial value has been defined, and for tracking modifications.

<br>

A global METRICS\_MAX\_MODIFIERS is used to define the maximum number of Modifiers (services tracking modifications to metrics). This is implemented internally as a bitmask. Every time a metric is modified, all the bits are set true. Then, individual modifiers can track their own individual bit, and clear as necessary. Modifiers themselves register to receive their own unique modifier bit number with MyMetrics.RegisterModifier(). In this way, modifiers can choose to use their modifier bit as they see fit. For example, the server protocols register as modifiers and clear their modifier bit when they send the data to the server; in this way, they can reduce the data transmissions by only sending modified metrics.

<br>

Standardised metrics are automatically registered on system boot by the code in  main/metrics\_standard.{h,cpp}. In addition, a static object StandardMetrics is defined, with member variables pointing to each of the standard metrics. This allows fast, efficient, type safe, access to the standardised metrics. For example:

<br>

StandardMetrics.m\_v\_bat\_soc->SetValue(42);

<br>

Vehicle-specific metrics can be registered and maintained by individual vehicle modules. In most cases, a vehicle module should maintain a pointer to the registered metric (using a member variable of the vehicle object) for fast and efficient access. The registration itself is automatic (all that is necessary is to create a metric object from one of the OvmsMetric derived metric types, and they will be registered automatically, by name). In most cases, the vehicle module initialisation should use MyMetrics.Find(name) to search for a metric by name and store the resulting pointer. If not found, the metric should be first-time registered.

<br>

There are some console commands available to view and manipulate the metrics (for diagnostic and testing purposes):

<br>

OVMS > metrics list

m.freeram                      46716

m.hardware                     OVMS WIFI BLE BT cores=2 rev=ESP32/1

m.serial                       aa:bb:cc:dd:ee:ff

m.tasks                        18

m.version                      3.0.0/factory/main build Sep 22 2017 06:33:43

s.v2.connected                 yes

s.v2.peers                     0

v.b.12v                        0

<br>

OVMS > metrics set \<metric> \<value>

<br>

Metrics have several common attributes that deserve further explanation:

<br>

* Last Modified Date: This is accessible via LastModified(). Note that this date is the time the metric was last updated. If a metric is updated, but the value is unchanged, the last modified date will be updated, but the modified bit flags will not.\
  <br>
* Stale: This is accessible via IsStale(), and setable via SetStale(bool stale). Whenever a metric is updated (irrespective of whether the value has been changed or not), the stale flag is cleared.\
  <br>
* AutoStale: This is configurable when the metric object is created, or with the SetAutoStale(int seconds) function. If set (non zero), the stale flag will be automatically set if the metric value has not been updated for the specified number of seconds.

<br>

## Configuration

The configuration for OVMS v3 is stored on ESP32 flash, under vfs mount /store/ovms\_config. Under normal configuration, that is a protected path and the normal VFS operations (cp, cat, etc) will not be permitted. As a developer, you can disable that protection via a menuconfig option (Component Config -> OVMS -> Developer Options -> “Disable the usual protections for configuration visibility in VFS”).

<br>

The general design of the configuration store is that configuration items are identified by:

<br>

Parameter \[instance] = value

<br>

The parameters must be registered, usually during boot-time initialisation:

<br>

RegisterParam(

&#x20; std::string name,

&#x20; std::string title,

&#x20; bool writeable=true,

&#x20; bool readable=true);

<br>

The ‘writable’ and ‘readable’ flags control whether the user has write and/or read access to all the instances and values within that parameter. Firmware modules themselves always have full read/write access, and these only control user console access permissions. For example, you might set a store for passwords as writable=true, readable=false, so users could set passwords, but not view them. Similarly, a parameter maintained by a firmware module (and not the user) might be writable=false, readable=true.

<br>

If you don’t require an instance, then simply use ‘\*’ or ‘’ (empty string).

<br>

The configuration system provides ‘config list’ and ‘config set’ commands to maintain these configuration values.

<br>

Configuration values themselves are always stored internally as strings. Convenience functions are provided to access these as String, Int, Float and Bool.

<br>

###

###

###

###

###

### Access config flash filesystem

You can read and write the flash content using the esptool.py, and you can mount the retrieved image using a loopback device to access the config store on your PC.

<br>

Example: to retrieve and mount the FAT filesystem using losetup:

<br>

$ cat partitions.csv

\# OVMS 16MB flash ESP32 Partition Table

\# Name,   Type, SubType, Offset,   Size

nvs,      data, nvs,     0x9000,  0x4000

otadata,  data, ota,     0xd000,  0x2000

phy\_init, data, phy,     0xf000,  0x1000

factory,  app,  factory, 0x10000,  4M

ota\_0,    app,  ota\_0,   ,         4M

ota\_1,    app,  ota\_1,   ,         4M

store,    data, fat,     ,         1M

<br>

$ bc

65536+(3\*4\*1024\*1024)

\==> 12648448

1024\*1024

\==> 1048576

<br>

$ \~/esp/esp-idf/components/esptool\_py/esptool/esptool.py --port /dev/tty.SLAB\_USBtoUART --baud 921600 read\_flash 12648448 1048576 fatty

esptool.py v2.2.1

…

1048576 (100 %)

Read 1048576 bytes at 0xc10000 in 12.9 seconds (649.4 kbit/s)…

<br>

$ file fatty

fatty: DOS/MBR boot sector, code offset 0xfe+2, OEM-ID "MSDOS5.0", Bytes/sector 4096, FAT  1, root entries 512, sectors 250 (volumes <=32 MB) , Media descriptor 0xf8, sectors/FAT 1, sectors/track 63, heads 255, serial number 0x210000, unlabeled, FAT (1Y bit by descriptor)

<br>

$ mkdir f

$ losetup /dev/loop0 fatty

$ mount -t vfat /dev/loop0 f

$ ls -l f

drwxr-xr-x 0 root root 4096 Jan  1  1980 ovms\_config

<br>

$ umount f

$ losetup -d /dev/loop0

<br>

On macOS, use hdiutil instead of losetup:

<br>

$ hdiutil attach -imagekey diskimage-class-CRawDiskImage -nomount fatty

/dev/disk11

$ mount\_msdos /dev/disk11 f

$ ls -l f

drwxr-xr-x 0 root root 4096 Jan  1  1980 ovms\_config

<br>

$ umount f

$ hdiutil detach /dev/disk11

“Disk11” ejected.

<br>

See esptool.py --help on writing back a modified image.

To wipe the entire flash, and re-flash with latest:

<br>

$ make erase\_flash

$ make flash

<br>

You could probably just erase that one flash partition, but the above is quick and simple.

## Module Circuit Design

The OVMS v3 module circuit is designed to be extremely expandable, and to serve as the base for vehicle CAN bus hacking.

### Main Board Overview

![ovms\_v3\_main.png](https://lh7-us.googleusercontent.com/3a93ZiIBZxSXfDDGhgnaSt1DAqVT3zEvakja8cE2kHxKRWlgYPGf9bOXS-bUM09RgsxV3KGo4bUdH7X6_cBGQNyrNAyU7gbhb1Xpyx3keUimxZOuDmn2HW6QLev_NM3ff10tohNQ63u95g20gHeMBg)

At the centre of the OVMS main board is an ESP32 WROOM-32 module. From there, we have modules for Storage, Power & USB, and Expansion Connectors.

<br>

### WROOM-32 and Support Circuits

![ovms\_v3\_mcu.png](https://lh7-us.googleusercontent.com/MHHjBBsPcKD-XfoPdcDLRSLvDmH3yDIbXg-tQMDLi7UStnyjD32AmbcmZo6mrAzModlgBp-0Z70P6CdnRrBFMNeWFMv5CqY1jUiGVRoz3it1m7aSUiGDxP8FzU99dvxw8_mTGh_PXJlG8KGnMJjl8g)

<br>

#### 128MB External SPI Flash![ovms\_v3\_mcu2.png](https://lh7-us.googleusercontent.com/EtTNZ8uaxcu9QFOZYleILrA7ayicHt8MpjEkas_8vKtuo753008cOxLeKqU2M1VOZJlFwsR25ycr7YXzFhk8QubquZZ4r_14KEGFx7zbf6E0fNL8hQkm5dcUS7Mv2It75iMv3nVndXGvOFhteahlNQ)

The on-board 4MB SPI flash of the ESP32 WROOM-32 module is not used by OVMS v3. Instead, an external W32R128FV 128MB SPI flash is used for bootloader, firmware, and configuration storage. This is connected to the same SPI bus lines as the onboard 4MB flash, but uses a FL\_CS2 (IO22) as the SPI chip select.

<br>

#### MAX7317 GPIO Expansion

![ovms\_v3\_mcu3.png](https://lh7-us.googleusercontent.com/GzLULrrnTmNdGzh84PpjTpiH3y6_djkFymGKJeM7lzPZX-8wrJepfSvuMcn50NR7Ub7VU4RXAtRnsSWsqzDgq4qHGJVbIHxC_-T6MYnohvQYGH5tu0HNUlsKSYPSIlCKFX5GNkb18cfPEB9vqkj1tg)

To expand on the number of GPIO available, a MAX7317 GPIO expansion chip is used, and driven by the 2nd ESP32 SPI bus. This shares the same bus as the two MCP2515 CAN bus controllers, and has chip select on CP\_CS3 (IO21). To allow this chip to co-exist with others on that shared SPI bus, a 74AHCIG125 tri-state buffer is used to isolate the SP\_MISO line (driven from the same SP\_CS3 line as the MAX7317 itself).

<br>

The MAX7317 provides 10 EGPIO pins (labelled P0 through P9), which can be configured as either input or output pins. The first few of these are reserved, and used by other modules in the OVMS v3 system.

\
<br>

| MAX7317 Pin Assignments |              |                                                 |
| ----------------------- | ------------ | ----------------------------------------------- |
| MAX7317 EGPIO           | Pin          | Comment                                         |
| P0                      | MDM\_EN      | Modem Enable Line (for expansion modem control) |
| P1                      | SW\_CTL      | Switched 12V control                            |
| P2                      | ESP32CAN\_EN | ESP32 CAN SN65 Transceiver power control        |
| P3                      | MDM\_DTR     | Modem DTR Line (for expansion modem control)    |
| P4                      | EGPIO3       | General purpose GPIO (available for expansion)  |
| P5                      | EGPIO4       | General purpose GPIO (available for expansion)  |
| P6                      | EGPIO5       | General purpose GPIO (available for expansion)  |
| P7                      | EGPIO6       | General purpose GPIO (available for expansion)  |
| P8                      | EGPIO7       | General purpose GPIO (available for expansion)  |
| P9                      | EGPIO8       | General purpose GPIO (available for expansion)  |

\
\
<br>

#### ESP32 Boot/Flash Control via USB

\
![ovms\_v3\_mcu4.png](https://lh7-us.googleusercontent.com/GUaa-T6vJrL3DBCoavk15163Qkt7PH48togIvPGLKkwWCW9l6eDGgJN-RfKBIu4EOJlxR2shTsefYlJl6JJlDXOIo09mcFh8ieiocsIS9_KJn-Kxrln5vzbvkZh-IQnLlL9MY7e3vpFk7ti0nwHqaQ)

The DTR and RTS pins from CP2102 USB control lines are used in the normal ESP32 fashion to control bootloader boot/flash mode, using transceiver logic. These pins control the ESP32\_EN and ESP32\_IO0 pins during boot time (also controllable via the two push button switches on the circuit board).

\
<br>

#### AOZ1280CI Power

![ovms\_v3\_mcu5.png](https://lh7-us.googleusercontent.com/eY5qOB5EgSqBEyqnFUMQb6MJRv6amQ4fsQb-OUy8ZEPcV48OeRrVxeMCC-4Mx9c0i4F5zW4UsXtUav0wkEYo2Q62IN1-gECxD2uycrihB7IRT9qtnah8__Y9CnMqajJzdDPLD6SWcgkUkqGJ9VFPOw)

An AOZ1280CI switched mode power supply chip is used to convert either USB 5V or external 12V incoming power to regulated 3.3V. Diodes are used for polarity protection, as well as to correctly protect the USB 5V side from external 12V power. A shared ground scheme is used.

\
\
<br>

#### BTS452R Switched 12V Power![ovms\_v3\_mcu7.png](https://lh7-us.googleusercontent.com/ghuF4k6a-KzNvnjYjduGYHc__tfGlzu9EYyGrtvA0lWizenHuO8wE0mO0hQiyR2Wec4mqsssQVJOX2teSfjg96mx1MZ_7osUTW-01_KbJK0rb6PCj79EFepjXe4xh4ssaPjNC2FXdOJZne5KN9qakQ)

<br>

A BTS452R, connected to SW\_CTL on the MAX7317 GPIO expansion chip, is used to provide switched 12V power on the DA26 expansion connector.

<br>

Note that this is only switched the main external 12V power line, so will provide whatever power that line provides.

<br>

#### CP2102 USB

\
![ovms\_v3\_mcu6.png](https://lh7-us.googleusercontent.com/g1V5xXiES8jwSAsyhfFaa3JAn10HRdO0WUj1_AznHfb7NP0Ho7XeNzIIdTcNfZHL558V3hvCfzd7Q56AsqjwaqArhJQ6U2w4-FszjcXWNYwFumAfrlfuFU-nI_WPy6L3dsYwL4y6O5nYHGbsVTf8Hw)

A CP2102 USB-async chip is used for connection to the ESP32 primary asynchronous console port. This is used for terminal access, low-level chip and eFuse access, as well as firmware upload.

<br>

As previously described, the CSL\_DTR and CSL\_RTS lines are used for control of the ESP32 during boot, and can be used to reset the system and/or enable firmware download modes.

\
\
\
\
\
\
\
\
\
<br>

#### Micro SD Card

\
![ovms\_v3\_mcu8.png](https://lh7-us.googleusercontent.com/R2qyPC-iK0CKjYBdAefmrz4Zp1r7obFkbZ7q_3SrFY5q5Api_7CRo98MiADwW_SniDXU2IMwhwnXebWCIkkTyDhKNbAesmS1UokhrCCGhGKYMte37kLT7TCc-wihrMvWITsqI_0mZXRKA5xJ8A1mFw)

A standard Micro SD card is available on the third SPI bus of the ESP32. This is wired in both 1 and 4 line modes, and includes a SD\_DET GPIO for detection of card insertion.

\
\
\
\
<br>

| ESP32 WROOM-32 Pin Assignments |            |            |                                      |
| ------------------------------ | ---------- | ---------- | ------------------------------------ |
| ESP32                          | Function   | OVMS       | Comment                              |
| 1                              | GND1       | GND        | Signal Ground                        |
| 2                              | +3V3       | +3.3V      | +3.3v from AOZ1280CI circuit         |
| 3                              | EN         | ESP32\_EN  | ESP32 enable (reset) control         |
| 4                              | SENSOR\_VP | ADC\_IN    | ADC voltage divider input            |
| 5                              | SENSOR\_VN | SD\_DET    | SD CARD detect                       |
| 6                              | IO34       | SP\_INT1   | MCP2551 #1 interrupt line            |
| 7                              | IO35       | SP\_INT2   | MCP2551 #2 interrupt line            |
| 8                              | IO32       | EXP\_1     | ESP32 general purpose free expansion |
| 9                              | IO33       | EXP\_2     | ESP32 general purpose free expansion |
| 10                             | IO25       | CAN\_TXD   | ESP32 CAN TXD to SN65                |
| 11                             | IO26       | CAN\_RXD   | ESP32 CAN RXD from SN65              |
| 12                             | IO27       | SP\_CS2    | MCP2551 #2 CS line                   |
| 13                             | IO14       | SD\_CLK    | SD CARD clock                        |
| 14                             | IO12       | SD\_DATA2  | SD CARD DATA2                        |
| 15                             | GND2       | GND        | Signal Ground                        |
| 16                             | IO13       | SD\_DATA3  | SD CARD DATA3                        |
| 17                             | SD2        | FL\_HOLD   | W32R128FV SPI Flash HOLD             |
| 18                             | SD3        | FL\_WP     | W32R128FV SPI Flash WP               |
| 19                             | CMD        | FL\_CS1    | WROOM-32 4MB SPI Flash CS            |
| 20                             | CLK        | FL\_SCK    | W32R128FV SPI Flash  SCK             |
| 21                             | SD0        | FL\_SDO    | W32R128FV SPI Flash SDO              |
| 22                             | SD1        | FL\_SDI    | W32R128FV SPI Flash SDI              |
| 23                             | IO15       | SD\_CMD    | SD CARD CMD                          |
| 24                             | IO2        | SD\_DATA0  | SD CARD DATA0                        |
| 25                             | IO0        | ESP32\_IO0 | ESP32 IO0 Firmware ‘boot’ line       |
| 26                             | IO4        | SD\_DATA1  | SD CARD DATA1                        |
| 27                             | IO16       | MDM\_TXD   | TX data to optional modem            |
| 28                             | IO17       | MDM\_RXD   | RX data from optional modem          |
| 29                             | IO5        | SP\_CS1    | MCP2551 #1 CS line                   |
| 30                             | IO18       | SP\_CLK    | SPI bus CLK                          |
| 31                             | IO19       | SP\_MISO   | SPI bus MISO                         |
| 32                             | n/c        | n/c        | <p><br></p>                          |
| 33                             | IO21       | SP\_CS3    | MAX7317 CS line                      |
| 34                             | RXD0       | CSL\_TXD   | TXD to USB async console             |
| 35                             | TXD0       | CSL\_RXD   | RXD from USB async console           |
| 36                             | IO22       | FL\_CS2    | W32R128FV SPI Flash CS               |
| 37                             | IO23       | SP\_MOSI   | SPI bus MOSI                         |
| 38                             | GND3       | GND        | Signal Ground                        |

### CAN Buses

The OVMS v3 module has support for three CAN buses.

* CAN1 uses the ESP32’s own on-board CAN controller
* CAN2 uses a MCP2515 SPI CAN controller
* CAN3 uses a MCP2515 SPI CAN controller

All three uses SN65 3.3v transceivers.

<br>

#### CAN1 - On Board![ovms\_v3\_can1.png](https://lh7-us.googleusercontent.com/A8PKe7G7AG7XdO-T25yp2Z5f9hLsAQ8wFITAI1dEMrW6uodFl4EDDG1qjl-3tm_EJkevGWvvclDwZbmfBU6sg1mlgdxbi-Jpkxtl_0wi8DAiN2adaHRr3eddbFymN87Fz-xijMR7u84oDik_BWFmGw)

The CAN1 bus uses the ESP32 on-board CAN controller and an external SN65 3.3v transceiver. Power control of the transceiver is via the ESP32CAN\_EN line of the MAX7317 GPIO expansion system.

<br>

#### CAN2 and CAN3 via MCP2515

![ovms\_v3\_can2.png](https://lh7-us.googleusercontent.com/1ocazeH6B_Q8fn7Q-qHo8y6NNamqkgBy2V2fLp8wpn9vAPUxP-3JNJsVK7Z_rscgutzybw-4CvPLEq5p4uUHt3f34JTDym2XjRSeJzs8lpG9NrBPswzndG4kLsjA__iTVbZjPzEFRFvJ-Z-fML9RwA)

CAN2 and CAN3 are via MCP2515 SPI controllers and SN65 3.3v transceivers. Power control of the transceivers is via RX0BF/RX1BF GPIO outputs from the MCP2515 controllers.

<br>

### Expansion

There are three expansion connectors on the OVMS v3 module. The connections, and wiring, for these is as follows.

\
<br>

#### Internal Expansion Bus![ovms\_v3\_exp1.png](https://lh7-us.googleusercontent.com/UbMqvGYbkBlSAR2tY8u0kZSbt2_pqxZUcbDvwdfpjXEcb32-vYt8CHoi0hDAnCpygqRQmzI_jjER2cYV8bau9e5gzkPUed1qzDXGK8JinYdoPL_GB4alffbDEGQ60nqXJ72GH2gb86uPmSJZBPs-ZA)

<br>

The internal expansion bus consists of two rows of 14 pins and is designed to be stackable. It exposes the EGPIO pins from the MAX7317 GPIO expansion chip, as well as available GPIO and bus pins direct from the ESP32 microcontroller on the ESP WROOM-32 module. Input/Output pins are also available from/to the DA26 external expansion connector.

\
<br>

#### DA26 External Expansion Connector![ovms\_v3\_exp2.png](https://lh7-us.googleusercontent.com/wEOgYAmcA5ajmwqnscsPBU_EyExp_bqJqf64oyAUwkSKKcaOmG92deJiFDUdHw_aBnhCgh7fcBlVjq0bMd18vOovOUgzAkxCCPIfDBhUOX7yl7sQ565xP0wOLDa39fFAExM8fv2-SrpsujspE__ZKw)

<br>

The DA26 external expansion connector is designed to be used for connection to external devices, for expansion of core functionality It exposes the GEP 1..7 pins from the internal expansion connector, as well as all CAN buses, power sources, etc.

<br>

In particular, a switched 12V power supply is available from this connector.

\
<br>

| DA26 Expansion Connector Pin Assignments |          |                                      |
| ---------------------------------------- | -------- | ------------------------------------ |
| Pin                                      | Function | Comment                              |
| 1                                        | MDM\_RXD | Modem receive data line              |
| 2                                        | MDM\_EN  | Modem enable control line            |
| 3                                        | GEP\_6   | General Expansion Output #6          |
| 4                                        | GEP\_4   | General Expansion Output #4          |
| 5                                        | CAN0\_L  | First CAN bus (CAN1) low             |
| 6                                        | CAN2\_L  | Third CAN bus (CAN3) low             |
| 7                                        | CAN1\_L  | Second CAN bus (CAN2) low            |
| 8                                        | GND      | Ground signal line                   |
| 9                                        | EXT\_12V | External 12V power supply            |
| 10                                       | EXP\_1   | ESP32 general purpose free expansion |
| 11                                       | EXP\_2   | ESP32 general purpose free expansion |
| 12                                       | MDM\_TXD | Modem transmit data line             |
| 13                                       | GEP\_5   | General Expansion Output #5          |
| 14                                       | n/c      | <p><br></p>                          |
| 15                                       | CAN0\_H  | First CAN bus (CAN1) high            |
| 16                                       | CAN2\_H  | Third CAN bus (CAN3) high            |
| 17                                       | CAN1\_H  | Second CAN bus (CAN2) high           |
| 18                                       | SW\_12V  | Switched 12V                         |
| 19                                       | GEP\_1   | General Expansion Output #1          |
| 20                                       | GEP\_2   | General Expansion Output #2          |
| 21                                       | GEP\_7   | General Expansion Output #7          |
| 22                                       | GEP\_3   | General Expansion Output #3          |
| 23                                       | GND      | Ground signal line                   |
| 24                                       | +3.3V    | Regulated 3.3v power                 |
| 25                                       | n/c      | <p><br></p>                          |
| 26                                       | n/c      | <p><br></p>                          |

\
<br>

#### DB9 External Expansion Connector![ovms\_v3\_exp3.png](https://lh7-us.googleusercontent.com/NBjETVjkpPuXlqoGyT6XV8WFJjaSHRRysvd4d8gpFQOAE8hy-auQS2HbnAJL3C9Fuy7x6otZCOcF7QyIK_WdyDN6FHRXYFVbLDOJmaW9S6s84vQbo9bwGM337RV839E5bb8sb2HEyXD1cKgw2vwLVQ)

<br>

The OVMS v3 module includes a DB9 external expansion connector, compatible with the OVMS v2 design but exposing the extra two CAN buses available in OVMS v3.

\
\
\
<br>

| DB9 Expansion Connector Pin Assignments |          |                            |
| --------------------------------------- | -------- | -------------------------- |
| Pin                                     | Function | Comment                    |
| 1                                       | n/c      | <p><br></p>                |
| 2\*                                     | CAN0\_L  | First CAN bus (CAN1) low   |
| 3\*                                     | GND      | Signal ground              |
| 4                                       | CAN1\_L  | Second CAN bus (CAN2) low  |
| 5                                       | CAN1\_H  | Second CAN bus (CAN2) high |
| 6                                       | CAN2\_L  | Third CAN bus (CAN3) low   |
| 7\*                                     | CAN0\_H  | First CAN bus (CAN1) high  |
| 8                                       | CAN2\_H  | Third CAN bus (CAN3) high  |
| 9\*                                     | EXT\_12V | External 12v power supply  |

<br>

\* OVMS v2 compatible pin

## Conclusions

<br>

{% file src="../../.gitbook/assets/OVMS v3 Developer Guide.pdf" %}

{% file src="../../.gitbook/assets/OVMS v3 Developer Guide.rtf" %}
