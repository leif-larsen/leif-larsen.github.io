---
title: "24 Days of Hello World   Lisp"
date: "2015-12-12"
---

Day 13, only 11 days left until Christmas, which means another language! Today I am looking into the language family Lisp, and more specifically the dialect Common Lisp. Being one of the earliest programming languages it pioneered many ideas in computer science, such as tree data structures, automatic storage management, dynamic typing, recursion and more.

Lisp derives from “LISt Processor”, and linked lists is one of the major data structures used. In fact, the source code itself is made up of lists. Source code from Lisp applications can be manipulated as data structures, which allow programmers to create new syntax or new domain.specific languages embedded in Lisp, using macros.

**History**

Lisp was invented in 1958 by John McCarthy, and he went on to publish the design in a paper in 1960. What he showed was that you could build a Turing-complete language for algorithms, using a few simple operators and a notation for functions. The first implementation was done by Steve Russell, where the result was a working interpreter. The first complete compiler was implemented in 1962 by Tim Hart and Mike Levin. This introduced incremental compilation, where compiled and interpreted functions can intermix freely.

Common Lisp was created during the 1980s and 1990s. This was a result of an effort to unify the work on new dialects of Lisp. Popularity declined during the 1990s, but from 2000 and up to now there has been an increased interest in Lisp, specially for the dialects Common Lisp and [Clojure](http://leiflarsen.org/2015/24-days-hello-world-clojure).

**Typical uses**

Common Lisp is often used to develop research applications, often for Artificial Intelligence. This allows rapid development of prototypes or deployed applications.

**Example Hello World**

For this example you need to download and install CLISP from [Sourgeforge](http://sourceforge.net/projects/clisp/files/latest/download?source=files). The version that is current is 2.49, which should be quite quick to install with default parameters. When it is installed you can verify that it is working by opening CLISP from the start menu. That should open a command line interface.

Create a file called “HelloWorld.lisp” and make it look like this:

(defun helloworld () "Hello, World!" )

Save the file, and run the following commands in CLISP:

(load "PATH/TO/YOUR/FILE/HelloWorld.lisp") (helloworld)

The first commands loads the file into the REPL, and it will state so by saying something like “Loading file …” followed by “Loaded file …”. The next line will actually execute the function we defined in our file. Naturally this will print “Hello, World!”.

My personal opinion when it comes to LISP is that it’s old, and nothing that really catches my interest. Although probably very good for its use, it took me too long to get the “Hello World” example running, and I don’t see myself learning any of the dialects today.

Do check back tomorrow for the next language in this series!
