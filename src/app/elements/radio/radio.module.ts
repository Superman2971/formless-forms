import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { FormlessRadioComponent } from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormlessRadioComponent
  ],
  exports: [
    FormlessRadioComponent
  ]
})
export class FormlessRadioModule { }
