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

  

  
  
};
