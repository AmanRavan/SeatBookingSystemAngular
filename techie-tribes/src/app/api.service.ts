import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './Employee';

import { Observable } from 'rxjs';
import { Admin } from './admin';


const remoteUrl = "http://localhost:2222";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  registerEmployee(employee:Employee){
    return this.httpClient.post(remoteUrl+'/employee',employee);

  }
  employeeLogin(employee:Employee):Observable<any>{
    return this.httpClient.post<any>(remoteUrl+'/employee/login',employee);
  }

  registerAdmin(admin: Admin){
    return this.httpClient.post(remoteUrl+'/admin',admin);
  }
  adminLogin(admin:Admin):Observable<any>{
    return this.httpClient.post(remoteUrl+'/admin/login',admin);
  }
  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put(remoteUrl+'/employee/',employee);
  }

  forgotPassword(employee:Employee):Observable<any>{
    return this.httpClient.post(remoteUrl+'/employee/forgot',employee);
  }

  resetPassword(employee:Employee):Observable<any>{
    return this.httpClient.post(remoteUrl+'/employee/reset',employee);
  }

  storeUserInfo(emailid) {
    localStorage.setItem('emailId', emailid);
  }
}
