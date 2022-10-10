---
title: "NET Best Practices and Design Patterns   Day 1"
date: "2016-07-11"
---

Monday night I arrived in London, ready to attend [.NET Best Practices and Design Patterns](http://blog.leiflarsen.org/heading-to-london-to-attend-a-course/). Yesterday we had our first day. In the classroom we're 9 students, and there's three attending online. There was about an hour of introductions and practical information before we dived into the first module of the course, so lets do the same here.

##Chapter 1 ###Facade Pattern The facade pattern is a pattern that aims to make something complex easy to use. Basically what is does is to provide an unified interface to a set of interfaces in a (sub)system. It does not however give exclusive way to access these interfaces, so you can access them directly. For it to provide any value it shouldn't be used if you're using something once, but the second time you're using something, you should consider if the facade pattern may be applicable.

A good real world example of the facade pattern would a car. You don't need to know about the engine to drive the car, you just need the key. However, you may still access the engine if you need to.

###Object-Oriented Programming Next we talked a bit about object-oriented programming, so we could guide us onto design patterns. Basically we discussed the definition of OOP, in terms of how it manages complexity, through encapsulation, inheritance and polymorphism.

###Design Patterns Design patterns is usually discovered, and is there to provide solutions to common problems. Discovering and naming patterns gives developers some common vocabulary. Architect Christopher Alexander is credited to be the creator of the idea behind patterns, while the Gang of Four have done a great piece of work documenting several different patterns. Any given design pattern describes _a_ solution, not necessarily _the_ solution.

##Chapter 2 ###Best Practices When discussing best practices, it was more to see what we in class thought of as best practices. Quite a few things were mentioned, and I won't be bringing them up now. The key takeaway was that they are not always necessarily best practices, it depends on the context. Best practices balances optimization with real world constraints.

###Strategy Pattern The strategy pattern encapsulates a family of algorithms under a common interface. It is best described by showing an example, which I'll add when I return home.

Under this topic we learnt a key best practice:

> Program to an interface, not an implementation

###Dependency Injection Dependency injection is a topic I spent some time learning earlier, so I won't write much on this. If you're interested, you can read [my post about it](http://blog.leiflarsen.org/ioc-and-dependency-injection/).

###Factories (Factory Pattern) Factories have a sole purpose of creating objects, and helps out in dependency management.

##Chapter 3 ###Test-Driven Development The last topic of the day, and stretching into the next day was test-driven development. This is a process of incremental software unit development driven by requirements (where the requirements are small and very specific, not big-level requirements). One key thing I learnt was that unit test methods should only have one assert per method (refactoring time when I get home!). Utilizing TDD properly means new bugs must be a result of recent work (because you only check in if you have a green light, don't we all?).

Like I said, this topic extends into the next day as well, so expect more on it tomorrow!

So far a lot of interesting topics, and it's becoming clear to me that I've been using some of it without being able to name it earlier. Looking forward to cover the next modules as well!
