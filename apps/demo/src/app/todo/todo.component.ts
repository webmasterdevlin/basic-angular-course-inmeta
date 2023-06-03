import { Component, OnInit } from '@angular/core';
import { Todo } from '@superheroes/api-interfaces';
import { TodoService } from './todo.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

UntilDestroy()
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

  ngOnInit() {
    this.getTodos();
  }

  getTodos(query = '') {
    return this.todoService
      .getTodos(query)
      .pipe(untilDestroyed(this))
      .subscribe((todos) => {
        this.todos = todos;
        this.activeTasks = this.todos.filter((todo) => !todo.isDone).length;
      })
  }
  addTodo() {
    const newTodo = {
      title: this.newTodo
    } as Todo;

    return this.todoService.add(newTodo)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.newTodo = '';
        this.todos.push(data);
      });
  }
  updateTodo(todo: Todo, newValue: string) {
    todo.title = newValue;

    return this.todoService.put(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => (todo.editing = false));
  }
  destroyTodo(todo: Todo, index: number) {
    return this.todoService.deleteById(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.todos.splice(index, 1));
  }
  clearCompleted() {
    this.todoService.deleteCompleted()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.todos = this.todos.filter((todo) => !todo.isDone);
      }
    );
  }
  toggleTodo(todo: Todo) {
    return this.todoService.toggle(todo)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.activeTasks = this.todos.filter(
          (todo) => !todo.isDone).length;
      });
  }
  allTodos() {
    this.getTodos();
  }
}
