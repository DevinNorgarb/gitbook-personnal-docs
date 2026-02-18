# Overclocking Raspberry Pi 4

## Safe overclocking of the Raspberry Pi 4 to 2 GHz

Raspberry Pi Zero 2Last updated: November 8, 2021

#### Introduction.

In this tutorial safe overclocking of the Raspberry Pi 4 will be discussed.The first part offers a simple electronic background so that you get a good idea of what is actually happening and what precautions you need to take. After a few important preparations, we end with the practical instructions.Theory.The BCM2711 chip on the Raspberry Pi 4 consists of millions of transistors, they are the digital building bricks. Most elements have two complementary transistors at the output. If transistor A is 'on' the output is drawn to the supply voltage Vcc, giving the output a status '1'. On the other hand, if transistor B is 'on', A is 'off', the output is pulled to Vdd, and a '0' appears at the output.\
\
![MOSFET spikes](https://qengineering.eu/images/Spikes.png)\
\
Although the switching happens very fast, there is a moment when both transistors conduct some current. These small peaks have the frequency of the clock used. As the clock speed increases, the number of peaks follows proportionally and with for that matter the amount of heat.In addition to the current peaks through the output transistors, there is another point that needs our attention. That is the transistor itself. All modern transistors are MOSFET (metal-oxide-semiconductor field-effect transistor).

![Overclocking MOSFET](https://qengineering.eu/images/N-MOSFET.png)

When a positive voltage is applied to the gate, negatively charged electrons inside the body are drawn just under the gate insulator, thereby forming a conductive tunnel between the source and the drain. The state is 'on'. Removing the voltage on the gate and the MOSFET switches off again. The insulator between the gate and the body ensures that almost no current is needed to control the transistor. That explains why, for instance, pocket calculators can work years on a single battery.

**Overvoltage.**

To switch on, a positive electrical charge is routed to the gate through the previous MOSFET A output. The same applies to switch off when this charge is to be drained by MOSFET B. This sourcing and the draining of electrical charge generates a small current peak. It is clear that the faster the clock runs, the more energy is transferred and then the more heat the chip will generate.The MOSFET transistor starts to conduct when an electrical charge is injected into the gate. This process takes a while and is called the rising time in electronics. During this rising the output is neither '0' or '1', the state is undefined. The same situation occurs during the falling time when the MOSFET turns off. Again, there is a short interval in which the output is undefined. In the graph shown above, it's the yellow band. Note also that one output drives many inputs, all wanting their charge as quickly as possible.\
When the rise plus fall time is larger than the clock intervals, the output never hits the stable 1 or 0 bands but remains swinging in the undefined region. That's the moment your Raspberry Pi becomes unstable. It is no longer able to run programs flawless and chances are that it will crash.\
Now overvoltage comes into play. When the power supply is increased, there is more energy available for charging and draining gates. Subsequently, the rise and fall times decrease. Although the increase in power also increases the undefined area proportionally, the overall result is nevertheless faster. The second graph above illustrates this behaviour. Mostly, overclocking goes hand in hand with overvoltage.\
![MOSFET gate thickness](https://qengineering.eu/images/Metal-oxide.webp)\
\
When you start increasing the power supply of the CPU ARM cores, precautions are needed. The great bottleneck is the insulator of the MOSFET, an extremely thin layer of metal-oxide. In modern 28 nm chips, such as the BCM2711 of the Raspberry Pi 4, the layer is only a few dozen atoms thick. Such a thin layer can not withstand large potential differentials. The tension inside the material becomes too large. The layer will breakdown, a current will flood from the gate to the body and destroying your transistor forever along with your Rpi. Overvoltage up to 6 is safe, above that number, you have your own adventure without any warranty.

**Heat.**

Either way, heat remains your worst enemy. As explained, by increasing both the supply voltage and the clock frequency, your Raspberry Pi generates considerably more heat than normal. Active cooling of the BCM2711 is now imperative. Some sample graphs are shown at the bottom of this page. For those interested, the following formula applies to heat development:![none](https://qengineering.eu/images/Formula.png)\
&#x20; P = Power, Cdyn = dynamic capacitance, V = voltage, f = frequency. Dynamic capacitance is created by the insulation layer of the MOSFET.\
Heat not only increases the chance of destroying the insulator of the transistor, but it also shortens the life span of the Raspberry Pi. Rule of the thumb, every 10°C will half the lifetime of the CPU. When your Raspberry Pi has a lifespan of 20 years continuous running at 25 °C, it will run only 4 months at 85 °C. Six decades (85-25) gives 240 \* 0.5 \* 0.5 \* 0.5 \* 0.5 \* 0.5 \* 0.5 = ± 4 month. The formula used is the Arrhenius equation:![Arrthenius formula](https://qengineering.eu/images/Formula-arrthenius.png)\
Af = acceleration factor,Ea = activation energy in electron-volts (eV), [0.622V](https://qengineering.eu/overclocking-the-raspberry-pi-4.html) for the BCM2711 CPUk = Boltzmann's constant (8.617 x 10-5),Tu = reference junction temperature, in °K (°K=°C+273),Tt = junction temperature during overclocking, in °K,e=2.71828 (base of natural logarithms)Dynamic clock frequency.This may come as a surprise, but the Raspberry Pi is constantly changing its clock frequency. When the processor has little to nothing to do, it drops its frequency as low as 600 MHz. On the other hand, if heavy calculations are required, it boosts the clock to its full speed at 1500 MHz. The same applies to the core voltage. When idle, the Raspberry lowers the voltage to 0.81 V. If the clock is running at high frequencies, it will increase the core voltage to a maximum of 0.8625 V. This mechanism guarantees the lowest power consumption. The heat generation is now also minimized. All modern cell phones use this same technique by the way. Besides the calculation burden, there are other factors like the temperature or low power voltage who influences the clock frequency. All these mechanisms protect the CPU against potentially harmful situations. The dynamically switching of clock frequency can be turned off by the line force\_turbo=1 in the /boot/config.txt file. The Raspberry Pi will now run at maximum speed (turbo) no matter what the conditions are. We strongly advise you not to set this flag. This will not only violate the warranty, but it also has never given us any benefit.Throttle.There is one exception on the dynamic clock switching that can not be turned off. That is the so-called throttling. The Raspberry Pi monitor the temperature continuously. Above 82 °C (180 °F), the clock frequency is automatically lowered, regardless of which flag is set. This action will reduce heat development. Once cooled down, the clock is restored to its original frequency. During throttling, an icon is shown on your display.![Temp](https://qengineering.eu/images/Temp.png)\
In a normal situation, it may be sufficient to rely on the throttling to prevent overheating of the chip. However, this is not wise in the case of overclocking. Due to the overvoltage, stress on the insulators inside the transistors is already above normal, heat will only enlarge it even more. The upper-temperature limit must, therefore, decrease depending on your overvoltage. The recommended temperatures are shown in the table. Prolonged exposure of your Raspberry above these limits can be harmful.

#### Preparations.

First of all, you need an emergency door so that you can undo the overclocking if something goes wrong. If Raspbian is installed by NOOBS (New Out Of Box Software) you have the option to hold down the Shift key during startup. You are lead to the original installation screen where you can modify config.txt, the file used for overclocking. Always good practice, make sure to backup your SD card before starting overclocking. With a program like Win32 Disk Imager it is a piece of cake.\
\
![Recover Raspbian](https://qengineering.eu/images/Recover.webp)\
\
If you don't have a NOOBS installation, as is the case with the operating systems flashed with the Raspberry Pi [Imager](https://www.raspberrypi.org/downloads/), you can undo the overclocking by editing config.txt with another (Windows) machine. This file can be found in the (FAT32) boot area of your SD card, as shown below. If you are using Windows, make sure you edit the file with Notepad++.\
\
![none](https://qengineering.eu/images/Exploder.webp)\
\
As mentioned earlier, you must control the heat generated. That's why you have to monitor it. We like to use two applets on the status panel, the CPU Usage Monitor and the CPU Temperature Monitor. You know exactly how healthy your system is at a glance.\
\
![none](https://qengineering.eu/images/Applets.webp)<br>

**EEPROM.**

Check always if you have the latest EEPROM (electrically erasable programmable read-only memory) firmware installed. The Raspberry Pi 3 had all the operating software on the SD card. The Raspberry Pi 4, on the other hand, is also partially booted from two EEPROMs. These EEPROMs are programmed after PCB assembly in the factory.  Updating the firmware in both EEPROMs, with improvements made recently by the Raspberry team, will not immediately increase the clock speed, but will decrease the heat due to reduced power consumption. The update involves the installation of the rpi-eeprom loader. The new EEPROM software is of course not mandatory. More information about the installation can be found [here](https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md). And this is a good [article](https://www.hackster.io/news/raspberry-pi-4-firmware-updates-tested-a-deep-dive-into-thermal-performance-and-optimization-2f22c78e7089) testing the heat production of various firmware versions.  $ sudo apt-get update$ sudo apt-get full-upgrade$ sudo apt-get install rpi-eeprom# to get the current status$ sudo rpi-eeprom-update# to update the firmware$ sudo rpi-eeprom-update -a$ sudo reboot

![EEPROM firmware](https://qengineering.eu/images/EEPROM.webp)

**Beta version software.**

Previously, the highest achievable clock frequency was limited to 1850. Above that, you had to install a Raspbian beta version. Fortunately, this limit has now been discontinued since NOOBS 3.3.1. Now you can easily increase the clock frequency to above 2000 MHz if you want. The highest stable frequency during our experiments was 1950 MHz.

####

Practice.The actual overclocking is surprisingly simple. One line of text, arm\_freq=xxxx, in the /boot/config.txt will do. The table below, some frequencies are given. Up to 2140 MHz, the Raspberry Pi 4 still works, but it will crash when all four cores are running simultaneously. So be cautious. If the CPU gets above the 60°C (140°F), a frequency of even 1950 MHz can crash your RPi.

**GPU overclocking.**

Not only the CPU but also the GPU can be overclocked. One extra line of text, gpu\_freq=xxx, in the /boot/config.txt will do. The GPU frequency may increase from standard 500 MHz to a maximum of 650 MHz. Overclocking the GPU needs also overvoltage and, of course, generates additional heat. Because we mostly use the CPU with its NEON-ARM instructions, we don't overclock the GPU. In our case, it would only generate unnecessary heat.\
SDRAM overclocking.In the previous Raspberry Pi 3, it was also possible to overclock the SDRAM. Increasing both sdram\_freq and over\_voltage\_sdram gave you a faster data transfer rate from ram to CPU. However, overclocking the SDRAM on the Raspberry Pi 4 is _not_ possible. Luckily the design team used the newest DDR4 memory with a clock of 3200 MHz, giving you a 52x faster transfer rate compared to the RPi 3. Overclocking this type of memory now only results in a negligible increase in performance.

**Auto adjusting overvoltage.**

Since the Raspberry Pi 400 has a large heat sink, overclocking is possible without the risk of overheating the CPU. That is probably why the latest Raspberry Pi firmware has automatic overvoltage adjustment. The clock governor takes care of this.\
However, it turns out that the choice of an overvoltage by the governor is often too moderate. A little bit more voltage on the core may lead to fewer crashes. You can always set the over\_voltage parameter. Keep in mind, it's a fixed value, always selected, even when the cores are running idle at arm\_freq\_min.

Open the Nano text editor with the following command and place your lines at the end of the file. Close the session with the \<Ctrl+X> key combination. With \<Y> and \<Enter> changes are being saved. Now reboot and your Raspberry Pi 4 runs at the new speed. Please note, the figures given are only examples. You can adjust them to your own good.$ sudo nano /boot/config.txt\
\# Add your lines at the end.arm\_freq = y\
gpu\_freq = z# you may skip this lineover\_voltage = x\
\# Ctrl+X, Y, Enter to save the session# Reboot to run at the new clock frequency$ sudo reboot<br>

![images/Nano3.webp](https://qengineering.eu/images/Nano3.webp)

#### Underclocking.

Like you can overclock the Raspberry Pi, you can also underclock your Pi.The reason is mainly to reduce power consumption. Not all parts of the chip are affected by the central clock governor, for instance, the USB and Ethernet devices. Clocked at 200 MHz, your RPi consumes about 1.7 Watts.$ sudo nano /boot/config.txt# Add your lines at the end.arm\_freq\_min = 200\
\# Ctrl+X, Y, Enter to save the session\
\# Reboot to run at the new clock frequency$ sudo reboot<br>

####

Power consumption.As expected, power consumption will increase in proportion to the clock frequency. Below is a table with the power consumption of the Raspberry Pi 4 at different clock frequencies. The first line shows a Raspberry Pi which has been shut down. Even then, the electronics on the board still consume 300 mA. The second line reflects the situation when the Pi is running idle. All other lines indicate the power consumption of a Raspberry Pi 4 running with four cores simultaneously at full speed. The maximum allowable temperature is inversely proportional to the core voltage. This temperature is shown in the fourth column.

| <p>Clock<br>(MHz)</p> | Overvoltage | Vcore  | Max temp.(°C \| °F) | Power(Watt) | <p>Preformance<br>increase</p> | Remarks                 |
| --------------------- | ----------- | ------ | ------------------- | ----------- | ------------------------------ | ----------------------- |
| 0                     | 0           | 0.8625 | <p><br></p>         | 1.5         | <p><br></p>                    | RPi 4 shut down         |
| 200                   | 0           | 0.8625 | <p><br></p>         | 1.75        | <p><br></p>                    | RPi 4 min working clock |
| 600                   | 0           | 0.8625 | <p><br></p>         | 2.8         | <p><br></p>                    | RPi 4 running idle      |
| 1500                  | 0           | 0.8625 | 82 \| 180           | 7           | <p><br></p>                    | Factory settings        |
| 1600                  | 1           | 0.8875 | 80 \| 176           | 7.6         | 6.6 %                          | <p><br></p>             |
| 1700                  | 2           | 0.9125 | 78 \| 172           | 8.3         | 13.3 %                         | <p><br></p>             |
| 1800                  | 3           | 0.9375 | 77 \| 170           | 8.9         | 20 %                           | <p><br></p>             |
| 1900                  | 4           | 0.9625 | 75 \| 167           | 9.5         | 26.6 %                         | <p><br></p>             |
| 2000                  | 6           | 1.0125 | 72 \| 162           | 11          | 33.3 %                         | <p><br></p>             |
| 2100                  | 6           | 1.0125 | 72 \| 162           | 11          | 40 %                           | <p><br></p>             |
| <p><br></p>           | 7           | 1.0375 | 56 \| 132           | 11.7        | <p><br></p>                    | no improvement          |
| <p><br></p>           | 8           | 1.0625 | 50 \| 122           | 12.3        | <p><br></p>                    | no improvement          |

As mentioned earlier, keep an eye on your temperature when your Raspberry is running at high speed. Below are some graphs with different cooling options. We like to use this 'sandwich' heat sink because it also protects your electronics on the back against short circuits or other damage.

| <p><img src="https://qengineering.eu/images/Raspberry-Pi-4-active.webp" alt="Raspberry Pi 4 plus fan"><br></p>         | <p><img src="https://qengineering.eu/images/Temps_Fan.png" alt="none"><br></p>     |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <p><img src="https://qengineering.eu/images/Raspberry-Pi-4-passive.webp" alt="Raspberry Pi 4 passive cooling"><br></p> | <p><img src="https://qengineering.eu/images/Temps_No_Fan.png" alt="none"><br></p>  |
| <p><img src="https://qengineering.eu/images/Raspberry-Pi-4_igg67fsb.webp" alt="Raspberry Pi 4 no cooling"><br></p>     | <p><img src="https://qengineering.eu/images/Temps_Nothing.png" alt="none"><br></p> |

When the Raspberry Pi gets too hot, it starts to throttle. Here is an example of this phenomenon. Running a deep learning model is an intensive task. All four cores are used here, each up to 86%. The temperature hits 82 °C (180 °F) and the frequency is lowered, as can be seen from the yellow color in the temperature monitor. Needless to say that this situation should not last too long.<br>

![images/Throttled.webp](https://qengineering.eu/images/Throttled.webp)

#### Final remarks.

Use a new SD card. Old and worn out cards cause problems when the Raspberry Pi is overclocked. They can crash the system when writes are stacked due to slow processing.\
There is a very powerfull tool which can be used when working with the Raspberry Pi hardware: vcgencmd (VideoCore General Command). We use it all the time. A few examples. More info can be found [here](https://elinux.org/RPI_vcgencmd_usage).# to monitor your actual clock in a separate terminal$ watch -n1 vcgencmd measure\_clock arm# to monitor your actual Vcore in a separate terminal$ watch -n1 vcgencmd measure\_volts core\
\# to get lots of information about the current status$ vcgencmd get\_config int
