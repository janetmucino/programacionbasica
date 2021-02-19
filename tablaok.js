alert("Vamos a Crear una Tabla");
var fila = document.getElementById("texto_filas");
var colum = document.getElementById("texto_columnas");
var boton = document.getElementById("botoncrear");
boton.addEventListener("click", creaTabla );

function createTable() {
    var body = document.getElementsByTagName("body")[0];

    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var c = parseInt(fila.value);
    var f = parseInt(colum.value);
     //var c = 5;
     //var f = 3;

  //  celdas
  for (var i = 0; i < c; i++) {
    // hileras
    var hilera = document.createElement("tr");

    for (var j = 0; j < f; j++) {
      //
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda  "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");
}

function creaTabla()
{
createTable();
}
