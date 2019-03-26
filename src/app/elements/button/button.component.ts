import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'formless-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormlessButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean = false;
  @Input() color: string;
  @Input() inverse: boolean = false;
  @Input() inputStyles: string;

  constructor() {}

  clicked(evt) {
    if (this.disabled) {
      evt.stopPropagation();
    }
  }
}
