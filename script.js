// race 
var race = document.getElementById('race')




race.addEventListener("change", function (e){
    var raceImg = document.getElementById("raceImg")
    raceImg.src = "images/race/" + e.target.value + ".png";
})

// RaceElfe
var raceElfeLabel = document.getElementsByClassName('raceElfeLabel')[0]
var raceElfeSelect = document.getElementsByClassName('raceElfeSelect')[0]

// RaceHumain
var raceHumainLabel = document.getElementsByClassName('raceHumainLabel')[0]
var raceHumainSelect = document.getElementsByClassName('raceHumainSelect')[0]

// RaceNain 
var raceNainLabel = document.getElementsByClassName('raceNainLabel')[0]
var raceNainSelect = document.getElementsByClassName('raceNainSelect')[0]

// RaceSirene
var raceSireneLabel = document.getElementsByClassName('raceSireneLabel')[0]
var raceSireneSelect = document.getElementsByClassName('raceSireneSelect')[0]

// option couleur de peau elfes

var couleurDePeauElfeViolet = document.getElementsByClassName('couleurDePeauElfeViolet')[0]
var couleurDePeauElfeVert = document.getElementsByClassName('couleurDePeauElfeVert')[0]
var couleurDePeauElfeGris = document.getElementsByClassName('couleurDePeauElfeGris')[0]

// Changement d'input pour la sous categorie des races + couleur de peau elfe


race.addEventListener("change", function(e){




    if(e.target.value == "Elfe" ){
        raceElfeLabel.style.visibility = "visible"
        raceElfeSelect.style.visibility = "visible"

        raceHumainLabel.style.visibility = "hidden"
        raceHumainSelect.style.visibility = "hidden"

        raceNainLabel.style.visibility = "hidden"
        raceNainSelect.style.visibility = "hidden"

        raceSireneLabel.style.visibility = "hidden"
        raceSireneSelect.style.visibility = "hidden"

        couleurDePeauElfeViolet.style.display = "initial"
        couleurDePeauElfeVert.style.display = "initial"
        couleurDePeauElfeGris.style.display = "initial"
    }
    else if(e.target.value == "Humain" ){
        raceHumainLabel.style.visibility = "visible"
        raceHumainSelect.style.visibility = "visible"
        
        raceElfeLabel.style.visibility = "hidden"
        raceElfeSelect.style.visibility = "hidden"

        raceNainLabel.style.visibility = "hidden"
        raceNainSelect.style.visibility = "hidden"

        raceSireneLabel.style.visibility = "hidden"
        raceSireneSelect.style.visibility = "hidden"
        
        couleurDePeauElfeViolet.style.display = "none"
        couleurDePeauElfeVert.style.display = "none"
        couleurDePeauElfeGris.style.display = "none"

    }
    else if(e.target.value == "Nain" ){
        raceNainLabel.style.visibility = "visible"
        raceNainSelect.style.visibility = "visible"

        raceElfeLabel.style.visibility = "hidden"
        raceElfeSelect.style.visibility = "hidden"
        
        raceHumainLabel.style.visibility = "hidden"
        raceHumainSelect.style.visibility = "hidden"

        raceSireneLabel.style.visibility = "hidden"
        raceSireneSelect.style.visibility = "hidden"

        couleurDePeauElfeViolet.style.display = "none"
        couleurDePeauElfeVert.style.display = "none"
        couleurDePeauElfeGris.style.display = "none"

    }
    else if(e.target.value == "Sirene"){
        raceSireneLabel.style.visibility = "visible"
        raceSireneSelect.style.visibility = "visible"

        raceElfeLabel.style.visibility = "hidden"
        raceElfeSelect.style.visibility = "hidden"
        
        raceHumainLabel.style.visibility = "hidden"
        raceHumainSelect.style.visibility = "hidden"

        raceNainLabel.style.visibility = "hidden"
        raceNainSelect.style.visibility = "hidden"

        couleurDePeauElfeViolet.style.display = "none"
        couleurDePeauElfeVert.style.display = "none"
        couleurDePeauElfeGris.style.display = "none"

    }
    else{
        raceElfeLabel.style.visibility = "hidden"
        raceElfeSelect.style.visibility = "hidden"
        
        raceHumainLabel.style.visibility = "hidden"
        raceHumainSelect.style.visibility = "hidden"

        raceNainLabel.style.visibility = "hidden"
        raceNainSelect.style.visibility = "hidden"

        raceSireneLabel.style.visibility = "hidden"
        raceSireneSelect.style.visibility = "hidden"

        couleurDePeauElfeViolet.style.display = "none"
        couleurDePeauElfeVert.style.display = "none"
        couleurDePeauElfeGris.style.display = "none"

        
    }
})






// Race 
var race = document.getElementById('race')

race.addEventListener("change", function (e){
    var raceImg = document.getElementById("raceImg")

    if (e.target.value == "Humain") {
        raceImg.src = "images/race/" + e.target.value + "H.png";

    }
    else if(e.target.value == "Elfe"){
        raceImg.src = "images/race/" + e.target.value + "H.png";

    }
    else if(e.target.value == "Ecorche"){
        raceImg.src = "images/race/" + e.target.value + "H.png";

    }
    else if(e.target.value == "Nain"){
        raceImg.src = "images/race/" + e.target.value + "H.JPG";

    }
})
var peauHumain = document.getElementById('couleurDePeau')
console.log(peauHumain);

peauHumain.addEventListener("change", function (e){
    var peauHumainImg = document.getElementById("peauHumainImg")

    if (e.target.value == "noir") {
        peauHumainImg.src = "images/couleurPeau/" + e.target.value + "Humain.png";

    }
    else{
        peauHumainImg.src = "images/couleurPeau/" + e.target.value + "Humain.png";

    }
  
})







// jambes
var jambes = document.getElementById('jambes')

jambes.addEventListener("change", function (e){
    var jambesImg = document.getElementById("jambesImg")
    jambesImg.src = "images/jambes/" + e.target.value + ".png";
})
// pieds
var pieds = document.getElementById('pieds')

pieds.addEventListener("change", function (e){
    var piedsImg = document.getElementById("piedsImg")
    piedsImg.src = "images/pieds/" + e.target.value + ".png";
})





