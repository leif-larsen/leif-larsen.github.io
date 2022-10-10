---
title: "Creating a mobile app with web technology"
date: "2016-03-13"
---

In this post I will go through my first-impression of using HTML/CSS/JavaScript for mobile app development. The background for doing so is that I’ve been spending quite a lot of time at [FreeCodeCamp](http://freecodecamp.com) lately, and now feel comfortable enough to try to do some comparing with Xamarin and C#. To be able to see some similarities, I have chosen to create an app similar to one I have done with Xamarin, a map application. I did a tutorial on this for Xamarin last year, which you can find [here](http://leiflarsen.org/?s=mapkit).

For the purpose of this post I’ll be using Visual Studio to do the development. Microsoft have created a template to get up and running easily with [Cordova](https://cordova.apache.org/), which I have chosen as my tool. Alternatively, one can install Cordova and create a project through npm, but I took the slightly easier route this time. All the code I’ve written for this can be found at [GitHub](https://github.com/leif-larsen/Mobile-HTML-Test-App).

The end result of the app is like this:  
[![Mobile app with Cordova end result](/img/2016/03/droidresult.png?fit=384%2C706)](/img/2016/03/droidresult.png)

## Mobile App Creation

The first thing I did was to create a new project in Visual Studio, where I selected “Other Languages” and chose Cordova as the project template. I named it, and the project was created with some default files. I was able to run the app with the default content, using the Ripple Emulator in Google Chrome. So far so good.[![Create new Cordova project in Visual Studio](/img/2016/03/NewProject-300x208.png?fit=300%2C208)](/img/2016/03/NewProject.png)

Next I read that the initial version of Cordova might not be the latest, so I went into “config.xml” and fixed this. In Visual Studio they provide a neat editor for this file, where I could go to the tab called “Platform” and select the latest version from the dropdown list. I figured I might as well do this immediately instead of risking errors later.  
[![Update to latest Cordova Version](/img/2016/03/LatestVersion-300x52.png?fit=300%2C52)](/img/2016/03/LatestVersion.png)

To be able to use different device specific features I found I could add plugins. As I have understood these are basically bindings between a phones hardware and the app itself, provided either by Cordova as core plugins, or by third-party contributors. For this example, I added the geolocation and notification plugins. Other core plugins worth mentioning are Azure connection, splash screen, device information, file systems and others. After the plugins had been added I built the app again, and it was still running as expected.

## Code – But No Code

For the code needed it wasn’t really that much. I can count one input field and one div in the HTML itself, which is for search bar and the map canvas. I didn’t bother to put the JavaScript needed into its own file, as I just wanted a quick result. Also I want to emphasize that the way it’s done in my example is by no means best practice, as you can read in [this](https://codingwithspike.wordpress.com/2014/08/13/loading-google-maps-in-cordova-the-right-way/) blog post.

As this isn’t a tutorial I won’t share any code details here, but refer you to GitHub. The fun stuff happens in “index.html” in the “www” folder. Just note that you need to add your own API key for Google Maps for it to work!

## Comparison

So how does this compare to Xamarin? For starters I can definitely say that this was less of a hassle to get up and running. I don’t think I spent more than a couple of hours to finish this example app, making it work as I wanted to. Using Cordova, I believe more people are able to create mobile apps, where a lot of HTML/CSS/JavaScript probably can be reused for associated web sites.

Another great benefit is off course that there is no monthly/yearly recurring cost to using Cordova, as there is with Xamarin (note! I have not looked into the release process, so there might be some costs there. Can anyone shed a light on that?). To me, as a developer with no real income on my apps, this is a great argument to use Cordova over Xamarin.

As for cons I have not really seen any yet, but I imagine there might be some negative effects in terms of performance. I will need to do some more research on this, so if anyone happen to have some links focusing on this aspect, please share!

## Conclusion

Will I be using Cordova in the future? Well, I will be testing it more over the next few weeks. I don’t think I am ready to make the move completely yet, and I guess what I use will be dependent on what kind of app I am creating anyway.

This is it for this post. Not a very scientific comparison between Xamarin and Cordova, but more of a first-impression from my point of view. Have you had experience with either? I am curious to hear what others think of these, especially Cordova!

## Edit

As requested in the comments, I want to make an addition to this post, to show some of the code used.

There are two files which needs to be referenced for Cordova to work. These are “cordova.js” and “platformOverrides.js”. Both files should be created when creating the project, and already included in the “index.html” which is created at creation. The first file is, quite obviously, Cordova itself, while the second one is where you can tell the app what it should do on startup, resume, shutdown etc. For this particular example I also included a reference to Google Maps API and its corresponding CSS file.

The first lines I want to show off particularly is the lines which actually uses device features. The following lines uses the plugins for geolocation and notification to find your position, and popup a notification if a marker is clicked:

```javascript
var markerClicked = function (title) { 
navigator.notification.alert("You clicked the " + title.title + " marker!", function () {});} 
var getPosition = function () { navigator.geolocation.getCurrentPosition(showMap); }
```

Also to show how to use the position you get, this is the callback function from getPosition:

```javascript
var showMap = function (position) { var mapOptions = { zoom: 13, center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: false } map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions); addMarkers(); var input = document.getElementById("pac-input"); var searchBox = new google.maps.places.SearchBox(input); map.controls[google.maps.ControlPosition.TOP_CENTER].push(input); map.addListener('bounds_changed', function () { searchBox.setBounds(map.getBounds()); }); searchBox.addListener('places_changed', function () { var places = searchBox.getPlaces(); if (places.length == 0) { return; } map.setCenter(places[0].geometry.location); }); }
```

Basically we use the position to create a new Google Map, centered on our location, and place this map into a div we have in the HTML. We also create a searchbox, where we can search for places, where we will move the map to the location of the place that was searched for.
