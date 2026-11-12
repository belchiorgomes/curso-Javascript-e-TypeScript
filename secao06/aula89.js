const pessoas = {
    nome: 'Breno',
    sobrenome: 'Belchior'
};

console.log(pessoas.nome);
console.log(pessoas['sobrenome']);

const chave = 'nome';
console.log(pessoas[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Maria';
pessoa1.sobrenome = 'Belchior';
// console.log(pessoa1.nome);
console.log(pessoa1);
delete pessoa1.sobrenome;
console.log(pessoa1);

const pessoa2 = new Object();
pessoa2.nome = 'Sebastião';
pessoa2.falaNome = function(){
    console.log(`${this.nome} está falando Oi!`);
};

pessoa2.falaNome();