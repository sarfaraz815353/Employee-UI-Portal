import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup|any;
  constructor(private _http:HttpClient, private _router: Router){}
  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password' :new FormControl()
    })
  }
  //logindata(loginForm:FormGroup){
    //console.log(this.loginForm.value);

    /*this.api.getEmployee(this.loginForm.value)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username  && a.password ===this.loginForm.value.password
      });
      if(user){
        alert('You are sucessfully login');
        this.loginForm.reset();
        this.route.navigate(['dashboard']);
      } else
      {
        alert('User not found');
        this.route.navigate(['login']);
      }},
      err=>{
        alert('something was wrong')
    })

    

  }*/
  logindata(loginForm:FormGroup){
    this._http.get<any>("http://localhost:3000/SignupUser/").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email  && a.password === this.loginForm.value.password
      });
      if(user){
        alert('you are sucessfully login');
        this.loginForm.reset();
        this._router.navigate(['dashboard']);
      }else{
        alert('user not found');
        this._router.navigate(['login']);
      }

    },err=>{
      alert('something was wrong')
    })
}
}