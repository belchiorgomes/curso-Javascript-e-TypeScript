function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        return `Eu me chamo ${this.nome} ${this.sobrenome}`;
    };
};

const p1 = new Pessoa('Maria', 'Aparecida');
console.log(p1.nomeCompleto());