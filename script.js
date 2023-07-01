let score = 0;
let nbElements =0 ;


function afficherResultat(){
    let spanScore = document.querySelector(".zoneScore span")
    let resultat = 
    `
        ${score}/${nbElements}
    `
    spanScore.innerHTML = resultat
}





