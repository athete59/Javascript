//vamos fazer um teste com os meses do ano e switch//

const prompt = require("prompt-sync")();

var mes= prompt("Digite o mês do seu nascimento:");

switch(mes){

case '1':
    console.log("Você nasceu em janeiro");
    break;
case '2':
    console.log("é de fevereiro");
    break;
case '3':
    console.log("é de março");
    break;
case '4':
    console.log("é de abril");
    break;
case'5':
    console.log("Sim,você está no melhor mês que é maio");
    break;
case '6':
    console.log("Que isso, mas já??? Estamos no mês de julho");
    break;
case '7':
    console.log("Esse aqui é um mês lindo tá, é o mes das férias, uhull, é julho");
    break;
case '8':
    console.log ("Um mes que entrega bastante até, o mes de Agosto");
    break;
case '9':
    console.log('Mes meio sem graça esse mes do seu aniversário viu, é setembro');
    break;
case '10':
    console.log("Mes das crianças, adoro o mes de outubro");
    break;
case '11':
    console.log("Tão longeee, mas tão perto, esse mes de novembro não parece acabar nunca");
    break;
case '12':
    console.log("Finalmente, fériasss! amo o mes de dezembro");
    break;
default:
    //Esse serve para quando todos os outros casos não se aplicam
    console.log('Ops, parece que você digitou errado, tente novamente!');
    break;
}