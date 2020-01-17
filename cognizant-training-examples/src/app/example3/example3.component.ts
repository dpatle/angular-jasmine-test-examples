import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example3',
  template: '<h1>{{title}}</h1> <h2 *ngIf="isTitleUpdated">title has been updated</h2>'
})
export class Example3Component {
  @Input() title;
  isTitleUpdated = false;

  ngOnChanges(simpleChanges) {
    if (simpleChanges.title.currentValue === 'new title from parent') {
      this.isTitleUpdated = true;
    }
  }
}
