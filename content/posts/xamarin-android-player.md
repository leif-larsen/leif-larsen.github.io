---
title: "Xamarin Android Player"
date: "2015-05-09"
---

The Xamarin Android Player is an Android emulator, created by Xamarin. Currently it’s in early stages, and it’s a preview version that is available for those with a Xamarin Android trials or subscription.

[![Xamarin Android Player](/img/2015/05/Xamarin-Android-Player_thumb.png?resize=652%2C564 "Xamarin Android Player")](/img/2015/05/Xamarin-Android-Player.png)

Xamarin writes the following on the player:

> Xamarin Android Player has deep integration with Visual Studio and Xamarin Studio and a native user interface on both Mac & Windows. Running Android on an x86 virtual machine using hardware accelerated virtualization and OpenGL, Xamarin Android Player is significantly faster than the stock Android Emulator.

I came across this tool when I started to work with a map application for Android. When using Xamarin Android components to use Google Maps (Google Play Services), I had issues when trying to test the app using the original Android emulator. Turns out I where missing Google Play Services, which needed to be installed. I didn’t find any good ways of doing it on the Android emulator. With Xamarin Android Emulator, however, you just have to download the right packages, and use drag and drop, from the host machine to the player, to install it. Very nice!

Xamarin Android Player does not include many features, yet, seeing as it is only a preview. As of today, they have the opportunity to simulate the GPS and battery, and soon they will add the option to use your web camera as the front and back camera. In addition they don’t have a ton of different devices to choose between. They do have a few different API levels and screen sizes available, where I do believe they just added a device with Android 5.0. For my use, it has been enough, as I’ve had the features and API levels I needed, and also it integrates with Xamarin Studio, so there is no need for any additional setup.

If you want to try Xamarin Android Player, you can find the download links at the official page [Xamarin](https://xamarin.com/android-player "Xamarin Android Player") site.
