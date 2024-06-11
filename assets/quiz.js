// Importando alternativas para o Questionário
import Alternativas from "./alternativas.js"; 

// Declaração de variáveis para o Questionário

const pergunta = document.getElementById('pergunta');
const alternativas = document.querySelectorAll('.alternativas input');
const respostas = document.getElementById('respostas');
const btnAvancar = document.querySelector('.avancarQuestionario')

let contadorPerguntas = 0;
let scoreFinal = 0;

// console.log(respostas)

function carregarPergunta(){
    
}