import { Component } from '@angular/core';

@Component({
  selector: 'formless-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent {
  code = [{
    text: 'HTML',
    value: 'input_html'
  }];
  properties = [{
    name: 'placeholder',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'init',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'optional',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'hideOptional',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'dirty',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'minlength',
    type: 'number',
    default: 'null',
    description: ''
  }, {
    name: 'maxlength',
    type: 'number',
    default: '200',
    description: ''
  }, {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'description',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'numberType',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'email',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'hiddenType',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'matchThis',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'textarea',
    type: 'boolean',
    default: 'false',
    description: ''
  }, {
    name: 'rows',
    type: 'number',
    default: 'null',
    description: ''
  }, {
    name: 'optionalStyles',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'inputStyles',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'regex',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'regexMessage',
    type: 'string',
    default: 'null',
    description: ''
  }, {
    name: 'value',
    type: 'event',
    default: '-',
    description: 'When input is updated it will emit an event. Event type is a string.'
  }];

  constructor() {}
}
