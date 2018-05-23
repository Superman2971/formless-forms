import { Component } from '@angular/core';

@Component({
  selector: 'formless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle1: boolean = false;
  toggle2: boolean = true;
  checkbox1: boolean = false;
  checkbox2: boolean = true;
  checkbox3: boolean = false;
}
