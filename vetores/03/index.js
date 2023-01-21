const numeros = [54, 22, 14, 87, 10, 284];

let isTen = false  

for(let number of numeros){
    if(number == 10){
        console.log(number)
        isTen = true
        break
    }
}
if(!isTen){
    console.log('-1')
}