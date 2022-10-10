---
title: "24 Days of Hello World   Go"
date: "2015-12-22"
---

It is the day before Christmas, and today I´ll also talk about a relatively new language, called Go. This is a compiled, statically typed language, primarily designed for systems programming. It has features such as garbage collection, various safety features and CSP-style concurrent programming. Today there are two major implementations. Google has one called “gc”, which is open source and targets different platforms. The second one is called “gccgo”, and is a GCC frontend.

**History**

Robert Griesemer, Rob Pike and Ken Thompson, from Google, experimented with a design for a new systems programming language. This led to Go, which was announced in 2009. The basic idea was to have statically typed language, that is scalable to large systems, be light (like dynamic languages) and support networking and multiprocessing.

**Typical uses**

As described, Go is designed for systems programming, basically to replace C++/Java applications. Google uses it for quite a few internal applications, amongst others is their download service for Chrome, Android SDK and Google Earth.

**Example Hello World**

First you need to download the source code or binaries. I chose binaries for Windows 64-bit. You can find the downloads at [go-lang.org](https://golang.org/), just click “Download Go” and it will take you to a list of binaries. I ran the installation with default settings, and it was done fairly quick. To verify that the installation succeeded, you may run a command prompt and run “go version”, which should output the currently installed version.

Before we create our file, we need to setup a workspace. Create a directory, and point the GOPATH environment variable to that directory. Inside that folder, create a new folder called “src” and a folder called “HelloWorld” inside that. This is where you create a file called “HelloWorld.go”. Let the contents of that file be the following:

```language-go
package main import "fmt" func main() { fmt.print("Hello, World!") }
```

Now to compile it, run the following command from a command line:

`go install HelloWorld`

The executable has now been placed in a folder called “bin” at the same level as the “src” folder you created earlier. In the command prompt, navigate to the bin folder, and run “HelloWorld.exe” and see the all familiar “Hello, World!” printed to the screen.

I will probably not be spending any more time with Go, as it is not designed for the applications I look to create, or currently are working on. If I in the future will need something similar, I might look into it a bit more.

Tomorrow is Christmas Eve, and it will mark the end of this series, so be sure to check back, and find out which language I will finish off with!
