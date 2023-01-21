const alturaEmCm = 206;

if(alturaEmCm < 180){
    console.log('Candidato REPROVADO');
}else if(alturaEmCm >= 180 && alturaEmCm <= 185){
    console.log('Candidato à LIBERO!');
}else if(alturaEmCm >= 186 && alturaEmCm <= 195){
    console.log('Candidato à PONTEIRO!');
}else if(alturaEmCm >= 196 && alturaEmCm <= 205){
    console.log('Candidato à OPOSTO!');
}else{
    console.log('Candidato à CENTRAL!')
}













