---
title: "Releasing an app   Windows Phone"
date: "2016-01-24"
---

Seeing as my new app, [“Din Lokale Dyrlege”](http://blog.leiflarsen.org/new-app-released), was released last week, I thought I could go through the process of releasing an app. I released this app for iOS, Android and Windows Phone, using Xamarin Forms to achieve cross-platform development. This meant I could program once, and utilize most of my code for all three platforms.

Now the interesting thing is going through the release process. It can be quite “confusing”, and not completely straight forward to release an app, maybe even more so if you use Xamarin Forms. This post is the first, in a three-part series on releasing apps created with Xamarin Forms. Naturally the release process is similar if you release for Xamarin.iOS, Xamarin.Android or Windows Phone separately, and it’s just a few additional steps compared to native development. I have chosen to start this series with the guide for Windows Phone, as Xamarin doesn’t have any guides for this yet.

Before I move on, I’ll assume you already have a working app, which compiles and runs without errors (at least without critical, app crashing errors). I’ll also assume you have artwork for app store images, and potentially marketing images, if you have that.

We want to start with doing a few things in Visual Studio. This is to ensure that we pass a few tests and also that we have images we will need. Let’s start with the screen shots. When you submit an app for Windows Phone, you will need to provide at least one screen shot. I recommend you take screen shots for the sizes 768 x 1280, 720 x 1280 and 480 x 800 px. This is so we can add them to our app for automated tests. You can easily do this by using the Windows Phone emulator.  
[![Screen shot Windows Phone Emulator](/img/2016/01/ScreenShots-300x266.png?fit=300%2C266)](/img/2016/01/ScreenShots.png)

Next we want to do some initial testing, which will make the submission a bit quicker, because we then have already verified some parts of the app. Start by opening the Windows Phone Store Tester Kit (select the project you want to test, open the “Project” menu and select “Open Store Tester Kit”).  
[![](/images/2016/StoreTestKit2.png)![Store Test Kit image 2](/img/2016/01/StoreTestKit2-300x73.png?fit=300%2C73)](/img/2016/01/StoreTestKit.png)

In the “Application Details” tab you’ll need to input store tile image, screen shots for WVGA, WXGA and 720p. In the “Automated Test” tab you’ll need to run the automated tests. These will evaluate the app against the submission requirements. If everything passes, you’re good to go. You can also run the application analysis tool to optimize the app as well as manual tests. There is a lot of the manual tests though, and not all will be relevant for your app.

Next we want to go [Windows Dev Center](https://dev.windows.com/en-us). For the sake of length (and also the fact that I registered a long time ago, and can’t remember the procedure) I’ll assume you’re already registered here. Anyway, you’ll want to go to the dashboard, and register a new app. When you’re in your dashboard, you’ll want to click on “Create a new app” under “My apps” on the left side. Then you register the name of the app (make sure you check the availability for the name). This step may be wise to do when you start development, if you have a common name for the app.

[![](/images/2016/NewApp2.png)![New app submission](/img/2016/01/NewApp2-300x129.png?fit=300%2C129)](/img/2016/01/NewApp1.png)

When this is done it’s time to start the submission process. Under “App overview” click on “Start your submission”. This will take you to a submission page, which has a few steps you need to finish before you can submit the app. These are all steps that can be saved, and you can come back to this later. Say you input some description early, but need to wait for testing before you upload the app package. When you have finished all steps, you can click on “Submit to the store” to start the submission process.

[![](/images/2016/Submission2.png)![App submission page](/img/2016/01/Submission2-300x170.png?fit=300%2C170)](/img/2016/01/Submission1.png)

So as you see the first option is “Pricing and availability”. This is where you decide the price (or if it is for free), as well as which countries it should be available in. Note, if you are taking a fee for the app, you’ll need to fill in some additional information for Microsoft, so you can receive payments legally. This is not something I’ll be covering in this post. On this page you can also decide if you want to have sales, decide visibility in the store, volume licensing for organizations and the release date. When it comes to the release date you can choose to automatically release it when it passes certification (which is the default), release it manually after it has passed certification or the last one no sooner than a given date.

The next page is the app properties. This is where you set the category and subcategory, age rating (where you can set different ratings for different countries), what hardware is required by the app, as well as some declarations.

Packages is the page where you post the app packages. This is just the release build from Visual Studio. Make sure you are logged in with the same account in Visual Studio when you build the app, as the one you’re releasing the app with. The file you need to upload is the projects “xap” file, which can be found under the release folder (given that you have built a Xamarin Forms app, which has shared code). Just upload this file, and move on to the next tab, which is “Description”. You can create descriptions for several different languages, so you can localize your app. This is where you’ll fill in release notes, app description, tile icon, screen shots and promotional artwork. You should also add keywords, copyright info, website, support contact information and if needed, link to a [privacy policy](http://blog.leiflarsen.org/privacy-settings-windows-store-app).

The last page you can go to is optional. This is if the testers at Microsoft needs more detailed information or a test account for test purposes. For instance, in my last app, there was no veterinarians in the US (since it’s a Norwegian app), so I specified a few places for the testers to search for, so they could see some more interesting stuff than just the first page. Like I said, this page is optional, so if there is no need for additional information to the testers, this could be left empty.

When all this is finished, you may submit your app. It should go fairly quick to pass the certification (at least if you pass all the requirements), as an illustration of that, my last app took about 6 hours before it had passed. You will be notified along the process, so if the certification fails, you will know, and if it succeeds, you will be given the link to the app in the store. Note, it will take up to 16 hours for the app to be visible in the store after the certification has passed.

So that’s it for submitting an app for Windows Phone in the Windows Phone Store. Next week I’ll cover the same process for iOS and the Apple Store, a bit more tedious process in my opinion.
