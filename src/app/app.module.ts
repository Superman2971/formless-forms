import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MarkdownDisplayComponent } from './demo/markdown-display/markdown-display.component';
import { PropertiesDisplayComponent } from './demo/properties-display/properties-display.component';
import { HomeComponent } from './demo/home/home.component';
import { ComponentsComponent } from './demo/components/components.component';
import { ButtonDemoComponent } from './demo/components/button-demo/button-demo.component';
import { CardDemoComponent } from './demo/components/card-demo/card-demo.component';
import { CheckboxDemoComponent } from './demo/components/checkbox-demo/checkbox-demo.component';
import { InputDemoComponent } from './demo/components/input-demo/input-demo.component';
import { RadioDemoComponent } from './demo/components/radio-demo/radio-demo.component';
import { SliderDemoComponent } from './demo/components/slider-demo/slider-demo.component';
import { ToggleDemoComponent } from './demo/components/toggle-demo/toggle-demo.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'components',
  component: ComponentsComponent
}, {
  path: 'button',
  component: ButtonDemoComponent
}, {
  path: 'card',
  component: CardDemoComponent
}, {
  path: 'checkbox',
  component: CheckboxDemoComponent
}, {
  path: 'input',
  component: InputDemoComponent
}, {
  path: 'radio',
  component: RadioDemoComponent
}, {
  path: 'slider',
  component: SliderDemoComponent
}, {
  path: 'toggle',
  component: ToggleDemoComponent
}, {
  path: '**', // a catch all for page not found, maybe make a PageNotFoundComponent
  redirectTo: 'home'
}];

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
    FormlessRadioModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    MarkdownDisplayComponent,
    PropertiesDisplayComponent,
    HomeComponent,
    ComponentsComponent,
    ButtonDemoComponent,
    CardDemoComponent,
    CheckboxDemoComponent,
    InputDemoComponent,
    RadioDemoComponent,
    SliderDemoComponent,
    ToggleDemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
