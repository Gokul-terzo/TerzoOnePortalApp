import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EmployeeDetails } from '../EmployeeDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employee?: EmployeeDetails
  data:any

  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    let email = this.route.snapshot.params['email'];
    this.service.getEmployeeByEmail(email).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
  }
}
