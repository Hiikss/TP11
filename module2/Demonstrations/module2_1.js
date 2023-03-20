function chargerContenu() {
    console.log("coucou, la fonctione chargerContenu() est exécutée")
    document.title = "Mon titre sur l'onglet"
    //document.getElementsByTagName("h1")[0].innerText = "Ceci est mon vrai titre"
    document.getElementById("titre").innerText = "Ceci est vraiment le bon titre"

    var elementInput = document.createElement("input");
    /*var attValue = document.createAttribute("value");
    attValue.value = "une zone de saisie"
    elementInput.setAttributeNode(attValue)*/
    elementInput.setAttribute("value", "une zone de saisie")
    document.getElementById("titre").insertAdjacentElement("afterend", elementInput)
}