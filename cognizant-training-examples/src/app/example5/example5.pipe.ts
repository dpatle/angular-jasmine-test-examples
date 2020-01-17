import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'customUpperCase'
})

export class Example5Pipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase();
    }
}