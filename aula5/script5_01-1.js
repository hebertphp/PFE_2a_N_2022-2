let a,b;
const saida=document.querySelector(".saida");//class
const s=document.querySelector("#s");//id
const h1=document.querySelector("h1");//tag h1

a = 5;
b = "5";
if (a == b) {
  saida.innerHTML=`a = ${a}, b = ${b}<br>`;
  saida.innerHTML+=`A variável a é igual a variável b`;  
}