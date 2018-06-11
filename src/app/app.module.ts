import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 3rd Party Module
import { MarkdownModule } from 'ngx-markdown';
// Shared Modules
import { FormlessInputModule } from './elements/input/input.module';
import { FormlessCardModule } from './elements/card/card.module';
import { FormlessButtonModule } from './elements/button/button.module';
import { FormlessToggleModule } from './elements/toggle/toggle.module';
import { FormlessSliderModule } from './elements/slider/slider.module';
import { FormlessCheckboxModule } from './elements/checkbox/checkbox.module';
import { FormlessRadioModule } from './elements/radio/radio.module';
// Components
import { AppComponent } from './app.component';
import { MarkdownDisplayComponent } from './markdown-display/markdown-display.component';


@NgModule({
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    FormlessInputModule,
    FormlessCardModule,
    FormlessButtonModule,
    FormlessToggleModule,
    FormlessSliderModule,
    FormlessCheckboxModule,
    FormlessRadioModule
  ],
  declarations: [
    AppComponent,
    MarkdownDisplayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
