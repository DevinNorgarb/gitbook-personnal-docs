# marvinferber BLOG

![](<../../../../../.gitbook/assets/image (56)>)

I started to discover the power of wiring tasks in Node-RED recently. Since I am a passionate ROS programmer, I was wondering if this flow tool could also help to make robot programming more transparent and reproducible. I was surprised how much more sense I could add to robotic programming by using this visual tool. I am now using my [Turtlebot 2arrow-up-right](http://www.turtlebot.com/) together with ROS indigo and Node-RED. This BLOG post shall be the first of a small series of posts with the intent to share my experiences with a greater community. This first post is about setting up the software. Furthermore, I want to give a very small example how to view a Turtlebots odometry in a Node-RED flow.

#### Installing the Software

* [ROS indigo (on Ubuntu 14.04 )arrow-up-right](http://wiki.ros.org/indigo/Installation/Ubuntu)
* Kobuki and [Turtlebot packagesarrow-up-right](http://wiki.ros.org/turtlebot/Tutorials/indigo/Turtlebot%20Installation) (either from .deb or [Githubarrow-up-right](https://github.com/turtlebot))
* [ROSbridge for Robot Web Toolsarrow-up-right](http://wiki.ros.org/rosbridge_suite/Tutorials/RunningRosbridge)
* [NodeJS (V6.10)arrow-up-right](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [Node-REDarrow-up-right](https://nodered.org/docs/getting-started/installation)
* Node-RED extra nodes: [node-red-contrib-rosarrow-up-right](https://www.npmjs.com/package/node-red-contrib-ros)

I assume you already have a basic knowledge of using ROS and, thus, I only link to the installation instructions at this point. The Kobuki and Turtlebot ROS packages can either be installed from the corresponding Ubuntu packages or they can be cloned from the Github repositories directly into your Catkin workspace. I also added a section on how to use this tutorial in the ROS Gazebo simulator only. So, you do not need a real Turtlebot to play around. However, the battery state visualization will not work in the simulator. To enable ROS message transfer for Web interfaces, we also need to install the ROSbridge package.

{% stepper %}
{% step %}
### Install ROS packages from Ubuntu package source

Run the following to install the necessary ROS packages from the Ubuntu package repositories:

{% code title="Install ROS Turtlebot and rosbridge" %}
```bash
apt-get install ros-indigo-turtlebot*
apt-get install ros-indigo-rosbridge-suite
```
{% endcode %}
{% endstep %}

{% step %}
### Install NodeJS (version 6)

NodeJS version 6 was used in this tutorial. Do not install the very old .deb packaged Version of NodeJS that comes with the Ubuntu 14.04 sources. Use the NodeSource setup script for v6:

{% code title="Install NodeJS v6" %}
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```
{% endcode %}
{% endstep %}

{% step %}
### Install Node-RED globally

Once NodeJS is installed, use NPM to install Node-RED as a global module so it is available for all users. You can already start Node-RED without ROS support after installation.

{% code title="Install and start Node-RED" %}
```bash
sudo npm install -g --unsafe-perm node-red
node-red
```
{% endcode %}
{% endstep %}

{% step %}
### Install the Node-RED ROS contrib nodes into the Node-RED workspace

Node-RED automatically uses the default workspace directory \~/.node-red/ to store flows and additional nodes. Install the ROS node to this workspace:

{% code title="Install node-red-contrib-ros" %}
```bash
cd ~/.node-red/
npm install node-red-contrib-ros
```
{% endcode %}
{% endstep %}
{% endstepper %}

#### Booting the Software Stack

We need to start the ROS nodes necessary to control our (real) Turtlebot. Also, we start the Node-RED environment and use the ROS node (inside Node-RED) to send and receive ROS messages. You may find it confusing to use the word node for ROS programs as well as for graphical representations in a workflow at the same time. Unfortunately, I am not fully able to avoid this confusion, but I will try to use the word node mostly in the context of Node-RED, not ROS. Let’s boot!

{% stepper %}
{% step %}
### Start the Turtlebot bringup package

Start your robot:

{% code title="Bringup" %}
```bash
roslaunch turtlebot_bringup minimal.launch
```
{% endcode %}
{% endstep %}

{% step %}
### Start rosbridge for Web access

This runs rosbridge and creates a WebSocket on port 9090 by default:

{% code title="Start rosbridge" %}
```bash
roslaunch rosbridge_server rosbridge_websocket.launch
```
{% endcode %}
{% endstep %}

{% step %}
### Start Node-RED

Start Node-RED and create a configuration node in order to communicate with the ROS master:

{% code title="Start Node-RED" %}
```bash
node-red
```
{% endcode %}

Below are screenshots showing the ROS contrib nodes, the subscription node edit dialog, and the ROS server config node edit dialog:

![](<../../../../../.gitbook/assets/image (57)>) ![](<../../../../../.gitbook/assets/image (58)>) ![](<../../../../../.gitbook/assets/image (59)>)

Congratulations, we have managed to make contact with the ROS system from a Node-RED flow. In the next step, we will subscribe to a topic and process the data we get.
{% endstep %}
{% endstepper %}

#### The first flow that contains a ROS subscription

In this paragraph, we subscribe to the /odom topic and show the output in a debug view. You can copy/paste the flow from below to try a simple /odom subscriber.

{% code title="Odom Subscription flow (Node-RED JSON)" %}
```json
[
    {
        "id": "f0068d88.1517f",
        "type": "tab",
        "label": "Odom Subscription"
    },
    {
        "id": "f41b7a35.858bf",
        "type": "ros-subscribe",
        "z": "f0068d88.1517f",
        "server": "81037215.2ccc8",
        "topicname": "/odom",
        "x": 170,
        "y": 300,
        "wires": [
            [
                "64ec1ad3.029844"
            ]
        ]
    },
    {
        "id": "31cd161a.2f6dda",
        "type": "debug",
        "z": "f0068d88.1517f",
        "name": "print pose",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 720,
        "y": 300,
        "wires": []
    },
    {
        "id": "64ec1ad3.029844",
        "type": "delay",
        "z": "f0068d88.1517f",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 370,
        "y": 300,
        "wires": [
            [
                "1461f4bb.3a3073"
            ]
        ]
    },
    {
        "id": "1461f4bb.3a3073",
        "type": "function",
        "z": "f0068d88.1517f",
        "name": "filter pose",
        "func": "msg.payload = msg.payload.pose;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 560,
        "y": 300,
        "wires": [
            [
                "31cd161a.2f6dda"
            ]
        ]
    },
    {
        "id": "81037215.2ccc8",
        "type": "ros-server",
        "z": "",
        "url": "ws://127.0.0.1:9090"
    }
]
```
{% endcode %}

![](<../../../../../.gitbook/assets/image (60)>)

The image above shows a flow that processes and shows /odom messages from a ROS-based robot:

* subscribe to odom –> each /odom message is injected into the flow from the left
* limit the potentially high rate of /odom to a reasonable 1/s
* filter only the pose from /odom message leaving twist, etc. out
* print the pose object in a debug view on the right

#### Using the Gazebo simulator instead of a real Turtlebot 2

The exact same commands as shown above can also be used when you do not have a real robot. Only one command has to be changed in order to get data from a Turtlebot 2 in the Gazebo simulator. Substitute the first command (bringup package) by:

{% code title="Turtlebot Gazebo world" %}
```bash
roslaunch turtlebot_gazebo turtlebot_world.launch
```
{% endcode %}

That’s it! Happy hacking 😉

![](<../../../../../.gitbook/assets/image (56)>)
