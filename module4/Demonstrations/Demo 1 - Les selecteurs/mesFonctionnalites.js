function toutLeMondeSeCache() {
    $("div").hide();
}

function toutLeMondeReapparait() {
    jQuery("div").show();
}

function leCapitaineSeCache() {
    $("#capitaine").hide();
}

function lesMarinsSeCachent() {
    //$(".marin").hide();
    //$(".equipage").hide();
    //$(".marin:last").hide();
    $(".marin:eq(2)").hide();
}

function lesBateauxSeCachent() {
    $("div > div[class='bateau']").hide();
}