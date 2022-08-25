import { gsap } from 'gsap';
import { TweenMax } from 'gsap/all';

export const gsapHome = () => {
  var tlHeader = new gsap.timeline();
  tlHeader
    .from('.logo-waivr', { opacity: 0, y: 100, duration: 0.5 })
    .from('.navlink , .button', {
      delay: 0.5,
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.07,
    })
    .from(
      '.wrap-section-header-1 h1 , p, .book-meeting',
      {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.07,
      },
      1.3
    );

  var tlBall = new gsap.timeline();

  tlBall
    .to('.ball', 0.1, { transformOrigin: '50% 100%', scaleY: 0.25, yoyo: true, repeat: 1 })
    .to('.ball', 0.75, { y: -400, ease: Circ.easeOut, yoyo: true, repeat: 1 });
};
