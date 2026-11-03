//Crie maiorNumero(...numeros) que devolve o maior valor recebido.
function maiorNumero(...numeros){
    return Math.max(...numeros);
}

const numero = [2, 6, 4, 8, 1, 9, -3]
console.log(maiorNumero(...numero));