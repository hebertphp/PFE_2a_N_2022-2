/* -----------------------------------------
Documentação do código
function boas_vindas()
 Objetivo: Enviar mensagem de boas vindas
 Data de criação: 12/12/2022
 Autor: Nome do autor
-------------------------------------------- */
const saida=document.querySelector('.saida');

function boas_vindas(nome) {//crição da function
    saida.innerHTML+=`Seja bem vindo(a) ${nome} <br>`;
}
function calc(){
    let x,y;
    x=10;
    y=3;
    return "x+y";
}
function media(av1,av2){
    return (av1+av2)/2;
}
boas_vindas("Estudante");//execução/chamar a function
let x = calc();
saida.innerHTML+=x;
saida.innerHTML+=calc();
saida.innerHTML+="<hr>";
saida.innerHTML+=media(8,9);
