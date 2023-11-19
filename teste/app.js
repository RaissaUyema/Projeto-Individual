

const numeroQuestao = document.querySelector(".numero_questao");
const textoQuestao = document.querySelector(".texto_questao");
const opcaoContainer = document.querySelector(".opcao_container");

let contadorPerguntas = 0;
let perguntaAtual;
let perguntasDisponiveis = []

//coloque as perguntas no array perguntasDisponiveis
function setPerguntasDisponiveis(){
    const totalQuestoes = quiz.length;
    for(let i=0; i<totalQuestoes; i++){
        perguntasDisponiveis.push(quiz[i])
    }
}

//definir o número da pergunta e a pergunta e as opções
function ObterNovaPergunta(){
    //definir o número da pergunta
    numeroQuestao.innerHTML = "Questão" + (contadorPerguntas + 1) + " de" + quiz.length;

    // definir o texto da pergunta
    //receber pergunta aleatória
    const questaoIndex = perguntasDisponiveis[Math.floor(Math.random() * perguntasDisponiveis.length)]
    perguntaAtual = questaoIndex;
    textoQuestao.innerHTML = perguntaAtual.q;

    //obtenha a posição de 'questioIndex' do array de perguntasDisponível;
    const index1 = perguntasDisponiveis.indexOf(questaoIndex);
    // 
    contadorPerguntas++
}

function proxima(){
    if(contadorPerguntas === quiz.length){
        console.log("teste encerrado")
    } else {
        ObterNovaPergunta();
    }
}

window.onload = function(){
//primeiro vamos definir todas as perguntas no array perguntasDisponiveis
    setPerguntasDisponiveis();
// segundo chamaremostObterNovaPergunta(); função
    ObterNovaPergunta();
}