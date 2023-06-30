const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']
let score = 0;

for(let i in ListeMots){
    if(prompt("copier le mot " + ListeMots[i]) == ListeMots[i]){
        score++;
    }
}
console.log(score);

function retournscore(score,ListeMots){
    let message = 'votre score est de ' + score + ' sur ' + ListeMots.length;
    return message;
}

let newMessage = retournscore(score,ListeMots);
console.log(newMessage);