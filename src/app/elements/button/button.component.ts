import { Component, Input } from '@angular/core';

@Component({
  selector: 'formless-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class FormlessButtonComponent {
  @Input() icon;
  @Input() text;
  @Input() disabled;
  @Input() color;

  constructor() {}
}
