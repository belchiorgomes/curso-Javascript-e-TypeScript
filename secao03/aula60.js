// Escreva uma função que recebe 2 números e retorne o maior desles

function maiorNumeroRetornado(num1, num2){
    // if(num1 > num2){
    //     return `O primeiro número ${num1} e maior do que o segundo número ${num2}`;
    // }else{
    //     return `O segundo número ${num2} e maior do que o primeiro número ${num1}`;
    // }

    return num1 > num2 ? `O primeiro número ${num1} e maior do que o segundo número ${num2}` : `O segundo número ${num2} e maior do que o primeiro número ${num1}`;
}

console.log(maiorNumeroRetornado(20, 5));

console.log('-----');

const numeroMaior = (num1 , num2) => num1 > num2 ? num1 : num2;
console.log(numeroMaior(3, 10));