$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(),
          speed = 0.5;
      $('.main-image').css('background-position', 'center calc(50% + ' + (scroll * speed) + 'px)');
  });
});

$(document).ready(function() {
  function checkVisibility() {
      var windowHeight = $(window).height();
      var scrollPos = $(window).scrollTop();

      $('.zoom-image').each(function() {
          var thisTop = $(this).offset().top;
          var thisHeight = $(this).outerHeight();
          var thisBottom = thisTop + thisHeight;

          if (thisBottom > scrollPos && thisTop < (scrollPos + windowHeight)) {
              $(this).find('.dark-overlay').css('background', 'rgba(0, 0, 0, 0)');
          } else {
              $(this).find('.dark-overlay').css('background', 'rgba(0, 0, 0, 0.5)');
          }
      });
  }

  checkVisibility();
  $(window).scroll(function() {
      checkVisibility();
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
