/*let nome = 'Pedro'; //Usar sempre
var nome2 = 'Pedro'; // Cringe
const nome3 = 'Pedro'; // Não muda
let latido = 'barf barf'

const turmamanha = 3.14


function pi(){
    pi2 = turmamanha * 5
    turmamanha = 500 // <- Erro
    console.log(pi2);
}



function cachorro(){
    let latido = "AU AU" // Preso no bloco {}
    console.log(latido);
    console.log(nome);
    console.log(nome2);
}

console.log(latido); // Não acessa o bloco {}
cachorro();
pi();
*/

let gostadepraia = true;

if (gostadepraia == true) {
    console.log('Essa pessoa gosta de praia');
}
else{
    console.log('Essa pessoa n gosta de praia');
}