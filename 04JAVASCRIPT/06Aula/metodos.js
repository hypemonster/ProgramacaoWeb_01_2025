let nome = 'José Silva'

console.log(nome[1]);         // Faz a mesma coisa do charAt
console.log(nome.charAt(1)); //

console.log(nome.length); // Passa e conta todos os caracteres.

console.log(nome.toLocaleLowerCase()); // Tudo minusculo
console.log(nome.toLocaleUpperCase()); // Tudo maiusculo

console.log(nome.substring(0,4)); // O primeiro parametro indica o inicio do corte e o segundo onde finaliza

console.log(nome.split('')); // Separa os itens da String de acondo com que é pedido nos parametros, '',' ','a'-> separa todos os A

let nome2 = 'Pedro Henrique'

console.log(nome2.replace('Henrique', 'Pedro'))