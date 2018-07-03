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

  constructor() {}
}
