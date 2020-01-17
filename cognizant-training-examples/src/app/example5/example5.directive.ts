import {
    Directive,
    HostListener,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[hoverfocus]'
})

export class Example5Directive {
    @HostBinding('style.background-color') backgroundColor: string;

    @HostListener('mouseover') onHover() {
        this.backgroundColor = 'green';
    }

    @HostListener('mouseout') onLeave() {
        this.backgroundColor = 'inherit';
    }
}