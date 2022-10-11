let a,b,c,d,e;
const saida1 = document.querySelector("#saida1");
a=50;
b=120;
c=200;
d=(a<=b) ? "Verdadeiro" : "Falso";
e=(a>=c) ? "Verdadeiro" : "Falso";
saida1.innerHTML=`d = ${d}<br>`;
saida1.innerHTML+=`e = ${e}<br>`;