# Online Resize Ubuntu/Debian Disk

Start by installing cloud-utils. This contains the growpart tool.

```
sudo apt-get install -y cloud-utils
```

<figure><img src="../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>The root partition is 32 GB but  the device itself is 64GB. I intend to resize the root partition (/dev/sda2) </p></figcaption></figure>

Run growpart

```
sudo growpart /dev/sda 2
```

The first parameter is the device you want to resize, and the second is the partition. Below is the output:

```
devin@postgres-replica:~$ sudo growpart /dev/sda 2
CHANGED: partition=2 start=4096 old: size=67102720 end=67106816 new: size=134213599 end=134217695
```

And then:

```
sudo resize2fs /dev/sda2
```

<figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>Success</p></figcaption></figure>
