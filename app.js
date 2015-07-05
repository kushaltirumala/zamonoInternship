var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "285px"
    }, 500);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 500);

    $('body').animate({
      left: "0px"
    }, 400);
  });
};


$(document).ready(main);