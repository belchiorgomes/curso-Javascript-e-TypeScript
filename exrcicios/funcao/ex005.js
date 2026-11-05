// Crie classificarNota(nota) que devolva "Aprovado" (>= 7), "Recuperação" (>= 5) ou "Reprovado", usando early return.
function classificarNota(nota){
    if(typeof nota !== 'number' || Number.isNaN(nota) || nota < 0 || nota > 10){
        throw new Error(`Nota invalida, inseriu ${nota}`);
    }

    if(nota >= 7) return `Aprovado, nota ${nota}`;
    if(nota >= 5) return `Recuperação, nota ${nota}`;
    return `Reprovado, nota ${nota}`;
}

try {
    console.log(classificarNota(7))
} catch (erro) {
    console.log(erro.message);
}