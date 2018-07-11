import { Component, Input, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'formless-markdown-display',
  templateUrl: './markdown-display.component.html',
  styleUrls: ['./markdown-display.component.scss']
})
export class MarkdownDisplayComponent implements OnInit {
  @Input() tabs;
  @Input() startClosed: boolean = false;
  markdown;

  constructor() {}

  ngOnInit() {
    if (this.tabs && !this.startClosed) {
      this.updateDisplay(0);
    }
  }

  updateDisplay(tabIndex) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    this.tabs[tabIndex].active = true;
    this.markdown = require(`raw-loader!../markdown-code-samples/${this.tabs[tabIndex].value}.md`);
  }
}
