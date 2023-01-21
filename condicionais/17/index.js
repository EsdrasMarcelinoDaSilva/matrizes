//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let prestacoes = valorDoProduto / quantidadeDoParcelamento
let restante = valorDoProduto - valorPago
let totalParcelas = restante / prestacoes 
console.log(`Restam ${totalParcelas} parcelas de R$ ${prestacoes}`) 
