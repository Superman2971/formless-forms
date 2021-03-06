import { Component } from '@angular/core';

@Component({
  selector: 'formless-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss']
})
export class ButtonDemoComponent {
  clicks: number = 0;
  buttonIcon: string = '';
  buttonTabs = [{
    text: 'HTML',
    value: 'button_html'
  }, {
    text: 'COMPONENT',
    value: 'button_ts'
  }];
  properties = [{
    name: 'text',
    type: 'string',
    default: 'null',
    description: 'Optionally input text using input instead of ng-content. This string will be piped to uppercase.'
  }, {
    name: 'color',
    type: 'string',
    default: 'null',
    description: 'Optionally define a color for the button background.'
  }, {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true button events are disabled.'
  }, {
    name: 'inverse',
    type: 'boolean',
    default: 'false',
    description: 'When true button background and text color will inverse.'
  }, {
    name: 'inputStyles',
    type: 'string',
    default: 'null',
    description: 'Optionally may provide styles directly to the input element here. Does not work for textarea.'
  }];
  disabled: boolean = false;
  inverse: boolean = false;
  text: string;

  constructor() {}

  click() {
    this.clicks++;
  }
}
