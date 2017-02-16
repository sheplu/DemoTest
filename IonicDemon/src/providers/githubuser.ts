import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

/*
  Generated class for the Githubuser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
  url = 'https://api.github.com';//users
  wars = 'http://swapi.co/api';//people/

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.url}/users`)
      .map(res => <User[]>res.json());
  }
  
  loadDetails(login: string): Observable<User> {
      return this.http.get(`${this.url}/users/${login}`)
      .map(res => <User>res.json());
  }
}
