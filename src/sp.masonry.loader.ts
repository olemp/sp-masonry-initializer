/// <reference path="..\typings\tsd.d.ts" />
module Masonrylizer {    
    export class Initializer {
        private jqueryversion = "2.2.0";
        private masonryversion = "4.0.0";
        containerSelector: string;
        itemSelector: string;
        columnWidth: number;
        spacing: number;
        delayLoad: number;
        loaded = false;
        
        constructor(
            containerSelector: string,
            itemSelector: string,
            columnWidth: number,
            spacing = 10,
            delayLoad?: number
        ) {
            this.containerSelector = containerSelector;
            this.itemSelector = itemSelector;
            this.columnWidth = columnWidth;
            this.spacing = spacing;
            this.delayLoad = delayLoad;
            
            this.loadScripts(() => {
                 this.delay(() => {
                    jQuery(this.containerSelector).masonry({
                        itemSelector: this.itemSelector,
                        columnWidth: this.columnWidth,
                        gutter: this.spacing,
                        isResizable: false,
                        isAnimated: true,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    this.loaded = true;
                });
            });
        }
        
        reflow() {
            if(!this.loaded) jQuery(this.containerSelector).masonry('layout');
        }
        
        private delay(callback : Function) {
            if(!this.delayLoad) callback();
            window.setTimeout(callback, this.delayLoad);
        }
        
        private loadScripts(callback : Function) {
            SP.SOD.registerSod('jquery', `//code.jquery.com/jquery-${this.jqueryversion}.js`);
            SP.SOD.registerSod('masonry', `//cdnjs.cloudflare.com/ajax/libs/masonry/${this.masonryversion}/masonry.pkgd.min.js`);
            SP.SOD.registerSodDep('masonry', 'jquery');
            EnsureScriptFunc("masonry", null, callback);
        }
    }
}