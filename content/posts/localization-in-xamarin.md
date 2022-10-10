---
title: "Localization in Xamarin"
date: "2015-03-14"
---

Googling for this subject, localization in Xamarin, I really couldn’t find anything that really explained how to do it. Also Xamarin does not have any guides on how to do this, but there are a few posts in the forum in this regard. So this is my contribution to the world; a short write-up on how to translate your app to any language, the easy way.

First I need to mention that there are different ways this is done for iOS, Android and Windows Phone. While reading on this topic I noticed that there is a way to do this with Xamarin Forms, however since I haven’t used that yet, this post will focus on localization for iOS in Xamarin.

For now I assume you already have a project in Xamarin open. The first thing you want to do is to create a new folder in the “Resources” folder. This new folder should be named XX.lproj, where XX is the two-letter language code of the language you want to translate (a list of all the language codes can be found [here](http://www.loc.gov/standards/iso639-2/php/code_list.php "Language codes")). So if you want a Norwegian translation, you would need to create a folder called “nb.lproj”.

Now you need to create the translation file itself. In the newly created folder create a new file called “Localizable.strings”. I chose to create this file as an empty text file (I tried to create it as a resource file, which failed). This is the file where you will map keys and translations. The format should be the following:

```language-csharp
"1st key" = "1st translation"; 
"2nd key" = "2nd translation";
```

To actually use this in the code, you can then do the following:

```language-csharp
 Console.WriteLine(NSBundle.MainBundle.LocalizedString("1st key", "Any comment if needed"));
```

Note that the second parameter in the method above is a comment, I guess so you can know what that translations is for? Anybody with some insights on that?

Anyway, it is also possible to make this a bit easier, by creating an extension method. That could look like this:

```language-csharp
public static string translate(this string translate) 
{ 
   return NSBundle.MainBundle.LocalizedString (translate, "", ""); 
}
```

Which would mean you could translate anything like this:

`Console.WriteLine("2nd key".translate());`

Pretty neat. I guess developers use localization to a various degree, but it took me some time to figure out how to do it properly and hopefully this saves you that time!
