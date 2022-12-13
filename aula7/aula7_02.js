/*
Criar um formulário com os campos:
Nome
AV1
AV2

No final, calcular a média entre AV1 e AV2 e mostrar o resultado:
Nome
AV1
AV2
Média

*/
const saida=document.querySelector('.saida');
const nome=document.querySelector('#nome');
const av1=document.querySelector('#av1');
const av2=document.querySelector('#av2');
const btn1=document.querySelector('.btn1');
const btn2=document.querySelector('.btn2');

btn1.onclick=mostrarSaida;
btn1.onclick=boas_vindas;

btn2.addEventListener("click", mostrarSaida);
btn2.addEventListener("click", boas_vindas);


function boas_vindas(nome) {//crição da function
    saida.innerHTML+=`Seja bem vindo(a) ${nome} <br>`;
}
function media(av1,av2){
    return (av1+av2)/2;
    //return av1+av2;
}
function mostrarSaida(){
    saida.innerHTML=`Nome: ${nome.value}<br>`;
    saida.innerHTML+=`AV1: ${av1.value}<br>`;
    saida.innerHTML+=`AV2: ${av2.value}<br>`;
    saida.innerHTML+=`Média: `+media(parseFloat(av1.value),parseFloat(av2.value));

}