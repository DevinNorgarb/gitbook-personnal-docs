---
title: "Rancher"
description: "Notes on Rancher."
---

# Rancher

**Rancher** is a Kubernetes management platform for provisioning, importing, and operating clusters across data centers and cloud providers.

## Source

- [Rancher documentation](https://ranchermanager.docs.rancher.com/)
- [rancher/rancher](https://github.com/rancher/rancher)

## What Rancher adds

| Capability | Description |
|------------|-------------|
| **Cluster lifecycle** | Provision hosted clusters or import existing k8s/k3s |
| **Centralized RBAC** | One auth layer across all attached clusters |
| **Observability** | Monitoring, alerting, log shipping integrations |
| **App delivery** | Helm catalog + **Fleet** GitOps for workloads |
| **Multi-tenancy** | Projects and namespaces with policy guardrails |

## Typical setup

1. Install Rancher on a management cluster (or Docker single-node for lab)
2. Import or create downstream clusters (RKE2, k3s, EKS, GKE, etc.)
3. Deploy apps via Helm charts or Fleet repos
4. Enforce global roles and audit from the Rancher UI

## Related

- [Kubernetes](./README.md)
- [k3s](./k3s.md) — lightweight clusters Rancher can import
