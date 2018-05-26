import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

const noop = () => { };

@Component({
  selector: 'formless-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class FormlessRadioComponent implements OnChanges {
  @Input() value: any;
  @Input() groupValue: any;
  @Input() checked: boolean = false;
  @Input() circle: boolean = false;
  @Input() left: boolean = false;
  @Input() color: string = 'rgba(0, 0, 0, 0.87)';
  @Input() size: number = 16;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const groupValue: SimpleChange = changes.groupValue;
    if (groupValue && (groupValue.currentValue || groupValue.currentValue === '')) {
      if (this.value !== groupValue.currentValue) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    }
  }

  clicked() {
    if (!this.checked) {
      this.checked = true;
      this.change.emit(this.value);
    }
  }
}
