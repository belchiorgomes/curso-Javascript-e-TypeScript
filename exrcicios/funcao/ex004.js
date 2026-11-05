// Crie ehMaiorDeIdade(idade) que devolva true ou false.
function ehMaiorDeIdade(idade){
    // return idade < 18 ? false : true;
    if( typeof idade !== 'number' || Number.isNaN(idade)){
        throw new Error("Insere um valor corredamente como um numero");
    }

    if(idade < 0){
        throw new Error("Idade invalida, insira idade com valor positivo");
    }

    return idade >= 18;
}

try {
        console.log(ehMaiorDeIdade('abc'));
    } catch (erro) {
       console.log(erro.message); 
}
