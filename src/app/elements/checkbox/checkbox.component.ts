import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formless-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class FormlessCheckboxComponent {
  @Input() checked: boolean = false;
  @Input() color: string;
  @Input() size: number = 24;
  @Output() change = new EventEmitter<boolean>();
  constructor() {}

  onToggle() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
