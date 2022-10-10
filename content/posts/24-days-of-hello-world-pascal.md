---
title: "24 Days of Hello World   Pascal"
date: "2015-12-11"
---

In todays post I look into Pascal. This is a small and efficient language, using structured programming and data structuring it encouraged good programming practices. Unlike most languages in the C family, Pascal allows nested procedure definitions and also declarations inside subroutines. The syntax can then be simple and coherent, and a program is syntactically nearly identical to a single procedure.

**History**

Pascal was designed by Niklaus Wirth, and published in 1970. It was named in honor of the mathematician and philosopher Blaise Pascal, and was largely intended to teach students structured programming. There was however other uses as well. It was the primary high-level language used for development in the Apple Lisa and the Machintosh.

ALGOL 60 was the roots of Pascal, but there were also added concepts, enabling developers to define their own complex datatypes, making it easier to build dynamic and recursive data structures. To make this possible, there is strong typing on all objects, which is standard in many languages today.

**Typical uses**

Today Object Pascal (delphi) is still used for developing some Windows applications, that has the ability to be ported to Mac, iOS and Android. There is also another cross-platform version called Free Pascal (which I use for my example), which is popular amongst Linux users.

**Example Hello World**

For the example of Pascal, you will need a compiler. I chose one from [Free Pascal](http://www.freepascal.org/download.var), a compiler which targets several different platforms. I installed it using default settings, and tested it by opening a command prompt and running the following command:

fpc -v

Which should give you the currently installed version. Now it’s time to create a file called “HelloWorld.pas”. Enter the following into it:

program HelloWorld; begin writeln ('Hello, World!') end.

To compile it, and run it, run the following commands from a command line (inside the folder you stored the file):

fcp HelloWorld.pas HelloWorld.exe

The first command should compile and link the application, and the second command should run it, and print “Hello, World!” to the command prompt.

That’s it for now, check back tomorrow for the next post in 24 Days of Hello World!
