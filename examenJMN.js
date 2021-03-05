var ini = document.getElementById("t_inicio");
var boton = document.getElementById("validar");
boton.addEventListener("click", cArreglo );
function cArreglo()
{
validarArreglo();
}

function validarArreglo(){

var arreglo = [2, 9, 5, 9, 6];
var valor = parseFloat(ini.value);

  console.log(arreglo.includes(valor));

                }
