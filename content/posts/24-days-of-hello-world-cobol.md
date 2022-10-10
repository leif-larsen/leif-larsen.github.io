---
title: "24 Days of Hello World   COBOL"
date: "2015-12-18"
---

In this post I will talk a little bit about COBOL (COmmon Business-Oriented Language). This is a language designed for business use. It is imperative and procedural, and as of 2002 it is object-oriented. The language itself is mostly deployed on mainframe computers, and is used in legacy applications, like batch and transaction processing jobs.

The syntax is English-like. This is by design, as it was supposed to be self-documenting and highly readable. This does, however, mean that it is verbose, and more than 300 words is reserved. Code is split into a rigid hierarchy, and there is a lack of a large standard library. Since there were a lack of interest, amongst academic computer scientists, during COBOLs development, so it has received a lot of critics for its verbosity, design process and poor support for structured programming.

**History**

COBOL is based on previous language design from Grace Hopper, and it was designed in 1959 by CODASYL. The idea for COBOL is from US Department of Defense, as they wanted to create a language that was portable, for data processing. Computer manufacturers were forced to provide it and in 1968 it was standardized. Since then the standard has been revised four times, where support for structured and object-oriented programming has been added.

Being well over 50 years, COBOL does have a huge history. I have therefore decided to just provide you with the summary here, and I want to refer you to [Wikipedia](https://en.wikipedia.org/wiki/COBOL#History_and_specification) for more in-depth history.

**Typical uses**

Due to lack of popularity, and that a lot of the developers, who knows COBOL, is retiring it is mostly used to maintain existing applications.

**Example Hello World**

For the example I had a lot of trouble of installing a compiler and make it run. In fact I ended up using an interactive tutorial website for it, so if you want to actually run the code I’ll post here, you need to visit [tutorialspoint](http://www.tutorialspoint.com/cobol/).

Anyway, the standard Hello World code for COBOL can be written like this:

IDENTIFICATION DIVISION. PROGRAM-ID. HELLOWORLD. PROCEDURE DIVISION. DISPLAY 'Hello, World!'. STOP RUN.

In case you do have a COBOL compiler, you should call this file “HelloWorld.cobol”, and to compile and run it you need to run the following commands:

$cobc -c -free -x HelloWorld.cobc 2>&1 $cobc -x -o demo HelloWorld.o 2>&1 $demo

This should give you the well-known “Hello, World!”. Based on the syntax you can definitely see that it is easy to read. But like I mentioned in the start, the popularity is low, and you would really just use it to maintain old applications. This reason is enough for me to not spend any more time with COBOL.

Check back tomorrow for the next post in 24 Days of Hello World!
