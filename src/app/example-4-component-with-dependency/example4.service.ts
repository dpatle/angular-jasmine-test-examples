import { Injectable } from "@angular/core";


@Injectable()

export class Example4Service {
    getData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                resolve('data from service promise');
            }, 2000);
        });
    }
}