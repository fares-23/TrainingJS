let ListeMots = ["Cachalot","Pétunia","Serviette"];
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