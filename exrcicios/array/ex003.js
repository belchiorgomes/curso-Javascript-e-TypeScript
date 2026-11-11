// Dado ['sol', 'lua', 'mar'], crie um array com a primeira letra de cada palavra em maiúscula (ex.: 'Sol'). Dica: p[0].toUpperCase() + p.slice(1).
const palavras = ['sol', 'lua', '', 'mar'];
const primeiraLetraMaiuscula = palavras.map(p => p.charAt(0).toUpperCase() + p.slice(1));
console.log(palavras);
console.log(primeiraLetraMaiuscula);