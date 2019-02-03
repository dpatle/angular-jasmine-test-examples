import { Example2Service } from './example-2.service';
import { Injectable } from "@angular/core";
import { async, TestBed } from '@angular/core/testing';

describe('testing a service', () => {
    const spy = jasmine.createSpyObj('Example2Service', ['getData']);
    let exampleService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [Injectable, {
                provide: Example2Service,
                useValue: spy
            }]
        });
        exampleService = TestBed.get(Example2Service);
    }));
    it('Should get the data', (done: DoneFn) => {
        exampleService.getData.and.returnValue(new Promise((resolve) => {
                resolve('data from spy');
        }));
        const serviceData = exampleService.getData();
        serviceData.then((data) => {
            expect(data).toBe('data from spy');
            done();
        });
    });
});