const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia','Abelarda','Limonselo','Giva','Jubri','Diva'];
const produtos=["mouse","teclado","monitor","headset","café","celular"];
//for (let var_simples of var_tipo_array){
//  var_simples serve para pegar cada valor individual do array
// um valor de cada vez
//}
for (let var_qq of produtos){
    saida.innerHTML+=`${var_qq}<br>`;
}