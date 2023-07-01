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

function choisirPhraseOuMots(){
    let choix;
    do{
        choix = prompt("choisir 'mots' ou 'phrase' en écrivant le choix");
    }while(choix != 'mots' && choix != 'phrase');
    return choix;
}


function lancerBoucleDeJeu(choix,listeMots,listePhrases){
    if(choix === 'mots'){
        for(let i in listeMots){
            if(prompt("copier le mot : " + listeMots[i]) == listeMots[i]){
                score++;
            }
        }
        nbElements=listeMots.length;
    }else{
        for(let i in listePhrases){
            if(prompt("copier la phrase : " + listePhrases[i]) == listePhrases[i]){
                score++;
            }
        }
        nbElements=listePhrases.length;
    }     
}

function lancerJeu(){
    lancerBoucleDeJeu(choisirPhraseOuMots(),listeMots,listePhrases);
    afficherResultat();
}




