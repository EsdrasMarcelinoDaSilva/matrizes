//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if(idadeDoAluno >= 18){
    console.log('Rematricula realizada com sucesso!')
}else if(idadeDoAluno <= 16 && !possuiResponsavel){
    console.log('Rematricula pode ser realizada com acompanhante')
}else{
    console.log('Rematricula não pode ser realizada!')
}