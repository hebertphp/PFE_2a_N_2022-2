let a, b;
//a=prompt("Digite um número");//"10.5"
//a=parseInt(a);//10
//a=parseFloat(a);
a=parseInt( prompt("Digite um numero") );
b=parseInt( prompt("Digite outro número") );//2.7

document.write (`soma: ${(a+b)} <br>`);

document.write ("subtração: "+ (a-b) + "<br>");
document.write(`A multiplicação de ${a} por ${b} vale ${(a*b)}<br>`);
/*
Desafio 1:
Saída para o navegador
A multiplicação de 10 por 2 vale 20
O numero 10 vem da variável a
O numero 2 vem da variável b
20 é a multiplicacao de (a * b)

Desafio 2:
Completar o código com os operadores que estão faltando
Divisão
Resto
Exponenciação
*/