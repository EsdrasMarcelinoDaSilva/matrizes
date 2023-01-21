//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 1_000;
let valorDaParcela = rendaMensalEmCentavos * 18 / 100
// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = valorDaParcela *  mesesDecorridos;
if(rendaMensalEmCentavos >= 2_000){
    console.log(`Sua renda é R$${rendaMensalEmCentavos.toFixed(2)} e o valor da parcela deste mes é R$ ${valorDaParcela.toFixed(2)}`)
    console.log(`Voce ja pagou R$ ${totalJaPagoPeloAluno.toFixed(2)}`)
}else if(rendaMensalEmCentavos < 2_000){
    console.log(`O valor da sua Parcela desse mes é R$ 0, pois sua renda é de R$ ${rendaMensalEmCentavos} de R$ 2.000 reais`)
}else if(mesesDecorridos == 0 || mesesDecorridos >= 60){
    console.log('O valor de sua parcela esse mes é R$ 0, ou voce não atingiu a renda minima de R$ 2000 reais ou ja foi quitado o pagamento!')
}
    
