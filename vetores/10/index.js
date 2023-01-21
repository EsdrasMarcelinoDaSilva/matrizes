const numeros = [8, 10, 23, 11, 19]
let maior = 0
let menor = 0
for(number = 0; number < numeros.length; number++){
    if(numeros[number] > numeros[maior]){
        maior = number
    }
    if(numeros[number] < numeros[number]){
        menor = number
    }
}
let diferenca = numeros[maior] - numeros[menor]
console.log(`A diferença entre o numero maior e o menor é ${diferenca}`)