import { Component, OnInit,Inject } from '@angular/core';
import {Employee} from '../../models/employee.models'
import {EmployeeService} from '../../share/emp.ser'
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})

export class EmplistComponent implements OnInit {

employees: Employee[] = [];
employeeToDisplay: Employee;
filteredEmployees: Employee[]
private _searchTerm: string;
 get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private _EmployeeService:EmployeeService,private _router:Router,public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this._EmployeeService.getEmployees().subscribe((empList) => {
      this.employees=empList;
    })
    this.filteredEmployees=this.employees;
    
  }

  editEmployee(employeeId: number){
     this._router.navigate(['/edit', employeeId])

  }
    deleteEmployee(employeeId: number) {
       console.log('delete');
    this._EmployeeService.deleteEmployee(employeeId);
    const i = this.filteredEmployees.findIndex(e => e.id === employeeId);
      if (i !== -1) {
        this.filteredEmployees.splice(i, 1);
      }
  }
     openDialog=(employeeId: number)=> {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=="ok"){
        this.deleteEmployee(employeeId)
      }
    });
  }
 
  



}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
   styles: ['.btn-primary{margin-right:10px;}']
})
export class DialogOverviewExampleDialog{
  check:boolean=false
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close("close");
  }
  removeUser(): void {
    this.check=true;
    this.dialogRef.close("ok");

  }

}

