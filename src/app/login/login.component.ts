import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { LoginObject } from '../LoginObject';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role!:string;
  isAdmin:boolean=false;

  constructor(private service:AppService,private router:Router){
    
  }
  data:any
  jwtToken!:any
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  
login() {
  this.data=this.form.value;
  console.log(this.data);
  this.service.login(this.data).subscribe(response=>{
    this.jwtToken=response['token'];
    console.log(this.jwtToken);
    localStorage.setItem('jwtToken',this.jwtToken);
    console.log(localStorage.getItem('jwtToken'));

  this.service.getRole(this.data.email).subscribe(response=>{
    if(response['role']=="ADMIN"||response['role']=="admin"){
      this.isAdmin=true;
      localStorage.setItem("Role","admin");
    }
  })
  console.log(this.data.email);
  localStorage.setItem('email',this.data.email);
    this.router.navigate(['dashboard',this.data.email]).then(()=>{
      window.location.reload();
    })
    }
  )

}

}
