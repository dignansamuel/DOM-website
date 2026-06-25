// ============================================================
// REFORGED METHOD — INTERACTIONS
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

// CTA buttons scroll to the application section (#apply).
// Booking via Calendly was removed in favour of an application-first
// filter; the form embed/link will live in the #apply section.
