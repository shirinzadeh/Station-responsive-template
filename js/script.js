// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  /** TESTIMONIAL CAROUSEL */
  $(".carousel-testimonial").owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
    }
  });

  /** PORTFOLIO MAGNIFIC POPUP */
  $('.portfolio-project').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
    }
  });

  /* PORTFOLIO MENU FILTER */
  $(".portfolio-menu").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).slideUp().hide();
      $('.filter').filter('.' + value).addClass('mb-30').slideDown().show();
    }
  });

  if ($(".portfolio-menu").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  /** COUNTER JS  */
  if ($('#project-counter')) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }

  /*  CONTACT FORM VALIDATION  */
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

})();

