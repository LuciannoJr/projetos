// VARIÁVEIS

const nome = prompt('Qual seu nome: ');
const idade = prompt('Qual sua idade: ');
const ling = prompt('Qual linguagem de programação você está aprendendo: ');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}`);

const msg = prompt(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (msg == 1) {
    alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
} else if (msg == 2) {
    alert(`Ahh que pena... Já tentou aprender outras linguagens?`)
} else {
    alert(`Digite uma resposta válida.`)
}