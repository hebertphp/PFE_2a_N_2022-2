const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia','Deoclesio'];
//for (let var_simples in var_tipo_array){
//var_simples serve para pegar cada indice/posição do array  
for (let i in estudante){
    saida.innerHTML+=`${i} - ${estudante[i]}<br>`;
}