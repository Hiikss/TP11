function start() {
    document.getElementById("date").valueAsDate = new Date()
    document.getElementById("savoir").focus()
}

function ajouter() {
    let savoir = document.getElementById("savoir").value
    let auteur = document.getElementById("auteur").value
    let date = document.getElementById("date").valueAsDate

    if (validerSaisie(savoir, auteur, date)) {

    }
    else {
        alert("Tous les champs sont obligatoires")
    }
}

function validerSaisie(savoir, auteur, date) {
    return savoir != "" && auteur != "" && date != ""
}