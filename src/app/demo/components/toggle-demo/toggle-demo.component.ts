import { Component } from '@angular/core';

@Component({
  selector: 'formless-toggle-demo',
  templateUrl: './toggle-demo.component.html',
  styleUrls: ['./toggle-demo.component.scss']
})
export class ToggleDemoComponent {
  toggle1: boolean = false;
  toggle2: boolean = true;
  code = [{
    text: 'HTML',
    value: 'toggle_html'
  }, {
    text: 'COMPONENT',
    value: 'toggle_ts'
  }];
  properties = [{
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'When true the toggle will be checked.'
  }, {
    name: 'change',
    type: 'event',
    default: '-',
    description: 'When toggled the component will emit an event. The event is a boolean.'
  }];

  constructor() {}
}
