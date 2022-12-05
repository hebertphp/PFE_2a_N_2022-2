const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia','Abelarda','Limonselo','Giva','Jubri','Diva'];
const produtos=["mouse","teclado","monitor","headset","café","celular"];
//for (let var_simples of var_tipo_array){
//  var_simples serve para pegar cada valor individual do array
// um valor de cada vez
//}
for (let x of estudante){
    saida.innerHTML+=`${x}<br>`;
}

/*
x="mouse";saida.innerHTML+=`${x}<br>`;//imprime mouse
x="teclado";saida.innerHTML+=`${x}<br>`;//imprime apenas teclado
lista ordenada de estudante
1. Astrogildo
2. Belarmina
<ol>
    <li>Astrogildo</li>
    <li>Belarmina</li>
</ol>    

*/