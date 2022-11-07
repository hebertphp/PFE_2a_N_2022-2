let i;
const saida=document.querySelector(".saida");
saida.innerHTML="<h2>do while</h2>";
i=10;//alteração
do{
    saida.innerHTML+=i + "<br>";
    i++;
}while (i < 3);//cond verificada no final

saida.innerHTML+="<h2>while</h2>";
i=10;//alteração
while(i < 3){//cond verificada no início
    saida.innerHTML+=i + "<br>";
    i++;
}