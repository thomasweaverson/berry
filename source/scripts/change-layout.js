// Скрипт придуман для соответствия требованию по переполнению
// Так как в блоке .form__berries поток "газетный", и "нет связи с дизайнером", то управлять без ограничения высоты сложновато
// При изменениях на переполнение в блоке .form__berries - меняется layout на мобильной и десктопной ширине вьюпорта.
export function changeLayout({
  selector = '.form__berries',
  maxItems = 11,
  maxTextLength = 9,
  textElementClass = 'form__input-text',
  activeClass = 'form__berries--js-layout'
} = {}) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  const checkTextLength = () => {
    const textElements = container.querySelectorAll(`.${textElementClass}`);

    for (const element of textElements) {
      const text = element.textContent || element.innerText || '';
      if (text.length > maxTextLength) {
        return true;
      }
    }
    return false;
  };

  const update = () => {
    const count = container.children.length;
    const textTooLong = checkTextLength();

    if (count >= maxItems || textTooLong) {
      container.classList.add(activeClass);
    } else {
      container.classList.remove(activeClass);
    }
  };

  update();

  const observer = new MutationObserver(update);

  observer.observe(container, {
    childList: true,
    characterData: true,
    subtree: true
  });
}
