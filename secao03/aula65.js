// function mostraHora(){
//     const date = new Date();
//     return date.toLocaleTimeString('pt-BR', {
//         hour12: false
//     });
// }

// // console.log(mostraHora());

// setInterval(function () {
//     console.log(mostraHora());
// }, 1000);

console.log('-----------------')
// setInterval(() => {
//     console.log('Tempo')
// }, 1000);

console.log('-----------------')
// let contador = 0;
// const id = setInterval(() => {
//     contador++;
//     console.log(`Contador: ${contador}`);

//     if(contador === 5){
//         clearInterval(id);
//         console.log("Parou");
//     }
// }, 1000);

console.log('-------------------------');

function saudar(nome, saudacao){
    return `${saudacao}, ${nome}!`;
}

let contador = 0
const id = setInterval(() => {
    contador++
    contador === 5 ? clearInterval(id) : console.log(saudar("Maria", "Boa Tarde"));
}, 1000);