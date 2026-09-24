// Sends a named GA4 event for every CTA that carries a data-track id.
document.addEventListener('click', function (e) {
  var el = e.target && e.target.closest ? e.target.closest('[data-track]') : null;
  if (!el || typeof gtag !== 'function') return;
  var id = el.getAttribute('data-track');
  var name = id.indexOf('whatsapp') === 0 ? 'whatsapp_click'
           : id.indexOf('phone') === 0 ? 'phone_click'
           : id.indexOf('maps') === 0 ? 'directions_click'
           : 'cta_click';
  gtag('event', name, { cta: id, page: location.pathname });
}, { passive: true });
