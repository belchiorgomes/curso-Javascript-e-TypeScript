//Parametros da função
//A palavra chave arguments que sustenta todos a argumentos enviados
function funcao(){
    console.log(arguments[3]);
    console.log(arguments);
}

funcao('valor', 1, 2, 3, 'fala oi');

console.log('------------');

function funcao02(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao02(1,2,3,4,5,6,7);

console.log('------------');

function funcao03(a, b = 0){
    // b = b || 0; //maneira antiga
    console.log(a + b);
}

funcao03(2);

console.log('------------');

function funcao04(a, b = 2, c){
    console.log(a + b + c);
}

//undefined pega o valor padrão do b que é b = 2
funcao04(2, undefined, 2);

console.log('------------');

function funcao05({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

funcao05({nome: 'Breno', sobrenome: 'Belchior', idade: 32}); 

console.log('------------');

///...numeros e o resto dos parametros, deve ser o ultimo
function conta(operador, acumulador, ...numeros){
    // console.log(operador, acumulador, numeros);
    for(let numero of numeros){
        // console.log(numero);
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);