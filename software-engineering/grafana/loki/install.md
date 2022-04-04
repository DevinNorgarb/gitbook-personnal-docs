# Install

```
Loki Docker Driver
Install docker plugin

docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
Edit docker daemon config

sudo nano /etc/docker/daemon.json

```

```
[sources.docker-local]
  type = "docker_logs"
  docker_host = "/var/run/docker.sock"
  exclude_containers = []
 
  # Identify zero-width space as first line of a multiline block.
  multiline.condition_pattern = '^\x{200B}' # required
  multiline.mode = "halt_before" # required
  multiline.start_pattern = '^\x{200B}' # required
  multiline.timeout_ms = 1000 # required, milliseconds
 
[sinks.loki]
  # General
  type = "loki" # required
  inputs = ["docker*"] # required
  endpoint = "http://loki:3100" # required
  
  # Auth
  auth.strategy = "bearer" # required
  auth.token = "none" # required
  
  # Encoding
  encoding.codec = "json" # required
  
  # Healthcheck
  healthcheck.enabled = false # optional, default
  
  # Loki Labels
  labels.forwarder = 'vector'
  labels.host = ''
  labels.container_name = ''
  labels.compose_service = ''
  labels.compose_project = ''
  labels.source = ''
  labels.category = 'dockerlogs'

```
