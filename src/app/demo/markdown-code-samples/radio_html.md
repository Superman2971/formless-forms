``` html
<formless-radio
  value="first"
  [groupValue]="radio1"
  color="#15ca53"
  circle="true"
  (change)="radio1=$event">
  something big
</formless-radio>
<formless-radio
  value="second"
  [groupValue]="radio1"
  color="#15ca53"
  left="true"
  size="32"
  (change)="radio1=$event">
  something bigger
</formless-radio>
<formless-radio
  value="third"
  [groupValue]="radio1"
  [checked]="true"
  circle="true"
  (change)="radio1=$event">
  something biggest
</formless-radio>
<div>radio 1: {{radio1}}</div>
```
