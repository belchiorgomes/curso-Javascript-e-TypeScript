//Dado [10, 20, 30, 40], calcule a soma de todos os números.
const numeros = [10, 20, 30, 40];
const somaDosNumeros = numeros.reduce((acc, n) => acc + n, 0);

console.log(somaDosNumeros);