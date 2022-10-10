---
title: "Installing JDK on Linux with terminal"
date: "2016-02-21"
---

This weekend I have been participating in a virtual hackathon, hosted by [Koding.com](http://koding.com). I teamed up with my sister, her boyfriend and two class mates of his, all which are computer engineering students. The task at the hackathon was to create a web app in one of three categories; data visualization, productivity or games. We chose productivity.

As a part of this hackathon we were given a virtual machine at koding.com, basically a machine with 1GB ram, 1 core CPU and 25GB HD. As the end result of the hackathon was supposed to be a web app of some sort, and since my teammates is mostly familiar with Java, we decided to create something using Play Framework.

To be able to use [Play Framework](https://www.playframework.com/) you would naturally need some Java environment, which was not pre-installed on the VM. For this VM we didn’t have a user interface available, other than a terminal, and so I tried installing the latest version of OpenJDK through this. Everything was installed as expected, and I moved on to installing the [Play Framework](https://www.playframework.com/) (Typesafe Activator). Creating a test app was ok, however when I tried to run it I received an error stating that the wrong version of Java was installed. Some investigation showed that the latest version of OpenJDK was 7, and Play Framework required at least Java version 8.

To fix this I had to install Oracle JDK, which is not in the Linux repository natively. First I removed the installed versions of Java by running the following commands:

`sudo apt-get purge openjdk* sudo apt-get purge icedtea-* openjdk-*`

Next I installed Oracle JDK by running the following commands:

`sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

To verify that Java was properly installed I ran the following commands:

`java -version javac -version`

With this installed we were able to start the Play app, and access it through the web!

Oh, and if you’re wondering what we created, this is a short description:

It is basically a proof of concept of an advanced shopping list. The idea is that users scans in groceries they have shopped (when they put it into the fridge), and register when it has been used, and then you will automatically get a shopping list generated. The idea is that we, in the future, can utilize IoT and machine learning to be able to predict when you run out of a particular product, and notify you. An extension to this is pre-generated dinner suggestions, with what ingredients you need to buy, and potentially what dinner you could make of the ingredients you already have. Probably not a price-winning project, but we had a lot of fun developing it and we got to use technologies unfamiliar to us, so that was great fun.
