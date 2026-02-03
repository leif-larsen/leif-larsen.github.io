---
title: "24 Days of Hello World   C#"
date: "2015-11-30"
---

Today marks the first day of the advent of 2015, and it’s time to open the first hatch of the calendar, 24 Days of Hello World. In this first post I will show of my primary language of choice, C#.

A quick note on my setup. For all the posts in this series I will be run each particular “Hello World” from a Windows 10 machine. The baseline is a clean machine, with Notepad++ installed, as well as Mozilla Firefox, not much more (except the usual stuff that comes with Windows).

**History**  
C# first appeared in 2000. Anders Hejlsberg is the principal designer and lead architect at Microsoft, and have told that flaws in other major programming languages drove the fundamentals of the Common Language Runtime, which in turn drove the design of C#.

From the start C# was quite similar to Java, but over the years the two have evolved to become less similar. From C# 2.0, released in 2005, generics was introduced, and C# added major features to accommodate functional-style programming. This resulted in LINQ, lambda expressions, extension methods and anonymous types, released with C# 3.0. A great advantage with this is that programmers may use [closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)) when needed in their applications.

A new version of C# has typically been released every few years, typically with a major feature each time, and several minor features. With 4.0 dynamic binding was introduced, asynchronous methods was introduced in 5.0, and in the recently released 6.0 version there is compiler-as-a-service, exception filters and several other news.

**Typical uses**  
It is hard to narrow down some specifics in terms of typical uses, as C# is widely used. Everything from desktop applications, ASP.NET applications, games and mobile applications is possible to create using C#. Once you know it, and know of some of the tools to use, only your imagination limits you.

**Example Hello World**  
This is the simplest form of Hello World with C#. For C# programming I have installed Visual Studio 2015, thus using Microsofts implementation of the standard. Another option is to use Mono, an open-source solution, but I will not be covering that here. Event though I have Visual Studio installed, it is mostly to have the compiler available. Since this is supposed to be as simple as possible, I wrote this using Notepad++, and compiled it using the Developer Command Prompt for VS2015.

```language-csharp
using System; 

public class Hello World() 
{ 
   public static void Main() 
   { 
      Console.WriteLine("Hello, World!"); 
   } 
}
```

Save this into a file called “HelloWorld.cs” and compile that with the following command:

`csc HelloWorld.cs`

Given that the previous command succeeded, you should be able to run the following:

`HelloWorld.exe`

Which should print out “Hello, World!” to the console.

So that was a short piece on C#. You can find more information on C#, and how to get started, [from Microsofts MSDN](https://msdn.microsoft.com/en-us/library/a72418yk.aspx).

Come back tomorrow to read the next hatch in 24 Days of Hello World!
