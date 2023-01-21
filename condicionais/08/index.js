const idade = 18;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;
let cash;
if(idade < 12 || idade > 65 && !possuiPatologia && altura < 150){
    console.log('[ACESSO NEGADO!]')
}else if(idade >= 12 && idade < 18 && !ehEstudante){
    const cash = 10;
    console.log(`So paga meia-entrada que custa: R$${cash}`)
}else{
    cash = 20;
    console.log(`Valor da entrada R$${cash}`)
}












/*- Menores de 12 anos
- Maiores de 65 anos
- Que possuam qualquer patologia cardíaca
- Menores de 150cm de altura
- 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
- 20 reias, caso contrário*/