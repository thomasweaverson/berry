export function initMenuToggle() {
  const toggler = document.querySelector('.page-header__toggler');
  const menu = document.querySelector('.page-header__navigation');

  if (!toggler || !menu) {
    return;
  }

  toggler.classList.add('page-header__toggler--closed');
  toggler.addEventListener('click', () => {
    const isClosed = toggler.classList.contains('page-header__toggler--closed');

    if (isClosed) {
      toggler.classList.remove('page-header__toggler--closed');
      toggler.classList.add('page-header__toggler--opened');
      menu.classList.add('page-header__navigation--shown');
    } else {
      toggler.classList.remove('page-header__toggler--opened');
      toggler.classList.add('page-header__toggler--closed');
      menu.classList.remove('page-header__navigation--shown');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
});
