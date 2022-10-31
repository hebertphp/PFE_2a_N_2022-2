/*
Desafio:
Baseado no código script5_07.js
Converter de switch case para if, else if, else
*/
let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");

if(destino=="São Paulo"){
    msg="Seja bem vindo a cidade que nunca para!";
}
else if(destino=="New York"){
    msg="Seja bem vindo a Big Apple!";
}
else{
    msg="Não encontramos seu destino!";
}
saida.innerHTML=msg;