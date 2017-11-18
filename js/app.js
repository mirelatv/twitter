
/* Creando variables*/
var texto = document.querySelector('.texto');
var contador = 140;
var displayContador = document.querySelector('.caracteres');
var save = document.querySelector('.btn');
var form = document.querySelector('.fpb');
var containerPrincipal = document.querySelector('.container-principal');
/* var Chracteres = document.querySelector('.caracteres');*/


/* adiriendo evento de conteo-Si pasa los 140, mostrar el contador en negativo/event- keyup*/
texto.addEventListener('keyup', function(event) {
  var letter = this.value.length;
  contador = 140 - letter;
  displayContador.textContent = contador;
});

/* Cambio de colores en el contador*/
texto.addEventListener('keyup', function() {
  var contLetter = texto.value.length;
  if (0 < contLetter && contLetter < 120) {
    displayContador.className = 'black';
  } else if (120 < contLetter && contLetter < 130) {
    displayContador.className = 'blue';
  } else if (130 < contLetter) {
    displayContador.className = 'red' ;
  }
});

/* Creando hijos asignandole classe , padre - Para contenedor de texto ya twiteado*/
save.addEventListener('click', function(event) {
  var newBox = document.createElement('div');
  var saveTwit = document.createElement('p');
  containerPrincipal.appendChild(newBox);
  newBox.appendChild(saveTwit);
  saveTwit.classList.add('paragraph');
  saveTwit.textContent = texto.value;
  /* Inserto antes del primer hijo*/
  containerPrincipal.insertBefore(newBox, containerPrincipal.firstElementChild);
  texto.value = ('');
});
/* desabilitando el boton de twittear al ingresar texto vacio y pasado los 140 caracteres*/
texto.addEventListener('keyup', function(event) {
  var theLetter = texto.value;
  var largeLetter = theLetter.length;
  if (largeLetter > 140) {
    save.disabled = true;
  }
  var theLetter = texto.value;
  if (theLetter === (' ')) {
    save.disabled = true;
  }
});
