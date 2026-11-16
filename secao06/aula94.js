// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };


// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);

function Produtos(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produtos.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produtoA = new Produtos('Caneta', 50);
// produtoA.desconto(100);
produtoA.aumento(100);
console.log(produtoA);

const produtoB = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(produtoB, Produtos.prototype)

produtoB.desconto(10);
console.log(produtoB);