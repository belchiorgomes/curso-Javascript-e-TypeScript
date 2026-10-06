const hora = 5;

if(hora >= 0 && hora <= 11){
    console.log('Bom Dia');
}else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite');
}else{
    console.log('Horario incorreto!');
}