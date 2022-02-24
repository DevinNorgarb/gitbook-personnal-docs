# Firewalls

sudo nano /etc/sysctl.conf

uncomment ipv4 forwarding



iptables -t nat -A PREROUTING -p tcp –dport 11411 -j DNAT –to-destination 192.168.12.8
