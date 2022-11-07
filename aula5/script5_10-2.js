/*
Desafio: for - 1
<h1>Título 1</h1>
...
<h6>Título 6</h6>
*/
let i;
const saida=document.querySelector(".saida");

for(i=1;i<=6;i++){
    saida.innerHTML+=`<h${i}>Título ${i}</h${i}>`;
}
saida.innerHTML+='<hr>';

for(i=6;i>=1;i--){
    saida.innerHTML+=`<h${i}>Título ${i}</h${i}>`;
}
