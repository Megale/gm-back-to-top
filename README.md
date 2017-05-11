# gm-back-to-top
Angular/Angular Material "Back to Top Button" that magically appears on your page when you scroll down.

[gm-back-to-top] (https://cloud.githubusercontent.com/assets/2500619/25963648/6c4de1b0-3658-11e7-9c92-f26038b80c44.PNG)


# Example
Check [this](https://plnkr.co/edit/58MJaYsQpOKDkhYdMDBD) to get a hold of a simple example.

# How does it work?
When the component notices a scroll on your page, a FAB button will appear on the bottom right of you screen. If you click it, it will take the page
to its top.

#Dependencies
Jquery, Angular, Angular Material and Material-Icons.

# How do you use it? Four easy steps.
1. Install it via bower: bower install gm-back-to-top

2. Add the component to your index.html: ```<gm-back-to-top gmspeed="1000"> </gm-back-to-top>```. Before the end of the body tag is a good place to put it.

3. Modify your index.html to include a link to google fonts (check the [plunkr] (https://plnkr.co/edit/58MJaYsQpOKDkhYdMDBD)). 

4. Add the gm-back-to-top component as a dependecy to one of your modules: ```angular.module('yourModule', [backToTop]);```

You can control how fast or how slow the scroll happens. Just change the gmspeed atribute to do so (in miliseconds). The acceleration of the scroll folows the COS(pi) curve so expect an easy in-out effect. 
