// let controle = 0;
// while (controle <= 10){
//     console.log(`Numero do controle ${controle}`);
//     controle++;
// }

function random(min, max){
    const r = Math.random() * (max - min + 1) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50

let rand = random(min, max);
// console.log(rand);

let controle = 1;

console.log(rand);

while (rand !== 10){
    rand = random(min, max);
    controle++;
    console.log(rand);
}

console.log(`Total de repetições: ${controle}`);

// let controle = 0;
// while (controle <= rand){
//     console.log(`Numero de vezes ${controle}`);
//     controle++;
// }