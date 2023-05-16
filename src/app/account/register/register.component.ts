import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm :FormGroup|any;
  constructor(private _router:Router,private _http:HttpClient){}
  ngOnInit(): void {
  
      this.signupForm = new FormGroup({
        
      'FullName': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      'PhoneNumber': new FormControl(),
      'Gender':new FormControl(),
      'City' : new FormControl()

    })


  } 
  /*
  signupdata(signupForm:FormControl){
    //console.log(this.signupForm.value)
   if(this.signupForm.valid)
    {
    this.api.postEmployee(this.signupForm.value)
    .subscribe({next:(res)=>{
        alert("signup sucessfully");
        this.signupForm.reset();
        this.route.navigate(['login']);
      

      },
      error:()=>{
        alert("error while updating the record");

      }
    })
  }

    
  }*/
  signupdata(signupForm:FormControl){
    this._http.post<any>("http://localhost:3000/SignupUser",this.signupForm.value).subscribe(res=>{
    alert("signup sucessfull");
    this.signupForm.reset();
    this._router.navigate(['login']);
  },err=>{
    alert("something went wrong")
    })

  }
}
