---
title: "Git command line cheatsheet"
date: "2016-06-05"
---

All my life I've been using graphical user interfaces for applications that have provided it. It's been quicker to get into, and I have never really liked the command line. What I've noticed lately is that I've been trying to use the command line more. Just typing commands, instead of moving the mouse all over the screen, is generally quicker, which makes me more productive. This post is a reference for Git commands, mostly for myself, but hopefully others might find it useful as well. So lets dive right in!

For all this to make any sense, Git needs to be installed on your system. Downloads for Git can be found [here](https://git-scm.com/download/). I have both bash and gui installed.

##Tell git who I am: Basically these commands tells Git what name and email to associate with any given commits. These commands is done on a global level, meaning they will be valid for any repositories. `git config --global user.name "Sam Smith"` `git config --global user.email sam@example.com`

##Initialize: The following command initializes a repository inside of the current folder. This should be done if you have just created an empty repository on a remote server. `git init`

##Add remote access If you have created a repository at GitHub or Bitbucket or something similar, you can connect to that repository by using the following example: `git remote add origin https://github.com/USERNAME/PROJECTNAME.git`

##Clone repo: To clone an existing repository from a local folder use the following command: `git clone /path/to/repo`

Or if you want to clone from a remote repository: `git clone USERNAME@HOST:/path/to/repo`

##Add files:

Add specific files to the current changeset by using the following command: `git add README.md`

Or use the following to add all new files in the folder: `git add *`

##Commit: To commit all changes locally use the following command: `git commit -m "Comment"`

And use the following to commit all new files added and all changes to existing files. `git commit -a "Comment"`

##Push code: To push committed code to the origin, use the following: `git push origin master`

##Pull code: To make sure you have the latest code, pull it from the origin by using the following command: `git pull`

That's it for now. I will probably update this post later with branching and merging related commands, once I start to use those properly.
