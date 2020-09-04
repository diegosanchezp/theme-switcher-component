import { template } from './switch-html-css.js'

const unswitched = 0;
const switched = 1;

class ThemeSwitch extends HTMLElement {

  // State machine
  machine = {
    [unswitched]: {CLICK: switched},
    [switched]: {CLICK: unswitched}
  };

  constructor() {
    // Always call super first in constructor
    super();

    if(this.hasAttribute("themes")){
      this.themes = JSON.parse(this.getAttribute("themes"));
    }else{
      // End execution on constructor
      throw new Error("Undefined themes attribute");
    }

    if(this.themes.length !== 2) throw new Error(`Only two themes can be defined. Number of themes = ${this.themes.length}`);

    this.verbose = this.hasAttribute("verbose");
    
    // Create a shadow root
    this.attachShadow({mode: 'open'});

    // Insert template content to shadowRoot
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.Switch = this.shadowRoot.querySelector(".switch");

    // Handle localstorage
    this.currentState = localStorage.getItem("lastState") ? localStorage.getItem("lastState") : unswitched;

    this.prepareTheme();
  }

  transition(event) {
    this.currentState = this.machine[this.currentState][event];
  }

  prepareTheme(){
    
      // Update switch element state for CSS reactivity
      this.Switch.setAttribute("data-state", this.currentState);

      // Switch to next theme
      this.currentTheme = this.themes[this.currentState];

      // Update data attributes, or reflect props to attrs
      this.setAttribute("data-theme", this.currentTheme);
      document.body.setAttribute("data-theme", this.currentTheme);

      // Log theme name
      if (this.verbose) {
        console.log(`Current theme: ${this.currentTheme}`);
        console.log(`Current state: ${this.currentState}`)
        console.log(`localStorage:\n\t Key: ${localStorage.key(0)}, Value: ${localStorage.getItem("lastState")}`);
      }
  }

  connectedCallback(){

    this.Switch.setAttribute("data-theme", this.getAttribute("data-theme"));

    this.Switch.onclick = () => {

      // Go to the next state
      this.transition('CLICK');
      
      this.prepareTheme();

      // Set theme to localstorage
      localStorage.setItem("lastState", this.currentState);
    };
  }
}

customElements.define('theme-switcher', ThemeSwitch);
