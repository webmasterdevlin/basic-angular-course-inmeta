import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  exports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
