---
title: "Creating build server status lamps"
date: "2016-08-13"
---

Today I decided to do some tinkering with some of the IoT stuff I have laying around. Quite recently I started on another personal project, which I will do quite a bit of work on over the next few months. I decided that it would be good to setup a build server for the project, to be able to build and test the project, so I don't break anything during development.

Since the project is built using C# I decided to set up a build definition in Visual Studio Online, which can get the source code from GitHub. Anyway, with the build definition set up, I thought it would be cool to get instant (or close to instant) feedback without browsing to the web site to see the result. Having a Particle Core (former Spark Core) I hooked it up with a couple of LEDs. The idea was to get a green light on successful build, and a red light on a failed build. Kind of like the build badge you typically find at many GitHub readmes.

Setting up the Core to do as wanted was pretty straight forward. In the documentation they even have a sample for turning LEDs on and off from the internet. I used this sample as my firmware, with some modifications, so that just one of the LEDs is on at any given time.

To be able to control the LEDs it's a matter of calling the right URL with the right parameters. Using Particle Core this is quite easy, as it is a cloud connected device. To automate the process, I decided to try [Zapier](https://zapier.com). Using this it was quite easy to create a Zap that is triggered when a build is completed. This then triggers a web hook action, which calls the correct URL, with the parameters I specify. I just use the free plan for Zapier, as I usually use [IFTTT](https://ifttt.com/), so I'll have to consider it when I see how it is in the long term. The reason for using Zapier over IFTTT for this, is that IFTTT didn't have any channels for Visual Studio Online, which Zapier did.

The end result looks like this: ![Failing build](/images/2016/IMG_1241.JPG) ![Successful build](/images/2016/IMG_1242-1.JPG) ![Build status](/images/2016/SucceededBuild.PNG)

As you can see from the first image the build has failed, and in the next image it has succeeded. This also correlates to the build status in the last image.

A bit messy in terms of cables and such, so I might tidy that up later, but for now it was just a fun Sunday-project.
