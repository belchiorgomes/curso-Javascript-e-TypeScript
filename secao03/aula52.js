for (let i = 0; i <= 5; i++){
    console.log(i);
}

console.log('--------------------')

for (let i = 0; i <= 5; i++){
    const par = i % 2 === 0;
    console.log(i, par);
}

console.log('--------------------')

for (let i = 0; i <= 5; i += 2){
    console.log(i);
}

console.log('--------------------')

for (let i = 0; i <= 5; i++){
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, par);
}