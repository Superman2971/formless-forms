``` js
export class CheckboxDemoComponent {
  checkbox1: boolean = false;
  checkbox2: boolean = true;
  checkbox3: boolean = false;

  constructor() {
    setTimeout(() => {
      this.checkbox3 = true;
    }, 2000);
  }
}
```
