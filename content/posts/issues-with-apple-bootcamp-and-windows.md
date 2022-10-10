---
title: "Issues with Apple Bootcamp and Windows"
date: "2016-05-01"
---

Over the last week, I've had some serious issues with my Windows 10 installation, running on my Mac Mini. It started early last week, where I had some difficulties with my wifi. The wifi have had issues earlier as well, but now I actually got sick of it, and though I'd try to fix it.

Bad idea! Having done my fair share of support involving drivers over the years, I decided to reinstall the network driver on Windows. This turned out to fail miserably, leaving me without network (my router is too far away to wire up the machine). Nothing I tried would work, so my next option was to repair the Windows installation.

This turned out to be a huge mistake, as I basically removed the Bootcamp components installed, with no viable way to get it back from inside Windows (keep in mind, there is no network now). Next step was to boot into OS X, to see what my options were. Fortunately for me, Bootcamp has a nice option in the manager, where you can install and remove Windows installation and also download Bootcamp components for Windows. This would then need to be put onto a memory stick, and installed in Windows. Naturally I was happy to see this, but I guess there is a reason they say not to count the chickens before they're hatched. No matter how many times I tried, I would always get an error message stating that "Could not install Bootcamp components" (or something similar). Someone with similar problems had solved this by trying repeatedly until it worked, but this didn't seem to do it for me.

Doing some more research, reading countless of forum posts, I found a way to solve this, which I now can confirm works! What I had to do was to manually download Bootcamp components for Windows, which was correct according to the hardware I have in my Mac. So first I had to verify my version of the Mac, by finding the serial number. This can be found in "About my Mac". To verify or find your version, you can input that serial number [into this page](http://www.everymac.com/ultimate-mac-lookup/).

Next I had to find the correct version of Bootcamp components. I found [this](https://support.apple.com/downloads/macoscomponents), which linked to the version I needed. After I downloaded the correct version, I unzipped it and copied the content to a memory stick. Next I booted into Windows again, and ran the installer, which installed all the drivers again. So now the wifi was working again, and so far it has been working smoothly. Hope it stays that way!

##Summary

The aftermath of this mess is a couple of conclusions from my side.

1. I really need to wire up my network, so I don't have to use the wifi on more devices than necessary.
    
2. I really should let the Mac be a Mac, running only OS X, and get myself a stand-alone Windows machine.
    

Which brings me to the final point; do you have a computer to recommend? I'm not sure if I should buy myself a desktop or a laptop, so any advice would be helpful. In an ideal world I should be able to use three external screens, although I can live with two. I'm primarily using Visual Studio for development, which I guess is the "heaviest" application I'll be running. I also would like to be able to run two, maybe three, virtual machines for some security related learning, so I'm a bit unsure of how much memory I need. Like I said, any advice is welcome!
