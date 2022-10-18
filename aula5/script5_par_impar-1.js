let num,calc;
const saida=document.querySelector(".saida");

num=parseInt(prompt("Digite um numero inteiro"));
calc=num%2;

if(calc==0){
    saida.innerHTML=`${num} - Par`;
}
else{
    saida.innerHTML=`${num} - Ímpar`;
}

//saida.innerHTML=`num=${num} calc=${calc}`;
/*
Elaborar um código Javascript para dado um número inteiro, verificar se
o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/