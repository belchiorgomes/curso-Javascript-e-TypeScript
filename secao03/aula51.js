const dadosPessoal = {
    nome: 'Breno',
    sobrenome: 'Belchior',
    idade: 32,
    endereco: {
        rua: 'Av um',
        numero: 30
    }
};

const {nome} = dadosPessoal;
console.log(nome)

const {endereco: {rua, numero}} = dadosPessoal
console.log(rua, numero);

console.log(dadosPessoal);