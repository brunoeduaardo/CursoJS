// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - Not a Number (cálculos que resultam em valores matématicos inválidos)

// truthy
// nenhum dos anteriores

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);