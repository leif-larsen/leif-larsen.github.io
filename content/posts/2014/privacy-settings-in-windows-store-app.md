---
title: "Privacy settings in Windows store app"
date: "2014-04-12"
---

So recently I been working on finishing my first Windows store app. This app (which I will tell more about when it? been released) needs connection to the local network. This meant that this was a permission I would need to get from the user.

Thinking that since I did not store any data from the user, it would not need any privacy policy. This turned out to be wrong, and as I submitted the app, it only took a few hours before the feedback was “rejected”. The notes I got was the following:

> The app has declared access to network capabilities and no privacy statement was provided in the Windows Settings Charm.

The solution to this was to create a new page on my domain, add a privacy policy and then add this to the Windows Settings Charm, as well as submit it in the description to the store. To add this to the Windows Settings Charm I found this blog entry, which explains it quite well. Click [here](http://jimiz.net/2012/12/privacy-policy-windows-store-apps/#axzz2yfnVEnWJ "How to add privacy policy to Windows Settings Charm") to see the blog.

As a policy I submitted the following:

> This application does not share personal information with third parties nor does it store any information about you.  
> This privacy policy is subject to change without notice and was last updated on April 12th 2014. If you have any questions feel free to contact me directly at me@leiflarsen.org.

In my opinion that should be enough, seeing as the app does not really does not store anything. Then it´s just to wait and see if Microsoft feels the same way.

\[EDIT April 14th 2014\]  
I can now confirm that the policy text was enough, as my app was released just today.
