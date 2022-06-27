---
description: 'Credit: https://www.toptal.com/robotics/introduction-to-robot-operating-system'
---

# An Introduction to Robot Operating System: The Ultimate Robot Application Framework

The _Robot Operating System_ (ROS) is not an actual operating system, but a framework and set of tools that provide functionality of an operating system on a heterogeneous computer cluster. Its usefulness is not limited to robots, but the majority of tools provided are focused on working with peripheral hardware.

[ROS](http://www.ros.org/) is split up in more than 2000 packages, each package providing specialized functionality. The number of tools connected to the framework are probably its biggest power.

### Why Should I Use Robot OS? <a href="#why-should-i-use-robot-os" id="why-should-i-use-robot-os"></a>

ROS provides functionality for hardware abstraction, device drivers, communication between processes over multiple machines, tools for testing and visualization, and much more.

The key feature of ROS is the way the software is run and the way it communicates, allowing you to design complex software without knowing how certain hardware works. ROS provides a way to connect a network of processes (nodes) with a central hub. Nodes can be run on multiple devices, and they connect to that hub in various ways.

The main ways of creating the network are providing requestable services, or defining publisher/subscriber connections with other nodes. Both methods communicate via specified message types. Some types are provided by the core packages, but message types can be defined by individual packages.

Developers can assemble a complex system by connecting existing solutions for small problems. The way the system is implemented, it allows us to:

* Replace components with similar interfaces on the fly, removing the need of stopping the system for various changes
* Multiplexing outputs of multiple components into one input for another component, allowing parallel solving of various problems
* Connect components made in various programming languages by just implementing the proper connectors to the messaging system, making it easy to develop software by connecting existing modules from various developers
* Create nodes over a network of devices, without worrying about where code is run and implementing Interprocess communication (IPC) and Remote Procedure Call (RPC) systems
* Directly connect to feeds on demand from remote hardware without writing any extra code, by employing the previous two bullet points

We plan on demonstrating how useful that is by iteratively developing a simple solution. There are several key advantages compared to other approaches. ROS has multi platform support and allows connections between processes over multiple devices via peer-to-peer connections that are handled behind the scene. The design allows support for any language by wrapping the C++ communication classes, or manually developing classes for the language interface.

ROS is made by its own community, meant for its community. After several years, that resulted in a great amount of reusable packages that are simple to integrate, thanks to the architecture of the system.

Alternative approaches like [MRPT](http://www.mrpt.org/), [CARMEN](http://carmen.sourceforge.net/intro.html), [LCM](http://lcm-proj.github.io/), [Player](http://playerstage.sourceforge.net/), [Microsoft RDS](https://msdn.microsoft.com/en-us/library/bb648760.aspx) and others provide some of those features, but not all. Most of the time, the design downfalls are language support limitations, unoptimized communication between processes, or the lack of support for various devices which is arguably the hardest problem to fix.

### What Are We Going to Build? <a href="#what-are-we-going-to-build" id="what-are-we-going-to-build"></a>

Since our focus is the framework and not the actual algorithms for particular problems, the given problem will be fairly simple. Our goal is to build software for an onboard computer that allows us to remotely control and monitor a robot, connected to us via Wi-Fi, by using a gamepad on our computer and a feed from the camera mounted on the robot.

First of all, we’ll make a simple program connect to a simple simulation, just to demonstrate basic principles of ROS. We will attach a gamepad to a computer and try to design a good control scheme for turning gamepad input into control signals for a robot.

The main languages for writing ROS code are C++ and Python, C++ being preferred due to better performance. We will explain our examples in [Python](https://www.toptal.com/python) due to less boilerplate in code and no need for explicit building.

### Installation and Configuration <a href="#installation-and-configuration" id="installation-and-configuration"></a>

ROS versions are referred to by name. As of this date, the latest release is _Jade Turtle_, and the latest LTS version _Indigo Igloo_. Going for the LTS version is preferable, and backwards compatibility isn’t guaranteed in ROS, so all the examples will be written for _Indigo_.

ROS is available on various \*NIX platforms. The officially supported version is on Ubuntu. The OS X, Arch Linux, Debian, Raspbian and Android versions are supported by the community.

We will go through the installation process for Ubuntu 14.04 on desktop. The processes for all supported versions and platforms are available on the official [website](http://wiki.ros.org/indigo/Installation). Virtual machines with ROS installed are also available.

Installation is platform dependent (and most platforms have packages provided), but workspace configuration is the same for all platforms.

#### Installation on Ubuntu <a href="#installation-on-ubuntu" id="installation-on-ubuntu"></a>

ROS provides its own repositories. The first step is adding them.

```
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
sudo apt-key adv --keyserver hkp://pool.sks-keyservers.net --recv-key 0xB01FA116
sudo apt-get update
```

After that you’ll have all hosted packages for all ROS versions available for your Ubuntu version. For example, Ubuntu 14.04 supports `indigo` and `jade`.

Installing the base packages on desktop has one of three options:

* `sudo apt-get install ros-indigo-ros-base` for a minimal installation
* `sudo apt-get install ros-indigo-desktop` for having the basic additional GUI tools
* `sudo apt-get install ros-indigo-desktop-full` for having all official features, including various simulators and libraries for navigation and perception

For the best working experience, the full option is recommended. For installation on devices that will only be used to run nodes, the base version is sufficient. No matter what option you choose, you can install any needed package named `package_name` by running:

```
sudo apt-get install ros-indigo-<package-name>
```

Underscores are replaced by hyphens in the final name, so `stage_ros` will be in the package `ros-indigo-stage-ros`.

The next step is to initialize `rosdep`. Packages in ROS can declare what components they depend on. `rosdep` allows you to compile those packages without too much manual dependency handling. To initialize it, call:

```
sudo rosdep init
rosdep update
```

ROS has several environment variables used by its tools. With the default installation, the bash script to initialize them is located in `/opt/ros/indigo/setup.bash`. Variables need to be initialized within every bash session, so the best solution is to add them to `~/.bashrc`.

```
echo "source /opt/ros/indigo/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

Some packages install external dependencies via `rosinstall`, which is available as a package and installed via `sudo apt-get install python-rosinstall`.

This is the end of the installation on Ubuntu. What follows is a short introduction to installing workspaces.

#### Configuration <a href="#configuration" id="configuration"></a>

Ever since _Groovy Galapagos_, ROS workspaces are managed via `catkin`. We need to define a directory for all packages that we host. Within the directory we create a `src` folder, and call `catkin_init_workspace` form inside it. That will create various symbolic links to the currently sourced ROS version. The next step is to add this workspace to environment variables as well.

To perform this whole workspace configuration, choose an empty directory and execute the following commands:

```
mkdir src
cd src
catkin_init_workspace
cd ..
catkin_make
echo "source $(pwd)/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

You have now created a workspace within which you can create your own ROS packages.

Creating any code is a big jump. Let’s first get familiar with some of the systems running behind the scene. Our first step will be running the basic GUI and seeing what messages it generates.

To run anything in ROS, a core process needs to be launched. It’s as easy as opening a new terminal window and typing:

```
roscore
```

In your whole connected network of devices, `roscore` needs to be launched only once, on the device that will host the central hub for communication dispatching.

The main role of `roscore` is to tell nodes which other nodes they should connect to, and in which way (whether via a network port or shared memory). The goal is to allow nodes to only care about what data they want to know, rather than what node they want to connect to, while minimizing the time and bandwidth needed to perform all communication.

#### rqt <a href="#rqt" id="rqt"></a>

After running `roscore`, we can launch the main GUI tool for ROS: `rqt`. What we see is very underwhelming - an empty window. `rqt` hosts a wide variety of plugins that can be configured into any visual configuration and any number of predefined views.



For a start, let’s run the _Robot Steering_ plugin, by choosing it in `Plugins > Robot Tools > Robot Steering`. What we get is two sliders, representing the linear and rotational motion we want our robot to have. At the top of the plugin we see a text box with `/cmd_vel` in it. We can rename it to anything we want. It represents the name of the topic to which the steering is publishing. The terminal tools are the best place to see what’s going on in the background.



#### Terminal Tools <a href="#terminal-tools" id="terminal-tools"></a>

ROS has several powerful tools for inspecting what is happening in the system. The first tool we’ll introduce is `rostopic`. It allows us to inspect topics that nodes can subscribe and publish to. Running `rostopic list` will yield:

```
/cmd_vel
/rosout
/rosout_agg
```

The latter 2 topics are always running and are related to central ROS systems. The `/cmd_vel` topic is being published by our steering. Renaming the topic in the steering will rename it here as well. Now, we are interested in what’s going on within the topic. Running `rostopic echo /cmd_vel` will show us nothing (unless you tinkered with the sliders). The process runs until we cancel it. Let us now move the vertical slider to 20 m/s. Looking at the echo, we can see the following repeated over and over again:

```
linear:
  x: 0.2
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0
```

How often does it spam this message? `rostopic hz /cmd_vel` says at an average rate of 10 Hz. Well, how many topics like this can I run through my slow Wi-Fi connection? `rostopic bw /cmd_vel` detects an average of 480 B/s.

Now that’s all well and good, but we talked about message types. This data is good for a human, but an application will need the raw data, and will need to know the message type so it can interpret the data. The type can be determined with `rostopic type /cmd_vel`, telling us it’s a `geometry_msgs/Twist`. All of ROS terminal tools called without any arguments return a standard help message.

The ROS Wiki is good enough to make a web search for this string result in a Wiki explanation to what it contains and how it’s structured. But we don’t have to rely on it. `rosmsg` is the general tool for message types. Running `rosmsg show geometry_msgs/Twist` will return:

```
geometry_msgs/Vector3 linear
  float64 x
  float64 y
  float64 z
geometry_msgs/Vector3 angular
  float64 x
  float64 y
  float64 z
```

The message consists of two 3D vectors, representing linear and angular velocity in 3D space.

If we want what topics a node is connected to, `rosnode info <node-name>` will give us detailed data about the node. The tools `rostopic`, `rosmsg` and `rosnode` are the main tools for inspecting raw ROS functionality. ROS has a lot more GUI and terminal tools, but those are out of our scope for this introduction.

The main tools for running ROS nodes are `rusrun` and `roslaunch`. `rosrun` can run nodes via `rosrun <package_name> <node_name>`, and `roslaunch` runs nodes based on launch files, which we’ll get familiar with to a tiny extent since they are the most complex element of the ROS automation.

We can shut down everything we ran to start working on our first code. For future reference, it will go without saying that running anything ROS related requires an active instance of `roscore`. A lot of issues you run into can be resolved by closing the terminal window that `roscore` is run within, and opening a new one to relaunch it. This updates all dependencies that needed to be reloaded, both in `bash` and in `roscore`.

### Creating Gamepad Teleoperation <a href="#creating-gamepad-teleoperation" id="creating-gamepad-teleoperation"></a>

Our first goal is to imitate the functionality of `Robot Steering` by creating a node that publishes `geometry_msgs/Twist` data to `/cmd_vel` based on gamepad input. Our first stop is the `joy` package.

#### The `joy` Package <a href="#the-joy-package" id="the-joy-package"></a>

The `joy` package provides generic ROS drivers for joysticks and gamepads. It is not included in the default installation, so it needs to be installed via:

```
sudo apt-get install ros-indigo-joy
```

After the installation, we can run `rosrun joy joy_node`. This will connect us to the default joystick or gamepad. Running `rostopic list` shows us that we have a topic called `/joy`. Listening to it via `rostopic echo` shows us messages of the following format (note that you have to interact with the gamepad or joystick for messages to be published).

```
header:
  seq: 4156
  stamp:
    secs: 1450707466
    nsecs: 204517084
  frame_id: ''
axes: [0.0, 0.0, 0.0, -0.0, 0.0, 0.0, 0.0, 0.0]
buttons: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

You can ignore headers for now. Other than that, we have `axes` and `buttons`, explaining nicely what they represent. Moving axes and pushing buttons on the controller will result in these numbers changing. Using our tools, we can determine that the message type is `sensor_msgs/Joy` and the format is:

```
std_msgs/Header header
  uint32 seq
  time stamp
  string frame_id
float32[] axes
int32[] buttons
```

#### Creating Our Teleoperation <a href="#creating-our-teleoperation" id="creating-our-teleoperation"></a>

The first step to writing code is making a package. Within the `src` folder of the workspace, run:

```
catkin_create_pkg toptal_tutorial rospy joy geometry_msgs sensor_msgs
```

Here we state the name of the package we’re creating, followed by packages we plan to depend upon. No worries, dependencies can be updated manually later on.

We now have a `toptal_tutorial` folder. Within the folder, create a `scripts` folder that will house all our Python scripts.

Let’s create a file called `teleop.py`, and within it we’ll set:

```
#!/usr/bin/env python

import rospy
from sensor_msgs.msg import Joy


def joy_callback(data):
    print data


def main():
    rospy.init_node('teleop')
    rospy.Subscriber('joy', Joy, joy_callback)

    while not rospy.is_shutdown():
        pass


if __name__ == '__main__':
    main()
```

We’ll also need to set `chmod +x teleop.py` so the script becomes runnable. Running `rosrun joy joy_node` in one terminal and `rosrun toptal_tutorial teleop.py` in another will result in `teleop.py`’s terminal output being filled with Joy messages.

Let’s examine what the code does.

First, we import rospy, which hosts the library for interacting with the ROS framework. Each package that defines messages has a `msg` subpackage with message definitions in it. We are importing `Joy` to handle the input. There is no need to import embedded message types (like `Header` from `std_msgs.msg` that is in the `Joy` message) unless we want to explicitly mention them.

Our first step is initializing a node with a specific name (in this case, we call it “teleop”). After that we create a subscriber that subscribes to the “joy” topic of type `sensor_msgs.msg.Joy`, and that handles each message by calling the `joy_callback` function. Callbacks receive one parameter, the data from the message. Accessing members of the data is simple. If we wanted to print the state of the first axis, if we recall the message type, we would call `print data.axes[0]`, and it will be a float. The loop at the end loops until ROS is shut down.

Our next step would be to handle our data somehow. We should create a Twist message that changes depending on the input, and then we would publish it to the `cmd_vel` topic.

```
#!/usr/bin/env python

import rospy
from sensor_msgs.msg import Joy
from geometry_msgs.msg import Twist  # new
from functools import partial  # new


def joy_callback(pub, data):  # modified
    cmd_vel = Twist()  # new
    cmd_vel.linear.x = data.axes[1]  # new
    cmd_vel.angular.z = data.axes[0]  # new
    pub.publish(cmd_vel)  # new


def main():
    rospy.init_node('teleop')
    pub = rospy.Publisher('cmd_vel', Twist, queue_size=1000)  # new
    rospy.Subscriber('joy', Joy, partial(joy_callback, pub))  # modified

    while not rospy.is_shutdown():
        pass


if __name__ == '__main__':
    main()
```

First, we add the `Twist` message, and we add support for binding function arguments via `functools.partial`. We create a publisher, `pub`, that publishes to `cmd_vel` a message of type `Twist`. We bind that publisher to the callback, and make it publish a Twist message on every input with the speeds being represented by the first two axes. This code does what we expect it to, and we can see the resulting output via `rostopic echo /cmd_vel`.

We still have one issue. The `/joy` topic can publish at great rates. If we monitor the `rostopic hz /cmd_vel` and move the analog stick in circles, we can see great numbers of messages. Not only does that result in a great amount of communication, but the processes that receive these messages have to process each one of them. There is no need to publish that data so frequently, and we are better off just publishing at a stable rate of 10 Hz. We can accomplish that with the following code.

```
#!/usr/bin/env python

import rospy
from sensor_msgs.msg import Joy
from geometry_msgs.msg import Twist
from functools import partial


def joy_callback(cmd_vel, data):  # modified
    cmd_vel.linear.x = data.axes[1]
    cmd_vel.angular.z = data.axes[0]
    # moved pub.publish(cmd_vel) to main loop


def main():
    rospy.init_node('teleop')

    cmd_vel = Twist()  # new

    pub = rospy.Publisher('cmd_vel', Twist, queue_size=1000)
    rospy.Subscriber('joy', Joy, partial(joy_callback, cmd_vel))  # modified

    rate = rospy.Rate(10)  # new
    while not rospy.is_shutdown():
        pub.publish(cmd_vel)  # new
        rate.sleep()  # new


if __name__ == '__main__':
    main()
```

We modified the callback to receive the mutable `Twist` object and modify it within the loop. The `sleep` function from `rospy.Rate` maintains a stable output frequency.

The final code will result in the `/cmd_vel` topic getting velocity commands at 10 Hz, imitating the output of the _Robot Steering_ `rqt` plugin.

### Running a Simulated System <a href="#running-a-simulated-system" id="running-a-simulated-system"></a>

#### Simulating the World <a href="#simulating-the-world" id="simulating-the-world"></a>

Our first goal is to create an environment in which we can simulate a scenario we want to achieve. The node `stageros` within the `stage_ros` package allows us to run one robot within a 2D stage defined via an image. There is a whole syntax, described within the [`stage_ros` package](http://wiki.ros.org/stage\_ros) for world files and how to generate them. It’s fairly simple, but outside of our scope. Luckily, the package comes with several demo world. First, let’s go to the files’ directory by running:

```
roscd stage_ros
cd world
```

Within the folder there are several files. Let’s run one.

```
rosrun stage_ros stageros willow-erratic.world
```

This created several topics. The meaning of each of them is also documented with the package. The important part is that it has `cmd_vel`.



Within the displayed stage, there is a blue square, representing the robot you control. By using either our code or _Robot Steering_, we can control this robot. Try it out.

#### Setting up our system via launch files <a href="#setting-up-our-system-via-launch-files" id="setting-up-our-system-via-launch-files"></a>

let’s create a `launch` folder within our package, and within it create a file called `teleop.launch`. The final folder structure should look like this:

```
toptal_tutorial/
├── CMakeLists.txt
├── launch
│   └── teleop.launch
├── package.xml
├── scripts
│   └── teleop.py
└── src
```

Within the `teleop.launch` file we will define a set of nodes and their interconnections.

```
<launch>
  <arg name="world_file" default="$(find stage_ros)/world/willow-four-erratics-multisensor.world" />
  <node pkg="stage_ros" type="stageros" name="simulated_world" args="$(arg world_file)"></node>
  <group ns="robot_0">
    <node pkg="joy" type="joy_node" name="joy_input"></node>
    <node pkg="toptal_tutorial" type="teleop.py" name="joy_convert"></node>
  </group>
</launch>
```

The new world consists of four robots, and each of their topics has a prefix of `robot_<n>`. So, the robot number 0 has a velocity command topic called `robot_0/cmd_vel`. That is why we put our control within a namespace called `robot_0`, to adjust their names to the new form. In that sense, you can think of topic names as folders in a filesystem.



To run launchfiles, no `roscore` is needed. In a sense, `roscore` is just a special case of a launchfile that does nothing. If a `roscore` is missing, only the first launchfile launched will run a core, while the rest will connect to it. Now, we run the launch with:

```
roslaunch toptal_tutorial teleop.launch
```

If all is correct, this will result in a simulator with 4 robots, one of which is controlled with our gamepad or joystick. This world has a lot more under the hood than the previous one. Each of the four robots has:

```
/robot_<n>/base_pose_ground_truth
/robot_<n>/base_scan_0
/robot_<n>/base_scan_1
/robot_<n>/camera_info_0
/robot_<n>/camera_info_1
/robot_<n>/cmd_vel
/robot_<n>/depth_0
/robot_<n>/depth_1
/robot_<n>/image_0
/robot_<n>/image_1
/robot_<n>/odom
```

We replace `<n>` with 0, 1, 2, or 3. This brings us to our last topic.

#### Viewing Our Data with `rqt` <a href="#viewing-our-data-with-rqt" id="viewing-our-data-with-rqt"></a>

We didn’t go too deep into `rqt`, but it is the perfect tool for viewing more complex data. You can experiment with all the topics, but we’ll focus on the `image_0`, `image_1`, `depth_0`, and `depth_1` topics.

Let’s launch `rqt` and remove any opened plugins. Now we’ll open 4 image visualizers (`Plugins > Visualization > Image View`), and place them in a 2x2 grid formation. Finally, in the top left corner of each of the views, let’s choose one of the four stated topics for `robot_0`.



What we get is stereo vision with depth perception, with low resolution cameras. Bear in mind that we could have even gotten this result without our input system. If we just run this (from within the `stage_ros/world` folder):

```
rosrun stage_ros stageros willow-four-erratics-multisensor.world
```

and add the _Robot Steering_ plugin with a topic called `/robot_0/cmd_vel`, we would have gotten the same results with the controls being on-screen sliders.

#### Applying the Results to a Real System <a href="#applying-the-results-to-a-real-system" id="applying-the-results-to-a-real-system"></a>

A lot of hardware has full support for ROS, very often provided by third party volunteers. Many robot platforms have drivers that generate these types of messages, and ROS has nodes that take a webcam and publish an image feed.

While the last result was a simulation of what we want to achieve, the same can be achieved with the following modifications:

* Install ROS on the onboard computer of your robot
* Create a launchfile for the onboard computer that connects ROS to the underlying platform and all high level sensors like cameras, laser range finders and others. The needed nodes can already exist, or can be implemented by creating a publisher/subscriber to ROS on one side, and a driver for serial communications on the other
* Have the launchfile run at startup
* On your remote computer add `export ROS_MASTER_URI=http://<robot_hostname>:11311/` to your bash startup, making the remote computer look for `roscore` on that given hostname and port
* Launch `rqt` and/or any scripts for monitoring and controlling the robot

What this really comes down to is just exporting the proper environment variable on the remote device, and the rest handles itself. Running ROS on a computer cluster only needs that one step being done for every machine.

### Conclusion <a href="#conclusion" id="conclusion"></a>

We have demonstrated how, with very little coding, you can have a complex system of variables that you can manipulate at your whim. The simple publisher/subscriber system allows you to quickly develop software pipeline that processes data in a cluster of computers, while not worrying about the underlying implementation of certain elements.

While we used a simple simulator, more complex simulators like `gazebo` (also included in the full desktop version) allow you to create [3D worlds with physics and complex sensors](https://www.youtube.com/watch?v=9CGIcc0jeuI), and can give you an experience of the final results and product long before it’s developed.

This introduction was a very basic one, but the hope is that you became more interested in working with this versatile framework.
