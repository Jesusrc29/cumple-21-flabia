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
revealButton.addEventListener('click', () => {
  concert.hidden = false;
  revealButton.setAttribute('aria-expanded', 'true');
  giftIntro.hidden = true;
  concert.focus({ preventScroll: true });
  concert.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
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
