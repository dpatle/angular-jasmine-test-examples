import { Component, Input } from '@angular/core';
import { Example4Service } from './example4.service';
@Component({
  selector: 'app-example',
  template: `<span>{{title}}</span>`
})
export class Example4Component {
  title : string;

  constructor(private example4Service: Example4Service) {}

  getData() {
      this.example4Service.getData().then((data) => {
        this.title = data;
      });
  }
}
