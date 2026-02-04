---
title: "Windows Phone 8 SDK in VM"
date: "2013-07-20"
---

So recently I’ve been starting to work a bit with the Windows Phone 8 SDK, and since I don’t own a WP8 phone myself, my only option for testing is using the emulator from Visual Studio. At first I was hoping to use a virtual machine with Windows 8, but that gave me quite a bit of trouble. I got some error messages stating that there was some issues with the network interface, and after some googling I concluded that you cannot run the emulator inside a virtual machine.

I have a workstation at home, which had Windows 7 installed, so I figured I’ll just install Windows 8 on that, and give it a go. Turns out the hardware is too old, so Hyper-V doesn’t run as intended. Doing some more googling I came across CoreInfo.exe, a tool which you can use to verify the computer settings for virtualization (along with other stuff, but I won’t go into details on that). You can find the tool [here](http://technet.microsoft.com/en-us/sysinternals/cc835722.aspx).

When the files have downloaded, unzip it, and place it for example in C:. Open a command prompt in elevated mode, and run the command “CoreInfo.exe -V”. This is the result from my run on my work laptop:  
[![CoreInfo](/img/2013/07/CoreInfo-300x150.png?fit=300%2C150)](/img/2013/07/CoreInfo.png)

The issue on my workstation was that EPT was not present, so I didn’t have support for SLAT, which is required for Hyper-V. Seeing as this was present on my laptop, I figured there had to be a way to make the emulator work in a virtual machine (I don’t have the possibility to install Windows 8 at my laptop at present time). More googling gave me a link to Nokia’s Developer page, which had instructions on how to make it work! You can find the article [here](http://social.technet.microsoft.com/wiki/contents/articles/27606.windows-phone-windows-phone-8-sdk-on-a-virtual-machine-with-working-emulator.aspx). While that article is based on VMWare Workstation, I got it working on WMWare Player. Also I didn’t reinstall the virtual machine, I just changed the settings on my existing virtual machine. The three things I found were missing in my settings were the number of processor cores, the “Virtualize Intel VT-x/EPT or AMD-v/RVI” and the line “hypervisor.cpuid.v0 = ”FALSE””. When I changed those things I was able to run the WP8 emulator inside the virtual machine.

Gotta say I love the power of Google!

\[EDIT\] The developer page from Nokia has been removed now, due to Microsoft purchasing Nokia. I have updated the link in question so it goes to the corresponding page at Microsoft’s developer page.
