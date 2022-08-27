import { gsap } from 'gsap';
import { CustomBounce } from 'gsap/CustomBounce';
import { CustomEase } from 'gsap/CustomEase';

export const gsapHome = () => {
  gsap.registerPlugin(CustomEase, CustomBounce);
  var tlHeader = new gsap.timeline();
  var tlBall = new gsap.timeline();
  CustomBounce.create('myBounce', { strength: 0.5, squash: 2 });
  CustomBounce.create('myBounceH', { strength: 0.2 });

  tlBall
    .to('.ball', 3, { scale: 7, y: '165vh', x: '50vw', ease: 'myBounce' })
    .to('.ball', 3.5, { scale: 9, y: '40vh', x: '110vw', ease: 'power4.out' }, 1);

  tlHeader
    .from('.logo-waivr', { opacity: 0, duration: 0.5 }, 0)
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
      '.wrap-section-header-1 h1 , .wrap-section-header-1 p, .wrap-section-header-1 .book-meeting',
      {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.07,
      },
      1
    );
};
