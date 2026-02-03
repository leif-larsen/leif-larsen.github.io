---
title: "Securing your Wordpress installation"
date: "2015-09-20"
---

I am using WordPress as my blog platform, as I find it to have all the features I need. As I have seen some increase in traffic over the past few months, I have also seen an increase in the number of brute-force attempts (if you want to know what a brute-force attack is, you can read up on it at [Wikipedia](https://en.wikipedia.org/wiki/Brute-force_attack)). As a result, I thought I share a few tips on how you could be securing your WordPress installation.

**Backup**

The first, and maybe most important thing to do is to have a working backup system. I am using a plugin called “[WordPress Backup to Dropbox](https://wordpress.org/plugins/wordpress-backup-to-dropbox/)“, which connects to your dropbox account, and generates a backup of all your files and the database. You set it up so it creates a backup periodically. It is quite easy to setup, and the provided installation guide gets you up and running in no time. Just make sure you have enough available space on your dropbox account!  
You can find a list of other backup plugins at [wpbeginner](http://www.wpbeginner.com/plugins/7-best-wordpress-backup-plugins-compared-pros-and-cons/), although I cannot say how any of those works.

**WordPress security**

A tool I use for security is [Wordfence](https://wordpress.org/plugins/wordfence/). This is a great tool, which provides you with blocking features, login security, security scanning, WordPress firewall, monitoring, caching and several more. It comes with a free edition, as well as a premium edition. For my use, the free edition is enough, but I am considering upgrading, as I see several premium features I would like to try.

Amongst the stuff I have set it up to, is to give me security reports. So if someone tries to log on to my site, but fails, I will be notified. In addition when upgrades is available for plugins or WordPress I get notified.

There are a lot of settings for this plugin, so I won’t go into detail on them. I highly recommend trying Wordfence to see all the possibilities.

**Securing WP-Admin**

Another step to secure your WordPress installation is to put your administration files (usually the folder called WP-Admin) under password protection. This means creating a .htaccess file, with a corresponding .htpasswd file. This can be done manually, or if your web host use CPanel, you could use the features of CPanel to do it. There are several guides online, on how you do this, so I won’t go into much details on this. I’ve used the guide from [wpbeginner](http://www.wpbeginner.com/wp-tutorials/how-to-password-protect-your-wordpress-admin-wp-admin-directory/) with success. This guide also describes some errors that may occur while setting this up.

While we’re talking about password protection, it might also be an idea to password protect the wp-login page. This is the page that loads when you need to login in to the administration panel, and it is located outside the WP-Admin folder. I did not really see a decrease in the number of brute-force attempts until I put password protection of this file. From the WordPress codex I added the following lines to the .htaccess file under the WordPress root folder.

```language
# Stop Apache from serving .ht* files 
<Files ~ "^.ht"> 
   Order allow,deny Deny from all 
</Files> 

# Protect wp-login 
<Files wp-login.php> 
   AuthUserFile ~/.htpasswd 
   AuthName "Private access" 
   AuthType Basic 
   require user mysecretuser 
</Files>
```

Replace AuthUserFile with the correct filepath for your .htpasswd file.

**IP whitelist**

The last step in securing your WordPress installation might be a disadvantage. It involves creating a whitelist of IP addresses that are allowed to access your administration panel. In my case I only have a couple of places I access my WordPress, so it’s ok for me. Others may access the administration panel from new locations every day, which will mean they would need to update their .htaccess often. Others again may have dynamic IP from their ISP, so this could be a disadvantage in that case.

To create the IP whitelist you need to edit the .htaccess file, located in the WP-Admin folder. In this file you should add the following snippet:

```language
<LIMIT GET> 
   order deny,allow deny from all 
   # whitelist Syed's IP address    
   allow from xx.xx.xx.xxx 
   # whitelist David's IP address 
   allow from xx.xx.xx.xxx 
   # whitelist Amanda's IP address 
   allow from xx.xx.xx.xxx 
   # whitelist Muhammad's IP address 
   allow from xx.xx.xx.xxx 
   # whitelist Work IP address 
   allow from xx.xx.xx.xxx 
</LIMIT>
```

It should be fairly easy to see what needs to be changed there.

So thats my few cents on how to secure your WordPress installation. Feel free to share any other stuff I haven’t mentioned. More resources on the subject can be found at the WordPress Codex, and wpbeginner, which I have linked to several times through the article.
