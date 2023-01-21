const caractere = "d";

if(caractere == "A" || caractere == "E" || caractere == "I" || caractere == "O" || caractere == "U"){
    console.log(`[${caractere}] Vogal Maiuscula!`)
}else if(caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u'){
    console.log(`[${caractere}] Vogal Minuscula!`)
}else if(caractere >= 0 && caractere <= 1_000_000){
    console.log(`[${caractere}] Caractere do tipo Numeros!`)
}else{
    console.log('Qualquer caractere que não seja uma vogal e nenhum numero!')
}