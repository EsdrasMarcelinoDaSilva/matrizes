// calculando uma aplicação de capital com juros mensais de 12,5% fixos entre com seu valor de capital
let capital = 1000;
const taxaJuros = 12.5;
let tempoInvest = 5;
let montante = capital + (capital * 12.5 / 100 * 5);

console.log(`Aplicando o valor de R$${capital} com ${taxaJuros}% fixo ao final de ${tempoInvest} meses voce tera ${montante}` )