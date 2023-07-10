import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDriectoryComponent } from './employee-driectory/employee-driectory.component';

const routes: Routes = [
  { path: '', component: EmployeeDriectoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
