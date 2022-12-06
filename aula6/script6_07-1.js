const saida=document.querySelector('.saida');
const lista=document.querySelector('.lista');
let teste="";
const estudante=['Astrogildo','Belarmina','Pafuncia','Abelarda','Limonselo','Giva','Jubri','Diva'];
const produtos=["mouse","teclado","monitor","headset","café","celular"];
//for (let var_simples of var_tipo_array){
//  var_simples serve para pegar cada valor individual do array
// um valor de cada vez
//}
// saida.innerHTML+=`< ol>`;
teste="<ol>";
for (let x of estudante){
    teste+=`<li>${x}</li>`;
}
teste+="</ol>";
saida.innerHTML=teste;
//  saida.innerHTML+=`< /ol>`;

//  saida.innerHTML=`<ol><li>Astrogildo</li><li>Belarmina</li></ol>`;
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

<select name="sei_la">
    <option value="sp">sp</option>
    <option value="rj">rj</option>
</select>
*/