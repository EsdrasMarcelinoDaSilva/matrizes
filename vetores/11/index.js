const original = [5, 7, 13, 17, 26, 34, 118, 245];
let numero = []
for(let number of original){
    if(number > 10 && number < 20){
        numero.push(number)
    }
    if(number > 100){
        numero.push(number)
    }
}
console.log(numero)