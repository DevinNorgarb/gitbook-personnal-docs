# Freematics + Traccar

## Vehicle device tracker (or how the death of Automatic prompted me to find another way to exercise total control over my data and my OBD2 ports)

![](https://www.redditstatic.com/desktop2x/img/renderTimingPixel.png)

Background: I've been using Automatic to track our vehicles and conveniently display the remaining fuel level in HA. I wanted something to keep doing that, so I found an Arduino ESP32 solution.

**Hardware:** I used a [Freematics ONE+ Model B](https://freematics.com/store/index.php?route=product/product\&product\_id=94) with 4 MB flash memory and the SIM7600A-H cellular module (I'm in North America). Freematics shipped quickly from Australia, although DHL was less than ideal in getting it here fast. Freematics has cheaper modules, but this was nice because it included everything (cellular and GPS) in one compact module, like Automatic did. Total cost: $119.90 USD (+10 if you get a Hologram SIM from them). Shipping was surprisingly cheap at $13.

**Cellular service:** [hologram.io](https://hologram.io/) maker edition. Yeah, it's got a small monthly fee, but I think it should be minimal (you can set the update interval in the configuration). Cost is $0.60/month per SIM + $0.40/month per MB, with the first device and megabyte free. I'm planning on this being a pretty low data usage endeavor, and you can set use limits to make sure you don't accidentally go crazy.

Programming

I used [Visual Studio Code](https://code.visualstudio.com/) with [PlatformIO](https://platformio.org/) as described in the [developer's guide](https://freematics.com/pages/products/freematics-one-plus/guide/). Download the [repository](https://github.com/stanleyhuangyc/Freematics) and open the firmware\_v5/telelogger folder in VS Code. In **config.h**, update things to match your preferences. My changes include:

* `#define CELL_APN "hologram"`
* `#define SERVER_HOST "[externally accessible dynamic DNS hostname]"`
* `#define SERVER_PORT 5170` (this is the default Traccar port for the Freematics protocol, which I setup to port forward from my WAN to Freematics.
* `#define DATASET_INTERVAL 15000` (the default is 3000 ms, and I don't want to use up the cellular data with updates that often)

I also updated **telelogger.ino** to get the device to send over fuel level data by adding `{PID_FUEL_LEVEL, 1},` on line 53. You can add other OBDs if you want, they're all defined in the [OBD.h](https://github.com/stanleyhuangyc/Freematics/blob/master/libraries/FreematicsPlus/utility/OBD.h) file.

**(edit)** Finally, the **platformio.ini** refers to something on Github that no longer exists. On line 13, remove `#feature/stage` from the end of the line. My repository for this is online at [https://github.com/libots/freematics](https://github.com/libots/freematics).

You can test things using the [Freematics Arduino Builder](https://freematics.com/pages/software/arduino-builder/). The console here also gives you the tracker ID, which I don't think can be changed, and is needed to create a device in the Traccar software.

Server Setup

I installed [Traccar](https://github.com/traccar/traccar-docker) in a docker container on a NUC:

`# docker run -d --restart always --name traccar --hostname traccar -p 8082:8082 -p 5000-5150:5000-5170 -p 5000-5150:5000-5170/udp -v /var/docker/traccar/logs:/opt/traccar/logs:rw -v /var/docker/traccar/traccar.xml:/opt/traccar/conf/traccar.xml:ro traccar/traccar:latest`

Note the change in ports from Traccar's default container directions (we need to make sure we have port 5170 there, since that's what Traccar uses for Freematics).

I also set up Traccar to use my MySQL database server for its data in the traccar.xml file that was specified above:

`<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE properties SYSTEM '`[`http://java.sun.com/dtd/properties.dtd`](http://java.sun.com/dtd/properties.dtd)`'><properties><entry key='config.default'>./conf/default.xml</entry><entry key='database.driver'>com.mysql.cj.jdbc.Driver</entry><entry key='database.url'>jdbc:mysql://[MySQL IP]:3306/traccar?serverTimezone=UTC&amp;useSSL=false&amp;allowMultiQueries=true&amp;autoReconnect=true&amp;useUnicode=yes&amp;characterEncoding=UTF-8&amp;sessionVariables=sql_mode=''</entry><entry key='database.user'>[your username]</entry><entry key='database.password'>[your password]</entry></properties>`

At this point, you can create a device in Traccar for your Freematics device, using the ID from the Arduino Builder console readout as the device ID. If you plug your device into the OBD2 reader, it should start transmitting data to Traccar (it may take a few minutes to get a GPS fix).

Home Assistant

HA has a [Traccar integration](https://www.home-assistant.io/integrations/traccar/), which makes it very easy to get everything set up as a device tracker. I created a second Traccar user for HA, and assigned the devices I want HA to see to it. The circled button is where you go to assign devices (it took me a while to figure this out). I liked this feature, because I also have Node-RED updating Traccar with some other device trackers that HA tracks since it's nice to be able to look at location history and use Traccar's reporting features on them.

[![r/homeassistant - Vehicle device tracker (or how the death of Automatic prompted me to find another way to exercise total control over my data and my OBD2 ports)](https://preview.redd.it/j8uxydierp151.png?width=878\&format=png\&auto=webp\&s=3ed74a72f3ab73d0ec616e49099b6bc2b58d3cc3)](https://preview.redd.it/j8uxydierp151.png?width=878\&format=png\&auto=webp\&s=3ed74a72f3ab73d0ec616e49099b6bc2b58d3cc3)

Unfortunately, the integration doesn't report the fuel state that I wanted, so I set up a [SQL sensor](https://www.home-assistant.io/integrations/sql/) to do that using the query `SELECT JSON_UNQUOTE(JSON_EXTRACT(attributes, '$.12F')) AS fuel FROM tc_positions WHERE deviceid=1 ORDER BY id DESC LIMIT 1;`

\<entry key='\[filter.zero]\(https://filter.zero)'>true\</entry>

**(edit)** The query above worked, but sometimes I ended up with an occasional erroneous reading that would throw things out of whack. Also, between updating Traccar and Freematics (I did it at the same time, and while I suspect that the issue is Traccar, I'm not positive), my JSON attributes are now converted to decimal from hex. Below is my new query that accounts for this change and also takes the median value from the last five fuel levels (this works with recent MariaDB releases, but note that the median function isn't a native MySQL capability):

```
"SELECT deviceid, CAST((median(raw) OVER (PARTITION BY deviceid)) AS INT) AS fuel FROM (SELECT id, deviceid, CAST(JSON_UNQUOTE(JSON_EXTRACT(attributes, '$.io303')) AS INT) AS raw FROM tc_positions WHERE deviceid=7 AND JSON_EXTRACT(attributes, '$.io303') > 0 ORDER BY id DESC LIMIT 5) AS raw LIMIT 1;"
```

Note that the device ID here is an integer, not the string that we used elsewhere. The database device ID is found in the tc\_devices table.

I could probably look at making a custom Traccar integration/updating the current one, but this was faster for now. Traccar does report the PID attributes in its web UI, it's just not in the HA integration.
