import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private service: AppService, private router: Router) { }

  data: any
  
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

  ngOnInit(): void {

  }

  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addEmployee(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
