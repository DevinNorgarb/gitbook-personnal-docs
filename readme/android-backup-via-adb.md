# Android Backup via ADB

**Prerequisites:**

1. Enable USB Debugging on your Android device. You can do this in the Developer Options section of your device's settings.
2. Install ADB on your computer. You can do this by downloading the Android SDK Platform Tools, which includes ADB.

**Steps to backup your Android device using ADB:**

1. **Connect your Android device to your computer:**
   * Use a USB cable to connect your Android device to your computer.
   * Make sure to authorize the computer on your Android device if prompted.
2. **Open a Command Prompt or Terminal window on your computer:**
   * Navigate to the directory where you installed the Android SDK Platform Tools or where the ADB executable is located.
3. **Check if your device is properly connected:**
   *   In the Command Prompt or Terminal, type the following command:

       ```
       adb devices
       ```
   * You should see a list of connected devices. If your device is listed, you're ready to proceed.
4. **Backup your device:**
   *   To create a backup of your device, you can use the ADB command with the `backup` option. For a full backup, you can use a command like the following:

       ```css
       adb backup -all -f backup.ab
       ```
   * This command will create a backup file named "backup.ab" in the current directory.
5. **Unlock your device and follow on-screen instructions:**
   * After entering the backup command, your device will prompt you to confirm the backup and select a backup password. Follow the on-screen instructions on your device.
6. **Complete the backup process:**
   * Once the backup process is complete, you will find the backup file ("backup.ab") in the directory where you ran the ADB command.
