import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin;  
  msg=''; 
  constructor(private apiService :ApiService, private _router :Router) { }

  ngOnInit() {
    this.admin = new Admin;
  }
  submitForm(){
      
    this.apiService.adminLogin(this.admin).subscribe(data =>{
      console.log(data);
      this._router.navigate(['/adminpage']);
      
  
  })
}

}
