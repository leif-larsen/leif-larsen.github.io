---
title: "24 Days of Hello World   Clojure"
date: "2015-12-10"
---

As I mentioned in yesterday’s post, today will be about a functional language, called Clojure. This dynamic language targets the Java Virtual Machine. Designed to be general-purpose language, it combines approachability and interactive abilities of a scripting language with an efficient and robust infrastructure for multithreaded programming.

Clojure is compiled into JVM bytecode, but remains dynamic. It provides access to the Java framework. Clojure is a dialect of LISP, and like LISP, it treats code as data.

**History**

Clojure was initially released in 2007, after two years of development by Rich Hickey. His goal was to create interoperability between LISP and Java. After the initial release it took about two years before version 1, the first stable version was released.

The development is community-driven, and it has been yearly releases since version 1.0, until the currently released 1.7, released earlier this year. Features that have been added in the various releases includes futures, protocols, enhanced primitive support, reader literals, reducers, Java API, improved hashing algorithm, transducers and reader conditionals.

**Typical uses**

Clojure works fine any situation where you could use Java. Some examples is building asynchronous webservers, analysing log files, automating computing infrastructure and generating and producing music. I guess only the imagination can stop you!

**Example Hello World**

The easiest way to get up and running with Clojure is to use the default build tool, called Leiningen. This can be found at [GitHub](https://github.com/technomancy/leiningen), where the source code is, as well as links to installers. I downloaded the Windows installers (can be found a bit down in the readme section), and installed it using default values. Note, you need to have the [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed first. To verify that the installation was successful, check to see if you have the “Clojure REPL” in your start menu. Start that, and see that its actually running.

To make sure Leiningen is correctly installed, and to create our project, you need to run the following commands from a command prompt (make sure you are located in a folder where you want your project to reside):

lein self-install lein new helloworld cd helloworld lein deps lein test

This should present you with a failed test case, which means the project is up and running. Now if you open the file called “core.clj”, found in “YOUR/PATH/src/helloworld/”, you will see some code, which we will edit. Edit this file to look like this:

(ns helloworld.core) (defn greet\[who\] (println "Hello, " who "!")) (defn -main\[\] (greet "World"))

Save the file and run the following command to execute this code:

lein run -m helloworld.core

Which should output “Hello, World!”.

You’ll notice that this is the first time we have used one parameter when calling “Hello World”. This is simply because I didn’t manage to make it compile without, and I didn’t really have much more time to spend trying to figure how to solve it. As for the syntax, I find that for a simple application, such as the one above, it is easy to see what’s going on. On the other hand, for a bigger application it might not be so easy. Maybe someone who have used Clojure can shed some light on this?

That’s all for now, make sure you check back tomorrow for another language in 24 Days of Hello World!
