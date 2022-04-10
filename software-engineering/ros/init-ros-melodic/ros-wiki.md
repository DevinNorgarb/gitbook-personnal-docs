# ROS Wiki

### Ubuntu install of ROS Melodic <a href="#ubuntu_install_of_ros_melodic" id="ubuntu_install_of_ros_melodic"></a>

We are building Debian packages for several Ubuntu platforms, listed below. These packages are more efficient than source-based builds and are our preferred installation method for Ubuntu. Note that there are also packages available from Ubuntu upstream. Please see UpstreamPackages to understand the difference.

Ubuntu packages are built for the following distros and architectures.

| Distro | amd64 | arm64 | armhf |
| ------ | ----- | ----- | ----- |
| Artful | X     |       |       |
| Bionic | X     | X     | X     |

If you need to install from source (**not recommended**), please see source (download-and-compile) installation instructions.

**If you rely on these packages, please support OSRF.**

These packages are built and hosted on infrastructure maintained and paid for by the [Open Source Robotics Foundation](http://www.osrfoundation.org), a 501(c)(3) non-profit organization. If OSRF were to receive one penny for each downloaded package for just two months, we could cover our annual costs to manage, update, and host all of our online services. Please consider [donating to OSRF today](https://www.openrobotics.org/support-the-ros-buildfarm).

Contents

1. [Ubuntu install of ROS Melodic](../../../ros/init-ros-melodic/broken-reference/)
   1. [Installation](../../../ros/init-ros-melodic/broken-reference/)
      1. [Configure your Ubuntu repositories](../../../ros/init-ros-melodic/broken-reference/)
      2. [Setup your sources.list](../../../ros/init-ros-melodic/broken-reference/)
      3. [Set up your keys](../../../ros/init-ros-melodic/broken-reference/)
      4. [Installation](../../../ros/init-ros-melodic/broken-reference/)
      5. [Environment setup](../../../ros/init-ros-melodic/broken-reference/)
      6. [Dependencies for building packages](../../../ros/init-ros-melodic/broken-reference/)
      7. [Build farm status](../../../ros/init-ros-melodic/broken-reference/)
   2. [Tutorials](../../../ros/init-ros-melodic/broken-reference/)

#### Configure your Ubuntu repositories <a href="#installation.2fubuntu.2fsources.configure_your_ubuntu_repositories" id="installation.2fubuntu.2fsources.configure_your_ubuntu_repositories"></a>

Configure your Ubuntu repositories to allow "restricted," "universe," and "multiverse." You can [follow the Ubuntu guide](https://help.ubuntu.com/community/Repositories/Ubuntu) for instructions on doing this.

#### Setup your sources.list <a href="#installation.2fubuntu.2fsources.setup_your_sources.list" id="installation.2fubuntu.2fsources.setup_your_sources.list"></a>

Setup your computer to accept software from packages.ros.org.

* ```
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```

#### Set up your keys <a href="#installation.2fubuntu.2fsources.set_up_your_keys" id="installation.2fubuntu.2fsources.set_up_your_keys"></a>

* ```
  sudo apt install curl # if you haven't already installed curl
  curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```

#### Installation <a href="#installation-1" id="installation-1"></a>

First, make sure your Debian package index is up-to-date:

* ```
  sudo apt update
  ```

There are many different libraries and tools in ROS. We provided four default configurations to get you started. You can also install ROS packages individually.

In case of problems with the next step, you can use following repositories instead of the ones mentioned above [ros-shadow-fixed](http://wiki.ros.org/ShadowRepository)

*   **Desktop-Full Install: (Recommended)** : ROS, rqt, rviz, robot-generic libraries, 2D/3D simulators and 2D/3D perception

    *   ```
        sudo apt install ros-melodic-desktop-full
        ```

        or [click here](apt:ros-melodic-desktop-full?refresh=yes)

    **Desktop Install:** ROS, rqt, rviz, and robot-generic libraries

    *   ```
        sudo apt install ros-melodic-desktop
        ```

        or [click here](apt:ros-melodic-desktop?refresh=yes)

    **ROS-Base: (Bare Bones)** ROS package, build, and communication libraries. No GUI tools.

    *   ```
        sudo apt install ros-melodic-ros-base
        ```

        or [click here](apt:ros-melodic-ros-base?refresh=yes)

    **Individual Package:** You can also install a specific ROS package (replace underscores with dashes of the package name):

    *   ```
        sudo apt install ros-melodic-PACKAGE
        ```

        e.g.

        ```
        sudo apt install ros-melodic-slam-gmapping
        ```

To find available packages, use:

```
apt search ros-melodic
```

#### Environment setup <a href="#melodic.2finstallation.2fdebenvironment.environment_setup" id="melodic.2finstallation.2fdebenvironment.environment_setup"></a>

It's convenient if the ROS environment variables are automatically added to your bash session every time a new shell is launched:

```
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

_If you have more than one ROS distribution installed, \~/.bashrc must only source the setup.bash for the version you are currently using._

If you just want to change the environment of your current shell, instead of the above you can type:

```
source /opt/ros/melodic/setup.bash
```

If you use zsh instead of bash you need to run the following commands to set up your shell:

```
echo "source /opt/ros/melodic/setup.zsh" >> ~/.zshrc
source ~/.zshrc
```

#### Dependencies for building packages <a href="#installation.2fubuntu.2fbinariesbuilddependencies.dependencies_for_building_packages" id="installation.2fubuntu.2fbinariesbuilddependencies.dependencies_for_building_packages"></a>

Up to now you have installed what you need to run the core ROS packages. To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. For example, rosinstall is a frequently used command-line tool that enables you to easily download many source trees for ROS packages with one command.

To install this tool and other dependencies for building ROS packages, run:

```
sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential
```

**Initialize rosdep**

Before you can use many ROS tools, you will need to initialize rosdep. rosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed rosdep, do so as follows.

```
sudo apt install python-rosdep
```

With the following, you can initialize rosdep.

```
sudo rosdep init
rosdep update
```

#### Build farm status <a href="#build_farm_status" id="build_farm_status"></a>

The packages that you installed were built by the [ROS build farm](http://build.ros.org). You can check the status of individual packages [here](http://repositories.ros.org/status\_page/ros\_melodic\_default.html).

### Tutorials <a href="#melodic.2finstallation.2fpostinstall.tutorials" id="melodic.2finstallation.2fpostinstall.tutorials"></a>

Now, to test your installation, please proceed to the ROS Tutorials.

Wiki: melodic/Installation/Ubuntu (last edited 2020-03-25 20:11:49 by TullyFoote)
