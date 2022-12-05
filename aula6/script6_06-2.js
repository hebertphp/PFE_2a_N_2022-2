const saida=document.querySelector('.saida');
// const mes_select=document.querySelector("#mes");
//                0        1         2        3         4         5       
const produtos=["mouse","teclado","monitor","headset","café","celular","tablet","impressora","capinha de celular"];

for(let i=0;i<produtos.length;i++){
    saida.innerHTML+=`${produtos[i]} <br>`;
}
//saida.innerHTML=produtos.length;//quantidade de indices/valores do array