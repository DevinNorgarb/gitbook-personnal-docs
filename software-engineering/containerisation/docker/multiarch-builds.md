# MultiArch Builds

\
![Devin Norgarb](https://chat.openai.com/\_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxYYwN6bMkVgnW1hgjVNccFzedHnhA0HZ4ohGHp7EQ%3Ds96-c\&w=64\&q=75)

`docker: Error response from daemon: image with reference multiarch/qemu-user-static was found but does not match the specified platform: wanted linux/arm64, actual: linux/amd64.`

This error message suggests that you are trying to run a Docker image on a platform that is different from the one for which the image was built. The image you are trying to run is built for the `linux/arm64` platform, but the platform of your host system is `linux/amd64`.

To resolve this issue, you can use a tool called `qemu-user-static` to run the `linux/arm64` binary on your `linux/amd64` system. The `qemu-user-static` tool allows you to run binaries for foreign architectures on your host system by providing a lightweight emulation layer.

To use `qemu-user-static`, you need to follow these steps:

1. Install the `qemu-user-static` package on your host system. On Ubuntu or Debian, you can do this with the following command:

```sql
sudo apt-get install qemu-user-static
```

2. Download the `multiarch/qemu-user-static` Docker image for the `linux/arm64` platform:

```arduino
docker pull multiarch/qemu-user-static:register
```

3. Register the `qemu-user-static` binary as the default interpreter for the `linux/arm64` platform:

```arduino
docker run --rm --privileged multiarch/qemu-user-static:register --reset
```

4. Try running your Docker image again:

```arduino
docker run my_image
```

This time, Docker should use the `qemu-user-static` binary to run the `linux/arm64` binary in your Docker image on your `linux/amd64` host system.

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e)![Devin Norgarb](https://chat.openai.com/\_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxYYwN6bMkVgnW1hgjVNccFzedHnhA0HZ4ohGHp7EQ%3Ds96-c\&w=64\&q=75)

`I am using macos`

I apologize for the confusion. `binfmt-support` is a Linux package that provides support for registering binary formats with the kernel, and it's not available on macOS.

On macOS, you can use a tool called `docker-binfmt` to register support for foreign architectures. Here are the steps you can follow:

1. Install `docker-binfmt` by running the following command in a terminal:

```
brew install docker-binfmt
```

2. Enable `docker-binfmt` by running the following command:

```bash
bsudo docker run --rm --privileged docker/binfmt:a7996909642ee92942dcd6cff44b9b95f08dad64
```

This command will enable support for various foreign architectures, including `linux/arm64`.

3. Try running your Docker image again:

```arduino
docker run my_image
```

This time, Docker should be able to run the `linux/arm64` binary in your Docker image on your macOS host system.

I hope this helps!
