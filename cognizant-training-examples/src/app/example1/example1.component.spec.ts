import { TestBed, async } from "@angular/core/testing";
import { Example1Component } from './example1.component';

/**
 * Jasmine - Karma - BDD TDD
 * Spec - it keyword
 * suite - describe keyword - group of specs
 * matchers
 * expectations - expect
 */

describe('Component :: Example 1 Component', () => {
    let fixture, componentInstance, compiledComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Example1Component]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(Example1Component);
                componentInstance = fixture.debugElement.componentInstance;
                compiledComponent = fixture.debugElement.nativeElement;
            });
    }));
    it('should create example component', () => {
        expect(componentInstance).toBeTruthy();
    });
});