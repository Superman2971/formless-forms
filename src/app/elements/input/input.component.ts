import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'formless-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class FormlessInputComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() init: string;
  @Input() dirty: boolean = false;
  @Input() optional: boolean = false;
  @Input() hideOptional: boolean = false;
  @Input() email: boolean = false;
  @Input() hiddenType: boolean = false;
  @Input() numberType: boolean = false;
  @Input() minlength: number;
  @Input() maxlength: number = 200;
  @Input() description: string;
  @Output() value: EventEmitter<string> = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() textarea: boolean = false;
  @Input() rows: number;
  @Input() matchThis: string;
  @Input() regex: string;
  @Input() regexMessage: string;
  @Input() optionalStyles: string;
  @Input() inputStyles: string;
  // ngModel for Input
  input;
  // variables
  focused;
  type;
  watchInitChange: boolean = true;
  // variables for custom validations
  emailValid;
  emailRegex;
  // variables for matching values
  lastValue: string = '';
  notmatching: boolean = false;
  // variable for custom regex
  customRegexValid;
  customRegex;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const init: SimpleChange = changes.init;
    const matchThis: SimpleChange = changes.matchThis;
    if (this.watchInitChange) {
      if (init && init.currentValue) {
        this.input = init.currentValue;
      } else if (init && init.currentValue === '') {
        this.input = null;
        this.dirty = false;
      } else if (init) {
        this.input = null;
        this.dirty = false;
      }
    } else {
      this.watchInitChange = true;
    }
    // adding to provide ability to check if matches other input of regex
    if (matchThis) {
      if (this.lastValue === this.matchThis) {
        this.notmatching = false;
      } else {
        this.notmatching = true;
      }
      if (matchThis && matchThis.firstChange) {
        this.notmatching = null;
      }
    }
  }

  ngOnInit() {
    this.sendValue(this.init);
    // only create the email regex if this is an email input
    if (this.email) {
      /* tslint:disable */
      this.emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      /* tslint:enable */
    }
    if (this.regex) {
      this.customRegex = new RegExp(this.regex);
    }
    // set the input type
    this.getType();
  }

  getType() {
    if (this.hiddenType) {
      this.type = 'password';
    } else if (this.numberType) {
      this.type = 'number';
    } else {
      this.type = 'text';
    }
  }

  sendValue(value) {
    let valid = true;
    // if not optional check against possible validators
    if (!this.optional && value) {
      // email validation
      if (this.email && this.emailRegex) {
        // check matches email valid regex
        this.emailValid = this.emailRegex.test(value);
        if (!this.emailValid) {
          valid = false;
        }
      }
      // custom validation
      if (this.customRegex) {
        // check matches custom valid regex
        this.customRegexValid = this.customRegex.test(value);
        if (!this.customRegexValid) {
          valid = false;
        }
        console.log(this.customRegex, this.customRegexValid);
      }
      // minlength validation
      if (this.minlength && value.length < this.minlength) {
        valid = false;
      }
      // maxlength validation
      if (this.maxlength && value.length > this.maxlength) {
        valid = false;
      }
    }
    // If there is a matchThis check for match validation
    if (this.matchThis) {
      this.lastValue = value;
      if (this.lastValue === this.matchThis) {
        this.notmatching = false;
      } else {
        this.notmatching = true;
      }
    }
    // Complete the send by emitting the proper value to the parent component
    if (valid) {
      this.value.emit(value);
    } else {
      this.watchInitChange = false;
      this.value.emit(null);
    }
  }
}
