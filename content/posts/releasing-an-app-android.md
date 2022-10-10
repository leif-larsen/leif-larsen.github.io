---
title: "Releasing an app   Android"
date: "2016-01-31"
---

Last week I wrote the first post in the “Releasing an app” series, [on Windows Phone](http://blog.leiflarsen.org/releasing-an-app-windows-phone). Originally this week was to be about iOS, however due to some technical trouble, I have temporarily lost all the screen shots I had prepared. Therefore, I will do this week’s post on releasing an app, developed with Xamarin Forms, for Android.

As you will see through this post, the release process for Android is, at least in my opinion, the easiest of the three. It also has some nice features, which makes it really easy to go through test phases before production release. It is also the process that is the quickest, but this also have its disadvantages.

Throughout this tutorial I will assume you already have setup a Google account. I’ll also assume you have registered for a publisher account. This costs $25, and can be done from [Google Play Store](https://play.google.com/apps/publish). Also a short apology; When I went through this process, and documenting it with screen shots, the language in Google Play Store were set to Norwegian, so all screen shots have Norwegian text. I have done my best to translate the important parts, so hopefully you will get what I mean!

Now, like with all applications, it is important to test it before you release. I highly recommend that you test the app in both debug and release mode. Also you should test it on an actual device in release mode, you might find you miss some permissions. For instance, internet permissions are something that is automatically given in debug mode, however you need to explicitly ask for it, via the Android Manifest, in release. I learnt that the hard way.

So your app is thoroughly tested and you’re ready to release it, what do you do? I suggest you head over to Google to prepare the app submission first, and focus on creating the app package later.

![Create new app listing in Google Play Store](/img/2016/02/Skjermbilde-2016-01-16-kl.-12.58.10-300x166.png?fit=300%2C166)Head over to [Google Play Store](https://play.google.com/apps/publish) and click the “Add new app” in the top right corner. This will open a window for you to fill in the title of your app, and select the default language of the app. They also ask what you want to start to do, and you want to start with “Prepare app listing”.

With this done you will see a few steps you need to execute before you can release the app. On the page that is open by default you need to fill in app title, a short description and a complete description. You need to upload at least two screenshots of your app, and a maximum of 8. You will also need to upload an icon and a promotion picture. You can also add more promotional pictures if you’d like. At last you need to select the type of app, the category and content rating. You will also need to fill in at least an e-mail you may be contacted on, as well as a link to some privacy policy if you have that.  
[![](/images/AppListing2.png)![](/images/AppListing3.png)![App listing contact info and content rating](/img/2016/02/AppListing3-150x150.png?resize=150%2C90)](/img/2016/02/AppListing1.png)

 

 

 

As you may see you’ll need to complete a content rating, to set the appropriate age level for your app. When you start this process you need to give your e-mail, for communication related to the rating. Following this you need to choose the top level category your app falls under. Then you need to fill out the questionnaire, truthfully! With this done your app will be assigned with a age limit.

The last step you need to do before uploading an app package (you can upload the package before, it just depends on your workflow) is to set pricing and availability. If the app is free you obviously don’t need to set a price. If the app cost something, you will need to set a base price. You will then go on the select the countries in which the app will be released to. For quite a few of the countries available you can set a different price than the default price. Further down on the same page you need to check some checkboxes if you have ads in your app, if it is for families/Google Work/Google Education, as well as agree to some terms and conditions and export laws from USA.

Now that we have our app listing ready in the Play Store, you need to create the app package, also known as APK. First of all, you want to do add a conditional statement in Xamarin, so you turn off debug for the release build. You can do this by adding the following to your “AssemblyInfo.cs” file:

`#if DEBUG [assembly: Application(Debuggable=true)]` `#else [assembly: Application(Debuggable=false)] #endif`

[![Archive for Publishing menu choice](/img/2016/02/Skjermbilde-2016-01-16-kl.-12.53.05.png?fit=266%2C258)](/img/2016/02/Skjermbilde-2016-01-16-kl.-12.53.05.png)The next thing you need to do is build the app APK file, which is the file you will upload to Googles Play Store (I assume app icons etc. is in place already, as well as permissions in the AndroidManifest.xml). You can do this by selecting the Android project (in Xamarin Studio), go to the build menu, and select “Archive for Publishing”. When this process completes you are presented with a list of the archives available, where the platform, name of project, version, creation dates and optional comments is shown. In the comment field you may put in a comment, so you can easily identify the new features of the release, or other information you want, when you have a bigger list of archives.

[![Archive with all the release packages](/img/2016/02/Skjermbilde-2016-01-16-kl.-12.53.12-300x136.png?fit=300%2C136)](/img/2016/02/Skjermbilde-2016-01-16-kl.-12.53.12.png)

The next step you need to do is to “Sign and Distribute” the app, but before we get to that, let us take a short detour to make sure we have registered what we need in [Google Developers Console](https://play.google.com/apps/publish/#ApiAccessPlace). This will take us to a page for API access. You’ll need to click on “Create a new project”, and then click on “Create OAuth-Client”. Fill in the information they ask for, and you will have a client ID available. If you click on the link next to it (something like “Watch in Google Developer Console”), you will be taken to a new page with your credentials. Click on the newly created OAuth client ID, and you will be taken to a page where your client ID and client secret is. Take a note of this, because you will need it later.  
[![OAuth client id](/img/2016/02/Skjermbilde-2016-01-16-kl.-13.20.24-300x82.png?fit=300%2C82)](/img/2016/02/Skjermbilde-2016-01-16-kl.-13.20.24.png)

Now it’s time to go back to Xamarin Studio, where we will go through the process of signing and distributing our app. Click on “Sign and Distribute” in the bottom right corner of the archive list view. In the first pop-up window you will need to enter the client id and secret you just created. Click “Register”, and if no typos were made, you should see that it succeeds, and you can move forward.

In the next view you are able to choose which account you want to publish your app to, as well as which track to upload it to (Alpha/Beta/Production). I suggest rollout to one of the testing phases at first, even if you are the only one to test the app. Being able to test the app from Play Store can be valuable, in terms of finding bugs you haven’t encountered in the development environment. When you click “Next” you will be taken to the signing page. If you haven’t already created a key, you will need to create it by clicking the “Create a new key” button. This process should be fairly self-explanatory, just make sure you set the expiration date later than 2033.

Now it’s time to upload the app package. The first time you upload the package you will need to manually upload the file. In that case you should select “Ad-Hoc” in the Distribution channel. The next uploads can be done by choosing “Google Play.

To upload the app package manually you need to be in the app page in Google Developer Console, where you entered your app info. Click on “APK”, select the track you want to upload to, and click “Upload new APK”. If the upload succeeds you are ready to publish the app, to the track you uploaded it to. Do this by clicking “Publish app”, in the top right corner. If this is in any of the test phases, you will be given a link where you can reach the app, and any external testers will be sent an e-mail with the information they need. If this is the case, you can easily update the app to the next test phase or production, if all tests succeed. If not, it is on its way to the Play Store. Either way, it will take a few hours before it is ready and visible in the store, or for the testers.

One disadvantage, at least in my opinion, compared to release of an iOS app is that it doesn’t go through any verification by Google employees. You have the responsibility to test the app, which is good, but you may have bugs you haven’t discovered in testing, which may occur in release (naturally you have tested your app well, so bugs doesn’t exist, right?) One can argue that because of this you should always go through at least a beta test phase, and that it is positive that the release is so quickly done. But it is something to think about.

That is it for now, I hope this was understandable and usable. Next week I’ll be going through the release process for iOS, so make sure you don’t miss that!
