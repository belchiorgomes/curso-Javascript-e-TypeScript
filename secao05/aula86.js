const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

console.log('-------------');

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Mario', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 74,},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce((acc, valor) => {
    console.log(acc, valor);

    return acc.idade > valor.idade ? acc : valor;
});

console.log(pessoaMaisVelha);

console.log('---------------');

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const resultados = numeros2
    .filter(pares => pares % 2 === 0)
    .map(dobro => dobro * 2)
    .reduce((todos, valor) => todos + valor);

console.log(resultados);
    