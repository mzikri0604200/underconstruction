(function () {
  var hari, jam, menit, detik, eventTime, currentTime, duration, interval, intervalId;

  interval = 1000; // 1 second

  // get time element
  hari = document.querySelector('.count-text__hari');
  jam = document.querySelector('.count-text__jam');
  menit = document.querySelector('.count-text__menit');
  detik = document.querySelector('.count-text__detik');
  // calculate difference between two times
  eventTime = moment.tz('2021-08-31T00:00:00', 'Asia/Jakarta');
  // based on time set in user's computer time / OS
  currentTime = moment.tz();
  // get duration between two times
  duration = moment.duration(eventTime.diff(currentTime));
  // loop to countdown every 1 second
  setInterval(function () {
    // get updated duration
    duration = moment.duration(duration - interval, 'milliseconds');

    // if duration is >= 0
    if (duration.asSeconds() <= 0) {
      clearInterval(intervalId);
    } else {
      // otherwise, show the updated countdown
      hari.innerHTML = duration.days();
      jam.innerHTML = duration.hours();
      menit.innerHTML = duration.minutes();
      detik.innerHTML = duration.seconds();
    }
  }, interval);
})();

$('document').ready(function () {
  localStorage.setItem('popup', 0);
  // carousel
  $('.owl-live').owlCarousel({
    loop: false,
    margin: 10,

    nav: true,
    dots: false,
    stagePadding: 50,
    navText: [
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--left ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class=" bi bi-chevron-left" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
            `,
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--right ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>`,
    ],
    responsive: {
      0: {
        items: 2,
        stagePadding: 18,
        nav: false,
      },
      768: {
        items: 3,
      },
    },
  });
  $('.owl-vid').owlCarousel({
    loop: false,
    margin: 10,
    items: 3,
    nav: true,
    dots: false,
    stagePadding: 50,
    startPosition: 4,
    navText: [
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--left ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class=" bi bi-chevron-left" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
            `,
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--right ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>`,
    ],
    responsive: {
      0: {
        items: 2,
        stagePadding: 18,
        nav: false,
      },
      768: {
        items: 3,
      },
    },
  });
  $('.owl-match').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    stagePadding: 30,
    navText: [
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--left ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class=" bi bi-chevron-left" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
            `,
      `
                <div class="bg-light shadow rounded-circle btn-chevron btn-chevron--right ">
                  <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>`,
    ],
    dots: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
      },
      1280: {
        items: 4,
      },
    },
  });
  $('.navbar-toggler').click(function () {
    $('.overlay-layer').toggleClass('d-none');
    $('body').toggleClass('overflow-body');
    $('html').toggleClass('overflow-body');
  });
  // overlay-layer
  $('.overlay-layer').click(function () {
    $('body').toggleClass('overflow-body');
    $('html').toggleClass('overflow-body');
    $('.navbar-toggler').toggleClass('collapsed');
    $('.navbar-toggler').attr('aria-expanded', 'false');
    $('.navbar-collapse').toggleClass('show');
    $(this).toggleClass('d-none');
  });
  // console.log($(document).height());
  // detect scroll
  $(window).on('scroll', function () {
    // let y = $(window).scrollTop();
    // let docHeight =  $(document).height();
    // // let result = docHeight - (docHeight * .10);
    // if(y > 600){
    //   if(localStorage.getItem('popup')==0){
    //     $('#modalLogin').modal('show');
    //     localStorage.setItem('popup', 1);
    //   }
    // }else if(docHeight <= 1300){
    //   if( localStorage.getItem('popup')==0){
    //     if(y > 400  ){
    //       $('#modalLogin').modal('show');
    //       localStorage.setItem('popup', 1);
    //     }
    //   }
    // }
    if (localStorage.getItem('popup') == 0) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        $('#modalLogin').modal('show');
        localStorage.setItem('popup', 1);
      }
    }
  });

  function modalLoginShow() {
    $('#modalLogin').modal('show');
  }

  $('.btn-regist-home').on('click', function () {
    $('#modalLogin').modal('hide');
  });
  $('.post-match').on('click', function (e) {
    e.preventDefault();
    modalLoginShow();
  });
  $('.item').on('click', function (e) {
    e.preventDefault();
    modalLoginShow();
  });
  const interval = 300000; // 5 menit delay

  setInterval(function () {
    localStorage.setItem('popup', 0);
  }, interval);
});
