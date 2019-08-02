// aparecer ou nao o menu
let totalHeight = window.innerHeight;
window.addEventListener("scroll", function() {
    if(this.pageYOffset > 150) {
        this.document.querySelector('.navbar').style.opacity = 1
        console.log('teste')
    } else {
        this.document.querySelector('.navbar').style.opacity = 0
    }
  })


// bootstrap scrollspy 
$('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });