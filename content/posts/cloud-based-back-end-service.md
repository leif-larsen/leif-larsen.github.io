---
title: "Cloud based back end service"
date: "2015-10-04"
---

When working with mobile applications (or applications in general) there is often a need to store and retrieve data. For informational apps you could simply have a local database, with all data present. However when developing apps for smart phones (and tablets) you need to consider the size of the app. You don’t want to store a lot of data, when the user might need only a subset of it. Naturally this is dependent on how much data you have to store, but for this post I’ll focus on apps that stores a greater amount of data. I’ll talk a bit about storing data in the cloud, my go-to back end service ([Parse](http://www.parse.com)) and I’ll mention some of the other, big competitors in this field.

Cloud based storage has grown a lot over the last years, and more and more apps and services take advantage of the technology. One of the big advantages with cloud based storing is that data is easily available everywhere. By this I mean both in terms of location (everywhere where you can connect to the internet), and also in terms of different platforms. An app can be created for smart phones, tablets, desktop, web etc., and the data is available on all platforms. By using cross platform development you also get the added benefit of developing access to data once.

One of the biggest drawbacks of cloud storage is that you don’t have the complete control over your data (unless you setup your own cloud service). This can be a problem, specially if you develop enterprise level applications, but also if you store a lot of personal data. I guess it all depends on whether or not you trust the service provider. They spend a lot of time convincing customers that they are safe, and I believe that if you use a serious provider that it is ok. Do spend some time considering this though when choosing a cloud service provider.

Cloud based back end services does not only provide storage. Several offers possibilities to schedule recurring tasks, using targeted push notifications and also add app analytics. Using a cloud based service it is simple to scale if you need to. I don’t have much experience using the cloud, but I used it for my app [Parker Gratis](http://www.parkergratis.no), where users can add entries, and fetch data based on location. For this I used Parse, which I will also be using for my next app.

Parse have three main areas they focus on, which is Core, Push and Analytics.

Core is where you store and retrieve data. This is where you schedule background jobs and where you can manage your global app settings with Config.

With Push you can increase user engagement (at least that’s their selling point!), by sending push notifications across devices and platforms.

Analytics is a great feature, where you can track events or data points in your app in real time. This is brilliant to understand how users interact with your app, and to analyze crashes.

Parse sets out to minimize the time you use for infrastructure work, and maximize the time you spend on user experience. They have SDKs for a wide variety of languages, and they have starter projects in cases where you start a new project. I have leveraged these possibilities to create cross platform applications using Xamarin with C# and .NET, and also web based application using HTML and JavaScript. Other languages include PHP, Objective-C, Swift and Java. A new SDK they recently added, which is highly relevant today, is for IoT using Embedded C. The pricing model is also fair. You have a certain limit for free, and when/if the need to upscale comes you pay for what you need, on a monthly basis.

**Note! I have no affiliation to Parse, I just like their service.**

There are plenty of other cloud services on the market as well. Another I have tried is [Microsoft Azure](http://www.azure.com). They offer many products on the side of storage and analytics. Amongst others I want to mention virtual machines, CDN (Content Delivery Network), media services and load balancing. Another big one is [Google Cloud Platform](https://cloud.google.com/), which also seems to have some nice features as well. The last I want to mention is [Amazon Web Services](https://aws.amazon.com/), which I think was quite early with cloud based services. They offer many products, and might be worth looking into.

There’s a lot I haven’t covered in regards to cloud services, but I hope this can spark an interest. Possibly you are already using cloud services, in which case I would like to know more on how you use it. And please do share other providers if you know of any.
