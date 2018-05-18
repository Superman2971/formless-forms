import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlessStandardInputModule } from './elements/standard-input/standard-input.module';
import { FormlessCardModule } from './elements/card/card.module';
import { FormlessButtonModule } from './elements/button/button.module';
import { FormlessToggleModule } from './elements/toggle/toggle.module';
import { FormlessSliderModule } from './elements/slider/slider.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormlessStandardInputModule,
    FormlessCardModule,
    FormlessButtonModule,
    FormlessToggleModule,
    FormlessSliderModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
