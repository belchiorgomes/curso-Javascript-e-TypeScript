const container = document.querySelector('.container');
const titulo = document.createElement('h1');

function semanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia invalido';
            return diaSemanaTexto;
    }
}

function mesDoAnoTexto(mesDoAno){
    let mesAnoTexto;
    
    switch(mesDoAno){
        case 0:
            mesAnoTexto = 'Janeiro';
            return mesAnoTexto;
        case 1:
            mesAnoTexto = 'Fevereiro'
            return mesAnoTexto;
        case 2:
            mesAnoTexto = 'Março'
            return mesAnoTexto;
        case 3:
            mesAnoTexto = 'April'
            return mesAnoTexto;
        case 4:
            mesAnoTexto = 'Maio'
            return mesAnoTexto;
        case 5:
            mesAnoTexto = 'Junho'
            return mesAnoTexto;
        case 6:
            mesAnoTexto = 'Julho'
            return mesAnoTexto;
        case 7:
            mesAnoTexto = 'Agosto'
            return mesAnoTexto;
        case 8:
            mesAnoTexto = 'Setembro'
            return mesAnoTexto;
        case 9:
            mesAnoTexto = 'Outubro'
            return mesAnoTexto;
        case 10:
            mesAnoTexto = 'Novembro'
            return mesAnoTexto;
        case 11:
            mesAnoTexto = 'Dezembro'
            return mesAnoTexto;
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = semanaTexto(diaSemana);

const diaSemanaNumero = data.getDate()

const mesDoAno = data.getMonth();
const mesAnoTexto = mesDoAnoTexto(mesDoAno)

const ano = data.getFullYear()

const hora = data.getHours();
const minuto = String(data.getMinutes()).padStart(2, '0');

titulo.innerHTML = `${diaSemanaTexto}, ${diaSemanaNumero} de ${mesAnoTexto} de ${ano} ${hora}:${minuto}`;

container.appendChild(titulo);