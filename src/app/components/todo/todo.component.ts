import { Component, Input, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todos!: Todo[]
  // @Input() task!: Todo
  newTodos!: Todo[]
  constructor(private _deleteTask: TodoService) { }

  ngOnInit(): void {
    console.log("AllTodos from Todo Component", this.todos);
    this.todos
    this.newTodos
  }

  onDelete(id: any) {
    this._deleteTask.delete(id).subscribe((value: any) => {

      //** pour effacer en live je filtre */
      this.newTodos = this.todos.filter((todo: any) => todo.todo_id != id
      )
      console.log("réponse du delete", value);
      this.todos = [... this.newTodos]
    })

  }
}
