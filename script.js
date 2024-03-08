$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(),
          speed = 0.5;

      // Ajusta a posição do background para começar do meio e mover para baixo
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

          // Se parte da imagem está visível
          if (thisBottom > scrollPos && thisTop < (scrollPos + windowHeight)) {
              $(this).find('.dark-overlay').css('background', 'rgba(0, 0, 0, 0)');
          } else {
              $(this).find('.dark-overlay').css('background', 'rgba(0, 0, 0, 0.5)');
          }
      });
  }

  // Verifica ao carregar e ao rolar a página
  checkVisibility();
  $(window).scroll(function() {
      checkVisibility();
  });
});