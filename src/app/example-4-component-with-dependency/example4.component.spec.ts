/**
 * Functional testing for coponent
 * Dependency in component
 * Testing component with async data
 * FakeAsync ?
 * tick() ?
 */
/**
 * spec
 * suite
 * expections
 * matcher
 *  - 
 */

import { Example4Component } from './example4.component';
import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Example4Service } from './example4.service';

class MockExample4Service {
    getData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
                resolve('data from mock service promise');
        });
    }
}

 describe('Example test suite',() => {
    let component;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Example4Component ],
            providers: [
                {
                    provide: Example4Service,
                    useClass: MockExample4Service
                }
            ]
        })
        .compileComponents()
        .then(() => {
            component = TestBed.createComponent(Example4Component);
            component.detectChanges();
        });
    }));

    fit('To verify label after calling service', fakeAsync(()=> {
        const componentInstance = component.componentInstance;
        const calculatedData = componentInstance.getData();
        tick();
        component.detectChanges();
        const label = component.debugElement.nativeElement.querySelector('span').innerText;
        expect(label).toBe('data from mock service promise');
    }));
 });