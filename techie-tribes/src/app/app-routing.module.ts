import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LocationComponent } from './location/location.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  
 // {path:"login", component:LoginComponent},
  {path:"adminlogin", component:AdminLoginComponent},
  {path:"home", component:HomeComponent,
  children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},

  ]},
  //{path:"home", component:HomeComponent},
  //{path:"register", component:RegisterComponent},
  {path:"adminregister", component:AdminRegistrationComponent},
  {path:"employeeregister", component:EmployeeRegistrationComponent},
  {path:"admin", component:AdminComponent},
  {path:"about", component:AboutComponent},
  {path:"employeepage", component:EmployeePageComponent},
  {path:"updateemployee", component:EmployeeUpdateComponent},
  {path:"location", component:LocationComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"resetpassword", component:ResetPasswordComponent},
 {path:"seatBooking", component:SeatBookingComponent},
 {path:"registrationsuccess", component:RegistrationsuccessComponent},
 {path:"adminpage", component:AdminPageComponent},
  {path:"homepage", component:HomePageComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
