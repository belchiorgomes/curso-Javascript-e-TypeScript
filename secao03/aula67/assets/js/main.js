const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    let li = document.createElement('li');
    return li
}

inputTarefa.addEventListener('keypress', function(e){
    // console.log(e)//Mostra qual tecla foi apertada 
    if(e.keyCode === 13){
        // console.log('Enter precionado');
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput){
    console.log(textoInput);
    let li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});