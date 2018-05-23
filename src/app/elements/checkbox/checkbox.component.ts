import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formless-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class FormlessCheckboxComponent {
  @Input() checked;
  @Input() color;
  @Input() size;
  @Output() change = new EventEmitter<boolean>();
  constructor() {}

  onToggle() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
