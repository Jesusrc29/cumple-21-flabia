'use strict';

// Frases editables: actualiza también su copia en index.html para la versión sin JS.
const birthdayContent = {
  reasons: [
    'Me gusta reírme contigo.',
    'Me encanta escucharte contarme tu día.',
    'Admiro cómo te esfuerzas por tus metas.',
    'Valoro los momentos que encontramos para estar juntos.',
    'Me hace ilusión todo lo que aún nos espera.'
  ]
};
document.querySelectorAll('.reason p').forEach((paragraph, index) => {
  paragraph.textContent = birthdayContent.reasons[index];
});
const revealButton = document.getElementById('reveal-gift');
const concert = document.getElementById('concert');
const giftIntro = document.getElementById('gift-intro');
let giftOpening = false;
revealButton.addEventListener('click', async () => {
  if (giftOpening) return;
  giftOpening = true;
  revealButton.disabled = true;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const giftBox = giftIntro.querySelector('.gift-box');
  giftIntro.classList.add('is-opening');
  document.getElementById('gift-status').textContent = 'Abriendo tu regalo…';

  // La tapa lleva consigo el lazo. Sin temporizadores si se pide movimiento reducido.
  if (!reduceMotion.matches && typeof giftBox.animate === 'function') {
    const lid = giftBox.querySelector('.gift-lid');
    const opening = lid.animate([
      { transform: 'translateY(0) rotate(0)', opacity: 1 },
      { transform: 'translateY(-22px) rotate(-6deg)', opacity: 1, offset: 0.4 },
      { transform: 'translate(-12px, -62px) rotate(-14deg)', opacity: 0 }
    ], { duration: 650, easing: 'ease-in-out', fill: 'forwards' });
    await opening.finished.catch(() => {});
  }

  concert.hidden = false;
  revealButton.setAttribute('aria-expanded', 'true');
  giftIntro.hidden = true;
  concert.classList.add('ticket-revealed');
  document.getElementById('gift-status').textContent = 'Tu regalo: dos entradas VIP para ver a Jay Wheeler, para Flabia y Jesús.';
  concert.focus({ preventScroll: true });
  concert.scrollIntoView({
    behavior: reduceMotion.matches ? 'instant' : 'smooth',
    block: 'start'
  });
});

// Mejora progresiva: el contenido permanece visible si esta API no está disponible.
if ('IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-entered');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section-pad > .wrap').forEach(section => {
    sectionObserver.observe(section);
  });
}
