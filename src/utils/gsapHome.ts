import { gsap } from 'gsap';
import { CustomBounce } from 'gsap/CustomBounce';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const gsapHome = () => {
  gsap.registerPlugin(CustomEase, CustomBounce, ScrollTrigger);
  var tlHeader = new gsap.timeline();
  var tlBall = new gsap.timeline();
  CustomBounce.create('myBounce', { strength: 0.5, squash: 2 });
  CustomBounce.create('myBounceH', { strength: 0.2 });

  gsap.to('.section-header', { autoAlpha: 1, duration: 0 });
  tlBall
    .to('.ball', 0, {
      opacity: 1,
      scale: 0.2,
    })
    .to('.ball', 3, {
      scale: 0.5,
      y: '160vh',
      x: '60vw',
      ease: 'myBounce',
      force3D: false,
    })
    // .to('.section-header', { backgroundColor: '#436EF2' }, 1)
    // .to('.gsap-color-white', { color: 'white', fill: 'white' }, 1)
    // .to('.gsap-color-yellow', { fill: '#E2FF62' }, 1)
    // .to('.ball', { backgroundColor: '#E2FF62' }, 0.8)
    .to('.ball', 3.5, { scale: 1, y: '40vh', x: '110vw', ease: 'power4.out', force3D: false }, 1);

  
    gsap.set(".section-transact-1 h2, .section-transact-1 .paragraph-small, .block-grid-transact .wrap-block-grid-transact, .block-grid-transact h3, .block-grid-transact .paragraph-small", {opacity: 0});
  
  gsap.from(
    '.section-transact-1 h2, .section-transact-1 .paragraph-small, .block-grid-transact .wrap-block-grid-transact, .block-grid-transact h3, .block-grid-transact .paragraph-small',
    {
      opacity: 0,
      autoAlpha: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.07,
      scrollTrigger: {
        trigger: '.section-transact-2',
        toggleActions: 'play none none none',
        start: 'top 80%',
      },
    },
    1
  );

  gsap.from(
    '.grid-how-it-works h2, .block-how-it-works .title-block-how-it-works,  .block-how-it-works .title-how-it-works-block, .block-how-it-works .wrapper-link , .block-how-it-works',
    {
      opacity: 0,
      y: 100,
      duration: 0.5,
      autoAlpha: 0,
      stagger: 0.07,
      scrollTrigger: {
        trigger: '.grid-how-it-works',
        toggleActions: 'play none none none',
        start: 'top 80%',
      },
    },
    1
  );

  gsap.from(
    '.section-backed-by .title-backed-by, .logo-backed-by img',
    {
      opacity: 0,
      y: 100,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.07,
      scrollTrigger: {
        trigger: '.section-backed-by',
        toggleActions: 'play none none none',
        start: 'top 80%',
      },
    },
    1
  );

  gsap.from(
    '.footer-social-link a, .footer-text ,.footer-social-link p, .footer-link-wrapper a ',
    {
      opacity: 0,
      y: 100,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.07,
      scrollTrigger: {
        trigger: '.section-footer',
        toggleActions: 'play none none none',
        start: 'top 80%',
      },
    },
    1
  );

  tlHeader
    .from('.logo-waivr', { opacity: 0, duration: 0.5 }, 0)
    .from(
      '.navlink , .button',
      {
        delay: 0.5,
        opacity: 0,
        autoAlpha: 1,
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
        autoAlpha: 1,
        y: 100,
        duration: 0.5,
        stagger: 0.07,
      },
      1
    );
};
