const nome = 'Breno Belchior';

for (let valor of nome){
    console.log(valor);
}

console.log('---------------');

[...nome].forEach(function(valor, indice){
    console.log(valor, indice);
});