let usuario_dg, senha_dg, usuario_bd, senha_bd, final;
const saida1 = document.querySelector("#saida1");

usuario_bd="aluno";
senha_bd="1234";

usuario_dg=prompt("Digite seu usuário");
senha_dg=prompt("Digite sua senha");

final=(usuario_dg==usuario_bd && senha_dg==senha_bd) ? "Bem vindo aluno!" : "Aluno não encontrado!";

saida1.innerHTML=`${final}`;
/*
usuario_bd="aluno";
senha_bd="1234";

Solicitar a entrada de um usuario
Solicitar a entrada de uma senha

Utilizando o operador ternário, com os dados de entrada
comparar e mostrar uma das mensagens:

"Bem vindo aluno!"
"Aluno não encontrado!"
*/