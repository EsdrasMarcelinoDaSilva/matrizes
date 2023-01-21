//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if(quantidadeDeAguaIngerida < 1.5){
    console.log('"Risco alto" voce esta ingerindo pouquissima agua!')
}else if(quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida < 3){
    console.log('"Risco Moderado" voce esta ingerindo pouca agua, beba mais!')
}else if(quantidadeDeAguaIngerida >= 3){
    console.log('"Risco Baixo" voce esta ingerido uma boa quantidade de agua, parabens!')
}