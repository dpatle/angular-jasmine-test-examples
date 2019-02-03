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

import { Example3Component } from './example3.component';
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

 describe('Example test suite',() => {
    let component;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Example3Component ]
        })
        .compileComponents()
        .then(() => {
            component = TestBed.createComponent(Example3Component);
            component.detectChanges();
        });
    }));

    it('To verify label after click', ()=> {
        const componentInstance = component.componentInstance;
        const calculatedData = componentInstance.calculate(10, 15);
        expect(calculatedData).toBe(25);
    });
 });