function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `Meu nome é ${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criaPessoa('Sebastião', 'Machado');
console.log(pessoa1.nomeCompleto);