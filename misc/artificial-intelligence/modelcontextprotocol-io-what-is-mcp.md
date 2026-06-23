---
title: "What is the Model Context Protocol (MCP)?"
description: "Notes on What is the Model Context Protocol (MCP)?."
---

# What is the Model Context Protocol (MCP)?

## Source
- Type: webpage
- Origin: https://modelcontextprotocol.io/docs/getting-started/intro
- Imported: 2026-06-18
- Images: 1 (MCP simple diagram saved under `./assets/modelcontextprotocol-io-intro/`)

## Content

> **Documentation index:** Fetch the complete documentation index at [llms.txt](https://modelcontextprotocol.io/llms.txt) to discover all available pages before exploring further.

MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems.

Using MCP, AI applications like Claude or ChatGPT can connect to data sources (e.g. local files, databases), tools (e.g. search engines, calculators) and workflows (e.g. specialized prompts)—enabling them to access key information and perform tasks.

Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems.

![MCP connects AI applications to external data sources, tools, and workflows](./assets/modelcontextprotocol-io-intro/01-mcp-simple-diagram.png)

### What can MCP enable?

- Agents can access your Google Calendar and Notion, acting as a more personalized AI assistant.
- Claude Code can generate an entire web app using a Figma design.
- Enterprise chatbots can connect to multiple databases across an organization, empowering users to analyze data using chat.
- AI models can create 3D designs on Blender and print them out using a 3D printer.

### Why does MCP matter?

Depending on where you sit in the ecosystem, MCP can have a range of benefits.

- **Developers:** MCP reduces development time and complexity when building, or integrating with, an AI application or agent.
- **AI applications or agents:** MCP provides access to an ecosystem of data sources, tools and apps which will enhance capabilities and improve the end-user experience.
- **End-users:** MCP results in more capable AI applications or agents which can access your data and take actions on your behalf when necessary.

### Broad ecosystem support

MCP is an open protocol supported across a wide range of clients and servers. AI assistants like [Claude](https://claude.com/docs/connectors/building) and [ChatGPT](https://developers.openai.com/api/docs/mcp/), development tools like [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers), [Cursor](https://cursor.com/docs/context/mcp), [MCPJam](https://docs.mcpjam.com/getting-started), and many others all support MCP — making it easy to build once and integrate everywhere.

### Start building

| Topic | Description | Link |
| --- | --- | --- |
| Build servers | Create MCP servers to expose your data and tools | [Build servers](https://modelcontextprotocol.io/docs/develop/build-server) |
| Build clients | Develop applications that connect to MCP servers | [Build clients](https://modelcontextprotocol.io/docs/develop/build-client) |
| Build MCP Apps | Build interactive apps that run inside AI clients | [Build MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview) |

### Learn more

| Topic | Description | Link |
| --- | --- | --- |
| Understand concepts | Learn the core concepts and architecture of MCP | [Architecture](https://modelcontextprotocol.io/docs/learn/architecture) |

## Key Takeaways

- MCP is an open standard that connects AI apps to external data, tools, and workflows through a common protocol.
- The USB-C analogy captures the goal: one standardized interface instead of bespoke integrations per system.
- The ecosystem spans assistants (Claude, ChatGPT), dev tools (VS Code, Cursor), and server/client builders documented on modelcontextprotocol.io.
