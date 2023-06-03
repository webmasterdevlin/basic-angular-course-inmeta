import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@superheroes/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(query = '') {
    return this.http.get<Todo[]>(`/api/todo?query=${query}`);
  }
  add(data: Todo) {
    return this.http.post<Todo>('/api/todo', data);
  }
  put(changed: Todo) {
    return this.http.put<Todo>(`/api/todo/${changed.id}`, changed);
  }
  deleteById(selected: Todo) {
    return this.http.delete<Todo>(`/api/todo/${selected.id}`);
  }
  deleteCompleted() {
    return this.http.delete<void>(`/api/todo/delete/completed`);
  }
  toggle(selected: Todo) {
    selected.isDone = !selected.isDone;
    return this.http.patch<Todo>(`/api/todo/${selected.id}`, selected);
  }
}
