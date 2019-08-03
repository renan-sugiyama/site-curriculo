// aparecer ou nao o menu
let totalHeight = window.innerHeight;
window.addEventListener("scroll", function() {
    if(this.pageYOffset > 150) {
        this.document.querySelector('.navbar').style.opacity = 1
    } else {
        this.document.querySelector('.navbar').style.opacity = 0
    }
  })


// bootstrap scrollspy 
$('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });


$(window).scroll(function () {
  $('.sessao-titulo').each(function () {

      var tituloPos = $(this).offset().top;
      var tituloHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (tituloPos < topOfWindow + tituloHeight + 300 && tituloPos + tituloHeight > topOfWindow) {
          $(this).addClass("titulo-background");

      } 
      // else {
      //     $(this).removeClass("titulo-background");
      // }
  });
});