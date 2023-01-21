let montante = 90_000;
let capital = 60_000;
let tempo = 24;
let taxa = (90_000 - 60_000) / (60_000 * 24);
let taxaJuros = taxa * 100;

console.log(`Seu financiamento de R$${capital} teve uma taxa de juros de ${taxaJuros.toFixed(2)}% pois apos ${tempo} meses voce teve que pagar R$${montante}`)