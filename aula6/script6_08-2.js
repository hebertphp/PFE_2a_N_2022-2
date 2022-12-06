const saida=document.querySelector('.saida');
let estudante={
    nome:"Joana",
    ra:"123456",
    cep:"01012-123"
};
//saida.innerHTML=estudante["nome"];
//saida.innerHTML+=estudante.ra;
for(let i in estudante){
    saida.innerHTML+=`${i}: ${estudante[i]}<br>`;
}