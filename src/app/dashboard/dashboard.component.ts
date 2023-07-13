import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EmployeeDetails } from '../EmployeeDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employee?: EmployeeDetails
  data:any
  holidays:any
  birthdayBuddies:any
  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    let email = this.route.snapshot.params['email'];
    this.service.getEmployeeByEmail(email).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    }, error => {
      if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    });

    this.service.getHolidays().subscribe(data=>{
      this.holidays=data
      console.log(this.holidays);
    })

    this.service.getBirthday().subscribe(data=>{
      this.birthdayBuddies=data
      console.log(this.birthdayBuddies);
    })

  }
}
