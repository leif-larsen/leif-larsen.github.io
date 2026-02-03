---
title: "24 Days of Hello World   PHP"
date: "2015-12-09"
---

In todays post I’ll talk a bit about the second programming language I learnt, PHP. I believe I learnt it by myself in the first year of my education, and if I don’t remember all wrong, I also had a course on it my second or third year at school. For a few years I used it frequently, and I built several web sites with PHP, however now I haven’t really used it for a year or two.

So what is PHP? It is a language designed for web programming, server-side, but it is also a general-purpose language. It can be embedded into HTML, or it can be included in web templates and web frameworks. The code itself is interpreted by PHP interpreter, implemented as a module on a web server. You can also execute it with a command line interface.

**History**

In 1994 a guy named Rasmus Lerdorf wrote some CGI programs to maintain his personal home page. He extended these to work with web forms and databases, and called it PHP/FI (Personal Home Page/Forms Interpreter). Version 1.0 of this was officially announced in 1995, where the basic functionality that exists today was present. According to Rasmus, PHP was not intended to be a new programming language, and as such there is inconsistencies in naming of functions and order of parameters. The language was developed organically and not really designed, and by 1997 the next version was released.

In 1997 the parser was rewritten by Zeev Suraski and Andi Gutmans, and the name became PHP: Hypertext Preprocessor. This introduced version 3, which was officially released in 1998. In 1999 the same guys introduced the Zend Engine, which powered PHP4, released in 2000.

PHP5 was released in 2004, introducing improved support for object-oriented programming and PHP Data Objects (PDO) amongst other improvements. By 2008 this was the only stable release supported. PHP6 was supposed to deal with unicode issues, however due to a lack of developers with the right understanding of the job needed to be done, this was abandoned.

The currently latest release is PHP7, which may not be backward compatible. Amongst one of the features introduced is modern exception handling, which replaced the old legacy error mechanisms. The next release will be PHP7.1, and it is planned for next year.

**Typical uses**

As you may have understood, PHP is typically used for server-side web programming. A few of the areas you could use it for in that case is for data collection (or user interaction), database interaction and also graphical work. You can for instance change the size of an image.

**Example Hello World**

For this example you will need to have a web server, either locally or one you have somewhere on the internet. To keep it simple, I’ll choose a locally installed one, and I have chosen [XAMPP](https://www.apachefriends.org/index.html) for this purpose. AS its out of scope for this post, I won’t go into details on XAMPP, but it should be fairly simple to install with default settings, and start the server. You should then be able to browse to “http://localhost” and see the XAMPP homepage.

Now you need to create a file called “HelloWorld.php” and save it under the root folder of your site (for XAMPP: “c:xampphtdocs”). Add the following content to the file:

My first PHP page Hello, World!"; ?>

What you see here is a mix of HTML and PHP. The “echo” command is what you use to print some text with in PHP, and you also notice the start and the end tag, to indicate that the following part is PHP code. If you browse to “http://localhost/HelloWorld.php” you should see “Hello, World!” written on the page.

Like I said in the start, I have been using PHP over several years, building back-ends for many web sites. I find it to be relatively easy to learn and easy to use. However, I have seen a lot of criticism of PHP over the years, and there is other languages you may use for the same purpose as well, so it is not the only way to go.

Come back tomorrow to look into another functional language!
