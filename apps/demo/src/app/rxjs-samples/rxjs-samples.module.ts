import { NgModule } from '@angular/core';
import { RxjsSamplesComponent } from './rxjs-samples.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RxjsSamplesComponent,
  },
];
@NgModule({
  declarations: [RxjsSamplesComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class RxjsSamplesModule {}
