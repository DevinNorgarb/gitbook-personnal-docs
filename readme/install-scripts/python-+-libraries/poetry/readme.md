# README

## Introduction

Poetry is a tool for **dependency management** and **packaging** in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Poetry offers a lockfile to ensure repeatable installs, and can build your project for distribution.

### System requirements

Poetry requires **Python 3.8+**. It is multi-platform and the goal is to make it work equally well on Linux, macOS and Windows.

### Installation

Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system. In no case should it be installed in the environment of the project that is to be managed by Poetry. This ensures that Poetry’s own dependencies will not be accidentally upgraded or uninstalled. (Each of the following installation methods ensures that Poetry is installed into an isolated environment.)If you are viewing documentation for the development branch, you may wish to install a preview or development version of Poetry. See the **advanced** installation instructions to use a preview or alternate version of Poetry.[With pipx](https://python-poetry.org/docs/#installing-with-pipx)[With the official installer](https://python-poetry.org/docs/#installing-with-the-official-installer)[Manually (advanced)](https://python-poetry.org/docs/#installing-manually)[CI recommendations](https://python-poetry.org/docs/#ci-recommendations)

We provide a custom installer that will install Poetry in a new virtual environment and allows Poetry to manage its own environment.

1.  **Install Poetry**

    The installer script is available directly at [install.python-poetry.org](https://install.python-poetry.org/), and is developed in [its own repository](https://github.com/python-poetry/install.python-poetry.org). The script can be executed directly (i.e. ‘curl python’) or downloaded and then executed from disk (e.g. in a CI environment).

    The `install-poetry.py` installer has been deprecated and removed from the Poetry repository. Please migrate from the in-tree version to the standalone version described above.

    **Linux, macOS, Windows (WSL)**

    ```bash
    curl -sSL https://install.python-poetry.org | python3 -
    ```

    Note: On some systems, `python` may still refer to Python 2 instead of Python 3. We always suggest the `python3` binary to avoid ambiguity.

    **Windows (Powershell)**

    ```powershell
    (Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
    ```

    If you have installed Python through the Microsoft Store, replace `py` with `python` in the command above.
2.  **Install Poetry (advanced)**

    By default, Poetry is installed into a platform and user-specific directory:

    * `~/Library/Application Support/pypoetry` on MacOS.
    * `~/.local/share/pypoetry` on Linux/Unix.
    * `%APPDATA%\pypoetry` on Windows.

    If you wish to change this, you may define the `$POETRY_HOME` environment variable:

    ```bash
    curl -sSL https://install.python-poetry.org | POETRY_HOME=/etc/poetry python3 -
    ```

    If you want to install prerelease versions, you can do so by passing the `--preview` option to the installation script or by using the `$POETRY_PREVIEW` environment variable:

    ```bash
    curl -sSL https://install.python-poetry.org | python3 - --preview
    curl -sSL https://install.python-poetry.org | POETRY_PREVIEW=1 python3 -
    ```

    Similarly, if you want to install a specific version, you can use `--version` option or the `$POETRY_VERSION` environment variable:

    ```bash
    curl -sSL https://install.python-poetry.org | python3 - --version 1.2.0
    curl -sSL https://install.python-poetry.org | POETRY_VERSION=1.2.0 python3 -
    ```

    You can also install Poetry from a `git` repository by using the `--git` option:

    ```bash
    curl -sSL https://install.python-poetry.org | python3 - --git https://github.com/python-poetry/poetry.git@master
    ```
3.  **Add Poetry to your PATH**

    The installer creates a `poetry` wrapper in a well-known, platform-specific directory:

    * `$HOME/.local/bin` on Unix.
    * `%APPDATA%\Python\Scripts` on Windows.
    * `$POETRY_HOME/bin` if `$POETRY_HOME` is set.

    If this directory is not present in your `$PATH`, you can add it in order to invoke Poetry as `poetry`.

    Alternatively, the full path to the `poetry` binary can always be used:

    * `~/Library/Application Support/pypoetry/venv/bin/poetry` on MacOS.
    * `~/.local/share/pypoetry/venv/bin/poetry` on Linux/Unix.
    * `%APPDATA%\pypoetry\venv\Scripts\poetry` on Windows.
    * `$POETRY_HOME/venv/bin/poetry` if `$POETRY_HOME` is set.
4.  **Use Poetry**

    Once Poetry is installed and in your `$PATH`, you can execute the following:

    ```bash
    poetry --version
    ```

    If you see something like `Poetry (version 1.2.0)`, your install is ready to use!
5.  **Update Poetry**

    Poetry is able to update itself when installed using the official installer.

    Especially on Windows, `self update` may be problematic so that a re-install with the installer should be preferred.

    ```bash
    poetry self update
    ```

    If you want to install pre-release versions, you can use the `--preview` option.

    ```bash
    poetry self update --preview
    ```

    And finally, if you want to install a specific version, you can pass it as an argument to `self update`.

    ```bash
    poetry self update 1.2.0
    ```

    Poetry `1.1` series releases are not able to update in-place to `1.2` or newer series releases. To migrate to newer releases, uninstall using your original install method, and then reinstall using the [methods above](https://python-poetry.org/docs/#installation).
6.  **Uninstall Poetry**

    If you decide Poetry isn’t your thing, you can completely remove it from your system by running the installer again with the `--uninstall` option or by setting the `POETRY_UNINSTALL` environment variable before executing the installer.

    ```bash
    curl -sSL https://install.python-poetry.org | python3 - --uninstall
    curl -sSL https://install.python-poetry.org | POETRY_UNINSTALL=1 python3 -
    ```

    If you installed using the deprecated `get-poetry.py` script, you should remove the path it uses manually, e.g.

    ```bash
    rm -rf "${POETRY_HOME:-~/.poetry}"
    ```

    Also remove \~/.poetry/bin from your `$PATH` in your shell configuration, if it is present.

### Enable tab completion for Bash, Fish, or Zsh

`poetry` supports generating completion scripts for Bash, Fish, and Zsh. See `poetry help completions` for full details, but the gist is as simple as using one of the following:

#### Bash

**Auto-loaded (recommended)**

```bash
poetry completions bash >> ~/.bash_completion
```

**Lazy-loaded**

```bash
poetry completions bash > ${XDG_DATA_HOME:-~/.local/share}/bash-completion/completions/poetry
```

#### Fish

```fish
poetry completions fish > ~/.config/fish/completions/poetry.fish
```

#### Zsh

```zsh
poetry completions zsh > ~/.zfunc/_poetry
```

You must then add the following lines in your `~/.zshrc`, if they do not already exist:

```bash
fpath+=~/.zfunc
autoload -Uz compinit && compinit
```

**Oh My Zsh**

```zsh
mkdir $ZSH_CUSTOM/plugins/poetry
poetry completions zsh > $ZSH_CUSTOM/plugins/poetry/_poetry
```

You must then add `poetry` to your plugins array in `~/.zshrc`:

```
plugins(
	poetry
	...
	)
```

**prezto**

```zsh
poetry completions zsh > ~/.zprezto/modules/completion/external/src/_poetry
```

You may need to restart your shell in order for these changes to take effect.
