//Dado [3, 7, 2, 9, 4], encontre o menor número usando reduce().
const numeros = [3, 7, 2, 9, 4];
const menorNumero = numeros.reduce((acc, n) => acc < n ? acc : n);

console.log(menorNumero);

const numeroMenor = Math.min(...numeros);
console.log(numeroMenor);