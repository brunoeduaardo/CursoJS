// if..else
// switch..case

// se a hora estiver entre 6 horas, até meio dia, exibir 'bom dia', se estiver entre
// meio dia, até 8 horas, exibir 'boa tarde'. em nenhum dos dois casos, exibir 'boa noite'

let hora = 15;

if(hora > 6 && hora < 12){
    console.log('Bom dia !');
}
else if(hora > 12 && hora < 18){
    console.log('Boa tarde !');
}
else{
    console.log('Boa noite !');
}