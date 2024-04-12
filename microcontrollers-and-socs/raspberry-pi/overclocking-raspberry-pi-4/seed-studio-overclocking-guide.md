# SEED Studio Overclocking Guide

## How to Safely Overclock your Raspberry Pi 4 to 2.147GHz

By [Shawn ](https://www.seeedstudio.com/blog/author/shawn/)4 years ago

The Raspberry Pi 4 is arguably the best Single Board Computer, but did you know you can overclock it to squeeze out even more performance? Yes, its base ARM Cortex-A72 processor with max clock speeds of 1.5GHz can actually be overclocked to up to 2.147GHz !

In today’s tutorial, we’ll teach you how you can safely overclock your Pi 4! Do still try this at your own risk!

<figure><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/06/Overclock-1030x442.png" alt="" height="442" width="1030"><figcaption></figcaption></figure>

***

### **Steps to Overclock your Raspberry Pi 4**

#### **Warranty and Risks**

In most cases, overclocking is safe and will not void your warranty **if done so in an appropriate manner**. However, you should still be aware that there are several settings that will void the warranty by flipping a hardware switch inside your Pi:

* over\_voltage greater than 6
* force\_turbo=1
* temp\_limit greater than 85

There will always be a risk of your Raspberry Pi 4 overheating while being overclocked. This tutorial will teach you the safest method, but please be aware of and accept the risks that you will undertake by continuing!

***

#### **Step 1: Prepare the Hardware**

Before we get started, let’s first go through what you’ll need for this tutorial. Apart from your [R](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html?utm\_source=blog\&utm\_medium=blog)[asp](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)[berry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html?utm\_source=blog\&utm\_medium=blog), you’ll need:

* A Raspberry Pi 4 Cooling Solution – Heatsink + Fan recommended
* SD Card with Raspberry Pi OS Installed
* A [Reliable Power Supply](https://www.seeedstudio.com/power-c-865.html?utm\_source=blog\&utm\_medium=blog) (official version is highly recommended) to ensure your Pi is not being starved of power

#### **Recommended Cooling Solution:** [**Black Warrior ICE Tower CPU Cooling Fan**](https://www.seeedstudio.com/Black-Warrior-ICE-Tower-CPU-Cooling-Fan-for-Raspberry-Pi-Support-Pi-4-p-4319.html?utm\_source=blog\&utm\_medium=blog)

Undoubtedly the biggest issue with the Raspberry Pi 4 is thermal issues and throttling. With the Pi 4 capable of reaching insane temperatures (even beyond 85°C) without overclocking, you’ll definitely need a cooling solution in place if you want to overclock it!

<figure><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2022/03/dianl_1-1.jpg" alt="" height="525" width="700"><figcaption><p><em>Black Warrior ICE Tower CPU Cooling Fan for Raspberry Pi</em></p></figcaption></figure>

One of the hot favourites here at Seeed is the Black Warrior ICE Tower CPU Cooling Fan for Raspberry Pi. It’s capable of reducing temperatures from 80℃ to 40℃ and is designed by 52PI, a world-leading Raspberry Pi accessories manufacturer. To achieve such a level of cooling, this cooling kit includes a 5mm copper tube, multi-layered heat sinks, and a fan with 7 blades.

If you’re looking for a cooling solution that’s more discrete, you can check out our list of Raspberry Pi [cooling cases](https://www.seeedstudio.com/cases-c-850.html?utm\_source=blog\&utm\_medium=blog) and [heat sinks!](https://www.seeedstudio.com/heat-sink-c-849.html?utm\_source=blog\&utm\_medium=blog)

#### **Step 2: Update your Raspberry Pi 4 Firmware**

For the latest overclocking capabilities on the Pi 4, always update it to the latest version. This will give you the latest performance and reliability optimisations offered, which will improve your ability to reach higher clock speeds!

Here’s how you can update your Pi 4 to the latest firmware:

1. Open the terminal on your Raspberry Pi and enter the following code:

```
sudo apt update

sudo apt full-upgrade
```

<figure><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2022/03/1.1-2.jpg" alt="" height="576" width="1024"><figcaption><p><em>Source:</em> <a href="https://i2.wp.com/tutorial.cytron.io/wp-content/uploads/2021/02/2021-02-15-103416_1920x1080_scrot-1024x576-1.jpg?w=1024&#x26;ssl=1"><em>Cytron</em></a></p></figcaption></figure>

2\. Afterwards, reboot the system for the update to be applied!

```
sudo reboot
```

#### **Step 3: Check the Default Speed of CPU**

The next step before you overclock your Pi 4 is to check your CPU base speed. It is good to check the default clock speed to see the changeable value, which can be done by opening the command line and entering the following:

```
Lscpu
```

or

```
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq
```

<figure><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2022/03/2.1-1.jpg" alt="" height="576" width="1024"><figcaption><p><em>Source:</em> <a href="https://i0.wp.com/tutorial.cytron.io/wp-content/uploads/2021/02/2021-02-15-103734_1920x1080_scrot-1024x184-1.jpg?w=1024&#x26;ssl=1"><em>Cytron</em></a></p></figcaption></figure>

This indicates that my Pi 4 CPU base speed is 600MHz, the speed requested by the kernel!

#### **Step 4: Let’s start overclocking!**

To overclock your Pi 4, we’ll mainly be **tinkering with the config.txt file** under core configuration settings. Follow the instructions below carefully to avoid any errors.

* Open your terminal window and enter the following code:

```
sudo nano /boot/config.txt
```

* Scroll down to the section marked:

```
#uncomment to overclock the arm. 700 MHz is the default.
#arm_freq=800
```

* Change the config settings to:

```
#uncomment to overclock the arm. 700 MHz is the default.
over_voltage=2
arm_freq=1750
```

* Save the file with CTRL+O (press RETURN) and use CTRL+X to exit. Now, restart your Raspberry Pi:

```
sudo reboot
```

* Once your Raspberry Pi boots up again, use the vcgencmd command to check your new, faster clock speed:

```
watch -n 1 vcgencmd measure_clock arm
```

This command will monitor your real-time speed. Browse a few web pages on a few tabs and watch your CPU head on up to 1.75GHz!

#### **Step 5: Overclocking your Pi 4 to even higher clock speed (2GHz)!**

If you think overclocking it to around 1.75GHz is impressive, let’s take things up a notch, by cranking your Pi 4 CPU to 2.0GHz.

We will need to increase over\_voltage to adjust the core CPU/GPU voltage to accommodate the higher clock speed. We will be cranking the over\_voltage value up to 6, which is the **highest without voiding the warranty**.

* Edit the config.txt file with the following settings:

```
over_voltage=6
arm_freq=2000
```

* Save the file and exit Nano by CTRL+O and CTRL+X. Reboot your Raspberry Pi 4 and run:

```
sudo reboot
watch -n 1 vcgencmd measure_clock arm
```

Similar to before, you’ll now see the clock speed limit to appear as 2.0GHz!

#### **Step 6: Overclocking your Pi 4 to the Max level!**

Now for the moment you’ve been waiting for, overclocking your Pi 4 to 2.147GHz max clock speed! This time, we’ll also have to boost the gpu\_freq by editing the config.txt file once again.&#x20;

We’ll set the arm\_freq to 2147 and gpu\_freq to 750 by changing the following settings:

```
over_voltage=6
arm_freq=2147
gpu_freq=750
```

The gpu\_freq command will set core\_freq, h264\_freq, isp\_freq, v3d\_freq and hevc\_freq all together which drives the L2 cache and memory bus for higher performance. A value of 750 is the highest value we’ve gotten after rigorous testing.

* Save the file and exit Nano by CTRL+O and CTRL+X. Reboot your Pi 4 Now and you should see your device running at 2.147GHz!

```
sudo reboot
watch -n 1 vcgencmd measure_clock arm
```

**NOTE:** Some Raspberry Pi 4 boards have failed to boot at this speed or slowed down due to overheating/under-voltage. It’s unlikely for you to run your Pi 4 board at this max speed in the long run, hence we recommend you to settle for arm\_freq=2000 / stop at step 5. Do also be reminded to monitor your CPU temperatures, as overheating can cause irreparable damage!

***

### **Summary**

That’s all for today’s tutorial on how you can easily overclock your Raspberry Pi 4. Overclocking your Pi 4 is a rather straightforward way to get extra performance from your CPU, but you should understand the risks and limits of overclocking – it’s definitely safe when done in a controlled manner. Always check the settings that you are about to change before affecting them to avoid voiding your warranty.

Thanks for reading! PS. Here is a [list of warning icons](https://www.raspberrypi.org/documentation/configuration/warning-icons.mdhttps://www.raspberrypi.org/documentation/configuration/warning-icons.md) that may appear on the screen while you are attempting to overclock your Raspberry Pi. Always check if warnings appear or if you have any doubts!

Keen to learn more? Here are some of our other articles that may interest you:

* [Machine Learning Powered Inventory Tracking with Raspberry Pi](https://blog.seeedstudio.com/2021/03/22/machine-learning-powered-inventory-tracking-with-raspberry-pi/)
* [Build a Raspberry Pi Security Camera using Raspberry Pi Camera!](https://blog.seeedstudio.com/2021/02/05/build-a-raspberry-pi-security-camera-using-raspberry-pi-camera/)
* [Build a Raspberry Pi Line Following Robot!](https://blog.seeedstudio.com/2021/02/04/raspberry-pi-line-following-robot/)
* [How To Configure WiFi on Raspberry Pi: Step By Step Tutorial](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/)
