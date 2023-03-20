//EXEMPLE 1
//PROGRAMME PRINCIPAL
var unNombre = 2;
var sonDouble = doubler(unNombre);
console.log("Le double de %i est %i", unNombre, sonDouble);

function doubler(unParametre) {
    return unParametre*2;
}

//EXEMPLE2
//PROGRAMME PRINCIPAL
var uneValeur = 2; //type défini dynamiquement (number)
uneValeur = "3"; //changement de type (string)
console.log("uneValeur==3 => " + (uneValeur==3));
console.log("uneValeur===3 => " + (uneValeur===3));

//EXEMPLE 3
//PROGRAMME PRINCIPAL
var uneVariableGlobale="bonjour";
//La ligne suivante provoque une RerenceError
//console.log("uneVariableNonDeclaree vaut '%s' dans le programme principale", uneVariableNonDeclaree);
traitement();
console.log("uneVariableLocaleSansVar vaut " + uneVariableLocaleSansVar + " au niveau du programme principal");

//Fonction utilisée dans le programme principal
function traitement() {
    var uneVariableLocale= "coucou";
    console.log("uneVariableGlocale vaut " + uneVariableGlobale);
    console.log("uneVariableLocale vaut " + uneVariableLocale);
    uneVariableLocaleSansVar = "au revoir";
    console.log("uneVariableLocaleSansVar vaut " + uneVariableLocaleSansVar);
}

//EXEMPLE 4
//PROGRAMME PRINCIPAL
var uneVariableNonDefinie;
console.log(uneVariableNonDefinie);
console.log(uneVariableNonDefinie==undefined);