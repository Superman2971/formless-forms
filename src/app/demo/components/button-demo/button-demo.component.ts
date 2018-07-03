import { Component } from '@angular/core';

@Component({
  selector: 'formless-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss']
})
export class ButtonDemoComponent {
  buttonTabs = [{
    text: 'HTML',
    value: 'button_html'
  }, {
    text: 'COMPONENT',
    value: 'button_ts'
  }];

  constructor() {}
}
