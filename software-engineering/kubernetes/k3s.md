---
title: K3s
description: Lightweight Kubernetes — single binary, sqlite default, edge/IoT friendly.
---

# K3s

**K3s** is a CNCF-certified, production-ready Kubernetes distribution packaged as a **&lt;100 MB** binary — half the memory footprint of full k8s, ideal for edge, IoT, CI, and homelab clusters.

## Source

- [k3s-io/k3s](https://github.com/k3s-io/k3s/blob/master/README.md)
- [docs.k3s.io](https://docs.k3s.io/)

## What’s different

- Single launcher bundles containerd, Flannel CNI, CoreDNS, Traefik ingress, local-path storage, Helm controller, etc.
- Default datastore: **SQLite** (etcd, MySQL, Postgres also supported via Kine)
- Secure defaults; minimal OS deps (kernel + cgroups)
- Kubelet API exposed to control plane over websocket tunnel (no worker port exposure)

## Quick install (server)

```bash
curl -sfL https://get.k3s.io | sh -
sudo kubectl get nodes
# kubeconfig: /etc/rancher/k3s/k3s.yaml
# join token: /var/lib/rancher/k3s/server/node-token
```

## Join agent

```bash
curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=XXX sh -
```

## Netmaker / multi-cloud example

When nodes communicate over a WireGuard overlay (e.g. Netmaker `nm-k3s` interface), bind k3s to that IP:

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --node-ip 10.11.11.2 --node-external-ip 10.11.11.2 --flannel-iface nm-k3s" sh -
```

See [Install K3s (Netmaker tutorial)](../../misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/README.md).

## Related

- [Kubernetes](./README.md)
- [Rancher](./rancher.md)
