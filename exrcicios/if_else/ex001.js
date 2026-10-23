// Maior de idade: dada uma variável idade, mostre no console se a pessoa é maior ou menor de idade (18 anos ou mais é maior).

function validarIdade(idade){
    // if( typeof idade !== 'number' || idade < 0){
    //     console.log('Idade invalida!...');
    // }else if(idade >= 18){
    //     console.log(`Sua idade é ${idade}, você é maior de idade!`);
    // }else{
    //     console.log(`Sua idade é ${idade}, você é menor de idade!`);
    // }

    if(!Number.isFinite(idade) || idade < 0){
        console.log('Idade invalida!...');
    }else if(idade >= 18){
        console.log(`Sua idade é ${idade}, você é maior de idade!`);
    }else{
        console.log(`Sua idade é ${idade}, você é menor de idade!`);
    }
};

validarIdade('idade');
validarIdade(-4);
validarIdade(NaN);
validarIdade(12);
validarIdade(18);
validarIdade(28);