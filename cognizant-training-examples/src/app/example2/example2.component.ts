import { Component } from '@angular/core';
import { Example2Service } from './example2.service';
import { SessionService } from './session.service';

@Component({
  selector: 'app-example1',
  template: '<h1>{{title}}</h1>'
})
export class Example2Component {
  title = 'jasmine-example';

  constructor(private example2Service: Example2Service,
        private sessionService: SessionService) {}
  
  calculateTriangleArea(height: number, base: number) {
      return 0.5 * height * base;
  }

  getData() {
      this.example2Service.getData().then((title) => {
          this.title = title;
          this.sessionService.setDataInSession(title);
      });
  }
}