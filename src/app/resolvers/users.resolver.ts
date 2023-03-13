import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {
  user !: User
  constructor(
    private _userService: UserService
  ) { }
  resolve(): Observable<User[]> {
    return this._userService.getProfile().pipe(map((value: any) => this.user = value))

  }
}
