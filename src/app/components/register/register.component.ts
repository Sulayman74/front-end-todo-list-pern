import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private _userService: UserService
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

    this._userService.register(this.utilisateur).subscribe((reponse: any) => {
      console.log("test onSubmit register user", reponse);
      this._userService.setToken(reponse.token)
    })

    this._router.navigate(['main'])
  }

}
