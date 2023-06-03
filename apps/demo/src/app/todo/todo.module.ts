import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  }
]

@NgModule({
  declarations: [TodoComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TodoModule {}
