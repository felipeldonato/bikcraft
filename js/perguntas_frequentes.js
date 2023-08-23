// 1 - criar uma constatne que vai armazenar todos os button contidos na classe .pergutnas //
const perguntas = document.querySelectorAll(".perguntas button");

/* 4 - Aqui está toda funcionalidade:
    4.1 - const pergunta criada para armazenar os dados que eu observei do parametro event, obtendo assim o nome do HTML do button
    4.2 - const controls criada para armazenar o atributo "aria-controls" no button
    4.3 - const resposta criada para armazenas todos os elementos que possuem o id controls.
    4.4 - resposta.classList.toggle("ativa") foi criada com o intuito de fazer com que o button ao ser clicado pelo usuário ele apareça e no console dê o valor ativa
    4.5 - const ativa criada para armazenar que: Se a variavel resposta conter a constante ativa, vai ser true e se não tiver, vai ser false
    4.6 - por fim, estou setando na constante pergunta o atributo aria-expanded passando a constante ativa como parâmetro
*/
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

// 3 - a function eventosPerguntas vai observer o parametro pergunta e vai adicionar o evento de click, ou seja, quando eu clicar no button, ele vai ativar a função ativarPergunta//
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

// 2 - para cada item da const perguntas, quero que isso(a function eventosPerguntas aconteça)
perguntas.forEach(eventosPerguntas);

if (window.SimpleAnime) {
  new SimpleAnime();
}
