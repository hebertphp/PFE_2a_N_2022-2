const saida=document.querySelector('.saida');
const mes_select=document.querySelector("#mes");
//                0        1         2        3         4                
const produtos=["mouse","teclado","monitor","headset","café","celular"];

for(let i=0;i<5;i++){
    saida.innerHTML+=`${produtos[i]} <br>`;
}