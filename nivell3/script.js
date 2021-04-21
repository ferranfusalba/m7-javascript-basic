const decimal = document.getElementById("decimal"); //botón decimal (en la calculadora representado por punto "." y no coma ",")
const C = document.getElementById("C"); //botón C para limpiar el arrayOperaciones
const valorPantallaElement = document.getElementById("pantalla"); //valor de la pantalla
const botonesDigitos = document.getElementsByClassName("botones-digitos"); //botones de los dígitos (0-9)
const botonesOperador = document.getElementsByClassName("botones-operador"); //botones de los operadores y el igual

var valorPantalla = '0'; //valor mostrado en pantalla estipulado a 0 en el inicio.
var valorPendiente; //primer valor (numero/s) seleccionado, antes del operador.
var arrayOperaciones = []; //en este array se guardan los numeros y el operador introducidos. La función eval() calculará los valores del array.

actValorPantalla = (e) => {
    var valorPantalla2 = e.target.innerText; //toma el valor introducido (presionado por el botón)
    console.log(valorPantalla2); //comprobación por consola del correcto funcionamiento de la anterior línea
    console.log(e.target.innerText); //comprobación por consola del correcto funcionamiento de la anterior línea
    if (valorPantalla === "0") { //si en pantalla se muestra 0 lo dejará vacío
        valorPantalla = "";
    }

    valorPantalla += valorPantalla2;
    valorPantallaElement.innerText = valorPantalla; //muestra el resultado final de la operación en la pantalla
}

operar = (e) => {
    var operador = e.target.innerText; //toma los datos del operador introducido
    console.log(operador); //muestra por consola el operador introducido
    console.log(e.target.innerText); //muestra por consola el operador introducido

    switch (operador) {
        case '+':
            valorPendiente = valorPantalla;
            valorPantalla = "";
            valorPantallaElement.innerText = valorPendiente + "+"; //muestra por pantalla el primer valor introducido y el operador. Cuando se presione el segundo valor solo mostrará este último.
            arrayOperaciones.push(valorPendiente); //en el array añade el primer valor introducido.
            arrayOperaciones.push('+'); //en en array añade el operador seleccionado después del primer valor introducido.
            break;
        case '-':
            valorPendiente = valorPantalla;
            valorPantalla = "";
            valorPantallaElement.innerText = valorPendiente + "-";
            arrayOperaciones.push(valorPendiente);
            arrayOperaciones.push('-');
            break;
        case '×':
            valorPendiente = valorPantalla;
            valorPantalla = "";
            valorPantallaElement.innerText = valorPendiente + "x";
            arrayOperaciones.push(valorPendiente);
            arrayOperaciones.push('*');
            break;
        case '÷':
            valorPendiente = valorPantalla;
            valorPantalla = "";
            valorPantallaElement.innerText = valorPendiente + "÷";
            arrayOperaciones.push(valorPendiente);
            arrayOperaciones.push('/');
            break;
        case '=':
            arrayOperaciones.push(valorPantalla);
            console.log(arrayOperaciones); //array completo con las operaciones: valorPendiente + operador + último valor introducido
            var calcular = eval(arrayOperaciones.join(' ')); //eval calcula el contenido de arrayOperaciones y el join junta un espacio en el string, permitiendo mostrar el resultado en la pantalla correctamente
            valorPantalla = calcular + '';
            //valorPantalla = calcular;
            valorPantallaElement.innerText = valorPantalla;
            arrayOperaciones = [];
            break;
        default:
            break;
    }

    console.log(valorPantalla); //resultado
    //console.log(valorPendiente); //primer numero
    //console.log(arrayOperaciones); //array donde está guardado el primer numero y el operador
}

//Con un for "hacemos funcionar" los botones para que cuando sean clicados y coincidan con el numero, realicen una función en concreto
for (let i = 0; i < botonesDigitos.length; i++) {
    botonesDigitos[i].addEventListener('click', actValorPantalla)
}

for (let i = 0; i < botonesOperador.length; i++) {
    botonesOperador[i].addEventListener('click', operar);
}

//limpiar pantalla (botón C/AC)
C.onclick = () => {
    valorPantalla = '0';
    valorPendiente = undefined;
    arrayOperaciones = [];
    valorPantallaElement.innerHTML = valorPantalla;
    console.log(arrayOperaciones); //muestra el array limpio
}

//limitación decimal (no permite introducir dos decimales seguidos + controla si hay numero ya introducido en la pantalla)
decimal.onclick = () => {
    if (!valorPantalla.includes('.')) {
        valorPantalla += '.';
    }
    valorPantallaElement.innerText = valorPantalla;
}

//Hora real en el Status Bar
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();