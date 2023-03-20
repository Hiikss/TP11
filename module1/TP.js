//Exercice 1
var nombres = [];
var compteurEssai = 0;
var compteurIndex = 100;
while(compteurIndex>0) {
    compteurEssai++;
    var nb = parseInt(Math.random()*100)
    if(nombres[nb] === undefined) {
        console.log("test")
        nombres[nb] = nb;
        compteurIndex--;
    }   
}
console.log(compteurEssai);

//Exercice 2
var phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens"
var tab = Array.from(phrase.replace(/ /g, ''));
tab.sort();
console.log(tab);

//Exercice 3
var phrase = "une phrase sans majuscule";
var mots = phrase.split(/ /);
var phraseFinale = "";
for(var i=0; i<mots.length; i++) {
    if(i>0) {
        phraseFinale += " ";
    }
    phraseFinale += mots[i].substring(0,1).toUpperCase() + mots[i].substring(1);
}
console.log(phraseFinale);