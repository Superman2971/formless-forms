```html
<div>Standard Buttons</div>
<div class="row">
  <formless-button [text]="'Click'" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [inverse]="true" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [inverse]="true" (click)="click()"></formless-button>
</div>
<div>Disabled Buttons</div>
<div class="row">
  <formless-button [text]="'Click'" [disabled]="true" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [inverse]="true" [disabled]="true" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [disabled]="true" (click)="click()"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [inverse]="true" [disabled]="true" (click)="click()"></formless-button>
</div>
<div>Custom/Dynamic Interior Buttons</div>
<div class="row">
  <formless-button [color]="'#15ca53'" [inverse]="inverse" [disabled]="disabled" (click)="click()">
    <i class="material-icons">{{buttonIcon}}</i>&nbsp;<div [innerHtml]="text ? text : 'DYNAMIC BUTTON'"></div>
  </formless-button>
</div>
```
