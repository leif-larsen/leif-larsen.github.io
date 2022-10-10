---
title: "24 Days of Hello World   Rust"
date: "2015-12-21"
---

With only a few days left until Christmas, I want to tell you a bit about a relatively new language, Rust. This is a general-purpose, multi-paradigm, compiled language, designed to a safe, concurrent and practical language. It is developed by Mozilla Research, and it supports pure-functional, concurrent-actor, imperative-procedural and object-oriented styles. Today development is sponsored by Mozilla, however it it a open community project.

**History**

Rust started out as a personal project by Graydon Hoare, from Mozilla. In 2009 Mozilla started to sponsor the project, and it was first announced in 2010. Originally the compiler was written in OCaml, but in 2010 they started the work to make it self-hosting, which they succeeded with in 2011. The first stable release (1.0) was released earlier this year.

**Typical uses**

Being such a new language, I haven’t really found any places where Rust is typically used. In general though, it seems that Rust aims to be able to do what C/C++ does, but in a way where you have more control, and the safety of compile-time error checking as opposed to runtime error checking.

**Example Hello World**

The first thing you want to do is to install Rust. Go to [rust-lang.org](https://www.rust-lang.org/). If you click the “Install” button, you will get the proper installer for your platform. I just installed it with default settings, and the installation process should be fairly quick. When the installation is done, you can open the “Rust Shell”, and verify that the installation succeeded by running the command “rustc -h”. This should print some help text for the compiler.

Now you want to create a file called “HelloWorld.rs”. Make it look like this:

`fn main() { println!("Hello, World!"); }`

To compile and run this, run the following commands from the Rust shell:

`rustc HelloWorld.rs HelloWorld.exe`

Which, if everything is done correctly, should print out “Hello, World!”.

Being such a new language it will be interesting to pay attention to it in the future. I see a lot of different opinions on Rust online, both good and bad, so it will be exciting to see if it gets any traction.

Check back tomorrow for a new language, it is also a relatively new one!
