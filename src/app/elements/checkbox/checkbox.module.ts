import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FormlessCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormlessCheckboxComponent
  ],
  exports: [
    FormlessCheckboxComponent
  ]
})
export class FormlessCheckboxModule { }
