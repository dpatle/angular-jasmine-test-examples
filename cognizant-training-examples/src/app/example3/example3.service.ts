import { Injectable } from '@angular/core';

@Injectable()
export class Example3Service {
    calculateTriangleArea(height: number, base: number) {
        return 0.5 * height * base;
    }
}