// declaração e nomeação de função

let corSite = 'azul';
function resetaCor(){
    corSite = '';
};

console.log(corSite);
resetaCor();
console.log(corSite);



let corSite1 = 'azul';
function resetaCor1(cor){
    corSite1 = cor;
};


console.log(corSite1);
resetaCor1('vermelho');
console.log(corSite1);

let corSite2 = 'azul';
function resetaCor2(cor,tonalidade){
    corSite2 = cor + tonalidade;
}

console.log(corSite2);
resetaCor2('verde',' claro');
console.log(corSite2);



let motorCarro = 'nenhum motor no momento';
function qualMotor(tipo,qtdCilindros){
    motorCarro = tipo + qtdCilindros
};

console.log(motorCarro);
qualMotor('V','8');
console.log(motorCarro);
