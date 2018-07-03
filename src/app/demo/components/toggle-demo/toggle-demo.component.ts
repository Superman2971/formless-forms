import { Component } from '@angular/core';

@Component({
  selector: 'formless-toggle-demo',
  templateUrl: './toggle-demo.component.html',
  styleUrls: ['./toggle-demo.component.scss']
})
export class ToggleDemoComponent {
  toggle1: boolean = false;
  toggle2: boolean = true;

  constructor() {}
}
