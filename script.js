let score = 0;
let nbElements;


function afficherResultat(){
    console.log('votre score est de ' + this.score + ' sur ' + nbElements);
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
    switch(choix){
        case 'mots':
            for(let i in listeMots){
                if(prompt("copier le mot " + listeMots[i]) == listeMots[i]){
                    score++;
                }
            }
            nbElements=listeMots.length;
            break;
        case 'phrase':
            for(let i in listePhrases){
                if(prompt("copier le mot " + listePhrases[i]) == listePhrases[i]){
                    score++;
                }
            }
            nbElements=listePhrases.length;
            break;
    }  
    console.log('lancerboucle')     
}

function lancerJeu(){
    lancerBoucleDeJeu(choisirPhraseOuMots(),listeMots,listePhrases);
    afficherResultat();
}


