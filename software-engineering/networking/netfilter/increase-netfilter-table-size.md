# Increase Netfilter Table Size

\
This alert presents the percentage of used netfilter tracked connections. If you receive this alert, there is high utilization of the netfilter "connection tracking state" table size.Network delays and packet drops are expected when you are getting closer to 100%.

* This alert gets raised to warning when the percentage exceeds 90%.
* If the metric exceeds 95%, then the alert gets raised to a critical state.

#### What is the "netfilter" framework?

Netfilter is a framework provided by the Linux kernel that allows various networking-related operations to be implemented in the form of customized handlers. Netfilter offers various functions and operations for packet filtering, network address translation, and port translation, which provide the functionality required for directing packets through a network and prohibiting packets from reaching sensitive locations within a network.



* Table Size Limits

You can see the table size by running:&#x20;

```
cat /proc/sys/net/netfilter/nf_conntrack_count
```

You can see the table size limit by running:

```
cat /proc/sys/net/netfilter/nf_conntrack_max
```

Recommended Size:&#x20;

```
CONNTRACK_MAX = RAMSIZE (in bytes) / 16384 / (ARCH / 32)
```

\
Eg, If we have 8GB RAM in an x86\_64 OS, we would use `8*1024^3/16384/2=262144`.

You can modify the table size limit by running:

```
sudo sysctl -w net.netfilter.nf_conntrack_max=2621440
echo "net.netfilter.nf_conntrack_max=2621440"  | sudo tee -a /etc/sysctl.conf
```

Remember to set these values by running

```
sudo sysctl -p
```

#### Useful resources

1. [Netfilter](https://en.wikipedia.org/wiki/Netfilter)
2. [Full Conntrack Table](https://morganwu277.github.io/2018/05/26/Solve-production-issue-of-nf-conntrack-table-full-dropping-packet/)
