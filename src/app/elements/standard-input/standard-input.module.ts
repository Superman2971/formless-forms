import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { FormlessStandardInputComponent } from './standard-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormlessStandardInputComponent
  ],
  exports: [
    FormlessStandardInputComponent
  ]
})
export class FormlessStandardInputModule { }
