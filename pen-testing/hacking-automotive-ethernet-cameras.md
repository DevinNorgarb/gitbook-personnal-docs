# Hacking Automotive Ethernet Cameras

{% embed url="https://argus-sec.com/blog/cyber-security-blog/hacking-automotive-ethernet-cameras/" %}

Go ahead, google the words “autonomous vehicle camera”. You will find almost 3.5 million  articles about the future of autonomous vehicles and the extensive impact cameras and other sensors will have on the future. Autonomous vehicles will be enabled by Advanced Driver Assistance Systems (ADAS) through built-in RADAR and [LiDAR](https://en.wikipedia.org/wiki/Lidar) systems, allowing it to “see and sense” the world around them, including other vehicles, pedestrians, traffic signs, potential hazards, and more.

This technology enables truly amazing things, but what happens in cases of technical failures or security breaches? It’s alarming to think that already in 2018, one of [Uber’s autonomous vehicles killed a pedestrian](https://www.theverge.com/2018/5/24/17388696/uber-self-driving-crash-ntsb-report) because of a malfunction. In a world where everything is connected to the web, what could happen if malicious hackers gained access to ADAS systems and manipulated what the car sees and senses? To answer this, we decided to do a PoC on an automotive grade Ethernet camera and see how much effort was needed to hack it, and to what extent the hack could be damaging.

**The Setup**

In our research we used a standalone automotive grade Ethernet camera (we cannot disclose its brand name for legal reasons). This camera is currently in production and in use by OEMs as a rear view camera. The camera included a [BroadR-Reach](https://en.wikipedia.org/wiki/BroadR-Reach) Ethernet interface which we connected to a computer using a converter. The camera streamed a live video feed to a virtual machine (VM) representing an ADAS [ECU](https://en.wikipedia.org/wiki/Electronic\_control\_unit) (the client), while a second VM on the same network was used to simulate a compromised ECU. The host machine served as a switch connecting the VMs and camera to the same network. The setup is illustrated in Figures 1 and 2 below.

![](https://argus-sec.com/wp-content/uploads/2022/11/figure1-300x150.jpg)\
_Figure 1: The network setup: The hacker uses the compromised ECU to inject malicious data from the side._

![](https://argus-sec.com/wp-content/uploads/2022/11/figure2-1-300x199.png)\
_Figure 2: The physical setup: The camera comes attached to a cable which splits into a power cable and a BroadR-Reach cable. The power cable is connected to an external power supply and the BroadR-Reach to a converter which allows us to connect to the computer._

**Understanding How the Automotive Camera Works**

Our first step, as in any attempt to attack a computer system, was to try and understand how the automotive Ethernet camera works. We started off by finding out how the camera communicates with the network, leading us to find two open UDP ports.

One port was used for [DHCP](https://en.wikipedia.org/wiki/Dynamic\_Host\_Configuration\_Protocol) implementation — upon connecting to power, the camera sent a UDP broadcast packet and received an IP address. The DHCP “server” was implemented on the ADAS ECU, which replied to the request by sending an IP address in the response data. The second port was used for command and control (C\&C), allowing the ADAS ECU to communicate with the camera by sending, for example, video stream start and stop commands.

Once we were able to understand and replicate the camera’s commands, we moved on to look at the actual data being sent in the video stream. Most Ethernet cameras use the [AVB](https://en.wikipedia.org/wiki/Audio\_Video\_Bridging) protocol to transfer video in a [time sensitive network](https://en.wikipedia.org/wiki/Time-Sensitive\_Networking). This protocol consists of two parts – headers and data payloads. The header differs in length, depending on the payload, which can be a variety of predefined audio or video formats. Our camera used a 24 byte header followed by a [JFIF](https://en.wikipedia.org/wiki/JPEG\_File\_Interchange\_Format) (JPEG File Interchange Format) payload.

![](https://argus-sec.com/wp-content/uploads/2022/11/figure-3-1-300x95.jpg)\
_Figure 3: A Wireshark packet capture._

Figure 3 above shows a Wireshark packet capture from the camera’s live stream. The first 14 bytes of the packet are a regular Ethernet frame, followed by the packet data (highlighted in blue). The data has a 24 byte header and the actual payload starts on the start of image (SOI) bytes highlighted in white. The “JFIF” indicator can be seen in orange (including the 00 byte since this string is null-terminating in accordance to the JFIF standard).

In other words, the camera is continuously sending still images at a fast enough pace to create what appears to be a live video stream. Since the image data is larger than the [MTU](https://en.wikipedia.org/wiki/Maximum\_transmission\_unit) (maximum transmission unit), every image is broken into a stream of packets and then reconstructed by the client.

**Attacking the ADAS ECU**

Now that we have explained the basics of how the camera connects to the network and communicates, let the fun begin! Since our camera uses the JFIF format, by default there is an easy way to disrupt the video stream — by constantly ending the image. The JFIF standard works by including two bytes for SOI and two bytes for end of image (EOI), which should always be 0xFFD8 and 0xFFD9, accordingly. Using Python’s scapy library, we wrote a simple function that injects EOI bytes every ten-thousandth of a second to the client receiving the stream. The results of the function can be seen in Figure 4.

Video Player00:0000:12

_Figure 4: Result of EOI injection every ten-thousandth of a second._

The video shows how the EOI function renders the camera’s live stream completely useless, as only a few bytes of data are transmitted from the camera to the client before our packet is sent causing the remaining image data to be dropped.

Next, we decided to try something a little more complicated and change the video stream to a pre-recorded video of our liking. First, we used Wireshark to record a video stream of packets sent from the camera to the client. Of course, simple injection of the recorded stream to the client while the camera is sending a live stream would not work since the data would interfere with one another (it turns out this could also be used as a method for blinding the camera, similar to the previous EOI attack).

Instead, we went back to the camera’s C\&C port and figured out how to replicate the “start video stream” and “stop video stream” commands. Once again, using scapy, we were able to send a command to the camera instructing it to stop streaming, while allowing us to inject our pre-recorded video stream with no interference.

Video Player00:0000:16

_Figure 5: Result of video stream injection after successfully instructing the camera to “stream off.”_

Four seconds into the video in Figure 5, we began the attack, replacing the “live” feed with a pre-recorded video. Once the attack ended, we sent a “start video stream” command to the camera to resume the live feed, but just as easily we could have inserted a different recording, looped the current one, stopped the real stream from coming back, etc.

**Conclusion**

Our research demonstrates two major security flaws:

1. The video stream was not properly authenticated by the client, it accepted any packet with a source MAC address matching the camera’s MAC address. At the very least, the client should have checked the timestamp used in the AVB header, but this feature was not properly implemented, making it easier to inject malicious traffic. This problem could potentially be fixed with packet authentication or stream encryption. However, this may prove challenging as both methods may drastically affect performance and for video data to be relevant, it must be quickly processed and used.
2. The camera’s C\&C protocol lacked any form of security. It accepted all commands received on the designated port, regardless of the sender (we didn’t even have to spoof the packets to make them look as if they originated from the client). In contrast to the AVB packets which are supposedly time sensitive, the C\&C protocol can afford the time overhead needed to protect the stream. The camera should verify the packets’ source MAC and IP addresses, and implement a TCP connection that would allow for a handshake protocol before the actual communication starts. Using TCP instead of UDP would also allow for encryption to further increase protection, making it harder for an attacker to replicate the handshake.

Although this research was conducted on a single Ethernet camera, we are well aware that other cameras have different implementations, behaviors and security mechanisms. The intention behind this research was to prove that potentially dangerous hacks can be performed on ADAS components and although we focused specifically on the camera system, these concepts can also be applied to other systems such as RADAR and LiDAR. Today, attacking automotive cameras may not be life threatening as most of them are only used to assist a human driver who is aware of his/her surroundings; However, as we progress into a future where vehicles rely heavily on cameras and other sensors to identify the world around them, such cyber attacks may prove to have catastrophic consequences.

_**By: Daniel Rezvani, Researcher at Argus Cyber Security**_

_**Date: November 12, 2018**_
