//Dado ['a', 'b', 'c'], junte tudo em uma string 'abc' usando reduce().
const letras = ['a', 'b', 'c'];
const string = letras.reduce((acc, p) => acc + p);
console.log(string);

const palavra = letras.join('');
console.log(palavra);