import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { Example2Component } from './example2.component';
import { Example2Service } from './example2.service';
import { SessionService } from './session.service';

/**
 * How to do functional testing of component
 * Components with dependency
 * Aysnc dependency
 * Mocking the data - spying
 * How to test components with input/output
 * Testing component lifecyle hooks
 */
class MockExample2Service {
    getData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve('async mock data');
        });
    }
}

describe('Component :: Example 2 Component', () => {
    let fixture, componentInstance, compiledComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Example2Component],
            providers: [
                {
                    provide: Example2Service,
                    useClass: MockExample2Service
                }, {
                    provide: SessionService,
                    useValue: jasmine.createSpyObj('SessionService', [ 'setDataInSession' ])
                }
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(Example2Component);
                componentInstance = fixture.debugElement.componentInstance;
                compiledComponent = fixture.debugElement.nativeElement;
            });
    }));
    
    // functional test cases
    // UI test cases

    describe(':: UI tests', () => {
        it('should create example component', () => {
            expect(componentInstance).toBeTruthy();
        });

        it('should check correct title', fakeAsync(() => {
            componentInstance.getData();
            tick(1000);
            fixture.detectChanges();
            expect(compiledComponent.querySelector('h1').textContent).toBe('async mock data');
        }));
    });

    describe(':: Functional tests', () => {
        it('should calculate triangle area', () => {
            const height = 20, base = 20;
            expect(componentInstance.calculateTriangleArea(height, base)).toBe(200);
        });
    });
});