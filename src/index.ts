import { gsapHome } from '$utils/gsapHome';






// import { motionDev } from '$utils/motionDev';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('mantap');
});

gsapHome();
// motionDev();

window.Webflow.push(function() {
  var tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // define loop - cycle through all tabs
  function tabLoop() {
      tabTimeout = setTimeout(function() {
          var $next = $('.wrapper-link').children('.w--current:first').next();

          if ($next.length) {
              $next.click(); // click resets timeout, so no need for interval
          } else {
              $('.wrapper-link .link-card:first').click();
          }
      }, 3000);
  }

  // reset timeout if a tab is clicked
  $('.wrapper-link .link-card').click(function() {
      clearTimeout(tabTimeout);
      tabLoop();
  });
});



window.Webflow.push(function() {
  var tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // define loop - cycle through all tabs
  function tabLoop() {
      tabTimeout = setTimeout(function() {
          var $next = $('.wrapper-link2').children('.w--current:first').next();

          if ($next.length) {
              $next.click(); // click resets timeout, so no need for interval
          } else {
              $('.wrapper-link2 .link-card:first').click();
          }
      }, 3000);
  }

  // reset timeout if a tab is clicked
  $('.wrapper-link2 .link-card').click(function() {
      clearTimeout(tabTimeout);
      tabLoop();
  });
});







// $('#howitworks1').on('inview', function(event, isInView) {
//   if (isInView) {

    

//     let myTimer;

//     $('.link-card').on('click', function () {
//       $('.wrapper-link .is--current').removeClass('is--current');
//       $(this).addClass('is--current');
//       let myIndex = $(this).index();
//       // $('.app_img').eq(myIndex).addClass('is--current');
//       clearInterval(myTimer);
//       runInterval();
//     });
    
//     function runInterval() {
//       myTimer = setInterval(function () {
//         let currentItems = $('.wrapper-link .is--current');
//         if (currentItems.next().length > 0) {
//           currentItems.next().addClass('is--current');
//         } else {
//           $('.link-card').eq(0).addClass('is--current');
//           // $('.app_img').eq(0).addClass('is--current');
//         }
//         currentItems.removeClass('is--current');
//       }, 7000);
//     }
//     runInterval();





//   } else {
//     // element has gone out of viewport
//   }
// });

// $('#howitworks2').on('inview', function(event, isInView) {
//   if (isInView) {
   
//     let myTimer2;


//     $('.link-card2').on('click', function () {
//       $('.wrapper-link2 .is--current').removeClass('is--current');
//       $(this).addClass('is--current');
//       let myIndex = $(this).index();
//       // console.log(myIndex);
//       // $('.app_img').eq(myIndex).addClass('is--current');
//       clearInterval(myTimer2);
//       runInterval2();
//     });
    
//     function runInterval2() {
//       myTimer2 = setInterval(function () {
//         let currentItems = $('.wrapper-link2 .is--current');
//         if (currentItems.next().length > 0) {
//           currentItems.next().addClass('is--current');
//         } else {
//           $('.link-card2').eq(0).addClass('is--current');

//         }
//         currentItems.removeClass('is--current');
//       }, 5000);
//     }
//     runInterval2();
//     // element is now visible in the viewport



//   } else {
//     // element has gone out of viewport
//   }
// });