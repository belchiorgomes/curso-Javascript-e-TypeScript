//Dado o array de usuarios acima, crie um array de strings no formato "Ana tem 25 anos".
const usuarios = [
  { nome: 'Ana', idade: 25, ativo: true },
  { nome: 'Bruno', idade: 17, ativo: true },
  { nome: 'Carla', idade: 32, ativo: false }
];

const frase = usuarios.map(({nome, idade}) => 
    `${nome} tem ${idade} ${idade === 1 ? 'ano' : 'anos'}`
);

console.log(frase);