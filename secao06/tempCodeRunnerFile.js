const pessoa2 = new Object();
pessoa2.nome = 'Sebastião';
const falaNome = () => {
    console.log(`${this.nome} está falando Oi!`);
}

pessoa2.falaNome();