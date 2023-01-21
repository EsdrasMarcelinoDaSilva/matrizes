const original = [1, 4, 12, 21, 53, 88, 112];

let numeroPar = []

for(let numero = 0; numero < original.length; numero++){
    if(original[numero] % 2 ==0){
        numeroPar.push(original[numero])
     } 
}
console.log(numeroPar)

