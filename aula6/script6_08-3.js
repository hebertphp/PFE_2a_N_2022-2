const saida=document.querySelector('.saida');
let personagem={
    armadura:"media",
    destreza:21,
    nivel:60,
    arma_principal:"arco",
    arma_secundaria:"lança"
}
for(let i in personagem){
    saida.innerHTML+=`${i}: ${personagem[i]}<br>`;
}