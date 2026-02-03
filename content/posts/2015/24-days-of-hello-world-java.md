---
title: "24 Days of Hello World   Java"
date: "2015-12-01"
---

For this second day of 24 Days of Hello World it is natural to follow up the previous one, with a language mentioned – Java. Java is the language that is taught in many computer engineering/science classes here in Norway, and like C#, is widely used all around the world. One of the great benefits with Java is that it follows the “write once, run anywhere” philosophy. This basically means that it is supported on any platform (given that they support Java).

**History**

Java was developed by James Gosling, and released in 1995. It was a core component in Sun Microsystems’ Java platform. It is higher-level than C and C++, but it derives much of it syntax from these languages. Major browsers incorporated the ability to run Java applets, and so Java became very popular.

From version 2 multiple configurations were introduced, so one could use Java with different platforms. These were for server environments, mobile environments, called Java EE and Java ME respectively, as well as the desktop version, called Java SE.

Every few years major releases of Java have been made, the last one being Java 8. As of 2015 this is the only one supported.

At first Java was released as a proprietary language, but in 2007 it was released under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License).

**Typical uses**

Java is typical used in Android apps, server apps at financial services industry, web applications (it is specially big in e-commerce), software tools (such as Eclipse, Netbeans IDE), trading applications, big data technologies and scientific applications.

As you can tell there is a wide variety of applications that takes advantage of Java, so it is definitely not a language to throw under the bus.

**Example Hello World**

For the example I am again on Windows 10, using Notepad++. You need to install Java SE Development Kit (can be found [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), choose the applicable version for your system). This includes the Java Runtime Engine (libraries, Java Virtual Machine and other components to run a Java application), as well as developer components, such as compiler and debugger necessary to create applications.

When it is installed, you want to make sure that the correct entries have been added to the PATH variable. Open a command line (as administrator) and input the following:

path

This should list all the paths in the PATH variable. On my system the correct Java path was not originally available, so I had to manually add it. Find the path of the Java installation (in my case it was C:Program Files (x86)Javajdk1.7.0\_55bin), and add this to the path by entering the following into the command prompt:

set path=%path%;PATH\_TO\_JAVA\_SDK

Run the path command again to verify that it’s actually there.

Next we want to write our Hello World application. That can be done like this:

public class HelloWorld { public static void main(String\[\] args) { System.out.println("Hello, World!"); } }

Save that into a file called “HelloWorld.java” and run the following to compile it:

javac HelloWorld.java

Followed by

java HelloWorld

Which should run the application (given there was no error during compilation), and output “Hello, World!”.

So that is Java in a nutshell. Come back tomorrow for the next hatch in 24 Days of Hello World!
