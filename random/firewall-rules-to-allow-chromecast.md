# Firewall rules to allow Chromecast

```
sudo ufw allow proto udp from 192.168.0.0/24 to any port 32768:60999
```
