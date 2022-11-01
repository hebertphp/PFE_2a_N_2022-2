let i;
const saida=document.querySelector(".saida");
i=0;//valor inicial  
while (i <= 5) {//condição 
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";
/*
i       i<=5     saída       contador
0       V       0           1
1       V       1           2
2       V       2           3
3       V       3           4   
4       v       4           5
5       V       5           6
6       F
*/
/*
Desafio1: Mostrar a saída 7 8 9 10
*/
i=7;//valor inicial  
while (i <= 10) {//condição: i<=10 ou i<11 
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";
/*
Desafio2: Mostrar a saída 4 3 2 1 0
*/
i=4;//valor inicial  
while (i >= 0) {//condição: i<=10 ou i<11 
    saida.innerHTML+=i + " ";
    i--;//contador
}
saida.innerHTML+="<hr>";
/*
Desafio3: Mostrar a saída 0 2 4 6 8 10
*/
i=0;//valor inicial  
while (i <= 10) {//condição 
    saida.innerHTML+=i + " ";
    //i++;//i=i+1;//i+=1
    i+=2;
}
saida.innerHTML+="<hr>";
/*
Desafio4: Vcs conhecem essa tag? <h1></h1>
<h1> até <h6>
Criar um código para mostrar as linhas dentro das tags
de h1 até h6
Simulação:
<h1>Linha1</h1>
<h2>Linha2</h2>
....
<h6>Linha6</h6>
*/
i=1;//valor inicial  
while (i <= 6) {//condição 
    saida.innerHTML+=`<h${i}>Linha${i}</h${i}>`;
    i++;//contador
}