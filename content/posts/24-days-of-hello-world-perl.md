---
title: "24 Days of Hello World   Perl"
date: "2015-12-04"
---

In the 5th day of 24 days of Hello World I will look into Perl. A language, which has a long history, but where the example itself will be rather short.

Perl is a general-purpose language, designed for text manipulation. It is intended to be easy to use, efficient and complete, in other words practical, as opposed to elegant and minimal. It supports both procedural and object-oriented programming. As a beginner you would probably use procedural more, and object-oriented for third-party modules you may use.

**History**

Perl was developed in 1987 by Larry Wall. The original intention was to use it as a Unix scripting language to make report processing easier. Languages features are inspired and borrowed from languages such as C, shell script, AWK and sed. After version 1 was released in 1987 there was a rapid expansion over the next year. Version 2 was released in 1988, featuring better regular expression. Support for binary data streams were added in version 3, in 1989.

Perl 4 had a lot of maintenance releases, until 1993, were the design of Perl 5 started. This new version was released in 1994. It included a rewrite of the interpreter, and added a bunch of new features. One of the more important one was the ability to use modules to extend the language, without modifying the interpreter. This meant developers could add new language features, without making the core unstable.

Since its release version 5 has been developed, and is still being developed to this day. In 1995 Comprehensive Perl Archive Network (CPAN) was established to act as a repository for modules and the core itself. As of today it contains more than 150 775 modules. Very impressive!

From 2000 64-bit support was supported, Unicode string representation and large file support was some of the major changes in the new version (5.6). From version 5.8 was released in 2008 there has been almost yearly releases of a new version, and today we’re at version 5.22.

The interesting thing in the history, is the fact that we actually have a version called Perl 6. Version 5 and 6 are both separate languages in the Perl family. The design of version 6 was started on in 2000, and it’s still being developed. A release candidate was released earlier this year. Version 6 is not intended to be backward compatible.

**Typical uses**

While originally designed for text manipulation, Perl has grown and are now in use for many other tasks as well. It is used for database utilities, games and multimedia, GUI development, multitasking and networking, Telnet, SSH and system administration as well as web/CGI programming and web automation.

**Example Hello World**

For the example we want to download the latest version of Perl 5. You can find the correct version for your system [here](https://www.perl.org/get.html). Like always, I’m doing this from a Windows 10 machine so I chose to download ActiveState Perl, as this is the one containing binaries.

Installation was quite quick, using all default values. When the installation is done, you can verify that it succeeded by opening a command line window, and run the command

perl -v

Which should give you the currently installed version of Perl.

Now, lets create a file, called “HelloWorld.pl”. In this file, enter the following:

#!/usr/bin/perl use strict; use warnings; print "Hello, World!";

Save the file, and in a command prompt run the following:

perl HelloWorld.pl

Which should print “Hello, World!”.

As you can see the syntax is rather simple, but there are a few lines I would like mention. We could just have the “print” line in our file, and the program would work just as expected. However, since Perl is a forgiving language, it is best practice to make it more robust to start all programs with the three lines at the top. They are there to catch common problems, where “use strict;” will cause your program to stop when encountering a problem. “use warnings;” will give a warning, but will let the code run.

Personally I find Perl a rather interesting as a language, but not one I would spend any time learning. At least now, as it doesn’t align with my future goals.
