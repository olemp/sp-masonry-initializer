###Usage
Basic usage
```javascript
    var msnry = new Masonrylizer.Initializer(".masonry-container", ".masonry-item", 200, 50);
```

With delay
```javascript
    var msnry = new Masonrylizer.Initializer(".masonry-container", ".masonry-item", 200, 50, 5000);
```

###Parameters
Name|Type|Required
-------|----|-----------
containerSelector|string|Required
itemSelector|string|Required
columnWidth|number|Required
spacing|number|Optional, defaults to 10
delayLoad|number|Optional, defaults to 0 (miliseconds)

###Functions
Reflow
```javascript
   msnry.reflow()
```