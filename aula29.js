const alunos = [
    'Breno', 
    'Maria', 
    'Sebastião'
];

// alunos[3] = 'Aline';
// alunos[alunos.length] = 'Fernanda';
alunos.push('Jaqueline');
alunos.unshift('Joaquim');

console.log(alunos);
console.log(alunos[0]);
console.log(alunos.length)

// alunos.shift(); //remove no inicio
const removido = alunos.pop(); //remove no final
console.log(`Nome removido foi: ${removido}`);

console.log(alunos);

// delete alunos[0]; 
// //deleta o indice 0
// console.log(alunos);

console.log(alunos.slice(0, - 2));

console.log(typeof alunos);