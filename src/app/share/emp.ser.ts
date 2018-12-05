import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            phoneNumber: 2345978640,
            email: 'mark@pragimtech.com',
            isActive: true
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            phoneNumber: 2345978640,
            email: 'Mary@pragimtech.com',
            isActive: true
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            phoneNumber: 5432978640,
            email: 'John@pragimtech.com',
            isActive: true
        },
    ];

    getEmployees():Observable<Employee[]> {
        return Observable.of(this.listEmployees);
    }
    getEmployee(id: number): Employee {
            return this.listEmployees.find(e => e.id === id);
        } 
    save(employee: Employee) {
        if(employee.id===null){
            const maxId = this.listEmployees.reduce(function (e1, e2) {
            return (e1.id > e2.id) ? e1 : e2;
            }).id;
             employee.id = maxId + 1;
            this.listEmployees.push(employee);
        }else{
            const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;
        }
    
     } 
    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        if (i !== -1) {
            this.listEmployees.splice(i, 1);
        }
        }
}