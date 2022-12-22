import { Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _apiUrl = `${environment.Api_URL}users/`
  
  currentUser = new Subject<any>()
  loggedUser = new Subject<any>()

  constructor(
    private _http: HttpClient,
    private _router: Router) { }

  static getToken(){
    return localStorage.getItem('token')
  }

  clearToken() {
    localStorage.removeItem('token')
    this._router.navigate((['/login']))
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
    this._router.navigate(['main'])
  }

  login(log : User): Observable<any> {
    // console.log(log);
    return this._http.post(`${this._apiUrl}login`,log)
  }

  register(user: User): Observable<any> {
    // console.log(salarie, "Test du register 1");
    return this._http.post(`${this._apiUrl}/register`, user)

  }

}
