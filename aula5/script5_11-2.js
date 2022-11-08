/*
Desafio final.

Montar um código para mostrar todas as tabuadas do 1 até 10

*/
let i,tabuada;
const saida=document.querySelector('.saida');

for(tabuada=1;tabuada<=10;tabuada++){
    
    for(i=0;i<=10;i++){
        saida.innerHTML+=`${tabuada} x ${i} = ${tabuada * i} <br>`;
    }
    saida.innerHTML+='<hr>';
}