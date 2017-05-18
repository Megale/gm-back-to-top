# gm-back-to-top [![Build Status](https://travis-ci.org/Megale/gm-back-to-top.svg?branch=master)](https://travis-ci.org/Megale/gm-back-to-top)
Angular/Angular Material "Back to Top Button" that magically appears on your page when you scroll down. If you already make use of angular and angular material, this is the component for you.


![back-to-top](https://cloud.githubusercontent.com/assets/2500619/25964032/e31a19fc-3659-11e7-9038-63c2ef0d651d.PNG)

## Example
Check [this](https://plnkr.co/edit/58MJaYsQpOKDkhYdMDBD) to get a hold of a simple example.

## How does it work?
When the component notices a scroll on your page, a FAB button will appear on the bottom right of you screen. If you click it, it will take the page
to its top.

## Features
- Change the speed of the scroll -> Change the gmspeed atribute to do so (in miliseconds). The acceleration of the scroll follows the COS(pi) curve so expect an easy in-out effect. 

- Change the button's layout ->

## Supported browsers

## Dependencies
- Jquery
- Angular
- Angular Material
- Material-Icons




## How do you use it? Four easy steps.
1. Install it via bower: ````bower install gm-back-to-top```` 

2. Load the scripts and the CSSs. Follow the order given in this example!

```` html
<!DOCTYPE html>
<html ng-app = "backToTop">

  <head>
    .....    

    <script src="bower_components/dist/backToTop-min.js"></script>
    <script src="bower_components/dist/backToTop-min.css"></script>
  </head>
  ......

````

3. Add the gm-back-to-top component as a dependency to one of your modules: 

```` javascript
(function() {
  'use strict';
  angular
    .module('yourModule', ['backToTop']);

})();
````

4. Add the component to your index.html. If you wan't to make it global, just put in your index file. If you want to have it on a specific page, just
put it there. Check the example below:

```` html
<!doctype html>
<html ng-app="yourMainModule">

<head>
  <base href=""> 
  <meta charset="utf-8">

  <title>Your Title - dev</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>

<body>

  <div layout="column">

    <div ui-view></div>

    </md-content>
</body>

 <gm-back-to-top gmspeed="1000"> </gm-back-to-top> 
 <!--You can control how fast or how slow the scroll happens. 
 Just change the gmspeed atribute to do so (in miliseconds). 
 The acceleration of the scroll folows the COS(pi) curve so expect an easy in-out effect. -->
</html>

````




