import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login!: FormGroup<any>

  utilisateur = new User()

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {

    this.login = this._fb.group({

      email: [this.utilisateur.email, Validators.email],
      password: [this.utilisateur.password, Validators.required]
    })

  }

  onLogin() {
    let loggedUser = this.login.value
    this.utilisateur = Object.assign(this.utilisateur, loggedUser)
    this._userService.login(loggedUser).subscribe((reponse: any) => {

      if (reponse) {
        localStorage.setItem('token', reponse.token)
        this._router.navigate(['/main'])

      }
    
    })
  }

  onRegister() {
    this._router.navigate(['/register'])
  }

}
