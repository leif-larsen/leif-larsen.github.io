---
title: "24 Days of Hello World   F"
date: "2015-12-05"
---

Today I am looking into functional programming. More specifically I’ll look into F#, a strongly typed, multi-paradigm language. Often used as a cross-platform common language infrastructure language.

It is developed by F# Software Foundation, Microsoft and open contributors. It is supported in Visual Studio and Xamarin Studio, and it has its own open source, cross-platform compiler.

**History**

F# was originally designed and implemented by Don Syme, from Microsoft Research, and it was first released in 2005, supporting .NET 1.0 – 3.5, and the Windows platform. Features included functional programming, records, tuples, pattern matching, structs, scripting files, modules and .NET interoperability, to mention a few.

It took about 5 years until the next version was released. This did support Linux and OS X as well, and .NET 2.0 – 4.0 as well as Mono. New features was added, such as asynchronous programming, agent programming, extension members, named arguments and array slicing.

Version 3.0 supported also supported .NET 4.5, as well as GPU and JavaScript platforms. Features like LINQ, auto-properties and type providers were added.

The latest version is F# 4.0, released earlier this year, with the introduction of Visual Studio 2015. Some of the features included is extension property initializers, class names as functions, non-null provided types and optional type args.

**Typical uses**

This is not a language with a wide variety of applications where it is used. It is a central part of [WebSharper](http://websharper.com/), where you use F# as .NET code on the server, and JavaScript on the front end.

Another place it is used is for analytical programming. It has been positioned as an optimized alternative to C#, and is used for quantitative finance programming, energy trading and portfolio optimization, machine learning and business intelligence.

**Example Hello World**

So for this example you will need a compiler for F#, naturally. There are a few ways to compile code on Windows (5 actually), which you can read about on [fsharp.org](http://fsharp.org/use/windows/).

Assuming you have everything you need to compile some code, lets create a file called HelloWorld.fs. The code should look something like this:

open System \[\] let main argv = printfn "Hello, World!" 0

A big warning here! Do not let there be TABs, unless you specify an “#indent “off”” option. My first attempt to compile the code above, _with_ TABs failed. When I removed the TABs and just used whitespace, it compiled fine.

Anyway, compile this file by running the following:

fsc HelloWorld.cs

And given that the compilation succeeded, run the program by running:

HelloWorld.exe

If everything has been done as it should, you should see the all familiar “Hello, World!” printed to the console.

Although I haven’t spent too much time on F#, I imagine I’ll spend some time diving into it sometime next year. It is compatible with many Microsoft products, uses .NET framework, and is being used for machine learning, a topic I’m interested in learning more on later.

That’s it for now, be sure to check back tomorrow for the next part!
