import { Component } from '@angular/core';

@Component({
  selector: 'formless-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form: any = {
    acceptedTerms: false,
    email: null,
    gender: false,
    human: null,
    name: null,
    score: 100
  };
  dirty: boolean = false;

  constructor() {}

  clear() {
    this.form = {
      acceptedTerms: false,
      email: null,
      gender: null,
      human: false,
      name: null,
      score: 100
    };
    this.dirty = false;
  }

  submit() {
    this.dirty = true;
    console.log(this.form);
  }
}
