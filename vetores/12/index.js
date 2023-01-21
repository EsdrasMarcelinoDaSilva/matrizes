const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

let nomes;

while(filaDeDentro.length < 5){
    nomes = filaDeFora.shift()
    filaDeDentro.push(nomes)
}
console.log(filaDeDentro)
console.log(filaDeFora)