import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tasks!: Todo[]
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService : UserService,
    private _router :Router) { }

  ngOnInit(): void {
    
    this._activatedRoute.data.subscribe(({ todos }) => {
      console.log(todos);
      this.tasks = todos
    })

  }

  onDisconnect(){
    this._userService.clearToken()
    this._router.navigate(['/'])
  }

}
