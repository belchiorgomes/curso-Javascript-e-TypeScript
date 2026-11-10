const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);

console.log('---------------');

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Mario', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32,},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map((valor) => valor.nome);
console.log(nomes);

// const idades = pessoas.map((valor) => {
//     delete valor.nome;
//     return valor;
// });

const idades = pessoas.map((obj) => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    obj.id = (indice + 1) * 100;
    return obj;
});
console.log(comIds);