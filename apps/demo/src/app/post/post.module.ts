import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
];
@NgModule({
  declarations: [PostComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PostModule {}
