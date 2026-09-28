const nome = 'Breno';
const sobrenome = 'Belchior';
const idade = 32;
const altura = 1.72;
const peso = 65;
let anoAtual = 2026;

let imc = peso / (altura * altura);

let anoNascimento = anoAtual - idade; 

console.log(`Olá meu nome e ${nome} ${sobrenome} tenho ${idade} anos e meu IMC é ${imc}`);
console.log(`Nasci no ano ${anoNascimento}`);