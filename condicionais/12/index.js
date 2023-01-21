const diaDaSemana = 3;
let diaAtual;
if(diaDaSemana == 0 || diaDaSemana > 7){
    console.log('O dia da semana informado não é válido!')
}else if(diaDaSemana == 3 ){
    diaAtual = 'Quarta feira'
    console.log(`hoje é ${diaAtual}`)
}
