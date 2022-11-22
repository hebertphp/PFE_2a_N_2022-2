const x=[2020,2,"Hoje"];
const saida=document.querySelector('.saida');

saida.innerHTML=`x = ${x}<hr>`;

x[0]++;//2020+1 //2021
x[1]=x[0]%2;//1
x[2]+=" em dia";//Hoje em dia

saida.innerHTML+=`x[0] = ${x[0]}<br>`;//2021
saida.innerHTML+=`x[1] = ${x[1]}<br>`;//1
saida.innerHTML+=`x[2] = ${x[2]}<br>`;//Hoje em dia