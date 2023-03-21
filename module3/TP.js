var SavoirInutile = function(savoir, auteur, date) {
    this.savoir = savoir || ""
    this.auteur = auteur || ""
    this.date = date || new Date()

    this.informations = function() {
        let jour = this.date.getDate().toString().padStart(2, "0");
        let mois = (this.date.getMonth() + 1).toString().padStart(2, "0");
        let annee = this.date.getFullYear();
        return `Par ${auteur}, le ${jour}/${mois}/${annee}`
    }
}

document.getElementById("date").valueAsDate = new Date()
document.getElementById("btn").addEventListener("click", ajouter)
document.getElementById("savoir").focus()

function ajouter() {
    let savoir = document.getElementById("savoir").value
    let auteur = document.getElementById("auteur").value
    let date = document.getElementById("date").valueAsDate

    if (validerSaisie(savoir, auteur, date)) {
        let savoirInutile = new SavoirInutile(savoir, auteur, date)
        
        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        let pInfos = document.createElement("p");

        pSavoir.innerText = savoirInutile.savoir;
        pSavoir.className = "savoir";
        pInfos.innerText = savoirInutile.informations();
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        let olSavoir = document.getElementById("listeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        document.getElementById("savoir").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();
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
    let savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}