// function saudacao(nome = 'Julio'){
//     console.log(`Boa Tarde ${nome}!`);
// }

// saudacao();

// -------------------------

// function saudacao(nome){
//     console.log(`Boa Tarde ${nome}!`);
// }

// saudacao('Breno');

// ----------------------------

// function saudacao(nome = 'Maria'){
//      console.log(`Boa Tarde ${nome}!`);
// }

// saudacao('Sebastião');
// saudacao();

// --------------------------

// function saudacao(nome){
//     return `Boa Tarde ${nome}!`;
//     // console.log(`Boa Tarde ${nome}`); //este jeito ocorre um erro
// }

// const valorNome = saudacao('Maria');
// console.log(valorNome);

// -------------------------------

// function soma(x, y){
//     let resultado = x + y;
//     return resultado;
// }

// console.log(soma(1, 4));

// ----------------------------

// const raiz = function (numero){
//     return numero ** 0.5;
// };

// console.log(raiz(9));

// ---------------------------

const raiz = (numero) => {
    return numero ** 0.5;
};

console.log(raiz(16));

const soma = numero => numero + 2;
console.log(soma(3));