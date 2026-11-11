//Dado [1, 2, 3, 4, 5, 6], use filter() e map() juntos para obter o dobro apenas dos números pares.
const numeros = [1, 2, 3, 4, 5, 6];
const paresEmDobro = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 2);

console.log(paresEmDobro);