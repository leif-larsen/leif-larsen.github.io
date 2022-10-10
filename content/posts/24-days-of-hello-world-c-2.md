---
title: "24 Days of Hello World   C"
date: "2015-12-15"
---

Today I want to tell you about a language, that is one of the most widely used languages of all time, C. This is a general purpose, imperative language, which supports structured programming, lexical variable scope and recursion. Applications that were typically coded in assembly language (including operating systems), now typical is coded in C, due to its efficiency in mapping constructs to machine instructions.

C has been standardized by American National Standards Institute (ANSI) since 1989, and by ISO later. It is a cross-platform language, and it has inspired quite a few other languages, such as C++, C#, Java, PHP, Perl etc.

**History**

C was developed by Dennis Ritchie between 1969 and 1973, where the origin was used to re-implement a Unix system. While porting the system from one computer, to another they considered using the B language. B did have some inabilities, so C was developed. The name is just the continued alphabetic order from B.

By 1973 most of Unix’s kernel was written in C, due to the addition of struct types. It was one of the first kernels implemented in something else than assembly code. By 1977 there were made further changes to facilitate portability of the Unix system.

In 1978 a book named “K&R” was released. This was an informal specification of the language, and even though C was standardized in 1989, this book was still considered the lowest common denominator to have maximum portability in applications. The C standard has been revised several times up through the years, until the latest version, C11, which was released in 2011.

**Typical uses**

Like with C++, the list of applications that are created by C are too long to list. You can use it for anything from operating systems, to applications in embedded systems and supercomputers, as well as general applications.

**Example Hello World**

This example will be very similar to C++. I’ll run it using the same compiler from Microsoft. If you check out the [post on C++](http://leiflarsen.org/2015/24-days-of-hello-world-c-2), you will find what you need on the compiler there.

Now we want to create a file called “HelloWorld.c”. In this file, input the following:

#include<stdio.h> main() { printf("Hello, World!"); }

To compile and run this program, run the following commands in a command prompt (from the same folder as the file is stored in):

cl HelloWorld.c HelloWorld.exe

This should give you “Hello, World!”.

Now, even though C is one of the most used languages in the world, and without a doubt it is very powerful, I can’t see myself learning it. Well, at least not in the near future. I can see it may be good to be able to read code from it, but I find it to be a bit too low-level to want to learn it.

That’s it for today, make sure you check back tomorrow, for the next post in 24 Days of Hello World!
