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
            resultado.style.color = 'red';
            return;
        }

        if(imc < 18.5){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`;
        }else if(imc > 18.5 && imc < 24.5){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal`;
        }else if(imc > 25 && imc <29.9){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com Sobrepeso`;
        }else if(imc > 30 && imc < 34.9){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com Obesidade grau 1`;
        }else if(imc > 35 && imc < 39.9){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com Obesidade grau 2`;
        }else if(imc > 40){
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com Obesidade grau 3`;
        }

        // resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
    });
}

calculoImc();