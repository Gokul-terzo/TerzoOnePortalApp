import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-employee-driectory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectoryComponent implements OnInit {

  employees!:any[]
  data:any
  p:number=1
  totalemployees:any;
  query!:string;

  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

viewEmployee(id:number) {
this.router.navigate(['view',id]);
}


  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
  constructor(private service: AppService,private router:Router) { 
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      this.totalemployees=data.length;
    }) 
  }

  deleteEmployee(id: number){
    this.service.deleteEmployee(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    })
  }

  searchUser(){
    this.service.searchUsers(this.query).subscribe(data => {
      this.employees = data;
    })
  }

  ngOnInit(): void {
    console.log("Oninit emp-directory");
  }

}