# apktool

#### 1. Install Java Development Kit (JDK)

Before you install APKTool, ensure that you have Java Development Kit (JDK) installed. APKTool requires Java to run.

**Linux**:

```bash
bashCopy codesudo apt update
sudo apt install openjdk-11-jdk
```

**macOS**:

```bash
bashCopy codebrew update
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk11
```

**Windows**:

You can download the JDK installer from the official Oracle website or use other distributions like AdoptOpenJDK.

#### 2. Install APKTool

**Linux/macOS**:

```bash
bashCopy code# Download APKTool
wget https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/linux/apktool
wget https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.6.0.jar -O apktool.jar

# Provide execute permissions
chmod +x apktool apktool.jar

# Move apktool to a directory in your PATH (like /usr/local/bin)
sudo mv apktool apktool.jar /usr/local/bin/
```

**Windows**:

1. Download the [Windows wrapper script](https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/windows/apktool.bat) (Right click, Save Link As `apktool.bat`) and place it in the same directory.
2. Download [apktool\_2.x.x.jar](https://bitbucket.org/iBotPeaches/apktool/downloads/) (rename to `apktool.jar`) and place it in the same directory.
3. Add the directory with `apktool.bat` and `apktool.jar` to your PATH.

#### Usage:

Once you've installed APKTool, you can use it as follows:

*   **To decode an APK:**

    ```bash
    bashCopy codeapktool d YourApp.apk -o output_folder
    ```
*   **To build an APK:**

    ```bash
    bashCopy codeapktool b output_folder -o RebuiltApp.apk
    ```
