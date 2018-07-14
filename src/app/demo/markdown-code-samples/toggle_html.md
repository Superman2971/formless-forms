``` html
<formless-toggle (change)="toggle1=$event"></formless-toggle>
<formless-toggle checked="true" (change)="toggle2=$event"></formless-toggle>
<div>Toggle 1: {{toggle1}}</div>
<div>Toggle 2: {{toggle2}}</div>
```