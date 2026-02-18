# MultiArch apt Sources

### Setting up apt sources <a href="#setting_up_apt_sources" id="setting_up_apt_sources"></a>

Apt defaults to using the set of architectures reported by dpkg, and any unqualified architecture deb lines in /etc/apt/sources.list, which is usually what you wanted. This can be overridden using APT::Architecture=\<arch> to set the default architecture or APT::Architectures="\<arch> \<arch>".

apt-sources can be architecture qualified with this syntax. This is very useful on Ubuntu's split archive. It is not normally necessary on Debian unless your normal archive does not mirror the extra architectures you are interested in.

```
deb [arch=amd64,i386] http://uk.archive.ubuntu.com/ubuntu/ quantal main universe
deb [arch=armel,armhf] http://ports.ubuntu.com/ubuntu-ports quantal main universe
```

Arch-qualifying deb-src lines doesn't make any sense.

Note: There is a bug in apt versions >=0.9.7 and <0.9.7.2 which means that putting 'arch=armel,armhf' on one line didn't work - you needed two separate entries.

Don't forget to

<br>
