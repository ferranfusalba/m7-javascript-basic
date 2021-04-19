    //Exercici 1
    console.log("Hola mundo");

    //Exercici 2
    function exercici2() {
        alert("Nom i cognoms: Ferran Fusalba Roselló");
    }

    //Exercici 3
    let nom = "Ferran";
    let cognoms = "Fusalba Roselló";
    console.log(nom);
    console.log(cognoms);

    //Exercici 4
    let num1 = 2;
    let num2 = 8;
    let resultat4 = num1 + num2;
    let resultatConsola = "La suma entre " + num1 + " i " + num2 + " és " + resultat4;
    console.log(resultatConsola);

    //Exercici 5
    function exercici5() {
        var nota_examen = parseInt(prompt("Introdueix la nota de l'examen"));

        var resultat5 = aprovatSuspès(nota_examen);
        alert("L'examen, amb una nota de " + nota_examen + ", ha estat " + resultat5 + ".");

        function aprovatSuspès(nota_examen) {
            if (nota_examen >= 5) {
                return "aprovat";
            } else {
                return "suspès";
            }
        }
    }

    //Exercici 6
    var str = 'Tinc un cotxe de color blau';
    console.log(str);
    var newStr1 = str.replace('blau', 'verd');
    console.log(newStr1);
    var newStr2 = str.replace(/o/g, 'u');
    console.log(newStr2);

    //Exercici 7
    var objectes = ['taula', 'cadira', 'ordinador', 'llibreta'];

    function objectesLlistats() {
        for (var i = 0; i < objectes.length; i++) {
            var objecte = objectes[i];
            document.getElementById("llistaObjectes").innerHTML += "L'objecte " + objecte + " és a la posició " + [i] + " de la llista.<br>";
        }
    }

    //Exercici 8
    function calculadora(valor1, valor2, operador) {
        var valor1 = parseInt(document.getElementById("val1").value);
        var valor2 = parseInt(document.getElementById("val2").value);
        var operador = document.getElementById("operador").value;

        var resultat8;
        switch (operador) {
            case "+":
                resultat8 = valor1 + valor2;
                break;
            case "-":
                resultat8 = valor1 - valor2;
                break;
            case "*":
                resultat8 = valor1 * valor2;
                break;
            default:
                resultat8 = "NO VÀLID";
                break;
        }
        document.getElementById("resultat").innerHTML = valor1 + " " + operador + " " + valor2 + " = " + resultat8;
    }

    //Nivell 2
    function calcN2() {
        var a = parseInt(document.querySelector("#valor1N2").value);
        var b = parseInt(document.querySelector("#valor2N2").value);
        var op = document.querySelector("#operadorN2").value;
        var calcularN2;

        if (op == "sum") {
            calcularN2 = a + b;
        } else if (op == "res") {
            calcularN2 = a - b;
        } else if (op == "mul") {
            calcularN2 = a * b;
        } else if (op == "div") {
            calcularN2 = a / b;
        }

        document.querySelector("#resultatN2").innerHTML = calcularN2;
    }