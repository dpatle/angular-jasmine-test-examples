import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<span>{{title}}</span> <button (click)="changeLabel()"></button>`
})
export class ExampleComponent {
  @Input() title : string;
  changeLabel() {
      this.title = 'app changed at ' + new Date().getTime();
  }
}
