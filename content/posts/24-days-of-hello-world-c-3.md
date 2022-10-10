---
title: "24 Days of Hello World   C++"
date: "2015-12-13"
---

In today’s post I want to introduce a language that has inspired many newer languages, C++. This is a general-purpose language, with imperative, object-oriented and generic programming features. It also provides support for low-level memory manipulation. Key strengths is software infrastructure and resource-constrained applications, such as desktop applications, servers and performance-critical applications (telephone switches, space probes etc.).

Today there exists many implementation of the C++ standard, and it is available on many platforms. It is standardized by the ISO (International Organization for Standardization), where the most recent version was published in December 2014.

**History**

Bjarne Stroustrup is considered to be the father of C++. His experience with programming from his Ph.D. thesis had shown him that Simula had features that were helpful for large software development. He also found that it was too slow for practical use. When he was facing the problem of analysing the UNIX kernel, in respect to distributed computing, he set out to enhance the C language. Before its final name, C++, it was referred to as “new C” and “C with Classes”.

Classes, derived classes, strong typing, inlining and default argument were features that initially were added to C from Stroustrup. In 1983 new features were added, such as virtual functions, function name and operator overloading and type-safe free-store memory allocation (new/delete) and several more. 1985 was the year when the first commercial implementation was released. Also the first edition, of what became the definitive reference for the language, “The C++ Programming Language” was released.

In 1989 C++ 2.0 was released, and included features such as multiple inheritance, abstract classes, static and const member functions and protected members. The Annotated C++ Reference manual was released in 1990, and became the basis for future standards.

Until 2011, the language was slowly evolving. The standard library was enlarged in 2011, with the introduction of C++11, and the currently latest release is C++14, which was a minor release. The next release of the language is planned for 2017.

**Typical uses**

The list of applications you can use C++ for is endless, but just to give you an example of what has been written in C++, I’ll name a few applications:

1. Internet Explorer
2. Visual Studio
3. Microsoft Office
4. mIRC
5. Amazon.com
6. MySQL Bjarne Stroustrup has an extensive list available on his site, with many examples of other applications. You can view the list [here](http://www.stroustrup.com/applications.html).

**Example Hello World**

For this example, I’ll use Microsoft Visual C++, and their compiler. Like I mentioned, there is a variety of compilers available, and the example program should work with all of the, but the compilation command may not be the same. To use this compiler, you will need Visual Studio installed. Another compiler to try is GCC, from the GNU Compiler Collection, which you may find [here](https://gcc.gnu.org/). I have not tried that though, so I can’t really tell how it is.

Now let’s create a file called “HelloWorld.cpp”, and add the following into it.

#include int main() { std::cout << "Hello, World!"; }

In my mind, this is much more readable than a few of the other languages I’ve been through lately. We have a main entry point declared, and we print “Hello, World!” using a function in the standard namespace. To compile and execute the application, run the following commands in a command prompt.

cl /EHsc HelloWorld.cpp HelloWorld.exe

The additional “/EHsc” parameter in the compile command is just to tell the compiler how to handle certain exceptions. If everything is done correctly, you should now see “Hello, World!” printed to the console.

C++ is definitely a powerful language, and I can see why its so widely used. Personally, I never really like it, mostly because of pointers and the memory management. Bear in mind, I have only used it during my education, for one class, so if I were to look at it today, my view and understanding of it might be different.

I hope to see you again tomorrow for the next language in 24 Days of Hello World!
