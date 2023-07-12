import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyTimeoffComponent } from './apply-timeoff/apply-timeoff.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDirectoryComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    NavbarComponent,
    DashboardComponent,
    ApplyTimeoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
