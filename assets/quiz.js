// Importando alternativas para o Questionário
// import alternativas from "./alternativas.js"; 

const aromaterapia = [
    {
        pergunta: "Você já utiliza produtos de aromaterapia em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ]

    },
    {
        pergunta: "Qual é o principal objetivo que você busca ao utilizar produtos de aromaterapia?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Relaxamento e alívio do estresse", valor: 1},
            {opcao: "Energia", valor: 2},
            {opcao: "Melhora do sono", valor: 3},
            {opcao: "Bem-estar geral", valor: 4},
            {opcao: "Foco e concentração", valor: 5},
        ]
    },

    {
        pergunta: "Quais tipos de aromas você prefere em seus produtos de aromaterapia? (Marque todas as opções que se aplicam).",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Floral", valor: 1},
            {opcao: "Frutado", valor: 2},
            {opcao: "Amadeirado", valor: 3},
            {opcao: "Cítrico", valor: 4},
            {opcao: "Herbáceo", valor: 5},
            {opcao: "Especiado", valor: 6},
        ]
    },

];

const cuidadosPessoais = [

    {
        pergunta: "Você já utiliza produtos de naturais em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ],
    },

    {
        pergunta: "Existem preocupações específicas que você gostaria de abordar com o uso de produtos naturais? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Hidratação", valor: 1},
            {opcao: "Controle da acne", valor: 2},
            {opcao: "Redução de manchas", valor: 3},
            {opcao: "Limpeza Profunda", valor: 4},
            {opcao: "Esfoliação", valor: 5},
        ],
    },

    {
        pergunta: "Você prefere produtos com a fragrância:",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sem fragrância", valor: 1},
            {opcao: "Leve", valor: 2},
            {opcao: "Moderado", valor: 3},
            {opcao: "Intensa", valor: 4},
        ],
    },

    {
        pergunta: "Como você descreveria o seu tipo de pele?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Seca", valor: 1},
            {opcao: "Oleosa", valor: 2},
            {opcao: "Mista", valor: 3},
            {opcao: "Sensível", valor: 4},
            {opcao: "Normal", valor: 5},
        ],
    },

    {
        pergunta: "Possui alergias a algum produto natural?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Não", valor: 1},
            {opcao: "Sim", valor: 2},
            //A fazer: Opção de descrever o tipo de alergia.
        ],
    }

];

const saudeMental = [
    {
        pergunta: "Você já utiliza produtos de saúde mental em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ],
    },

    {
        pergunta: "Como você descreveria seu bem-estar mental no momento?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Equilibrado", valor: 1},
            {opcao: "Estressado", valor: 2},
            {opcao: "Ansioso", valor: 3},
            {opcao: "Triste", valor: 4},
            {opcao: "Desmotivado", valor: 5},
            {opcao: "Tranquilo", valor: 6},
        ],
    },

    {
        pergunta: "Quais são seus principais objetivos em relação à sua saúde mental? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Redução do estresse e ansiedade", valor: 1},
            {opcao: "Melhora do humor", valor: 2},
            {opcao: "Bem-estar geral", valor: 3},
            {opcao: "Aumento da concentração", valor: 4},
            {opcao: "Promoção do sono tranquilo", valor: 5},
            {opcao: "Equilíbrio emocional", valor: 6},
        ],
    },

    {
        pergunta: "Você tem preferência por algum tipo específico de produtos para o seu bem-estar mental? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true,
        respostas: [
            {opcao: "Óleos essenciais", valor: 1},
            {opcao: "Florais", valor: 2},
            {opcao: "Ervas medicinais", valor: 3}
        ]
    }
];



// Declaração de variáveis para o Questionário

const pergunta = document.getElementById('pergunta');
const alternativa = document.querySelectorAll('.alternativas input');
const respostas = document.getElementById('respostas');
const btnComecar = document.getElementById('comecarQuiz');
const btnAvancar = document.getElementById('seguirQuiz');

let contadorPerguntas = 0;
let scoreFinal = 0;
let tratamentoSelecionado = "";
// console.log(respostas)

btnComecar.addEventListener("click", function(){
   
    escolherTratamento()
    carregarPergunta();
    
})

btnAvancar.addEventListener("click", function(){
    contadorPerguntas++;
    carregarPergunta();
})

function escolherTratamento(){
    var tratamento = document.getElementsByName("tratamento");
    
    for (let index = 0; index < tratamento.length; index++) {
        if (tratamento[index].checked) {
            
            tratamentoSelecionado = tratamento[index].value;

            console.log(tratamentoSelecionado)
        }        
    }

    if (tratamentoSelecionado == "Aromaterapia") {
        tratamentoSelecionado = aromaterapia;
        tratamento
    } else if (tratamentoSelecionado == "Cuidados Pessoais") {
        tratamentoSelecionado = cuidadosPessoais;
    } else {
        tratamentoSelecionado = saudeMental;
    }
}

function carregarPergunta(){

    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild)
    }

    

    pergunta.innerHTML = tratamentoSelecionado[contadorPerguntas].pergunta;

    tratamentoSelecionado[contadorPerguntas].respostas.forEach(resposta =>{
        const novaResposta = document.createElement("label")
        novaResposta.classList.add("alternativas")

        const inputResposta = document.createElement("input");
        inputResposta.setAttribute("type", "checkbox");
        inputResposta.setAttribute("value", resposta.valor);
        inputResposta.setAttribute("value", resposta.valor);

        const spanResposta = document.createElement("span");
        spanResposta.innerHTML = resposta.opcao;
        
        novaResposta.appendChild(inputResposta);
        novaResposta.appendChild(spanResposta);

        respostas.appendChild(novaResposta);

    })

    btnComecar.setAttribute("style", "display:none")
    btnAvancar.removeAttribute("style", "display:none");
    
}