---
title: Serial Input Basics (Arduino Forum)
description: Imported notes from Robin2's classic Arduino forum tutorial on non-blocking serial reception
---

# Serial Input Basics (Arduino Forum)

## Source

- Type: webpage
- Origin: https://forum.arduino.cc/t/serial-input-basics/278284/20 (original thread; tutorial in posts #1–#2)
- Imported: 2026-06-10
- Images: none in the original tutorial posts (text and code only)

Robin2 noted in post #1 (May 2016) that a **shorter updated version** exists: [Serial Input Basics — updated](https://forum.arduino.cc/t/serial-input-basics-updated/382007). This repo already ingests that revision under [Serial](../../robotics/communication-protocols/serial.md) (additional examples for numbers, combined receive/parse, and binary data).

## Content

### Introduction

Newcomers often struggle with receiving serial data on Arduino—especially when more than a single character is needed. Robin2's approach covers most cases with three situations:

- **A** — only a single character is required
- **B** — simple manual input from the Serial Monitor
- **C** — everything else (start/end markers, parsing, binary, etc.)

The tutorial spans posts #1 and #2 on the original thread.

### Serial data is slow by Arduino standards

Data arrives into the input buffer at the baud rate. At 9600 baud, about 960 characters per second (~1 ms between characters). At 115200 baud, ~86 µs between characters (~1376 instructions). The examples read **at most one character per call** and never block waiting for data that has not arrived yet.

### Example 1 — Receiving single characters

```cpp
char receivedChar;
boolean newData = false;

void setup() {
  Serial.begin(9600);
  Serial.println("<Arduino is ready>");
}

void loop() {
  recvOneChar();
  showNewData();
}

void recvOneChar() {
  if (Serial.available() > 0) {
    receivedChar = Serial.read();
    newData = true;
  }
}

void showNewData() {
  if (newData == true) {
    Serial.print("This just in ... ");
    Serial.println(receivedChar);
    newData = false;
  }
}
```

Receive logic lives in `recvOneChar()` so it can drop into other sketches; display logic stays in `showNewData()`.

### Example 2 — Several characters from the Serial Monitor

Set the Serial Monitor line ending to **Newline** so `\n` terminates each message.

```cpp
const byte numChars = 32;
char receivedChars[numChars];
boolean newData = false;

void setup() {
  Serial.begin(9600);
  Serial.println("<Arduino is ready>");
}

void loop() {
  recvWithEndMarker();
  showNewData();
}

void recvWithEndMarker() {
  static byte ndx = 0;
  char endMarker = '\n';
  char rc;

  while (Serial.available() > 0 && newData == false) {
    rc = Serial.read();

    if (rc != endMarker) {
      receivedChars[ndx] = rc;
      ndx++;
      if (ndx >= numChars) {
        ndx = numChars - 1;
      }
    } else {
      receivedChars[ndx] = '\0';
      ndx = 0;
      newData = true;
    }
  }
}

void showNewData() {
  if (newData == true) {
    Serial.print("This just in ... ");
    Serial.println(receivedChars);
    newData = false;
  }
}
```

Each call to `recvWithEndMarker()` reads at most one character; `loop()` must run frequently.

### Example 3 — Start and end markers

Without a start marker, stray bytes before the payload corrupt the message (e.g. sending `asdfg>zxcvb` then `qwert>` yields `zxcvbqwert`). Use `<` and `>` as start/end markers.

```cpp
const byte numChars = 32;
char receivedChars[numChars];
boolean newData = false;

void setup() {
  Serial.begin(9600);
  Serial.println("<Arduino is ready>");
}

void loop() {
  recvWithStartEndMarkers();
  showNewData();
}

void recvWithStartEndMarkers() {
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char startMarker = '<';
  char endMarker = '>';
  char rc;

  while (Serial.available() > 0 && newData == false) {
    rc = Serial.read();

    if (recvInProgress == true) {
      if (rc != endMarker) {
        receivedChars[ndx] = rc;
        ndx++;
        if (ndx >= numChars) {
          ndx = numChars - 1;
        }
      } else {
        receivedChars[ndx] = '\0';
        recvInProgress = false;
        ndx = 0;
        newData = true;
      }
    } else if (rc == startMarker) {
      recvInProgress = true;
    }
  }
}

void showNewData() {
  if (newData == true) {
    Serial.print("This just in ... ");
    Serial.println(receivedChars);
    newData = false;
  }
}
```

Sending `<asdfg>qwerty` ignores everything except `asdfg`. The `recvInProgress` flag separates junk before `<` from valid payload bytes.

### Binary data

For binary instead of ASCII text, use `byte receivedChars[numChars]` and `byte rc`, and print with `Serial.println((char*)receivedChars)` if reusing `showNewData()`.

### Parsing with strtok

After a full message is in `receivedChars`, split on commas with `strtok()`, then `atoi()` / `atof()` for numeric fields. Example payload: `"This is a test, 1234, 45.3"`.

```cpp
char receivedChars[] = "This is a test, 1234, 45.3";

char messageFromPC[32] = {0};
int integerFromPC = 0;
float floatFromPC = 0.0;

void parseData() {
  char *strtokIndx;

  strtokIndx = strtok(receivedChars, ",");
  strcpy(messageFromPC, strtokIndx);

  strtokIndx = strtok(NULL, ",");
  integerFromPC = atoi(strtokIndx);

  strtokIndx = strtok(NULL, ",");
  floatFromPC = atof(strtokIndx);
}
```

**Caveat:** `strtok()` mutates the buffer and is single-pass; see thread replies #39 and #72 for reusable patterns.

### Functions deliberately not used

The examples avoid blocking helpers: `Serial.parseInt()`, `Serial.parseFloat()`, `Serial.readBytes()`, `Serial.readBytesUntil()`. Non-blocking one-byte reads keep `loop()` free for other work.

### serialEvent()

Robin2 does not recommend `serialEvent()`; it behaves like calling a handler at the end of every `loop()` when data is available. Handle serial when your sketch is ready instead.

### Clearing the input buffer

`Serial.flush()` waits for **outgoing** data to finish—it does **not** empty the input buffer.

```cpp
void clearInputBuffer() {
  while (Serial.available() > 0) {
    Serial.read();
  }
}
```

Call this (or inline the loop) wherever you need a clean RX buffer.

### Thread FAQ — post #20: multiple values with markers

**Question:** Can `<1><2><3>` over serial be stored as `x=1`, `y=2`, `z=3` for PLC-style pin control?

**Robin2's answer:** Possible, but awkward—each `<` starts a new framed message. Prefer a **single frame** with comma-separated values: `<1,2,3>`, which matches the start/end marker parser above. Parse the interior string after reception (e.g. with `strtok` or `sscanf`).

## Key Takeaways

- Read serial **one byte per loop iteration**; never block waiting for a full message.
- Use newline termination for human Serial Monitor input; use `<`/`>` (or similar) when the sender cannot synchronize with the Arduino.
- Prefer `<1,2,3>` over `<1><2><3>` when sending multiple numeric fields in one instruction.
- Avoid blocking `Serial.parse*` / `readBytes*` if the sketch must do other work while data trickles in.
- For the expanded 2016 tutorial (more number-parsing examples), use [Serial](../../robotics/communication-protocols/serial.md) in this repo.
