import { Component } from '@angular/core';

@Component({
  selector: 'formless-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent {
  codeTabs = [{
    text: 'HTML',
    value: 'card_html'
  }];

  constructor() {}
}
