import { Component } from '@angular/core';

@Component({
  selector: 'formless-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss']
})
export class CheckboxDemoComponent {
  checkbox1: boolean = false;
  checkbox2: boolean = true;
  checkbox3: boolean = false;
  code = [{
    text: 'HTML',
    value: 'checkbox_html'
  }, {
    text: 'COMPONENT',
    value: 'checkbox_ts'
  }];
  properties = [{
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'When true the checkbox will be checked.'
  }, {
    name: 'color',
    type: 'string',
    default: 'null',
    description: 'Optionally define a color for the checkbox background. This will make the checkmark white.'
  }, {
    name: 'size',
    type: 'number',
    default: '24',
    description: 'Optionally change the size of the checkbox.'
  }, {
    name: 'change',
    type: 'event',
    default: '-',
    description: 'When checked/unchecked the component will emit an event. The event is a boolean.'
  }];

  constructor() {
    setTimeout(() => {
      this.checkbox3 = true;
    }, 2000);
  }
}
