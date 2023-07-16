import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimeOff } from '../TimeOff';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { EmployeeDetails } from '../EmployeeDetails';
@Component({
  selector: 'app-apply-timeoff',
  templateUrl: './apply-timeoff.component.html',
  styleUrls: ['./apply-timeoff.component.css']
})
export class ApplyTimeoffComponent {

  employee!:EmployeeDetails
  email:any
  applyTimeOff: TimeOff = new TimeOff();
  constructor(private router:Router, private service:AppService){
    this.email=localStorage.getItem("email");
    this.service.getEmployeeByEmail(this.email).subscribe(data=>{
      this.employee=data;
    });
  }

ngOnInit(): void {

}
  applyLeave(emp:EmployeeDetails){
    this.applyTimeOff.employee=emp
    this.applyTimeOff.leaveDate=new Date("2023-07-20");
    this.applyTimeOff.leaveType="Sick"
    this.applyTimeOff.note="Fever"
    this.service.applyLeave(this.applyTimeOff).subscribe(data=>{   
    })
  }
}
