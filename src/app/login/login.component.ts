import { Component, AfterViewChecked, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.interface';
import { RegisterService } from '../services/register.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register: NgForm;
  public formErrors = {};
  public user:User = { username: "", email: "", id: "", photo: "", name: "", mobile: "", github: "", password:"", follow: [], createdAt: "" };
  public confirmPassword;
  constructor(private _regService: RegisterService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(valid){
    
    this._regService.login(this.user).subscribe(
      data => {
        console.log(JSON.stringify(data));
        //this.getComments();
        if(data.status === 200){
          this._router.navigate([ `/user/2`]);
        }else{
          this.formErrors["failed"] = true;
        }
      },
      err => console.error(err),
      () => console.log('done')
    )

    
  }

}
