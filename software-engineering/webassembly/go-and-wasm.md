---
title: "Go and WASM"
description: "Notes on Go and WASM."
---

# Go and WASM

Notes on compiling Go programs to WebAssembly and running them outside a browser — especially with Node.js.

## Source

- [Go Wiki: WebAssembly](https://go.dev/wiki/WebAssembly) (canonical; the old GitHub wiki redirects here)
- [Executing WebAssembly with Node.js](https://github.com/golang/go/wiki/WebAssembly#executing-webassembly-with-node-js) (original bookmark)

## Introduction

Go 1.11 added an experimental port to WebAssembly. Go 1.21 added a **WASI** port (`GOOS=wasip1`) for syscall-backed Wasm outside the browser.

WebAssembly (Wasm) is a portable binary instruction format for a stack-based VM — commonly used to run compiled code in browsers and on servers.

## Compile a Go program to Wasm

Set `GOOS=js` and `GOARCH=wasm`:

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

Only **main packages** produce runnable Wasm modules. Library packages build to object files that cannot be executed directly.

For Go 1.23 and earlier, support files lived under `misc/wasm`; from Go 1.24 onward use `$(go env GOROOT)/lib/wasm/`.

## Run in a browser (quick test)

Copy the JS shim and load the module from HTML:

```bash
cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" .
```

```html
<html>
  <head>
    <meta charset="utf-8" />
    <script src="wasm_exec.js"></script>
    <script>
      const go = new Go();
      WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then(
        (result) => {
          go.run(result.instance);
        },
      );
    </script>
  </head>
  <body></body>
</html>
```

Serve `index.html`, `wasm_exec.js`, and `main.wasm` from any static file server. **Use matching Go versions** for the compiler and `wasm_exec.js`.

## Executing WebAssembly with Node.js

Node can run compiled Wasm modules — useful for testing and automation without a browser.

### Add `go_js_wasm_exec` to PATH

```bash
export PATH="$PATH:$(go env GOROOT)/lib/wasm"
GOOS=js GOARCH=wasm go run .
# Hello, WebAssembly!
GOOS=js GOARCH=wasm go test
# PASS
```

`go_js_wasm_exec` is a wrapper that runs Go Wasm binaries under Node. Adding `lib/wasm` to `PATH` lets `go run` and `go test` find it automatically.

### Use `-exec` without changing PATH

```bash
GOOS=js GOARCH=wasm go run -exec="$(go env GOROOT)/lib/wasm/go_js_wasm_exec" .
GOOS=js GOARCH=wasm go test -exec="$(go env GOROOT)/lib/wasm/go_js_wasm_exec"
```

### Run a built binary directly

```bash
GOOS=js GOARCH=wasm go build -o mybin .
$(go env GOROOT)/lib/wasm/go_js_wasm_exec ./mybin
```

## WASI port (Go 1.21+)

For server-side Wasm without the browser JS bridge:

```bash
GOOS=wasip1 GOARCH=wasm go build -o main.wasm
```

See [TinyGo with WebAssembly](https://tinygo.org/docs/guides/webassembly/) for much smaller binaries, and [Shrinking .wasm Code Size](./shrinking-.wasm-code-size.md) for Rust-oriented size tips that also apply conceptually to Go Wasm output.

## Related

- [Shrinking .wasm Code Size](./shrinking-.wasm-code-size.md)
- [WebAssembly section](./README.md)
