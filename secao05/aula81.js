const nomes = ['Maria', 'Angelica', 'Joana'];
// const nomes = new Array('Maria', 'Angelica', 'Joana');
console.log(nomes)
console.log(`O array nomes tem ${nomes.length} itens.`);

console.log("--------------");

nomes.push('Juliane'); //adiciona um elemento na ultima posição do array
console.log(nomes);

console.log("--------------");

nomes[2] = 'Fabiana';
console.log(nomes);

console.log("--------------");

delete nomes[1];
console.log(nomes);

console.log("--------------");

const novoArray = [...nomes];
novoArray.pop();
console.log(novoArray);

console.log("--------------"); 

const nomes2 = ['Inara', 'Gabriela', 'Ana'];
console.log(nomes2);
// const removerNomes2 = nomes2.pop(); //retira o ultimo elemento
const removerNomes2 = nomes2.shift(); //retira o primeiro elemento
console.log(nomes2, removerNomes2);

console.log("--------------");

const arrayNomes = ['Bianca', 'Maria Fernanda', 'Ana Caloline'];
console.log(arrayNomes);
const novoArrayNome = arrayNomes.slice(0, -1);
console.log(novoArrayNome);

console.log("--------------");


const string = 'Breno Belchior de Freita gomes';
const stringParaArray = string.split(' '); //transforma uma string em array
console.log(stringParaArray);

console.log("--------------");


const array = ['Breno', 'Belchior', 'de', 'Freitas', 'Gomes'];
const arrayParaString = array.join(' '); //transforma um array em uma string
console.log(arrayParaString);