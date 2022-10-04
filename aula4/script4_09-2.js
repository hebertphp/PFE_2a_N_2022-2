const saida1 = document.querySelector("#saida1");//id="saida1"
const saida2 = document.querySelector(".saida2");//class="saida2"
const h1 = document.querySelector("h1");//tag <h1>
const teste = document.querySelector(".teste");//class="teste"
const body = document.querySelector("body");//tag <body>
let cor = prompt("Digite uma cor em inglês");

body.style.backgroundColor = cor;

h1.innerHTML += " - Javascript";
h1.style.color ="blue";
h1.style.backgroundColor ="#aaa";
saida1.innerHTML ="será que funciona?<br>";
saida1.innerHTML +="Continua funcionando?<br>";

saida2.innerHTML ="Hoje é dia 03/10/2022";
teste.innerHTML = "lorem agora o Hexa vem na Uninove em 2022, todos tirando 10";
/*
Desafio1
Escrever o texto "Hoje é dia 03/10/2022"
Direcionar para a class="saida2"

Desafio 2
Escrever o texto "Javascript"
Direcionar para a tag <h1>

Desafio3
Escrever o texto "lorem agora o Hexa vem na Uninove em 2022, todos tirando 10"
direciona para a class="teste"

Desafio4
Solicitar ao usuário digitar um nome de uma cor em inglês
com essa cor que o usuário digitou, mudar a cor de fundo
da página HTML
*/