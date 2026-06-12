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

// Pause the testimonial ticker on hover so quotes can be read
const ticker = document.querySelector('.ticker-track');
if (ticker) {
  ticker.addEventListener('mouseenter', () => { ticker.style.animationPlayState = 'paused'; });
  ticker.addEventListener('mouseleave', () => { ticker.style.animationPlayState = 'running'; });
}
