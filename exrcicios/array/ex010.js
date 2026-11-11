//Dado o array carrinho abaixo, calcule o total apenas dos itens com preço maior que 10 (dica: combine filter() e reduce()).
const carrinho = [
  { produto: 'Caneta', preco: 3, qtd: 4 },
  { produto: 'Caderno', preco: 15, qtd: 2 },
  { produto: 'Mochila', preco: 90, qtd: 1 }
];

const precoTotalAcimaDeDez = carrinho
    .filter(valor => valor.preco > 10)
    .reduce((acc, item) => acc + item.preco * item.qtd, 0);
    
console.log(precoTotalAcimaDeDez);