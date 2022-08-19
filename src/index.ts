import { greetUser } from '$utils/greet';
import { gsapHome } from '$utils/gsapHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
  gsapHome();
});
