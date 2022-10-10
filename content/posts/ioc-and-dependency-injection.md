---
title: "IoC and Dependency Injection"
date: "2016-02-28"
---

On some of the code I work on at a daily basis, I have noticed that IoC and dependency injection is used. When I first saw these concepts, I just did a quick read to see what it was, but didn’t really put much energy into it, as it was not something I directly used myself. This did eventually change, and I were assigned a task, which would include using an IoC container, and as such I figured it was time to try to understand what was going on. So in this post I will give a short summary of what I have learnt so far, and maybe to confirm or correct my understanding of this subject.

## Dependency Injection Priniciple

Before I get into the details on IoC and dependency injection I want to write a bit on the dependency injection principle (DIP). Basically this principle refers to a specific way of decoupling software modules, in a way where high-level components becomes independent from low-level implementations. The following two statements can be used for DIP:

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

So in a traditional application architecture you may design your low-level components to be consumed by your high-level components. This limits the re-use of the high-level components. Using DIP you reverse this design, and as such you get less dependencies.

## IoC

Lets move on to Inversion of Control (IoC). This can be described as a design in software architecture where the controls is inverted compared to traditional programming. Using IoC you can increase modularity of a program and make it more extensible. It is related to DIP, but it is still different as DIP concerns itself with decoupling dependencies between high- and low-level layers.

According to [Wikipedia](https://en.wikipedia.org/wiki/Inversion_of_control) IoC serves the following design purposes:

- To decouple the execution of a task from implementation
- To focus a module on the task it is designed for
- To free modules from assumptions about how other systems do what they do and instead rely on contracts
- To prevent side effects when replacing a module

There are quite a few techniques that can be used to implement IoC. To name a few you have factory pattern, service locator pattern and strategy design pattern. Often, though, when people talk about IoC they also talk about the implementation called Dependency Injection, which is the one I will talk a bit more now.

## Dependency Injection

Dependency Injection (DI) is a design pattern that implements IoC to resolve dependencies. Basically you have a dependency, which is an object that can be used (service), which is injected into a dependent object (client). So instead of having the client side find the service, or create it, we pass it in via an injection. This is a fundamental requirement, and kind of the essence of DI, which also allows a program to follow the DIP.

There are three common ways of doing DI; Interface-, setter- and constructor-based injection. Interface injections is in my understanding the least used, and also probably the hardest to use. This is due to the fact that the dependency has the possibility to control its own injection. A constructor-based injection is the most commonly used, and it’s when you inject a dependency through the constructor. The difference between a setter- and constructor-based injections is when they can be used.

I am not going into more details on this topic for now, but I may return to this in a later post, with more examples, as my understanding grows.

## Conclusion

As you can see, using IoC and dependency injections may in many cases be good. Modules will not be dependent on each other, which could increase reuse. It also improves testability, as you’ll be able to fake dependencies in your unit tests. Naturally you could do this before as well, but I’ll argue that using DI makes it easier.

So that’s it for now, I hope this can help as an introduction to IoC and dependency injection. I would also like to recommend John Somnes course on IoC over at [Pluralsight](https://app.pluralsight.com/library/courses/inversion-of-control/table-of-contents). This course helped me, as it explains the concepts in a good way, and provides some nice examples. I would also like to point you to [this article](http://www.devtrends.co.uk/blog/how-not-to-do-dependency-injection-the-static-or-singleton-container), which gives a good explanation on how not to do DI.

What’s your experience with IoC and dependency injection?
