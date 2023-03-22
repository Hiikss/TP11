//Méthode déclenchant un traitement asynchrone
function enregistrer(data) {
    return new Promise(function (resolve, reject) {
        console.log("J'enregistre les informations '%s", data)
        setTimeout(function () {
            if (Date.now().valueOf() % 2 == 0) {
                reject("rejeté") //notifié l'appelant du résultat final
            }
            else {
                resolve("résolu") //notifié l'appelant du résultat final
            }
        }, 1000)
    })
}

//Méthode appelée lorsque le traitement se termine aevc succès
function afficherResultat(message) {
    console.log("Succès : " + message)
}

enregistrer("mes informations à enregistrer")
    .then(afficherResultat)
    .catch((raison) => { console.log("Echec : " + raison) })