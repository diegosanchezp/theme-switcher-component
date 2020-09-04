const template = document.createElement('template');

template.id = "theme-switch"
template.innerHTML =`
  <style>

    /* ==== ThemeSwitch Component Styles ==== */

    /* Define default styles for theme-switch */
    :host {
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

    /* The switch - the box around the slider */
    .switch {
      display: inline-block;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-radius);
      background-color: var(--switch-color);
    }

    /* Rounded slider */
    .slider {
      cursor: var(--slider-cursor);
      transition: var(--slider-transition);
      border-radius: var(--slider-radius);
      width: var(--slider-width);
      height: var(--slider-height);
      margin: var(--slider-margin);
      background-color: var(--slider-color);
      transform: var(--slider-translatex-unswitched);
    }
    
    /* Default State unswitched */

    /* Slider is switched to the right */
    .switch[data-state="1"] .slider{
      transform: var(--slider-translatex-switched);
    }

  </style>
  
  <!--HTML-->

  <div class="switch">
    <div class="slider round"></div>
  </div>
      
`
export {template}
