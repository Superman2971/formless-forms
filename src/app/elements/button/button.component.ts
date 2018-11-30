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
  @Input() height: number;
  @Input() inverse: boolean = false;

  constructor() {}

  clicked(evt) {
    if (this.disabled) {
      evt.stopPropagation();
    }
  }
}
