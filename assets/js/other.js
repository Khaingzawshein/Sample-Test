$(document).ready(function () {

  // Hamburger
  $(".cross").hide();
  $(".smMenu").hide();
  $(".hamburger").click(function () {
    $(".smMenu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".smMenu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

  //inview
  $(".list-mv1").one(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("mv1");
      } else {
        $(this).stop().removeClass("mv1");
      }
    }
  );

  //Owl Carousel
  $('#owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    dots: true,
    dotsData: true,
    nav: true,
    number: true,
    items: 1,
  })

  //Image Popup
  $('.img-list a').on('click', function (e) {
    e.preventDefault();

    var imgLink = $(this).children('img').attr('src');

    $('.mask').html('<div class="img-box"><img src="' + imgLink + '"><a class="close">&times;</a>');

    $('.mask').addClass('is-visible fadein').on('animationend', function () {
      $(this).removeClass('fadein is-visible').addClass('is-visible');
    });

    $('.close').on('click', function () {
      $(this).parents('.mask').addClass('fadeout').on('animationend', function () {
        $(this).removeClass('fadeout is-visible')
      });
    });

  });

    // Add smooth scrolling to all links

    $('a').on("click", function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        if (this.hash !== "") {
          e.preventDefault();
          var myHeight = 130;
          var hash = this.hash;
          var hashOffset = $(hash).offset().top - myHeight;
          $("html, body").animate({
              scrollTop: hashOffset,
            },
            800
          );
        }
      }
    });

});

