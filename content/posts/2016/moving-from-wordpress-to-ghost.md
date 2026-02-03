---
title: "Moving from WordPress to Ghost"
date: "2016-04-10"
---

Last week I [introduced](http://blog.leiflarsen.org/relaunching-the-blog/) my new blog, powered by the Ghost blog platform. Coming from a WordPress background, I had to do some work to get all my posts, as well as comments imported to the new blog. Seeing as I also put the new blog onto a subdomain, there was a few tricky parts during the setup. This blog post will take you through the steps required to make the move from WordPress to Ghost.

## Setting up Ghost

The first step is to install [Ghost](https://ghost.org/). There are generally two ways to go on to do this. The first - and probably easiest - choice is to host the blog using Ghost Pro. This is a basically hosting the platform on servers maintained by the creators of Ghost. This option costs a bit of money, which goes into funding further development of Ghost.

The other option is to host it yourself, or using a web host somewhere in the world, like you would use for any other blog platforms. Ghost is open source, so you can freely use the platform. For me this was the way to go, as I like to have some control of server configuration etc.

As my (now old) blog was hosted on a shared web hotel, I couldn't just install Ghost there. I would have to purchase some upgrades. I found that it would be easier to host the blog using Microsoft Azure, which would end up about the same pricewise (fortunately for me I have credits in Azure to cover this each month). The installation process was very smooth, at least when I found a [blog post](http://www.hanselman.com/blog/UPDATEDFor2015HowToInstallTheNodejsGhostBlogSoftwareOnAzureWebAppsAndTheDeployToAzureButton.aspx) from Scott Hanselman describing the process. If you decide to take this route, I'd suggest to read his post, as it would be a waste of words to repeat what he has already written!

## Exporting WordPress posts

At this point the new blog should be up and running, but only the "Hello, World!" post is live, and it feels quite empty. The next step is to import posts from WordPress into Ghost. Over at [Ghost for Beginners](https://www.ghostforbeginners.com/how-to-transfer-blog-posts-from-wordpress-to-ghost/) they have a great post on how to do this, and again I won't repeat the entire process.

I do however need to point out some of the hiccups I had when doing this, which is not explained in that post.

The first and most annoying thing was an error in the JSON file. When I first tried to download it, it only contained some pages and posts, and I couldn't really understand why. It did also seem to be cut at a random place. I decided to inspect the output in the browser window, which was where I realized that all the content was there. The only problem was that some special characters from a plugin acted as a closing tag, and as such the rest was treated as code, and not printed to the JSON file. I quickly found the plugin and page causing that trouble, and disable it while I did the export. Fine at last!

The next issue I ran into was in relation to images. Obviously I had previously installed a gallery plugin for WordPress, which caused all sorts of links to images. This meant I had to open the JSON file in a text editor and manually replace image links (boy am I glad I had search-and-replace-all). This didn't take too long though.

The last trouble I had was actually finding the import button. In the blog post, mentioned above, the tell you to visit http://YOURBLOG/ghost/debug to import the JSON file. This is not correct anymore, instead you need to go to the "Labs" tab in the admin menu. When I found this the import process was quick, and I had all my posts, pages and images as expected. Then it was just a question of removing pages I didn't want to have and moving on to updating posts.

## Style and code tags

For my blog I decided to purchase a theme. The theme I found matched all my requirements, with one exception. The exception being code formatting. Blogging about technology and programming, there is a certain need to be able to present code in a good manner. Ghost do have a built-in code tag, but I quickly realized that it was mostly good for one-liners, such as `echo "Hello World!";`

For bigger snippets I would need something more. This is when I found [Prism](http://prismjs.com/) (no, not USA's surveillance program). This is basically a JavaScript and CSS library, where you can configure languages you need, and implement it into your code. It makes formatting code in blog posts a dream.

```javascript
function() {
   console.log("This is a JavaScript example");
}
```

It was really easy to implement this into the chosen theme. A bit of work to convert all my old posts is required, but that's ok.

## Migrating comments

I think the hardest part of the transition was to get the comments correct. As you may have read in the post from Ghost for Beginners, this involves moving comments to [Disqus](http://disqus.com) and setting that up. Fortunately for me I did this a while back, so that part was ok. What really screwed me over for a while was the fact that I put the new blog at a subdomain instead of my top domain. I also changed the permalink structure, so a few issues with Disqus occurred. Nothing to difficult to fix, but a bit of an annoyance.

The problem with changing permalink structure and moving the blog to a subdomain is that comments is mapped towards a given URL. So if you haven't changed any of this, you may not need to read the rest of this section.

To fix the change from top level to a subdomain I had to use the "Domain Migration Tool" over at Disqus. This moved all the posts to the correct domain (at least after a while), but still there was an issues with the permalink structure. The solution to this problem is using the "URL Mapper", also at Disqus. In the process a CSV file will be created, containing all the links for all discussions. URL's will need to be linked to the correct URL. As an example `http://blog.leiflarsen.org/2016/example-post` would have to be changed to `http://blog.leiflarsen.org/2016/example-post,http://blog.leiflarsen.org/example-post`.

Note the comma separator in between the two links. All links that either are correct, or doesn't need a change (for example if it doesn't contain any comments), can be removed. When this file is ready it can be uploaded to Disqus, and within 24 hours it should update all posts with corresponding comments.

## Redirects and the way forward

The last step in the process (at least for me, since I changed domain) is to setup redirects on the old domain. This is important, so all old links (on Twitter, other sites, Google search results etc) will take you to the correct site. I found a plugin for WordPress which does this, and although it's a manual job setting up redirects for all posts, it seems to be working fine.

So what are my next steps? Well, now I finally have the blog up and running, using a platform entirely focused on blogging. As for my main domain I will create a portfolio and use for contact information and such. I have not yet decided if I'll stick with WordPress for that, but I guess I'll do that. Mostly because I don't want to create manual redirects (so if you know of a way to redirect all blogs posts from the old domain to the new one, without creating a file for each, please let me know!).

I hope you find this walkthrough useful, and maybe you'll take the leap from WordPress to Ghost. I can recommend it!
