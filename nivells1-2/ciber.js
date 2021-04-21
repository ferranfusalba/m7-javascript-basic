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
    function exercici8() {
        function calculadora(operador, valor1, valor2) {
            if (operador == 'suma') {
                document.getElementById("resultat").innerHTML = valor1 + valor2;
            } else if (operador == 'resta') {
                document.getElementById("resultat").innerHTML = valor1 - valor2;
            } else if (operador == 'multiplicació') {
                document.getElementById("resultat").innerHTML = valor1 * valor2;
            }
        }

        var resultat = calculadora('resta', 40, 20);
    }

    //Nivell 2
    function calcN2() {
        function calculadora(operador, valor1, valor2) {
            if (operador == 'suma') {
                var suma = valor1 + valor2;
                document.getElementById("resultat1").innerHTML = suma;
                console.log(suma);
            } else if (operador == 'resta') {
                var resta = valor1 - valor2;
                document.getElementById("resultat2").innerHTML = resta;
                console.log(resta);
            } else if (operador == 'multiplicació') {
                var multiplicació = valor1 * valor2;
                document.getElementById("resultat3").innerHTML = multiplicació;
                console.log(multiplicació);
            } else if (operador == 'divisió') {
                var divisió = valor1 / valor2;
                document.getElementById("resultat4").innerHTML = divisió;
                console.log(divisió);
            }
        }

        var resultat = calculadora('suma', 40, 20);
        var resultat = calculadora('resta', 40, 20);
        var resultat = calculadora('multiplicació', 40, 20);
        var resultat = calculadora('divisió', 40, 20);
    }