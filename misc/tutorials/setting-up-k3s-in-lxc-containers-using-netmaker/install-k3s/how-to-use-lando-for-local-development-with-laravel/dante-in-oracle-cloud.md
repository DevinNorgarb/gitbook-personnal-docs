# Dante in Oracle Cloud

![](<../../../../../.gitbook/assets/image (61)>)

Here’s a step-by-step guide on how to create a personal, cost-free SOCKS5 anonymous proxy with support for UDP ASSOCIATE (RFC1928) in Oracle Cloud. The chosen solution is Dante (Inferno Nettverk A/S) running on an Ubuntu 20.04 instance in Oracle Cloud Free Tier.

### Install Ubuntu Instance

We will use an Oracle Cloud Infrastructure Free Tier account to set up a compute instance on Ubuntu.

#### Before You Begin

You must have:

* An Oracle Cloud Infrastructure Free Tier account. https://www.oracle.com/cloud/free/
* A macOS, Linux, or Windows computer with ssh support installed.

#### Create a VM instance

Use the Create a VM Instance wizard to create the compute instance. The wizard will create the instance, a VCN/subnet, and an SSH key pair.

{% stepper %}
{% step %}
### Start the Create VM Instance wizard

* From the main landing page, select Create a VM instance.
* The Create compute instance page appears with sections for Placement, Image and shape, Networking, Add SSH keys, and Boot volume.
{% endstep %}

{% step %}
### Name and compartment

* Name: `<name-for-the-instance>`
* Create in compartment: `<your-compartment-name>`\
  Enter a value for the name, or leave the system-supplied default.
{% endstep %}

{% step %}
### Placement

* Click Edit.
* Click Show advanced options.
* Leave defaults (for example):
  * Availability domain: AD-1
  * Capacity type: On-demand capacity
  * Fault domain: Let Oracle choose
{% endstep %}

{% step %}
### Image and Shape

* Click Edit → Change image → Select the latest Ubuntu image (e.g., Canonical Ubuntu 20.04).
* Take default values for Shape (e.g., VM.Standard.E2.1.Micro — 1 OCPU, 1 GB RAM).
{% endstep %}

{% step %}
### Networking

* Use the default VCN/subnet created by the wizard.
* Assign a public IPv4 address: Yes
{% endstep %}

{% step %}
### Add SSH keys

* Select Generate a key pair for me (or provide your own public key).
* Click Save Private Key and Save Public Key to download the keys.
{% endstep %}

{% step %}
### Boot volume

* Leave default values. Leave all check boxes unchecked.
{% endstep %}

{% step %}
### Create

* Click Create. Provisioning may take several minutes.
{% endstep %}
{% endstepper %}

You now have an Ubuntu instance ready to run Dante.

### Enable Internet Access (VCN Security Lists)

The Create VM Instance wizard created a VCN. Add ingress rules to allow TCP 1080 and UDP port range 40000-45000.

{% stepper %}
{% step %}
### Open VCN details

1. Open the navigation menu → Networking → Virtual Cloud Networks.
2. Select the VCN created with your instance.
3. Click the public subnet link (your-subnet-name).
4. Click the Default Security List link.
{% endstep %}

{% step %}
### Add TCP ingress rule for SOCKS5

* Click Add Ingress Rules.
* Fill in:
  * Stateless: Checked
  * Source Type: CIDR
  * Source CIDR: 0.0.0.0/0
  * IP Protocol: TCP
  * Source port range: (leave blank)
  * Destination Port Range: 1080
  * Description: Allow SOCKS5 TCP connections
* Click Add Ingress Rules.
{% endstep %}

{% step %}
### Add UDP ingress rule for UDP ASSOCIATE

* Click Add Ingress Rules.
* Fill in:
  * Stateless: Checked
  * Source Type: CIDR
  * Source CIDR: 0.0.0.0/0
  * IP Protocol: UDP
  * Source port range: (leave blank)
  * Destination Port Range: 40000-45000
  * Description: Allow SOCKS5 UDP ASSOCIATE
* Click Add Ingress Rules.
{% endstep %}
{% endstepper %}

Your VCN is now configured for Dante SOCKS5 server access.

### Install and configure Dante SOCKS5 proxy

Follow these steps to install Dante and configure SOCKS5 with UDP ASSOCIATE.

{% stepper %}
{% step %}
### Connect to your instance

