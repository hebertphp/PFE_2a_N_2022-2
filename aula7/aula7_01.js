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
    return x+y;
}
boas_vindas();//execução/chamar a function
boas_vindas();
calc();