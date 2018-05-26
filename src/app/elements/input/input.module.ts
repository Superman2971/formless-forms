import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { FormlessInputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormlessInputComponent
  ],
  exports: [
    FormlessInputComponent
  ]
})
export class FormlessInputModule { }
