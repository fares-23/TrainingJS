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

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
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

    let form = document.querySelector("form")
    

    form.addEventListener("submit",(event)=>{
        let votreNom = document.querySelector(".popup #nom")
        let votreMail = document.querySelector(".popup #email")
        event.preventDefault()
        if(validerNom(votreNom.value)){
            console.log("ok")
        }else{
            console.log("pas ok")
        }
        //afficherEmail(votreNom.value,votreMail.value,score)
        votreMail.value=''
        votreNom.value=''
    })
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

function validerNom(nom){
    let regle = new RegExp("^[a-z]+$")
    console.log(regle.test(nom))
    if(nom.length > 1){
        regle.test(nom)
    }
    return false
}




