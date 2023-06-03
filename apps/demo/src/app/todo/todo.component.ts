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
}
