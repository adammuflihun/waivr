import { gsapHome } from '$utils/gsapHome';

// import { motionDev } from '$utils/motionDev';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('mantap');
});

gsapHome();
// motionDev();

let myTimer;

$('.link-card').on('click', function () {
  $('.wrapper-link .is--current').removeClass('is--current');
  $(this).addClass('is--current');
  let myIndex = $(this).index();
  // $('.app_img').eq(myIndex).addClass('is--current');
  clearInterval(myTimer);
  runInterval();
});

function runInterval() {
  myTimer = setInterval(function () {
    let currentItems = $('.wrapper-link .is--current');
    if (currentItems.next().length > 0) {
      currentItems.next().addClass('is--current');
    } else {
      $('.link-card').eq(0).addClass('is--current');
      // $('.app_img').eq(0).addClass('is--current');
    }
    currentItems.removeClass('is--current');
  }, 5000);
}
runInterval();

let myTimer2;

$('.link-card2').on('click', function () {
  $('.wrapper-link2 .is--current').removeClass('is--current');
  $(this).addClass('is--current');
  let myIndex = $(this).index();
  // console.log(myIndex);
  // $('.app_img').eq(myIndex).addClass('is--current');
  clearInterval(myTimer2);
  runInterval2n();
});

function runInterval2() {
  myTimer2 = setInterval(function () {
    let currentItems = $('.wrapper-link2 .is--current');
    if (currentItems.next().length > 0) {
      currentItems.next().addClass('is--current');
    } else {
      $('.link-card2').eq(0).addClass('is--current');
      // $('.app_img').eq(0).addClass('is--current');
    }
    currentItems.removeClass('is--current');
  }, 5000);
}
runInterval2();
