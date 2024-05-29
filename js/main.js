(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "ease");
    return false;
  });

  let scrollToTopBtn = document.getElementById("back-top");
  let rootElement = document.documentElement;
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopBtn.addEventListener("click", scrollToTop);

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  //! Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: false,
    items: 1,
  });

  //! Testimonials carousel
  $(".lifestyle-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  //! Facilities carousel
  $(".facilities-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    margin: 50,
    dots: false,
    items: 4,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 4,
      },
    },
  });

  //! functionality carousel
  $(".functionality-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    margin: 50,
    dots: false,
    items: 4,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 4,
      },
    },
  });
})(jQuery);

//! SIDE BAR CONTACT US
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".sidebar-contact").toggleClass("active");
    $(".toggle").toggleClass("active");
  });
});

const controlNavbar = () => {
  let elem = document.getElementById("sidebar");
  if (window.scrollY > 400) {
    elem.classList.remove("hide-sidebar"); // Remove class
  } else {
    elem.classList.add("hide-sidebar"); // Add class
  }
};

window.addEventListener("scroll", controlNavbar);

// ? IMAGE GALLERY

let thumbnails = document.getElementById("thumbnails");
console.log("thumbnails", thumbnails);

let imgs = thumbnails.getElementsByTagName("img");
let main = document.getElementById("main");

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    main.src = this.src;
  });
}
