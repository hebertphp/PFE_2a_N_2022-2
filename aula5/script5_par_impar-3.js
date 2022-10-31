let num,msg;
const saida=document.querySelector(".saida");
num=parseInt(prompt("Digite um número"));
msg=num%2==0?"PAR":"ÍMPAR";//ternário
saida.innerHTML=`${num} - ${msg}`;