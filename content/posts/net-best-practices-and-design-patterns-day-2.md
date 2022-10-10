---
title: "NET Best Practices and Design Patterns   Day 2"
date: "2016-07-12"
---

Day 2 of the course continued where we left of yesterday, namely with topics in regards to test-driven development. So far this day was the one with the most design patterns in it, as we went through a whole bunch in chapter 4. We also started on chapter 5, however I think it's best to leave my notes for that until we finish it on day 3. I see that chapter 3 comes out weirdly (split over two posts), so I'll write about the entire chapter 5 tomorrow.

##Chapter 3 Continued ###Refactoring In terms of refactoring it is a process of improving the design of the code, without breaking its behaviour. To do this one should always do refactoring with small steps. As an example, say you need another parameter in your method. You may start with adding it as the last parameter and add a default value, thus not breaking existing calls to the method. Another way would be to create an overloaded method, where you can work your magic with the new parameter, and then call the original method with the parameters it expects. If you have proper tests in place, you can refactor without being afraid of breaking anything.

**Adding new features**  
First step would be to refactor existing code, so you can support adding the new feature. Next you should add the new feature, in an appropriate manner (so basically write a test that fails, write code to make test pass, rinse and repeat).

**Handling reported bugs**  
If a bug has been reported, don't start by changing the code. You need to realize there is a gap in the existing test suite, so you need to add a test for the bug. After this is done, you can move on to fix the bug, and since you now have a test for it, you can be confident that it won't come again. You should also review the general area where the bug arised, as bugs tends to cluster together.

**Working with legacy code**  
Only isolated components will test easily, which means existing code often cause trouble. This is because it usually have many dependencies. To get around this you can identify the dependent class, extract an interface from that and adjust the client to use the interface instead. This can then be faked in an unit test.

##Chapter 4 ###Decorator Pattern The decorator pattern adds functionality dynamically. Where inheritance/interfaces is class relationships fixed at compile time, decorator patterns is about object relationships not fixed at compile time. It is a way to attach additional responsibility to an object dynamically, which means this is a flexible alternative to subclassing for extending functionality. Using the decorator pattern with factory pattern can be very useful. This pattern is good to describe the O in SOLID, which is the Open/Close Principle. This basically states that classes should be open to extension, but closed to modification.

One of the consequences of using the decorator pattern is increased complexity.

###Adapter Pattern In the adapter pattern you convert the interface you have available to the interface you require. This allows components that otherwise couldn't work together to work toghether. Incompatible classes are wrapped in adapters. As an example, think of adapters you use for power when travelling to a foreign country.

###Template Method Pattern The template method pattern can be used when you have a standard framework, or way of doing certain things, but there might be slight difference in the implementation details of the steps. You can define the skeleton of the algorithm in a base class function. You can then allow the subclasses to customize the steps of the algorithm, either by declaring them as virtual or abstract. The overall structure cannot be overriden though.

###Role Object Pattern The role object patterns looks like the strategy pattern when it comes to code, however where the strategy pattern conceals the strategy object, the role object pattern may allow access to the role object.

###Application State Pattern Object state is data that affects behaviour. Controlling logic is often highly stateful and often very complex. To utilize the state pattern you need to encapsulate data and behaviour unique to a given state in one class. You can then use if/else to control polymorphic calls. This would typically mean that a base implementation throws an exception, which is removed in a subclass implementation (meaning you don't call base.method()). This breaks Liskovs Substitution Principle, but it is intentional.

###Class Design Best Practices In terms of best practices for class design, we discussed the L in SOLID; Liskov Substitution Principle. Basically this states that derived classes should honor the base class' contract.

Like the previous post, I will supplement this with some code samples when I get home.
