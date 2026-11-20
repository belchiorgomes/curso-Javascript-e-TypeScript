// Herança em class

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`)
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
// d1.ligar();
// d1.desligar()
// d1.desligar()
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}
const s1 = new Smartphone('Iphone', 'Preto');
s1.ligar();
console.log(s1);