function calculoImc(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function(evento){
        evento.preventDefault();
        
        const inputPeso = form.querySelector('.input_peso');
        const inputAltura = form.querySelector('.input_altura')

        const peso = Number(inputPeso.value.replace(',', '.'));
        const altura = Number(inputAltura.value.replace(',', '.'));

        const imc = peso / (altura ** 2);

        if(!peso || !altura){
            resultado.innerHTML = "Digite um peso e uma altura valida!";
            return;
        }

        if(imc < 18.5){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`;
        }else if(imc > 18.5 || imc < 24.5){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal`;
        }else{

        }

        // resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
    });
}

calculoImc();