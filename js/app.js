
/* Creando variables*/
var texto = document.querySelector('.texto');
var contador = 140;
var displayContador = document.querySelector('.caracteres');
var save = document.querySelector('.btn');
var form = document.querySelector('.fpb');
var containerPrincipal = document.querySelector('.container-principal');


/* adiriendo evento de conteo-Si pasa los 140, mostrar el contador en negativo/event- keyup*/
texto.addEventListener('keyup', function() {
  var letras = this.value.length;
  contador = 140 - letras;
  displayContador.textContent = contador;
});

/* Cambio de colores en el contador*/
texto.addEventListener('keyup', function() {
  var contLetter = texto.value.length;
  if (0 < contLetter && contLetter < 120) {
    displayContador.classList.add('black');
  } else if (120 < contLetter < 131) {
    displayContador.classList.add('blue');
  } else {
    displayContador.classList.add('red');
  }
});

/* Desabilitar el Button*/
save.addEventListener('click', function(event) {
  console.log(event);
  var referencial = texto.value.length ;
  referencial > 140;
  save.disabled = true;
  referencial < 140;
  save.isTrusted = true ;
});
