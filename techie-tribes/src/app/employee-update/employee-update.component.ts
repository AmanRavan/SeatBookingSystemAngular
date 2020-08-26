import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee:Employee;
  router: any;
  
  constructor(private apiService : ApiService, private _router :Router) { }

  ngOnInit() {
    this.employee = new Employee;
  }
  submitForm(){
    this.apiService.registerEmployee(this.employee).subscribe(data => console.log(data));
  }
}
