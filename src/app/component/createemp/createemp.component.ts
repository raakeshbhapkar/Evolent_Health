import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Employee } from '../../models/employee.models'; 
import {EmployeeService} from '../../share/emp.ser'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {
  @ViewChild('employeeForm') public employeeForm: NgForm;
  employee: Employee;
  panelTitle: string;
  employees=[];
  gender="male";
  checkid:number;
   me=this;
  constructor(private _employeeService:EmployeeService,private _router: Router,private _activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
  
     this._activatedRoute.paramMap.subscribe(parameterMap => {
    this.checkid=+parameterMap.get('id');
    this.getEmployee(this.checkid);

  });

    this._employeeService.getEmployees().subscribe((empList) => {
      this.employees=empList;
  });

 if(this.checkid!=0){
    const matched = this.employees.filter(item => item.id === this.checkid);
    if(matched.length === 0 ||  this.checkid==0){
      this._router.navigate(['list']);
    }
 }
 
   
     
  }
private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        phoneNumber: null,
        email: '',
        isActive: false
      };
      this.employeeForm.reset();
      this.panelTitle = 'Create Employee';
    }else {
    this.employee = Object.assign({}, this._employeeService.getEmployee(id));
    this.panelTitle = 'Edit Employee';
  }
}
  saveEmployee():void{
      const newEmployee: Employee = Object.assign({}, this.employee);
      this._employeeService.save(newEmployee);
      this.employeeForm.reset();
      this._router.navigate(['list']);
  }
 

}
