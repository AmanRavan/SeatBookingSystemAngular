import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  admin: Admin;
  msg="";
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit() {
  this.admin = new Admin;
  }
  submitForm(){
    this.apiService.registerAdmin(this.admin).subscribe(data => 
      { console.log(data);
    this.router.navigate(['/registrationsuccess']);
      },
    error => {
      console.log("error");
      this.msg = "bad credentials, please enter valid emailId and passowrd";
    }
    
    )
  }
}

