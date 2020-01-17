import { TestBed, tick, fakeAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { EmployeeService } from "./employee.service";


/**
 * testing service with http dependency (Angular 7 and above)
 */

describe('Service :: Example 4 service', () => {
    let service: EmployeeService,
        httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                EmployeeService
            ]
        });
        service = TestBed.get(EmployeeService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should get data from employee API', fakeAsync(() => {
        /**
         * create fake response
         */
        const response = {
            body: [
                {
                    "id": "111",
                    "employee_name": "name from mock data",
                    "employee_salary": "10",
                    "employee_age": "12",
                    "profile_image": ""
                }
            ]
        };

        /**
         * CAll actual service method
         */
        service.getEmployee();

        /**
         * Provide http url to httpTestingController
         */
        const req = httpTestingController.expectOne('http://dummy.restapiexample.com/api/v1/employees');

        /**
         * check whether method type is correct
         */
        expect(req.request.method).toEqual('GET');


        /**
         * Map fake response to httpTestingController's request
         */
        req.flush(response);

        tick();

        /**
         * test the data and other conditions
         */
        expect(service.response.body.length).toEqual(1);
    }));

    it('should check if there are any errors', fakeAsync(() => {
        const response = 'Internal server error';
        const errors = {
            status: 500,
            statusText: 'Internal server error'
        };
        service.getEmployee();
        const req = httpTestingController.expectOne('http://dummy.restapiexample.com/api/v1/employees');
        expect(req.request.method).toEqual('GET');
        req.flush(response, errors);
        tick();
        expect(service.hasErrors).toBeTruthy();
    }));
});