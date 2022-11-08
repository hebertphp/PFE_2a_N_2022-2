/*
Desafio: for - 2

tabuada=2;
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
.......
2 x 10 = 20
*/
let i,tabuada;
const saida=document.querySelector('.saida');

tabuada=2;
for(i=0;i<=10;i++){
    saida.innerHTML+=`${tabuada} x ${i} = ${tabuada * i} <br>`;
}