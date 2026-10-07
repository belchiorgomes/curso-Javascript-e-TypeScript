// const data = new Date(0);
// console.log(data);
// console.log(data.toString());

const data01 = new Date(2026, 9, 7, 18, 12, 45);
console.log(data01.toString());

const data02 = new Date('2026-10-07 19:03:59')
console.log(data02.toString());

const data03 = new Date();
console.log('Dia', data03.getDate());
console.log('Mês', data03.getMonth() + 1);
console.log('Ano', data03.getFullYear());
console.log('Hora', data03.getHours());
console.log('Minuto', data03.getMinutes());
console.log('Segundo', data03.getSeconds());
console.log('Milesegundo', data03.getMilliseconds());
console.log('Dia Semana', data03.getDay());
console.log(data03.toString());

console.log(Date.now());
const data04 = new Date(1791411462263);
console.log(data04.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data05.getDate());
    const mes = zeroAEsquerda(data05.getMonth() + 1);
    const ano = zeroAEsquerda(data05.getFullYear());
    const hora = zeroAEsquerda(data05.getHours());
    const min = zeroAEsquerda(data05.getMinutes());
    const seg = zeroAEsquerda(data05.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data05 = new Date();
const dataBrasil = formataData(data05);
console.log(dataBrasil)