const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

// function criarHoraSegundo(segundos){
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
// };

// btnIniciar.addEventListener('click', () => {
//     clearInterval(timer);
//     iniciaRelogio();
// });

// btnPausar.addEventListener('click', () => {
//     clearInterval(timer);
// });

// btnZerar.addEventListener('click', () => {
//     clearInterval(timer);
//     segundos = 0;
//     relogio.textContent = '00:00:00';
// });

// function iniciaRelogio(){
//     clearInterval(timer);
//     timer = setInterval(() => {
//         segundos++;
//         relogio.textContent = criarHoraSegundo(segundos);
//     }, 1000);
// }

const cronometro = () => {
    const doisDigitos = (n) => String(n).padStart(2, '0');


    const criarHoraSegundos = (segundos) => {
        const h = Math.floor(segundos / 3600);
        const m = Math.floor((segundos % 3600) / 60);
        const s = Math.floor(segundos % 60);

        return `${doisDigitos(h)}:${doisDigitos(m)}:${doisDigitos(s)}`;
    };

    const iniciarRelogio = () => {
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            relogio.textContent = criarHoraSegundos(segundos);
        }, 1000);
    };

    btnIniciar.addEventListener('click', () => {
        clearInterval(timer);
        iniciarRelogio();
    });

    btnPausar.addEventListener('click', () => {
        clearInterval(timer);
    });

    btnZerar.addEventListener('click', () => {
        clearInterval(timer);
        segundos = 0;
        relogio.textContent = '00:00:00';
    });
};

cronometro();