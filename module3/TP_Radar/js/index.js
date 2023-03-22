const delai = 5 //délai en secondes

var dateDebut
var dateIntermediaire
var nbCaracteresInter = 0
var typeZone = document.getElementById("typeZone")
var texteVitGenerale = document.getElementById("vitGenerale")
var texteVitIntermediaire = document.getElementById("vitIntermediaire")
typeZone.addEventListener("focus", demarrer)

function demarrer() {
    dateDebut = Date.now()
    dateIntermediaire = dateDebut
    calcul(delai)
}

function calcul(delai) {
    setTimeout(update, delai * 1000)
}

function update() {
    let now = Date.now()
    let nbCaracteresTotaux = typeZone.value.replace(/ /g, "").length
    let dureeTotale = now - dateDebut
    let dureeIntermediaire = now - dateIntermediaire
    let nbCaracteresDernierInter = nbCaracteresTotaux - nbCaracteresInter
    let vitGenerale = parseInt(nbCaracteresTotaux/(dureeTotale/1000)*60)
    let vitIntermediaire = parseInt(nbCaracteresDernierInter/(dureeIntermediaire/1000)*60)

    afficher(texteVitGenerale, vitGenerale)
    afficher(texteVitIntermediaire, vitIntermediaire)

    nbCaracteresInter = nbCaracteresTotaux
    dateIntermediaire = now

    if (document.activeElement === typeZone) {
        calcul(delai)
    }
}

function afficher(textVitesse, vitesse) {
    textVitesse.innerText = vitesse
}