``` js
export class RadioDemoComponent {
  radio2 = 'circle';

  radioButtons: Array<any> = [{
    value: {test: 'object'},
    text: 'Object'
  }, {
    value: 'string',
    text: 'String'
  }, {
    value: 123,
    text: 'Number'
  }, {
    value: null,
    text: 'Null'
  }, {
    text: 'Undefined'
  }, {
    text: 'Duplicate Value (undefined)'
  }];

  constructor() {}
}
```
