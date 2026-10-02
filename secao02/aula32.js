// Object
// const pessoa01 = {
//     nome: 'Breno',
//     sobrenome: 'Belchior',
//     idade: 32
// };

// console.log(pessoa01);
// console.log(pessoa01.nome);
// console.log(`A primeira pessoa é ${pessoa01.nome} ${pessoa01.sobrenome} com idade de ${pessoa01.idade} anos`);

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa01 = criaPessoa('Breno', 'Belchior', 32);
console.log(pessoa01)