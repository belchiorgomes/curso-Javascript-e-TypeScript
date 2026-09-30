let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// Jeito antigo
// const varAtemp = varA
// varA = varB;
// varB = varC;
// varC = varAtemp;

// JEITO NOVO

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);