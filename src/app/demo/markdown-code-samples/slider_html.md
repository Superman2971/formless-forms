``` html
<formless-slider (updated)="slider1=$event"></formless-slider>
<formless-slider
  [init]="150"
  [min]="50"
  [max]="500"
  [leftColor]="'rgba(0, 0, 0, 0.87)'"
  [rightColor]="'green'"
  [tooltip]="'tooltip information'"
  [tooltipColor]="'#ff0000'"
  (updated)="slider2=$event"
></formless-slider>
<div>Slider #1: {{slider1}}</div>
<div>Slider #2: {{slider2}}</div>
```
