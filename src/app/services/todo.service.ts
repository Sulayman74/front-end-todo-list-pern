import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _apiUrl = `${environment.Api_URL}todos/`
  constructor(private _http: HttpClient) { }


  //** je créer une tâche */
  addTask(todo: any): Observable<any> {
    console.log("test de post");
    return this._http.post(`${this._apiUrl}create`,
      { description: todo });
  }

  getTodos(): Observable<any> {
    return this._http.get(`${this._apiUrl}allTodos`)
  }

  getATodo(id: number): Observable<any> {
    return this._http.get(`${this._apiUrl}one/${id}`)
  }

  delete(id: any): Observable<any> {

    return this._http.delete(`${this._apiUrl}delete/${id}`)
  }

  updateTodo(id: number, editTodo: string): Observable<any> {
    return this._http.put(`${this._apiUrl}update/${id}`,
      { description: editTodo })
  }



}
