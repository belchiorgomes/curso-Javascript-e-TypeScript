const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        console.log('Pulei o 2')
        continue; // fz o loop pula o numero 2
    }

    if(numero === 7){
        console.log('7 encontrado, saindo...');
        break; //faz para a ação
    }

    console.log(numero);
}

console.log('------------------');

for(let i in numeros){
    let numero = numeros[i];
    
    if(numero === 4){
        console.log('Pulei o numero 4');
        continue;
    }

    if(numero === 7){
        console.log('7 encontrado, saindo!');
        break;
    }

    console.log(numero);
}