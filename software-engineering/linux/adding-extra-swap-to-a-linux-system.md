# Adding extra swap to a Linux system

```
sudo fallocate -l 5G /swapfile5G

sudo mkswap /swapfile5G

sudo chmod 0600 /swapfile5G

sudo swapon /swapfile5G
```
