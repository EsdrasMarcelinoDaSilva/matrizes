//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let valorDesconto = valorDoProduto * 5 / 100
if(tipoDePagamento == 'credito'){
   valorFinal = valorDoProduto - valorDesconto
   console.log(`O valor final fica: R$ ${valorFinal.toFixed(2)}`)
}else if(tipoDePagamento == 'debito' || tipoDePagamento == 'dinheiro'){
    valorDesconto = valorDoProduto * 10 / 100
    valorFinal = valorDoProduto - valorDesconto
    console.log(`O valor final fica: R$ ${valorFinal.toFixed(2)}`) 
}else{
    valorDesconto = valorDoProduto * 3 / 100
    valorFinal  = valorDoProduto - valorDesconto
    console.log(`O valor final fica: R$ ${valorFinal.toFixed(2)}`)
}
