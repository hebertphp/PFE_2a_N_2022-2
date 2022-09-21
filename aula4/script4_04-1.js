let a,b;
a=prompt("Digite o nome");//"João"
b=prompt("Digite o sobrenome");//"Maria"
document.write (`${a} ${b}`);//"João Maria"
b+=" ";//b="Maria"+" "//b="Maria "
b+=a;//b="Maria João"
document.write ("<br>"+ b);//"Maria João"
/*
+   num + num => somar// 5 + 2 = 7
+   num + "string", "string" + num, "string" + "string" => Juntar, concatenar
    5   + "2" = "52"
*/