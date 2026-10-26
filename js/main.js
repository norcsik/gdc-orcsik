document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.join-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');

      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Sent';
        button.disabled = true;

        window.setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 1400);
      }
    });
  }
});
