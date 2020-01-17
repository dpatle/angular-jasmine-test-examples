import { TestBed, async, inject } from "@angular/core/testing";
import { Example3Service } from './example3.service';

/**
 * How to test components with input/output
 * Testing component lifecyle hooks
 * service
 * HTTP - angular 7
 */


describe('Service :: Example 3 Service', () => {
    let fixture, componentInstance, compiledComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [Example3Service]
        });
    }));
    it('should create example service instance', () => {
        const serviceInstance = new Example3Service();
        expect(serviceInstance).toBeTruthy();
    });
    it('should calcualte area of triangle', inject([Example3Service], (example3Service: Example3Service) => {
        const serviceInstance = new Example3Service(), 
            height = 20,
            base = 20;
        expect(serviceInstance.calculateTriangleArea(height, base)).toBeGreaterThan(50);
    }));
});