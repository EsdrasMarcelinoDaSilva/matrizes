//calculando velocidade primeiro em m/s depois convertendo essa velocidade em km/h
let distancia = 500;
let tempo = 10;
let metrosSeg = distancia / tempo;
let velocidade = metrosSeg * 3.6
console.log(`Percorrendo a distancia de ${distancia}m no tempo de ${tempo}s chegariamos ao alcance de ${metrosSeg}m/s na velocidade de ${velocidade}km/h`)
