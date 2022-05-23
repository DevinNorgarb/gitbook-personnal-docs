---
description: Adding extra Swap Space
---

# Adding extra swap to a Linux system

#### Add Swap Space <a href="#add-swap-space" id="add-swap-space"></a>

Small compute instances with limited memory can slow things down and overload the CPU.  You want to add 2x of your available RAM in swap space in my case, this is 1.2GB of swap for 600MB of RAM. Create your swap file:

```
sudo fallocate -l 1.2G /swapfile
```

Change permissions to only allow root access:

```
sudo chmod 600 /swapfile
```

Set up a Linux swap area on the file:

```
sudo mkswap /swapfile
```

Make sure the changes are permanent by modifying the filesystem table:

```
sudo nano /etc/fstab
```

Append `/swapfile swap swap defaults 0 0` to the end of the file. It should look like this:

```
LABEL=cloudimg-rootfs / ext4 defaults 0 1
LABEL=UEFI /boot/efi vfat defaults 0 1
/swapfile swap swap defaults 0 0
```
