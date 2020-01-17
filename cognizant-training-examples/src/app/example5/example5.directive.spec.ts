import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Example5Directive } from "./example5.directive";

/**
 * directives
 * Pipes
 * code coverage
 * Testing with headless browsers - ChromeHeadless, PhantomJS (Puppiteer)
 * configurations and options
 * Test case examples with real project
 */

@Component({
    template: `<input type="text" hoverfocus>`
})
export class HostExmaple5Component {}

describe('Directive :: Example 5 directive', () => {
    let fixture: ComponentFixture<HostExmaple5Component>,
    component: HostExmaple5Component;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HostExmaple5Component, Example5Directive]
        });
        fixture = TestBed.createComponent(HostExmaple5Component);
        component = fixture.componentInstance;
    });

    it('should change color on mouse hover', () => {
        const inputElement = fixture.debugElement.query(By.css('input'));        
        inputElement.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputElement.nativeElement.style.backgroundColor).toBe('green');
    });

    it('should change color on mouse out', () => {
        const inputElement = fixture.debugElement.query(By.css('input')); 
        inputElement.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputElement.nativeElement.style.backgroundColor).toBe('inherit');
    });
});