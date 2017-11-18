
/* Creando variables*/
var texto = document.querySelector('.texto');
var contador = 140;
var displayContador = document.querySelector('.caracteres');
var save = document.querySelector('.btn');
var form = document.querySelector('.fpb');
var containerPrincipal = document.querySelector('.container-principal');
var contText = document.querySelector('.text');
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
/* desabilitando el boton de twittear al ingresar texto pasado los 140 caracteres*/
texto.addEventListener('keyup', function(event) {
  var theLetter = texto.value.length;
  if (theLetter > 140) {
    save.disabled = true;
  }
  var theLetter = texto.value;
  if (theLetter === ' ') {
    save.disabled = true;
  }
});

/* Textarea  incrementa  con el contenido*/
texto.addEventListener('keyup', function() {
  texto.style.height = 'auto';
  texto.style.height = texto.scrollHeight + 'px';
});
contText.addEventListener('keyup', function() {
  contText.style.height = 'auto';
  contText.style.height = contText.scrollHeight + 'px';
});
