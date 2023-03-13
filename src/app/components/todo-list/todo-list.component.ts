import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { User } from 'src/app/models/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  formCtrl = new FormControl('')
  todos!: any
  @Input() fromParentTask!: Todo[]
  @Input() fromParentUser!: User[]
  user!: any
  task!: any


  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    console.log(this.fromParentUser);

  }

  onSubmit() {

    // console.log("test avec input", this.formCtrl.value);
    this._todoService.addTask(this.formCtrl.value).subscribe((task: Todo) => {
      console.log(task);
      this.fromParentTask.push(task)
      return this.fromParentTask
    })
    // this._todoService.addTask(this.formCtrl.value).pipe(map((task: Todo) => {
    //   this.task = task
    //   console.warn(this.task);
    // })).subscribe()
    this.formCtrl.reset()
  }

  onEnter(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onSubmit()
    }

  }
}
