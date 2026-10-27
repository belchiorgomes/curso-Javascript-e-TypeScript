//Retorno da função
//retunr - retorna um valor
//termina a função

function soma(a, b){
    return a + b;
}

console.log(soma(2, 9));

console.log('----------------');

function criaPessoa(nome, idade){
    return {nome, idade};
};

const p1 = criaPessoa('Breno', 32);
console.log(p1);

console.log('----------------');

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(2));
console.log(triplica(3));