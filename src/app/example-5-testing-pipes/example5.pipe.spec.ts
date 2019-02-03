import { FormatFileSizePipe } from './example5.pipe';
import { Injectable } from "@angular/core";
import { async, TestBed } from '@angular/core/testing';
import { Pipe } from '@angular/core';

describe('testing a service', () => {
    const spy = jasmine.createSpyObj('Example2Service', ['getData']);
    let exampleService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [Pipe]
        });
    }));
    it('Should test the pipe', () => {
        const formattedFilePipe = new FormatFileSizePipe();
        const pipeResult = formattedFilePipe.transform(5,true);
        expect(pipeResult).toBe('test');
    });
});