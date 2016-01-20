/// <reference path="..\typings\tsd.d.ts" />
var Masonrylizer;
(function (Masonrylizer) {
    var Initializer = (function () {
        function Initializer(containerSelector, itemSelector, columnWidth, spacing, delayLoad) {
            var _this = this;
            if (spacing === void 0) { spacing = 10; }
            this.jqueryversion = "2.2.0";
            this.masonryversion = "4.0.0";
            this.loaded = false;
            this.containerSelector = containerSelector;
            this.itemSelector = itemSelector;
            this.columnWidth = columnWidth;
            this.spacing = spacing;
            this.delayLoad = delayLoad;
            this.loadScripts(function () {
                _this.delay(function () {
                    jQuery(_this.containerSelector).masonry({
                        itemSelector: _this.itemSelector,
                        columnWidth: _this.columnWidth,
                        gutter: _this.spacing,
                        isResizable: false,
                        isAnimated: true,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    _this.loaded = true;
                });
            });
        }
        Initializer.prototype.reflow = function () {
            if (!this.loaded)
                jQuery(this.containerSelector).masonry('layout');
        };
        Initializer.prototype.delay = function (callback) {
            if (!this.delayLoad)
                callback();
            window.setTimeout(callback, this.delayLoad);
        };
        Initializer.prototype.loadScripts = function (callback) {
            SP.SOD.registerSod('jquery', "//code.jquery.com/jquery-" + this.jqueryversion + ".js");
            SP.SOD.registerSod('masonry', "//cdnjs.cloudflare.com/ajax/libs/masonry/" + this.masonryversion + "/masonry.pkgd.min.js");
            SP.SOD.registerSodDep('masonry', 'jquery');
            EnsureScriptFunc("masonry", null, callback);
        };
        return Initializer;
    })();
    Masonrylizer.Initializer = Initializer;
})(Masonrylizer || (Masonrylizer = {}));
