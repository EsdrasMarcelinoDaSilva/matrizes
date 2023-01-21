const letras = ["A", "a", "B", "C", "E", "e",];

let vogais = 0

for(let vogal of letras){
    if(vogal == 'E' || vogal == 'e'){
        vogais++
        console.log(vogal)
    }   
}
console.log(`foram encontradas ${vogais} letras`)