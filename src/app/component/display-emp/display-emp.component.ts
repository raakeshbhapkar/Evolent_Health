import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from '../../models/employee.models';
@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.css']
})
export class DisplayEmpComponent implements OnInit {
 @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
   
  }


}
