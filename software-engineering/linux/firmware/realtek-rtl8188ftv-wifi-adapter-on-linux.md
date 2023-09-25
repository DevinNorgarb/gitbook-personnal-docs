---
description: >-
  How to install the necessary firmware to use the Realtek RTL8188FTV wifi
  adapter/dongle on Ubuntu.
---

# Realtek RTL8188FTV WiFi Adapter on Linux

***



This guide provides a detailed, step-by-step walkthrough for setting up the Realtek RTL8188FTV WiFi adapter on a Linux system. This has been tested on Ubuntu 22.04.1 LTS arm64 running Linux kernel 5.15.0-58-generic. While the guide is tailored for this specific setup, it may be applicable to other distros and versions with slight modifications.

### Prerequisites

* Plug in the Realtek RTL8188FTV WiFi adapter into a USB port on your Linux PC.
* Ensure your Linux PC is powered on.

### Step 1: Open Terminal

1. Click on the Grid button (represented by 9 dots) to open the Application Drawer.
2. Search for "Terminal" and click to open it.
3. A Terminal window will appear, which has a black background and white text, similar to the Windows Command Prompt.

### Step 2: Verify WiFi Adapter Detection

Check if your system has recognized the WiFi adapter:

1.  In Terminal, execute:

    ```bash
    ip a
    ```

    Look for a network interface with a prefix "wlx".
2.  Alternatively, you can run:

    ```bash
    lsusb
    ```

    Look for an entry that says "Realtek Semiconductor Corp. RTL8188FTV 802.11b/g/n 1T1R 2.4G WLAN Adapter".

> **Tip**: If you don't see the adapter listed, make sure it's properly plugged in and try running the commands again.

### Step 3: Update System Packages

Keep your system up-to-date with the latest packages:

1.  Update package lists:

    ```bash
    sudo apt update
    ```
2.  Upgrade installed packages:

    ```bash
    sudo apt upgrade
    ```
3.  Install net-tools:

    ```bash
    sudo apt install net-tools
    ```

### Step 4: Add Kelebek Repository

Kelebek is a contributor who has developed the necessary driver for this adapter:

1.  Add the repository:

    ```bash
    sudo add-apt-repository ppa:kelebek333/kablosuz
    ```
2.  Update package lists again:

    ```bash
    sudo apt-get update
    ```

### Step 5: Install WiFi Adapter Driver

1.  Install the driver:

    ```bash
    sudo apt-get install rtl8188fu-dkms
    ```
2.  (Optional) To remove the driver:

    ```bash
    sudo apt purge rtl8188fu-dkms
    ```

> For more details, you can visit the GitHub repository: [Kelebek GitHub](https://github.com/kelebek333/rtl8188fu)

### Step 6: Change Driver Configuration

Execute the following commands to configure the driver:

```bash
echo "options rtl8188fu rtw_ips_mode=0" | sudo tee /etc/modprobe.d/rtl8188fu.conf
sudo modprobe -rv rtl8188fu && sudo modprobe -v rtl8188fu
```

### Step 7: Restart Your Linux PC

1. Click on the Power menu located at the top right corner of the screen.
2. Choose "Restart" from the dropdown menu.

### Step 8: Connect to Wi-Fi

1. Open the Application Drawer by clicking on the Grid button.
2. Go to Settings > Wi-Fi.
3. Turn ON Wi-Fi, if it's off.
4. Select your desired network and enter the Wi-Fi password to connect.

***

Congratulations! You should now be able to use your Realtek RTL8188FTV WiFi adapter on your Linux PC. If you encounter any issues, feel free to ask questions or consult the GitHub repository for more information.
