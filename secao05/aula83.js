const array01 = [1, 2, 3, 4];
const array02 = [5, 6, 7];
const array03 = array01.concat(array02, [8, 9, 10], 'Breno');

console.log(array03);

// ...array01 operador spread
const array04 = [...array01, 'Breno', ...array02, ...[8, 9, 10]];
console.log(array04);