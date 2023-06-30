---
description: https://github.com/Konloch/bytecode-viewer/releases
---

# ByteCodeViewer

## Bytecode Viewer <a href="#firstheading" id="firstheading"></a>

[<mark style="color:yellow;">Download here</mark>](https://github.com/Konloch/bytecode-viewer/releases)

{% embed url="https://github.com/Konloch/bytecode-viewer/releases" %}

| A Java Reverse Engineering & Debugging Suite |                                                                 |
| -------------------------------------------- | --------------------------------------------------------------- |
| Author                                       | Kalen ([Konloch](http://konloch.me/)) Kinloch                   |
| Homepage                                     | [BytecodeViewer.com](https://bytecodeviewer.com/)               |
| Download                                     | [Releases](https://github.com/konloch/bytecode-viewer/releases) |
| Source Code                                  | [Github](https://github.com/konloch/bytecode-viewer)            |
| Issues                                       | [Issues](https://github.com/konloch/bytecode-viewer/issues)     |

I’ll break this post into two sections, the first is the functional part of BCV, the interface, settings, tools, features etc. The second part will contain how to utilize the BCV API/Plugin System to develop your own plugins (if you do decide to create a plugin, please decide to open source it so I can add it to [https://github.com/Konloch/bytecode-viewer/tree/master/plugins](https://github.com/Konloch/bytecode-viewer/tree/master/plugins)).

\


### Contents

&#x20;\[[hide](https://wiki.bytecode.club/Bytecode\_Viewer)]&#x20;

* [1Functionality](https://wiki.bytecode.club/Bytecode\_Viewer#Functionality)
  * [1.1File](https://wiki.bytecode.club/Bytecode\_Viewer#File)
  * [1.2View Panes](https://wiki.bytecode.club/Bytecode\_Viewer#View\_Panes)
  * [1.3Settings](https://wiki.bytecode.club/Bytecode\_Viewer#Settings)
  * [1.4Plugins](https://wiki.bytecode.club/Bytecode\_Viewer#Plugins)
* [2API](https://wiki.bytecode.club/Bytecode\_Viewer#API)
  * [2.1Exceptions](https://wiki.bytecode.club/Bytecode\_Viewer#Exceptions)
  * [2.2Plugin Console](https://wiki.bytecode.club/Bytecode\_Viewer#Plugin\_Console)
  * [2.3Bytecode Hooks](https://wiki.bytecode.club/Bytecode\_Viewer#Bytecode\_Hooks)

### Functionality

Bytecode Viewer (BCV) was designed to be extremely user and beginner friendly, because of this almost everything is accessible through an interface, settings, tools, etc. This means if you give BCV a try you should get the gist of it can do, however for those who don't want to run BCV until they're convinced they should use it, below is a complete list of features BCV has, and what they do.

**File**

* Add (Ctrl + O) – If you add a jar/zip BCV will unzip it, if you add an APK or DEX file, BCV will run dex2jar then run the jar input process.
* New Workspace (Ctrl + N) – It clears the opened jars/resources.
* Run (Ctrl + R) – Runs the classfiles you’ve loaded into BCV in a secure sandboxed JVM instance that you can fully debug.
* Compile (Ctrl + T) – Tries to compile all of the editable panes you’ve selected, if it’s Java it’ll compile with Ranino. Krakatau and \*Smali use their own assemblers.
* Save As Jar – Export the class files and loaded resources as a runnable Jar file.
* Save As DEX – Run jar2dex and export the Classfiles as DEX.
* Save Files As – Save all the Classfiles and resources as a zip.
* Save Java File As – Save the currently opened decompiled Classfile.
* Save Java Files As – Save all of the decompiled Classfiles as a zip.
* Recent Files – Last 25 files/directories you’ve opened with BCV.
* About – A small information window about BCV.
* Exit – Closes BCV.

**View Panes**

* Editable – Defines if that viewing pane will be editable.
* None – Nothing will be displayed.
* Procyon – Decompiles with Procyon decompiler.
* CFR – Decompilers with CFR decompiler.
* FernFlower – Decompiles with FernFlower decompiler.
* JD-GUI – Decompiles with JD-GUI decompiler.
* Krakatau Java – Decompiles with Krakatau decompiler.
* Krakatau Bytecode – Disassembles with Krakatau disassembler.
* Smali – Disassembles with Smali.
* Bytecode – Decompiles the Bytecode via CFIDE. Not Editable.
* Hexcode – Shows the classfile in a hex viewer. Not Editable.

**Settings**

* Compile On Save – If selected whenever you do one of the File>Save \* functions it will try to compile before it saves.
* Compile On Refresh – If selected whenever you press refresh it compile before it reloads the resource/class.
* Update Check – If selected it queries [https://github.com/Konloch/bytecode-viewer](https://github.com/Konloch/bytecode-viewer) to ensure you’ve got the latest version.
* Refresh On View Change – If selected whenever you change an option in the View Panes it will refresh the currently opened resources/class.
* Decode APK Resources – If selected whenever you add an APK, it will first run APKTool.jar to decode the resources.
* Set Python 2.7 Executable – Set the Python 2.7 executable if you want Krakatau decompiler/disassembler/assembler to work.
* Set JRE RT Library – Set the JRE RT library for Krakatau decompiler.

**Plugins**

* Open Plugin – Open a .java plugin created for BCV.
* Recent Plugins – Last 25 plugins you’ve opened with BCV.
* Code Sequence Diagram – Builds a crude code sequence diagram for the classfile that’s currently opened.
* Malicious Code Scanner – Allows you to define what to search for, and outputs what it found.
* Show Main Methods – Detects and outputs all of the public static void main(String\[]) functions.
* Show All Strings – Grabs then outputs all of the strings in every classfile.
* Replace Strings – Allows you to do a simple permanent .replace on the classfile strings, very useful for URL swapping.
* Allatori String Decrypter – Decrypts the Allatori obfuscated/encrypted strings.
* ZKM String Decrypter – Decrypts the ZKM obfuscated/encrypted strings.
* ZStringArray String Decrypter – Decrypts the ZStringArray obfuscated/encrypted strings.

### API

The API is designed for people who wish to utilize the plugin system for BCV, or use the hook system that File>Run (EZ-Injection) provides. The external plugin system is very simple, it takes a .java file that extends the abstract Plugin class. Compiles that class then loads it into memory and invokes the execute(ArrayList\<ClassNode>).

Before you start making a plugin, take a look at the Java docs for the API then some example source code.

The principal behind the plugin system is very simple, once the plugin is loaded into memory it calls on the execute function with a ClassNode ArrayList. From here we can completely handle this using ASM. However since we still want to interact with BCV itself or interact with the user I’ve added some hooks and small classes to make this easy for the plugin authors.

**Exceptions**

All exceptions that are unexpected and require the user to report them should be handled like this:

```
try {
   ...
} catch(Exception e) {
    new the.bytecode.club.bytecodeviewer.api.ExceptionUI(e, "author@email.com");
}
```

**Plugin Console**

All messages to the user that aren’t alerts should use the Plugin Console an example of this is:

```
 PluginConsole gui = new PluginConsole("Skeleton");
 gui.setVisible(true);
 gui.appendText("executed skeleton");
```

Those two things are what you really need for most plugins, if you need anything else take a look at [https://the.bytecode.club/docs/bytecode-viewer/the/bytecode/club/bytecodeviewer/api/BytecodeViewer.html](https://the.bytecode.club/docs/bytecode-viewer/the/bytecode/club/bytecodeviewer/api/BytecodeViewer.html).

**Bytecode Hooks**

BCV has a built in tool to assist in hooks, this section will be expanded later.

[Categories](https://wiki.bytecode.club/Special:Categories):&#x20;

* [Pages with syntax highlighting errors](https://wiki.bytecode.club/index.php?title=Category:Pages\_with\_syntax\_highlighting\_errors\&action=edit\&redlink=1)
* [Tools](https://wiki.bytecode.club/Category:Tools)
* [Java](https://wiki.bytecode.club/Category:Java)
* [Android](https://wiki.bytecode.club/Category:Android)
* [Reverse Engineering](https://wiki.bytecode.club/Category:Reverse\_Engineering)
