import { Component, Input } from '@angular/core';

@Component({
  selector: 'formless-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class FormlessButtonComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() color: string;
  @Input() inverse: boolean;

  constructor() {}

  clicked(evt) {
    if (this.disabled) {
      evt.stopPropagation();
    }
  }
}
