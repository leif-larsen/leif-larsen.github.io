---
title: "Xamarin tutorial  iOS MapKit Part 2"
date: "2015-05-05"
---

This is the second post, in the three part tutorial, on using the iOS MapKit in a Xamarin iOS project. In the [previous post](http://blog.leiflarsen.org/xamarin-tutorial-ios-mapkit-part-1) we looked at the initial setup of the project, as well as basic generation of a map view. In this part we will go through the parts needed for annotations, and we’re going to look at how to create customized annotations.

The source code is still available at [GitHub](https://github.com/leif-larsen/Xamarin-iOS-Map-Tutorial).

Let’s dive right in.

We ended the last post by creating a delegate to be able to create custom annotations. The next thing we need to do is create a class for the data we want our annotation items to have. I have called this class `DataModel`. This class is fairly simple, and it just have some properties that we need (title, latitude and longitude). Furhter on we need a class for our custom annotations. Lets call this `AnnotationModel`, and let it inherit from the `MKAnnotation` class. This class have three properties that we need to override, `Title`, `Subtitle` and `Coordinate`. New in the later releases of Xamarin is that the `Coordinate` property only have a getter assosicated with it, and normally you need to use the `SetCoordinate` method to set it. My experience is however that this doesn’t work (I may have gone about it the wrong way though), so a little workaround is in place. Create another property called `Coords` (same type as `Coordinate`, `CLLocationCoordinate2D`). This is the property we set in the constructor, and when someone calls the “Coordinate” property, we return the “Coords” property.

This is how it looks:

```language-csharp
public class AnnotationModel : MKAnnotation 
{ 
   private string _title; 
   private string _subtitle; 

   public AnnotationModel (CLLocationCoordinate2D coordinate, string title, string subtitle = "") 
   { 
      this.Coords = coordinate; 
      _title = title; 
      _subtitle = subtitle; 
   } 

   public override string Title { get { return _title; } } 
   public override string Subtitle { get { return _subtitle; } } 
   public CLLocationCoordinate2D Coords; 
   public override CLLocationCoordinate2D Coordinate { get { return this.Coords; } } 
}
```

With these two classes in places it’s time to create a list with some example data and add annotations to the map. This is how it is done:

```language-csharp
// Create a list for annotations 
private List<datamodel> createAnnotationLocations() 
{ 
   List<datamodel> dataList = new List<datamodel> () 
   { 
      new DataModel ("Google HQ", 37.4224760, -122.0842500), 
      new DataModel ("Taco Bell", 37.4082550, -122.0776200), 
      new DataModel ("Google MTV", 37.3974740, -122.0848690) 
   }; 

   return dataList; 
} // end createAnnotationLocations 

// Add all annotations to map 
private void addAnnotations() 
{ 
   foreach (var annotationLocation in _dataList) 
   { 
      var annotation = new AnnotationModel (new CLLocationCoordinate2D (annotationLocation.Latitude, annotationLocation.Longitude), annotationLocation.Title); 
      _mapView.AddAnnotation (annotation); 
   } 
} // end addAnnotations
```

Both methods are being called from the constructor in our view controller. In the first method we create a list of type `DataModel`, which contains a few entries which will be used for our annotations. The second method is the one that actually adds the annotations to the map. Basically we just loop through the datalist and create a new Annotation object for each item. This will then be added to the map.

The big secret to customizing your annotations lays in the following method:

```language-csharp
// Customize the annotation view
MKAnnotationView GetViewForAnnotation(MKMapView mapView, IMKAnnotation annotation) 
{ 
   MKAnnotationView annotationView = mapView.DequeueReusableAnnotation (annotationIdentifier); 
   // Set current location and location of annotation 
   CLLocationCoordinate2D currentLocation = mapView.UserLocation.Coordinate; 
   CLLocationCoordinate2D annotationLocation = annotation.Coordinate; 

   // We don't want a special annotation for the user location 
   if (currentLocation.Latitude == annotationLocation.Latitude && currentLocation.Longitude == annotationLocation.Longitude) 
      return null; 

   if (annotationView == null) 
      annotationView = new MKPinAnnotationView (annotation, annotationIdentifier); 
   else 
      annotationView.Annotation = annotation; 

   annotationView.CanShowCallout = true; 
   (annotationView as MKPinAnnotationView).AnimatesDrop = false; 

   // Set to true if you want to animate the pin dropping 
   (annotationView as MKPinAnnotationView).PinColor = MKPinAnnotationColor.Red; 
   annotationView.SetSelected (true, false); 
   _annotationDetailButton = UIButton.FromType (UIButtonType.DetailDisclosure); 

   _annotationDetailButton.TouchUpInside += (sender, e) => { 
      new UIAlertView("Yay!", "You successfully clicked the detail button!", null, "OK", null).Show(); 
   }; 
   annotationView.RightCalloutAccessoryView = _annotationDetailButton; 

   // Annotation icon may be specified like this, in case you want it. 
   // annotationView.LeftCalloutAccessoryView = new UIImageView(UIImage.FromBundle("example.png")); 

   return annotationView; 
} // end GetViewForAnnotation
```

Now, if you remember from part 1 of this tutorial, we added a delegate to our `MapView` object. The method above is the method assigned to that delegate. Quite a bit is happening in this method, so lets break it down. The first line we execute is to allow annotation views that are no longer on the screen to be reused, by the annotations on the screen. This is done for perfomance reasons. As you can see we’re now using the annotation identifier, we defined in part one, to identify which annotation views we should reuse. You can see a few lines down, that when we create a new annotation view, we send the annotation identifier as a second parameter, thus giving it an identity.

Moving on we assign the current location of the user, and the location of the given annotation. This is done so we can check whether or not the annotation is the user or not. We usually want to keep the location of the user as a blue dot, and not customize it. Moving on we create an annotation view if it doesn’t already exist, and then we set some properties, which is the customization we’re after. In this example you can see that we say the annotations can show call outs, it should not animate when being placed and the color should be red. We also add a UIButton, which is the button on the right side of the call out. Here we just show an alert when you click it, but you could go on to open a new window, navigate to that position etc. I have also included an example of how you could add a customized icon to the call out but I left it in comments for now.

And that is basically it. With all this in place you should be the stage where you have a map, and some customized annotations in place. When you select one of them a call out will show, and if you click the button on it, you will get an alert.

The next, and final, post in this series will focus on search functionality, to see how we can search for a certain place and move the map to that position.
