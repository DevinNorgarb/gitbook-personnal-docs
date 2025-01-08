# Setting up a Cloudflare Tunnel on the Raspberry Pi

This project will show you how to set up the Cloudflare tunnel on the Raspberry Pi.

<figure><img src="https://cdn.pimylifeup.com/wp-content/uploads/2022/10/Raspberry-Pi-Cloudflare-Tunnel-Thumbnail.jpg" alt="Raspberry Pi Cloudflare Tunnel"><figcaption></figcaption></figure>

Cloudflare is a company that has become well-known for its DDOS protection services. However, it is also one of the leaders in providing secure and private connections.

One of the products that Cloudflare offers for free is its tunneling service. This tunnel allows you to create a secure connection between your device and the Cloudflare network.

Using Cloudflare’s tunnel on your Raspberry Pi, you don’t have to worry about opening any ports in your firewall. If you want to give access to a service that uses HTTP or HTTPS, you won’t even need Cloudflared installed on another device.

Please note that this guide requires you to have a domain name configured to run through Cloudflare’s services. If you don’t already have a domain name setup, you will need to do this before continuing.

SHOW ALL[Setting up Uptime Kuma on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-uptime-kuma/)109[Setting up a Raspberry Pi Scanner Server using SANE](https://pimylifeup.com/raspberry-pi-scanner-server/)64[Setting up a Valheim Server on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-valheim-server/)110[Setting up FreshRSS on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-freshrss/)63[Setting up a PostgreSQL Database on a Raspberry Pi](https://pimylifeup.com/raspberry-pi-postgresql/)50[Setting up an AirPrint Server on your Raspberry Pi](https://pimylifeup.com/raspberry-pi-airprint/)113[Setting up DAKBoard on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-dakboard/)151[Setting up a LAMP Stack on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-lamp-stack/)62[Setting up your Raspberry Pi as a Syslog Server](https://pimylifeup.com/raspberry-pi-syslog-server/)99[Installing Tailscale to the Raspberry Pi](https://pimylifeup.com/raspberry-pi-tailscale/)89[Installing and Running Wireshark on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-wireshark/)133[Setting up an SQLite Database on a Raspberry Pi](https://pimylifeup.com/raspberry-pi-sqlite/)69[Using NoMachine on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-nomachine/)50[Setting up a WireGuard VPN on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-wireguard/)262[How to Install ZoneMinder on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-zoneminder/)103[Running SerpBear on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-serpbear/)31[How to Set Up Screenly on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-screenly/)80[Running Changedetection.io on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-changedetection/)47[Setting up a Raspberry Pi Captive Portal](https://pimylifeup.com/raspberry-pi-captive-portal/)71[Setting up Grafana on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-grafana/)45[Setting up Raspberry Pi OctoPrint](https://pimylifeup.com/raspberry-pi-octoprint/)25[Setting up Home Assistant on the Raspberry Pi](https://pimylifeup.com/home-assistant-raspberry-pi/)105[Installing Network Manager on Raspberry Pi OS](https://pimylifeup.com/raspberry-pi-network-manager/)129[Raspberry Pi DNS Settings: How to Change the DNS](https://pimylifeup.com/raspberry-pi-dns-settings/)139[How to set up a Raspberry Pi Terraria Server](https://pimylifeup.com/raspberry-pi-terraria-server/)40

### Equipment <a href="#equipment" id="equipment"></a>

Below is a list of the equipment we used when setting up a Cloudflare tunnel on the Raspberry Pi.

#### Recommended

* [Raspberry Pi](https://0g.pimylifeup.com/l8KF94/amazon/raspberrypi)
* [Micro SD Card](https://0g.pimylifeup.com/DUVENo/amazon/microsdcard)
* [Power Supply](https://0g.pimylifeup.com/TwjJnF/amazon/powersupply)
* [Ethernet Cable](https://0g.pimylifeup.com/9YIU76/amazon/ethernetcord) or [Wi-Fi](https://0g.pimylifeup.com/89vmLk/amazon/wifidongle)

#### Optional

* [Raspberry Pi Case](https://pimylifeup.com/raspberry-pi-cases/)
* [HDMI Cable](https://0g.pimylifeup.com/85rGC3/amazon/hdmicables)
* [Monitor](https://0g.pimylifeup.com/wPP3p3/amazon/computermonitor)
* [USB Keyboard](https://0g.pimylifeup.com/FiheVF/amazon/usbkeyboard)
* [USB Mouse](https://0g.pimylifeup.com/2VE9AD/amazon/usbmouse)

This tutorial was last tested on a [Raspberry Pi 400](https://pimylifeup.com/raspberry-pi-400/), running the latest version of [Raspberry Pi OS Bullseye](https://pimylifeup.com/download-raspbian/).

### Preparing your Raspberry Pi for the Cloudflare Tunnel <a href="#preparing-your-raspberry-pi-for-the-cloudflare-tunnel" id="preparing-your-raspberry-pi-for-the-cloudflare-tunnel"></a>

To set up the [Cloudflare tunnel](https://www.cloudflare.com/en-au/products/tunnel/) on the Raspberry Pi, we will rely on a piece of software called “`Cloudflared`“. Cloudflared is the software that creates and maintains the secure tunnel between the Pi and the Cloudflare network.

While these steps are relatively straightforward, we will need to add the official Cloudflare repository to install the required software.

#### Installing any Required Software <a href="#installing-any-required-software" id="installing-any-required-software"></a>

**1.** Our first task is to perform an update of the package list as well as upgrade any out-of-date packages.

You can perform both of these tasks using the following command in the terminal.

```bash
sudo apt update
sudo apt upgrade
```

**2.** Once the update completes, we must ensure we have both the “`curl`” and “`lsb-release`” packages.

Install both of these packages by using the command below in the terminal.

```bash
sudo apt install curl lsb-release
```

* `curl` – We will use curl to grab the GPG key for the Cloudflared repository.
* `lsb-release` – This package allows us to easily retrieve information about the system, such as the release name.

#### Adding the Cloudflare Repository on the Raspberry Pi <a href="#adding-the-cloudflare-repository-on-the-raspberry-pi" id="adding-the-cloudflare-repository-on-the-raspberry-pi"></a>

**3.** With all the required packages in place, we can finally grab the GPG key for the Cloudflared repository and store it on our Raspberry Pi.

To save this key to your device, use the following command.

```bash
curl -L https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-archive-keyring.gpg >/dev/null
```

A GPG key is crucial to verify the packages we are installing are valid and belong to the repository.

**4.** With the GPG key saved into our keyrings folder, our next step is to add the Cloudflared repository to our Raspberry Pi. You can add

```bash
echo "deb [signed-by=/usr/share/keyrings/cloudflare-archive-keyring.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee  /etc/apt/sources.list.d/cloudflared.list
```

**5.** As we have made changes to the available repositories, we will need to perform another update of the package list cache,

You can update this cache by using the following command within the terminal.

```bash
sudo apt update
```

#### Installing Cloudfared to the Raspberry Pi <a href="#installing-cloudfared-to-the-raspberry-pi" id="installing-cloudfared-to-the-raspberry-pi"></a>

**6.** With the repository added, we can now proceed to install the Cloudflared package to our Raspberry Pi.

To install this package, you will want to run the following command.

```bash
sudo apt install cloudflared
```

### Setting up a Cloudflare Tunnel on the Raspberry Pi <a href="#setting-up-a-cloudflare-tunnel-on-the-raspberry-pi" id="setting-up-a-cloudflare-tunnel-on-the-raspberry-pi"></a>

Now that we have prepared our Raspberry Pi, we can set up the Cloudflare tunnel. This tunnel is where your traffic will be run over

#### Authenticating with the Cloudflare Service <a href="#authenticating-with-the-cloudflare-service" id="authenticating-with-the-cloudflare-service"></a>

**1.** Our first step is to create an association between our Raspberry Pi and the Cloudflare service.

We can begin authenticating with the Cloudflare service by using the command below.

```bash
cloudflared tunnel login
```

Ensure you keep Cloudflared open on your device while this process is completed.

**2.** After running the above command, you will see the following message appear within the terminal.

You will want to go to the URL displayed in the message and use it to log in to your Cloudflare account.

```
Please open the following URL and log in with your Cloudflare account:

https://dash.cloudflare.com/argotunnel?callback=https%3A%2F%2Flogin.cloudflareaccess.org%2FXXXXXXXXXX

Leave cloudflared running to download the cert automatically.
```

**3.** Once your Raspberry Pi is successfully authenticated with the Cloudflare service, you will see the following message.

```
You have successfully logged in.
If you wish to copy your credentials to a server, they have been saved to:
/home/pi/.cloudflared/cert.pem
```

#### Creating the Cloudflare Tunnel on the Raspberry Pi <a href="#creating-the-cloudflare-tunnel-on-the-raspberry-pi" id="creating-the-cloudflare-tunnel-on-the-raspberry-pi"></a>

**4.** Now that we are authorized, we can create a Cloudflare tunnel by using the following command.

Ensure you replace “`TUNNELNAME`” with the name you want to assign this tunnel.

```bash
cloudflared tunnel create TUNNELNAME
```

**5.** After running the above command, you will see a message similar to the one below.

You will want to write down the ID as we will need this for later.

```
Tunnel credentials written to /home/pi/.cloudflared/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.json. cloudflared chose this file based on where your origin certificate was found. Keep this file secret. To revoke these credentials, delete the tunnel.

Created tunnel pimytunnel with id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

#### Routing the Tunnel to a Domain Name <a href="#routing-the-tunnel-to-a-domain-name" id="routing-the-tunnel-to-a-domain-name"></a>

**6.** With the tunnel created, we can now route the tunnel to a domain name that we have with Cloudflare. This will allow us to access our Raspberry Pi through that domain name.

For example, if you wanted your Minecraft server or PhotoPrism to be accessible through a particular domain name, you can use the following. However, if the program you want to create a tunnel for doesn’t use the HTTP or HTTPS protocol, the other user will need to have Cloudflared installed.

Ensure you replace “`TUNNELNAME`” with the name of your tunnel and replace “`DOMAINNAME`” with the domain name you want to use.

```bash
cloudflared tunnel route dns TUNNELNAME DOMAINNAME
```

**7.** If the above command worked correctly, you would see a similar message to the one below. This message confirms that Cloudflare created a CNAME that routes to your tunnel.

```
2022-10-18T04:54:54Z INF Added CNAME DOMAINNAME which will route to this tunnel tunnelID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

#### Forwarding your Raspberry Pi Ports through the Cloudflare Tunnel <a href="#forwarding-your-raspberry-pi-ports-through-the-cloudflare-tunnel" id="forwarding-your-raspberry-pi-ports-through-the-cloudflare-tunnel"></a>

**8.** The final task we need to do is connect the Cloudflare tunnel to a destination on our Raspberry Pi.

While the tunnel exists, it isn’t currently linked to anything, so in this example we will be putting it to a specific URL.

When running this command, replace “`PORT`” with the port belonging to the app you want to expose. For example, if you want to expose the HTTP port of your web server, you can use port `80`.

Replace “`TUNNELNAME`” with the name of the tunnel.

```bash
cloudflared tunnel run --url localhost:PORT TUNNELNAME
```

**9.** Once the Cloudflare tunnel has been started, you will see a message similar to the one below.

```
2022-10-18T09:34:40Z INF Starting tunnel tunnelID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
2022-10-18T09:34:40Z INF Cannot determine default configuration path. No file [config.yml config.yaml] in [~/.clouddflare-warp /etc/cloudflared /usr/local/etc/cloudflared]
2022-10-18T09:34:40Z INF Version 2022.10.0
2022-10-18T09:34:40Z INF GOOS: linux, GOVersion: go1.18.6, GoArch: arm
2022-10-18T09:34:40Z INF Settings: map[url:localhost:80]
```

You can close this tunnel at any point by pressing CTRL + C on your keyboard.

**10.** To verify that your Cloudflare tunnel to your Raspberry pi is working, you should now try accessing it through the domain name you set up earlier.

For example, we set up a Cloudflare tunnel for our NGINX web server and accessed it through that.

#### Connecting to your Cloudflare Tunnel on Boot <a href="#connecting-to-your-cloudflare-tunnel-on-boot" id="connecting-to-your-cloudflare-tunnel-on-boot"></a>

**11.** Once you have verified that your Cloudflare tunnel works, you will likely want it to be started when your Raspberry Pi starts.

To do this, we will have to write all of this within a “`config.yml`” file that the Cloudflare daemon will read.

```bash
sudo nano ~/.cloudflared/config.yml
```

**12.**&#x57;ithin this file, you will want to type in the following lines and adjust them for your use case as you go.

* `[TUNNELNAME]` – Replace this value with the name of your tunnel.
* `[USERNAME]` – This value will need to be replaced with your user’s name.
* `[UUID]` – You will need to specify the UUID that you got back in step 5 of this section.
* `[HOSTNAME]` – Swap this value out with the domain name you are planning to utilize. For example, “`test.pimylifeup.com`“.
* `[PORT]` – Finally, replace “**PORT**” with the port you want accessible through the tunnel.
* `[PROTOCOL]` – This is the protocol you want tobe utilized for your service. In the case of a web server, you will want to use “`http`” or “`https`“.\
  \
  However, there are a few other options that you can utilize if the service you are using utilizes a different protocol.
  * `http` – Forward HTTP requests through to the specified service.\
    \
    E.G., `http://localhost:8080`
  * `https` – Forward HTTPS requests to the specified service\
    \
    E.G., `https://localhost:8080`
  * `unix` – Same as HTTP but using a Unix Socket.\
    \
    E.G., `unix:/home/example/exam.sock`
  * `unix+tls` – Same as HTTPS but utilizing a Unix socket.\
    \
    E.G., `unix+tls:/home/example/exam.sock`
  * `tcp` – Proxy a service using the TCP protocol to a local service. (For example, a Minecraft server)\
    \
    E.G., `tcp://localhost:25655`
  * `ssh` – Allows you to proxy an SSH connection to a local service.\
    \
    E.G., `ssh://localhost:22`
  * `rdp` – Proxies a connection made using RDP to the specified service.\
    \
    E.G., `rdp://localhost:338`

```yaml
tunnel: [TUNNELNAME]
credentials-file: /home/[USERNAME]/.cloudflared/[UUID].json

ingress:
    - hostname: [HOSTNAME]
      service: [PROTOCOL]://localhost:[PORT]
    - service: http_status:404
```

**13.** Once you have made these changes within the config file, save and quit by pressing CTRL + X, then Y, followed by the ENTER key.

**14.** With the config file created, we can install it as a service using the following command.

This command will copy our config file to the correct location and prepare a service file for systemd.

```bash
sudo cloudflared --config ~/.cloudflared/config.yml service install
```

**15.** We can enable the Cloudflare tunnel service so that it will start when our Raspberry Pi does by using the following command.

```bash
sudo systemctl enable cloudflared
```

**16.** Finally, you can ensure the tunnel is online now by using the command below within the terminal.

```bash
sudo systemctl start cloudflared
```

### Conclusion <a href="#conclusion" id="conclusion"></a>

This tutorial shows you how to set up a Cloudflare Tunnel on the Raspberry Pi.

A Cloudflare tunnel allows you to create a secure connection to the Cloudflare network without having to open ports on your host machine.

If you only want to serve from HTTP or HTTPS, then you don’t need Cloudflared installed on the client machines.

Please comment below if you have had any issues getting the Cloudflare tunnel running on your Raspberry Pi.

Be sure to check out our many [other Raspberry Pi projects](https://pimylifeup.com/category/projects/), such as our guide on running [Tailscale on the Raspberry Pi](https://pimylifeup.com/raspberry-pi-tailscale/).
