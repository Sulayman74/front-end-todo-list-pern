import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _userService: UserService,
    private _snackbar: MatSnackBar
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
      console.log(reponse);
      if (reponse) {
        localStorage.setItem('token', reponse.token)
        this._router.navigate(['/main'])
        this._snackbar.open(`${reponse.message}`, "OK", { duration: 1500 })
      }

    })
  }

  onRegister() {
    this._router.navigate(['/register'])
  }

}
