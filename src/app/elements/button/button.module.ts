import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FormlessButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormlessButtonComponent
  ],
  exports: [
    FormlessButtonComponent
  ]
})
export class FormlessButtonModule { }
