import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyTimeoffComponent } from './apply-timeoff/apply-timeoff.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {path:'directory',component:EmployeeDirectoryComponent},
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'view/:id', component: ViewEmployeeComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'timeoff',component:ApplyTimeoffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
