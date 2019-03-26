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
    description: 'Optionally provide the placeholder which will be used as the label for your input.'
  }, {
    name: 'name',
    type: 'string',
    default: 'null',
    description: 'Optionally provide the name which is used by browsers for autocomplete.'
  }, {
    name: 'init',
    type: 'string',
    default: 'null',
    description: 'Used to initialize and can be used to update the input text.'
  }, {
    name: 'optional',
    type: 'boolean',
    default: 'false',
    description: 'When true the field will no longer be required and so the validation will not show.'
  }, {
    name: 'hideOptional',
    type: 'boolean',
    default: 'false',
    description: 'When true the (optional) flag on the input label will not show.'
  }, {
    name: 'dirty',
    type: 'boolean',
    default: 'false',
    description: 'When true the validations will display.'
  }, {
    name: 'minlength',
    type: 'number',
    default: 'null',
    description: 'Optionally provide the minmum length for input text. This will show error validation if not reached.'
  }, {
    name: 'maxlength',
    type: 'number',
    default: '200',
    description: 'Optionally provide the maximum length for input text. Will not allow text longer than maxlength.'
  }, {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true pointer events are disabled and input would not be accessible.'
  }, {
    name: 'description',
    type: 'string',
    default: 'null',
    description: 'When provided the description will display beneath the input until field is dirty and valid.'
  }, {
    name: 'numberType',
    type: 'boolean',
    default: 'false',
    description: 'When true input type will be changed to number and only accept numbers for field.'
  }, {
    name: 'email',
    type: 'boolean',
    default: 'false',
    description: 'When true the input will need to match our email regex validation to be valid.'
  }, {
    name: 'hiddenType',
    type: 'boolean',
    default: 'false',
    description: 'When true the input type will initialize as password to hide the text. Ability to show/hide the text will be available.'
  }, {
    name: 'matchThis',
    type: 'string',
    default: 'null',
    description: 'When provided the text input will only be valid when matching the string/variable set in the matchThis property.'
  }, {
    name: 'textarea',
    type: 'boolean',
    default: 'false',
    description: 'When true the input will become a textarea which can have multiple rows.'
  }, {
    name: 'rows',
    type: 'number',
    default: 'null',
    description: 'Optionally set the rows for a textarea input to display. Textarea property must be set to true for this to work.'
  }, {
    name: 'regex',
    type: 'string',
    default: 'null',
    description: 'Optionally can provide custom regex pattern as a required validation for the input.'
  }, {
    name: 'regexMessage',
    type: 'string',
    default: 'null',
    description: `When provided the custom regex validation will display this text when not met.
      Regex property is required for this to display.`
  }, {
    name: 'optionalStyles',
    type: 'string',
    default: 'null',
    description: 'Optionally may provide styles for the overall container here.'
  }, {
    name: 'inputStyles',
    type: 'string',
    default: 'null',
    description: 'Optionally may provide styles directly to the input element here. Does not work for textarea.'
  }, {
    name: 'value',
    type: 'event',
    default: '-',
    description: 'When input is updated it will emit an event. Event type is a string.'
  }];
  value: any;
  hiddenType: boolean = false;
  placeholder: string;
  init: string;
  optional: any;
  hideOptional: any;
  dirty: boolean = false;
  minlength;
  maxlength;
  disabled;
  description;
  numberType;
  email;
  matchThis;
  textarea;
  rows;
  regex;
  custom;

  constructor() {}
}
