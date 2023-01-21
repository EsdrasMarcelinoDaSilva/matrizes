const jogada1 = 5;
const jogada2 = 3;

let parOuImpar = '';

if(parOuImpar % 2 == 0){
    parOuImpar = "PAR";
    console.log(`[VENCEU] voce escolheu ${parOuImpar}`);
}else{
    parOuImpar = "IMPAR";
    console.log(`[PARABENS] voce escolheu ${parOuImpar}`);
}
console.log('De todo jeito voce ganha! :)');