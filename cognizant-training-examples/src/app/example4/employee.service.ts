import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService {
    response: any;
    hasErrors = false;
    constructor(private http: HttpClient) { }

    getEmployee(): void {
        this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((response) => {
            this.response = response;
        }, error => {
            this.hasErrors = true;
        });
    }

}