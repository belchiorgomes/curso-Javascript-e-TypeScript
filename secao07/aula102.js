class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`Eu sou a ${this.nome}`);
    }
};

function Pessoa2(nome){
    this.nome = nome;
}

Pessoa2.prototype.falar = function(){
    console.log(`Eu sou a ${this.nome}`);
}

const p1 = new Pessoa('Rita', 'Silva');
console.log(p1.falar());

const p2 = new Pessoa('Aline');
console.log(p2.falar());