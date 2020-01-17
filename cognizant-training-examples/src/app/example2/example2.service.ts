import { Injectable } from '@angular/core';

@Injectable()
export class Example2Service {
    getData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve('async data');
        });
    }
}