/*
Criar um formulário com os campos:
Nome
AV1
AV2

No final, calcular a média entre AV1 e AV2 e mostrar o resultado:
Nome
AV1
AV2
Média

*/
const saida=document.querySelector('.saida');

function boas_vindas(nome) {//crição da function
    saida.innerHTML+=`Seja bem vindo(a) ${nome} <br>`;
}
function media(av1,av2){
    return (av1+av2)/2;
}