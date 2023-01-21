const jogada1 = "pedra";
const jogada2 = "tesoura";

let jogadaVencedora = jogada2
if(jogada1 == jogada2){
    console.log('[EMPATE!]');
}else if(jogadaVencedora == jogada1){
    console.log(`[VENCEDOR!] Voce jogou ${jogadaVencedora}`);
}else{
    console.log('Voce perdeu!');
}
