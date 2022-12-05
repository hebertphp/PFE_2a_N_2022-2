const saida=document.querySelector('.saida');
// const mes_select=document.querySelector("#mes");
//                0        1         2        3         4         5       
const produtos=["mouse","teclado","monitor","headset","café","celular","tablet","impressora"];

for(let i=0;i<6;i++){
    saida.innerHTML+=`${produtos[i]} <br>`;
}
saida.innerHTML=produtos.length;