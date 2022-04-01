# Ubuntu

We’ve long considered nested containers an important use case in LXC. LXD is no different in this regard. If you are using privileged lxd containers (security.privileged: true), then the only thing you need to do is to set the security.nesting flag to true:

```
lxc launch ubuntu nestc1 -c security.nesting=true -c security.privileged=true
```

or to change an existing container:

```
lxc config set nestc1 security.nesting true
```

However, we heavily encourage the use of unprivileged containers whenever possible. Nesting with unprivileged containers works just as well, but requires an extra step.

Recall that unprivileged users run in a user namespace. A user namespace has a mapping from host uids to container uids. For instance, the range of host uids 100000-199999 might be mapped to container uids 0-99999. The key insight for nesting is that you can only map uids which are defined in the parent container. So in this example, we cannot map uids 100000-199999 to nested containers because they do not exist! So we have two choices – either choose uids which do exist, or increase the range passed to parent containers. Since lxd currently demands at least 65k uids and gids, we’ll have to go with the latter.

Generally this isn’t too complicated. If you wish to run container c3 in container c2 in container c1, you’ll need 65536 uids in c3; in c2 you’ll need 65536 for c2 itself plus the 65536 for c3; and in c1 you’ll need 65536 for c1 plus 65536 for c2 plus 65536 for c3.

LXD will gain per-tenant uid mappings, but for now you create the allocations by editing /etc/subuid and /etc/subgid (or by using usermod). On the host, we’ll delegate the 196608 ids starting at 500000 to the root user:

```
sed -i ‘/^root:/d’ /etc/subuid /etc/subgid
echo “root:500000:196608” >> /etc/subuid
echo “root:500000:196608” >> /etc/subgid
```

The first number is the host uid being delegated, and the second is the range. We know lxd will map those to the same number of ids starting at 0. On the host we have all uids available, but in the first container only ids 0-196607 will be defined.

Now make sure lxd is stopped, then restart it and create a container

```
lxc launch ubuntu c1 -c security.nesting=true
```

Log into c1, and set the subuid and subgid entries to:

```
root:65536:131072
```

Create your c2 container now,

```
lxc launch ubuntu c2 -c security.nesting=true
```

log in and this time set the subuid and subgid entires to:

```
root:65536:65536
```

Now you can create c3,

```
lxc launch ubuntu c3
```

You could of course go deeper, if you changed the allocations.

If this all seems a bit too much work, I’ve written a little program (whose functionality may eventually move into LXD in some form or other) called [uidmapviz](https://github.com/hallyn/uidmapviz), which aims to show you what allocations look like, and warns you if a configuration won’t work due to too few subuids.

### Extra tip of the day

lxd file push and pull are very handy. Whether the container is running or not, instead of having to get ssh set up in the container or knowing where the rootfs is mounted, you can simply

```
lxc image export trusty
```

This produces the rootfs and metadata files for the image called ‘trusty’ (assuming it exists) in your current directory. Push them both into the container, using

```
lxc file push meta-ubuntu-trusty-14.04-amd64-server-20150928.tar.xz nestc1/meta-ubuntu-trusty-14.04-amd64-server-20150928.tar.xz
lxc file push ubuntu-trusty-14.04-amd64-server-20150928.tar.xz nestc1/ubuntu-trusty-14.04-amd64-server-20150928.tar.xz
```

then in the container…

```
lxc image import /meta-ubuntu-trusty-14.04-amd64-server-20150928.tar.xz /ubuntu-trusty-14.04-amd64-server-20150928.tar.xz
```

…which is how I copied images into containers for nesting, rather than waiting for lxd-images to pull images from the network.

[Original article](https://s3hh.wordpress.com/2015/10/30/nested-containers-in-lxd/)
