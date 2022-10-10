---
title: "24 Days of Hello World   Cobra"
date: "2015-12-17"
---

In today’s post I’ll introduce a relatively new language, running on the .NET and Mono platforms. The language is called Cobra, and it is a general-purpose, object oriented language. It supports static and dynamic typing, lambda expressions, closures, list comprehensions and generators. Cobra is open-source, currently licensed under the MIT license.

**History**

Cobra was developed by Charles Esterbrook in 2006. It is heavily inspired by C#, Eiffel, Objective C and Python. Other than this I can’t actually fin too much more of interest.

**Typical uses**

I haven’t really found any places Cobra’s typically used. According to the official website, you would want to use it if you want quick, expressive coding, fast execution, static and dynamic bindings and language level support for quality. Also I would guess that since it runs on the .NET platform you could theoretically use it for a lot of the same applications you could make in .NET.

**Example Hello World**

First, you need to download Cobra, which you can find [here](http://cobra-language.com/downloads/). I chose the zip file for Windows. Unzip the folder, and open it in a command line interface, as an administrator. Now you want to move into the Source folder, and then into the bin folder, where you want to run “install-from-workspace.bat”. This will install Cobra, typically to “C:/Cobra/”. You can now choose to add this to the PATH variable, I just went into the folder itself from command line. From the bin folder inside “C:/Cobra” you can run “cobra -h” to verify that is installed correctly.

Next, we want to create a file “HelloWorld.cobra”, which should look like this:

class HelloWorld def main print 'Hello, World!'

Run this file from a command line prompt, using the following command:

cobra "HelloWorld.cobra"

Which naturally should print “Hello, World!” to the console. Syntax wise the language seems to be pretty simple, and for me it’s a big advantage that it runs on the .NET platform. However, seeing as the current stable release is to be seen as a beta, and is two years old, it does not strike me as a language that is actively developed. Also I haven’t heard of any applications made with Cobra, or even heard about it before, so it is highly unlikely that I will spend time learning it. Maybe if it gets more traction in the future. Have you used Cobra? In that case, what for, and can you recommend it?

Check back tomorrow for an old-school language!
