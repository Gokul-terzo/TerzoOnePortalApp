import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-employee-driectory',
  templateUrl: './employee-driectory.component.html',
  styleUrls: ['./employee-driectory.component.css']
})
export class EmployeeDriectoryComponent implements OnInit {
  constructor(private service: AppService) { 
    this.service.getUsers().subscribe(data => {
      this.employees = data;
    })
  }
  employees:any[]|undefined
  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
    })
  }
  ngOnInit(): void {
    console.log("Oninit emp-directory");
  }

}