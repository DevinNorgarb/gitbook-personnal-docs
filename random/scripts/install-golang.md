# Install Golang

Download and install Go quickly with the steps described here.

For other content on installing, you might be interested in:

* Managing Go installations -- How to install multiple versions and uninstall.
* [Installing Go from source](../../.gitbook/assets/source) -- How to check out the sources, build them on your own machine, and run them.

### 1. Go download. <a href="#download" id="download"></a>

Click the button below to download the Go installer.

Download Go

Don't see your operating system here? Try one of the other downloads.

### 2. Go install. <a href="#install" id="install"></a>

Select the tab for your computer's operating system below, then follow its installation instructions.

1.  **Remove any previous Go installation** by deleting the /usr/local/go folder (if it exists), then extract the archive you just downloaded into /usr/local, creating a fresh Go tree in /usr/local/go:

    ```
    $ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.14.3.linux-amd64.tar.gz
    ```

    (You may need to run the command as root or through `sudo`).

    **Do not** untar the archive into an existing /usr/local/go tree. This is known to produce broken Go installations.
2.  Add /usr/local/go/bin to the `PATH` environment variable.

    You can do this by adding the following line to your $HOME/.profile or /etc/profile (for a system-wide installation):

    ```
    export PATH=$PATH:/usr/local/go/bin
    ```

    **Note:** Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as `source $HOME/.profile`.
3.  Verify that you've installed Go by opening a command prompt and typing the following command:

    ```
    $ go version
    ```
4. Confirm that the command prints the installed version of Go.

### 3. Go code. <a href="#code" id="code"></a>

You're set up! Visit the Getting Started tutorial to write some simple Go code. It takes about 10 minutes to complete.
