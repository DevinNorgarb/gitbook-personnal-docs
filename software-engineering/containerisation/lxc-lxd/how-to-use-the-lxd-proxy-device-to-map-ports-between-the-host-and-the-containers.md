# How to use the LXD Proxy Device to map ports between the host and the containers

LXD supports [_**proxy devices**_](https://github.com/lxc/lxd/blob/master/doc/containers.md#type-proxy), which is a way to proxy connections between the host and containers. This includes _TCP, UDP and Unix socket connections_. For example, when someone connects to your host on port 80 (http), then this connection can be proxied to a container using a _proxy device_. In that way, you can isolate your Web server into a LXD container. By using a TCP proxy device, you do not need to use `iptables` instead.

Earlier I wrote that you can make a connection in any direction. For example, you can[ expose the host’s Unix socket for X11 into the container so that the container can run X11 applications and have them appear on the host’s X11 server](https://blog.simos.info/how-to-easily-run-graphics-accelerated-gui-apps-in-lxd-containers-on-your-ubuntu-desktop/). Or, in the other way round, you can [make available LXD’s Unix socket at the host to a container so that you can manage LXD from inside a container](https://blog.simos.info/how-to-manage-lxd-from-within-one-of-its-containers/).

Note that LXD 3.0.x only supports _**TCP to TCP**_ proxy devices. Support for UDP and Unix sockets was added in later versions.

### Launching a container and setting up a Web server

Let’s launch a container, install a Web server, and, then expose the Web server to the local network (or the Internet, if you are using a VPS/Internet server).

First, launch the container.

```
$ lxc launch ubuntu:18.04 mycontainer
Creating mycontainer
Starting mycontainer
```

We get a shell into the container, update the package list and install `nginx`. Finally, verify that `nginx` is running.

```
ubuntu@mycontainer:~$ sudo apt update
ubuntu@mycontainer:~$ sudo apt install -y nginx
ubuntu@mycontainer:~$ curl http://localhost
...
 Welcome to nginx! 
```

### Exposing the Web server of a container to the Internet

We logout to the host and verify that there is no Web server already running on port 80. If port 80 is not available on your host, change it to something else, like 8000. Finally, we create _**the TCP to TCP LXD Proxy Device**_.

```
ubuntu@mycontainer:~$ logout
$ lxc config device add mycontainer myport80 proxy listen=tcp:0.0.0.0:80 connect=tcp:127.0.0.1:80
Device myport80 added to mycontainer
```

The command that creates the proxy device is made of the following components.

1. `lxc config device add`, we _**config**_ure to have a _**device**_ _**add**_ed,
2. `mycontainer`, to the container _**mycontainer**_,
3. `myport80`, with name _**myport80**_,
4. `proxy`, a _**proxy**_ device, we are adding a LXD Proxy Device.
5. `listen=tcp:0.0.0.0:80`, we _**listen**_ (on the host by default) on all network interfaces on TCP port 80.
6. `connect=tcp:127.0.0.1:80`, we connect (to the container by default) to the existing TCP port 80 on localhost, which is our `nginx`.

Note that previously you would specify hostnames when you were creating LXD Proxy Devices. This is no longer supported (has security implications), therefore you get an error if you specify a hostname such as `localhost`. This post was primarily written because the top Google result on proxy devices is an old Reddit read-only post that suggests to use `localhost`.

Let’s test that the Web server in the container is accessible on the host. We can use both `localhost` (or `127.0.0.1`) on the host to access the website of the container. We can also use the public IP address of the host (in this case, the LAN IP address) to access the container.

```
$ curl http://localhost
...
 Welcome to nginx! 
...
$ curl http://192.168.1.100
...
 Welcome to nginx! 
...
```

### Other features of the proxy devices

By default, a proxy device exposes an existing service in the container to the host. If we need to expose an existing service on the host to a container, we would add the parameter `bind=container` to the proxy device command.

You can expose a single webserver to a port on the host. But how do you expose many web servers in containers to the host? You can use a reverse proxy that goes in front of the containers. To retain the remote IP address of the clients visiting the Web servers, you can add the `proxy_protocol=true` to enable support for the PROXY protocol. Note that you also need to enable the PROXY protocol on the reverse proxy.

![Simos Xenitellis](https://secure.gravatar.com/avatar/5c04c6b5f513d926ea9d77782a3843a1?s=100\&d=wavatar\&r=g)
