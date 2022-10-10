---
title: "24 Days of Hello World   Ruby"
date: "2015-12-02"
---

Day three of the advent calendar, 24 Days of Hello World. Today marks the first day of discussing a language I have not used before, so this is an exciting one! If you didn’t understand so from the title, the language is Ruby.

Ruby is one of those languages I’ve always wanted to take a deeper look at, but never had time or reasons to do so. I believe all I’ve tried is the interactive ruby part, so I have never even looked at writing a class using Ruby. Hopefully I will get some time to explore it more at a later stage. Anyway, lets jump right in.

**History**

Ruby is a general-purpose language, designed and developed by Yukihiro “Matz” Matsumoto. It was influenced by Perl, Smalltalk, Eiffel, Ada and Lisp. According to Matz he was interested in an object-oriented scripting language, but he didn’t like Perl or Python. Therefore he decided to create his own language.

The first version was released late December in 1995, with the version number being 0.95. Features present in this version included object-oriented design, inheritance, mixins, iterators, closures, exception handling and garbage collection. Ruby first got some traction in Japan, and by 2000 it was more popular than Python. By 2002 its popularity in the rest of the world was increasing. By then version 1.6 was released.

In 2003 Ruby 1.8 was released, and it wasn’t before 2013 before it was retired. In the meantime 1.9 had been released, which introduced significant changes, such as block local variables, per-string character encodings, new socket API. 1.8 was only partially compatible, which required many popular third-party gems to be rewritten.

Version 2.0 was released in 2013, and introduced method keyword arguments, a new method for extending a class, new API for lazy evaluation of Enumerables. This version is fully backward compatible with 1.9.3, with only 5 minor incompatibilities. The latest version of Ruby was released in late 2014, version 2.2. This includes bugfixes, library updates and removal of deprecated APIs.

**Typical uses**

Like I mentioned Ruby was designed as a general-purpose scripting language, and it supports a number of applications. You can find it used in web applications and servers, picture recognition engines, threaded database servers and low-level system utilities.

There are several reasons why Ruby is so popular and widely used. The syntax can be claimed to be simple and elegant, there is a complete standard library, and there is plenty of community based code, support and toolchains. The popular web framework Rails (Ruby on Rails) is also a part of the reason. Twitter used this framework from its very beginning until 2011.

**Example Hello World**

To use Ruby you need to compile the source code, or do as I did, use the installer. You can find the installer for Windows [here](http://rubyinstaller.org/downloads/). I installed the latest version, 2.2.3. A quick note on the installation, I selected the option to have ruby be added to the path, so I don’t have to worry about it later. Installation should be fairly quick, and to confirm it is properly installed, you can run the following command:

ruby -v

Which should output the version number.

Now over to the code part. Seeing as Ruby was made to be object oriented, I am going to use that way to solve this. There is an option to run the “Interactive Ruby” shell and output “Hello, World!” that way, but it kind of defeats the purpose for this post.

Create a new file, and call it HelloWorld.rb. Make it look like this:

class HelloWorld def sayHi puts "Hello, World!" end end hello = HelloWorld.new() hello.sayHi

Save the file, and run the following commands, in a command prompt:

ruby HelloWorld.rb

As always, this should output “Hello, World!”.

As you can see from the example code, the syntax is more lenient than the previous languages we’ve looked into. If I were to start with Ruby, I would definitely have some trouble getting used to this. I can however see that it may be quicker to write when you are used to the syntax. Maybe someone can shed some light at this?

That’s it for this time, check back tomorrow for the next language in 24 Days of Hello World!
