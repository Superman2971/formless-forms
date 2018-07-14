``` html
<formless-checkbox (change)="checkbox1=$event"></formless-checkbox>
<formless-checkbox [checked]="checkbox2" color="#ffa000" size="36" (change)="checkbox2=$event"></formless-checkbox>
<formless-checkbox [checked]="checkbox3" color="#15ca53" size="16" (change)="checkbox3=$event"></formless-checkbox>
<div>checkbox #1: {{checkbox1}}</div>
<div>checkbox #2: {{checkbox2}}</div>
<div>checkbox #3: {{checkbox3}}</div>
```
