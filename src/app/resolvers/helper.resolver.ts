import { Observable, map, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class HelperResolver implements Resolve<Todo[]> {

  task!: Todo

  constructor(private _todoService: TodoService) { }

  resolve(): Observable<Todo[]> {
    return this._todoService.getTodos().pipe(map((value: any) => this.task = value))
  }
}
