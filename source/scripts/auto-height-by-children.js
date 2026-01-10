export function autoHeightByChildren({
  selector = '.form__berries',
  maxItems = 11,
  activeClass = 'form__berries--auto-height',
} = {}) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  const update = () => {
    const count = container.children.length;

    if (count > maxItems) {
      container.classList.add(activeClass);
    } else {
      container.classList.remove(activeClass);
    }
  };

  update();

  const observer = new MutationObserver(update);
  observer.observe(container, { childList: true });
}
