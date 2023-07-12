import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from '../EmployeeDetails';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee!: EmployeeDetails
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    employeeType: new FormControl('', [Validators.required]),
    team: new FormControl('', [Validators.required]),
    workLocation: new FormControl('', [Validators.required]),
    profileUrl: new FormControl('', [Validators.required]),

  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateEmployee(this.employee?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });;
  }
}
