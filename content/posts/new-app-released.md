---
title: "New app released"
date: "2016-01-17"
---

Today I am officially announcing that my second app, “Din Lokale Dyrlege” (Your Local Vet), has been released. This is an app released only for the Norwegian app stores, for iOS, Windows Phone 8 and Android. I originally aimed to release this app last year, however due to me being a bit behind schedule I didn’t manage that. When I got to the stage where I were to submit the app, it was Christmas, and vacation time for the app store reviewers.

## The general stuff

The app aims to provide information on veterinarians from all over Norway. Information like telephone number, e-mail address, visiting address, opening hours, expertise etc. This is all stuff that is available online today, so why did I create an app for it?

![Entry page "Din Lokale Dyrlege"](/images/0x0ss-169x300.jpg)![Search results "Din Lokale Dyrlege"](/images/0x0ss-1-169x300.jpg)![Vet details "Din Lokale Dyrlege"](/images/0x0ss-2-169x300.jpg)

There are primarily two reasons for this. First and foremost it is to have a list available easily. Say you are on vacation somewhere, and your dog (which you off course brought along!) gets ill. How do you find a veterinarian in the place you are? You could naturally search for it on the web, but I believe that it is more convenient to be able to look up that information in an app. In addition you have the possibility to see whether or not there are more veterinarians in the area or no. Maybe the place you’re at have three different vets, all with different opening hours, maybe one has emergency service. Not all have good websites online, or have done a poor job with SEO, so you might not find them.

As of today the app contains information about 400 veterinarians, but I intend to increase this number significantly. This amount includes clinics around the country, but I know there are a lot of specialists in different fields that also needs to be included. To be able to gather more of these I am relying on user feedback, and more specifically I am asking around on different forums/Facebook groups for information. Isn’t this a great amount of work, you may ask. Well, yes. I have spent quite a bit of time finding veterinarians and gathering information on them, and that is also why I am charging a small fee for the app.

## The technical stuff

As for the more technical bit, I assume some of you would like to know more on the technologies I am using. The backend service I am using is Parse, which I have mentioned in a [previous blog post](http://blog.leiflarsen.org/cloud-based-back-end-service). This is also what I used for my previous app, [Parker Gratis](http://blog.leiflarsen.org/released-my-first-ios-app). This time I am handling all user input, so for the end-user it will just be reading of data. I still chose to use a cloud based backend service, instead of a local database, as I see potential possibilities to expand the app with more user interacting features. To input data I have created a locally hosted website, where I use JavaScript to input the data.

As for the app itself, I have programmed everything in C#, using Xamarin Forms. Unlike my previous app this could share most of the code, and I just had to write some code for communication with Parse for all three platforms. Other platform specific features I needed, such as location, I found third-party packages to use.

If you want to try the app, and you’re in Norway, you can get it at the app store of your phone:

[App Store](https://itunes.apple.com/us/app/din-lokale-dyrlege/id982914308?l=nb&ls=1&mt=8)

[Google Play Store](https://play.google.com/store/apps/details?id=org.leiflarsen.thelocalvet)

[Windows Phone Store](https://www.microsoft.com/store/apps/9NBLGGH5K1S1)
