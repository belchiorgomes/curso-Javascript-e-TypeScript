const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

const criaHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};

// console.log(criaHoraDosSegundos(10));7

document.addEventListener('click', (event) => {
    const elemento = event.target;

    if(elemento.classList.contains('zerar')){
        // console.log('Você clicou em zera');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(elemento.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }
});

const iniciaRelogio = () => {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
};


// btnIniciar.addEventListener('click', (event) => {
//     relogio.classList.remove('pausado')
//     clearInterval(timer);
//     iniciaRelogio();
// });

// btnPausar.addEventListener('click', (event) => {
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// });

// btnZerar.addEventListener('click', (event) => {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });