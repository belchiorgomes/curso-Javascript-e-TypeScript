// Filter, map, reduce

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

// function callbacFilter(valor){ // recebe (valor, indice, array)
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbacFilter);
// console.log(numerosFiltrados);

console.log('-------');

// Retorne as pessoas que tem o nome com 5 letra ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Mario', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32,},
    {nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

console.log('------');

const pessoasMais50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMais50Anos);

const pessoasTerminaLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminaLetraA);