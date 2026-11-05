// Crie resumo(lista) que devolva um objeto com soma, media e maior.
function resumo([...lista]){
    const soma = lista.reduce((acumulador, n) => acumulador + n, 0);

    return{
        soma,
        media: soma / lista.length,
        maior: Math.max(...lista)
    };
}

console.log(resumo([4, 2, 8, 1, 7]));