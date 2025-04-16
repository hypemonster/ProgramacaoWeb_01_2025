let ideal = '23º'
let baixa = '16º'
let alta = '32º'

let tempEscolhida = '3' // Temperatura escolhida pelo usuário

if (tempEscolhida == ideal) { // Comparando Temperatura escolhida com a temperatura ideal
    console.log('Temperatura é',tempEscolhida,'(temperatura ideal)');

} else if (tempEscolhida == baixa) { // Comparando Temperatura escolhida com a temperatura baixa
    console.log('Temperatura é',tempEscolhida,'(temperatura baixa)');

} else if (tempEscolhida == alta) { // Comparando Temperatura escolhida com a temperatura alta
    console.log('Temperatura é',tempEscolhida,'(temperatura alta)');

} else{
    console.log('Temperatura não definida'); // Sem temperatura selecionada
}

