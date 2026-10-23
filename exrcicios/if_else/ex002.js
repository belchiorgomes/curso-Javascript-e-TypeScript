// Par ou ímpar: dado um número, mostre se ele é par ou ímpar.
function eParOuImpar(numero){
    if(!Number.isInteger(numero)){
        console.log('Valor invalido');
    }else if(numero % 2 === 0){
        console.log(`O número ${numero} é Par!`);
    }else{
        console.log(`O número ${numero} é Impar!`);
    }
}

const numeros = [2, 3, 7, "ABC", -3, 0];

for(let numero of numeros){
    eParOuImpar(numero);
}