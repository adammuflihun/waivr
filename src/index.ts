import { gsapHome } from '$utils/gsapHome';

// import { motionDev } from '$utils/motionDev';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('mantap');
});

gsapHome();
// motionDev();

window.Webflow.push(function () {
  var tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // define loop - cycle through all tabs
  function tabLoop() {
    tabTimeout = setTimeout(function () {
      var $next = $('.wrapper-link').children('.w--current:first').next();

      if ($next.length) {
        $next.click(); // click resets timeout, so no need for interval
      } else {
        $('.wrapper-link .link-card:first').click();
      }
    }, 3000);
  }

  // reset timeout if a tab is clicked
  $('.wrapper-link .link-card').click(function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });
});

// window.Webflow.push(function () {
//   var tabTimeout;
//   clearTimeout(tabTimeout);
//   tabLoop();

//   // define loop - cycle through all tabs
//   function tabLoop() {
//     tabTimeout = setTimeout(function () {
//       var $next = $('.wrapper-link2').children('.w--current:first').next();

//       if ($next.length) {
//         $next.click(); // click resets timeout, so no need for interval
//       } else {
//         $('.wrapper-link2 .link-card:first').click();
//       }
//     }, 3000);
//   }

//   // reset timeout if a tab is clicked
//   $('.wrapper-link2 .link-card').click(function () {
//     clearTimeout(tabTimeout);
//     tabLoop();
//   });
// });
