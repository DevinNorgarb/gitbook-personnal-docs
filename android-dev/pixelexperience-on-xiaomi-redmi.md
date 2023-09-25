# PixelExperience on Xiaomi Redmi

## Install PixelExperience on merlinx <a href="#install-pixelexperience-on-merlinx" id="install-pixelexperience-on-merlinx"></a>

[keyboard\_arrow\_left Back to the overview](https://wiki.pixelexperience.org/devices/merlinx)_warning_WARNING: These instructions only work if you follow every section and step precisely.\
Do **not** continue after something fails!

### Basic requirements

1. Read through the instructions at least once before actually following them, so as to avoid any problems due to any missed steps!
2. Make sure your computer has `adb` and `fastboot`. Setup instructions can be found [here](https://wiki.pixelexperience.org/help/adb-fastboot-guide/).
3. Enable [USB debugging](https://wiki.pixelexperience.org/help/adb-fastboot-guide/#setting-up-adb) on your device.
4. Boot your device with the stock OS at least once and check every functionality. Make sure that you can send and receive SMS and place and receive calls (also via WiFi and LTE, if available), otherwise it won’t work on PixelExperience either!
5. PixelExperience is provided as-is with no warranty. While we attempt to verify [everything works](https://github.com/PixelExperience/docs/blob/master/device\_requirements.md) you are installing this at your own risk!

### Unlocking the bootloader

_info\_outline_NOTE: The steps below only need to be run once per device. They **require** a machine running Windows 7 or newer._warning_WARNING: Unlocking the bootloader will erase all data on your device! Before proceeding, ensure the data you would like to retain is backed up to your PC and/or your Google account, or equivalent. Please note that OEM backup solutions like Samsung and Motorola backup may not be accessible from PixelExperience once installed.

1. Create a Mi account on [Xiaomi’s website](https://global.account.xiaomi.com/pass/register). Beware that one account is only allowed to unlock one unique device every 30 days.
2. Add a phone number to your Mi account.
3. Insert a SIM into your phone.
4. Enable developer options in `Settings` > `About Phone` by repeatedly tapping `MIUI Version`.
5. Link the device to your Mi account in `Settings` > `Additional settings` > `Developer options` > `Mi Unlock status`.
6. Download the [Mi Unlock app](https://en.miui.com/unlock/download\_en.html) (Windows is required to run the app).
7. Run the Mi Unlock app and follow the instructions provided by the app. It may tell you that you have to wait up to 30 days. If it does so, please wait the quoted amount of time before continuing to the next step!
8. After device and Mi account are successfully verified, the bootloader should be unlocked.
9. Since the device resets completely, you will need to re-enable USB debugging to continue.

### Installing a custom recovery using `fastboot`

1.  Download the [PixelExperience Recovery](https://download.pixelexperience.org/merlinx). Simply download the latest recovery file.

    _warning_IMPORTANT: Other recoveries may not work for installation or updates. We strongly recommend to use the one linked above!
2. Connect your device to your PC via USB if it isn’t already.
3.  If your device isn’t already in fastboot mode, on the computer, open a command prompt (on Windows) or terminal (on Linux or macOS) window, and type:

    ```
    adb reboot bootloader
    ```

    You can also boot into fastboot mode via a key combination:

    * With the device powered off, hold Volume Down + Power. Keep holding both buttons until the word “FASTBOOT” appears on the screen, then release.
4.  Once the device is in fastboot mode, verify your PC finds it by typing:

    ```
    fastboot devices
    ```

    If you don’t get any output or an error:

    * on Windows: make sure the device appears in the device manager without a triangle. Try other drivers until the command above works!
    * on Linux or macOS: If you see `no permissions fastboot` try running `fastboot` as root. When the output is empty, check your USB cable and port!

    _check_TIP: Some devices have buggy USB support while in bootloader mode, if you see `fastboot` hanging with no output when using commands such as `fastboot getvar ...`, `fastboot boot ...`, `fastboot flash ...` you may want to try a different USB port (preferably a USB Type-A 2.0 one) or a USB hub.
5.  Flash recovery onto your device (replace `<recovery_filename>` with the actual filename!):

    ```
    fastboot flash recovery <recovery_filename>.img
    ```
6. Now reboot into recovery to verify the installation. Do **not** reboot into the existing OS, since it will overwrite the recovery you just installed!
   *   With the device powered off, hold Volume Up + Power. Keep holding both buttons until the “MI” logo appears on the screen, then release.

       _info\_outline_NOTE: If you can’t power down the device, try long-pressing the key-combination (if any was used in the instructions above) until the device reboots and follow the instructions above

### Installing PixelExperience from recovery

1. Download the [PixelExperience installation package](https://download.pixelexperience.org/merlinx) that you would like to install or [build](https://wiki.pixelexperience.org/devices/merlinx/build) the package yourself.
2. If you are not in recovery, reboot into recovery:
   * With the device powered off, hold Volume Up + Power. Keep holding both buttons until the “MI” logo appears on the screen, then release.
3. Now tap **Factory Reset**, then **Format data / factory reset** and continue with the formatting process. This will remove encryption and delete all files stored in the internal storage, as well as format your cache partition (if you have one).
4. Return to the main menu.
5. Sideload the PixelExperience `.zip` package:
   * On the device, select “Apply Update”, then “Apply from ADB” to begin sideload.
   * On the host machine, sideload the package using: `adb sideload filename.zip`._check_TIP: Normally, adb will report `Total xfer: 1.00x`, but in some cases, even if the process succeeds the output will stop at 47% and report `Total xfer: 0.98x` or `adb: failed to read command: Success`. In some cases it will report `adb: failed to read command: No error` or `adb: failed to read command: Undefined error: 0` which is also fine.
6. Once you have installed everything successfully, click the back arrow in the top left of the screen, then “Reboot system now”.

_info\_outline_NOTE: The first boot usually takes no longer than 15 minutes, depending on the device. If it takes longer, you may have missed a step, otherwise feel free to [get assistance](https://wiki.pixelexperience.org/devices/merlinx/install/#get-assistance).

### Get assistance

After you’ve double checked that you followed the steps precisely, didn’t skip any and still have questions or got stuck, feel free to ask on [our Telegram group](https://t.me/pixelexperiencechat).

\
