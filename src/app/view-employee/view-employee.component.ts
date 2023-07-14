import { Component } from '@angular/core';
import { EmployeeDetails } from '../EmployeeDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  employee!: EmployeeDetails
  data:any

  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
  }
}
