``` html
<div class="sample-form">
  <div class="title">Sample Form</div>
  <formless-card>
    <formless-input
      placeholder="Full Name"
      [init]="form.name"
      [dirty]="dirty"
      (value)="form.name=$event"
    ></formless-input>
    <formless-input
      placeholder="Email Address"
      email="true"
      [init]="form.email"
      [dirty]="dirty"
      (value)="form.email=$event"
    ></formless-input>
    <div class="pad-bottom">
      <div>How would you score this form from 1-100? (100 being the best form ever!)</div>
      <formless-slider
        [init]="form.score"
        [leftColor]="'#ffa000'"
        (updated)="form.score=$event"
      ></formless-slider>
    </div>
    <div class="row pad-bottom">
      <div>
        <div class="flex-row pad-bottom">
          <div style="padding-right: 24px">Are you human?</div>
          <formless-toggle [checked]="form.human" (change)="form.human=$event"></formless-toggle>
        </div>
        <div class="flex-row">
          <div style="padding-right: 24px">Accept the terms of service</div>
          <formless-checkbox
            [checked]="form.acceptedTerms"
            color="#ffa000"
            (change)="form.acceptedTerms=$event"
          ></formless-checkbox>
        </div>
      </div>
      <div>
        <div>Gender?</div>
        <formless-radio
          value="male"
          [groupValue]="form.gender"
          circle="true"
          color="#ffa000"
          (change)="form.gender=$event">
          Male
        </formless-radio>
        <formless-radio
          value="female"
          [groupValue]="form.gender"
          circle="true"
          color="#ffa000"
          (change)="form.gender=$event">
          Female
        </formless-radio>
        <formless-radio
          value="other"
          [groupValue]="form.gender"
          circle="true"
          color="#ffa000"
          (change)="form.gender=$event">
          Prefer not to be defined this way
        </formless-radio>
      </div>
    </div>
    <div class="row">
      <formless-button text="Cancel" color="#ffa000" inverse="true" (click)="clear();"></formless-button>
      <formless-button text="Submit" color="#ffa000" (click)="submit();"></formless-button>
    </div>
  </formless-card>
  <div style="margin: 24px 0 0;"></div>
  <formless-card>
    <formless-markdown-display [tabs]="homeForm"></formless-markdown-display>
  </formless-card>
</div>
```
