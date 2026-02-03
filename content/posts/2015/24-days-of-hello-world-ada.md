---
title: "24 Days of Hello World   Ada"
date: "2015-12-19"
cover:
    image: "/images/2015/network-782707_1280.png"
    alt: "24 Days of Hello World"
    relative: false
---

Today I’ll present the language named in honor of Ada Lovelace, Ada. This is a structured, statically typed, imperative language. It is object-oriented, and high-level, which is extended from [Pascal](http://leiflarsen.org/2015/24-days-of-hello-world-pascal), amongst others. By using the compiler to find errors it improves code safety and maintainability.

The language have built-in support for strong typing, explicit concurrency, synchronous message passing, design-by-contract, and some more features. Ada is an international standard, defined by ISO.

**History**

The proposal of Ada was made after the US Department of Defense (DoD) though there were to many programming languages for embedded systems. A group started the work to find (or create) a language suitable for requirements of the department. After the creation of Ada the number of programming languages used for these kinds of projects fell from 450 in 1983, to 37 in 1996. The standard reference was released in December 10, 1980, and named MIL-STD-1815, in honor of Ada Lovelace’s birthdate.

During its early days the programming community showed a great interest in Ada, and people predicted that it may become a huge language within general purpose applications as well. By 1991 DoD required the use of Ada in all software, but this requirement were removed in 1997.

Since the early days, the compilers struggled with performance, but over the years it improved. Some features still made it difficult to use all of Ada’s abilities, specially the tasking model, which was different from what programmers were used to.

**Typical uses**

Ada is used in a wide variety of industries, and what seems to be the common nominator is that it seems to be used a lot in systems for communication. Because of its safety features it seems like a good language to use, when bugs may be extremely critical. To name a few of the industries, you have air traffic management systems, commercial aviation, communication and navigational satellites and receivers, medical industry and military applications.

For a more complete list, and more specific examples, I suggest you visit [Ada Project Summary](http://www.seas.gwu.edu/~mfeldman/ada-project-summary.html).

**Example Hello World**

The first thing you want to do is to install a compiler. Download [GNAT](http://libre.adacore.com/download/). You’ll want to select the “Free software or academic development” (unless you actually is going to use it commercially), and then click the “Build your download package”. Next you want to select your platform, I chose “x86 Windows (32 bits)” and the default “GNAT GPL 2015”. Next you need to add “GNAT Ada GPL 2015” to the package, by selecting it from the list. Select the zip format (unless you are on another system than Windows) and click “Download selected files”. When the files have downloaded, you should unzip them to a folder which is easily accessible.

Create a file called “HelloWorld.ada” and enter the following into it:

```language-clike
with Ada.Text_IO; 
use Ada.Text_IO; 

procedure HelloWorld 
   is begin Put_Line ("Hello, World!"); 
end HelloWorld;
```

Next you need to run a command prompt and run the following to compiler and run the application:

`gnatmake HelloWorld.adb HelloWorld`

If everything was done properly, you should be able to see “Hello, World!” in the console window.

That is all for today, make sure you come back tomorrow, as we get closer to the finish!
