var ini = document.getElementById("t_inicio");
var fini = document.getElementById("t_fin");
var boton = document.getElementById("crear");
boton.addEventListener("click", cArreglo );
function cArreglo()
{
creaArreglo();
}

function creaArreglo(){

var cont = 0;
var inicio = parseFloat(ini.value);
var fin = parseFloat(fini.value);

   let arreglo = [];
          do
            {
                arreglo[cont] = inicio;
                inicio=inicio+1;
                cont++;
                console.log(arreglo);


            } while (inicio <= fin)
}
