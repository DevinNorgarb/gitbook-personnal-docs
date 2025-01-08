# Rooting Mavic Pro in firmware with Force FCC and Boost and No NFZ

At the End of this Walkthrough, Your Mavic Pro Will Be:\


* Rooted
* Running FW 1.4.300 with FW 1.3.700 modifiable controllers
* Will be free of No Fly Zone restrictions (Fly Responsibly!)
* Will have no altitude restrictions (Again, Fly Responsibly!)
* Will be configurable for Sport+, wind warning removal, etc.
* Will have forced FCC with option of boosting from standard 0.5W to 1.5W (Incredible Range!)
* Will be able to run newest DJI Go features (Quick Shot, Panoramic, etc)

\
CREDITS: With the exception, perhaps, of figuring out how to run the newest DJI Go app on Android while maintaining boost, I cannot claim credit for anything in this walkthrough. I merely hope, here, to draw together the great work of others in one place with simple instructions for anyone else who would like to configure their Mavic Pro as I have done mine. Deep gratitude to the Original Gangsters (dji.retroroms.info), CunningLogic (Dumlracer), jezzab (Dumldore), bin4ry (Deejayeye modder), Digdat0 (online videos), and Quad808 (online tutorials).\
\
THIS TUTORIAL IS FOR THE MAVIC!!! While some of the content here will work with other DJI Drones, the most important stuff, like getting root, eliminating No Fly Zone data from the drone, and getting FCC Boost, are specific to the Mavic.\
\
Force FCC and FCC Boost:\
\
What is "Force FCC" and "FCC Boost"? The Mavic and its controller ordinarily communicate on the very congested frequency used by wifi and Bluetooth, 2.4 Gigahertz (2.4Ghz). The maximum power at which consumer products can transmit on the wifi frequency in many countries is 0.1 watts (0.1W). In a minority of countries, including the U.S. it is 1W. Some countries lie in between. Only one country, India, allows more than 1W (In India, the max is 4W!). The Mavic detects where it is located in the world and sets its power to one of two settings, 0.1W (CE mode) or 0.4W (FCC mode). If you live in a CE country, your range on the Mavic will be very limited, at best, 3 to 4 kilometers (2 miles) and much less in urban areas with lots of wifi interference. If you are in an FCC country, range will be much better, up to 6 to 7 kilometers (4 miles). Force FCC is a mod we can make in the DJI Go app on our phone or tablet that instructs the remote controller and Mavic to transmit at the higher FCC power anywhere in the world. But that's not the end of it. For whatever reason, the Mavic has the ability to triple its normal FCC power and transmit at 1.5W (that's 15 times the normal limit outside the U.S.). Additionally, it can shift its frequency out of the congested 2.4Ghz band to either 2.33Ghz or 2.57Ghz--significantly reducing the effects of interference from all the wifi in urban environments.\
\
Theoretically, people in CE countries will see doubling of range with Force FCC and almost quadrupling of range (3.9 times) with FCC Boost. People going from FCC to FCC Boost should see nearly doubling of range (1.9 times). In fact, a Mavic on the 2.57Ghz band at the FCC Boost power of 1.5W will likely be able to stay connected to its controller at a further distance than its battery will allow it to fly away from the controller and make it back. Is it legal to fly your Mavic using Force FCC outside the U.S. or using FCC Boost anywhere (other than India)? Not without special permits. I'll show you how. It's up to you to make use of it in compliance with your laws.\
\
Notes:\
\
NOTE ABOUT OPERATING SYSTEM: I use Windows and an Android phone. As such, this walkthrough will be for those OS's. However, where I can, I will provide links for iOS procedures.\
\
NOTE ABOUT FW AND MAVIC VERSION: Newer Mavics are shipping without an INTERNAL (separate from the one we insert) SD card. Without the internal SD card, you cannot rollback to a firmware below 1.4.000. We have to rollback to 1.3.700 (and then come back forward) to be able to mod our controllers for no altitude restriction and flight in No-Fly-Zones ("NFZs"). These features will be unavailable if your Mavic does not have an internal SD card. However, you still will be able to configure Sport+ and run Force FCC and FCC Boost. If your Mavic came with FW 1.4.000 or newer installed, it probably doesn't have the internal SD card. You'll know for sure if you try to downgrade your FW and you can't. The good news is that, if you are not afraid to take your Mavic apart, you can install an internal SD card if you want to: [dji.retroroms.info/howto/recorder-sdcard-fix](https://dji.retroroms.info/howto/recorder-sdcard-fix)\
\
NOTE ABOUT LINKS AND FILES: I recognize that we all have different skill levels and desire to get under the hood. Some people want to modify firmware and software themselves. Others want to get to the end goal with the least amount of technical requirements possible. To accommodate the latter folks, I have put on my Google Drive the modded versions of firmware and software that I created and installed on my Mavic and phone (using the tools of people more brilliant than I). To my knowledge and belief, these are free of any malware, but, it is always possible that malware is introduced through modding tools or apps. So, if you choose to use any of the files or apps I have uploaded or to which I give you links, I am not responsible if you get a virus or something else bad happens to your computer, Mavic, or phone. All I can say is that I have used these without trouble and believe they are safe.\
\
NOTE ABOUT ADVERSE EFFECTS: The only adverse effect of these mods of which I am aware is one that is well-documented in connection with using the FW 700 controllers with the newer firmware versions (mixed modding)--namely, that precision return to home may be off by a few feet, instead of the normal tolerance of a few inches. If precision landing is important to you, you will need to either stay completely on FW 1.3.700 and give up having Quick Shots and Panoramic pictures, or you will need to run the 1.4.300 controllers and give up unlimited altitude and flight in NFZs.\
\
NOTE ABOUT WINDOWS SECURITY WARNINGS: To avoid Windows 10’s new Controlled Folder Access protection from blocking the modding tools used in this walkthrough, you should NOT save and run your modding tools in any user folders (downloads, documents, etc). On a separate note, you might see a Windows Defender Smartscreen warning when you try to run a utility as an administrator. If you see this warning, click "More Info" and then "Run Anyway."\
\
Updates:\
\
&#xNAN;_&#x54;his should go without saying, so I had better say it._ DJI, through DJI Assistant 2 and through the DJI Go App on your phone or tablet will be persistent at wanting to update your software, your firmware, and your no fly zone (or safe fly) data. UNLESS YOU WANT TO UNDO everything we're about to do, don't let it! Disable automatic updates of the app on your phone or tablet. Don't use Assistant 2 to connect to your Mavic unless you have a really good reason (like using older Assistant to change parameters). Click “Ignore” to requests to update Safe Fly or No Fly Zone data. Run on airplane mode (both your computer and your phone or tablet) when connecting to the Mavic unless there is a reason you need internet (like live streaming). DON'T LET DJI UPDATE! If you think you might want the features of an update, see what the community says about the update and then install one that you have modified with the procedures in this Walkthrough.\
\
Background for Beginners:\
\
Are you totally new to the ideas of rooting, mixed modding firmware, and flashing? If so, read on if you want to have the lay of the land. Otherwise, skip ahead!\
\
What is Flashing? Flashing is the process of writing into the memory in the Mavic (or the controller . . . or a phone, etc.) new operating system ("OS") code. When you update the Android or iOS version of your phone, you are flashing a new OS file to the phone. The same occurs with our DJI drones. In fact, all DJI drones run on the Android Operating System--the same OS found in Android phones. Because we consider the drone a device, instead of a computer, we refer to the OS we put on it as "Firmware" (or "FW" for short), but it's really the same thing. The drone is--like a phone--a mini computer that runs an operating system (firmware).\
\
If My Mavic's Firmware is Up-To-Date, Why Do I Need to Flash Anything? In newer versions of its firmware, DJI has taken away our ability to change flight controller settings in the Mavic that we used to be able to modify to remove altitude and NFZ restrictions. In order to get these features back, we need to flash the Mavic with an older version of its firmware which, when coupled with an older version of the DJI Assistant software on our computer, allows us to make those modifications.\
\
What's Mixed Modding? To answer that question, you need to understand the particular way in which firmware updates are installed on DJI drones. Usually, with Android devices, the entire Operating System is replaced when an update is installed. But on a DJI drone, the various components of its systems are individually replaced during an update. Each of the various component systems has a corresponding numbered file that resides on the drone. The individual replacement files of a firmware update are rolled together in a .bin file, which is a lot like a zip file. During flashing, the numbered files get replaced. But what happens if the update is missing one of those numbered files? In that case, the older file remains and continues to control that system. Because of this feature, we are able to modify our Mavic to have a combination of older and newer firmware version files. Most commonly, and as we will do in this walkthrough, we want the 305 and 306 files from firmware version 1.3.700 and the rest of the files from a newer firmware version. Why? Firmware version 1.3.700 (for short "FW.700") was the last version that allowed us to change altitude and NFZ flight parameters. The 305 and 306 files of that version (or any version) are the files for the flight controllers. If we retain these, we can remove altitude and No-Fly-Zone restrictions. But, by updating the remaining firmware files, we can also have all of the newer features, like dynamic home point and the new intelligent flight modes. To get there, we have to first flash the entire Mavic back to FW.700 and then flash forward with modified versions of a newer FW that are missing the 305 and 306 files.\
\
What is Root? If you are an iOS person, you maybe have heard of Jailbreaking. Rooting and Jailbreaking are the same thing. Gaining root in the Android OS merely means that you have acquired administrative privileges on the device (like being an administrator in Windows) which, in turn, lets you access files and delete or modify them. DJI and the mobile phone companies generally don't want their users to have root. But very smart programmers often find exploits that allow them to gain administrative access (root). Unlike most Android updates, firmware updates on DJI drones do not take away root. So, once you have it, you have it.\
\
Why do I need/want root? You don't need root to enjoy your Mavic or do most of the mods described below. But you might want it. Why? Remember those numbered files that make up the firmware on the Mavic? If you really want to be free of NFZ's, you want to be able to delete one of those--905--from the Mavic. To do that, you'll need root.\
\
Links and References:\
\
Java (for running Dumlracer): [www.java.com](https://www.java.com/en/)\
Dumlracer (for getting root): [github.com/CunningLogic/DUMLRacer](https://github.com/CunningLogic/DUMLRacer)\
Android Debug Bridge (ADB) (for testing root and removing NFZ files): [dl.google.com/android/repository/platform-tools-latest-windows.zip](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)\
Dumldore (for flashing firmware): [github.com/jezzab/DUMLdore/releases](https://github.com/jezzab/DUMLdore/releases)\
Firmware Repository: [dji.polybotes.feralhosting.com/DJI-Firmware](http://dji.polybotes.feralhosting.com/DJI-Firmware/BIN/Mavic%20Pro%20\(Incl%20Platinum%20and%20Alpine\)/)\
7zip (for editing firmware files): [www.7-zip.org](https://www.7-zip.org/)\
Notepad++ (for editing DJI Assistant config file): [notepad-plus-plus.org](https://notepad-plus-plus.org/)\
Stock DJI Go Apps: [www.apkmirror.com/apk/dji-technology-co-ltd](https://www.apkmirror.com/apk/dji-technology-co-ltd/)\
My Mavic Pro Share Folder (for already modded roms and apps): [Mavic Pro Share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp)\
The OG ("Original Gangsters") DJI Wiki (for goto technical on hacking DJI drones): [dji.retroroms.info](https://dji.retroroms.info/)\
Digdat0 (great YouTube How To videos): [www.youtube.com/user/digdat0](https://www.youtube.com/user/digdat0)\
Quad808 Blog (for lots of great info about modding the Mavic): [DJI-Dashboard-How-To-tips-and-tricks-\*MAVIC\*](https://www.rcgroups.com/forums/showthread.php?2916078-DJI-Dashboard-How-To-tips-and-tricks-*MAVIC*)\
\
Let's Get Started!:\
\
Starting Point:\
\
If you have ever been on a firmware higher than 1.3.400, your Mavic has the 905 No-Fly-Zone file and no amount of flashing is going to get rid of it. If you're going to want it gone, you'll need root. The best firmware to get root is, ironically, the first version that put in place anti-rollback protections, FW 1.4.100 or later. So, as a preliminary step to rooting, we want to flash our Mavic to FW 1.4.100 or higher. If you don't care about eliminating NFZs from your Mavic, or if you've never gone higher than 1.3.400, you can skip the next section, "Getting Root".\
\
Otherwise, with a full battery installed, turn on your Mavic and connect it by USB to your computer. Then start DJI Assistant and wait for the firmware page to load up. If you are not on FW 1.4.100, .200, or .300, pick FW 1.4.100 and install it. If you are already on one of those versions, you're ready for the next step . . . Getting Root.\
\
Getting Root:\
\
You do not need to get root if you have no desire to remove the No Fly Zone (NFZ) files from your Mavic. If you're fine with NFZ being on your Mavic, you can skip this section altogether (unless you just want root because it makes you feel powerful and cool ![](https://static.rcgroups.net/forums/images/smilies/cool.gif) )\
\
NOTE: These instructions are for Windows. The software that gets root runs in Java.\
\
STEP 1: Restore Factory Defaults:\
\
With a full battery, connect the Mavic to your computer with a USB cable. Start the most current version of DJI Assistant on your computer. Confirm in DJI Assistant that you are on FW v. 1.4.100 or higher. Select to Restore Factory Defaults. After your Mavic has been restored to factory defaults, exit DJI Assistant and shut down the Mavic (leave it connected).\
\
STEP 2: Install Java:\
\
Download and install the appropriate version of [Java](https://www.java.com/en/) for your computer.\
\
STEP 3: Download and "Install" Dumlracer:\
\
I placed "Install" in quotes because you don't really install Dumlracer. Rather, you save it to your hard drive and then run a java command in a Windows Command Prompt to have it work its magic. You will want to put it in a folder in the root directory of your primary hard drive to make running it easy from a Windows Command prompt and to avoid Windows 10 Controlled Folder security blocks.\
\
Go to [github.com/CunningLogic/DUMLRacer/releases](https://github.com/CunningLogic/DUMLRacer/releases) and click on the most recent version of "DUMLRacer.jar". When the download options pop up at the bottom of Edge or Internet Explorer, select "Save As" (arrow to the right of "Save"). In the dialog box that pops up, find your primary hard drive, usually "C:" under "This PC". Click on that so that you are seeing its contents on the right hand pane (you should see, among other folders, "Windows" and "Program Files"). At the top, click "New Folder" and name the new folder something easy, like "Mavic". Double click on the new folder (so you are seeing inside it--should be empty on the right), and click save.\
\
STEP 4: Run Dumlracer to Root your Mavic:\
\
Turn on your Mavic and connect it by USB to your computer. In the Windows search box on the start menu, type "cmd". "Command Prompt" should come up in the search results. Right-click on it and select "Run as an Administrator", responding yes (and entering an admin user and password if necessary) to any security prompts. In the black Command box that appears, type "CD C:\Mavic" (or whatever name you used for the new folder--here forward I will assume "Mavic"). The prompt should change to show you are in that folder. Type "Dir". You should see the "Dumlracer.jar" file in response. Now type:\


> java -jar DUMLRacer.jar AC

At the end of the text that scrolls, you should see "Choose target port: (\* suggested port)", followed by a numbered list of ports found. It's not uncommon for there to only be one port in the list. If there is only one, you can safely choose it--if it's not your Mavic, the program will simply fail. If there is more than one listed and you are unsure which is the Mavic, type E to exit, disconnect your Mavic from your computer, and then run the above command again. Whatever is missing from the new list was your Mavic. Type "E" again, reconnect your Mavic, and run Dumlracer again.\
\
If there are no ports in the list, try starting DJI Assistant and connecting to the Mavic. With DJI Assistant open, run the command again.\
\
Once you have identified the correct port, exit DJI Assistant if it is running and then enter the bracketed number for the port to which the Mavic is connected. Now wait for Dumlracer to do its magic. Be patient. Dumlracer has to run two races against the Android OS. This will take several minutes to complete. When Dumlracer completes, shutdown your Mavic. Keep the Command Prompt window open, you're going to use it in just a moment.\
\
STEP 5: Download and "Install" Android Debug Bridge (ADB):\
\
Android is owned and maintained by Google. ADB is the official Google software used by Android app developers to run commands in Android from a computer. We are going to use it to check if we have root and, later, to remove the 905 NFZ files from the Mavic. Like Dumlracer, you do not so much install ADB as download and put it somewhere where you can run it. But, unlike Dumlracer, ADB is a bunch of files and folders that all need to be together to work. So, we will download it as a zip file and then extract it to our "C:\Mavic" folder.\
\
Go to [dl.google.com/android/repository/platform-tools-latest-windows.zip](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) to download the latest version of ADB from Google. Save the zip file to wherever you normally like to keep your downloads. In Windows File Explorer, navigate to the zip file, right click, and select "Extract All". Change the extraction location to "C:\Mavic". Then, in Windows File Explorer, navigate to "C:\Mavic". Inside you will see a folder entitled "platform-tools". Right click on the folder and rename it "ADB".\
\
STEP 6: Test Root with ADB:\
\
Start your Mavic back up and wait until it has reconnected to your computer (usually a browser window will open showing the external SD card contents). In the Command Prompt window you used earlier, type "CD ADB". The prompt should now show "C:\Mavic\ADB". Then type the following command:\


> adb shell

You should see something like "root@wm220\_dz\_ap0002\_v1:/ #" (so long as you see something starting with "root", you're good). To double check, type "ls" after the pound or hashtag. A long list of folders on the Mavic, starting with "amt" should show. At the hashtag prompt type "exit" and press return to exit the adb shell and return to the command prompt. Guess what? You've got root!!!! Go ahead and exit the Command prompt and shut down your Mavic.\
\
Rolling Back and Forth with Our Firmware:\
\
So we're ready now to install FW 1.3.700. We can't do this using DJI Assistant. Rather, we will use an app called Dumldore to flash the firmware that we will download and edit directly.\
\
STEP 1: Download and "Install" Dumldore:\
\
As with Dumlracer and adb in the preceding section, we don't really "install" Dumldore like a traditional Windows app. Rather, we download to a location from which we can run it. Go to Jezzab's Dumldore GitHub page at [github.com/jezzab/DUMLdore/releases](https://github.com/jezzab/DUMLdore/releases). Download the latest release zip file to wherever you keep you downloads. Navigate to the zip file in Windows File Explorer, right click, and select "Extract All". For the extract location, enter "C:\Mavic".\
\
STEP 2: Download Firmware Files:\
\
Go to the [Mavic firmware repository](http://dji.polybotes.feralhosting.com/DJI-Firmware/BIN/Mavic%20Pro%20\(Incl%20Platinum%20and%20Alpine\)/) and download the following .bin files:\


> V01.03.0700\_Mavic\_dji\_system.bin\
> V01.04.0300\_Mavic\_dji\_system.bin

Save the downloads to somewhere you can easily find them, like "C:\Mavic\Firmware".\
\
Note: If you don't want the newest Intelligent Flight features (Panoramic photos, Quick Shots), you can skip downloading the 1.04.300 firmware and run your Mavic purely on FW.700.\
\
STEP 3: Flash FW.700\
\
NOTE: If you have never installed firmware above 1.03.400, then you do not have NFZ files. The 1.03.700 firmware you just downloaded includes these files. If you do not want them, then go to my [Mavic Pro Share Folder](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) and download the one entitled “V01.03.0700\_no\_905\_Mavic\_dji\_system.bin” (due to a quirk in the stock version of this firmware, the normal procedure below for removing components with 7-zip doesn’t work, so I’ve provided a modded one for you). This will save you having to root and remove the files with adb later. If you have, at any time, been at a firmware level above 1.03.400, then it's fine to flash FW.700 as is, since you already have the 905 NFZ file that we will be removing later anyway.\
\
To flash FW.700, start up your Mavic and connect it to your computer. In Windows File Explorer, navigate to the DumldoreV3.exe file ("C:\Mavic\Dumldore-master"), right click on the file, and select "Run as administrator". As noted at the beginning of this walkthrough, you might see a Windows Defender Smartscreen Popup. If you do, click "More Info" and then "Run Anyway". Enter any necessary credentials.\
\
IMPORTANT: At the bottom of Dumldore, you will see the current firmware version. Each time you start Dumldore and connect, look at this. A flash is not truly complete until the flashed firmware version shows up here. Customarily, you will have to flash two or three times for an entire flash to go through and update the firmware version detected by Dumldore.\
\
After notating the current firmware version (if you rooted, it should be 1.04.0100 or higher), click "Load Firmware", navigate to where you downloaded the firmware, and select the "V01.03.0700\_Mavic\_dji\_system.bin" file. The bottom of Dumldore should now say the firmware file that has been loaded. Now click "Flash Firmware" and go pour yourself a coffee or drink (depending upon the time of day) and wait for the flash to finish. While you are waiting for the flash to complete, you can move on to the next step to edit the newer firmware.\
\
Once Dumldore says the flash is complete, exit Dumldore and then restart the Mavic. Wait for the Mavic to reconnect and then restart Dumldore. Look at the Firmware version. If it doesn't say 1.03.0700, you need to load and flash 0700 again. Rinse, wash, repeat until Dumldore says you are on v. 1.03.0700.\
\
Note about the battery scare: Every once in a while, while flashing down or up with firmware, the battery, which also receives an update, will get locked in update mode. This can be identified by the center two lights on the battery staying on and the inability to turn the battery off. If this happens, don't panic. Wait until Dumldore says the flash is finished. Leave the battery in the Mavic. Exit Dumldore and disconnect the Mavic from the computer. Reconnect the Mavic (which you have not restarted, since the battery won't let you turn it off) and the restart Dumldore and flash again. The battery will finish its update on the next go around and will return to normal operation.\
\
STEP 4: Modify (or Download a Modified) Updated Firmware:\
\
Now that we have our Mavic's firmware downgraded to FW.700, we can, if we want the newer functions, re-update the firmware to v. 1.04.0300 using a firmware file that does not have the 305 and 306 controller files. Take a pause here and ask yourself, "_Which do I care more about? Precision landing or panoramic photos and quick shots?_" If you update now to a higher firmware (a mixed mod), your Mavic will no longer hit the bulls eye on a Return to Home landing even after a precision takeoff--it'll miss by a few feet. But you will gain panoramic photos and quick shots. If you are fine without pano or quick shots, then skip over this step and proceed to removing the NFZ files.\
\
If, on the other hand, you want the latest bells and whistles, then follow these instructions to modify the FW 1.04.0300 file you downloaded in the prior step. If you don't want to edit the FW 1.04.0300 file yourself, you can download one from which I have already removed the 305 and 306 controller files, entitled "V01.04.0300\_no\_305\_306\_Mavic\_dji\_system.bin" from my [Mavic Pro Share Folder](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) on Google Drive.\
\
Otherwise, to modify the file yourself, you will need to install 7zip. 7zip is a reputable, free, open source software that will allow us to edit the files contained within the .bin firmware files. Go to [www.7-zip.org](https://www.7-zip.org/) and download the version you need for your OS and platform. Once 7zip is installed, right click the "V01.04.0300\_Mavic\_dji\_system.bin" file you downloaded in the previous step and select "7Zip" and then "Open Archive". Delete the files that start with "wm220\_0305" and "wm220\_0306". If you have never had the 905 NFZ file (you came from 1.3.400 or earlier and installed a 905 free 1.3.700 FW), then also remove the “wm220\_0905” file (or download the 905 free version from [my share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp)). Exit 7Zip. You're now ready to flash back to FW 1.04.0300 without the 305 and 306 (and 905) controller files.\
\
Start Dumldore and load your modified FW 1.04.0300 file. As before, you will need to flash at least twice to get the job done. You're not done until, after an exit and restart of both the Mavic and Dumldore, Dumldore identifies the firmware version as 1.04.0300.\
\
Because the 1.04 series FW updates include an update for the intelligent battery, after the Mavic shows as updated, I like to run the update for every battery that I have. To do so, I just change batteries and flash the update again once for each additional battery.\
\
STEP 5: Remove the NFZ Files:\
\
DJI’s New NFZ Deletion Protection: DJI has modified the 305 and 306 files in FW 1.4.XXX to detect if the NFZ files are missing from the Mavic and, if so, to give a “Firmware Mismatch” error and refuse takeoff. So, do not delete the NFZ files if you are not going to use the FW .700 305 and 306 controllers. In other words, if you did not flash back to FW .700 and instead are running straight FW 1.04.XXX, if you delete the NFZ files using the procedure below, your Mavic will refuse to fly.\
\
To remove the NFZ files from the Mavic, we need to run some commands in ADB, which we installed in Step 5 of "Getting Root". If you’ve never had firmware higher than 1.3.400 and, during this walkthrough, only flashed firmware with 905 files removed, you can skip this step altogether. Otherwise, you can delete the NFZ files by [downloading](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) my “del905.bat” file and placing it in the “c:\Mavic\ADB” directory. Then, open a Command Prompt with administrative privileges (in start menu, type "cmd", right click on "Command Prompt" and select "Run as an Administrator"). Type "CD C:\Mavic\adb" to get to the ADB directory. Then type “del905”. Alternatively, you can run the batch file commands manually by entering each of the following in order (excluding italicized explanations):\


> adb shell _starts the adb shell so we can work inside the Mavic_\
> mount -o remount,rw /amt _makes the amt directory read and writable_\
> ls amt _lists contents of amt folder—nfz folder is located here_\
> rm -r amt/nfz _removes the NFZ folder and contents—can use command above to list again to confirm deletion_\
> ls data/upgrade/backup _lists contents of backup folder—905 backup is located here_\
> rm data/upgrade/backup/wm220\_0905\* _removes the 905 backup file—use above command to list and confirm deletion_\
> Reboot _reboots Mavic_

After the reboot is finished, close the Command Prompt window, and shut down your Mavic.\
\
Note about NFZs: Even though you have removed the NFZ data from the Mavic, the DJI Go App also has it's own NFZ database. This will not ground a Mavic that has had the NFZ removed from the Mavic, but will give warnings and direct the user to land immediately. Moreover, unless parameter changes described below are made, flight performance will be reduced. It is possible to mod some versions of DJI Go to remove the NFZ databases, thus fully making the Mavic unaware that it is in an NFZ (see discussion below under "Modding DJI Go").\
\
Modifying Parameters:\
\
We've got our mixed mod firmware (or straight .700 firmware) and NFZ removed from our Mavic. But now we need to change parameters in the Mavic to unleash what we have unlocked. To do so, we need to use an older version of DJI Assistant, specifically v. 2.1.2 or earlier. Going forward, because you know not to let DJI Assistant update your Mavic (right?!! ![](https://static.rcgroups.net/forums/images/smilies/biggrin.gif)), the older DJI will be our primary version, which we will use for modding our parameters. The only reason to keep the current DJI Assistant would be to update your RC or Goggles automatically (but you still know not to do that until you've researched what the update disables, right?!!! ![](https://static.rcgroups.net/forums/images/smilies/biggrin.gif)). So, in the following steps, we're going to sideline or uninstall the current Assistant, install the old Assistant, and then modify our Mavic's parameters.\
\
STEP 1: Sideline or Uninstall Current Assistant\
\
I'm assuming you already have the current version of DJI Assistant installed. If not, there's no need to install it. Just skip this step. If you do have the current DJI Assistant installed and still think you might want to use it, follow these steps to sideline it, otherwise just uninstall it and skip to the next step.\
\
To sideline the current DJI Assistant, in Windows File Explorer, browse to the "Program Files (x86)\DJI Product" folder on your primary drive. Inside that folder you will see a folder entitled "DJI Assistant 2". Rename that folder to something different, like "DJI Assistant 2-New". Open that renamed folder and look for "DJI Assistant 2.exe" Right click on that file and drag it to the desktop. Select to create a shortcut. Rename the shortcut with something that will remind you that it starts the new version of Assistant. Then, in the control panel, Add remove programs, select uninstall Assistant. You'll get an error message that it can't find the app. Select to go ahead an remove it from the list. The shortcut you created on your desktop will still allow you to start the program. You can keep it there or move it into your start menu.\
\
STEP 2: Install and Modify Older Assistant\
\
Use the following link to download and install the version of Assistant that will allow you to modify your Mavic parameters: [DJI Assistant 2 1.1.2](https://dl.djicdn.com/downloads/dji_assistant/20170527/DJI+Assistant+2+1.1.2.573+2017_05_27+16_41_02+6e0216bf\(b21de8d8\).zip). I've also put this file in my [Mavic Pro Share Folder](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp). Unzip the file and install Assistant. Note: You may get a Controlled Folder alert that blocks Assistant from saving a shortcut to your desktop. If this happens, you can drag a shortcut from your start menu onto your desktop.\
\
To get this older version of Assistant to open in debugging mode, we need to modify one of its settings using Notepad ++. Download and install Notepad ++ from its website: [notepad-plus-plus.org](https://notepad-plus-plus.org/). Now navigate in Windows File Explorer to "Program Files (x86)\DJI Product\DJI Assistant 2\AppFiles" within your primary drive. There you will see a file entitled "Main.js". Right click on this file and select "Edit with Notepad++". In the file, scroll down until you see "//mainWindow.webContents.openDevTools()". Delete the "//" at the beginning of this line and then click Save. You'll probably get a message saying that the file can't be saved because it is protected, and asking if you want to reopen Notepad++ in administrator mode. Click "Yes" and, once it has reopened, click "Save" again. Exit Notepad++.\
\
STEP 3: Modify Mavic Parameters\
\
Without your Mavic connected, start the older version of DJI Assistant you just installed. In the right hand frame, at the top, select "Resources". Then, on the list on the left hand side of that frame, select "file://" under "Local Storage". To the right, in the list of parameters, you will see a key entitled "debug" with a value of "0". Change this value to "1" and press enter. Click the "X" to the right of "Resources" to close this pane (don't click the close window "X" by mistake). You will need to repeat this process each time you want to modify parameters in your Mavic.\
\
Now start your Mavic and connect it to your computer without exiting Assistant. When Assistant sees the Mavic, select it. Don't panic when Assistant gives you an error reading the firmware version of your Mavic. Because this is an older version of Assistant, it won't recognize FW 1.04.300, but rest assured you didn't mess up flashing your Mavic. In the left pane of Assistant, you'll see a much longer list than you are used to. In that list, select Parameters. Here is where we are going to make changes to the FW.700 305 and 306 flight controller files that we worked so hard to get installed. As you make setting changes, you need merely hit enter after changing the parameter--the change is immediately saved to the Mavic (so don't panic when you exit Assistant--you won't get asked to save). To find a parameter, start typing it in the search box at the top. I recommend hitting the plus to the right to save the parameter in your favorites for easy access in the future. If you ever want to change a parameter back to its default, click “Reset”. When you are done, just exit Assistant and shutdown your Mavic.\
\
There are a lot of great tutorials out there for setting changes. Most notably in YouTube videos by [Digdat0](https://www.youtube.com/user/digdat0). Below are the parameters I like to change and what they do. Most of these can be changed in the newest firmware (1.4.XXX) 305 and 306 controllers as well, the exception being those for unlimited altitude and flight in NFZ.\
\
Remove altitude restrictions

> g\_config\_flying\_limit\_height\_limit\_enabled: 2\
> g\_config\_flying\_limit\_limit\_height\_rel: 10000\
> g\_config\_flying\_limit\_limit\_height\_abs: 10000\
> g\_config\_flying\_limit\_limit\_height\_abs\_without\_gps : 10000\
>

Increase auto landing descent speed above 20m

> g\_config\_landing\_auto\_landing\_vel\_L2: -6\
>

Automatically pitch gimbal to horizontal on landing

> g\_config\_landing\_ctrl\_gimbal\_pitch\_to\_horiz\_enable : 1\
>

Increase return to home speed

> g\_config\_go\_home\_gohome\_idle\_vel: 13\
>

Disable go home at point of no return (hotpoint)

> g\_config\_hotpoint\_battery\_low\_go\_home\_enable: 0\
> g\_config\_hotpoint\_enable\_mode: 0\
>

Reduce wind warnings

> g\_config\_air\_est\_big\_wind\_level1: 8\
> g\_config\_air\_est\_big\_wind\_level2: 11\
>

Sport Plus (zippier performance in S mode)

> g\_config\_control\_dyn\_tilt\_min: 28\
> brake\_sensitive\_gain: 110\
> g\_config\_mode\_sport\_cfg\_rc\_scale: 1\
> g\_config\_mode\_sport\_cfg\_tilt\_atti\_range: 43\
> g\_config\_mode\_sport\_cfg\_vert\_vel\_up: 10\
> g\_config\_mode\_sport\_cfg\_vert\_vel\_down: -10\
> g\_config\_mode\_sport\_cfg\_vert\_acc\_up: 10\
> g\_config\_mode\_sport\_cfg\_vert\_acc\_down: -10\
> g\_config\_fw\_cfg\_max\_speed: 20\
>

GPS Mode (P mode) Plus

> g\_config\_mode\_normal\_cfg\_tilt\_atti\_range: 33\
> g\_config\_mode\_normal\_cfg\_vert\_vel\_up: 8\
> g\_config\_mode\_normal\_cfg\_vert\_vel\_down: -6\
> g\_config\_mode\_normal\_cfg\_vert\_acc\_up: 8\
> g\_config\_mode\_normal\_cfg\_vert\_acc\_down: -6\
>

Smoother Flight/Camera in Cinematic Mode

> g\_config\_mode\_cinematic\_cfg\_tilt\_exp\_mid\_point: 0.15\
> g\_config\_mode\_cinematic\_cfg\_tors\_exp\_mid\_point: 0.10\
>

Smoother Flight/Camera in Tripod Mode

> g\_config\_mode\_tripod\_cfg\_tilt\_exp\_mid\_point: 0.15\
> g\_config\_mode\_tripod\_cfg\_tors\_exp\_mid\_point: 0.10\
>

Remove No Fly Zone restrictons

> g\_config\_airport\_limit\_cfg\_cfg\_disable\_airport\_fly \_limit: 1\
> g\_config\_airport\_limit\_cfg\_cfg\_limit\_data: 20250910\
> g\_config\_airport\_limit\_cfg\_cfg\_search\_radius\*\*: 0\
> g\_config\_airport\_limit\_cfg\_cfg\_enable\[FLY\_LIMIT\_TYPE\_AIRPORT]\*\*: 0\
> g\_config\_airport\_limit\_cfg\_cfg\_r1\[FLY\_LIMIT\_TYPE\_AIRPORT]\*\*: 65535\
> g\_config\_airport\_limit\_cfg\_cfg\_r1\[FLY\_LIMIT\_TYPE\_SPECIAL]\*\*: 65535\
> g\_config\_airport\_limit\_cfg\_cfg\_h1\[FLY\_LIMIT\_TYPE\_AIRPORT]\*\*: 10000\
> g\_config\_airport\_limit\_cfg\_cfg\_h1\[FLY\_LIMIT\_TYPE\_SPECIAL]\*\*: 10000\
> g\_config\_airport\_limit\_cfg\_cfg\_angle\[FLY\_LIMIT\_TYPE\_AIRPORT]\*\*: 89.8\
>

\*\*The double asterisked items above are parameters I have identified that I believe may contribute to the reducing of flight performance in an NFZ, even when the NFZ override (the first two settings in the list) have been implemented. These settings seem to allow the Mavic to fly normally in an NFZ, but my opportunities to do real world testing are limited. Some of these may be unnecessary changes from default settings. Reports of any other Mavic user's experiences are welcome.\
\
Quick motor start and shutdown\*\*\*

> g\_config\_rc\_cfg\_start\_motor\_verify\_tim\_ms: 10\
> g\_config\_rc\_cfg\_stop\_motor\_verify\_tim\_ms: 10\
> g\_config\_rc\_cfg\_emergency\_stop\_verify\_time\_ms: 10\
>

Motor restart while inverted\*\*\*

> g\_cfg\_debug\_motor\_no\_start\_motor\_check: 1\
> g\_config\_fdi\_open\_close\_auto\_stop\_motor\_check: 1\
>

\*\*\*The first of these last two setting groups ("Quick Motor Start and Shutdown") reduces the time for non-emergency and emergency CSC motor stop from 1 second and 0.2 second, respectively, to 10ms for both. It likewise reduces CSC motor start from 0.2 sec to 10ms. The "Motor Restart While Inverted" group of settings allows restart of the motors wh§ile the Mavic is inverted using CSC. CSC is the "Control Stick Cutoff" done by putting both of the sticks down and in or down and out. In the DJI Go App, you can set this command to work for cutoff only when the Mavic has detected a breakdown (prop interference, inverted, etc.) or, alternat§ively, at any time. I like the short intervals to allow me to chop the engines during a hand catch or in low hover over grass without the Mavic trying to do a backwards, turning, sliding maneuver (the response from the CSC stick positions). However, these brief intervals for the CSC command to kill the motors also mean that you could, theoretically, shut off your engines in flight inadvertently (but would you really ever put the sticks in those positions for flight?).\
\
Why the settings to start the engines inverted? I included those in case you want to cut the motors at altitude and freefalling down (do so at your own risk) to a lower altitude. Without the configuration to allow a restart while inverted, you could lose a Mavic that flipped in freefall.\
\
There's one other setting change I like to make. If you want to do a high-altitude flight (with a permit, of course), you will want to disable the Mavic's insistence to descend and land your Mavic when the battery level gets low. To do this, we need to tell the Mavic that it has a third-party (non-DJI) battery installed. Be mindful, that by doing the changes below, you literally could fly your Mavic at any altitude (including very high) until the battery is completely dead and it becomes an expensive brick falling to wreak destruction on whatever lies below it.\
\
To disable the forced descent and landing for low battery, in the left margin of Assistant select "Flight Settings" and then, on the right at the top, select "Battery". In this window, change the Battery Type to "Non-DJI Battery". Leave it as a 3 cell battery. Under "Low Battery Warning" and "Critical Low Battery Warning" select "Only LED Warning." I also suggest you lower the Critical Low Battery Voltage Warning all the way down to 10.50v.\
\
Note about High Altitude Flights: As a pilot who flies high-speed aircraft, I would ask that anyone doing high altitude flights go on to a live radar traffic site, such as [FlightAware](https://flightaware.com/) and constantly monitor for aircraft in the vicinity during the drone flight. A drone strike at low altitudes at slower speeds is survivable. If one occurred at higher altitudes where aircraft can be moving over 500mph/800kmh, it could be catastrophic. We could take down an airliner or private jet with a drone if we hit it just wrong. So please! Take appropriate precautions to monitor aircraft in the vicinity during high altitude flight and be prepared to do a motor cutoff (CSC) to get out of the way. The Big Sky small craft theory of avoidance has been proven wrong with fatal consequences MANY MANY times over the last century. The good news is that all flights involving high speed aircraft will be tracked on radar.\
\
Choosing Which Version of DJI Go:\
\
We've got our Mavic all flashed and configured. But now we need DJI Go on our phone or tablet. We can just download and install the most recent version of DJI Go, right? Right . . . unless we want to remove forced updates, or firmware checks, or “phoning home” to the various websites DJI uses to collect data without us knowing. In that case, we need to custom mod our app. And if we want FCC Boost (see “Background for Beginners” above) along with the latest version of DJI Go, we’ve got to go a step further and run two versions of Go side-by-side. Not so simple now, huh? ![](https://static.rcgroups.net/forums/images/smilies/eek.gif)\
\
Stock or Modded: What's right for you?\


* If you are running FW 1.04.300 (mixed mod with FW.700 controllers and deleted NFZ is okay), and don’t care about forced login, forced firmware updates, and DJI data collection, then you are probably fine using the newest DJI Go app downloaded from DJI, . . . . . . at least until you are not (they could put additional monitoring checks for modding into future versions). You can still have Force FCC and FCC boost with a stock DJI Go app (see below).
* If you want fake login, blocking of forced updates, or blocking of "phone home", then you will need to run a modded DJI Go. You can mod it yourself or download one from my share. You can still have Force FCC and FCC boost with a modded DJI Go app (see below).

Force FCC and FCC Boost:\
\
REMEMBER: Force FCC and FCC Boost are not one in the same. Force FCC will get you the standard FCC power of 0.4W (as opposed to CE power of 0.1W). FCC Boost, by contrast, allows the even greater transmit power of 1.5W and the option to shift frequency.\
\
Force FCC and FCC Boost are both achievable with stock or modded DJI Go up to version 4.1.10 (Android) and 4.1.12 (iOS) by merely placing special config files in a certain folder. Force FCC (but not FCC Boost) is possible with a single install modded DJI Go v. 4.1.22, which will also make all of the newest Mavic features available (pano, quick shots). To get FCC Boost with a newer version of DJI Go (stock or modded), I have created a special modded version of DJI Go 4.1.3 that can be installed side-by-side with any other version of Go and which, when started first, will establish FCC Boost (using the same config files that work with older stock Go versions). Of course, if you decided to stay with FW 1.03.700 throughout, then the choice is easy, run an older version (stock or modded) with the boost config files (discussed below).\
\
Note about NFZs: As mentioned above under the firmware modding section, removing the No-Fly-Zone files from the Mavic does not fully eliminate NFZs. The DJI Go app also contains an NFZ database. While an NFZ free Mavic will not be grounded, the app will alert about an NFZ and trigger reduced flight performance of the Mavic (unless parameter changes override this--see discussion above). It is possible to remove the NFZ database from the older versions of DJI Go that also allow FCC Boost. Doing so is beyond the scope of this walkthrough, but all of the version 4.1.3 DJI Go and the DJI Go Boost available for download from my [Mavic Pro Share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) have had the NFZ database deleted. DJI has changed the app to make removal of the database in newer versions practically impossible. So, if you go with a newer version (stock or modded), you will have to put up with the alerts.\
\
Where to Next?\


* If you want to run a stock version of DJI Go v. 4.1.10 or earlier with Force FCC or FCC Boost, go to [dji.polybotes.feralhosting.com/DJI-Firmware](http://dji.polybotes.feralhosting.com/DJI-Firmware/BIN/Mavic%20Pro%20\(Incl%20Platinum%20and%20Alpine\)/) and download the older stock version of Go that you want to install, and then skip to “Step 4: Installing the APK”, in the section below. After that, follow the instructions for downloading the config files, but don’t download and install my Boost app (you will just use the config files directly with the older stock Go app).
* If you want to run a stock version of DJI Go after v. 4.1.10 with Force FCC or FCC Boost, go to [dji.polybotes.feralhosting.com/DJI-Firmware](http://dji.polybotes.feralhosting.com/DJI-Firmware/BIN/Mavic%20Pro%20\(Incl%20Platinum%20and%20Alpine\)/) and download the version of Go that you want to install OR, if you want the newest version of Go, download it and install it directly from the Play Store. If you didn’t install from the Play Store, skip to “Step 4: Installing the APK”, in the section below. If you did install from the Play Store, then skip to “Step 5: Installing FCC Force or FCC Boost” in the section below. Either way, be sure to download and install my Boost app and place the config files as instructed below.
* If you want to run modded version of DJI Go, with or without Force FCC or FCC Boost, continue on!\\

Modifying and Installing DJI Go:\
\
If you could care less about panoramic or quick shots, or chose to stay at FW 1.03.700 (so that they're not available to you anyway), then I recommend you modify DJI Go v. 4.1.3. This is the most stable and easily modified version that can run FCC Boost directly. If you want panoramic and quick shot features, then I suggest you modify DJI Go v. 4.1.22. This cannot run FCC Boost directly, but will work with my Boost App. And, if you don't want to mess with modding apps, links to the ones I have modded and used are provided (just skip to the end of Step 3. ![](https://static.rcgroups.net/forums/images/smilies/smile.gif)\
\
STEP 1: "Install" Deejayeye-Modder\
\
As with Dumldore and adb, we don't install Deejayeye-Modder _per se_. Rather, we download the files and put them where we can get to them. Go to [Bin4ry's GitHub for Deejayeye-modder](https://github.com/Bin4ry/deejayeye-modder). To download the application, click the green "Clone or download" button and then select "Download ZIP". Save the zip file to wherever you normally download your files. Right click on the file, select "Extract All", and set the extraction directory to "C:\Mavic".\
\
Start a Command Prompt with Administrator privileges (in start, type "cmd", right click "Command Prompt", select "Run as administrator"). In the Command Prompt window, type the following commands:

> cd C:\Mavic\deejayeye-modder-master\
> download\_tools.bat

Three additional tools needed for Deejayeye-modder will download. When you are back to the command prompt, you can close the Command Prompt window.\
\
STEP 2: Download the Android APK Files for DJI Go Versions To Be Modded\
\
Starting somewhere around DJI Go v. 4.1.14, DJI put security in the app to block modding efforts. This security feature is called "SecNeo". Fortunately, some versions of the app have made it out in the wild without SecNeo. If you want all of the newest features and functions, you will want the NoSecNeo version of DJI Go 4.1.22 for which I provide a link below. If you don't care about pano and quick shots and want FCC Boost, then you will want the stock DJI Go 4.1.3 for which I provide a link below. You will mod whichever of these in the next step. If you want both FCC Boost and the newest features, then, in addition to the NoSecNeo DJI Go 4.1.22, you will also need a specially modded Side-by-side DJI Go 4.1.3 ("DJI Go Boost") for which I will provide instructions and a download link in a later step below.

> [DJI Go 4.1.22 NoSecNeo](http://www.openpilotlegacy.org/dji.go.v4-4.1.22-3028592-noseceo.apk) _Alternative download from my_ [Mavic Pro Share Folder](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp)\
> [DJI Go 4.1.3 Stock](https://www.apkmirror.com/apk/dji-technology-co-ltd/dji-go-4/dji-go-4-4-1-3-release/dji-go-4-4-1-3-android-apk-download/) _Alternative download from my_ [Mavic Pro Share Folder](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp)\
>

For other versions of stock DJI Go, go here: [www.apkmirror.com/apk/dji-technology-co-ltd](https://www.apkmirror.com/apk/dji-technology-co-ltd/)\
\
Note: If the version of the apk you download is a zip file, you will need to unzip it first and save it somewhere you can find it.\
\
STEP 3: Modify Your DJI Go App Using Deejayeye Modder\
\
To run Deejayee-Modder, copy whichever version of DJI Go (the ".apk" file) you want to mod to the "PutApkHere" folder in "C:\Mavic\deejayeye-modder-master" (Do not attempt to mod pre-modded APKs I provide below, including the DJI Go Boost APK). Once the .apk file has been copied to the "PutApkHere" folder, open that folder and rename the apk to "orig.apk" (if there is already an "orig.apk", delete it first). Then in the "deejayeye-modder-master" folder, find "RunMe.bat", right click it, and select to "Run as Administrator".\
\
A list of mod choices for the apk will appear. These will vary slightly depending upon the version being modded. To activate a mod, simply type its number and hit enter. The "No" next to that mod will turn to "Yes." Continue until all of the desired mods are switched on. For an explanation of what each mod does, right click "Patch-Descriptions.txt" in the Deejayeye folder and select to open it in Wordpad (best for viewing it). When you are done making your choices, type "P" and press enter. Wait for your modded apk to be compiled. Press any key when prompted and close the Command Prompt window. You will find your new APK file in the "\_\_MODDED\_APK\_OUT\_\_" folder. Rename it to something that makes sense to you and move it to where you want to save it on your computer. We will install it on your Android phone in the next step.\
\
I prefer the following feature settings:

> enableCacheControl: Yes\
> enableMavicFlightModesOnSpark: Yes\
> enable\_MapBox: Yes \[4.1.22 only]\
> enableP3series: Yes \[4.1.3 only]\
> enableQuickshotMoviesForMavic: Yes \[4.1.3 only] (doesn't seem to be working)\
> enableSparkWifiChannelSelectOnOtg: Yes \[4.1.3 only]\
> fakeLogin: Yes \[4.1.22 only] (Can use real login or fake login)\
> ForceFCC: Yes\
> offlineLogin: Yes \[4.1.3 only] (Can only use fake login. If want real, then say no)\
> goOffline: No \[4.1.22 only] (If say yes, must also say yes to fakeLogin and won't be able to live stream)\
> MakeDBPublic: Yes \[4.1.22 only]\
> removeCheckIfRooted: Yes \[4.1.22 only]\
> removePlatinumMotorPropError: Yes \[4.1.22 only]\
> removeFWUpgradeService: Yes \[4.1.3 only]\
> removeGoogleApis: No \[4.1.3 only]\
> removeOnlinefunction: No \[4.1.3 only] (if say yes, no live streaming)\
> removeSocial: No \[4.1.3 only] (if say yes, no live streaming)\
> removeUpdateForce: Yes\
> removeWindWarning: No \[4.1.22 only]\
> restore\_MapsDownload: Yes \[4.1.22 only]\
> run\_on\_CrystalSky: Yes\[4.1.22 only]

Ready Modded Versions and Note Regarding Fake Login: You can download ready modded versions of DJI Go 4.1.3 and 4.1.22 from my [Mavic Pro Share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp). In version 4.1.3, if you want fake (offline) login, you will want to select the "DJI Go 4.1.3-offline", in which case you will only ever be able to use a fake login in that build of the app. Conversely, if you want real (online) login, you will want to select the "DJI Go 4.1.3-online" version. Both of these version, however, still allow connection for live streaming. For version 4.1.22 download "DJI Go 4.1.22-mod". With a single build of the app, you can choose on each occasion whether you are going to real login or fake login. If you want to fake login, just go into airplane mode first. This version also allows live streaming, regardless of how you logged in.\
\
STEP 4: Install the APK's on Your Mobile Phone:\
\
Once you have modded your APK (or downloaded a ready modded one), you will need to side load it on your Android phone, along with my "[DJI Go Boost.apk](https://drive.google.com/drive/folders/1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp)" if you are going to run it side-by-side with a newer DJI Go (no need to use the Boost App with stock or modded DJI Go 4.1.10 or earlier). To side load on an Android device, first go into the security settings of your phone or tablet and select to allow installation from "Unknown Sources". Then connect to your computer, move the APK(s) to your phone, and install them by browsing to them using a file explorer app on your phone (there are many you can download from the Play Store--most phones already come with at least one). If you are installing both a newer DJI Go and my DJI Go Boost, it does not matter the order in which they are installed. However, I strongly recommend you install and do the first run of the apps in airplane mode to avoid NFZ databases from getting installed or updated (see discussion below). If you have installed a version of DJI Go that is to be run offline, make sure you are in airplane mode the first time you run it (no need to be connected to your Mavic or controller) so that you can enter a fake login. For the first login, enter any letters you want for user name and password (I just use "a" and "b"). If you installed my DJI Go Boost, run it in airplane mode and do likewise. Note: You will get a "init map error" message whenever you start my DJI Go Boost app (and the map box will be blank in the app). This is a consequence of the changes I had to make in the app to allow it to install side-by-side with another DJI Go app. You can ignore this error.\
\
Boost: As discussed above, there's two ways to get boost. Run DJI Go 4.1.10 or earlier (modded or not) directly, or run my specially modded "DJI Go Boost" side-by-side with a later version (modded or not) of DJI Go. Either way, in addition to a version of DJI Go that supports boost, you will need a boost config file to put in a particular folder on your android device after you have installed DJI Go. If you download any version of DJI Go that supports boost from my [Mavic Pro Share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) ("DJI Go 4.1.3-offline.zip", "DJI Go 4.1.3-online.zip", and "DJI Go Boost.zip"), the boost files are in included in the zip file in three separate folders. Alternatively, you can download them as a stand-alone zip by selecting "Boost Files" from my [Mavic Pro Share](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp).\
\
NOTE: You must run the app once (in airplane mode) before boost files can be copied in order to create the necessary folder. The boost config file has to be named ".DJI.configs" and has to be placed in "Android/data/dji.go.v4/files" in your Android device's internal memory if you are running any version of DJI Go before 4.1.10, unless you are using my DJI Go Boost app. Because my boost app has to run in its own space and not interfere with whatever DJI Go you are using to actually fly the Mavic, I have modified it to create a different folder into which you have to put your boost config file. You will find that at "Android/data/dji.go.Boost/files". To have boost, copy the appropriate ".DJI.configs" file (there are three to choose from) to the appropriate folder ("dji.go.v4/files" or "dji.go.Boost/files"). The three versions of ".DJI.configs" are contained in the three separate Boost folders you downloaded and unzipped. The one in the folder just entitled "Boost" will increase transmit power from 0.4W to 1.5W, but will stay on the 2.4Ghz frequency used by wifi. Because of wifi interference (particularly in urban areas), this one will increase your range by the least additional amount, but is your only choice if you want to use DJI Goggles, as they only work on this frequency. The ones in folders entitled "Boost 23" and "Boost 25" will not only increase the power to 1.5W, but will also shift the Mavic and the remote controller to new frequencies, 2.33Ghz and 2.57Ghz, respectively. I find best range with the 2.57Ghz, but if you're flying with a friend, you might want to each use a different one of the frequencies to either side of the wifi 2.4Ghz.\
\
Running DJI Go:\
\
Running Newer Versions of DJI Go (after 4.1.3, stock or modded): If you are running a newer version of DJI Go, always click "Ignore" for database updates to minimize NFZ alerts.\
\
First Run of DJI Go 4.1.3 (stock or modded) or DJI Go Boost: If you are trying to avoid (with one of my DJI Go 4.1.3 APKs, including DJI Go Boost) or minimize (with any other DJI Go 4.1.3 APK) No Fly Zone alerts, you will want to do the following: Connect your Android device to your controller and take it out of airplane mode. Start up your Mavic. Start up the controller and let DJI Go open automatically (if you get the choose app message, select the correct app and select "Just Once"). When you get to the main screen (looking out of the Mavic's camera), go immediately to General Settings and uncheck "GEO System". If you don't do this, the app will download an updated NFZ.\
\
Running DJI Go Boost: If you are using my DJI Go Boost app, follow the step above for the first run to disable NFZ updates. Also make sure you have copied the “.DJI.configs” file to the “Boost/files” folder (see instructions above). Then, for each flight, do the following to fly your Mavic. At startup of the controller, you will get a pop-up asking you to choose which app to start, select "DJI Go Boost" and select to run "Just Once" if you sometimes will want to fly without Boost (on those occasions, you would select your primary Go App and “Just Once”). If you are always going to fly in Boost, then you can select Boost and select to run “Always.” Either way, let the Boost App start up and get to the status screen. Once you can see out the camera of the Mavic from the boost App, the controller and Mavic are running in Boost. At that point, you can exit the app and manually start the newer version of DJI Go that you installed (modded or stock). Boost will persist until the next time you shut off the Mavic and RC.\
\
IMPORTANT: You will not have Boost if any other version of DJI Go loads first, or if you allow DJI Goggles to connect first. The start up sequence is important. To Get Boost:\


> 1\) Start the Mavic\
> 2\) Start the Controller\
> 3\) DJI Go Boost App must then start automatically (immediately or by selecting and then clicking “Just Once”)\
>

\
If you do not get the opportunity to select the Boost App because another version of Go automatically loads first, you will need to go that App in settings and select for it to no longer be the default app.\
\
Note for iOS users: I do not know how to mod or run side-by-side versions of DJI Go on iOS, as I do not use that platform. If someone wants to work through the process, let me know and I would be glad to include instructions here or a link to instructions elsewhere. Here are perhaps useful starting links for [rolling back the DJI Go version in iOS](https://dji.retroroms.info/howto/iosrollback) and for running [FCC Boost in iOS](https://dji.retroroms.info/howto/dji_configs).\
\
Note about Live Streaming to Facebook: If livestreaming isn't working after installing your modded DJI Go Apps, this is because Facebook doesn't recognize the new version of the app as the one you previously authorized. In Facebook Settings, remove DJI Go as an authorized app and then reauthorize with the new Go App.\
\
Going Back to Stock:\
\
If you need to return your Mavic to stock, use Dumldore or a current version of DJI Assistant to flash the newest stock firmware. You will additionally want to remove root. You can do so by [downloading](https://drive.google.com/open?id=1-AhQBuwe4jzDT-WE-ecHIutHDfMoUeUp) my “UndoRoot.bat” file and placing it in the “c:\Mavic\ADB” directory. Then, open a Command Prompt with administrative privileges (in start menu, type "cmd", right click on "Command Prompt" and select "Run as an Administrator"). Type "CD C:\Mavic\adb" to get to the ADB directory. Then type “UndoRoot”. Alternatively, you can run the batch file commands manually by entering each of the following in order (excluding italicized explanations):\


> adb shell _starts the adb shell so we can work inside the Mavic_\
> mount -o remount,rw /vendor _makes the vendor directory read and writable_\
> rm /vendor/bin/\* _removes the vendor directory, thus removing root_\
> Reboot _reboots Mavic_

Conclusion:\
\
PLEASE, PLEASE comment or PM me with any suggestions as to how I can improve this walkthrough. NOW GO FLY!!!!!!
