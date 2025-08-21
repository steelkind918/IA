const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua opnião da atual fase da Seleção Brasileira?",
        alternativas: [
            {
                texto: "Está na melhor fase possivel!",
                afirmacao: "É a melhor fase da Seleção. "
            },
            {
                texto: "Está horrivel!",
                afirmacao: "Acha o desempenho pessimo."
            }
        ]
    },
    {
        enunciado: "A seleção brasileira encantava o mundo com seu futebol arte e jogadores lendários. Mas hoje está na sua pior fase. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Fico triste pois o meu país está em decadencia no mundo da bola",
                afirmacao: "Fica chateado pois a seleção não é mais como antigamente."
            },
            {
                texto: "Fico otimista pois ano que vem terá copa do mundo e o Brasil será campeão.",
                afirmacao: "Sente esperança pelo seu país no mundo da bola."
            }
        ]
    },
    {
        enunciado: "Como o futebol impacta o pais. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "O futebol é uma paixão nacional que promove a união, orgulho e oportunidades sociais. Pode tirar jovens da marginalidade e dar visibilidade internacional ao país.",
                afirmacao: "O futebol no Brasil é uma poderosa ferramenta de união e identidade nacional, capaz de transcender barreiras sociais e raciais, oferecendo também novas oportunidades a jovens em comunidades carentes.."
            },
            {
                texto: "O futebol é usado para mascarar problemas sociais e políticos, desviando a atenção da população de questões como saúde, educação e corrupção..",
                afirmacao: "O futebol, embora seja uma paixão nacional, muitas vezes serve como um desvio de atenção dos problemas estruturais do país, sendo usado como uma forma de distração frente à desigualdade social e à corrupção."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre o Futebol. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando as cores da Seleção Brasileira.",
                afirmacao: "Quer fazer algo que represente o nosso País."
            },
            {
                texto: "Criar uma imagem utilizando as cores de outros países.",
                afirmacao: "Quer mostrar que nem tudo é sobre o futebol Brasileiro."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de Ed Física para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer não ajudar mais. O problema é que o trabalho está faltando a parte dela. O que você faz? ",
        alternativas: [
            {
                texto: "Combino com o grupo para dividir as tarefas restantes.",
                afirmacao: "Infelizmente imprevistos acontecem mas juntos vamos conseguir"
            },
            {
                texto: "Deixo todos se ferrarem pois ja passei na matéria",
                afirmacao: "Sou egoista. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();