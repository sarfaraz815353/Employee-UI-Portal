import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm :FormGroup|any
  constructor(private api:ApiService,private _router:Router){}
  ngOnInit(): void {
    
    this.employeeForm = new FormGroup({
      employeeid :new FormControl(),
      fullname : new FormControl(),
      emailid : new FormControl(),
      mobileno : new FormControl(),
      gender :new FormControl(),
      salary : new FormControl(),
      joiningdate : new FormControl()
    })

  }
  employeeData(employeeForm:FormControl){
    this.api.postEmployee(this.employeeForm.value).subscribe({
      next:(res)=>{
        alert("employee added sucessfully");
        this.employeeForm.reset();
        this._router.navigate(['dashboard'])
      },
      error:()=>{
        alert("error while updating details")
      }


    })
  }

  
  }



