# Formless-Forms

> Angular component library for dynamic form creation with validation without the need of template forms.

[![npm](https://img.shields.io/npm/v/formless-forms.svg?style=flat-square)](https://www.npmjs.com/package/formless-forms)
[![npm License](https://img.shields.io/npm/l/formless-forms.svg?style=flat-square)](https://github.com/superman2971/formless-forms/blob/master/LICENSE)

## About

Formless Forms are a small Angular components library with the objective of providing components that can be combined in any fashion to create dynamic forms with validation that do not require html template forms. Formless Forms are flexible, dynamic, and easy to implement.

## Demo

[Demo Site](http://formless-forms.netlify.com/): includes installation instructions, individual component demos with sample code and property definitions for the APIs.

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

We are still in the early development of this library and there are many considerations to take into account.

* Additional components to consider such as dropdown, searchbar, modals, and much much more
* Adding accessibility to all components
* Testing and completing backwards compatibility for old browsers
* Possible: add phone formatting for input component
* Create dropdown component
  * allow ability to include a search/filter of the dropdown as the top row
  * add use of arrows/enter to select from dropdown
  * maybe use focus or otherwise when tab selected to open the dropdown (for greater accessibility)
