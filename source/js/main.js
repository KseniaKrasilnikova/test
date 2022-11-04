import {initBurger} from './modules/init-burger-action';
import {initFormValidate} from './modules/form/init-form-validate';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurger();
    initFormValidate();
  });
});

// ---------------------------------
