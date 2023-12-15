# httpie

### [Installation](https://httpie.io/docs/cli/installation)

* [Universal](https://httpie.io/docs/cli/installation#universal)
* [macOS](https://httpie.io/docs/cli/installation#macos)
* [Windows](https://httpie.io/docs/cli/installation#windows)
* [Linux](https://httpie.io/docs/cli/installation#linux)
* [FreeBSD](https://httpie.io/docs/cli/installation#freebsd)

#### [Universal](https://httpie.io/docs/cli/universal)

[**PyPI**](https://httpie.io/docs/cli/pypi)

Please make sure you have Python 3.7 or newer (`python --version`).

```
# Install httpie
$ python -m pip install --upgrade pip wheel
$ python -m pip install httpie
```

```
# Upgrade httpie
$ python -m pip install --upgrade pip wheel
$ python -m pip install --upgrade httpie
```

#### [macOS](https://httpie.io/docs/cli/macos)

[**Homebrew**](https://httpie.io/docs/cli/homebrew)

To install [Homebrew](https://brew.sh/), see [its installation](https://docs.brew.sh/Installation).

```
# Install httpie
$ brew update
$ brew install httpie
```

```
# Upgrade httpie
$ brew update
$ brew upgrade httpie
```

[**MacPorts**](https://httpie.io/docs/cli/macports)

To install [MacPorts](https://www.macports.org/), see [its installation](https://www.macports.org/install.php).

```
# Install httpie
$ port selfupdate
$ port install httpie
```

```
# Upgrade httpie
$ port selfupdate
$ port upgrade httpie
```

#### [Windows](https://httpie.io/docs/cli/windows)

[**Chocolatey**](https://httpie.io/docs/cli/chocolatey)

To install [Chocolatey](https://chocolatey.org/), see [its installation](https://chocolatey.org/install).

```
# Install httpie
$ choco install httpie
```

RUN

```
# Upgrade httpie
$ choco upgrade httpie
```

RUN

#### [Linux](https://httpie.io/docs/cli/linux)

[**Debian and Ubuntu**](https://httpie.io/docs/cli/debian-and-ubuntu)

Also works for other Debian-derived distributions like MX Linux, Linux Mint, deepin, Pop!\_OS, KDE neon, Zorin OS, elementary OS, Kubuntu, Devuan, Linux Lite, Peppermint OS, Lubuntu, antiX, Xubuntu, etc.

```
# Install httpie
$ curl -SsL https://packages.httpie.io/deb/KEY.gpg | sudo gpg --dearmor -o /usr/share/keyrings/httpie.gpg
$ sudo echo "deb [arch=amd64 signed-by=/usr/share/keyrings/httpie.gpg] https://packages.httpie.io/deb ./" > /etc/apt/sources.list.d/httpie.list
$ sudo apt update
$ sudo apt install httpie
```

```
# Upgrade httpie
$ sudo apt update && sudo apt upgrade httpie
```

RUN

[**Fedora**](https://httpie.io/docs/cli/fedora)

```
# Install httpie
$ dnf install httpie
```

RUN

```
# Upgrade httpie
$ dnf upgrade httpie
```

RUN

[**CentOS and RHEL**](https://httpie.io/docs/cli/centos-and-rhel)

Also works for other RHEL-derived distributions like ClearOS, Oracle Linux, etc.

```
# Install httpie
$ yum install epel-release
$ yum install httpie
```

```
# Upgrade httpie
$ yum upgrade httpie
```

RUN

[**Single binary executables**](https://httpie.io/docs/cli/single-binary-executables)

Get the standalone HTTPie Linux executables when you don't want to go through the full installation process.

```
# Install httpie
$ https --download packages.httpie.io/binaries/linux/http-latest -o http
$ ln -ls ./http ./https
$ chmod +x ./http ./https
```

```
# Upgrade httpie
$ https --download packages.httpie.io/binaries/linux/http-latest -o http
```

RUN

[**Snapcraft (Linux)**](https://httpie.io/docs/cli/snapcraft-linux)

To install [Snapcraft](https://snapcraft.io/), see [its installation](https://snapcraft.io/docs/installing-snapd).

```
# Install httpie
$ snap install httpie
```

RUN

```
# Upgrade httpie
$ snap refresh httpie
```

RUN

[**Linuxbrew**](https://httpie.io/docs/cli/linuxbrew)

To install [Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux), see [its installation](https://docs.brew.sh/Homebrew-on-Linux#install).

```
# Install httpie
$ brew update
$ brew install httpie
```

```
# Upgrade httpie
$ brew update
$ brew upgrade httpie
```

[**Arch Linux**](https://httpie.io/docs/cli/arch-linux)

Also works for other Arch-derived distributions like ArcoLinux, EndeavourOS, Artix Linux, etc.

```
# Install httpie
$ pacman -Syu httpie
```

RUN

```
# Upgrade httpie
$ pacman -Syu
```

#### [FreeBSD](https://httpie.io/docs/cli/freebsd)

[**FreshPorts**](https://httpie.io/docs/cli/freshports)

```
# Install httpie
$ pkg install www/py-httpie
```

RUN

```
# Upgrade httpie
$ pkg upgrade www/py-httpie
```

RUN

#### [Unstable version](https://httpie.io/docs/cli/unstable-version)

If you want to try out the latest version of HTTPie that hasn't been officially released yet, you can install the development or unstable version directly from the master branch on GitHub. However, keep in mind that the development version is a work in progress and may not be as reliable as the stable version.

You can use the following command to install the development version of HTTPie on Linux, macOS, Windows, or FreeBSD operating systems. With this command, the code present in the `master` branch is downloaded and installed using `pip`.

```
$ python -m pip install --upgrade https://github.com/httpie/cli/archive/master.tar.gz
```

RUN

There are other ways to install the development version of HTTPie on macOS and Linux.

You can install it using Homebrew by running the following commands:

```
$ brew uninstall --force httpie
$ brew install --HEAD httpie
```

You can install it using Snapcraft by running the following commands:

```
$ snap remove httpie
$ snap install httpie --edge
```

To verify the installation, you can compare the [version identifier on GitHub](https://github.com/httpie/cli/blob/master/httpie/\_\_init\_\_.py#L6) with the one available on your machine. You can check the version of HTTPie on your machine by using the command `http --version`.

```
$ http --version
# 3.X.X.dev0
```

RUN

Note that on your machine, the version name will have the `.dev0` suffix.
