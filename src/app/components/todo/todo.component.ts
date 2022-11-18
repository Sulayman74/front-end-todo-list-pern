import { Component, Input, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todos!: Todo[]
  // @Input() task!: Todo

  constructor() { }

  ngOnInit(): void {
    console.log("AllTodos from Todo Component", this.todos);
  }

}
