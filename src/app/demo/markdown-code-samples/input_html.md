``` html
<div class="title">Standard Input</div>
<formless-input [placeholder]="'placeholder'" (value)="placeholder=$event"></formless-input>
<formless-input [placeholder]="'init'" [init]="'Initalized Text'" (value)="init=$event"></formless-input>
<formless-input [placeholder]="'optional'" [optional]="true" (value)="optional=$event"></formless-input>
<formless-input [placeholder]="'hideOptional'" [optional]="true"  [hideOptional]="true" (value)="hideOptional=$event"></formless-input>
<formless-input [placeholder]="'dirty'" [dirty]="true" (value)="dirty=$event"></formless-input>
<formless-input [placeholder]="'value'" (value)="value=$event"></formless-input>
<formless-card>Value Input Results: {{ value }}</formless-card>

<div class="title">Basic Input Validations</div>
<formless-input [placeholder]="'minlength'" [minlength]="4" (value)="minlength=$event"></formless-input>
<formless-input [placeholder]="'maxlength'" [maxlength]="10" (value)="maxlength=$event"></formless-input>
<formless-input [placeholder]="'disabled'" [disabled]="true" (value)="disabled=$event"></formless-input>
<formless-input [placeholder]="'description'" [description]="'description is displayed here'" (value)="description=$event"></formless-input>

<div class="title">Typed Input</div>
<formless-input [placeholder]="'numberType'" [numberType]="true" (value)="numberType=$event"></formless-input>
<formless-input [placeholder]="'email'" email="true" (value)="email=$event"></formless-input>
<formless-input [placeholder]="'hiddenType'" hiddenType="true" (value)="hiddenType=$event"></formless-input>
<formless-input [placeholder]="'matchThis (match hiddenType)'" [matchThis]="hiddenType" (value)="matchThis=$event"></formless-input>

<div class="title">Text Area Input</div>
<formless-input [placeholder]="'textarea'" [textarea]="true" (value)="textarea=$event"></formless-input>
<formless-input [placeholder]="'rows'" [textarea]="true" [rows]="7" (value)="rows=$event"></formless-input>

<div class="title">Custom Styles and Regex Validation</div>
<formless-input
  [placeholder]="'regex and regexMessage (phone regex)'"
  regex="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
  regexMessage="*Does not match the pattern for a phone number"
  (value)="regex=$event"
></formless-input>
<div>optionalStyles and inputStyles</div>
<formless-input
  [optionalStyles]="{'min-height': 0}"
  [inputStyles]="{'border': '1px solid #D5DAE5', 'border-radius': '2px', 'font-size': '12px',	'font-weight': '500', 'height': '36px', 'margin': 0, 'padding': '0 0 0 16px'}"
  (value)="custom=$event"
></formless-input>
```
