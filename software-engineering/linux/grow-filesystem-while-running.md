---
description: >-
  Credit
  https://askubuntu.com/questions/116351/increase-partition-size-on-which-ubuntu-is-installed
---

# Grow Filesystem while running

As a matter of fact, you **CAN** _enlarge_ the root filesystem while Ubuntu is running (I learned this recently myself [here](https://askubuntu.com/a/109224/14564)) - this sounds incredible but it's true :)

Here's the list of steps for a simple scenario where you have two partitions, `/dev/sda1` is an ext4 partition the OS is booted from and `/dev/sdb2` is swap. For this exercise we want to remove the swap partition an extend `/dev/sda1` to the whole disk.

1. As always, make sure you have a backup of your data - since we're going to modify the partition table there's a chance to lose all your data if you make a typo, for example.
2. Run `sudo fdisk /dev/sda`
   * use `p` to list the partitions. Make note of the start cylinder of `/dev/sda1`
   * use `d` to **delete** first the swap partition (`2`) and then the `/dev/sda1` partition. This is very scary but is actually harmless as the data is not written to the disk until you write the changes to the disk.
   * use `n` to **create** a new primary partition. Make sure its start cylinder is exactly the same as the old `/dev/sda1` used to have. For the end cylinder agree with the default choice, which is to make the partition to span the whole disk.
   * use `a` to toggle the bootable flag on the new `/dev/sda1`
   * review your changes, take a deep breath and use `w` to write the new partition table to disk. You'll get a message telling that the kernel couldn't re-read the partition table because the device is busy, but that's ok.
3. Reboot with `sudo reboot`. When the system boots, you'll have a smaller _filesystem_ living inside a larger _partition_.
4. The next magic command is `resize2fs`. Run `sudo resize2fs /dev/sda1` - this form will default to making the filesystem to take all available space on the partition.

That's it, we've just resized a partition on which Ubuntu is installed, without booting from an external drive.
