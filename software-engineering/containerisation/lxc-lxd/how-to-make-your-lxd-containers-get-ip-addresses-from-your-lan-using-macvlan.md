# How to make your LXD containers get IP addresses from your LAN using macvlan

**Update 22 June 2020** I have updated this post to be compatible with LXD 4.0. I also adapted it in order to create an empty profile that does only the _macvlan_ stuff and is independent of the _default_ profile. Finally, I am calling the profile `macvlan` (previous name: _lanprofile_).

**WARNING #1**: By using macvlan, your computer’s network interface will appear on the network to have more than one MAC address. This is fine for Ethernet networks. However, if your interface is a Wireless interface (with security like WPA/WPA2), then the access point will reject any other MAC addresses coming from your computer. Therefore, all these will not work in that specific case.

**WARNING #2**: If your host is in a virtual machine, then it is likely that the VM software will block the DHCP requests of the containers. There are options on both VMWare and Virtualbox to allow _**Promiscuous mode**_ (somewhere in their Network settings). You need to enable that. Keep in mind that people reported success only on VMWare. Currently, on VirtualBox, you need to switch the network interface on the host into the PROMISC mode, as a workaround.

In LXD terminology, you have the _**host**_ and then you have the many _**containers**_ on this host. The _host_ is the computer where LXD is running. By default, all _containers_ run hidden in a private network on the _host_. The _containers_ are not accessible from the local network, nor from the Internet. However, they have network access to the Internet through the _host_. This is NAT networking.

How can we get some containers to receive an IP address from the LAN and be accessible on the LAN?

