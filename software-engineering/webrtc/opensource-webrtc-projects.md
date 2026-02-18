---
description: 'Credit: https://medevel.com/13-os-webrtc-server/'
---

# Open-source WebRTC Projects

## Top 13 open-source WebRTC projects to build Video conferencing and calling app

WebRTC is an open-source framework that enables real-time communications for the web through your web browser.

In contrast, it is the basic protocol that allows web apps and websites to capture and stream videos and audio and exchange data between web browsers.

WebRTC was first created by Google to make peer-to-peer communication possible for web browsers and mobile apps, leading to dozens of video and audio communication apps that we use every day.

It is a free and open-source project, which means it does not require any cost to run and use it

Another Advantage for WebRTC is it is fast, and because, unlike UDP-based apps, it does not require any handshake between the client and the server.

Some may consider WebRTC standard not safe or secure because it exposes the real public IP of the user, therefore if you are using WebRTC with Google Chrome or Mozilla Firefox you are not anonymous.

In this article, you will find the best free, open-source WebRTC libraries and frameworks to build WebRTC-based projects.

### 1- Kurento <a href="#1kurento" id="1kurento"></a>

[Kurento](https://github.com/Kurento) is a free, open-source WebRTC media server with a rich API set for building rich video applications for web, and mobile.

Kurento is written with C/C++ and uses several GStreamer functions. It is started as a project at Rey Juan Carlos University in Madrid in 2010 then released as an open-source project.

**Kurento's features**

* Networked streaming protocols, including HTTP, RTP, and WebRTC.
* Group communications (MCUs and SFUs functionality) support both media mixing and media routing/dispatching.
* Generic support for the computational vision and augmented reality filters.
* Media storage supporting writing operations for WebM and MP4 and playing in all formats supported by GStreamer.
* Automatic media transcoding between any of the codecs supported by GStreamer including VP8, H.264, H.263, AMR, OPUS, Speex, G.711, etc.

Kurento is licensed under Apache 2.0 open-source license.

### 2- Ant Media Server <a href="#2ant-media-server" id="2ant-media-server"></a>

[Ant Media Server](https://github.com/ant-media/ant-media-server) is a media server for building real-time video and audio communication tools with low latency streaming.

In addition to its support to WebRTC, Ant Media also supports many protocols like CMAF, HLS, RTMP, RTSP, and many others.

Ant Media Server is highly scalable, with 0.5 latency, and can be installed on-premise or on-cloud.

Ant Media comes with two editions, an enterprise edition with a commercial license, and a free, open-source community edition.

**Features for Ant Media Server (Community Edition)**

* Ultra-Low Latency Adaptive One to Many WebRTC Live Streaming in **Enterprise Edition**
* Adaptive Bitrate for Live Streams (WebRTC, MP4, HLS) in **Enterprise Edition**
* VP8 & H264 Support in WebRTC **Enterprise Edition**
* Data Channel Support in WebRTC **Enterprise Edition**
* Horizontal(Clustering) and Vertical Scaling **Enterprise Edition**
* SFU in One to Many WebRTC Streams in **Enterprise Edition**
* Live Stream Publishing from RTMP to WebRTC **Enterprise Edition**
* RTMP Ingesting
* WebRTC to RTMP Adapter
* IP Camera Support
* Recording Live Streams (MP4 and HLS)
* Restream to Social Media Simultaneously(Facebook and YouTube in **Enterprise Edition**)
* One-Time Token Control in **Enterprise Edition**
* Object Detection in **Enterprise Edition**
* Ant Media Server is bundled with Android, iOS, and JavaScript SDKs. SDKs are available for free.

### 3- Open-EasyRTC <a href="#3open-easyrtc" id="3open-easyrtc"></a>

[Open-EasyRTC](https://github.com/open-easyrtc/open-easyrtc) is a free, open-source WebRTC toolkit for building real-time media-rich web and mobile apps.

Open-EasyRTC offers developer-friendly documentation, with several code samples and demos to help developers create usable apps in no time.

Open-EasyRTC is a fork of the primary [EasyRTC](http://easyrtc.com/) project with its server and client APIs, and HTML5/ JavaScript demos released under the BSD 2 License.

### 4- openVidu <a href="#4openvidu" id="4openvidu"></a>

[openVidu](https://openvidu.io/) is an open-source (Apache License v2), development platform for building video conference and video calling applications.

openVidu comes with full WebRTC encryption support and works seamlessly with all popular JavaScript frameworks like React, Angular, TypeScript, Vue.js, and Ionic.

If you like building your apps with REST-API, then you are lucky as openVidu got you covered with a developer-friendly REST-API.

### 5- Galene <a href="#5galene" id="5galene"></a>

[Galene](https://github.com/jech/galene) is a feature-rich free, open-source videoconference server that is easy to [install](https://galene.org/), deploy, and use.

Here are its current features:

* redistribution of arbitrary numbers of audio and video streams;
* text chat;
* recording to disk;
* user statuses ("raise hand", etc.; not yet used by the default client);
* choice of audio and video codecs (full functionality for VP8, VP9, and H.264, preliminary support for AV1);
* Simulcast;
* Scalable Video Coding (SVC) for VP8 and VP9;
* NACK-based loss recovery, in both the client-server and server → client directions;
* PLI-based repair;
* automatic restarting of failed flows (on ICE failure);
* congestion control in the server → client direction (both loss-based and using REMB indications);
* congestion control in the client → server direction (loss-based, partial REMB support);
* dynamic tuning of buffer sizes depending on the clients' RTT;
* hashed passwords;
* built-in TURN server.

### 6- SaltyRTC <a href="#6saltyrtc" id="6saltyrtc"></a>

[SaltyRTC](https://saltyrtc.org/) is an end-to-end encryption protocol for building encrypted WebRTC or ORTC peer-to-peer communication apps.

The project offers a long list of implementation samples and demos which help to put developers on the right track to build their encrypted WebRTC tools.

### 7- Janus <a href="#7janus" id="7janus"></a>

[Janus](https://janus.conf.meetecho.com/) is a general-purpose WebRTC server for building WebRTC-based apps like video calling, conferencing, and group video chats solutions.

Janus has a small footprint with low latency and comes with many code samples and demos with developer-friendly documentation that help developers install, implement and run apps in no time.

[Janus](https://github.com/meetecho/janus-gateway) is released under GNU General Public License Version 3 (GPLv3).

### 8- ion media server <a href="#8ion-media-server" id="8ion-media-server"></a>

[ION](https://github.com/pion/ion) is an open-source distributed real-time communication system built in pure Go programming language. It uses PION/ Flutter-WebRTC library.

The project is released and licensed under MIT License.

### 9- MediaSoup <a href="#9mediasoup" id="9mediasoup"></a>

[MediaSoup](https://mediasoup.org/) is a rich toolkit for building WebRTC video conferencing apps with its open-source supported Node.js and Rust servers.

It can be used to create group video chat apps or one-to-many conferencing apps with full RTP streaming support.

MediaSoup comes with low-latency support, and Rust/ Node.JS servers. It supports data message exchange (via WebRTC DataChannels, SCTP over plain UDP, and direct termination in Node.js/Rust). It also offers built-in Simulcast and SVC support.

* ECMAScript 6/Idiomatic Rust low-level API.
* Multi-stream: multiple audio/video streams over a single ICE + DTLS transport.
* IPv6 ready.
* ICE / DTLS / RTP / RTCP over UDP and TCP.
* Simulcast and SVC support.
* Congestion control.
* Sender and receiver bandwidth estimation with spatial/temporal layers distribution algorithm.
* Data message exchange (via WebRTC DataChannels, SCTP over plain UDP, and direct termination in Node.js/Rust).
* Extremely powerful (media worker thread/subprocess coded in C++ on top of libuv).

Here is a sample project that uses [MediaSoup](https://github.com/edumeet/edumeet).

### 10- OvenMediaEngine <a href="#10ovenmediaengine" id="10ovenmediaengine"></a>

[OvenMediaEngine](https://www.ovenmediaengine.com/ome) is an open-source streaming server with a low-latency rate for building real-time communication solutions.

OvenMediaEngine supports many communication inputs/ outputs protocols and comes with media encoders which makes it ideal for building enterprise video/ audio conferences and calls.

The supported protocols include WebRTC, RTMP, SRT, RTSP, and TS.

OvenMediaEngine comes with a built-in embedded live transcoder that supports VP8, H264, Opus, AAC, and Pass-Through.

### 11- Temasys <a href="#11temasys" id="11temasys"></a>

[Temasys](https://temasys.github.io/) project offers various WebRTC-based tools for building video conferencing and calling apps for the enterprise using the SkylinkJS Library.

The repo collection contains several demos and sample code that uses several technologies like Swift, Objective-C, React, C++, Java, and Android.

If you are planning or building WebRTC-based apps, then Temasys is a must-check project.

### 12- JSCommunicator <a href="#12jscommunicator" id="12jscommunicator"></a>

[JSCommunicator](https://jscommunicator.org/) is JavaScript-based, free, open-source (GPL v2.0) tool developed in pure web technologies (HTML, CSS, and JavaScript).

JSCommunicator is a WebRTC tool that uses SIP protocol over WebSockets.

The project works seamlessly with web apps and can be embedded with any CMS like WordPress and Drupal.

You can obtain the source code and run it, or customize it for personal and commercial use.

### 13- PeerJS Server and Library <a href="#13peerjs-server-and-library" id="13peerjs-server-and-library"></a>

[PeerJS](https://peerjs.com/) Library wraps the browser's WebRTC implementation with an easy-to-use JavaScript API to build real-time peer-to-peer video and audio calling apps.

Both PeerJS client and server are free and open-source for anyone to download, install, run and build video/ audio apps.

PeerJS works well with other JavaScript frameworks like React, Angular, Vue, Meteor, Ionic, and others.

### To sum up <a href="#to-sum-up" id="to-sum-up"></a>

WebRTC or Web Real-Time Communication is the primary cornerstone of what powers most video conferencing and video calling apps.

Here, we listed the best open-source WebRTC projects for developers to create cool video conferencing tools and apps. If you know of any open-source WebRTC library or project that we did not mention here, let us know.
