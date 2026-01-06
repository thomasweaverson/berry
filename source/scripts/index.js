import { removeNojsClasses } from './no.js';
import { initMenuToggle } from './toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  removeNojsClasses();
  initMenuToggle();
});
