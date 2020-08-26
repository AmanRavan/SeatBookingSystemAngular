import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    employee:Employee;
  constructor(private apiService :ApiService, private router:Router) { }

  ngOnInit() {
    this.employee = new Employee;
    
    
  }
  submitForm(){
    console.log(this.employee.emailId);
    this.apiService.forgotPassword(this.employee).subscribe(data =>
       {
      console.log(data);
    this.router.navigate(['/resetpassword'])
    
  })
    
}
}
