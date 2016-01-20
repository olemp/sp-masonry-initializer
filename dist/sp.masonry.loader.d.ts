declare module Masonrylizer {
    export class Initializer {
        constructor(containerSelector : string, itemSelector : string, columnWidth: number, spacing? :number, delayLoad? : number);
        reflow(): void;
    }
}