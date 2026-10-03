// Object
// const pessoa01 = {
//     nome: 'Breno',
//     sobrenome: 'Belchior',
//     idade: 32
// };

// console.log(pessoa01);
// console.log(pessoa01.nome);
// console.log(`A primeira pessoa é ${pessoa01.nome} ${pessoa01.sobrenome} com idade de ${pessoa01.idade} anos`);

// ------------------------------------------------

// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa01 = criaPessoa('Breno', 'Belchior', 32);
// console.log(pessoa01)

// -----------------------------------------------

// const pessoa01 = {
//     nome: 'Breno',
//     sobrenome: 'Belchior',
//     fala () {
//         console.log(`${this.nome} ${this.sobrenome} esta falando OI!!!....`);
//     }
// };

// pessoa01.fala();

// ----------------------------------------------------

const criaPessoa = (nome, idade, anoAtual = 2026) => {
    return {
        nome,
        idade,
        anoAtual,
        fala(){
            console.log(`${this.nome} ${this.idade} fala OI!!!.....`);
        },

        anoNascimento(){
            console.log(`Meu nome é ${this.nome} e nasci no ano ${this.anoAtual - this.idade}`);
        }
    }
};

const pessoa02 = criaPessoa('Luiza', 18).fala();
const pessoa03 = criaPessoa('Breno', 32).anoNascimento();