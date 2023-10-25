# How to Build OVMS for ESP32

OVMS

\


Open Vehicle Monitoring System

\


\


\


\


\


[www.openvehicles.com](http://www.openvehicles.com)\
\
OVMS Developer Guide

v3.0.2 (24th August 2022)

\
For OVMS Hardware Module v3.x and Firmware v3.x.x

\


History

\


v3.0.0 20th Sep 2017 Initial version written

v3.0.1 20th Sep 2020 New chapter: Developing with Visual Studio Code

v3.0.2 24th Aug 2022 Minor edit to title of tools section for Linux/Mac

\


Table of Contents

\


Welcome 4

A short history of OVMS 4

Development Overview 6

Developing with Visual Studio Code (on Windows) 6

ESP-IDF (toolchain) 7

Using a higher toolchain/xtensa version 7

Install OVMS’s own ESP-IDF 7

Get and build the OVMS source code 8

Optional: Flashing the OVMS hardware directly 9

Install USB driver for the OVMS 9

Tell ESP-IDF the serial port 9

Flash the OVMS 9

Install and configure portable Visual Studio Code and Git 9

Install VSC portable 10

Install Git for Windows portable 10

Configure VSC 10

Coding OVMS in VSC 12

Vehicle Firmware Development Tools (Linux/Mac) 13

Module USB Development Port 15

ESP-32 WROOM-32 Module eFuses 20

Vehicle Firmware Overview 21

Command Line Interpreter 21

OVMS Vehicle Modules 25

Vehicle Metrics 28

Configuration 30

Access config flash filesystem 35

Module Circuit Design 37

Main Board Overview 37

WROOM-32 and Support Circuits 38

128MB External SPI Flash 38

MAX7317 GPIO Expansion 39

ESP32 Boot/Flash Control via USB 40

AOZ1280CI Power 41

BTS452R Switched 12V Power 41

CP2102 USB 42

Micro SD Card 42

CAN Buses 45

CAN1 - On Board 45

CAN2 and CAN3 via MCP2515 45

Expansion 46

Internal Expansion Bus 46

DA26 External Expansion Connector 46

DB9 External Expansion Connector 48

Conclusions 49

Welcome

The OVMS (Open Vehicle Monitoring System) team is a group of enthusiasts who are developing a means to remotely communicate with our cars, and are having fun while doing it.

&#x20;

The OVMS module is a low-cost hardware device that you install in your car simply by installing a SIM card, connecting the module to your car’s Diagnostic port connector, and positioning a cellular antenna. Once connected, the OVMS module enables remote control and monitoring of your car.

&#x20;

This document presents an overview of the development tools and techniques you will need to work on the OVMS system. You might be extending what OVMS does already (either for general consumption, or for your own private use), adding support for a new vehicle, or using the OVMS framework to implement something completely different. Whatever your purpose, please remember that OVMS is an Open Source project without restrictions, that has got to where it is today by the contributions of so many; so please try to share what you yourself do with it.

A short history of OVMS

\


\


The Open Vehicle Monitoring System (OVMS) started out as a hobbyist project to bring cellphone control to the Tesla Roadster electric car. Three hobbyist, Michael Stegen, Mark Webb-Johnson, and Sonny Chen, built OVMS from the ground-up as an open source project.

\


The first batch of in-vehicle modules (now called ‘v1’) were hand-built in time for christmas 2011. These modules combined a vehicle control board (based on the PIC18F2680 processor) and a standard SIMCOM SIM900 cellular base board, housed in a relatively large white box.

\


In the early days, developers and those extremely technically capable were the only ones using OVMS, but as time went by more and more users wanted to benefit from cellular monitoring of their electric vehicles, and a community was born.

\


As the number of users grew, and the pain of hand-producing circuit boards got worse with volume, the developers started work on a new version of the hardware (now called ‘v2’). This would use a standard metal industrial enclosure, a single mass-produced PCB (with cellular or one side, and PIC18F2685 processor on the other), and most importantly an industry standard DB9 connector allow vehicles other than the Tesla Roadster to be supported via vehicle-specific adaptor cables. We also upgraded the SIMCOM to a SIM908 (and later SIM808) module, which supported GPS (for those vehicle types without onboard GPS). This new version was released late in 2012, with Fasttech (in China) as the distributor.

\


Both the v1 and v2 hardware modules used the same firmware code, and 2G SIMCOM modems. Over the years, the limitation of this hardware become more and more restrictive, as developers continued to push the limits with more vehicle support, and more advanced functionality. By 2016, a dozen vehicle types were supported, and both RAM and FLASH memory were at capacity. In addition, the phase-out of 2G by AT\&T in USA began to be an issue.

\


So, in 2017, the core development team began work on a version 3 (now called ‘v3’) of the OVMS module. This would be a complete re-write of the module firmware on a new platform:

\


\


\


* ● Espressif IDF\
  (based on Open Source GNU C/C++)
* ● ESP32 dual-core ARM processor
* ● 16MB flash and 520KB RAM
* ● Wifi
* ● Bluetooth
* ● 3x CAN buses
* ● GPIO expansion ports
* ● A new DB26 external expansion port
* ● An internal expansion slot
* ● SD CARD support
* ● USB port
* ● 3G and 4G modem options
* \

* The first ten v3 developer modules were produced in September 2017.
* \

* Development Overview
* &#x20;
* OVMS development can be divided into three main parts:
* &#x20;

1. 1\. Vehicle Firmware Development – working on the module inside vehicles.
2. 2\. Server Development – working with the OVMS server code.
3. 3\. App Development – working with the remote Apps that access the vehicle information.
4. &#x20;
5. While some information presented here is specific to a particular area of development, in general we try to cover all three parts.
6. Developing with Visual Studio Code (on Windows)
7. This chapter describes how you install and successfully build and flash OVMS using Visual Studio Code on Windows with the current (2020-07-14) version of OVMS. It may be applicable to other OSes as well.&#x20;
8. \

9. This will be a portable installation. Meaning you can do everything on a flash drive and can take it to any other computer. You cannot (easily) just change the location on a computer though as some software saves their absolute path in their config. Nevertheless the whole installation won’t save anything in AppData/User/etc. folders. So a backup of the installation folder will backup everything.\
   In this example everything will be installed in D:\OVMS which will be the root path and the user-name will be soko (change it to your Windows user name). The only important thing is that the whole path needs to be ASCII characters only with no spaces, symlinks or accents.&#x20;
10. ESP-IDF (toolchain)
11. (Based on: [https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup.html](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup.html))
12. \

13. The current version of the OVMS specific ESP-IDF ([https://github.com/openvehicles/esp-idf](https://github.com/openvehicles/esp-idf)) is v3.3. So download the toolchain v3.3:
14. [https://dl.espressif.com/dl/esp32\_win32\_msys2\_environment\_and\_toolchain\_idf3-20200601.zip](https://dl.espressif.com/dl/esp32\_win32\_msys2\_environment\_and\_toolchain\_idf3-20200601.zip)
15. Open the ZIP-file and extract the content of its containing msys32 folder to C:\OVMS so the path to mingw32.exe is C:\OVMS\mingw32.exe.
16. Using a higher toolchain/xtensa version
17. It can happen that the xtensa version in the zip file downloaded above is too old (happened 2020-07-16). The newer version should be lister at [https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup-scratch.html#updating-existing-windows-environment](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/windows-setup-scratch.html#updating-existing-windows-environment) under section “Alternative Setup: Just download a toolchain”. Download this zip file. Then goto C:\OVMS\opt , delete the xtensa-esp32-elf folder that’s in there and replace it with the one in the zip file.
18. Install OVMS’s own ESP-IDF
19. Doubleclick on this mingw32.exe (don’t use mingw64.exe!). This is your environment bash shell.
20. Type in and execute:
21. $ git clone https://github.com/openvehicles/esp-idf.git
22. $ cd esp-idf
23. $ git submodule update --init --recursive
24. $ cd ..
25. \

26. Now the OVMS specific version of ESP-IDF is on your computer. To later pull an ESP IDF update, issue:
27. $ cd esp-idf
28. $ git pull
29. $ git submodule update --recursive
30. $ cd ..
31. \

32. Now tell the toolchain the setup path of ESP-IDF by creating a new file named export\_idf\_path.sh in C:\OVMS\etc\profile.d with the content
33. export IDF\_PATH="C:/OVMS/home/soko/esp-idf"
34. (use forward slashes and don’t forget to replace soko by your user name!).
35. \

36. Close the window and start mingw32.exe again. Type
37. $ printenv IDF\_PATH
38. Which should give you the path you put into the file if everything is correct.
39. \

40. Next install the required python packages. To do so type
41. $ python -m pip install --user -r $IDF\_PATH/requirements.txt
42. \

43. Get and build the OVMS source code
44. Type the following to get the latest version of OVMS from github:
45. $ git clone[ https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git)
46. $ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3
47. $ git submodule update --init --recursive
48. \

49. Next set the default build configurations:&#x20;
50. $ cp support/sdkconfig.default.hw31 sdkconfig
51. $ make menuconfig
52. \

53. The last command will open a DOS-GUI window. Just choose “EXIT” for now which will close the window. After a while the prompt will come back.
54. \

55. If everything worked out as it should the source should build successfully by typing:
56. $ make -j17 all
57. \

58. The 17 behind -j should be the number of your CPU cores in your machine + 1 (so 17 for 16 cores). This option just speeds up the build process.
59. \

60. Congrats! You have now your own build OVMS firmware in the file
61. C:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3\build\ovms3.bin&#x20;
62. \

63. You can now put this file onto a HTTP-server/website and use the firmware update option “OTA” on the OVMS web interface. Unfortunately there is no way to upload this file directly to OVMS.
64. Optional: Flashing the OVMS hardware directly
65. As an option you can connect the OVMS box directly via USB to your computer and flash it. This may be dangerous though as a broken firmware may render your hardware inaccessible.
66. \

67. Install USB driver for the OVMS
68. So Windows recognize the OVMS as a virtual COM/Serial port a driver for the “CP210x USB to UART Bridge” is needed from here:  [https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
69. \

70. Download the correct version for your Windows version and unpack it somewhere. Plug in the OVMS via USB and point Windows to the unpacked folder when it asks for the driver.
71. \

72. Now you need to know the serial port name (i.e. “COM3”) the OVMS was installed as. Open the Windows Device Manager to find out.
73. Tell ESP-IDF the serial port&#x20;
74. Start mingw32.exe again and type:
75. $ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3
76. $ make menuconfig
77. \

78. Don’t close the DOS-GUI window. Instead choose “Serial flasher config” then the first entry “...Default serial port”. Delete whatever is written there, type COM3 and press Enter. Select EXIT two times and answer YES when asked if you want to save the changes.
79. Flash the OVMS
80. To build and flash, instead of just building type:
81. $ cp make -j17 flash
82. Install and configure portable Visual Studio Code and Git
83. Programming with a decent IDE with Code Completion makes the day to day development so much easier. Here is how to use Visual Studio Code (VSC) and Git as portable installation. Until now you used the build in Git of ESP-IDF. VSC can’t use this unfortunately. This is why you have to install it again.
84. Install VSC portable
85. Download current version as a ZIP-file from [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
86. Unpack the content of the ZIP-file to C:\OVMS\VSC and then create the folder C:\OVMS\VSC\data which will make the installation a portable installation.
87. Install Git for Windows portable
88. Download the current version as portable EXE from [https://git-scm.com/download/win](https://git-scm.com/download/win)
89. Use the EXE-File itself to unpack the content to C:\OVMS\GIT
90. Hint: The EXE-unpacking executes a batch file at the end which ties this installation to this absolute path. So it cannot be moved anymore afterwards.
91. Configure VSC
92. Now it’s time to start VSC the first time with C:\OVMS\VSC\Code.exe. This usually triggers the installation of the C/C++ IntelliSense extension. Just let it happen… It might also show up later when opening the OVMS folder.
93. Tell VSC the path of the portable Git installation by opening “File”, “Preferences”, “Settings”. Then “Extensions”, “Git” and scroll until you find the “Path” section. Click on “Edit in settings.json”. In file edit this line to:
94. "git.path": "C:\\\OVMS\\\GIT\\\cmd\\\git.exe"
95. And save it. Close VSC for now.
96. \

97. To tell VSC how to cooperate with the OVMS Source you need some additional files. In the Windows Explorer create this folder (be aware it has a dot in front. So it’s “.vscode”. Depending on your Explorer settings it might not allow you to create such a folder or removes the dot automatically) c:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3\\.vscode\\&#x20;
98. \

99. Place the following three files with the listed content into this folder:
100. c\_cpp\_properties.json:
101. {
102. &#x20;   "configurations": \[
103. &#x20;       {
104. &#x20;           "name": "OVMS",
105. &#x20;           "includePath": \[
106. &#x20;               "${workspaceFolder}",
107. &#x20;           "${workspaceFolder}\\\\..\\\\..\\\\..\\\esp-idf\\\components\\\\\*\*",
108. &#x20;           "${workspaceFolder}\\\\\*\*"
109. &#x20;           ],
110. &#x20;           "defines": \[
111. &#x20;               "\_DEBUG",
112. &#x20;               "UNICODE",
113. &#x20;               "\_UNICODE"
114. &#x20;           ],
115. &#x20;           "intelliSenseMode": "msvc-x64"
116. &#x20;       }
117. &#x20;   ],
118. &#x20;   "version": 4
119. }
120. \

121. settings.json:
122. {
123. &#x20;   "terminal.integrated.shell.windows": "C:\\\OVMS\\\usr\\\bin\\\bash.exe",
124. &#x20;   "terminal.integrated.shellArgs.windows": \["--login"],
125. &#x20;   "terminal.integrated.env.windows": {&#x20;
126. &#x20;       "MSYSTEM": "MINGW32",&#x20;
127. &#x20;       "CHERE\_INVOKING":"1"
128. &#x20;   },
129. &#x20;   "files.associations": {
130. &#x20;       "forward\_list": "cpp"
131. &#x20;   }
132. }
133. \

134. tasks.json (again change the -j17 to your number):
135. {
136. &#x20;   "version": "2.0.0",
137. &#x20;   "tasks": \[
138. &#x20;     {
139. &#x20;       "type": "shell",
140. &#x20;       "label": "ALL",
141. &#x20;       "command": "make -j17 all",
142. &#x20;       "options": {
143. &#x20;         "cwd": "${workspaceFolder}"
144. &#x20;       },
145. &#x20;       "problemMatcher": \[
146. &#x20;         "$gcc"
147. &#x20;       ],
148. &#x20;       "group": {
149. &#x20;         "kind": "build",
150. &#x20;         "isDefault": true
151. &#x20;       }
152. &#x20;     },
153. &#x20;     {
154. &#x20;       "type": "shell",
155. &#x20;       "label": "FLASH",
156. &#x20;       "command": "make -j17 flash",
157. &#x20;       "options": {
158. &#x20;         "cwd": "${workspaceFolder}"
159. &#x20;       },
160. &#x20;       "problemMatcher": \[
161. &#x20;         "$gcc"
162. &#x20;       ],
163. &#x20;       "group": {
164. &#x20;         "kind": "build",
165. &#x20;         "isDefault": true
166. &#x20;       }
167. &#x20;     },
168. &#x20;     {
169. &#x20;       "type": "shell",
170. &#x20;       "label": "CLEAN",
171. &#x20;       "command": "make -j17 clean",
172. &#x20;       "options": {
173. &#x20;         "cwd": "${workspaceFolder}"
174. &#x20;       },
175. &#x20;       "problemMatcher": \[
176. &#x20;         "$gcc"
177. &#x20;       ],
178. &#x20;       "group": {
179. &#x20;         "kind": "build",
180. &#x20;         "isDefault": true
181. &#x20;       }
182. &#x20;     }
183. &#x20;   ]
184. &#x20; }
185. Coding OVMS in VSC
186. Start VSC again and choose “File”, “Open Folder…” and choose the folder
187. C:\OVMS\home\soko\Open-Vehicle-Monitoring-System-3\vehicle\OVMS.V3&#x20;
188. \

189. Now choose “Terminal”, “New Terminal” and press the “Accept”-Button on the windows that pop up. Open a New Terminal again. Now you should see the same shell as with mingw32.exe.
190. \

191. To build inside VSC just select “Terminal”, “Run Task” and then “ALL” which executes the “make -j17 all” command of the tasks.json file.
192. \

193. Have fun coding in VSC with IntelliSense and using it’s integrated Git features! It’s not as good as “Visual Studio 2019” but better than nothing ;)
194. \

195. Vehicle Firmware Development Tools (Linux/Mac)

\


1. \

2. Version 3 (v3) of the Open Vehicle Monitor System module is based on an Espressif ESP-32 microcontroller module (Wifi and Bluetooth support, dual core ARM processor, RAM and FLASH).
3. \

4. The Software Development Kit used is Espressif’s ESP IDF, which is based on the open source GCC compiler plus a large number of support libraries and FreeRTOS based operating system. ESP IDF runs under Windows, Linux and Mac OSX.
5. \

6. You need to use the OVMS fork of the Espressif ESP IDF. It is a direct clone of the Espressif IDF, but includes some modifications especially for OVMS. You can find that here::
7. [https://github.com/openvehicles/esp-idf](https://github.com/openvehicles/esp-idf)
8. and you can find setup guides at the same place.
9. \
   The usual installation steps are:
10. \

11. 1\. Install pre-requisite tools
12. 2\. Install xtensa toolchain
13. 3\. Git clone the ESP IDF repository
14. 4\. Setup the environment
15. \

16. The latest ESP IDF instructions are [here](https://esp-idf.readthedocs.io/en/latest/get-started/index.html), (but don’t use the latest version of the esp-idf install instructions, because the OVMS fork is a couple of versions older) :\

17. \

18. Use the esp-idf instructions for the [release version matching the current OVMS branch version (currently: 3.3)](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html)&#x20;
19. [https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/get-started/index.html)
20. selected from the esp-idf-readthedocs.io documentation, to ensure that you get the correct versions of the prerequisites and toolchain.
21. \

22. After installing the prerequisites and the xtensa toolchain, Git clone the OVMS ESP IDF repository:
23. \

24. $ git clone [https://github.com/openvehicles/esp-idf.git](https://github.com/openvehicles/esp-idf.git)
25. $ cd esp-idf
26. $ git submodule update --init --recursive
27. \

28. \

29. To later pull an ESP IDF update, issue:
30. \

31. $ cd esp-idf
32. $ git pull
33. $ git submodule update --recursive
34. \

35. Once you’ve got the Espressif ESP IDF installed, we recommend you try to compile one or more examples to make sure your environment works as expected.
36. \

37. Git clone the OVMS v3 repository and init the build configuration:
38. \

39. $ git clone [https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3.git)
40. $ cd Open-Vehicle-Monitoring-System-3/vehicle/OVMS.V3
41. $ git submodule update --init --recursive
42. $ cd vehicle/OVMS.V3
43. $ cp support/sdkconfig.default.hw31 sdkconfig
44. $ make menuconfig
45. \

46. The config tool may prompt for some new config options, use the default values for all. Check the flasher serial port, leave other options at defaults.
47. \

48. Build and flash your first OVMS firmware to a connected V3 module:
49. \

50. $ make flash
51. \

52. Note to Mac OS X users with _brew_: If you have upgraded your OS, to High Sierra for instance, and you’ve already had tools installed via _brew_ before: You will need to upgrade some component(s) such as bison as Apple has deeply modified some underlying libraries, otherwise you might end up having _make_ commands fail. Launching the following command will download and install the adapted build even if it is the same version.
53. \

54. $ brew upgrade bison
55. \

56. This has been sufficient (with the proper paths) to get things working properly.
57. \

58. Module USB Development Port

\


1. \


\


1. \

2. The base OVMS module has a micro USB port next to the big DB26 expansion connector. This is the port connected to the ESP-32 microcontroller. It uses a Silicon Labs CP2102 USB-to-UART controller. If your operating system doesn’t have this driver already installed, you can download and install it from the Silicon Labs website.
3. \

4. [https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
5. \

6. Linux note: if your distribution includes the braille display driver “brltty”, you may need to uninstall that, as it claims any CP2102 device to be a braille device. This applies e.g. to openSuSE 15.0.
7. \

8. There is a second USB port on the optional modem board (above the GSM and GPS antennas, and next to the SIM card slot). This provides direct access to the USB on the SIMCOM modem module, and requires special SIMCOM drivers. It is used for firmware updates, and direct debugging of the SIMCOM module, so can generally be ignored.
9. \


\


1. \

2. Note that OVMS v3 is currently in prototype stage, and has not received CE/FCC approval. In particular, while the v3.0 circuit board has protection diodes on the power supply pins, it will most likely require extra ESD and line noise filtering before approval. It is hobbyist kit.
3. \
   As such, we recommend against directly connecting to the USB ports on your computer. Instead, please use a powered USB hub to ensure that the module receives adequate power, and there is some isolation between the module and your computer.
4. \

5. \

6. The module can be powered by USB (including the optional modem), and provides a serial console as well as flash programming capability. You can use Espressif’s ‘make monitor’ tool to connect to the module as a serial terminal.
7. \

8. $ make monitor
9. rst:0x1 (POWERON\_RESET),boot:0x1f (SPI\_FAST\_FLASH\_BOOT)
10. ...
11. I (45) boot: ESP-IDF v2.1-2-g7138fb02 2nd stage bootloader
12. I (46) boot: compile time 09:50:02
13. I (79) boot: Enabling RNG early entropy source...
14. I (79) boot: SPI Speed      : 40MHz
15. I (79) boot: SPI Mode       : DIO
16. I (87) boot: SPI Flash Size : 16MB
17. I (100) boot: Partition Table:
18. I (111) boot: ## Label            Usage          Type ST Offset   Length
19. I (134) boot:  0 nvs              WiFi data        01 02 00009000 00004000
20. I (157) boot:  1 otadata          OTA data         01 00 0000d000 00002000
21. I (180) boot:  2 phy\_init         RF data          01 01 0000f000 00001000
22. I (204) boot:  3 factory          factory app      00 00 00010000 00400000
23. I (227) boot:  4 ota\_0            OTA app          00 10 00410000 00400000
24. I (250) boot:  5 ota\_1            OTA app          00 11 00810000 00400000
25. I (273) boot:  6 store            Unknown data     01 81 00c10000 00100000
26. ...
27. I (1755) heap\_alloc\_caps: Initializing. RAM available for dynamic allocation:
28. I (1778) heap\_alloc\_caps: At 3FFAFF10 len 000000F0 (0 KiB): DRAM
29. I (1798) heap\_alloc\_caps: At 3FFC9D20 len 000162E0 (88 KiB): DRAM
30. I (1819) heap\_alloc\_caps: At 3FFE0440 len 00003BC0 (14 KiB): D/IRAM
31. I (1840) heap\_alloc\_caps: At 3FFE4350 len 0001BCB0 (111 KiB): D/IRAM
32. I (1862) heap\_alloc\_caps: At 40094FD0 len 0000B030 (44 KiB): IRAM
33. ...
34. I (1883) cpu\_start: Pro cpu start user code
35. I (1940) command: Initialising COMMAND (1000)
36. I (1952) events: Initialising EVENTS (1200)
37. I (1954) config: Initialising CONFIG (1400)
38. ...
39. I (1556) ovms\_main: Starting HOUSEKEEPING...
40. I (1556) housekeeping: Initialising HOUSEKEEPING Framework...
41. I (1616) housekeeping: Executing on CPU core 1
42. I (1616) housekeeping: Starting PERIPHERALS...
43. I (1616) peripherals: Initialising OVMS Peripherals...
44. I (1626) peripherals:   ESP32 system
45. I (1626) peripherals:   SPI bus
46. I (1626) peripherals:   MAX7317 I/O Expander
47. I (1636) peripherals:   ESP32 CAN
48. I (1636) peripherals:   ESP32 WIFI
49. I (1646) peripherals:   ESP32 BLUETOOTH
50. I (1646) peripherals:   ESP32 ADC
51. I (1656) peripherals:   MCP2515 CAN 1/2
52. I (1656) peripherals:   MCP2515 CAN 2/2
53. I (1666) peripherals:   SD CARD
54. I (1666) peripherals:   SIMCOM MODEM
55. I (1666) housekeeping: Starting USB console...
56. \

57. Welcome to the Open Vehicle Monitoring System (OVMS) - Async Console
58. OVMS >
59. There are some important things shown in that boot screen, so let’s look in some detail.
60. \

61. $ make monitor
62. rst:0x1 (POWERON\_RESET),boot:0x1f (SPI\_FAST\_FLASH\_BOOT)
63. \

64. The OVMS v3 module includes two push-button switches on the motherboard, BOOT and ENABLE. Pressing the ENABLE switch will reset the processor. Holding down the BOOT switch, while pressing ENABLE, will boot into firmware download mode.
65. \

66. To simplify development, and flashing of modules, OVMS includes some transistor logic controlled by async control lines (RTS, DTR, etc) to control this ENABLE and BOOT functionality. When you type “make flash”, Espressif will connect to the serial port, then manipulate the control lines to hold down BOOT and then toggle ENABLE, to switch to firmware download mode. By default, every time you type “make monitor”, Espressif will also toggle the ENABLE pin to reset the device. You can change this behaviour in “make menuconfig”, or use your own terminal emulator, to avoid this (if you don’t want it).
67. \

68. I (45) boot: ESP-IDF v2.1-2-g7138fb02 2nd stage bootloader
69. I (46) boot: compile time 09:50:02
70. I (79) boot: Enabling RNG early entropy source...
71. I (79) boot: SPI Speed      : 40MHz
72. I (79) boot: SPI Mode       : DIO
73. I (87) boot: SPI Flash Size : 16MB
74. \

75. The default flash in the ESP-32 WROOM-32 module we use is 4MB, but that is insufficient. So, OVMS includes an external 16MB flash and the ESP-32 chips we use are modified to permanently burn fuses inside the chip, in order to select and use this external flash. At the moment, we are using 40Mhz DIO mode to access this chip; but we may switch to QIO mode and increase the speed later when we are comfortable with the performance requirements and stability.
76. \

77. I (100) boot: Partition Table:
78. I (111) boot: ## Label            Usage          Type ST Offset   Length
79. I (134) boot:  0 nvs              WiFi data        01 02 00009000 00004000
80. I (157) boot:  1 otadata          OTA data         01 00 0000d000 00002000
81. I (180) boot:  2 phy\_init         RF data          01 01 0000f000 00001000
82. I (204) boot:  3 factory          factory app      00 00 00010000 00400000
83. I (227) boot:  4 ota\_0            OTA app          00 10 00410000 00400000
84. I (250) boot:  5 ota\_1            OTA app          00 11 00810000 00400000
85. I (273) boot:  6 store            Unknown data     01 81 00c10000 00100000
86. \

87. By default, OVMS partitions this 16MB flash to NVS (general parameter=value key storage), otadata (control data for the Over-The-Air update facility), phy\_init (RF data), factory (the firmware App flashed at the factory), ota\_1 (OTA image #1), ota\_2 (OTA image #2), and store (a FAT filesystem mounted as /store during boot).
88. \

89. The factory, ota\_0 and ota\_1 partitions are all 4MB in size - and that is the largest firmware image that can be loaded onto the chip. The otadata partition contains a pointer to one of these three partitions, to tell the bootloader which to map to during boot.
90. \

91. When first delivered, we will be running the factory firmware in the factory partition, and otadata will point to that. If an Over-The-Air update is performed, it will be downloaded to ota\_0 and otadata modified to point to ota\_0. Upon next reboot, the bootloader will then run the image in ota\_0. If a second Over-The-Air update is performed, while running in ota\_0 partition, it will be flashed to ota\_1, and then otadata modified to point to ota\_1. Note that all the operating addressing of all these images is the same, irrespective of the partition offset in the flash - the bootloader deals with mapping physical memory to these partitions, via it’s cache. If the bootloader fails to boot into an OTA partition, it will fall back to the factory partition. In this way, the factory partition is always there as a backup.
92. \

93. Note that ‘make flash’ will flash all these partitions (including bootloader, partition table, factory partition, etc). Generally, it is quicker to ‘make app-flash’ to flash just the factory application partition.
94. \

95. I (1755) heap\_alloc\_caps: Initializing. RAM available for dynamic allocation:
96. I (1778) heap\_alloc\_caps: At 3FFAFF10 len 000000F0 (0 KiB): DRAM
97. I (1798) heap\_alloc\_caps: At 3FFC9D20 len 000162E0 (88 KiB): DRAM
98. I (1819) heap\_alloc\_caps: At 3FFE0440 len 00003BC0 (14 KiB): D/IRAM
99. I (1840) heap\_alloc\_caps: At 3FFE4350 len 0001BCB0 (111 KiB): D/IRAM
100. I (1862) heap\_alloc\_caps: At 40094FD0 len 0000B030 (44 KiB): IRAM
101. \

102. Memory is limited. This is an embedded system. Take care.
103. \

104. I (1883) cpu\_start: Pro cpu start user code
105. I (1940) command: Initialising COMMAND (1000)
106. I (1952) events: Initialising EVENTS (1200)
107. I (1954) config: Initialising CONFIG (1400)
108. \

109. OVMS boots in a very defined order. If you need a component to hook into this initialisation system, it is generally best to contact the lead developers for information on where precisely to hook in.
110. \

111. I (1556) ovms\_main: Starting HOUSEKEEPING...
112. I (1556) housekeeping: Initialising HOUSEKEEPING Framework...
113. I (1616) housekeeping: Executing on CPU core 1
114. I (1616) housekeeping: Starting PERIPHERALS...
115. I (1616) peripherals: Initialising OVMS Peripherals...
116. I (1626) peripherals:   ESP32 system
117. I (1626) peripherals:   SPI bus
118. I (1626) peripherals:   MAX7317 I/O Expander
119. I (1636) peripherals:   ESP32 CAN
120. I (1636) peripherals:   ESP32 WIFI
121. I (1646) peripherals:   ESP32 BLUETOOTH
122. I (1646) peripherals:   ESP32 ADC
123. I (1656) peripherals:   MCP2515 CAN 1/2
124. I (1656) peripherals:   MCP2515 CAN 2/2
125. I (1666) peripherals:   SD CARD
126. I (1666) peripherals:   SIMCOM MODEM
127. I (1666) housekeeping: Starting USB console...
128. \

129. Welcome to the Open Vehicle Monitoring System (OVMS) - Async Console
130. OVMS >
131. \

132. Once the boot is complete, you’ll be presented with the OVMS async console prompt, and can type commands.
133. \

134. ESP-32 WROOM-32 Module eFuses
135. As part of the factory production process for OVMS v3, we custom burn some ESP-32 eFuses on the WROOM-32 module to suite our requirements (in particular for external 16MB flash). If you ever replace the WROOM-32 module, or wish to use custom hardware with OVMS firmware and flash partition layout, you will need to custom-burn these eFuses. Below is the documentation for what we do.
136. \

137. espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_REG 1
138. espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_TIEH 1
139. espefuse.py -p \<path-to-uart> burn\_efuse XPD\_SDIO\_FORCE 1
140. espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_CLK 6
141. espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_Q 7
142. espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_D 8
143. espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_HD 9
144. espefuse.py -p \<path-to-uart> burn\_efuse SPI\_PAD\_CONFIG\_CS0 22
145. \

146. If you do it right, it will look like this:
147. \

148. Config fuses:
149. XPD\_SDIO\_FORCE         Ignore MTDI pin (GPIO12) for VDD\_SDIO on reset    = 1 R/W (0x1)
150. XPD\_SDIO\_REG           If XPD\_SDIO\_FORCE, enable VDD\_SDIO reg on reset   = 1 R/W (0x1)
151. XPD\_SDIO\_TIEH          If XPD\_SDIO\_FORCE & XPD\_SDIO\_REG, 1=3.3V 0=1.8V   = 1 R/W (0x1)
152. SPI\_PAD\_CONFIG\_CLK     Override SD\_CLK pad (GPIO6/SPICLK)                = 6 R/W (0x6)
153. SPI\_PAD\_CONFIG\_Q       Override SD\_DATA\_0 pad (GPIO7/SPIQ)               = 7 R/W (0x7)
154. SPI\_PAD\_CONFIG\_D       Override SD\_DATA\_1 pad (GPIO8/SPID)               = 8 R/W (0x8)
155. SPI\_PAD\_CONFIG\_HD      Override SD\_DATA\_2 pad (GPIO9/SPIHD)              = 9 R/W (0x9)
156. SPI\_PAD\_CONFIG\_CS0     Override SD\_CMD pad (GPIO11/SPICS0)               = 22 R/W (0x16)
157. DISABLE\_SDIO\_HOST      Disable SDIO host                                 = 0 R/W (0x0)
158. \

159. Note that this is a one-time operation. Once these eFuses are burned, the change is permanent and irreversible.
160. Vehicle Firmware Overview
161. Command Line Interpreter
162. NOTE: This documentation is no longer maintained.  Please see [https://docs.openvehicles.com/en/latest/cli/index.html](https://docs.openvehicles.com/en/latest/cli/index.html) for the current documentation.
163. \

164. The command line interpreter or command parser presented by the OVMS async serial console is constructed as a tree of command word tokens.  Enter a single "?" followed by \<RETURN> to get the root command list, like this:
165. \

166. OVMS# ?
167. .                       Run a script
168. bms                 BMS framework
169. boot                 BOOT framework
170. can                  CAN framework
171. ...
172. \

173. A root command may be followed by one of a list of additional tokens called subcommands which in turn may be followed by further subcommands down multiple levels.  The command and subcommand tokens may be followed by parameters.  Use "?" at any level in the command
174. sequence to get the list of subcommands applicable at that point.  If the next item to be entered is a parameter rather than a subcommand, then a usage message will be displayed to indicate the required or optional parameters.  The usage message will also be shown if the command as entered is not valid.  The usage message is described in further detail below.
175. \

176. Command tokens can be abbreviated so long as enough characters are entered to uniquely identify the command, then optionally pressing \<TAB> will auto-complete the token.  If the abbreviated form is not sufficient to be unique (in particular if no characters have been&#x20;
177. entered yet) then \<TAB> will show a concise list of the possible subcommands and then retype the portion of the command line already entered so it can be completed.  Pressing \<TAB> is legal at any point in the command; if there is nothing more that can be completed automatically then there will just be no response to the \<TAB>.
178. \

179. The OvmsCommand::RegisterCommand() function is used to add command and subcommand tokens are added to the tree.  New commands are added to the root of the tree using the global MyCommandApp.RegiserCommand().  Subcommands are added as children of a command using the OvmsCommand pointer returned when RegisterCommand() is called for the parent, thus building the tree.  For example:
180. \

181. OvmsCommand\* cmd\_wifi = MyCommandApp.RegisterCommand("wifi","WIFI framework", wifi\_status);
182. cmd\_wifi->RegisterCommand("status","Show wifi status",wifi\_status);
183. cmd\_wifi->RegisterCommand("reconnect","Reconnect wifi client",wifi\_reconnect);
184. \

185. The RegisterCommand() function takes the following arguments:
186. \


* ● const char\* name – the command token
* ● const char\* title – one-line description for command list
* ● void (\*execute)(...) – does the work of the command
* ● const char \*usage – the "Usage:" line describing parameters
* ● int min – minimum number of parameters allowed
* ● int max – maximum number of parameters allowed
* ● bool secure – true for commands permitted only after "enable"
* ● int (\*validate)(...) – validates parameters as explained later
* \

* It's important to note that many of these arguments can and should be defaulted.  The default values are as follows:
* \

* ● execute = NULL
* ● usage = ""
* ● min = 0
* ● max = 0
* ● secure = true
* ● validate = NULL
* \

* For example, for secure, non-terminal commands, such as the top-level "framework" commands like "bms" in the list of root commands shown earlier, the model should simply be:
* \

* RegisterCommand("name", "Title");
* \

* For secure, terminal (sub)commands that don't require any additional parameters, the model should be:
* \

* RegisterCommand("name", "Title", execute);
* \

* This model also applies if the command has children but the command itself wants to execute a default operation if no subcommand is specified.  It is incorrect to specify min = 0, max = 1 to indicate an optional subcommand; that is indicated by the presence of the execute function at the same time as a non-empty children array.
* \

* Any command with required or optional parameters should provide a usage string hinting about the parameters in addition to specifying the minimum and maximum number of parameters allowed:
* \

* RegisterCommand("name", "Title", execute, "usage", min, max);
* \

* The usage argument only needs to describe the parameters that follow this (sub)command because the full usage message is dynamically generated.  The message begins with the text "Usage: " followed by names of the ancestors of the this (sub)command back to the root of the tree plus the name of this (sub)command itself.  That is, the message starts with all the tokens entered to this point followed by additional description of subcommands or parameters that may be entered next, as determined by the usage string.
* \

* The usage string syntax conventions for specifying alternative and optional parameters are similar to those of usage messages in Unix-like systems.  The string can also include special codes to direct the dynamic generation of the message:
* \


1. 1\. For commands that store the possible values of a parameter in a NameMap\<T> or CNameMap\<T>, the validate function enables \<TAB> auto-completion when entering that parameter.  For example, see the "config" command in main/ovms\_config.cpp.
2. 2\. The original design only allowed parameters to be collected by the terminal subcommand.  That forced an unnatural word order for some commands.  The validate function enables non-terminal subcommands to take one or more parameters followed by multiple children subcommands.  The parameters may allow \<TAB> completion if the possible values are stored in NameMap\<T> or CNameMap\<T> or they could be something else like a number that can be validated by value.  The validate function must indicate success for parsing to continue to the children subcommands.  The return value is the number of parameters validated if successful or -1 if not.
3. \

4. The "location" command is an example that includes an intermediate parameter and also utilizes the "$L" form of the usage string:
5. \

6. OVMS# location action enter ?
7. Usage: location action enter \<location> acc \<profile>
8. Usage: location action enter \<location> homelink 1|2|3
9. Usage: location action enter \<location> notify \<text>
10. \

11. See components/ovms\_location/src/ovms\_location.cpp for the implementation of the location\_validate() function and the RegisterCommand() calls to build the command subtree.
12. \

13. \

14. OVMS Vehicle Modules
15. All functionality to support a particular type of vehicle should be implemented in OVMS vehicle modules. These are in the following directories:
16. \

17. components/vehicle\_\*
18. \

19. Steps to take, to stub support for a new vehicle type, are:
20. \

21. 1\. Decide on a short type code for the vehicle (upper case, minimum two characters), that doesn’t conflict with any existing vehicle (vehicle list shows the currently defined vehicles). Build the code from an abbreviation of the brand/manufacturer and an abbreviation of the vehicle. Examples:
22.
    1. a. TR – Tesla Roadster
    2. b. RT – Renault Twizy
    3. c. VWUP – VW e-Up
23. \

24. 2\. Decide on a long vehicle name. This is normally just the vehicle name itself (such as “Tesla Roadster”).\

25. 3\. Decide on a unique log tag to use in all your modules. Use prefix “v-” followed by a lower case short name of the vehicle for the log tag. The logging system allows to set different log levels per log tag. See existing vehicle modules for reference on how to define and use the log tag. Examples:
26.
    1. a. “v-twizy”
    2. b. “v-vweup”
    3. c. “v-bmwi3”\

27. 4\. Decide on a unique namespace prefix for your custom configuration, metrics and commands. The custom namespace shall be a lower case code beginning with “x” followed by at least two characters for the vehicle type. Try to keep this at three characters in length. Examples:
28.
    1. a. “xrt” – Renault Twizy
    2. b. “xvu” – VW e-Up
    3. c. “xi3” – BMW i3/i3s\

29. 5\. Create the directory structure\
    \
    components/vehicle\_\<lower-case-long-name>\
    /component.mk\
    /src\
    /vehicle\_\<lower-case-long-name>.{h,cpp}\
    \
    You can use vehicle\_none as a template for this.\

30. 6\. Change main/Kconfig to add a menu configuration item in the “Vehicle Support” section\
    \
    OVMS\_VEHICLE\_\<upper-case-long-name>\

31. 7\. Change your component.mk to selectively compile in support for your vehicle, based on that CONFIG\_OVMS\_VEHICLE\_\* menu configuration.\

32. 8\. Add all the above to git, make sure it compiles, commit and push.
33. \

34. Once basic support is stubbed, as above, you can start work on actual implementation of the vehicle module. We suggest you look at vehicle\_teslaroadster for a practical example of how things should be done. These notes may help.
35. \


* ● A short OvmsVehicleXXXInit object handles registration of your vehicle name, with associated vehicle implementation object, at init\_priority 9000. All vehicle initialise at this priority level, unless they are dependent on other vehicle modules.\

* ● A reception queue, and task, will be created and managed for you automatically.\

* ● Create a member function “void IncomingFrameCan1(CAN\_frame\_t\* p\_frame)” in your vehicle implementation object. This will be used to receive incoming CAN bus messages on CAN bus #1. You can also create IncomingFrameCan2 and IncomingFrameCan3 for the other two buses (if you require). The vehicle framework will automatically deliver CAN bus messages to your functions.\
  \

* ● Implement the constructor for your vehicle implementation. You will need to define the CAN buses your vehicle requires in the vehicle constructor function, with RegisterCanBus(int bus, CAN\_mode\_t mode, CAN\_speed\_t speed). Here is a simple example:\
  \
  OvmsVehicleTeslaRoadster::OvmsVehicleTeslaRoadster()\
  &#x20; {\
  &#x20; ESP\_LOGI(TAG, "Tesla Roadster v1.x, v2.x and v3.0 vehicle module");\
  &#x20; RegisterCanBus(1,CAN\_MODE\_ACTIVE,CAN\_SPEED\_1000KBPS);\
  &#x20; }\

* ● Implement a destructor for your vehicle implementation to perform any necessary cleanup. The base vehicle module destructor will automatically handle cleanup of the task, queue, and any CAN buses you are using.\

* ● Implement your IncomingFrameCanX handlers to process the incoming CAN frames. You will usually be decoding the messages, and updating metrics with the decoded vehicle data, appropriately.
* \

* You can use the ‘vehicle set …’ console command to switch to your vehicle.
* \

* Note that vehicle specific command registration can also be made in the OvmsVehicleXXXInit constructor. This is the preferred mechanism for implementing vehicle-specific commands. You can use MyVehicleFactory.m\_currentvehicle to make sure a vehicle is currently set to run, and VehicleName() on that, to ensure it is your vehicle type.
* Vehicle Metrics
* OVMS v3 is all about ‘metrics’. Vehicle modules update the metrics, and apps consume them via network protocols. A metric is a single piece of information, and its associated current value.
* \

* The metrics subsystem is implemented in main/ovms\_metrics.{h,cpp} as a C++ object. The primary interface to metrics is via the MyMetrics static object. Using that interface, new metrics can be registered, and values set. In addition, listeners can be established to be notified whenever a particular metric changes.
* \

* The metrics themselves are implemented in a virtual base class OvmsMetric. Currently, OVMS supports metrics of types boolean (OvmsMetricBool), integer (OvmsMetricInt), floating point (OvmsMetricFloat) and string (OvmsMetricString). All metric types support the base functionality on OvmsMetric for setting and reading the current value as strings (converting as necessary to the base data type), as well as indicators for whether an initial value has been defined, and for tracking modifications.
* \

* A global METRICS\_MAX\_MODIFIERS is used to define the maximum number of Modifiers (services tracking modifications to metrics). This is implemented internally as a bitmask. Every time a metric is modified, all the bits are set true. Then, individual modifiers can track their own individual bit, and clear as necessary. Modifiers themselves register to receive their own unique modifier bit number with MyMetrics.RegisterModifier(). In this way, modifiers can choose to use their modifier bit as they see fit. For example, the server protocols register as modifiers and clear their modifier bit when they send the data to the server; in this way, they can reduce the data transmissions by only sending modified metrics.
* \

* Standardised metrics are automatically registered on system boot by the code in  main/metrics\_standard.{h,cpp}. In addition, a static object StandardMetrics is defined, with member variables pointing to each of the standard metrics. This allows fast, efficient, type safe, access to the standardised metrics. For example:
* \

* StandardMetrics.m\_v\_bat\_soc->SetValue(42);
* \

* Vehicle-specific metrics can be registered and maintained by individual vehicle modules. In most cases, a vehicle module should maintain a pointer to the registered metric (using a member variable of the vehicle object) for fast and efficient access. The registration itself is automatic (all that is necessary is to create a metric object from one of the OvmsMetric derived metric types, and they will be registered automatically, by name). In most cases, the vehicle module initialisation should use MyMetrics.Find(name) to search for a metric by name and store the resulting pointer. If not found, the metric should be first-time registered.
* \

* There are some console commands available to view and manipulate the metrics (for diagnostic and testing purposes):
* \

* OVMS > metrics list
* m.freeram                      46716
* m.hardware                     OVMS WIFI BLE BT cores=2 rev=ESP32/1
* m.serial                       aa:bb:cc:dd:ee:ff
* m.tasks                        18
* m.version                      3.0.0/factory/main build Sep 22 2017 06:33:43
* s.v2.connected                 yes
* s.v2.peers                     0
* v.b.12v                        0
* \

* OVMS > metrics set \<metric> \<value>
* \

* Metrics have several common attributes that deserve further explanation:
* \

* ● Last Modified Date: This is accessible via LastModified(). Note that this date is the time the metric was last updated. If a metric is updated, but the value is unchanged, the last modified date will be updated, but the modified bit flags will not.\

* ● Stale: This is accessible via IsStale(), and setable via SetStale(bool stale). Whenever a metric is updated (irrespective of whether the value has been changed or not), the stale flag is cleared.\

* ● AutoStale: This is configurable when the metric object is created, or with the SetAutoStale(int seconds) function. If set (non zero), the stale flag will be automatically set if the metric value has not been updated for the specified number of seconds.
* \

* Configuration
* The configuration for OVMS v3 is stored on ESP32 flash, under vfs mount /store/ovms\_config. Under normal configuration, that is a protected path and the normal VFS operations (cp, cat, etc) will not be permitted. As a developer, you can disable that protection via a menuconfig option (Component Config -> OVMS -> Developer Options -> “Disable the usual protections for configuration visibility in VFS”).
* \

* The general design of the configuration store is that configuration items are identified by:
* \

* Parameter \[instance] = value
* \

* The parameters must be registered, usually during boot-time initialisation:
* \

* RegisterParam(
* &#x20; std::string name,
* &#x20; std::string title,
* &#x20; bool writeable=true,
* &#x20; bool readable=true);
* \

* The ‘writable’ and ‘readable’ flags control whether the user has write and/or read access to all the instances and values within that parameter. Firmware modules themselves always have full read/write access, and these only control user console access permissions. For example, you might set a store for passwords as writable=true, readable=false, so users could set passwords, but not view them. Similarly, a parameter maintained by a firmware module (and not the user) might be writable=false, readable=true.
* \

* If you don’t require an instance, then simply use ‘\*’ or ‘’ (empty string).
* \

* The configuration system provides ‘config list’ and ‘config set’ commands to maintain these configuration values.
* \

* Configuration values themselves are always stored internally as strings. Convenience functions are provided to access these as String, Int, Float and Bool.
* \

* \

* \

* Access config flash filesystem
* You can read and write the flash content using the esptool.py, and you can mount the retrieved image using a loopback device to access the config store on your PC.
* \

* Example: to retrieve and mount the FAT filesystem using losetup:
* \

* $ cat partitions.csv
* \# OVMS 16MB flash ESP32 Partition Table
* \# Name,   Type, SubType, Offset,   Size
* nvs,      data, nvs,     0x9000,  0x4000
* otadata,  data, ota,     0xd000,  0x2000
* phy\_init, data, phy,     0xf000,  0x1000
* factory,  app,  factory, 0x10000,  4M
* ota\_0,    app,  ota\_0,   ,         4M
* ota\_1,    app,  ota\_1,   ,         4M
* store,    data, fat,     ,         1M
* \

* $ bc
* 65536+(3\*4\*1024\*1024)
* \==> 12648448
* 1024\*1024
* \==> 1048576
* \

* $ \~/esp/esp-idf/components/esptool\_py/esptool/esptool.py --port /dev/tty.SLAB\_USBtoUART --baud 921600 read\_flash 12648448 1048576 fatty
* esptool.py v2.2.1
* …
* 1048576 (100 %)
* Read 1048576 bytes at 0xc10000 in 12.9 seconds (649.4 kbit/s)…
* \

* $ file fatty
* fatty: DOS/MBR boot sector, code offset 0xfe+2, OEM-ID "MSDOS5.0", Bytes/sector 4096, FAT  1, root entries 512, sectors 250 (volumes <=32 MB) , Media descriptor 0xf8, sectors/FAT 1, sectors/track 63, heads 255, serial number 0x210000, unlabeled, FAT (1Y bit by descriptor)
* \

* $ mkdir f
* $ losetup /dev/loop0 fatty
* $ mount -t vfat /dev/loop0 f
* $ ls -l f
* drwxr-xr-x 0 root root 4096 Jan  1  1980 ovms\_config
* \

* $ umount f
* $ losetup -d /dev/loop0
* \

* On macOS, use hdiutil instead of losetup:
* \

* $ hdiutil attach -imagekey diskimage-class-CRawDiskImage -nomount fatty
* /dev/disk11
* $ mount\_msdos /dev/disk11 f
* $ ls -l f
* drwxr-xr-x 0 root root 4096 Jan  1  1980 ovms\_config
* \

* $ umount f
* $ hdiutil detach /dev/disk11
* “Disk11” ejected.
* \

* See esptool.py --help on writing back a modified image.
* To wipe the entire flash, and re-flash with latest:
* \

* $ make erase\_flash
* $ make flash
* \

* You could probably just erase that one flash partition, but the above is quick and simple.
* Module Circuit Design
* The OVMS v3 module circuit is designed to be extremely expandable, and to serve as the base for vehicle CAN bus hacking.
* Main Board Overview
* \

* At the centre of the OVMS main board is an ESP32 WROOM-32 module. From there, we have modules for Storage, Power & USB, and Expansion Connectors.
* \

* WROOM-32 and Support Circuits
* \

* \

* 128MB External SPI Flash

\


* \

* The on-board 4MB SPI flash of the ESP32 WROOM-32 module is not used by OVMS v3. Instead, an external W32R128FV 128MB SPI flash is used for bootloader, firmware, and configuration storage. This is connected to the same SPI bus lines as the onboard 4MB flash, but uses a FL\_CS2 (IO22) as the SPI chip select.
* \

* MAX7317 GPIO Expansion
* \

* To expand on the number of GPIO available, a MAX7317 GPIO expansion chip is used, and driven by the 2nd ESP32 SPI bus. This shares the same bus as the two MCP2515 CAN bus controllers, and has chip select on CP\_CS3 (IO21). To allow this chip to co-exist with others on that shared SPI bus, a 74AHCIG125 tri-state buffer is used to isolate the SP\_MISO line (driven from the same SP\_CS3 line as the MAX7317 itself).
* \

* The MAX7317 provides 10 EGPIO pins (labelled P0 through P9), which can be configured as either input or output pins. The first few of these are reserved, and used by other modules in the OVMS v3 system.
* \

* \


| <ul><li>MAX7317 Pin Assignments</li></ul> | <ul><li><br></li></ul>        | <ul><li><br></li></ul>                                            |
| ----------------------------------------- | ----------------------------- | ----------------------------------------------------------------- |
| <ul><li>MAX7317 EGPIO</li></ul>           | <ul><li>Pin</li></ul>         | <ul><li>Comment</li></ul>                                         |
| <ul><li>P0</li></ul>                      | <ul><li>MDM_EN</li></ul>      | <ul><li>Modem Enable Line (for expansion modem control)</li></ul> |
| <ul><li>P1</li></ul>                      | <ul><li>SW_CTL</li></ul>      | <ul><li>Switched 12V control</li></ul>                            |
| <ul><li>P2</li></ul>                      | <ul><li>ESP32CAN_EN</li></ul> | <ul><li>ESP32 CAN SN65 Transceiver power control</li></ul>        |
| <ul><li>P3</li></ul>                      | <ul><li>MDM_DTR</li></ul>     | <ul><li>Modem DTR Line (for expansion modem control)</li></ul>    |
| <ul><li>P4</li></ul>                      | <ul><li>EGPIO3</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |
| <ul><li>P5</li></ul>                      | <ul><li>EGPIO4</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |
| <ul><li>P6</li></ul>                      | <ul><li>EGPIO5</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |
| <ul><li>P7</li></ul>                      | <ul><li>EGPIO6</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |
| <ul><li>P8</li></ul>                      | <ul><li>EGPIO7</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |
| <ul><li>P9</li></ul>                      | <ul><li>EGPIO8</li></ul>      | <ul><li>General purpose GPIO (available for expansion)</li></ul>  |

* \

* \

* \

* ESP32 Boot/Flash Control via USB
* \


\


* \

* The DTR and RTS pins from CP2102 USB control lines are used in the normal ESP32 fashion to control bootloader boot/flash mode, using transceiver logic. These pins control the ESP32\_EN and ESP32\_IO0 pins during boot time (also controllable via the two push button switches on the circuit board).
* \

* \

* AOZ1280CI Power
* \

* An AOZ1280CI switched mode power supply chip is used to convert either USB 5V or external 12V incoming power to regulated 3.3V. Diodes are used for polarity protection, as well as to correctly protect the USB 5V side from external 12V power. A shared ground scheme is used.
* \

* \

* \

* BTS452R Switched 12V Power

\


* \

* \

* A BTS452R, connected to SW\_CTL on the MAX7317 GPIO expansion chip, is used to provide switched 12V power on the DA26 expansion connector.
* \

* Note that this is only switched the main external 12V power line, so will provide whatever power that line provides.
* \

* CP2102 USB
* \


\


* \

* A CP2102 USB-async chip is used for connection to the ESP32 primary asynchronous console port. This is used for terminal access, low-level chip and eFuse access, as well as firmware upload.
* \

* As previously described, the CSL\_DTR and CSL\_RTS lines are used for control of the ESP32 during boot, and can be used to reset the system and/or enable firmware download modes.
* \

* \

* \

* \

* \

* \

* \

* \

* \

* \

* Micro SD Card
* \


\


* \

* A standard Micro SD card is available on the third SPI bus of the ESP32. This is wired in both 1 and 4 line modes, and includes a SD\_DET GPIO for detection of card insertion.
* \

* \

* \

* \

* \


| <ul><li>ESP32 WROOM-32 Pin Assignments</li></ul> | <ul><li><br></li></ul>      | <ul><li><br></li></ul>      | <ul><li><br></li></ul>                                 |
| ------------------------------------------------ | --------------------------- | --------------------------- | ------------------------------------------------------ |
| <ul><li>ESP32</li></ul>                          | <ul><li>Function</li></ul>  | <ul><li>OVMS</li></ul>      | <ul><li>Comment</li></ul>                              |
| <ul><li>1</li></ul>                              | <ul><li>GND1</li></ul>      | <ul><li>GND</li></ul>       | <ul><li>Signal Ground</li></ul>                        |
| <ul><li>2</li></ul>                              | <ul><li>+3V3</li></ul>      | <ul><li>+3.3V</li></ul>     | <ul><li>+3.3v from AOZ1280CI circuit</li></ul>         |
| <ul><li>3</li></ul>                              | <ul><li>EN</li></ul>        | <ul><li>ESP32_EN</li></ul>  | <ul><li>ESP32 enable (reset) control</li></ul>         |
| <ul><li>4</li></ul>                              | <ul><li>SENSOR_VP</li></ul> | <ul><li>ADC_IN</li></ul>    | <ul><li>ADC voltage divider input</li></ul>            |
| <ul><li>5</li></ul>                              | <ul><li>SENSOR_VN</li></ul> | <ul><li>SD_DET</li></ul>    | <ul><li>SD CARD detect</li></ul>                       |
| <ul><li>6</li></ul>                              | <ul><li>IO34</li></ul>      | <ul><li>SP_INT1</li></ul>   | <ul><li>MCP2551 #1 interrupt line</li></ul>            |
| <ul><li>7</li></ul>                              | <ul><li>IO35</li></ul>      | <ul><li>SP_INT2</li></ul>   | <ul><li>MCP2551 #2 interrupt line</li></ul>            |
| <ul><li>8</li></ul>                              | <ul><li>IO32</li></ul>      | <ul><li>EXP_1</li></ul>     | <ul><li>ESP32 general purpose free expansion</li></ul> |
| <ul><li>9</li></ul>                              | <ul><li>IO33</li></ul>      | <ul><li>EXP_2</li></ul>     | <ul><li>ESP32 general purpose free expansion</li></ul> |
| <ul><li>10</li></ul>                             | <ul><li>IO25</li></ul>      | <ul><li>CAN_TXD</li></ul>   | <ul><li>ESP32 CAN TXD to SN65</li></ul>                |
| <ul><li>11</li></ul>                             | <ul><li>IO26</li></ul>      | <ul><li>CAN_RXD</li></ul>   | <ul><li>ESP32 CAN RXD from SN65</li></ul>              |
| <ul><li>12</li></ul>                             | <ul><li>IO27</li></ul>      | <ul><li>SP_CS2</li></ul>    | <ul><li>MCP2551 #2 CS line</li></ul>                   |
| <ul><li>13</li></ul>                             | <ul><li>IO14</li></ul>      | <ul><li>SD_CLK</li></ul>    | <ul><li>SD CARD clock</li></ul>                        |
| <ul><li>14</li></ul>                             | <ul><li>IO12</li></ul>      | <ul><li>SD_DATA2</li></ul>  | <ul><li>SD CARD DATA2</li></ul>                        |
| <ul><li>15</li></ul>                             | <ul><li>GND2</li></ul>      | <ul><li>GND</li></ul>       | <ul><li>Signal Ground</li></ul>                        |
| <ul><li>16</li></ul>                             | <ul><li>IO13</li></ul>      | <ul><li>SD_DATA3</li></ul>  | <ul><li>SD CARD DATA3</li></ul>                        |
| <ul><li>17</li></ul>                             | <ul><li>SD2</li></ul>       | <ul><li>FL_HOLD</li></ul>   | <ul><li>W32R128FV SPI Flash HOLD</li></ul>             |
| <ul><li>18</li></ul>                             | <ul><li>SD3</li></ul>       | <ul><li>FL_WP</li></ul>     | <ul><li>W32R128FV SPI Flash WP</li></ul>               |
| <ul><li>19</li></ul>                             | <ul><li>CMD</li></ul>       | <ul><li>FL_CS1</li></ul>    | <ul><li>WROOM-32 4MB SPI Flash CS</li></ul>            |
| <ul><li>20</li></ul>                             | <ul><li>CLK</li></ul>       | <ul><li>FL_SCK</li></ul>    | <ul><li>W32R128FV SPI Flash  SCK</li></ul>             |
| <ul><li>21</li></ul>                             | <ul><li>SD0</li></ul>       | <ul><li>FL_SDO</li></ul>    | <ul><li>W32R128FV SPI Flash SDO</li></ul>              |
| <ul><li>22</li></ul>                             | <ul><li>SD1</li></ul>       | <ul><li>FL_SDI</li></ul>    | <ul><li>W32R128FV SPI Flash SDI</li></ul>              |
| <ul><li>23</li></ul>                             | <ul><li>IO15</li></ul>      | <ul><li>SD_CMD</li></ul>    | <ul><li>SD CARD CMD</li></ul>                          |
| <ul><li>24</li></ul>                             | <ul><li>IO2</li></ul>       | <ul><li>SD_DATA0</li></ul>  | <ul><li>SD CARD DATA0</li></ul>                        |
| <ul><li>25</li></ul>                             | <ul><li>IO0</li></ul>       | <ul><li>ESP32_IO0</li></ul> | <ul><li>ESP32 IO0 Firmware ‘boot’ line</li></ul>       |
| <ul><li>26</li></ul>                             | <ul><li>IO4</li></ul>       | <ul><li>SD_DATA1</li></ul>  | <ul><li>SD CARD DATA1</li></ul>                        |
| <ul><li>27</li></ul>                             | <ul><li>IO16</li></ul>      | <ul><li>MDM_TXD</li></ul>   | <ul><li>TX data to optional modem</li></ul>            |
| <ul><li>28</li></ul>                             | <ul><li>IO17</li></ul>      | <ul><li>MDM_RXD</li></ul>   | <ul><li>RX data from optional modem</li></ul>          |
| <ul><li>29</li></ul>                             | <ul><li>IO5</li></ul>       | <ul><li>SP_CS1</li></ul>    | <ul><li>MCP2551 #1 CS line</li></ul>                   |
| <ul><li>30</li></ul>                             | <ul><li>IO18</li></ul>      | <ul><li>SP_CLK</li></ul>    | <ul><li>SPI bus CLK</li></ul>                          |
| <ul><li>31</li></ul>                             | <ul><li>IO19</li></ul>      | <ul><li>SP_MISO</li></ul>   | <ul><li>SPI bus MISO</li></ul>                         |
| <ul><li>32</li></ul>                             | <ul><li>n/c</li></ul>       | <ul><li>n/c</li></ul>       | <ul><li><br></li></ul>                                 |
| <ul><li>33</li></ul>                             | <ul><li>IO21</li></ul>      | <ul><li>SP_CS3</li></ul>    | <ul><li>MAX7317 CS line</li></ul>                      |
| <ul><li>34</li></ul>                             | <ul><li>RXD0</li></ul>      | <ul><li>CSL_TXD</li></ul>   | <ul><li>TXD to USB async console</li></ul>             |
| <ul><li>35</li></ul>                             | <ul><li>TXD0</li></ul>      | <ul><li>CSL_RXD</li></ul>   | <ul><li>RXD from USB async console</li></ul>           |
| <ul><li>36</li></ul>                             | <ul><li>IO22</li></ul>      | <ul><li>FL_CS2</li></ul>    | <ul><li>W32R128FV SPI Flash CS</li></ul>               |
| <ul><li>37</li></ul>                             | <ul><li>IO23</li></ul>      | <ul><li>SP_MOSI</li></ul>   | <ul><li>SPI bus MOSI</li></ul>                         |
| <ul><li>38</li></ul>                             | <ul><li>GND3</li></ul>      | <ul><li>GND</li></ul>       | <ul><li>Signal Ground</li></ul>                        |

* \

* CAN Buses
* The OVMS v3 module has support for three CAN buses.
* ● CAN1 uses the ESP32’s own on-board CAN controller
* ● CAN2 uses a MCP2515 SPI CAN controller
* ● CAN3 uses a MCP2515 SPI CAN controller
* All three uses SN65 3.3v transceivers.
* \

* CAN1 - On Board

\


* \

* The CAN1 bus uses the ESP32 on-board CAN controller and an external SN65 3.3v transceiver. Power control of the transceiver is via the ESP32CAN\_EN line of the MAX7317 GPIO expansion system.
* \

* CAN2 and CAN3 via MCP2515
* \

* CAN2 and CAN3 are via MCP2515 SPI controllers and SN65 3.3v transceivers. Power control of the transceivers is via RX0BF/RX1BF GPIO outputs from the MCP2515 controllers.
* \

* Expansion
* There are three expansion connectors on the OVMS v3 module. The connections, and wiring, for these is as follows.
* \

* \

* Internal Expansion Bus

\


* \

* \

* The internal expansion bus consists of two rows of 14 pins and is designed to be stackable. It exposes the EGPIO pins from the MAX7317 GPIO expansion chip, as well as available GPIO and bus pins direct from the ESP32 microcontroller on the ESP WROOM-32 module. Input/Output pins are also available from/to the DA26 external expansion connector.
* \

* \

* DA26 External Expansion Connector

\


* \

* \

* The DA26 external expansion connector is designed to be used for connection to external devices, for expansion of core functionality It exposes the GEP 1..7 pins from the internal expansion connector, as well as all CAN buses, power sources, etc.
* \

* In particular, a switched 12V power supply is available from this connector.
* \

* \


| <ul><li>DA26 Expansion Connector Pin Assignments</li></ul> | <ul><li><br></li></ul>     | <ul><li><br></li></ul>                                 |
| ---------------------------------------------------------- | -------------------------- | ------------------------------------------------------ |
| <ul><li>Pin</li></ul>                                      | <ul><li>Function</li></ul> | <ul><li>Comment</li></ul>                              |
| <ul><li>1</li></ul>                                        | <ul><li>MDM_RXD</li></ul>  | <ul><li>Modem receive data line</li></ul>              |
| <ul><li>2</li></ul>                                        | <ul><li>MDM_EN</li></ul>   | <ul><li>Modem enable control line</li></ul>            |
| <ul><li>3</li></ul>                                        | <ul><li>GEP_6</li></ul>    | <ul><li>General Expansion Output #6</li></ul>          |
| <ul><li>4</li></ul>                                        | <ul><li>GEP_4</li></ul>    | <ul><li>General Expansion Output #4</li></ul>          |
| <ul><li>5</li></ul>                                        | <ul><li>CAN0_L</li></ul>   | <ul><li>First CAN bus (CAN1) low</li></ul>             |
| <ul><li>6</li></ul>                                        | <ul><li>CAN2_L</li></ul>   | <ul><li>Third CAN bus (CAN3) low</li></ul>             |
| <ul><li>7</li></ul>                                        | <ul><li>CAN1_L</li></ul>   | <ul><li>Second CAN bus (CAN2) low</li></ul>            |
| <ul><li>8</li></ul>                                        | <ul><li>GND</li></ul>      | <ul><li>Ground signal line</li></ul>                   |
| <ul><li>9</li></ul>                                        | <ul><li>EXT_12V</li></ul>  | <ul><li>External 12V power supply</li></ul>            |
| <ul><li>10</li></ul>                                       | <ul><li>EXP_1</li></ul>    | <ul><li>ESP32 general purpose free expansion</li></ul> |
| <ul><li>11</li></ul>                                       | <ul><li>EXP_2</li></ul>    | <ul><li>ESP32 general purpose free expansion</li></ul> |
| <ul><li>12</li></ul>                                       | <ul><li>MDM_TXD</li></ul>  | <ul><li>Modem transmit data line</li></ul>             |
| <ul><li>13</li></ul>                                       | <ul><li>GEP_5</li></ul>    | <ul><li>General Expansion Output #5</li></ul>          |
| <ul><li>14</li></ul>                                       | <ul><li>n/c</li></ul>      | <ul><li><br></li></ul>                                 |
| <ul><li>15</li></ul>                                       | <ul><li>CAN0_H</li></ul>   | <ul><li>First CAN bus (CAN1) high</li></ul>            |
| <ul><li>16</li></ul>                                       | <ul><li>CAN2_H</li></ul>   | <ul><li>Third CAN bus (CAN3) high</li></ul>            |
| <ul><li>17</li></ul>                                       | <ul><li>CAN1_H</li></ul>   | <ul><li>Second CAN bus (CAN2) high</li></ul>           |
| <ul><li>18</li></ul>                                       | <ul><li>SW_12V</li></ul>   | <ul><li>Switched 12V</li></ul>                         |
| <ul><li>19</li></ul>                                       | <ul><li>GEP_1</li></ul>    | <ul><li>General Expansion Output #1</li></ul>          |
| <ul><li>20</li></ul>                                       | <ul><li>GEP_2</li></ul>    | <ul><li>General Expansion Output #2</li></ul>          |
| <ul><li>21</li></ul>                                       | <ul><li>GEP_7</li></ul>    | <ul><li>General Expansion Output #7</li></ul>          |
| <ul><li>22</li></ul>                                       | <ul><li>GEP_3</li></ul>    | <ul><li>General Expansion Output #3</li></ul>          |
| <ul><li>23</li></ul>                                       | <ul><li>GND</li></ul>      | <ul><li>Ground signal line</li></ul>                   |
| <ul><li>24</li></ul>                                       | <ul><li>+3.3V</li></ul>    | <ul><li>Regulated 3.3v power</li></ul>                 |
| <ul><li>25</li></ul>                                       | <ul><li>n/c</li></ul>      | <ul><li><br></li></ul>                                 |
| <ul><li>26</li></ul>                                       | <ul><li>n/c</li></ul>      | <ul><li><br></li></ul>                                 |

* \

* \

* DB9 External Expansion Connector

\


* \

* \

* The OVMS v3 module includes a DB9 external expansion connector, compatible with the OVMS v2 design but exposing the extra two CAN buses available in OVMS v3.
* \

* \

* \

* \


| <ul><li>DB9 Expansion Connector Pin Assignments</li></ul> | <ul><li><br></li></ul>     | <ul><li><br></li></ul>                       |
| --------------------------------------------------------- | -------------------------- | -------------------------------------------- |
| <ul><li>Pin</li></ul>                                     | <ul><li>Function</li></ul> | <ul><li>Comment</li></ul>                    |
| <ul><li>1</li></ul>                                       | <ul><li>n/c</li></ul>      | <ul><li><br></li></ul>                       |
| <ul><li>2*</li></ul>                                      | <ul><li>CAN0_L</li></ul>   | <ul><li>First CAN bus (CAN1) low</li></ul>   |
| <ul><li>3*</li></ul>                                      | <ul><li>GND</li></ul>      | <ul><li>Signal ground</li></ul>              |
| <ul><li>4</li></ul>                                       | <ul><li>CAN1_L</li></ul>   | <ul><li>Second CAN bus (CAN2) low</li></ul>  |
| <ul><li>5</li></ul>                                       | <ul><li>CAN1_H</li></ul>   | <ul><li>Second CAN bus (CAN2) high</li></ul> |
| <ul><li>6</li></ul>                                       | <ul><li>CAN2_L</li></ul>   | <ul><li>Third CAN bus (CAN3) low</li></ul>   |
| <ul><li>7*</li></ul>                                      | <ul><li>CAN0_H</li></ul>   | <ul><li>First CAN bus (CAN1) high</li></ul>  |
| <ul><li>8</li></ul>                                       | <ul><li>CAN2_H</li></ul>   | <ul><li>Third CAN bus (CAN3) high</li></ul>  |
| <ul><li>9*</li></ul>                                      | <ul><li>EXT_12V</li></ul>  | <ul><li>External 12v power supply</li></ul>  |

* \

* \* OVMS v2 compatible pin
* Conclusions
* \
