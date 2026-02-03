---
title: "24 Days of Hello World   Objective C"
date: "2015-12-16"
---

With only a week left until Christmas, I want to look into another language used mostly for Apple products, Objective C. This is a general-purpose, object oriented language, which is based on C. Like with C/C++ Objective C source code implementation usually have a program file, with “.m” extension, and header files, with “.h” extensions.

**History**

In the early 1980s, Brad Cox and Tom Love created Objective C. It was inspired by the language Smalltalk, but it was also critical that it were backward compatible with C, due to it being critical for telecom engineering at their company.

Cox showed that to support interchangeable software languages needed to support objects, have a usable set of libraries supplied from the start and allow code to be bundled into a single cross-platform format. The creators commercialized their product, which was an Objective C compiler and class libraries, and in 1986 the main description of the language was released in book form.

In 1988 Objective C was licensed from NeXT, who extended the GCC compiler with support Objective C support. They developed Foundation kit and AppKit libraries, where user interface and Interface Builder for NeXTstep was based. Hardware wise, they didn’t have much success, so they focused on software tools, as it became popular in the industry.

Apple acquired NeXT in 1996, and used their tools for Mac OS X. They used Objective C, the developer tool from NeXT, Project Builder and Interface Builder, which today is merged into XCode.

\*\*Typical uses\*\*\*\*\*\*

As with Swift, the most typical places you would use Objective C is for software for Apple products.

**Example Hello World**

In this example I create and compile the application on a Mac. If you read the post on [Swift](http://leiflarsen.org/2015/24-days-of-hello-world-swift) you will see what you need to get started. To create the application we want to create a file called “HelloWorld.m”. Store this in a folder you can reach from the terminal, and enter the following into it:

#import <Foundation/Foundation.h> int main (int argc, const char \* argv\[\]) { NSAutoreleasePool \* pool = \[\[NSAutoreleasePool alloc\] init\]; NSLog(@"Hello, World!"); \[pool drain\] return 0; }

Now you want to open the terminal (because we want to compile and execute the app without using an IDE), and run the following command (given that you are in the same folder as the “HelloWorld.m” file we created earler).

gcc -framework Foundation HelloWorld.m -o HelloWorld

This will compile the application into a file called “HelloWorld” (that’s what the “-o” parameter is), and it is using the “Foundation” framework. Notice that we’re using GCC to compile, a tool I mentioned in both the [C](http://leiflarsen.org/2015/24-days-of-hello-world-c-3) and [C++](http://leiflarsen.org/2015/24-days-of-hello-world-c-2) posts.

To run the application simply just call the application name, in terminal, from the folder it is stored in. Note how I have added “./” in front of the application. This is simply to tell the terminal which folder to look for the application in.

./HelloWorld

This should print out the all familiar “Hello, World!”, and we’re done! Now, as with Swift I don’t want to spend too much time learning Objective-C, as its primary areas is areas where I already use C# and Xamarin.

I look forward to tomorrows post, as it will be an exciting one!
