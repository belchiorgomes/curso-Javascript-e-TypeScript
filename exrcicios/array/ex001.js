// Concatenando Arrays em JavaScript
// concat()
// Cria um novo array sem alterar os originais.
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = num1.concat(num2);
console.log(num3);

console.log(num1.concat(num2, 'Breno', [7, 8, 9]));
console.log(num1);
console.log(num2);

console.log('---------');

// Spread operator (...)
// É a forma mais usada hoje em dia. Também cria um novo array.
const a = [1, 2, 3];
const b = [4, 5];
const c = [...a, ...b];
const d = [...a, 'Julia', ...b];
console.log(c);
console.log(d);

console.log('-------');

// Removendo duplicatas após juntar:

const lista1 = [1, 2, 3];
const lista2 = [3, 4, 5];
const lista3 = [...new Set([...lista1, ...lista2])];
console.log(lista3);

console.log('--------');

// flat() para arrays de arrays
// Útil quando você já tem um array contendo outros arrays.
const listas = [[1, 2, 3], ['a', 'b'], [3, 4, 5]];
console.log(listas.flat());
console.log([...new Set(listas.flat())]);