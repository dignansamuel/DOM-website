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

// CTA buttons link directly to WhatsApp (wa.me) with a pre-filled
// message. The previous application form / Calendly flow was removed.

// Lightbox: click any content photo to view it larger.
const zoomable = document.querySelectorAll(
  '.result-photo, .lifestyle-photo, .portrait-photo, .story-photo'
);
if (zoomable.length) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<img class="lightbox-image" alt="">';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('.lightbox-image');

  const openLightbox = (src, alt) => {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  zoomable.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.currentSrc || img.src, img.alt));
  });

  // Click the backdrop or the close button to dismiss (not the image itself).
  overlay.addEventListener('click', (event) => {
    if (event.target !== overlayImg) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
