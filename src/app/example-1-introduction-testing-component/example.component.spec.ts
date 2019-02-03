/**
 * spec
 * suite
 * expections
 * matcher
 *  - 
 */

 import { ExampleComponent } from './example.component';
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
    template: '<app-example [title]="title"></app-example>'
})

export class TestWrapperComponent {
    title = 'title from test suite';
}

 describe('Example test suite',() => {
    let component;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleComponent, TestWrapperComponent ]
        })
        .compileComponents()
        .then(() => {
            component = TestBed.createComponent(TestWrapperComponent);
            component.detectChanges();
        });
    }));

    it('To verify name is correct', ()=> {
        const name = 5;
        expect(name).toBeLessThan(6);
    });

    it('To verify label', ()=> {
        const labelText = component.debugElement.nativeElement.textContent; 
        expect(labelText).toEqual('title from test suite');
    });

    it('To verify label after click', ()=> {
        const compiledComponent = component.debugElement.nativeElement;
        compiledComponent.querySelector('button').click();
        component.detectChanges();
        const labelText = compiledComponent.querySelector('span').textContent;
        expect(labelText).toContain('changed');
    });
 });