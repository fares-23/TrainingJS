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

function lancerJeu(){
    initAddEventListenerPopup()
    let liste = listeMots
    let boutonValider = document.querySelector(".zoneSaisie button")
    let inputEcriture = document.querySelector(".zoneSaisie input")
    let i = 0;
    afficherResultat()
    

    boutonValider.addEventListener("click",()=>{
        i++;
        if(liste[i]===undefined){
            afficherProposition("le jeu est fini !")
            boutonValider.disabled = true
        }else{
            verification(inputEcriture.value,liste[i-1])
            afficherProposition(liste[i])
        }
        afficherResultat()
        inputEcriture.value = ''
    })

    let listeChoix = document.querySelectorAll(".optionSource input")
    for(let j=0;j<listeChoix.length;j++){
        listeChoix[j].addEventListener("change",(event)=>{
            if(event.target.value === '1'){
                liste = listeMots
            }else if(event.target.value === '2'){
                liste = listePhrases
            }
            afficherProposition(liste[i])
        })
    }
}


function afficherProposition(motAfficher){
    let zonePropositionMot = document.querySelector(".zoneProposition")
    zonePropositionMot.innerText = motAfficher
}

function verification(proposition,reference){
    if(proposition === reference){
        score++;
    }
}

function choixListe(){


}



