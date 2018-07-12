```html
<div>Standard Buttons</div>
<div class="row">
  <formless-button [text]="'Click'"></formless-button>
  <formless-button [text]="'Click'" [inverse]="true"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [inverse]="true"></formless-button>
</div>
<div>Disabled Buttons</div>
<div class="row">
  <formless-button [text]="'Click'" [disabled]="true"></formless-button>
  <formless-button [text]="'Click'" [inverse]="true" [disabled]="true"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [disabled]="true"></formless-button>
  <formless-button [text]="'Click'" [color]="'#15ca53'" [inverse]="true" [disabled]="true"></formless-button>
</div>
<div>Custom/Dynamic Interior Buttons</div>
<div class="row">
  <formless-button [color]="'#15ca53'" [inverse]="inverse" [disabled]="disabled">
    <i class="material-icons">{{buttonIcon}}</i>&nbsp;<div [innerHtml]="text ? text : 'DYNAMIC BUTTON'"></div>
  </formless-button>
</div>
```