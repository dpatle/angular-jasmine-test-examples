import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  template: '<h1>{{title}}</h1> <button (click)="changeTitle();">click</button>'
})
export class Example1Component {
  title = 'jasmine-example';
  changeTitle(): void {
      this.title = 'new title';
  }
}
