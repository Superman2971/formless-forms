import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'formless-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class FormlessRadioComponent implements OnChanges {
  @Input() value: any;
  @Input() groupValue: any;
  @Input() circle: boolean = false;
  @Input() left: boolean = false;
  @Input() borderColor: string;
  @Input() color: string = 'rgba(0, 0, 0, 0.87)';
  @Input() size: number = 16;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  checked: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const groupValue: SimpleChange = changes.groupValue;
    if (groupValue) {
      if (this.value !== groupValue.currentValue) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    }
  }

  clicked() {
    this.checked = true;
    this.change.emit(this.value);
  }
}
