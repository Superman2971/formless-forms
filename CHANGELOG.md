# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# 0.0.0 (2018-04-30)

Initial NPM Package developed

### Features

* `Standard Input Component` needs additional work and testing to ensure it can be used universally and with ease. Would also like to add more customization for validation and styling.

# 0.1.0 (2018-05-03)

Additional components added

### Features

* `Card Component` a standard card, I should probably move the variable.scss items into indiviudal scss files.
* `Button Component` has no Output, can simply add a (click) function to find the clicks
* `Toggle Component` allow you to init a value and receive a response for all changes

# 0.2.0 (2018-05-22)

Missed a couple of the updates in the changelog, but they are simple updates.

### Updates

* Additional upgrades to the Standard Input component
* Custom color and addition of icons to the buttons
* new components (listed below)

### Features

* `Slider Component` - allows you to select from within a range using a range type input with styled slider
* `Checkbox Component` - simple checkbox with custome size and color available

# 0.3.0 (2018-05-22)

### Updates

* Customizations for the button, including inverse color and correction for disabled button to ensure no click events make it through
* Created an initial demo page and updated the README

### Features

* `Radio Component` - individual radio buttons that can work as a group. Also provide several inputs for customization and transclusion for custom labels.

### Breaking Changes

* `Input Component` - renamed the **Standard Input Component** into **Input Component** so you will need to update the module included as `FormlessInputComponent` and change the html selector to `formless-input`.
