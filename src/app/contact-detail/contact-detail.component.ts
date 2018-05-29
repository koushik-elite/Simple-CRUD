import { Component, AfterViewChecked, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.interface';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: NgForm;
  public formErrors = {};
  public user:User = { username: "", email: "", id: "", photo: "", name: "", mobile: "", github: "", password:"", follow: [], createdAt: "" };
  public confirmPassword;
  constructor(_regService: RegisterService) { }

  ngOnInit() {
  }

}
