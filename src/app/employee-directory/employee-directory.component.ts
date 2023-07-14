import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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
  query:string="";
  dept:string="";
  role:string|null
  isNotAdmin=true;
  name:string=""
  
  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

  form1 = new FormGroup({
    dept: new FormControl('', [Validators.required])
  })

  form2 = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  constructor(private service: AppService,private router:Router) { 
    this.role=localStorage.getItem("Role");
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      this.totalemployees=data.length;
    }, error => {
      if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    });
  }

  viewEmployee(id:number) {
  this.router.navigate(['view',id]);
  }


  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
  

  deleteEmployee(id: number,email:string){
    localStorage.setItem('email',email);
    this.service.deleteUser(email);
    this.service.deleteEmployee(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    })
  }

  searchUser(){
    if(this.query.length==0)
    {
      this.service.getEmployees().subscribe(data => {
        this.employees = data;
        this.totalemployees=data.length;
    });
  }
    else{
    this.service.searchUsers(this.query).subscribe(data => {
      this.employees = data;
    })
  }
  }

  sortDept(){
    this.service.sortDept(this.dept).subscribe(data=>{
      this.employees=data;
    })
  }
  
  sortName(){
    this.service.sortName(this.name).subscribe(data=>{
      this.employees=data;
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    }

  ngOnInit(): void {
    if(this.role=="admin"){
        this.isNotAdmin=false
        this.router.navigate(['directory']);
    }
    
  }

}