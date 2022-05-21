---
description: How to increase LXC container storage volume size using ZFS storage driver
---

# LXC increase storage volume

The way I found to work the easiest is noted below:

LXD 3 or newer supports the creation of additional storage pools. Therefore, create an additional storage pool and then move the big container to the new storage pool.

Here is an example.

1.  Create an additional pool. Here we give 100GB of space.

    ```
    lxc storage create secondpool zfs size=100GB
    ```
2.  Suppose the container is called `bigcontainer`. We move it with `lxc move`, specifying that it should be placed inside the new storage pool. During the move, we have to rename the container because we move within the same LXD server.

    ```
    lxc move bigcontainer bigcontainer-moved --storage secondpool
    ```
