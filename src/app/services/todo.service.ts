import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this._http.get(`${this._apiUrl}${id}/one`)
  }

  delete(task_id: number): Observable<any> {
    return this._http.delete(`${this._apiUrl}${task_id}/delete`)
  }

  updateTodo(id: number, editTodo: string): Observable<any> {
    return this._http.put(`${this._apiUrl}${id}/update`,
      { description: editTodo })
  }



}
