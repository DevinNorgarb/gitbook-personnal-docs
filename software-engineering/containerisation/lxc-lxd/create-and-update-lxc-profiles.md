# Create and Update LXC Profiles



### About this Hands-on Lab

A benefit of containers is the ability to create mass amounts of them in a short amount of time. LXD makes ensuring these containers all share the expected container-level instance configurations through the use of container profiles. In this hands-on lab, we will create a profile to use when deploying on a certain storage pool.

### Learning Objectives

Successfully complete this lab by achieving the following learning objectives:

Create a New Profile

Create new storage pool based on the `default` profile by copying the profile:

```bash
lxc profile copy default dbs
```

Update the Storage Pool

Edit the file so the appropriate storage pool is used when a container is deployed:

```bash
lxc profile edit dbs
```

```yaml
config: {}
description: Default LXD profile
devices:
eth0:
name: eth0
nictype: bridged
parent: lxdbr0
type: nic
root:
path: /
pool: dbs
type: disk
name: dbs
used_by: []
```

We can then continue by adding the other configurations into this file directly, or save and exit and set them via the CLI.

Change Instance Settings

Set the instance boot values using the CLI:

```bash
lxc profile set dbs boot.autostart.priority 99
lxc profile set dbs boot.stop.priority 1
lxc profile set dbs limits.disk.priority 10
lxc profile set dbs snapshots.schedule "0 0 * * *"
```

Confirm the changes:

```bash
lxc profile show dbs
```

Use Profile with Instances

Create a test image:

```bash
lxc launch alpine test -p dbs
```

Then assign it to the existing `db01` container; remove any additional profiles:

```bash
lxc profile add db01 dbs
lxc profile remove db01 default
```
