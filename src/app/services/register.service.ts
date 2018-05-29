import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { User } from '../model/user.interface';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class RegisterService {
  
  constructor(private http:Http) {}

    register(user:User): Observable<User> {

      let header = new Headers();
      header.append("Content-Type", "application/json");

      return this.http.post(
        environment.register,
        JSON.stringify(user), { "headers": header, })
        .catch(this.handleError);
    }

    login(user:User) {

      let header = new Headers();
      header.append("Content-Type", "application/json");

      return this.http.post(
        environment.login,
        JSON.stringify(user), { "headers": header, })
        .catch(this.handleError);
    }

    createUser(user:User): Observable<User> {

      let header = new Headers();
      header.append("Content-Type", "application/json");

      return this.http.post(
        environment.createuser,
        JSON.stringify(user), { "headers": header, })
        .map((response: Response) => <User>(response.json()))
        .catch(this.handleError);
    }

    

    getUser(id:number){
      let url: string = environment.getuser + `/${id}`;
      return this.http.get(url)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    
  
    private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
