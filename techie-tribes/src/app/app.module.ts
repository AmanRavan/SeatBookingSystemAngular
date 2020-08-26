import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeedetalisComponent } from './employeedetalis/employeedetalis.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LocationComponent } from './location/location.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
   SeatBookingComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    EmployeeRegistrationComponent,
    AdminRegistrationComponent,
    EmployeeLoginComponent,
    AdminLoginComponent,
    EmployeePageComponent,
    EmployeedetalisComponent,
    EmployeeUpdateComponent,
    LocationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegistrationsuccessComponent,
    AdminPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   //SeatBookingComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // aman SeatBookingComponent
 }
