const saida=document.querySelector('.saida');
const mes1=document.querySelector('#mes');
//                 0          1         2          3        4        5         6
const semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let i = 0; i < 7; i++){
    saida.innerHTML+=`${semana[i]}  é o ${i+1}o dia da semana!<br>`;
}
saida.innerHTML+='<hr>';

for (let f =0; f <12; f++){
    saida.innerHTML+=`${mes[f]}  é o ${f+1}º do mês!<hr>`;
}

for(let j=0;j<12;j++){
    mes1.innerHTML+=`<option value="${mes[j]}">${mes[j]}</option>`;
}