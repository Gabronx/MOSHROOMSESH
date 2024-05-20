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


<<<<<<< HEAD
  document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const logo = document.getElementById("logo");

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            logo.src = "img/MOSH_LOGO.png"; // Caminho para a imagem do modo escuro
        } else {
            logo.src = "img/MOSHROOM-LOGO.png"; // Caminho para a imagem do modo claro
        }
    });
});
=======
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
>>>>>>> main
