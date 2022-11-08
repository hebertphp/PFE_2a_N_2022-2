let i,j,k;
const saida=document.querySelector(".saida");
for (i=0; i<3; i++) {//externo //hora
 for (j=0; j<4; j++) {//interno //minuto
   saida.innerHTML+=`${i} ${j}<br>`;
 }
}
saida.innerHTML+='<hr>';
for (i=0; i<3; i++) {//externo // hora
    for (j=0; j<4; j++) {//interno //  minuto
        for (k=0; k<5; k++) {//segundos
            saida.innerHTML+=`${i} ${j} ${k}<br>`;
        }
    }
}
/*
i   j
0   0
0   1
0   2
0   3
1   0
1   1
1   2
1   3
2   0
2   1
2   2   
2   3


*/