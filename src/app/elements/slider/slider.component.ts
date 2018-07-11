import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'formless-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class FormlessSliderComponent implements OnChanges {
  @Input() init;
  @Input() min = 1;
  @Input() max = 100;
  @Input() tooltip;
  @Input() leftColor: string = '#2275c3';
  @Input() rightColor: string = '#d5dae5';
  @Input() tooltipColor: string = '#2275c3';
  @Output() updated = new EventEmitter<number>();
  background: any;
  currentValue;

  constructor(private sanitize: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    const init: SimpleChange = changes.init;
    if (init && init.currentValue !== this.currentValue) {
      this.update();
    }
  }

  update(evt?) {
    if (evt) {
      this.init = evt.target.value || evt.srcElement.value;
    } else {
      this.init = this.init || (this.max / 2);
    }
    this.currentValue = this.init;
    const range = (this.init - this.min) / (this.max - this.min);
    this.background = this.sanitize.bypassSecurityTrustStyle('-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + range + ', ' + this.leftColor + '), ' + 'color-stop(' + range + ', ' + this.rightColor + '))');
    this.updated.emit(this.init);
  }
}
