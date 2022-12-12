/* -----------------------------------------
Documentação do código
function boas_vindas()
 Objetivo: Enviar mensagem de boas vindas
 Data de criação: 12/12/2022
 Autor: Nome do autor
-------------------------------------------- */
const saida=document.querySelector('.saida');

function boas_vindas() {//crição da function
    saida.innerHTML+="Seja bem vindo(a)!<br>";
}
function calc(){
    let x,y;
    x=10;
    y=3;
    return "x+y";
}
function media(av1,av2){
    let media=(av1+av2)/2;
    return media;
}
boas_vindas();//execução/chamar a function
boas_vindas();
let x = calc();
saida.innerHTML+=x;
saida.innerHTML+=calc();
saida.innerHTML+="<hr>";
saida.innerHTML+=media();
