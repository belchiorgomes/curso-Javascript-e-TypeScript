//Dado [10, 20, 30], transforme em ['R$ 10', 'R$ 20', 'R$ 30'].
const valores = [10, 20, 30];
const valoresEmReais = valores.map(valor => `R$ ${valor}`);
console.log(valoresEmReais);

const formatados = valores.map(valor =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);
console.log(formatados);
