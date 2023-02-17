import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUser = `${environment.Api_URL}/users`
  private _apiTodo = `${environment.Api_URL}/todos`
  constructor(
    private _http: HttpClient,
    private _router: Router) { }

  login(log: any) { this._http.post(`${this._apiUser}/login`, log) }

  clearToken() {
    localStorage.removeItem('token')
    this._router.navigate((['/login']))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
    this._router.navigate(['overview'])
  }
}
