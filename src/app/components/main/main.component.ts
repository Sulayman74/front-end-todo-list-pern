import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tasks!: Todo[]
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _todoService: TodoService,
    private _router: Router) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe(({ todos }) => {
      console.log(todos);
      this.tasks = todos
    })

  }

  onDisconnect() {
    this._userService.clearToken()
    this._router.navigate(['/'])
  }
  onTest() {
    console.log("hello World");
    this._todoService.getTodos().pipe((take(1))).subscribe((value: any) => {
      console.log(value);
    })
  }
}
