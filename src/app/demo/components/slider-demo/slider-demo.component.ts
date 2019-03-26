import { Component } from '@angular/core';

@Component({
  selector: 'formless-slider-demo',
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss']
})
export class SliderDemoComponent {
  code = [{
    text: 'HTML',
    value: 'slider_html'
  }];
  properties = [{
    name: 'init',
    type: 'number',
    default: 'null',
    description: 'When not set the initial value will be equal to half the max value.'
  }, {
    name: 'min',
    type: 'number',
    default: '1',
    description: 'Sets the minimum value of the slider.'
  }, {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'Sets the maximum value of the slider.'
  }, {
    name: 'tooltip',
    type: 'string',
    default: 'null',
    description: 'When present a tooltip for the slider is present. Will display the text on mouseover.'
  }, {
    name: 'tooltipColor',
    type: 'string',
    default: '#2275c3',
    description: 'Optionally set the color for the tooltip hover text.'
  }, {
    name: 'leftColor',
    type: 'string',
    default: '#2275c3',
    description: 'Optionally set the color for the left side of the slider.'
  }, {
    name: 'rightColor',
    type: 'string',
    default: '#d5dae5',
    description: 'Optionally set the color for the right side of the slider.'
  }, {
    name: 'updated',
    type: 'event',
    default: '-',
    description: 'When slider changes the component will emit an event. The event is a number.'
  }];
  slider1;
  slider2;

  constructor() {}
}
