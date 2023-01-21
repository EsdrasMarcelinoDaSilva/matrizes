const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30_000_00; //emCentavos

if(totalDeRendimentos >= 28_559_70){
    console.log(`PEGA LEÃO! rendimentos = ${totalDeRendimentos}`)
}else if(totalDeRendimentos < 28_559_70){
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE!')
}else if(!portadoraDeDoenca && !aposentada){
    console.log('ISENTA!')
}
