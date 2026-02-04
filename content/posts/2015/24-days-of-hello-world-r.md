---
title: "24 Days of Hello World   R"
date: "2015-12-08"
---

In todays post of 24 Days of Hello World, I look into a language and environment for statistical computing and graphics, called R. This language is an implementation of the language “S”, combined with [lexical scoping](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping).

The software environment is primarily written in C, Fortran and R. While there are graphical front-ends available, R have a command line interface as a default.

**History**

Created by Ross Ihaka and Robert Gentleman, R was named based on the first letters in the first names of its authors. It was created in 1993. After that, it has been further developed, with releases quite often, up til the latest release 3.2.2, which was released a few months back.

In 2007 a company called Revolution Analytics was founded to provide commercial support for R. They also added several components developed by themselves. Earlier this year, Microsoft aquired Revolution Analytics.

**Typical uses**

Typical places where you could use R is in financial companies, where you could be using it for quantitative analysis. Also it can be used to compute trading and risks models, as well as data manipulation-

**Example Hello World**

You can download the binaries or source code for the compiler at [r-project.org](https://cran.r-project.org/mirrors.html). Just select the mirror closes to you, and choose what you would like to download. I chose precompiled binaries for Windows, and I went for the base package, as I’ll just create a “Hello World” application. The installation was fairly quick, and when you are done, you can verify that it is installed by opening “R” which should have been installed.

Now create a file called “HelloWorld.r”, and enter the following into it:

cat ('Hello, World!')

And simply save it. With “R” opened, run the following command to run the application:

source('PATH/TO/FILE/HelloWorld.r')

Note that the slashes needs to be forward slashes (at least on a Windows system). I used backward slashes, and the command failed. Anyway, if you have done it correctly, “Hello, World!” should be printed to the output window.

Seeing as R is the language it is, I believe it is highly unlikely that I will ever learn to use it, and I won’t spend much more time than that to finish this post.

Check back tomorrow for the next language in 24 Days of Hello World!
