function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Verde');
const produto = new Produto('Calça', 56, 'Azul');
const caneca = new Caneca('Nome', 10, 'Pocelana');

// camiseta.aumento(10);
console.log(produto);
console.log(camiseta);
console.log(caneca);