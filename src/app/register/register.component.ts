import { Component, AfterViewChecked, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.interface';
import { RegisterService } from '../services/register.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: NgForm;
  public formErrors = {};
  public user:User = { username: "", email: "", id: "", photo: "", name: "", mobile: "", github: "", password:"", follow: [], createdAt: "" };
  public confirmPassword;
  constructor(private _regService: RegisterService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(valid){
    
    this._regService.createUser(this.user).subscribe(
      data => {
        console.log(JSON.stringify(data));
        //this.getComments();
        console.log(JSON.stringify(data));
        this._regService.register(data).subscribe(
         token => {
            console.log(JSON.stringify(token));
            this._router.navigate([ `/user/2`]);
          },
          err => console.error(err),
          () => console.log('done')
        )
      },
      err => console.error(err),
      () => console.log('done')
    )

    
  }

}
