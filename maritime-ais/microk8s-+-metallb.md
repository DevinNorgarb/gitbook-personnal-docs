# MicroK8s + MetalLB

In my recent blog, I set up a single-node Kubernetes cluster on my home lab server using k0s (https://k0sproject.io/). It’s a good tool that makes it easy to set up a cluster in just one or two commands. However, I found an intermittent issue where the worker node sometimes isn’t up and running and requires restarting the service.

TL;DR

In this blog, I try another tool called MicroK8s (https://microk8s.io/) — which has been around longer — to set up a single-node Kubernetes cluster on Ubuntu 20.04 on my home lab box.

Prerequisites

* A public IP address from your internet provider, either dynamic or static.
* A domain name mapped to your static IP or a dynamic DNS domain name for dynamic IP which can be configured on your modem/router to sync with the Dynamic DNS provider (e.g. https://www.noip.com/).
* A fresh install of Ubuntu 20.04 on your home lab server — see this blog for how-to: https://pacroy.medium.com/setup-single-node-kubernetes-cluster-on-a-home-lab-server-using-k0s-594e32624399
* SSH configured for remote access on your home lab server — see these guides:
  * Home lab: https://pacroy.medium.com/setup-single-node-kubernetes-cluster-on-a-home-lab-server-using-k0s-594e32624399
  * Linode VM: https://pacroy.medium.com/setting-up-your-own-vpn-server-with-just-5-a-month-c934cf073ea1
* kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/), git, and helm (https://helm.sh/docs/intro/install/) installed on your local machine

Setup MicroK8s

Install MicroK8s

{% stepper %}
{% step %}
### Install MicroK8s (server)

On your server, install MicroK8s via snap:

{% code title="Install MicroK8s" %}
```bash
sudo snap install microk8s --classic --channel=1.21
```
{% endcode %}

Add yourself to the microk8s group and fix ownership of your kube cache directory, then refresh your session so the group update takes effect:

{% code title="Add user to microk8s group and fix ownership" %}
```bash
sudo usermod -a -G microk8s $USER
sudo chown -f -R $USER ~/.kube
# Then logout/login or run: newgrp microk8s
```
{% endcode %}
{% endstep %}

{% step %}
### Wait for MicroK8s to be ready

Monitor the cluster provisioning status (may take a few minutes):

{% code title="Wait for ready" %}
```bash
microk8s status --wait-ready
```
{% endcode %}

Get nodes and services:

{% code title="Check nodes and services" %}
```bash
microk8s kubectl get nodes
microk8s kubectl get services
```
{% endcode %}
{% endstep %}

{% step %}
### Enable addons

Enable fundamental addons (DNS and storage):

{% code title="Enable DNS and storage" %}
```bash
microk8s enable dns storage
```
{% endcode %}
{% endstep %}
{% endstepper %}

Remote Access

To enable remote access to the API server using kubectl:

1. Edit the file /var/snap/microk8s/current/certs/csr.conf.template on the server and add your domain name and/or public IP under the alt\_names section so the certificate includes names reachable from the internet. Example snippet:

{% code title="/var/snap/microk8s/current/certs/csr.conf.template (alt_names example)" %}
```
[ alt_names ]
DNS.1 = kubernetes
DNS.2 = kubernetes.default
DNS.3 = kubernetes.default.svc
DNS.4 = kubernetes.default.svc.cluster
DNS.5 = kubernetes.default.svc.cluster.local
DNS.6 = your.dnsname.com
IP.1 = 127.0.0.1
IP.2 = 10.152.183.1
IP.3 = 192.168.1.xx
IP.4 = 123.456.789.0
```
{% endcode %}