This can be achieved [using _**macvlan**_ (L2) virtual network interfaces](https://github.com/lxc/lxd/issues/3273), a feature provided by the Linux kernel.

In this post, we are going to create a new LXD profile and configure _**macvlan**_ in it. Then, we launch new containers under the new profile, or attach existing containers to the new profile (so they get as well a LAN IP address).

### Creating a new LXD profile for macvlan

Let’s see what LXD profiles are available.

```
$ lxc profile list
+------------+---------+
| NAME       | USED BY |
+------------+---------+
| default    | 11      |
+------------+---------+
```

There is a single profile, called _**default**_, the default profile. It is used by 11 LXD containers on this system.

We create a new profile. The new profile is called _**macvlan**_.

```
$ lxc profile create macvlan
Profile macvlan created
$ lxc profile list
+------------+---------+
| NAME       | USED BY |
+------------+---------+
| default    | 11      |
+------------+---------+
| macvlan    | 0       |
+------------+---------+
```

What are the default settings of a new profile?

```
$ lxc profile show macvlan
config: {}
description: ""
devices: {}
name: macvlan
used_by: []
$ 
```

We need to add a _**nic**_ with _**nictype**_ `macvlan` and _**parent**_ to the appropriate network interface on the host and we are then ready to go. Let’s identify the correct parent, using the _ip route_ command. This command shows the default network route. It also shows the name of the _device_ (_**dev**_), which is in this case _**enp5s12**_. (Before systemd, those used to be _**eth0**_ or _**wlan0.**_ Now, the name varies depending on the specific network cards).

```
$ ip route show default 0.0.0.0/0
default via 192.168.1.1 dev enp5s12 proto static metric 100
```

Now we are ready to add the appropriate device to the `macvlan` LXD profile. We use the _**lxc profile device add**_ command to add a _device_ _**eth0**_ to the profile _**lanprofile**_. We set _nictype_ to _macvlan_, and _parent_ to _enp5s12_.

```
$ lxc profile device add macvlan eth0 nic nictype=macvlan parent=enp5s12
Device eth0 added to macvlan
$ lxc profile show macvlan
config: {}
description: ""
devices:
  eth0:
    nictype: macvlan
    parent: enp5s12
    type: nic
name: macvlan
used_by: []
ubuntu@myvm:~$ 
$ 
```

Well, that’s it. We are now ready to launch containers using this new profile, and they will get an IP address from the DHCP server of the LAN.

### Launching LXD containers with the new profile

Let’s launch two containers using the new _**macvlan**_ profile and then check their IP address. We need to specify first the `default` profile, and then the `macvlan` profile. By doing this, the container will get the appropriate base configuration from the first profile, and then the networking will be overridden by the `macvlan` profile.

```
$ lxc launch ubuntu:18.04 net1 --profile default --profile macvlan
Creating net1
Starting net1
$ lxc launch ubuntu:18.04 net2 --profile default --profile macvlan
Creating net2
Starting net2
$ lxc list
+------+---------+---------------------+------+-----------+-----------+
| NAME |  STATE  |        IPV4         | IPV6 |   TYPE    | SNAPSHOTS |
+------+---------+---------------------+------+-----------+-----------+
| net1 | RUNNING | 192.168.1.7 (eth0)  |      | CONTAINER | 0         |
+------+---------+---------------------+------+-----------+-----------+
| net2 | RUNNING | 192.168.1.3 (eth0)  |      | CONTAINER | 0         |
+------+---------+---------------------+------+-----------+-----------+
$ 
```

Both containers got their IP address from the LAN router. Here is the router administration screen that shows the two containers. I edited the names by adding LXD in the front to make them look nicer. The containers look and feel as just like new LAN computers!

[![](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/01/lxd-lan-ip.png?resize=431%2C295\&ssl=1)](https://i0.wp.com/blog.simos.info/wp-content/uploads/2018/01/lxd-lan-ip.png?ssl=1)

Let’s _ping_ from one container to the other.

```
$ lxc exec net1 -- ping -c 3 192.168.1.7
PING 192.168.1.7 (192.168.1.7) 56(84) bytes of data.
64 bytes from 192.168.1.7: icmp_seq=1 ttl=64 time=0.064 ms
64 bytes from 192.168.1.7: icmp_seq=2 ttl=64 time=0.067 ms
64 bytes from 192.168.1.7: icmp_seq=3 ttl=64 time=0.082 ms

--- 192.168.1.7 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2036ms
rtt min/avg/max/mdev = 0.064/0.071/0.082/0.007 ms
```

You can _**ping**_ these containers from other computers on your LAN! But the host and these `macvlan` containers cannot communicate over the network. This has to do with how macvlan works in the Linux kernel.

### Troubleshooting

**Help! I cannot **_**ping**_** between the host and the containers!**

To be able to get the host and containers to communicate with each other, you need some additional changes to the host in order to get added to the _macvlan_ as well. It discusses it [here](http://noyaudolive.net/2012/05/09/lxc-and-macvlan-host-to-guest-connection/), though I did not test because I do not need communication of the containers with the host. If you test it, please report below.

**Help! I do not get anymore those net1.lxd, net2.lxd fancy hostnames!**

The default LXD DHCP server assigns hostnames like net1.lxd, net2.lxd to each container. Then, you can get the containers to communicate with each other using the hostnames instead of the IP addresses.

When using the LAN DHCP server, you would need to configure it as well to produce nice hostnames.

**Help! Can these new **_**macvlan**_** containers read my LAN network traffic?**

The new _**macvlan**_ LXD containers (that got a LAN IP address) can only see their own traffic and also any LAN _broadcast_ packets. They cannot see the traffic meant for the _host_, nor the traffic for the other containers.

**Help! I get the error `Error: Device validation failed “eth0”: Cannot use “nictype” property in conjunction with “network” property`**

A previous version of this tutorial had the old style of how to add a device to a LXD profile. The old style was supposed to work in compatibility mode in newer versions of LXD. But at least in LXD 4.2 it does not, and gives the following error. You should not get this error anymore since I have updated the post. You may get an error if you are using a very old LXD. In that case, report back in the comments please.

```
$ lxc profile device set macvlan eth0 nictype macvlan
Error: Device validation failed "eth0": Cannot use "nictype" property in conjunction with "network" property
$
```

### Summary

With this tutorial, you are able to create containers that get an IP address from the LAN (same source as the host), using macvlan.

A downside is that the host and these `macvlan` containers cannot communicate over the network. For some, this is a neat advantage, because they shield the host from the containers.

The `macvlan` containers are then visible on the LAN and work just like another LAN computer.

This tutorial has been updated with the newer commands to edit a LXD profile (`lxc profile device add`). The older command now gives an error as you can see in the more recent comments below.
