export function responsiveTextareaRows({
  selector = '.js-responsive-textarea-rows',
  breakpoint = 768,
  rowsSmall = 2,
  rowsLarge = 1,
} = {}) {
  const textareas = document.querySelectorAll(selector);
  if (!textareas.length) {
    return;
  }

  const update = () => {
    const rows = window.innerWidth >= breakpoint ? rowsLarge : rowsSmall;
    textareas.forEach((textarea) => {
      textarea.rows = rows;
    });
  };

  update();
  window.addEventListener('resize', update);
}
