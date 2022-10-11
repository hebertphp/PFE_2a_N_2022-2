let a,b,res;
const saida1 = document.querySelector("#saida1");

a=90;
b=10;
res=(a<b);//false

saida1.innerHTML=`a = ${a} , b = ${b} <br>`;
saida1.innerHTML+=`a < b : ${(a<b)} <br>`;
saida1.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;
saida1.innerHTML+="res : "+typeof(res);
/*
document.write(`a = ${a} , b = ${b} <br>`);
document.write(`a < b : ${(a<b)} <br>`);
document.write(`!( a < b) : ${!(a<b)}<br>`);
document.write("res : "+typeof(res));
*/