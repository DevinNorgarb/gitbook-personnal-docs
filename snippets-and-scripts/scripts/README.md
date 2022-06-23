# Scripts

#### Kill process running on port

`lsof -t -i tcp:1234 | xargs kill`

#### Run a speedtest from the CLI

```
watch "curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -"
```

#### Top Files Sizes &#x20;

```
 du -a / | sort -n -r | head -n 20
```

#### Top Memory Usage

```
ps aux --sort=-%mem | head
```
