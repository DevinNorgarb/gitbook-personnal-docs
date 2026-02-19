# Exposing Ports on Oracle Cloud

I figured it out. The connectivity issue was due to Oracle's default use of iptables on all Oracle-provided images. Literally the very first thing I did when spinning up this instance was check `ufw`, presuming there were a few firewall restrictions in place. The `ufw` status was inactive, so I concluded the firewall was locally wide open. Because to my understanding both `ufw` and `iptables` look at the netfilter kernel firewall, and because `ufw` is the de facto (standard?) firewall solution on Ubuntu, I've no idea why they concluded it made sense to use iptables in this fashion. Maybe just to standardize across all images?

I learned about the rules by running:

```
sudo iptables -L
```

Then I saved the rules to a file so I could add the relevant ones back later:

```
sudo iptables-save > ~/iptables-rules
```

Then I ran these rules to effectively disable `iptables` by allowing all traffic through:

```
iptables -P INPUT ACCEPT
iptables -P OUTPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -F
```

To clear all iptables rules at once, run this command:

```
iptables --flush
```

Anyway, hope this helps somebody else out because documentation on the matter is non-existent.

<br>
