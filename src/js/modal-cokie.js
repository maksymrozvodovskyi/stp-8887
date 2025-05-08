document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-cookie-modal]');
  const COOKIE_KEY = 'cookieConsentGiven';

  if (localStorage.getItem(COOKIE_KEY)) {
    modal?.remove();
    return;
  }

  document.body.style.overflow = 'hidden';

  modal?.addEventListener('click', event => {
    const action = event.target.dataset.cookieAction;

    if (action === 'accept' || action === 'reject') {
      localStorage.setItem(COOKIE_KEY, action);
      modal.remove();

      document.body.style.overflow = '';
    }
  });
});
