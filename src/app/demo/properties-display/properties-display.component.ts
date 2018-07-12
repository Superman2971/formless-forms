import { Component, Input } from '@angular/core';

declare var require: any;

@Component({
  selector: 'formless-properties-display',
  templateUrl: './properties-display.component.html',
  styleUrls: ['./properties-display.component.scss']
})
export class PropertiesDisplayComponent {
  @Input() properties;

  constructor() {}
}
