---
description: n8n is an awesome tool for building automated workflows
---

# n8n

To use Docker Compose with n8n (a workflow automation tool), you can create a `docker-compose.yml` file to define the services and configurations. Here's a basic example to get you started:

```yaml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - N8N_HOST=0.0.0.0
      - N8N_PATH=/ # Optional, change if you want to serve n8n from a subpath
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=username
      - N8N_BASIC_AUTH_PASSWORD=password
    volumes:
      - /path/to/n8n/data:/root/.n8n
```

This `docker-compose.yml` file defines a service named `n8n` using the official n8n Docker image. It exposes port 5678 on the host machine, sets up some environment variables, and uses a volume to persist data.

Make sure to customize the environment variables and volumes as needed. Replace `/path/to/n8n/data` with the actual path where you want to store n8n data.

To run n8n using Docker Compose, save the above configuration in a file named `docker-compose.yml` and then run:

```bash
docker-compose up -d
```

This will pull the n8n Docker image (if not already downloaded) and start the container in the background. You can access n8n by navigating to `http://localhost:5678` in your web browser.

Remember to change the `N8N_BASIC_AUTH_USER` and `N8N_BASIC_AUTH_PASSWORD` values to secure your n8n instance. Additionally, you can modify other environment variables based on your requirements.
