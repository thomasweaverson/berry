import { changeLayout } from './change-layout.js';
import { removeNojsClasses } from './no.js';
import { initMenuToggle } from './toggle.js';
import { responsiveTextareaRows } from './responsive-textarea-rows.js';

document.addEventListener('DOMContentLoaded', () => {
  removeNojsClasses();
  initMenuToggle();
  changeLayout();
  responsiveTextareaRows();
});
