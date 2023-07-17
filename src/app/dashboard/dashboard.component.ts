import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EmployeeDetails } from '../EmployeeDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TimeOff } from '../TimeOff';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  applyTimeOff: TimeOff = new TimeOff();
  employee!: EmployeeDetails
  data:any
  holidays:any
  birthdayBuddies:any
  newHires:any
  workAniversary:any
  bdBuddiesLength!:number
  workAnniversaryLength!:number
  newHiresLength!: number;
  date!:Date
  type!:string
  appliedLeaves:any

  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){
    let email = this.route.snapshot.params['email'];
    this.service.getEmployeeByEmail(email).subscribe(data => {
      this.employee = data
      console.log(this.employee)
      this.service.empAppliedLeave(this.employee.id).subscribe(data=>{
        console.log("In get applied leaves");
        this.appliedLeaves=data
        console.log("Applied leaves",this.appliedLeaves);
      })
    }, error => {
      if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    });
  }
  ngOnInit(): void {
   

    this.service.getHolidays().subscribe(data=>{
      this.holidays=data
      console.log(this.holidays);
    })

    this.service.getBirthday().subscribe(data=>{
      this.birthdayBuddies=data
      this.bdBuddiesLength=this.birthdayBuddies.length;
      console.log(this.birthdayBuddies);
    })

    this.service.getNewHires().subscribe(data=>{
        this.newHires=data
        this.newHiresLength=this.newHires.length;
        console.log(this.newHires);
    })

    this.service.getWorkAnniversary().subscribe(data=>{
      this.workAniversary=data
      this.workAnniversaryLength=this.workAniversary.length;
      console.log("WorkAnniversary",this.workAniversary);
    })

    

  }

  applyLeave(emp:EmployeeDetails){
    this.applyTimeOff.employee=emp
    this.applyTimeOff.leaveDate=this.date
    this.applyTimeOff.leaveType=this.type
    this.service.applyLeave(this.applyTimeOff).subscribe(data=>{  
      window.alert("Leave applied!") 
    })
  }
}
