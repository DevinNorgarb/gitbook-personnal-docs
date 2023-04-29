# ZeroTier VPN

#### Linux (DEB/RPM)

Debian and RPM based distributions including Debian, Ubuntu, CentOS, RHEL, Fedora, and others are supported via a script that adds the right repository and installs the package.Other Linux distributions may have their own packages. If not try [building and installing from source](https://github.com/zerotier/ZeroTierOne).

_If you’re willing to rely on SSL to authenticate the site, a one line install can be done with:_

`curl -s https://install.zerotier.com | sudo bash`

_If you have GPG installed, a more secure option is available:_

`curl -s 'https://raw.githubusercontent.com/zerotier/ZeroTierOne/master/doc/contact%40zerotier.com.gpg' | gpg --import && \ if z=$(curl -s 'https://install.zerotier.com/' | gpg); then echo "$z" | sudo bash; fi`

_After using the script, use apt or yum to manage future updates to zerotier-one_

* \
