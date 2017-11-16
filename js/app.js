/*Si pasa los 140 caracteres, deshabilitar el botón.
Si pasa los 120 caracteres, mostrar el contador con OTRO color.
Si pasa los 130 caracteres, mostrar el contador con OTRO color.
Si pasa los 140 caracteres, mostrar el contador en negativo.
}*/

/*Creando variables*/
var texto = document.querySelector(".texto");
var contador = 140;
var displayContador=document.querySelector(".caracteres");
var save=document.querySelector(".send");

/*eventos*/
texto.addEventListener("keyup", count);
save.addEventListener("click",saving);

/*adiriendo evento de conteo-Si pasa los 140, mostrar el contador en negativo/event- keyup*/
function count(event){
var total=texto.value.length;
contador = 140 - total;
displayContador.textContent = contador;
}

/*salvando texto*/


function saving(event){
if(0<total<=140){
save.disable()="false"}
else{save.disable()="true"}
}






/*adiriendo de desabilitar el input con mas de 140 caracteres
var sendInfo= document.querySelector(".enviar")
function Condition(){
if(total=(x<0)){
sendInfo.setAtribute("disabled",true);*/
