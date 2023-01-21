const nota = 3;

let notaAtual = nota;
if(nota >= 9){
    notaAtual = "A";
    console.log(`Conceito ${notaAtual}`);
}else if(nota >= 8 && nota <= 8.9){
    notaAtual = "B";
    console.log(`Conceito ${notaAtual}`);
}else if(nota >= 6 && nota <= 7.9){
    notaAtual = "C";
    console.log(`Conceito ${notaAtual}`);
}else if(nota >= 4 && nota <= 5.9){
    notaAtual = "D";
    console.log(`Conceito ${notaAtual}`);
}else{
    notaAtual = "E";
    console.log(`Conceito ${notaAtual}`);
}