let score = 0;

function afficherResultat(score,listeMots){
    console.log('votre score est de ' + score + ' sur ' + listeMots.length);
}

function choisirPhraseOuMots(){
    let choix;
    do{
        choix = prompt("choisir 'mots' ou 'phrase' en écrivant le choix");
        console.log(choix);
    }while(choix != 'mots' && choix != 'phrase');
    return choix;
}


function lancerBoucleDeJeu(choix,listeMots,listePhrases){
    switch (choix){
        case 'mots':
            for(let i in listeMots){
                if(prompt("copier le mot " + listeMots[i]) == listeMots[i]){
                    score++;
                }
            }
            break;
        case 'phrase':
            for(let i in listePhrases){
                if(prompt("copier le mot " + listePhrases[i]) == listePhrases[i]){
                    score++;
                }
            }
            break;
    }       
}
