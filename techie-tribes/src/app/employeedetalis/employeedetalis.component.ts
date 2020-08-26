import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeedetalis',
  templateUrl: './employeedetalis.component.html',
  styleUrls: ['./employeedetalis.component.css']
})
export class EmployeedetalisComponent implements OnInit {

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
