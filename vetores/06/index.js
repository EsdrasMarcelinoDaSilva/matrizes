const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let par = 0
let soma = 0
for(let number of numeros){
    if(number % 2 == 0){
        par++
        console.log(number)
        soma += number
       
        
    }
}
console.log(`A soma dos valores pares é igual a ${soma}`)