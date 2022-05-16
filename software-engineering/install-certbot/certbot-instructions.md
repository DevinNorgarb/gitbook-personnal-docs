# Certbot Instructions

default

wildcard

### To use Certbot, you'll need...

comfort with the

...and an\
that is\
with an open

...which is hosted on a\
which you can access via\
with the ability to\
optional if you want a :

1.  SSH into the server

    SSH into the server running your HTTP website as a user with sudo privileges.
2.  Install snapd

    You'll need to install snapd and make sure you follow any instructions to enable classic snap support.

    Follow these instructions on [snapcraft's site to install snapd](https://snapcraft.io/docs/installing-snapd/).
3.  Ensure that your version of snapd is up to date

    Execute the following instructions on the command line on the machine to ensure that you have the latest version of `snapd`.

    ```
    sudo snap install core; sudo snap refresh core
    ```
4.  Remove certbot-auto and any Certbot OS packages

    If you have any Certbot packages installed using an OS package manager like `apt`, `dnf`, or `yum`, you should remove them before installing the Certbot snap to ensure that when you run the command `certbot` the snap is used rather than the installation from your OS package manager. The exact command to do this depends on your OS, but common examples are `sudo apt-get remove certbot`, `sudo dnf remove certbot`, or `sudo yum remove certbot`. If you previously used Certbot through the certbot-auto script, you should also remove its installation by following the instructions here.
5.  Install Certbot

    Run this command on the command line on the machine to install Certbot.

    ```
    sudo snap install --classic certbot
    ```
6.  Prepare the Certbot command

    Execute the following instruction on the command line on the machine to ensure that the `certbot` command can be run.

    ```
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```
7.  Choose how you'd like to run Certbot

    #### Either get and install your certificates...

    Run this command to get a certificate and have Certbot edit your nginx configuration automatically to serve it, turning on HTTPS access in a single step.

    ```
    sudo certbot --nginx
    ```

    #### Or, just get a certificate

    If you're feeling more conservative and would like to make the changes to your nginx configuration by hand, run this command.

    ```
    sudo certbot certonly --nginx
    ```
8.  Test automatic renewal

    The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:

    ```
    sudo certbot renew --dry-run
    ```

    The command to renew certbot is installed in one of the following locations:

    * `/etc/crontab/`
    * `/etc/cron.*/*`
    * `systemctl list-timers`
9.  Confirm that Certbot worked

    To confirm that your site is set up properly, visit `https://yourwebsite.com/` in your browser and look for the lock icon in the URL bar.
10. Check if your DNS provider is supported

    See if your DNS provider is supported by Certbot by checking this list in our documentation.

    #### Not supported?

    If your DNS provider is not supported, pause here: run Certbot with the manual plugin by using these steps from our documentation.

    #### Supported?

    If your DNS provider is supported, continue with the remaining instructions below.
11. SSH into the server

    SSH into the server running your HTTP website as a user with sudo privileges.
12. Install snapd

    You'll need to install snapd and make sure you follow any instructions to enable classic snap support.

    Follow these instructions on [snapcraft's site to install snapd](https://snapcraft.io/docs/installing-snapd/).
13. Ensure that your version of snapd is up to date

    Execute the following instructions on the command line on the machine to ensure that you have the latest version of `snapd`.

    ```
    sudo snap install core; sudo snap refresh core
    ```
14. Remove certbot-auto and any Certbot OS packages

    If you have any Certbot packages installed using an OS package manager like `apt`, `dnf`, or `yum`, you should remove them before installing the Certbot snap to ensure that when you run the command `certbot` the snap is used rather than the installation from your OS package manager. The exact command to do this depends on your OS, but common examples are `sudo apt-get remove certbot`, `sudo dnf remove certbot`, or `sudo yum remove certbot`. If you previously used Certbot through the certbot-auto script, you should also remove its installation by following the instructions here.
15. Install Certbot

    Run this command on the command line on the machine to install Certbot.

    ```
    sudo snap install --classic certbot
    ```
16. Prepare the Certbot command

    Execute the following instruction on the command line on the machine to ensure that the `certbot` command can be run.

    ```
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```
17. Confirm plugin containment level

    Run this command on the command line on the machine to acknowledge that the installed plugin will have the same `classic` containment as the Certbot snap.

    ```
    sudo snap set certbot trust-plugin-with-root=ok
    ```

    If you encounter issues with running Certbot, you may need to follow this step, then the "Install correct DNS plugin" step, again.
18. Install correct DNS plugin

    Run the following command, replacing \<PLUGIN> with the name of your DNS provider.

    ```
    sudo snap install certbot-dns-<PLUGIN>
    ```

    For example, if your DNS provider is Cloudflare, you'd run the following command:

    ```
    sudo snap install certbot-dns-cloudflare
    ```
19. Set up credentials

    You'll need to set up DNS credentials.

    Follow the steps in the "Credentials" section for your DNS provider to access or create the appropriate credential configuration file. Find credentials instructions for your DNS provider by clicking the DNS plugin's name on the Documentation list.
20. Choose how you'd like to run Certbot

    #### Either get and install your certificates...

    Run one of the commands in the "Examples" section of the instructions for your DNS provider, along with the flag `-i nginx`.

    #### Or, just get a certificate

    Run one of the commands in the "Examples" section of the instructions for your DNS provider.
21. Test automatic renewal

    The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:

    ```
    sudo certbot renew --dry-run
    ```

    The command to renew certbot is installed in one of the following locations:

    * `/etc/crontab/`
    * `/etc/cron.*/*`
    * `systemctl list-timers`
22. Confirm that Certbot worked

    To confirm that your site is set up properly, visit `https://yourwebsite.com/` in your browser and look for the lock icon in the URL bar.
