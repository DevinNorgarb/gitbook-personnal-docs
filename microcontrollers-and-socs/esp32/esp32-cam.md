# ESP32 CAM

## ESP32-CAM Video Streaming and Face Recognition with Arduino IDE

This article is a quick getting-started guide for the ESP32-CAM board. We’ll show you how to setup a video streaming web server with face recognition and detection in less than 5 minutes with Arduino IDE.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/ESP32-CAM-getting-started.jpg?resize=828%2C466&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="448" width="796"><figcaption></figcaption></figure>

**Note:** in this tutorial we use the example from the arduino-esp32 library. This tutorial doesn’t cover how to modify the example.

**Related project:** [ESP32-CAM Video Streaming Web Server](https://randomnerdtutorials.com/esp32-cam-video-streaming-web-server-camera-home-assistant/) (works with Home Assistant and Node-Red)

### Watch the Video Tutorial

You can watch the video tutorial or keep reading this page for the written instructions.

### Parts Required

To follow this tutorial you need the following components:

* [**ESP32-CAM with OV2640**](https://makeradvisor.com/tools/esp32-cam/) – read [Best ESP32-CAM Dev Boards](https://makeradvisor.com/esp32-camera-cam-boards-review-comparison/)
* [FTDI programmer](https://makeradvisor.com/tools/ftdi-programmer-board/)
* [Female-to-female jumper wires](https://makeradvisor.com/tools/jumper-wires-kit-120-pieces/)

You can use the preceding links or go directly to [MakerAdvisor.com/tools](https://makeradvisor.com/tools/?utm_source=rnt\&utm_medium=post\&utm_campaign=post) to find all the parts for your projects at the best price!

[![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2017/10/header-200.png?w=828\&quality=100\&strip=all\&ssl=1)](https://makeradvisor.com/tools/?utm_source=rnt\&utm_medium=post\&utm_campaign=post)

### Introducing the ESP32-CAM

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/ESP32-CAM-camera.jpg?resize=750%2C421&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="421" width="750"><figcaption></figcaption></figure>

The [ESP32-CAM](https://makeradvisor.com/tools/esp32-cam/) is a very small camera module with the ESP32-S chip that costs approximately $10. Besides the OV2640 camera, and several GPIOs to connect peripherals, it also features a microSD card slot that can be useful to store images taken with the camera or to store files to serve to clients.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/esp32-can-labeled.jpeg?resize=627%2C350&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="350" width="627"><figcaption><p><a href="https://www.seeedstudio.com/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/b/a/bazaar1003542_esp32cam2.jpg">Image source – Seeed Studio</a></p></figcaption></figure>

The [ESP32-CAM](https://makeradvisor.com/tools/esp32-cam/) doesn’t come with a USB connector, so you need an [FTDI programmer](https://makeradvisor.com/tools/ftdi-programmer-board/) to upload code through the U0R and U0T pins (serial pins).

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/FTDI-programmer-ESP32-CAM.jpg?resize=750%2C421&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="421" width="750"><figcaption></figcaption></figure>

### Features

Here is a list with the ESP32-CAM features:

* The smallest 802.11b/g/n Wi-Fi BT SoC module
* Low power 32-bit CPU,can also serve the application processor
* Up to 160MHz clock speed, summary computing power up to 600 DMIPS
* Built-in 520 KB SRAM, external 4MPSRAM
* Supports UART/SPI/I2C/PWM/ADC/DAC
* Support OV2640 and OV7670 cameras, built-in flash lamp
* Support image WiFI upload
* Support TF card
* Supports multiple sleep modes
* Embedded Lwip and FreeRTOS
* Supports STA/AP/STA+AP operation mode
* Support Smart Config/AirKiss technology
* Support for serial port local and remote firmware upgrades (FOTA)

### ESP32-CAM Pinout

The following figure shows the ESP32-CAM pinout (AI-Thinker module).



There are three GND pins and two pins for power: either 3.3V or 5V.

GPIO 1 and GPIO 3 are the serial pins. You need these pins to upload code to your board. Additionally, GPIO 0 also plays an important role, since it determines whether the ESP32 is in flashing mode or not. When GPIO 0 is connected to GND, the ESP32 is in flashing mode.

The following pins are internally connected to the microSD card reader:

* GPIO 14: CLK
* GPIO 15: CMD
* GPIO 2: Data 0
* GPIO 4: Data 1 (also connected to the on-board LED)
* GPIO 12: Data 2
* GPIO 13: Data 3

### Video Streaming Server

Follow the next steps to build a video streaming web server with the ESP32-CAM that you can access on your local network.

**Important:** Make sure you have your Arduino IDE updated as well as the latest version of the ESP32 add-on.

#### 1. Install the ESP32 add-on

In this example, we use Arduino IDE to program the ESP32-CAM board. So, you need to have Arduino IDE installed as well as the ESP32 add-on. Follow one of the next tutorials to install the ESP32 add-on, if you haven’t already:

* [Installing the ESP32 Board in Arduino IDE (Windows instructions)](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)
* [Installing the ESP32 Board in Arduino IDE (Mac and Linux instructions)](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-mac-and-linux-instructions/)

#### 2. CameraWebServer Example Code

In your Arduino IDE, go to **File** > **Examples** > **ESP32** > **Camera** and open the **CameraWebServer** example.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/esp32-cam-open-camerawebserver-example.png?resize=686%2C344&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="344" width="686"><figcaption></figcaption></figure>

The following code should load.

<div data-full-width="true"><figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/12/camera-web-server-example-code.png?resize=603%2C571&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="ESP32 CameraWebServer Example"><figcaption></figcaption></figure></div>

Before uploading the code, you need to insert your network credentials in the following variables:

```c
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

Then, make sure you select the right camera module. In this case, we’re using the AI-THINKER Model.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/AI-Thinker-ESP32CAM.jpg?resize=750%2C421&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="421" width="750"><figcaption></figcaption></figure>

So, comment all the other models and uncomment this one:

```c
// Select camera model
//#define CAMERA_MODEL_WROVER_KIT
//#define CAMERA_MODEL_ESP_EYE
//#define CAMERA_MODEL_M5STACK_PSRAM
//#define CAMERA_MODEL_M5STACK_WIDE
#define CAMERA_MODEL_AI_THINKER
```

If none of these correspond to the camera you’re using, you need to add the pin assignment for your specific board in the camera\_pins.h tab.

Now, the code is ready to be uploaded to your ESP32.

#### 3. ESP32-CAM Upload Code <a href="#mce_111" id="mce_111"></a>

Connect the ESP32-CAM board to your computer using an FTDI programmer. Follow the next schematic diagram:

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/12/ESP32-CAM-FTDI-programmer-5V-supply.png?resize=750%2C333&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="333" width="750"><figcaption></figcaption></figure>

Many FTDI programmers have a jumper that allows you to select 3.3V or 5V. Make sure the jumper is in the right place to select 5V.

**Important:** GPIO 0 needs to be connected to GND so that you’re able to upload code.

| **ESP32-CAM** | **FTDI Programmer** |
| ------------- | ------------------- |
| GND           | GND                 |
| 5V            | VCC (5V)            |
| U0R           | TX                  |
| U0T           | RX                  |
| GPIO 0        | GND                 |

To upload the code, follow the next steps:

1\) Go to **Tools** > **Board** and select **AI-Thinker ESP32-CAM**.

2\) Go to **Tools** > **Port** and select the COM port the ESP32 is connected to.

3\) Then, click the upload button to upload the code.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/12/upload-button-arduino-ide.png?resize=32%2C32&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="32" width="32"><figcaption></figcaption></figure>

4\) When you start to see these dots on the debugging window as shown below, press the ESP32-CAM on-board RST button.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/12/dots-uploading-code.png?resize=828%2C75&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="72" width="796"><figcaption></figcaption></figure>

After a few seconds, the code should be successfully uploaded to your board.

### Getting the IP address

After uploading the code, disconnect GPIO 0 from GND.

Open the Serial Monitor at a baud rate of 115200. Press the ESP32-CAM on-board Reset button.

The ESP32 IP address should be printed in the Serial Monitor.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/esp32-cam-ip-address.png?resize=615%2C427&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="427" width="615"><figcaption></figcaption></figure>

### Accessing the Video Streaming Server

Now, you can access your camera streaming server on your local network. Open a browser and type the ESP32-CAM IP address. Press the **Start Streaming** button to start video streaming.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/ESP32-CAM-video-streaming-example.jpg?resize=750%2C407&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="407" width="750"><figcaption></figcaption></figure>

You also have the option to take photos by clicking the **Get Still** button. Unfortunately, this example doesn’t save the photos, but you can modify it to use the on board microSD Card to store the captured photos.

There are also several camera settings that you can play with to adjust the image settings.

Finally, you can do face recognition and detection.

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/ESP32-cam-intruder-alert.jpg?resize=750%2C411&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="411" width="750"><figcaption></figcaption></figure>

First, you need to enroll a new face. It will make several attempts to save the face. After enrolling a new user, it should detect the face later on (subject 0).<br>

<figure><img src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/esp32-cam-face-recognition-detection.jpg?resize=750%2C391&#x26;quality=100&#x26;strip=all&#x26;ssl=1" alt="" height="391" width="750"><figcaption></figcaption></figure>

And that’s it. Now you have your video streaming web server up and running with face detection and recognition with the example from the library.

### Troubleshooting

If you’re getting any of the following errors, read our [**ESP32-CAM Troubleshooting Guide: Most Common Problems Fixed**](https://randomnerdtutorials.com/esp32-cam-troubleshooting-guide/)

* Failed to connect to ESP32: Timed out waiting for packet header
* Camera init failed with error 0x20001 or similar
* Brownout detector or Guru meditation error
* Sketch too big error – Wrong partition scheme selected
* Board at COMX is not available – COM Port Not Selected
* Psram error: GPIO isr service is not installed
* Weak Wi-Fi Signal
* No IP Address in Arduino IDE Serial Monitor
* Can’t open web server
* The image lags/shows lots of latency

[![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2020/03/ESP32-CAM-eBook-334.jpg?fit=334%2C334\&quality=100\&strip=all\&ssl=1)](https://randomnerdtutorials.com/esp32-cam-projects-ebook/)

### [\[eBook\] Build ESP32-CAM Projects using Arduino IDE](https://randomnerdtutorials.com/esp32-cam-projects-ebook/)

Learn how to program and build 17 projects with the ESP32-CAM using Arduino IDE [**DOWNLOAD »**](https://randomnerdtutorials.com/esp32-cam-projects-ebook/)

### Wrapping Up

The ESP32-CAM provides an inexpensive way to build more advanced home automation projects that feature video, taking photos, and face recognition.

In this tutorial we’ve tested the CameraWebServer example to test the camera functionalities. Now, the idea is to modify the example or write a completely new code to build other projects. For example, [take photos and save them to the microSD card when motion is detected](https://randomnerdtutorials.com/esp32-cam-pir-motion-detector-photo-capture/), [integrate video streaming in your home automation platform (like Node-RED or Home Assistant)](https://randomnerdtutorials.com/esp32-cam-video-streaming-web-server-camera-home-assistant/), and much more.

We hope you’ve find this tutorial useful. If you don’t have an ESP32-CAM yet, you can [grab it here](https://makeradvisor.com/tools/esp32-cam/).

If you like this project, you may also like other projects with the ESP32-CAM:

* [ESP32-CAM Video Streaming Web Server](https://randomnerdtutorials.com/esp32-cam-video-streaming-web-server-camera-home-assistant/) (works with Home Assistant and Node-RED)
* [ESP32-CAM Take Photo and Save to MicroSD Card](https://randomnerdtutorials.com/esp32-cam-take-photo-save-microsd-card/)
* [ESP32-CAM PIR Motion Detector with Photo Capture (saves to microSD card)](https://randomnerdtutorials.com/esp32-cam-pir-motion-detector-photo-capture/)
* [ESP32-CAM Take Photo and Display in Web Server](https://randomnerdtutorials.com/esp32-cam-take-photo-display-web-server/)
* [**Build ESP32-CAM Projects (eBook)**](https://randomnerdtutorials.com/esp32-cam-projects-ebook/)
* [**Read all our ESP32-CAM Projects, Tutorials and Guides**](https://randomnerdtutorials.com/projects-esp32-cam/)
