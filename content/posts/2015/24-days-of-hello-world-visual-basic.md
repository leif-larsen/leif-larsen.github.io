---
title: "24 Days of Hello World   Visual Basic"
date: "2015-12-20"
---

Today I’ll talk a bit about Visual Basic (VB). This is a language in the BASIC family, and it is is a event-driven language and IDE from Microsoft. It was first created to support the COM programming model from Microsoft, and it was intended to be relatively easy to learn. Seeing as it is derived from BASIC it enables rapid development of graphical user interface applications, access to databases using Data Access Objects, Remote Data Objects or ActiveX Data Objects. It also enables the creation of ActiveX controls and objects.

**History**

The first version of Visual Basic was in 1991. It had a drag-and-drop design for creating user interfaces. Microsoft had Alan Cooper, from Tripod, develop this, as they had developed a prototype form generator. Microsoft wanted this to be a programmable form system for Windows 3.0, but since no programming language was included, Microsoft chose to combine this with BASIC, and Visual Basic was born.

In 1992 VB 2.0 was released in 1992, with an easier to used programming environment, and improved speed. Forms became instantiable objects, which was the foundation of class modules.

VB 3.0 followed the next year, and was delivered as a standard and professional version. It included Microsofts Jet Database Engine. Two years later version 4.0 was released, which was the first version that could create 32-bit and 16-bit Windows programs. A new edition was added; Enterprise. This version used OLE controls instead of VBX controls.

Version 5.0 was released exclusively for 32-bit Windows. It was easy to convert from VB 4.0 to VB 5.0 and back though. New features also included the ability to create custom user controls and it increased the speed in calculation-intensive code, by adding the ability to compile to native Windows code.

The last release of Visual Basic was 6.0, which came in 1998. This included the ability to create web-based applications and made a number of other improvements. In 2005 Microsoft ended mainstream support, and by 2008 extended support was also ended. They do however still maintain compatibility, as there still is a large number of applications using Visual Basic, and a large number of developers using it.

**Typical uses**

The idea behind Visual Basic is that it is supposed to be easy to learn and start to develop with, but it still can be utilized for a lot of different applications.

**Example Hello World**

To run this example, you will need a Visual Basic compiler. I recommend you just use the one that is included with Visual Studio (you can get the community edition for free!)

Create a file called “HelloWorld.vb” and enter the following into it:

```language-clike
Imports System 
Public Module modmain 
   Sub Main() 
      Console.WriteLine("Hello, World!") 
   End Sub 
End Module
```

To compile it and run it, run the following commands in a command line:

`vbc /t:exe /debug+ /optionstrict+ /out:.HelloWorld.exe HelloWorld.vb HelloWorld.exe`

That should output “Hello, World!” to the console.

As you may see, there is similarities with [C#](http://leiflarsen.org/2015/24-days-of-hello-world-c) (or shall I say, C# has similarities with VB?), in the way that you have a clear defined module (class in C#) and an entry point. Personally I’ve used VB for some projects earlier, however I never got really enjoyed it.

We’re closing in on Christmas now, and there are only three languages left, so I hope you check back tomorrow for the next one!
