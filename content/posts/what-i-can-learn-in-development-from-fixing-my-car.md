---
title: "What I can learn in development from fixing my car"
date: "2016-07-23"
---

A few weeks back I had a problem with my car. The windscreen wiper wouldn't work, or it was rather slow when it did work. Being an older model car, I figured I could probably fix it myself. Long story short, I did fix it myself.

After I had fixed it, I started to think about the process I'd been through. Interestingly enough I discovered that there were at least a couple of things, which I could relate back to software development.

##Trusting the web One of the first steps I took, was naturally to google the issue I had. I found quite a few people that had experienced the same issues, from way back in time, until more recently. Of all the reading I did, there seemed to be two things that seemed to be the likely cause of the problems; The engine of the wipers or the power coming to the engine. It was rather easy to prove that it was not the power, and as such everything suggested it was the engine (I also had mechanical friends telling me the same).

I went ahead and ordered a new engine, which arrived a few days later. By using YouTube it was easy enough to dismount everything necessary. I put everything back together, and to my surprise it still didn't work.

So what could I have done different so far? I used Google, like I would for development problems. All the threads I read stated the same solution for the problem, but looking back I should have done more debugging. If I had done some more checking up front, I would probably have noticed that the wiper stag had rusted, and couldn't move at all. In todays society we use Google for a lot, which in most cases is fine. However, as I learned you should always do some debugging first, and not just trust search for solutions to the symptoms, without having an idea of the cause.

##Releasing too early The second thing I learned was that you shouldn't count yourself as finished before you have tested properly. When I mounted the new wiper engine, I just gave it a quick spin, to see that the power came through, which it did. Naturally I thought everything else was ok, and mounted everything back together. When I started the car, and tried, I discovered that the wipers still wouldn't move, and I had to dismount everything again. This is when I found out that the real problem was the stag being rusted, and I bought a new one.

Everything worked out fine this time around, but before I closed up, I verified that it was working. For software development this can related in terms of deployment packaging. By that I mean that you shouldn't just create the deployment package and ship it, you need to, at the very least, do some smoke testing to verify that it works as it should. I could have mounted the moving parts without closing the hood, and been able to see that it didn't work as expected, and it would have saved me some time. The same goes for development, and as we all know, time = money. So do your testing!

##Summary In the end everything worked out fine for me and my car. Not doing proper debugging beforehand and testing afterwards costed me some extra money, and some time, but that was just a minor annoyance. That may not be the case when fixing bugs in applications, and as such we should have the things discussed in this post in our minds.

Do you have any situations from life which you could relate to software development? I'd love to hear it!
