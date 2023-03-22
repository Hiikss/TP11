var SavoirInutile = function (savoir, auteur, date) {
    this.savoir = savoir || ""
    this.auteur = auteur || ""
    this.date = date || new Date()

    this.informations = function () {
        let jour = this.date.getDate().toString().padStart(2, "0");
        let mois = (this.date.getMonth() + 1).toString().padStart(2, "0");
        let annee = this.date.getFullYear();
        return `Par ${auteur}, le ${jour}/${mois}/${annee}`
    }
}

var savoirs = [];

initForm()
document.getElementById("btnAjouter").addEventListener("click", ajouter)
document.getElementById("bntTriAuteurCroiss").addEventListener("click", trierAuteurCroissant)
document.getElementById("bntTriAuteurDec").addEventListener("click", trierAuteurDecroissant)
document.getElementById("bntTriDateCroiss").addEventListener("click", trierDateCroissant)
document.getElementById("bntTriDateDec").addEventListener("click", trierDateDecroissant)

function ajouter() {
    let savoir = document.getElementById("savoir").value
    let auteur = document.getElementById("auteur").value
    let date = document.getElementById("date").valueAsDate

    if (validerSaisie(savoir, auteur, date)) {
        let savoirInutile = new SavoirInutile(savoir, auteur, date)

        ajouterSavoir(savoirInutile)
        afficherSavoirs()
    }
    else {
        alert("Tous les champs sont obligatoires")
    }
    document.getElementById("savoir").focus()
}

function validerSaisie(savoir, auteur, date) {
    return savoir != "" && auteur != "" && date != ""
}

function supprimer(event) {
    let index = event.currentTarget.id
    if (confirm(`Voulez-vous supprimer le savoir "${savoirs[index].savoir}"?`)) {
        supprimerSavoir(index)
        afficherSavoirs()
    }
}

function ajouterSavoir(savoir) {
    savoirs.push(savoir)
}

function supprimerSavoir(index) {
    savoirs.splice(index, 1)
}

function afficherSavoirs() {
    effacerSavoirs()
    let olSavoir = document.getElementById("listeSavoir");

    savoirs.forEach((value, index, array) => {
        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        let pInfos = document.createElement("p");

        liSavoir.id = index;
        pSavoir.innerText = value.savoir;
        pSavoir.className = "savoir";
        pInfos.innerText = value.informations();
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);
    })
    initForm()
}

function effacerSavoirs() {
    let olSavoir = document.getElementById("listeSavoir");
    olSavoir.innerHTML = ""
}

function initForm() {
    document.getElementById("savoir").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("date").valueAsDate = new Date();
    document.getElementById("savoir").focus()
}

function trierAuteurCroissant() {
    savoirs.sort((a, b) => a.auteur.localeCompare(b.auteur))
    afficherSavoirs()
}

function trierAuteurDecroissant() {
    savoirs.sort((a, b) => b.auteur.localeCompare(a.auteur))
    afficherSavoirs()
}

function trierDateCroissant() {
    savoirs.sort((a, b) => a.date - b.date)
    afficherSavoirs()
}

function trierDateDecroissant() {
    savoirs.sort((a, b) => b.date - a.date)
    afficherSavoirs()
}