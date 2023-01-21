const nomes = ["Ana", "Joana", "Carlos", "amanda", "alex"];

let nomesEscolhidos = []

for(let nomeIgual of nomes){
    if(nomeIgual == 'Ana' || nomeIgual == 'amanda')
    nomesEscolhidos.push(nomeIgual)
}
console.log(nomesEscolhidos)

// ou ????

let nome = nomes[0] + " , " + nomes[3]
console.log([nome])