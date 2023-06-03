import { NgModule } from '@angular/core';
import { RxjsSamplesComponent } from './rxjs-samples.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RxjsSamplesComponent,
  },
];
@NgModule({
  declarations: [RxjsSamplesComponent],
  imports: [RouterModule.forChild(routes)],
})
export class RxjsSamplesModule {}
