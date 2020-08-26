import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: Employee;
  msg = '';
  constructor(private apiService: ApiService, private _router :Router) { }

  ngOnInit() {
    this.employee = new Employee;
    
  }
  submitForm(){
    this.apiService.registerEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.msg = "Registration Successfull";
    })
  }
}
