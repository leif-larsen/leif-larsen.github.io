---
title: "24 Days of Hello World   Haskell"
date: "2015-12-07"
---

For the eight hatch of 24 Days of Hello World I look into Haskell. Haskell is a language I merely have heard of before, so it is definitely interesting to see what it is and what it can be applied to.

Haskell is a general-purpose purely functional language, using strong static typing and non-strict semantics. It is as an open-source product, which allows rapid development of what it claims to be robust and concise software. It has support for integration with other languages, built-in concurrency and parallelism, rich libraries and an active community.

**History**

The background for Haskell was the release of a proprietary language, called Miranda. This was a functional language, released in 1985, which resulted in a growth of interest in functional languages. In 1987 there was a strong consensus that a committee should be formed, to define an open standard for functional languages. Their aim was to consolidate existing functional languages into a common one, and in 1990 the first version of Haskell was defined.

The work of the committee resulted in a series of language definitions, and it ended in Haskell 98, which intended to specify a stable, minimal version of the language. It was to be a base for future extensions, and the committee welcomed extensions and other variants of Haskell 98, through addition and incorporation of experimental features.

This standard was released early 1998, and in 2003 it was revised. The language evolved quickly, and Glasgow Haskell Compiler became the standard. In 2006 the work to define a successor to this standard began, and in mid 2010 Haskell 2010 was published. One of the major features added to this version was the foreign function interface (FFI), which allowed bindings to other programming languages.

As of today a preview release of the next version, called Haskell 2014 has been released.

**Typical uses**

There is a large number of companies that is using Haskell today. To give you an idea of how it can be used, I’m going to list some of them.

1. Facebook – Used for internal tools, such as programmatically manipulating a PHP code base
2. Google – Used for internal projects, such as the open-source project called Ganeti. This is a tool for managing clusters of virtual servers
3. The New York Times – Used Haskell for processing of images, utilizing the parallel array library
4. Wagon – Uses Haskell and JavaScript for their modern SQL editor. **Example Hello World**

For the example code we will need to install the Haskell compiler. You can find what you need at [haskell.org](https://www.haskell.org/downloads). I chose to download and install the minimal installers, which provides the GHC (Glasgow Haswell Compiler) and core libraries needed for the platform. Like always I am doing this on a Windows 10, so that is the platform I chose as well.

Installation was done with default settings, which should add the compiler to the PATH variable. It took some time to install, but once its done you can verify that it finished successfully by running

ghc -v

In a command prompt. That should give you the version, as well as some other information.

Next we move on to create a file, called “HelloWorld.hs”. Add the following to the file:

module Main where import System.Environment main :: IO () main = do putStrLn("Hello, World!")

You can find some description on how the code works [here](https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours/First_Steps).

In a command line window, run the following command:

ghc -o HelloWorld --make HelloWorld.hs

This will tell the compiler to compile the “HelloWorld.hs” file we just created into an executable called “HelloWorld.exe”. The “-o” parameter specifies the name of the executable.

Run the newly compiled application by typing “HelloWorld.exe” in the command line, and as always you should see “Hello, World!” printed to the console window.
