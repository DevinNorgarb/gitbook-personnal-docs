# pyenv

`curl https://pyenv.run | bash`

Once installed, add this to your `.bashrc` file&#x20;

`export PYENV_ROOT="$HOME/.pyenv" [[ -d $PYENV_ROOT/bin ]]` \
`&& export  PATH="$PYENV_ROOT/bin:$PATH" eval "$(pyenv init -)"`
