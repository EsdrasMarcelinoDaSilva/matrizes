const numeros = [3, 24, 1, 8, 11, 7, 15,];
let maior = 0
for(let numero = 0; numero < numeros.length; numero++){
    if(numeros[numero] > numeros[maior]){
        maior = numero  
    }
 }
 console.log(`O numero maior é ${numeros[maior]}`)