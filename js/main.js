// this line to complete the code of jquery
/// <reference path="../../typings/globals/jquery/index.d.ts" />

// owl scroll in screens section
$(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    dots: true,
    center: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // scroll-to-top
  $(".scroll-to-top a").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  // display the navbar when scroll to bottom
  $(window).scroll(function() {
    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: 0,
        "background-color": "rgba(59,59,59,0)"
      });
    } else {
      $(".navbar").css({
        "margin-top": 0,
        opacity: "1",
        "background-color": "rgba(59,59,59,0.7)",
        "border-bottom": "#444 1px solid"
      });
    }
  });

  // smooth scroll to other sections
  $(".navbar-nav li a").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top
      },
      1000
    );
  });

  // add class active on link when click
  $(".navbar-nav li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  //sync navbar links active with sections
  $(window).scroll(function() {
    $("section").each(function() {
      var ID = $(this).attr("id"), // id of this section
        height = $(this).outerHeight(), // outerheight of this section
        greaterTop = $(this).offset().top - 70; // offset top of this section (distance from the top window)
      if (
        $(window).scrollTop() > greaterTop &&
        $(window).scrollTop() < greaterTop + height
      ) {
        $(".navbar-nav li").removeClass("active");
        $(".navbar li a[data-scroll='" + ID + "']")
          .parent()
          .addClass("active");
      }
    });
  });

  // add auto padding to header-content when scroll
  setInterval(function() {
    var windowHeight = $(window).height(),
      headerContentHeight = $(".header-content").height(),
      padTop = windowHeight - headerContentHeight;

    $(".header-content").css({
      "padding-top": Math.round(padTop / 2) + "px",
      "padding-bottom": Math.round(padTop / 2) + "px"
    });
  }, 10);

  // counter the numbers in counter section
  $(".counter-num").counterUp({
    delay: 10,
    time: 2000
  });
});
