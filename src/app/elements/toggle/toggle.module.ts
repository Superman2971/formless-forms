import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FormlessToggleComponent } from './toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormlessToggleComponent
  ],
  exports: [
    FormlessToggleComponent
  ]
})
export class FormlessToggleModule { }
