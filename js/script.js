
var texto = "HeLLBoyZ";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("log");
  window.setTimeout(function() { inserir(texto[count]) }, 200);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < texto.length)
    window.setTimeout(function() { inserir(texto[count]) }, 200);
}

window.onload = digitar;

$('body').bind('mousewheel DOMMouseScroll', function(e){
    if (e.originalEvent.wheelDelta) {
        var delta = e.originalEvent.wheelDelta;
    } else {
        var delta = e.originalEvent.detail * (-40);
    }
    if (delta > 0) {
        // scroll para cima
        $('.back-to-top').fadeIn();
    } else {
        // scroll para baixo
        $('.back-to-top').fadeOut();
    }
});
