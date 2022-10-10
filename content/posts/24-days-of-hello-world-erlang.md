---
title: "24 Days of Hello World   Erlang"
date: "2015-12-03"
---

In this next post, in the 24 Days of Hello World series, I will look into a language that is older than me, Erlang. Erlang is a general-purpose language used to build massively scalable soft real-time systems.

As opposed to most languages language-level features for creating and managing processes, with the aim to simplify concurrent programming, is provided in Erlang. It removes the need of explicit locks by using message passing instead of shared variables.

**History**

The history of Erlang starts back in 1986, when the first version was developed by Joe Armstrong, Robert Virding and Mike Williams. It was originally written as a proprietary language for Ericsson, but in 1998 it was released as open source.

It was designed to improve development of telephony applications. The initial version was influenced by a language called PLEX, and implemented in Prolog. Symmetric multiprocessing support was added to the runtime system in 2006.

**Typical uses**

As stated in the intro, Erlang is used to build massively scalable soft real-time systems. Typical uses includes telecom, banking, e-commerce, computer telephony and instant messaging. These are systems were high availability is required, and supported by Erlang with its built-in concurrency, distribution and fault tolerance.

A few places it is in use:

1. Facebook – Used to power the backend of the chat service
2. WhatsApp – Their messaging systems is built with Erlang
3. Klarna – Electronic payment systems
4. T-Mobile – Used for advanced call control services The list could go on and on, as quite a number of companies uses Erlang. And as you can see, some big companies is included.

**Example Hello World**

So to get into the example code. Again you will need to download either the source code, or the [installer](http://www.erlang.org/download.html). I used the correct Windows installer, and installed it using default settings. The installation process takes some time to get through, but when its done you can verify that it worked by opening “Erlang” from your start menu. This should open an application with a command prompt window.

Lets jump to the code:

% hello world program -module(helloworld). -export(\[start/0\]). start() -> io:fwrite("Hello, World!n).

Save that in a file called “helloworld.erl”. Note! The compiler (or language itself, I haven’t really looked into it) is case sensitive, so be careful to name everything as its done above. I got some errors trying this for the first time.

Open a command prompt, and verify that the bin folder of Erlang is in the path. Browse to the location of the .erl file, and run the following command:

erlc helloworld.erl

Followed by:

erl -noshell -s helloworld start -s init stop

This should print out “Hello, World!” as expected.

My first impression is that this is something totally different than what I’ve seen before. Based on the usage described, it does seem like something it would be wise to at least consider to learn. Syntax wise, although new to me, it seems to be ok to understand what’s going on. And even if it is a general-purpose language, I like the idea that has been designed for real-time systems, with requirements in regards to high availability.

Do you have any experience with Erlang? Care to share?

Tomorrow will marked the 5th post in this series, and I sure hope you’ll check back for that as well!
