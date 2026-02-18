# Pi-hole

One-step automated install:

```bash
curl -sSL https://install.pi-hole.net | bash
```

### One-Step Automated Install[¶](https://docs.pi-hole.net/main/basic-install/#one-step-automated-install) <a href="#one-step-automated-install" id="one-step-automated-install"></a>

Those who want to get started quickly and conveniently may install Pi-hole using the following command:

```
curl -sSL https://install.pi-hole.net | bash
```

Info

[Piping to `bash` is a controversial topic](https://pi-hole.net/2016/07/25/curling-and-piping-to-bash/), as it prevents you from [reading code that is about to run](https://github.com/pi-hole/pi-hole/blob/master/automated%20install/basic-install.sh) on your system.

If you would prefer to review the code before installation, we provide these alternative installation methods.

#### Alternative 1: Clone our repository and run[¶](https://docs.pi-hole.net/main/basic-install/#alternative-1-clone-our-repository-and-run) <a href="#alternative-1-clone-our-repository-and-run" id="alternative-1-clone-our-repository-and-run"></a>

```
git clone --depth 1 https://github.com/pi-hole/pi-hole.git Pi-hole
cd "Pi-hole/automated install/"
sudo bash basic-install.sh
```

#### Alternative 2: Manually download the installer and run[¶](https://docs.pi-hole.net/main/basic-install/#alternative-2-manually-download-the-installer-and-run) <a href="#alternative-2-manually-download-the-installer-and-run" id="alternative-2-manually-download-the-installer-and-run"></a>

```
wget -O basic-install.sh https://install.pi-hole.net
sudo bash basic-install.sh
```

#### Alternative 3: Use Docker to deploy Pi-hole[¶](https://docs.pi-hole.net/main/basic-install/#alternative-3-use-docker-to-deploy-pi-hole) <a href="#alternative-3-use-docker-to-deploy-pi-hole" id="alternative-3-use-docker-to-deploy-pi-hole"></a>

Please refer to the [Pi-hole docker repo](https://github.com/pi-hole/docker-pi-hole) to use the Official Docker Images.
