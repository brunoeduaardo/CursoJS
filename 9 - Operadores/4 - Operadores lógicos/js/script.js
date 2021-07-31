// Operador lógico E &&
// retorna true se os dois operandos forem true

console.log(true && true);
console.log(true && false);

// Imagine-se que uma pessoa só pode aplicar para uma vaga,
// se for maior de idade, e tiver carteira de trabalho

let maioridade = true;
let carteiraTrabalho = false;
let podeAplicar = maioridade && carteiraTrabalho;

console.log('Candidato pode aplicar?',podeAplicar);

// Operador lógico OU ||
// retorna true, se um dos operandos forem true

// Digamos que uma pessoa pode comprar um carro
// se ele for maior de idade, ou se for um menor emancipado

let maiorDeIdade = false;
let emancipado = true;
let podeComprar = maiorDeIdade || emancipado;

console.log(podeComprar);

// Operador lógico NOT !

let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado:',candidatoRecusado);