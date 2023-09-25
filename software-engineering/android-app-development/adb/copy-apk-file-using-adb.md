---
description: Copy APK file from device to host using ADB
---

# Copy APK file using ADB



The following sequence of commands is what worked for me on a **non-rooted device**:

1\) Determine the package name of the app, e.g. "com.example.someapp". Skip this step if you already know the package name.

```undefined
adb shell pm list packages
```

Look through the list of package names and try to find a match between the app in question and the package name. This is usually easy, but note that the package name can be completely unrelated to the app name. If you can't recognize the app from the list of package names, try finding the app in Google Play using a browser. The URL for an app in Google Play contains the package name.

2\) Get the full path name of the APK file for the desired package.

```lua
adb shell pm path com.example.someapp
```

The output will look something like\
_package:/data/app/com.example.someapp-2.apk_\
or\
_package:/data/app/com.example.someapp-nfFSVxn\_CTafgra3Fr\_rXQ==/base.apk_

3\) Using the full path name from Step 2, pull the APK file from the Android device to the development box.

```bash
adb pull /data/app/com.example.someapp-2.apk path/to/desired/destination
```
