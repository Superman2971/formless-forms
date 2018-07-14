``` html
<div>Standard Radio</div>
<formless-radio [value]="true" [groupValue]="radio1" (change)="radio1=$event">true</formless-radio>
<formless-radio [value]="false" [groupValue]="radio1" (change)="radio1=$event">false</formless-radio>
<div>Styled Radio</div>
<formless-radio [value]="'circle'" [groupValue]="radio2" [circle]="true" (change)="radio2=$event">Circle</formless-radio>
<formless-radio [value]="'color'" [groupValue]="radio2" [color]="'#15ca53'" (change)="radio2=$event">Color</formless-radio>
<formless-radio [value]="'sizing'" [groupValue]="radio2" [size]="32" (change)="radio2=$event">Sizing</formless-radio>
<formless-radio [value]="'text on left'" [groupValue]="radio2" [left]="true" (change)="radio2=$event">Text on left</formless-radio>
<div>Dynamic/Flexible Radio Values</div>
<formless-radio *ngFor="let radio of radioButtons"
  [value]="radio.value"
  [groupValue]="radio3"
  [color]="'#ffa000'"
  (change)="radio3=$event">
  <div [innerHtml]="radio.text"></div>
</formless-radio>
<div>radio 1: {{radio1}}</div>
<div>radio 2: {{radio2}}</div>
<div>radio 3: {{radio3 | json}}</div>
```
