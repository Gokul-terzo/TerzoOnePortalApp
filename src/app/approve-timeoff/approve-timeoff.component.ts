import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { TimeOff } from '../TimeOff';
@Component({
  selector: 'app-approve-timeoff',
  templateUrl: './approve-timeoff.component.html',
  styleUrls: ['./approve-timeoff.component.css']
})
export class ApproveTimeoffComponent {

  LeavesApplied:any
  constructor(private router:Router,private service:AppService){
      this.service.getAppliedLeaves().subscribe(data=>{
        this.LeavesApplied=data;
        console.log(this.LeavesApplied);
      })
  }

  approveLeave(id:number){
    this.service.approveLeave(id).subscribe(data=>{

    })
    window.location.reload();
  }

}
