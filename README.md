# Binary theme switcher component 

A web component that helps you implement and change 2 themes on a web page. See the [live demo](https://diegosanchezp.github.io/theme-switcher-component) and the code [example](https://github.com/diegosanchezp/theme-switcher-component/tree/master/demo).

## Table of Contents

## Usage flow example
1. Install

With npm

`npm i theme-switcher-component`

With yarn 

`yarn add theme-switcher-component`

2. Import a and declare the web component in a HTML file
```html
<html>
<head>
  <! --- ... More code above ... --->

  <import src="./node_modules/theme-switcher-component/switch.js" type="module" defer>

  <! --- ... More code below ... --->
</head>
<body>
  <theme-switcher themes="["dark", "light"]"></theme-switcher>
  <p>Hellow World</p>
</body>
</html>
```

3. Define a default theme in a CSS file

```css
/* Define the default theme variables in the root element */
:root{ --paragraph-color: black; }

/* Change the variables defined in root */
body[data-theme="dark"]{ --paragraph-color: white; }

p { color: var(--paragraph-color) }

```

## Documentation

### Rules
- The first theme of the array "themes" defines the default theme.
- Obviously only two themes can be defined, hence the word "Binary" in the name lol.


Attributes | Type | Required |Description | Error 
-----------|------|----------|------------|------
themes | JSONArray of Strings | Yes | The two themes to define | if more than two themes defined or themes attribute undefined
verbose | bool | No | Logs to console information about the state of the component | None
data-theme | String | No | Added after the component is rendered

### JavaScript interface

A.K.A the instance properties 

This can be use programmatically, you can control it with javascropt

Property | Type | Description
---------|------| -----------
verbose  | bool | Logs to console information about the state of the component 
currenState | number | The currentState of the state machine
currentTheme | String | The theme that is currently applied

Do not use any of the methods like prepareTheme(), transition(), otherwise the component can be in a wrong state, to make state changes with javascript use the [click() method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) 

### CSS variables
The variables are defined on the host, these are the default values
```css
theme-switcher {
  --switch-color: black; 
  --switch-width: 60px;
  --switch-height: 34px;
  --switch-radius: 34px;
  --slider-width: 25px;
  --slider-height: 25px;
  --slider-margin: 4px 2px 0px 5px;
  --slider-transition: .4s;
  --slider-radius: 50%;
  --slider-cursor: pointer; 
  --slider-color: white;
  --slider-translatex-unswitched: translateX(0px);
  --slider-translatex-switched: translateX(26px);
}
```

### What the component does

Adds and updates the data attribute "data-theme" to the body element which can be used in CSS to react when the value changes with attribute selectors

Every time the theme changes gets set to local storage

It handles the state via a super simple [state machine]() inspired by this [article](https://css-tricks.com/robust-react-user-interfaces-with-finite-state-machines/)
