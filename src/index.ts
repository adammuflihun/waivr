import { greetUser } from '$utils/greet';
import { gsapHome } from '$utils/gsapHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
  gsapHome();
});

let myTimer;

$('.card').on('click', function () {
  $('.is--current').removeClass('is--current');
  $(this).addClass('is--current');
  let myIndex = $(this).index();
  $('.app_img').eq(myIndex).addClass('is--current');
  clearInterval(myTimer);
  runInterval();
});

function runInterval() {
  myTimer = setInterval(function () {
    let currentItems = $('.is--current');
    if (currentItems.next().length > 0) {
      currentItems.next().addClass('is--current');
    } else {
      $('.card').eq(0).addClass('is--current');
      $('.app_img').eq(0).addClass('is--current');
    }
    currentItems.removeClass('is--current');
  }, 5000);
}
runInterval();
