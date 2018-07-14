import { Component } from '@angular/core';

@Component({
  selector: 'formless-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss']
})
export class RadioDemoComponent {
  radio2 = 'circle';
  radioButtons: Array<any> = [{
    value: {test: 'object'},
    text: 'Object'
  }, {
    value: 'string',
    text: 'String'
  }, {
    value: 123,
    text: 'Number'
  }, {
    value: null,
    text: 'Null'
  }, {
    text: 'Undefined'
  }, {
    text: 'Duplicate Value (undefined)'
  }];
  code = [{
    text: 'HTML',
    value: 'radio_html'
  }, {
    text: 'COMPONENT',
    value: 'radio_ts'
  }];
  properties = [{
    name: 'value',
    type: 'any',
    default: 'null',
    description: 'Can be any value type: object, string, number, boolean, null, undefined. '
  }, {
    name: 'groupValue',
    type: 'any',
    default: 'null',
    description: 'This a variable or set value that will define which radio button is active.'
  }, {
    name: 'circle',
    type: 'boolean',
    default: 'false',
    description: 'When true the radio is changed from a square to a circle of the same diameter as the size.'
  }, {
    name: 'left',
    type: 'boolean',
    default: 'false',
    description: 'When true the ng-content will be displayed on the left of any ng-content.'
  }, {
    name: 'color',
    type: 'string',
    default: 'rgba(0, 0, 0, 0.87)',
    description: 'Optionally set the color for the radio button.'
  }, {
    name: 'size',
    type: 'number',
    default: '16',
    description: 'Optionally set the pixel dimensions for the radio button.'
  }, {
    name: 'change',
    type: 'event',
    default: '-',
    description: 'When radio is clicked the component will emit an event.'
  }];

  constructor() {}
}
