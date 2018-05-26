# Formless-Forms

> Angular component library for dynamic form creation with validation without the need of template forms.

[![npm](https://img.shields.io/npm/v/formless-forms.svg?style=flat-square)](https://www.npmjs.com/package/formless-forms)
[![npm License](https://img.shields.io/npm/l/formless-forms.svg?style=flat-square)](https://github.com/superman2971/formless-forms/blob/master/LICENSE)

## About

Formless Forms are a small Angular components library with the objective of providing components that can be combined in any fashion to create dynamic forms with validation that do not require html template forms. Formless Forms are flexible, dynamic, and extendable across frameworks / applications.

## Demo

A [demo site showing formless-form elements](http://formless-forms.bitballoon.com/) in action is still in progress, but will show the component base design, dynamic inputs, custom styling, and best practice for usage.

## Usage Example

To get started please `npm install formless-forms` and then include the modules into your application. Angular example below:

```typescript
import { FormlessInputModule } from 'formless-forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormlessInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Features

All components are available in separate modules so that you can load only what you need with minimal code.

* Elements
  * Input Component - from `FormlessInputModule`
  * Card Component - from `FormlessCardModule`
  * Button Component - from `FormlessButtonModule`
  * Toggle Component - from `FormlessToggleModule`
  * Slider Component - from `FormlessSliderModule`
  * Checkbox Component - from `FormlessCheckboxModule`
  * Radio Component - from `FormlessRadioModule`

### TO DO

Much more still in development. Will be adding components for elements, dynamic validations and styles, and also considering adding in modals, buttons, cards, etc.

* additional components such as Dropdown, Searchbar, and much much more
* change the Input/Output of `Input Component` with more dynamic validations and styles. Add custom regex pattern validation with customer validation message.
* need to create a Demo Site for all of the components
