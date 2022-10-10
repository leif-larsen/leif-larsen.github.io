---
title: "Moving away from Parse"
date: "2016-04-29"
---

As I wrote in my post, [Cloud based back end service](http://blog.leiflarsen.org/cloud-based-back-end-service/), I have been using Parse for data storage for my two apps, "Din Lokale Dyrlege" and "Parker Gratis". Now however, it is time for a change. Not because I want to, but I am forced to do so, since [Parse is shutting down](http://blog.parse.com/announcements/moving-on/).

##New options

Before deciding how to proceed, given that I had to change something, there is several factors I have to consider. Parse open-sourced their server, so one option is to set this up myself, and run the service at my own terms (or rather at some host's term). The big plus to doing this will then be that it would require almost no change in my apps. The downside being that it would require maintenance from my side (server-side that is), and I will have to spend time keeping up to date on potential security flaws and other bugs. Another downside is that it will most certainly cost more than the revenue from the apps is (which is practically 0..!).

So from that I see at least three things I need to consider when choosing what to use next; Cost, maintainability and how much it would affect my apps as they are today (both in terms of performance, but also in terms of how much code I will have to change).

The next option to consider is using another cloud provider, for similar services as Parse provides. This would obviously require me to rewrite Parse specific code in my apps, and also transfer all data to a new provider. One such alternative I have been considering is Microsoft Azure, as I already have some free credit there each month. Using Azure I could get the back-end side up and running fairly quickly. This then comes out as a viable option.

The final option is moving to a hybrid solution, consisting of local storage, which can pick up new revisions online, if it exists (can also be just local storage). This is probably the option that would require most work on the apps itself, but it would not cost much.

##My choice

With several options to choose from, there is a need to consider what's best for both my apps. The conclusion for me is twofold.

For "Din Lokale Dyrlege" I have decided to use the last option. Parse has the option to export all data into a JSON file, which is convenient to work with. To add more vets to the app, I will have to make small adjustments to the web app I wrote, for that task, in the first place. It will require some work on the app itself, however if I'm completely honest with myself, there is no need for a cloud based storage for that app. It may even increase performance of the app if I have local storage. Also I can host the JSON file on my web server, which opens the possibility for the app to download the file, if there is any updates to it.

The other app I have, "Parker Gratis", has not seen the user input I had hoped, and as such I have made a decision to shut it down. I will download all the data and make it available in the app, for all those who have the app, but I will take it down from the app store.

As for geo spatial functions, which has been provided by Parse, I have found a package from nuget, which provides me with all the functions I need, so it won't be too much of a hassle to rewrite that functionality. At least I don't have to reinvent the wheel!

So now I guess it's time to start the work!

Are you using Parse, and if so, how are you proceeding with the shutdown?
