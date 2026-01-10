import { autoHeightByChildren } from './auto-height-by-children.js';
import { removeNojsClasses } from './no.js';
import { initMenuToggle } from './toggle.js';
import { responsiveTextareaRows } from './responsive-textarea-rows.js';

document.addEventListener('DOMContentLoaded', () => {
  removeNojsClasses();
  initMenuToggle();
  autoHeightByChildren();
  responsiveTextareaRows();
});
