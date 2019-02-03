import { Injectable } from "@angular/core";


@Injectable()

export class Example2Service {
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data from promise');
            }, 2000);
        });
    }
}