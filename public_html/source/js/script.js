$(document).ready(function () {
  $('#products').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

  const owl = $('#products');
  owl.owlCarousel();
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  })
  $(".customNextBtn, .customPrevBtn").hover(
    function() {
      owl.trigger('stop.owl.autoplay')
    },
    function(e) {
      owl.trigger('play.owl.autoplay')
    }
  );
});