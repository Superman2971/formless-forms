import { Component } from '@angular/core';

declare var require: any;

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
  // home form code
  homeForm = [{
    text: 'HTML',
    value: 'form_html'
  }, {
    text: 'SCSS',
    value: 'form_scss'
  }, {
    text: 'COMPONENT',
    value: 'form_ts'
  }];
  npmCode;
  importCode;

  constructor() {
    this.npmCode = require(`raw-loader!../markdown-code-samples/npm_code.md`);
    this.importCode = require(`raw-loader!../markdown-code-samples/import_code.md`);
  }

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
