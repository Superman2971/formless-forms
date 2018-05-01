import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { FormlessCardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormlessCardComponent
  ],
  exports: [
    FormlessCardComponent
  ]
})
export class FormlessCardModule { }
