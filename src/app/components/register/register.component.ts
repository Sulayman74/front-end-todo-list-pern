import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register!: FormGroup<any>

  utilisateur = new User()

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.register = this._fb.group({

      lastname: [this.utilisateur.lastname, Validators.required],
      firstname: [this.utilisateur.firstname, Validators.required],
      email: [this.utilisateur.email, Validators.email],
      password: [this.utilisateur.password, Validators.required]


    })
  }

  onSubmit() {
    const formulaire = this.register.value
    this.utilisateur = Object.assign(this.utilisateur, formulaire)

    this._userService.register(formulaire).subscribe((reponse: any) => {
      let token = reponse.token
      if (reponse) {
        this._userService.setToken(token)
        this._snackbar.open("Connectez vous avec vos identifiants", "OK", { duration: 2000 })
      }

    })

    this._router.navigate(['/login'])
  }

}
