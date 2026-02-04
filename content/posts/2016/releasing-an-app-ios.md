---
title: "Releasing an app   iOS"
date: "2016-02-07"
---

In this last post in this series we will take a look at the process of releasing an app for iOS, after development with Xamarin Forms. Over the last few weeks I have gone through this process for [Windows Phone](http://blog-leiflarsen.org/releasing-an-app-windows-phone) and for [Android](http://blog.leiflarsen.org/releasing-an-app-android). In terms of what you, as the developer, need to do, the release process for iOS is not much different than the others, especially for Android. You need to fill in information on the app, build the app for release and upload the app. Apple does have their own quality control though, so when you submit the app to release, it will take some time before it’s released, since they have someone testing all app submissions. When you think about the amount of app submissions they receive each month, you can imagine it may take some time to get through this phase. So please be sure you have filled out everything correctly – it is rather annoying to wait a few days, up to a few weeks, just to have your app rejected due to silly mistakes.

As with the previous posts in this series, I will assume that you already have an Apple Developer account. Also I will assume that if you’re releasing a paid app you already have filled in the correct forms to receive payments from Apple.

Like before you’ll want to create the app at Apple as early as possible, to make sure the app name is reserved. You can also go through the steps of inputting app description and other informational stuff while doing this, so I will take you through that now. Start by heading over to [iTunes Connect](https://itunesconnect.apple.com), and log in with your Apple Developer Account. On the first page you are presented with a menu, and you need to choose “My Apps”, which should be the one in the top left corner. Now you will be taken to a page where you can see apps you already have, as well as add new ones. So let’s go ahead and do just that. Click on the “+” icon on the left side, right beneath “iTunes Connect” and select “New App”. You will be presented with a window that asks which platform this is for, name, primary language, a bundle ID and a SKU.

[![New app first screen](/img/2016/02/NewApp-256x300.png?fit=256%2C300)](/img/2016/02/NewApp.png)

The name and language should be self-explanatory. The bundle ID is something you will need to create in the Apple Developer Portal. It should match what you have in your “info.plist” file, so typically something like “org.DEVELOPERNAME.APPNAME”. [This guide](http://www.aquafadas.com/en/documentation/article/creating-the-bundle-id) will take you through creating a bundle ID. The last field, SKU, is a field that is unique ID for the app, not visible in the app store.

After you have created the app, you will be taken to a page with localizable information. This is where you can set the app name for different languages, and give some general information, such as privacy policy URL, category and rating. Remember to click “Save” on the right hand side, if you make any changes! If you look to the left there is a menu, and the next step will be to set the “Pricing and Availability” information. You can set a price schedule, so you could start with having the app free for a few weeks, and then set a price at a given date. You can also select which countries the app should be available in, and also if it should be available with Volume Purchase Programs.  
[![Set price](/img/2016/02/Pricing1-300x204.png?fit=300%2C204)](/img/2016/02/Pricing1.png)

 

 

 

 

The next thing you want to do is to start prepare a release for submission. Do so by selecting “1.0 Prepare for Submission” in the menu on the left side. This is where you prepare the submission by adding screenshots, app description, contact information and the app build itself. So let’s go ahead and add all this.

![Submission page part 1](/img/2016/02/Submission1-300x223.png?fit=300%2C223)The first thing you are asked to input is screenshots. What I normally do is I take a set of screenshots from the iOS simulator, then I head over to [LaunchKit.io](https://launchkit.io) and automatically generate screenshots for the rest of the sizes. A basic version of this service is free, and should give you what you need, screenshot wise. Moving on you want to enter a good description of your app, along with some keywords to find your app in the store. Also you should provide![Submission page part 2](/img/2016/02/Submission2-300x136.png?fit=300%2C136) a URL where your users can get support, and optionally a marketing URL. The “Build” section will be the last piece, which I will cover later. Next is the general app information, where you should upload an app icon, give some copyright information as  
well as give some contact information. You can also provide some information to the testers from Apple, if your app requires special instructions. The last section is where you can decide if the app should auto release after the review, if it should be released earliest a specified date or if you manually should release it.  
![Submission page part 4](/img/2016/02/Submission4-150x150.png?resize=150%2C150)

![Submission page part 3](/img/2016/02/Submission3-150x150.png?resize=150%2C150)

 

 

 

Now to the last part you need to do; build the app package and upload it to the app submission. From Xamarin Studio you’ll want to select “Release” and “iOS Device” as the target. Make sure you have specified the app name, and bundle ID, mentioned earlier, in the “info.plist” file. Also note that for every new build you upload, you must update the build number in the same file. Moving on you need to go to the build menu, and select “Archive for Publishing”, as we did for Android. If the build succeeds, you will see a page with the build on it. Select it and click “Sign and Distribute”. You will then need to select a “Provisioning Profile” for the app. Xamarin provides a good guide how to setup this at their [site](https://developer.xamarin.com/guides/ios/deployment,_testing,_and_metrics/app_distribution/app-store-distribution/). This will go through some magic. When this process is done you have the option to publish. Select “AppStore” as the distribution channel, and select the correct “Provisioning Profile” and “Signing Identity”. Then you will need to save the output “IPA” file, preferably at a location that is easy to locate. When you get to the window stating “Publishing Succeeded”, you should click “Open Application Loader” to upload the app. In application loader make sure you have selected “Deliver your app”, and click “Choose”. Select the newly created “IPA” file, and when it has been processed click “Next”. This should upload the app to iTunes Connect, a process which will take a few minutes, depending on the size of your app.

When the file upload is done, the app will go through some processing at Apple before it’s ready. You will be notified by mail (unless you have opted out of such mails, I guess) when the processing is done. When it is done, it is time to head back to iTunes Connect and the submission we were working on earlier. With the submission selected scroll down to the “Build” area, and select the newly uploaded build. That should be it, and when you save the submission you are ready to submit the app. This can be done by clicking “Submit for review”, in the top right corner. After you have done this, it is time to sit back, and patiently await the process to take its time. The last few submissions I have made have taken about 3 days, however my first few took about 2 weeks, so I guess it depends on the amount of work the testers at Apple has.

With that I conclude this post, and the series “Releasing an App”. I hope all posts have been understandable and easy to follow, and I hope this may help you with the release process. I’d be very interested in getting some feedback on these posts as well, so any comments would be appreciated (both good and bad, as long as it’s constructive!).
