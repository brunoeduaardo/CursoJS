// Se um cliente tiver mais de 100 pontos, ele é um cliente 'premium', caso contrário,
// ele é um cliente 'comum'

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);