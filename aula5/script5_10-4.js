/*
Desafio: for - 3
https://www.w3schools.com/charsets/ref_emoji.asp

9800 - ♈
.....
9811 - ♓
*/
let i;
const saida=document.querySelector(".saida");
// for(i=9800;i<=9811;i++){
for(i=127761;i<=127776;i++){
    saida.innerHTML+=`${i} - &#${i};<br>`;
}