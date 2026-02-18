# yt-dlp

## Installation

You can install yt-dlp either using one of the official releases, or with your favorite package manager

> If you are unfamiliar with the command line, you may use one of the many third-party GUIs available

***

## [Using the release binary](https://github.com/yt-dlp/yt-dlp/wiki/Installation#using-the-release-binary) <a href="#user-content-using-the-release-binary" id="user-content-using-the-release-binary"></a>

You can simply download the [correct binary file](https://github.com/yt-dlp/yt-dlp#release-files) for your OS

[![Windows](https://camo.githubusercontent.com/5e7d03f7f5cc1dc4cd6797a5ede9af299143001f2fc89a7386b87f3d4828c5d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d57696e646f77735f7836342d626c75652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d77696e646f7773)](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe) [![Linux](https://camo.githubusercontent.com/5461aa20146a9fe60de1cc47ac0de9a070a05e73dec54a829d1cf21d85324974/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782f4253442d7265642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e7578)](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp) [![MacOS](https://camo.githubusercontent.com/65d1ed3107ea8b6ab3c6b06766904cbc6fdd9e7fd961929f81349e38e3229767/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d61634f532d6c69676874626c75652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6170706c65)](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos) [![Other variants](https://camo.githubusercontent.com/b38bcbc7dbeb210434768a9f20c9fcebf7d25fe6a3438334d910aae7ee277008/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4f746865722d677265792e7376673f7374796c653d666f722d7468652d6261646765)](https://github.com/yt-dlp/yt-dlp#release-files)

In UNIX-like OSes (MacOS, Linux, BSD), you can also install the same in one of the following ways:

```
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  # Make executable
```

```
sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  # Make executable
```

```
sudo aria2c https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp --dir /usr/local/bin -o yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  # Make executable
```

To update, run:

```
sudo yt-dlp -U
```

To use shell completion (autocomplete), look for the completion files in the [source tarball](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.tar.gz). It comes with bash, fish & zsh support.

## [With ](https://github.com/yt-dlp/yt-dlp/wiki/Installation#with-pip)[pip](https://pypi.org/project/pip)  <a href="#user-content-with-pip" id="user-content-with-pip"></a>

You can install the [PyPI package](https://pypi.org/project/yt-dlp) with:

```
python3 -m pip install -U yt-dlp
```

You can install without any of the optional dependencies using:

```
python3 -m pip install --no-deps -U yt-dlp
```

If you want to be on the cutting edge, you can also install the master branch with:

```
python3 -m pip install -U pip setuptools wheel
python3 -m pip install --force-reinstall https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz
```

On some systems, you may need to use `py` or `python` instead of `python3`

To update, run:

```
python3 -m pip install -U yt-dlp
```

## [Third-party package managers](https://github.com/yt-dlp/yt-dlp/wiki/Installation#third-party-package-managers) <a href="#user-content-third-party-package-managers" id="user-content-third-party-package-managers"></a>

**Note**: These packages are maintained by third-parties and may not be up-to-date. Please report any issues to the respective package maintainers

[![Packaging status](https://camo.githubusercontent.com/dce528b216b10f4313738258897dc3e1d7fde612f007f7dec8dc7862cc875b44/68747470733a2f2f7265706f6c6f67792e6f72672f62616467652f766572746963616c2d616c6c7265706f732f79742d646c702e737667)](https://repology.org/project/yt-dlp/versions)

### [Linux/MacOS](https://github.com/yt-dlp/yt-dlp/wiki/Installation#linuxmacos) <a href="#user-content-linuxmacos" id="user-content-linuxmacos"></a>

#### [Homebrew](https://formulae.brew.sh/formula/yt-dlp)

macOS or Linux users that are using Homebrew can also install it by:

```
brew install yt-dlp
```

To update, run:

```
brew upgrade yt-dlp
```

#### [pacman](https://archlinux.org/packages/community/any/yt-dlp/)

Arch Linux users can install it from the official community repository:

```
sudo pacman -Syu yt-dlp
```

pacman will now automatically download the correct dependencies and keep the package up-to-date whenever you update your system with:

```
sudo pacman -Syu
```

#### [APT](https://en.wikipedia.org/wiki/APT_\(software\))

You can download and install yt-dlp for recent Ubuntu and other related Debian-based distributions by adding the [this PPA](https://launchpad.net/~tomtomtom/+archive/ubuntu/yt-dlp)

```
sudo add-apt-repository ppa:tomtomtom/yt-dlp    # Add ppa repo to apt
sudo apt update                                 # Update package list
sudo apt install yt-dlp                         # Install yt-dlp
```

Your system's package manager will now automatically download the correct dependencies and keep the package updated with the rest of your system whenever you run:

```
sudo apt update
sudo apt install yt-dlp
```

#### [MacPorts](https://ports.macports.org/port/yt-dlp/)

You can install yt-dlp on macOS using MacPorts:

```
sudo port install yt-dlp
```

To update, run:

```
sudo port selfupdate
sudo port upgrade yt-dlp
```

#### [Alpine Linux](https://alpinelinux.org/)

Make sure you're on the latest version (or edge) - older versions don't receive updates for community repo.

To install yt-dlp on Alpine Linux:

```
doas apk -U add yt-dlp
```

Or alternatively, without any optional dependencies:

```
doas apk -U add yt-dlp-core
```

yt-dlp should upgrade with your system. If you want to do that explicitly:

```
doas apk -U upgrade yt-dlp
```

To uninstall:

```
doas apk del yt-dlp
```

On [postmarketOS](https://postmarketos.org/) you might have to use `sudo` instead of `doas`.

### [Windows](https://github.com/yt-dlp/yt-dlp/wiki/Installation#windows) <a href="#user-content-windows" id="user-content-windows"></a>

#### [Scoop](https://scoop.sh/)

```
scoop install yt-dlp
```

To update, run:

```
scoop update yt-dlp
```

#### [Chocolatey](https://community.chocolatey.org/packages/yt-dlp)

```
choco install yt-dlp
```

To update, run:

```
choco upgrade yt-dlp
```

#### [winget](https://docs.microsoft.com/en-us/windows/package-manager/winget/)

```
winget install yt-dlp
```

To update, run:

```
winget upgrade yt-dlp
```

### [Android](https://github.com/yt-dlp/yt-dlp/wiki/Installation#android) <a href="#user-content-android" id="user-content-android"></a>

You can use yt-dlp on Android using [Termux](https://termux.dev/). Once Termux is installed, open it and run the following commands:

```
termux-setup-storage                 # Allow termux to download files into your phone's storage
pkg update && pkg upgrade            # Update all packages
pkg install libexpat openssl python  # Install python
pip install -U yt-dlp                # Install yt-dlp
pkg install ffmpeg                   # OPTIONAL: Install ffmpeg
```

To update, run:

```
pip install -U yt-dlp
```

<br>
