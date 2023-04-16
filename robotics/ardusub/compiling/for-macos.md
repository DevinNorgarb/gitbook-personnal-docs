# For MacOS

## Setting up the Build Environment (MacOSX)[¶](https://ardupilot.org/dev/docs/building-setup-mac.html#setting-up-the-build-environment-macosx)

This article shows how to manually setup a minimal build environment on MacOS (ver 10.6 onwards).

There is a pre-built script at /ardupilot/Tools/environment\_install/install-prereqs-mac.sh that will install these pre-requisites.

### Setup steps[¶](https://ardupilot.org/dev/docs/building-setup-mac.html#setup-steps)

1.  MacOS will alert you when you enter a command in the terminal that requires Xcode Command Line Tools. You can also install Xcode Command Line Tools manually

    ```
    xcode-select --install
    ```
2.  Install [Homebrew](http://brew.sh/) for MacOS (Homebrew is a respected package manager for MacOS)

    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
3.  Install the following packages using brew

    ```
    brew tap ardupilot/homebrew-px4
    brew update
    brew install genromfs
    brew install gcc-arm-none-eabi
    ```
4.  Install the latest version of awk using brew (make sure **/usr/local/bin** takes precedence in your path):

    ```
    brew install gawk
    ```
5.  Install _pip_ and _pyserial_ using the following commands:

    ```
    sudo easy_install pip
    sudo pip install pyserial future empy
    ```

    ```
    ** Starting with MacOS Mojave (10.14.x) you might want to install the SDK headers

    open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg
    ```
6. Follow the [MAVProxy documentation](https://ardupilot.org/mavproxy/docs/getting\_started/download\_and\_installation.html#mavproxy-downloadinstallmac) if you plan to use the simulator.

Now you should be able to build with waf as described in [BUILD.md](https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md).

### Cleaning[¶](https://ardupilot.org/dev/docs/building-setup-mac.html#cleaning)

If there have been updates to some git submodules you may need to do a full clean build. To do that use:

```
./waf distclean
```

Commands _clean_ and _distclean_ can be used to clean the objects produced by the build. _clean_ keeps the configure information, cleaning only the objects for the current board. _distclean_ cleans everything for every board, including the saved configure information.

Follow the instructions for [build](https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md) .
