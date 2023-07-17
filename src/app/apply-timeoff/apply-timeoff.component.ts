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
  date!:Date
  note!:string
  Leaves:any

  applyTimeOff: TimeOff = new TimeOff();
  constructor(private router:Router, private service:AppService){
    this.email=localStorage.getItem("email");
    this.service.getEmployeeByEmail(this.email).subscribe(data=>{
      this.employee=data;
      this.service.getRemainingLeaves(this.employee.id).subscribe(data=>{
        this.Leaves=data
        console.log(this.Leaves);
      })
    });
    
    
  }

ngOnInit(): void {

}

sickLeave(){
  this.applyTimeOff.leaveType="Sick"
}

earnedLeave(){
  this.applyTimeOff.leaveType="Earned"
}

paternityLeave(){
  this.applyTimeOff.leaveType="Paternity"
}

  applyLeave(emp:EmployeeDetails){
    this.applyTimeOff.employee=emp
    this.applyTimeOff.leaveDate=this.date
    this.applyTimeOff.note=this.note
    this.service.applyLeave(this.applyTimeOff).subscribe(data=>{  
      window.alert("Leave applied!") 
    })
  }
}
