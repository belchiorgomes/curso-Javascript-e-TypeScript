//Crie formatarEndereco({ rua, numero, cidade, estado = "MG" }) que devolva uma string formatada.
function formatarEndereco({rua, numero, cidade, estado = 'MG'} = {}){
    return `Mora na cidade ${cidade} rua ${rua} no número ${numero}, no estado ${estado}`;
};

const seuEndereco = formatarEndereco(
    {
        rua: 'Marques da costa',
        numero: 500,
        cidade: 'Ituiutaba'
    }
)

console.log(seuEndereco);