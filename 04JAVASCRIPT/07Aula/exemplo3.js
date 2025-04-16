// 3. Sistema de Cálculo de Média de Notas com Array
// Neste sistema, um array armazena as notas de um aluno em diversas disciplinas. 
// O sistema calcula a média das notas e exibe o resultado. 
// Dependendo do valor da média, o aluno será classificado como aprovado ou reprovado,
// de acordo com a média mínima estabelecida (geralmente 7.0).

let Notas = [2,2,6,7,8,8];

let somaNotas = Notas[0] + Notas[1] + Notas[2] + Notas[3] + Notas[4] + Notas[5];
let media2 = somaNotas/6;

if (media >= 7) {
    console.log('Você foi aprovado!!');
} else {
    console.log('Você foi reprovado!!');
}