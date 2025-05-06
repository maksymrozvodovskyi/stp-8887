const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelectorAll('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
});

closeBtnEl.forEach(closeMenu => {
  closeMenu.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';
  });
});
