# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# 1.0.0 (2018-07-??)

Completed the demo site, browser compatibility of the components, and small adjustments to component properties.

* `FormlessButtonComponent` additions:
  * Removed white-space nowrap and set height to 100% so it's size will fit the space made available for it
  * Set initial values for the boolean inputs to false
* `FormlessCheckboxComponent` additions:
  * Set initial values for the Inputs
* `FormlessInputComponent` additions:
  * Custom styles for the input and 'optional' text
  * Set types for all inputs
  * Switched numberType input back to 'number' instead of 'tel'
  * added hideOptional input since we don't always want the optional tag showing
* `FormlessRadioComponent` additions:
  * Added min-height and min-width to ensure the radio size does not squish.
  * Removed unecessary value checking on changes
* `FormlessSliderComponent` additions:
  * Corrected events updates for Firefox
  * Simplified value setting and allows it to be set dynamically from parent component
  * Set types for all inputs
* `FormlessToggleComponent` additions:
  * Set initial value for checked input to false
* Completed demo site for all components

# 0.5.0 (2018-06-1)

A lot of work on the demo site and some package updates

### Updates

* `FormlessButtonComponent` additions:
  * Small wrap adjustment so it no longer is forced white-space: nowrap.
* `FormlessRadioComponent` additions:
  * Removed the requirement for a groupValue on updates, this way we can dynamically remove the value from the radio group from the parent component.
* `FormlessSliderComponent` additions:
  * Changed init, rather than currentValue, to manage the slider value allowing dynamic changes of the slider from the parent component.
* Completed routes for demo components and finished the home page with sample form.

# 0.4.0 (2018-06-1)

A lot of work on the demo site and some package updates

### Updates

* `FormlessInputComponent` additions:
  * Custom style options
  * Custom regex validation
  * Match-this validation (primarily for password or email matching)
* Create customer markdown displays for the demo site, still needs some styling.
* `Button Component` changed to no longer accept icons, but will allow anything through ng-content

# 0.3.0 (2018-05-26)

### Updates

* Customizations for the button, including inverse color and correction for disabled button to ensure no click events make it through
* Created an initial demo page and updated the README

### Features

* `Radio Component` - individual radio buttons that can work as a group. Also provide several inputs for customization and transclusion for custom labels.

### Breaking Changes

* `Input Component` - renamed the **Standard Input Component** into **Input Component** so you will need to update the module included as `FormlessInputComponent` and change the html selector to `formless-input`.

# 0.2.0 (2018-05-22)

Missed a couple of the updates in the changelog, but they are simple updates.

### Updates

* Additional upgrades to the Standard Input component
* Custom color and addition of icons to the buttons
* new components (listed below)

### Features

* `Slider Component` - allows you to select from within a range using a range type input with styled slider
* `Checkbox Component` - simple checkbox with custome size and color available

# 0.1.0 (2018-05-03)

Additional components added

### Features

* `Card Component` a standard card, I should probably move the variable.scss items into indiviudal scss files.
* `Button Component` has no Output, can simply add a (click) function to find the clicks
* `Toggle Component` allow you to init a value and receive a response for all changes

# 0.0.0 (2018-04-30)

Initial NPM Package developed

### Features

* `Standard Input Component` needs additional work and testing to ensure it can be used universally and with ease. Would also like to add more customization for validation and styling.
