const numeros = [100, 200, 300, 400, 500, 600];
const [primeiroNumero, segundoNumero, ...resto] = numeros; //...resto ele pega o resto do Array

console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [letraA, letraB, ...restoLetras] = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letraA, letraB);
console.log(restoLetras);

const dadosPessoal = {
    nome: 'Breno',
    idade: 32,
    sexo: 'M'
};

const {idade, ...restoDados} = dadosPessoal;
console.log(idade);
console.log(restoDados);