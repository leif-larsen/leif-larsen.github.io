---
title: "A first look into the world of Raspberry Pi"
date: "2015-08-30"
---

A few days ago I went to a local electronic store and bought myself a Raspberry Pi 2 Model B. I’ve read a bit about Windows 10 IoT Core, so I decided I wanted to try that, specifically for my home automation project I am slowly easing into.

The Pi comes in a small box, that looks like this:  
![Raspberry Pi Box](/images/RaspberryPiBox.jpg)

And the Pi itself looks like this:  
![Raspberry Pi 2 Model B](/images/RaspberryPiProfile.jpg)

To be able to install Windows 10 IoT you need a class 10 micro SD card. It needs to be at least 8 GB big.

The installation process is fairly simple. I spent some extra time, since I decided to install Windows 10 on my Mac Mini, using Bootcamp. More on that in another post. Anyway, to prepare my computer for development for Raspberry Pi, I followed [a guide from Microsoft](http://ms-iot.github.io/content/en-US/win10/SetupPCRPI.htm). The also have a [great guide](http://ms-iot.github.io/content/en-US/win10/SetupRPI.htm) on how to install Windows 10 IoT on the Raspberry Pi itself. The guide on how to [setup Powershell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) for remote administration was also quite useful to me.

All in all I find that Microsoft have done a great job documenting the process, to get developers quickly up and running. The next step after installation is naturally to do some development. Microsoft shows off an example called Blinky, which is basically a LED blinking app. As I didn’t have the hardware required for that, I decided to make it simple, and just create a “Hello World” app. Mainly just to see that I were able to deploy an app to the Pi, and to see that it started properly. It didn’t.

Turned out that since I had left the Pi running almost a day, the remote debugger had timed out, and stopped working. To fix this all I had to do was to restart the Pi. After a quick reboot, I were able to deploy the test app.

I am looking forward to play around the Raspberry Pie more, as I have a lot of ideas. I have already ordered some parts from [The Pi Hut](http://thepihut.com/), so there is exciting times ahead!

What’s your experience with Raspberry Pi? Are you using it with Windows 10 IoT or some other OS?
