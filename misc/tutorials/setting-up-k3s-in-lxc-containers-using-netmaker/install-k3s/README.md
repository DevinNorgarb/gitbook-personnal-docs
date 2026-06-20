---
title: "Install K3s"
description: "Notes on Install K3s."
---

# Install K3s

Deploy one **k3s** Kubernetes cluster across multiple cloud VMs using **WireGuard** tunnels managed by **Netmaker**.

## Source

- [ITNEXT: k3s + WireGuard + Netmaker](https://itnext.io/how-to-deploy-a-single-kubernetes-cluster-across-multiple-clouds-using-k3s-and-wireguard-a5ae176a6e81) (Alex Feiszli, May 2021)
- Related tutorial in this repo: [Setting up k3s in LXC containers using Netmaker](../README.md)

## Why this pattern

- **k3s** uses SQL instead of etcd — tolerates higher-latency links between nodes
- **WireGuard** encrypts node-to-node traffic across public clouds
- **Netmaker** automates WireGuard peer config when nodes join/leave

## Architecture (demo)

- Several Ubuntu 20.04 VMs with public IPs (e.g. Linode + AWS + home lab)
- One VM runs Netmaker (Docker); others join a virtual subnet (e.g. `10.11.11.0/24`)
- k3s server binds to the Netmaker interface (`nm-k3s`); agents join with the node token

## Part 1 — Netmaker

On the Netmaker VM (ports 80, 8081, 50051 open):

```bash
wget -O docker-compose.yml https://raw.githubusercontent.com/gravitl/netmaker/master/docker-compose.nodns.yml
# Set your VM IP in docker-compose.yml
sudo docker-compose up -d
```

Create network `k3s` / `10.11.11.0/24`, generate access key, run the install script on each cluster node (after `apt install wireguard-tools`).

## Part 2 — k3s server

On the master (replace IPs with your Netmaker addresses):

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --node-ip 10.11.11.1 --node-external-ip 10.11.11.1 --flannel-iface nm-k3s" sh -
cat /var/lib/rancher/k3s/server/node-token
```

## Part 3 — k3s agents

On workers:

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://10.11.11.MASTER:6443 --token <TOKEN> --node-ip 10.11.11.X --node-external-ip 10.11.11.X --flannel-iface nm-k3s" sh -
```

Verify with `kubectl get nodes` and cross-cloud pod ping tests (see article).

> Demo setup only — not production HA. See the article for ingress, storage, and HA follow-ups.
