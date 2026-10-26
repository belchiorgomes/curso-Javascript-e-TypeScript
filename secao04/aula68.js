// Declaração de função (Function hosting)
function falaOi(nome){
    console.log(`Oie ${nome}`);
};

falaOi('Maria');

// First-class objects (objetos de primeira clasee)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.')
};

souUmDado();

// Arrow function 
const arrowFunction = () => {
    console.log('Sou uma arrow function')
};

arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};

obj.falar();