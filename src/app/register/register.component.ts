import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router,private service:AppService){

  }
  
  data:any
  jwtToken!:string
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

register(){
  this.data=this.form.value;
  this.service.register(this.data).subscribe(response=>{
    this.jwtToken=response['token'];
})
this.router.navigate(['dashboard']);
}
}
