import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formless-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class FormlessToggleComponent {
  @Input() checked;
  @Output() change = new EventEmitter<boolean>();
  constructor() {}

  onToggle() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
