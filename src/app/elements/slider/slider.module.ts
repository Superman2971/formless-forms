import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { FormlessSliderComponent } from './slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormlessSliderComponent
  ],
  exports: [
    FormlessSliderComponent
  ]
})
export class FormlessSliderModule { }