1. In Oracle Console: Compute → Instances → Click your instance. Note the Public IP Address.
2. On your local machine open a Terminal / Command Prompt.
3. Change to the directory where you saved your SSH private key.
4. Connect:

```bash
ssh -i <your-private-key-file> ubuntu@<x.x.x.x>
```

This logs you into the instance. You can run sudo commands.
{% endstep %}

{% step %}
### Install Dante

Run:

```bash
sudo apt update
sudo apt install dante-server
```

Check Dante version:

```bash
danted -v
# Example:
# Dante v1.4.2.  Copyright (c) 1997 - 2014 Inferno Nettverk A/S, Norway
```
{% endstep %}

{% step %}
### Identify server interface

Check network interfaces to determine the internal/external interface (example uses ens3):

```bash
ip a
```

Example shows ens3 with an IP like 10.0.0.196/24.
{% endstep %}

{% step %}
### Backup and edit configuration

Backup default config:

```bash
sudo mv /etc/danted.conf /etc/danted.conf.bak
sudo nano /etc/danted.conf
```

Paste this configuration (adjust interface name if needed):

```
logoutput: /var/log/socks.log
internal: ens3 port = 1080
external: ens3
clientmethod: none
socksmethod: none
user.privileged: root
user.notprivileged: nobody

client pass {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        log: error connect disconnect
}
client block {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        log: connect error
}
socks pass {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        udp.portrange: 40000-45000
        #command: udpassociate
        log: error connect disconnect
}
socks block {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        log: connect error
}
```

Save and exit.
{% endstep %}

{% step %}
### Start and enable Dante

Start and check status:

```bash
sudo systemctl start danted
systemctl status danted
```

Enable automatic start after reboot:

```bash
sudo systemctl enable danted
```
{% endstep %}
{% endstepper %}

### Configure iptables

Allow incoming TCP 1080 and UDP 40000:45000. If you want rules persisted after reboot, install iptables-persistent.

Run as root:

```bash
sudo su

# iptables -I INPUT -p tcp -m state --state NEW -m tcp --dport 1080 -j ACCEPT
# iptables -I INPUT -p udp --dport 40000:45000 -j ACCEPT
# iptables-save > /etc/iptables/rules.v4

exit
```

### Dante SOCKS5 Test

Test using curl:

```bash
curl -x socks5://<your_ip_server>:<your_danted_port> ifconfig.co
```

Example:

```bash
$ curl -x socks5://oracle3.sshvpn.me:1080 ifconfig.co
130.162.32.218
```

If tests fail, check Dante logs at /var/log/socks.log.

### Limit Access

The default configuration allows anonymous access. To restrict access, either limit by IP address or enable username/password authentication.

{% hint style="info" %}
Restricting access is recommended — anonymous public proxies can be abused.
{% endhint %}

#### Limit by IP Address

Edit /etc/danted.conf and replace the broad client pass with entries for specific allowed IPs. Example allowing a single IP:

```
client pass {
        from: 201.100.103.1/32 to: 0.0.0.0/0
        log: error connect disconnect
}
```

To allow multiple single IPs, add multiple client pass blocks:

```
client pass {
        from: 201.100.103.1/32 to: 0.0.0.0/0
        log: error connect disconnect
}
client pass {
        from: 202.101.100.1/32 to: 0.0.0.0/0
        log: error connect disconnect
}
```

For IP ranges, adjust the CIDR suffix accordingly. Save and restart:

```bash
sudo systemctl restart danted
```

#### Limit by Username

To require username/password authentication, set socksmethod to username in /etc/danted.conf:

```
socksmethod: username
```

Restart Dante:

```bash
sudo systemctl restart danted
```

Dante uses Linux system authentication. Create a restricted user for SOCKS auth:

```bash
sudo su

# useradd -r -s /bin/false danteuser
# passwd danteuser
```

Test authentication with curl:

```bash
curl -x socks5://<your_username>:<your_password>@<your_ip_server>:<your_danted_port> ifconfig.co
```

Example (authenticated):

```bash
$ curl -x socks5://danteuser:MHg4Get2@oracle3.sshvpn.me:1080 ifconfig.co
130.162.32.218
```

Example (without credentials):

```bash
$ curl -x socks5://oracle3.sshvpn.me:1080 ifconfig.co
curl: (97) No authentication method was acceptable.
```

We are done! Hope you find this useful.

Last updated 3 years ago
