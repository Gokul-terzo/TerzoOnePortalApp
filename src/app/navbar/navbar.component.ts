import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}
  email!:string|null
  empDirectory(){
    this.router.navigate(['directory']);
  }
  timeOff(){
    this.router.navigate(['timeoff']);
  }
  dashBoard(){
    this.email=localStorage.getItem('email');
    this.router.navigate(['dashboard',this.email]);
  }
}
