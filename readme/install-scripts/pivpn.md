---
description: simple openvpn or wireguard VPN server.
---

# PiVPN

* **::: INSTALLATION :::**\
  `curl -L https://install.pivpn.io | bash`\
  \
  &#xNAN;**::: Test (unstable) Branch :::**\
  `curl -L https://test.pivpn.io | TESTING= bash`

SIMPLE ::: Yes, that's it! It is \*almost\* that simple.\
To elaborate a little more, you will want to [install Raspberry Pi OS Lite](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) on a Raspberry Pi, we strongly recommend using the latest [Raspberry Pi OS Lite](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit) image but the normal Raspberry Pi OS image will work as well, preferably enable ssh access and then begin.\
After install, you may need to open a port on your router.\
There is a (now slightly outdated) guided walkthrough of the install available [here](https://www.sitepoint.com/setting-up-a-home-vpn-using-your-raspberry-pi/).\
More information is also available on the [PiVPN GitHub](https://github.com/pivpn/pivpn)

FLEXIBLE ::: Think if you can figure out how to do this yourself you'll have more options?\
This installer is no slouch! It will allow you to customize your VPN port, key encryption strength, client DNS server, and more! Even if you are an expert, the options presented within are a perfect foundation for any openvpn server installation. Although this is geared toward running on a $35 Raspberry Pi™, the installer will work just as well on an Ubuntu or Debian server.

MANAGEABLE ::: Installation is finished, now what do you do? No worries, we've got you covered!\
Provided free of charge on your server is a new 'pivpn' command. Simply run pivpn and you are presented with all of the available options. Easily add client profiles, revoke them, list the ones you created, etc. There is also an option to completely remove everything the installer did with the 'pivpn uninstall' command. So you can experiment with pivpn with no fear of irreversible changes to your server.

SECURE ::: Even though this installer makes everything so trivial, it doesn't mean it gives you trivial security settings.\
Everything has been upgraded right out of the box beyond the default settings to harden the security of the server and client. Starting with offering you the ability to enable unattended-upgrades which will automatically patch your server with security updates. Next, the server configuration will only use the latest TLS protocol. Both the data and control channels use upgraded AES and SHA256 encryption and hash algorithms. Options are pre-configured to verify your server certificate to battle MITM attack vectors. All this and more are configured out of the box by the pivpn installer. This is a detailed level of hardening you'll have a difficult time finding elsewhere.

#### About

PiVPN is a set of shell scripts developed to easily turn your Raspberry Pi™ into a VPN server using two free, open-source protocols:

* [Wireguard](https://www.wireguard.com/)
* [OpenVPN](https://openvpn.net/)

This script's primary mission in life is to allow a user to have as cost-effective as possible VPN at home without being a technical wizard, hence the design of PiVPN to work on a Raspberry Pi ($35) with a one-command installer followed by easy management of the VPN with the 'pivpn' command.\
\
That being said ...\
\
PiVPN should be, bar none, the simplest and fastest way to Install and set up an extremely secure OpenVPN or Wireguard server on your Raspberry Pi. You won't need a guide or tutorial as PiVPN will do it all for you in a fraction of the time with hardened security settings in place by default.\
We recommend running PiVPN on the latest Raspberry Pi OS Lite image in a Raspberry Pi at your home so you can VPN into your network from insecure remote locations and safely use the internet. However, you can also use PiVPN in any Cloud Provider VPS running Ubuntu or Debian to assist those with untrustworthy ISPs. Running a VPN on a server elsewhere means you can connect to the VPN from home, and because your traffic will be getting out from the cloud/VPS provider, your ISP will only see encrypted traffic.\
PiVPN should also work with most Ubuntu and Debian based distributions, including those using UFW by default instead of raw iptables.

**Why This Is Important?**

There are a few driving factors that make this very important to us, and we believe, the community at large. In this post-Snowden era where our privacy and security are infringed upon, not only by bad actors but potentially by those whom we thought should be protecting these very ideals, normal citizens must take matters into their own hands. The trouble with this, many times, is that if you are not very technical you may not know how to begin. I believe the EFF has helped lower the barrier of encrypted sites with its [Let's Encrypt ](https://www.eff.org/deeplinks/2014/11/certificate-authority-encrypt-entire-web)initiative. Allowing many to now have their sites on encrypted channels. To us, the next logical step here is also ensuring the pipe you are using is as secure as possible. This not only could include unknown networks at airports, Starbucks, and generic public hot-spots; but also your ISP. To that end, We'd like to make sure these scripts also work on a Debian image from an Amazon free-tier server. It is important that more and more people have access to protecting their traffic online. It's clear others won't hand you this protection. PiVPN tries to make it easier for you to grab.\
Enjoy!

#### Features

* Supports OpenVPN 2.4
* Supports WireGuard
* Elliptic curve encryption keys up to 512 bit
* Integrates with Bitwarden
* iOS keychain support
* Supports multiple DNS providers
* Supports Custom DNS Servers
* Custom Search Domains (OpenVPN Only)
* Runs with [Pi-Hole®](https://pi-hole.net/)
* Doesn't need to be a Raspberry Pi™, It runs on any x86\_64 system
* Supports unattended installation for automated deployments

For more information on PiVPN be sure to check the [PiVPN documentation](https://docs.pivpn.io/)
