let score = 0;

for(let i in listeMots){
    if(prompt("copier le mot " + listeMots[i]) == listeMots[i]){
        score++;
    }
}
console.log(score);

function afficherResultat(score,listeMots){
    console.log('votre score est de ' + score + ' sur ' + listeMots.length);
}

function choisirPhraseOuMots(){
    let choix;
    do{
        choix = prompt("choisir 'mots' ou 'phrase' en écrivant le choix");
    }while(choix != 'mots' || choix != 'phrase');
}

choisirPhraseOuMots();
