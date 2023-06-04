import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import type { Todo } from '@superheroes/api-interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

UntilDestroy();
@Component({
  selector: 'superheroes-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];
  public activeTasks = 0;
  public newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos('');
  }

  getTodos(query = '') {
    return this.todoService
      .getTodos(query)
      .pipe(untilDestroyed(this))
      .subscribe((todos) => {
        this.todos = todos;
        this.activeTasks = this.todos.filter((todo) => !todo.isDone).length;
      });
  }
  addTodo() {
    const newTodo = {
      title: this.newTodo,
    } as Todo;
    return this.todoService
      .add(newTodo)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.newTodo = ''; // clear input form value
        this.todos.push(data);
      });
  }
  updateTodo(todo: Todo, newValue: string) {
    todo.title = newValue;
    return this.todoService
      .put(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => (todo.editing = false));
  }
  destroyTodo(todo: Todo, index: number) {
    this.todoService
      .deleteById(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.todos.splice(index, 1);
        this.activeTasks = this.todos.filter((todo) => !todo.isDone).length;
      });
  }

  clearCompleted() {
    this.todoService
      .deleteCompleted()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.todos = this.todos.filter((todo) => !todo.isDone);
      });
  }
  toggleTodo(todo: Todo) {
    this.todoService
      .toggle(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.activeTasks = this.todos.filter((todo) => !todo.isDone).length;
      });
  }
  allTodos() {
    this.getTodos('');
  }
  activeTodos() {
    return this.todoService
      .getTodos('')
      .pipe(untilDestroyed(this))
      .subscribe((todos) => {
        const actives = todos.filter((todo) => !todo.isDone);
        this.activeTasks = actives.length;
        this.todos = actives;
      });
  }
  completedTodos() {
    return this.todoService
      .getTodos('')
      .pipe(untilDestroyed(this))
      .subscribe((todos) => {
        const completed = todos.filter((todo) => todo.isDone);
        this.activeTasks = completed.length;
        this.todos = completed;
      });
  }
}
