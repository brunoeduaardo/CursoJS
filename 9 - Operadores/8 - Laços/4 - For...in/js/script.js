// No JS temos 5 laços:

// For
// While
// Do..while
// For..in
// For..of

//

//for..in

const pessoa = {
    nome: 'Bruno',
    idade: 19
};

for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}

const cores = ['Vermelho','Azul','Verde'];

for(let indice in cores){
    console.log(indice,cores[indice]);
}