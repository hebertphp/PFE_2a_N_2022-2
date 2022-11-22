/*
Criar um array para guardar uma lista
Arroz, Feijão, Leite, Café
Mostrar as saídas:
Mostrar todos os valores do array;
Mostrar os valores individuais, um por linha.<br><hr>
*/
const saida=document.querySelector(".saida");
const lista=["Arroz", "Feijão", "Leite", "Café"];

saida.innerHTML=`${lista}<hr>`;
saida.innerHTML+=`${lista[0]}<br>`;
saida.innerHTML+=`${lista[1]}<br>`;
saida.innerHTML+=`${lista[2]}<br>`;
saida.innerHTML+=`${lista[3]}<br>`;

saida.innerHTML=`${lista}<br>
                ${lista[0]}<br>
                ${lista[1]}<br>
                ${lista[2]}<br>
                ${lista[3]}`;

