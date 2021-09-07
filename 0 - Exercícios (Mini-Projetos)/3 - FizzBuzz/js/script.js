const resultado = FizzBuzz(2);
console.log(resultado);

function FizzBuzz(entrada){
    if(isNaN(entrada)){
        return 'não é um número';
    }
    if(entrada%3 == 0 && entrada%5 == 0){
        return 'FizzBuzz';
    }
    if(entrada%3 == 0){
        return 'Fizz';
    }
    if(entrada%5 == 0){
        return 'Buzz';
    }
    return entrada;
}