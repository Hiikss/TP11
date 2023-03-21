    document.getElementById("date").valueAsDate = new Date()
    document.getElementById("btn").addEventListener("click", ajouter)
    document.getElementById("savoir").focus()

function ajouter() {
    let savoir = document.getElementById("savoir").value
    let auteur = document.getElementById("auteur").value
    let date = document.getElementById("date").valueAsDate

    if (validerSaisie(savoir, auteur, date)) {
        let jour = date.getDate().toString().padStart(2, "0");
        let mois = (date.getMonth() + 1).toString().padStart(2, "0");
        let annee = date.getFullYear();

        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        let pInfos = document.createElement("p");

        pSavoir.innerText = savoir;
        pInfos.innerText = `Par ${auteur}, le ${jour}/${mois}/${annee}`;
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", del);

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

function del(event) {
    console.log("test")
    let savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}