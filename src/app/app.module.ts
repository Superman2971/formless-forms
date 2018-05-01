import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlessStandardInputModule } from './elements/standard-input/standard-input.module';
import { FormlessCardModule } from './elements/card/card.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormlessStandardInputModule,
    FormlessCardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
