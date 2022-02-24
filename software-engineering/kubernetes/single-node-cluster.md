# Single Node Cluster

{% embed url="https://www.virtualizationhowto.com/2021/07/kubernetes-lxc-containers-configuration-lab-setup" %}
Tutorial that made&#x20;
{% endembed %}

{% embed url="https://github.com/justmeandopensource/kubernetes" %}
useful bootstrap library
{% endembed %}

{% embed url="https://ubuntu.com/blog/externally-exposing-a-lxd-based-kubernetes-service" %}
Exposing the new cluster
{% endembed %}

{% embed url="https://github.com/kubernetes/kubernetes/issues/70202" %}
\=
{% endembed %}

Remember to add these to this file `/run/flannel/subnet.env`

```
FLANNEL_NETWORK=10.244.0.0/16
FLANNEL_SUBNET=10.244.0.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true
```

Rancher



K3s

K3D

Kubeadm

Juju [https://juju.is/tutorials](https://juju.is/tutorials)

