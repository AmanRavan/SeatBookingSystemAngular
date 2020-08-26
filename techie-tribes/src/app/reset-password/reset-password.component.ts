import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  employee: Employee;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.employee =new Employee;
  }

  submitForm(){
      
    this.apiService.resetPassword(this.employee).subscribe(data => console.log(data));
  }
}
