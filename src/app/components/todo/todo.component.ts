import { Component, Input, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { TodoService } from './../../services/todo.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todos!: Todo[]

  @Input() user!: User[]
  newTodos!: Todo[]
  constructor(private _deleteTask: TodoService) { }

  ngOnInit(): void {
    console.log("AllTodos from Todo Component", this.todos);
    console.log(this.user);
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
