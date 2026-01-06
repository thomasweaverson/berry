export function removeNojsClasses() {
  document.querySelectorAll('*').forEach((el) => {
    [...el.classList]
      .filter((cls) => cls.endsWith('--nojs'))
      .forEach((cls) => el.classList.remove(cls));
  });
}
