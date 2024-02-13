//VARIABLES
//Las variables estan en parsefloat para que el tipo de dato lo pase a numerico directamente
var montoPrincipal = parseFloat(document.getElementById('montoPrincipal').value);
var tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
var tiempoInversion = parseFloat(document.getElementById('tiempoInversion').value);
var gananciasCompuesto = montoPrincipal * Math.pow((1 + tasaInteres/100), tiempoInversion)-montoPrincipal;

//FUNCIÓN
//Es la función que se ejecutará al presionar el botón. 
function calcularGananciasConInteresCompuesto() {

    //VARIABLES
//Las variables estan en parsefloat para que el tipo de dato lo pase a numerico directamente
var montoPrincipal = parseFloat(document.getElementById('montoPrincipal').value);
var tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
var tiempoInversion = parseFloat(document.getElementById('tiempoInversion').value);
var gananciasCompuesto = montoPrincipal * Math.pow((1 + tasaInteres/100), tiempoInversion)-montoPrincipal;


//El if es el condicional para evitar errores con los números. Si detecta valores no validos mostrará el texto en pantalla.
    if (isNaN(montoPrincipal) || isNaN(tasaInteres) || isNaN(tiempoInversion) || tasaInteres < 0 || tiempoInversion < 0) {
    document.getElementById('resultado').textContent = 'Ingrese valores válidos para calcular las ganancias con interés compuesto.';
    return;
    }

    var textoResultado = 'Las ganancias son: ' + gananciasCompuesto.toFixed(2) + '. Total: ' + (montoPrincipal + gananciasCompuesto).toFixed(2) + '.\n\n';

    textoResultado += 'Detalle año a año:\n';
    for (var año = 1; año <= tiempoInversion; año++) {
      var gananciaAnual = montoPrincipal * Math.pow((1 + tasaInteres / 100), año) - montoPrincipal;
    textoResultado += 'Año ' + año + ': ' + gananciaAnual.toFixed(2) + '\n';
    }

    document.getElementById('resultado').textContent = textoResultado;
}
