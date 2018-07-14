import { Component } from '@angular/core';

@Component({
  selector: 'formless-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss']
})
export class RadioDemoComponent {
  code = [{
    text: 'HTML',
    value: 'radio_html'
  }];
  properties = [{
    name: 'value',
    type: '???',
    default: 'null',
    description: ''
  }, {
    name: 'groupValue',
    type: '???',
    default: 'null',
    description: ''
  }, {
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'circle',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'left',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'color',
    type: 'string',
    default: 'rgba(0, 0, 0, 0.87)',
    description: ''
  }, {
    name: 'size',
    type: 'number',
    default: '16',
    description: ''
  }, {
    name: 'change',
    type: 'event',
    default: '-',
    description: 'When toggled the component will emit an event. The event is type any????.'
  }];
  // @Input() value: any;
  // @Input() groupValue: any;
  // @Input() checked: boolean = false;
  // @Input() circle: boolean = false;
  // @Input() left: boolean = false;
  // @Input() color: string = 'rgba(0, 0, 0, 0.87)';
  // @Input() size: number = 16;
  // @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
