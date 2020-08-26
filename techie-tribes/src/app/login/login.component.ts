import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee;
  router: any;
  msg=''; 
  constructor(private apiService : ApiService, private _router :Router) { }

  ngOnInit() {
    this.employee = new Employee;
  }

    submitForm(){
      
      this.apiService.employeeLogin(this.employee).subscribe(data =>
        {
         console.log(data);
      this._router.navigate(['/employeepage']);
      },
      error => {
        console.log("error");
        this.msg = "bad credentials, please enter valid emailId and passowrd";
      }
      
      )
    }
    gotoadminlogin(){
      this._router.navigate(['/adminlogin'])
    }
   
}
