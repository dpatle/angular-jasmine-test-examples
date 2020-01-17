import { TestBed, async } from "@angular/core/testing";
import { Example3Component } from './example3.component';
import { Component } from '@angular/core';

/**
 * How to test components with input/output
 * Testing component lifecyle hooks
 * service
 * HTTP - angular 7
 */

@Component({
  selector: 'app-host-example3',
  template: `<app-example3 [title]="titleFromParent"></app-example3>`
})
export class HostExample3Component {
    titleFromParent = 'old title from parent';
    changeTitle() {
        this.titleFromParent = 'new title from parent';
    }
}


describe('Component :: Example 3 Component', () => {
    let fixture, componentInstance, compiledComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Example3Component, HostExample3Component]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HostExample3Component);
                componentInstance = fixture.debugElement.componentInstance;
                compiledComponent = fixture.debugElement.nativeElement;
            });
    }));
    it('should create example component', () => {
        expect(componentInstance).toBeTruthy();
    });
    it('should check correct title', () => {
        componentInstance.changeTitle();
        fixture.detectChanges();
        expect(compiledComponent.querySelector('h1').textContent).toBe('new title from parent');
    });
});