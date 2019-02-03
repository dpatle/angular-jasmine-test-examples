import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<span>{{title}}</span> <button (click)="changeLabel()"></button>`
})
export class Example3Component {
  @Input() title : string;
  calculate(a, b) {
      return a+b;
  }
}
