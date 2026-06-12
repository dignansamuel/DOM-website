// ============================================================
// DOMAN COACHING — INTERACTIONS
// Kept deliberately minimal: the page works fully without JS.
// ============================================================

// Footer year — updates automatically
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ: close other items when one opens (accordion behaviour)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// CTA buttons: open Calendly in a popup overlay.
// Falls back to scrolling to the embedded calendar if the
// Calendly script hasn't loaded (e.g. blocked or offline).
const CALENDLY_URL = 'https://calendly.com/domen-korbar/strateskiklic';
document.querySelectorAll('.cta-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (window.Calendly) {
      event.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
    // else: default href (#apply) scrolls to the inline calendar
  });
});

// Pause the testimonial ticker on hover so quotes can be read
const ticker = document.querySelector('.ticker-track');
if (ticker) {
  ticker.addEventListener('mouseenter', () => { ticker.style.animationPlayState = 'paused'; });
  ticker.addEventListener('mouseleave', () => { ticker.style.animationPlayState = 'running'; });
}
