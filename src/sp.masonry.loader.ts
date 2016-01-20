/// <reference path="..\typings\tsd.d.ts" />
module Masonrylizer {    
    export class Initializer {
        containerSelector: string;
        itemSelector: string;
        columnWidth: number;
        spacing: number;
        delayLoad: number;
        
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
                });
            });
        }
        
        private delay(callback : Function) {
            if(!this.delay) callback();
            window.setTimeout(callback, this.delay);
        }
        
        private loadScripts(callback : Function) {
            SP.SOD.registerSod('jquery', `//code.jquery.com/jquery-2.2.0.js`);
            SP.SOD.registerSod('masonry', `//cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js`);
            SP.SOD.registerSodDep('masonry', 'jquery');
            EnsureScriptFunc("masonry", null, callback);
        }
    }
}