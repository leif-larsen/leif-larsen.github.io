---
title: "XMLRPC and Windows Live Writer"
date: "2015-10-18"
---

At the time of writing this blog post, I am flying home from London. Me and my SO have visited London at least once a year the last few years, so it has become a tradition. This year we had a shorter weekend trip, primarily to go see Hamlet. It was fun trying something new, as we haven’t seen a theater play before, but that is not why I’m writing this post.

When I’m not at my primary computer, and can use the browser to blog, I like to use Windows Live Writer. I find it to be a great tool, with some nice features, and it is also easy to setup with a WordPress blog. When WordPress was updated, a few updates ago, Windows Live Writer stopped working. More precisely, I were not able to connect to my blog, not able to load any blog posts and not able to save offline drafts to my blog.

Windows Live Writer was complaining about not finding or not being able to access xmlrpc.php. This is a file that makes it possible to blog remotely (which is what we do when using a tool such as Windows Live Writer). I did some research on this, but there wasn’t too much regarding this. At first, all I could find was guides stating that remote blogging could be enable from the WordPress settings, however recent updates from WordPress had that turned on by default, with no options to turn it off.

Further investigation led me to a forum post (on the WordPress support forum) describing this exact issue, with a possible solution. The solution is quite easy, you just have to rename the file in question (xmlrpc.php), perhaps by adding a pre- or postfix to it, and then update the address in Windows Live Writer (or other blog tools you might be using). So for instance you could call it “wp-xmlrpc.php”, and update the settings with that name, which should work.

I should mention that this solution worked for me, however I am hosting my blog at a web host, and not at WordPress.com, so I am not sure whether this is an issue there and if so, if this is a fix that is possible. One explanation on why I could be seeing this issue is that my web host might be blocking xmlrpc.php, since there has been a lot of brute force attacks on that file in general. I might have to ask my web host ![Smilefjes](/img/2015/10/wlEmoticon-smile.png?w=1090)

Anyway, some considerations should be taken when using remote blogging, and renaming this file. As Wordfence describes in [this](https://www.wordfence.com/blog/2015/10/should-you-disable-xml-rpc-on-wordpress/) blog post, there have been a lot of brute force attacks aiming for this file lately, and as such, you should take action to make sure your [WordPress installation is secure](http://leiflarsen.org/2015/securing-your-wordpress-installation).
