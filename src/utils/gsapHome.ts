import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

export const gsapHome = () => {
  gsap.registerPlugin(CustomEase, CustomBounce);
  var tlHeader = new gsap.timeline();
  var tlBall = new gsap.timeline();
  // CustomBounce.create('myBounce', { strength: 0.7, squash: 3 });
  tlBall
    .to('.ball', 2.5, { scale: 4, y: '104vh', x: '35vw' })
    .to('.ball', 2, { scale: 7, y: '40vh', x: '100vw' }, 1);

  tlHeader
    .from('.logo-waivr', { opacity: 0, y: 100, duration: 0.5 }, 0)
    .from(
      '.navlink , .button',
      {
        delay: 0.5,
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.07,
      },
      0.5
    )
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
};
