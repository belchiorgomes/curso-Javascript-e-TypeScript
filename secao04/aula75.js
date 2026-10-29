//Factory function  (Função fábrica)
//Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome, 
        sobrenome: sobrenome,
        fala: function(assundo){
            return `${nome} ${this.sobrenome} está ${assundo}.`;
        },
        peso: peso,
        altura, altura,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Breno', 'Belchior', 72, 1.72);
console.log(p1.fala('Falando sobre JS'));
console.log(p1.imc);