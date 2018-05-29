import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RegisterService } from './services/register.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  { path: 'edit/:id', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserhomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, HttpModule, JsonpModule
  ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
