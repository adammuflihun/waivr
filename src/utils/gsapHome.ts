import { gsap } from 'gsap';

export const gsapHome = () => {
  gsap.from('.navlink , .button', { opacity: 0, y: 100, duration: 0.5, stagger: 0.07 });
};
