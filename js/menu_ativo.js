// Nesse script, vou querer deixar a barra que fica no menu da home
// sempre ativa quando eu estou na página //

/* Aqui, eu criou uma constante que vai armazenar os itens que eu vou puxar do index.html utilizando o document.querrySelectorAll, pois eu vou estar puxando todos os a que estão dentro da classe .header-menu
 */
const links = document.querySelectorAll(".header-menu a");

/* O que eu fiz aqui:
1. Criei uma função com o nome ativarLink que vai ser passado como parâmetro para o loop forEach.
2. Dentro dessa função, eu criei uma constante url que vai armazenar o localização de todas os hrefs que estão dentro do      ".header-menu a"
3. Criei uma contante href que vai armazenas o link em si de cada href presente dentro do ".header-menu a" - que foi o parâmetro que eu passei na const link(linha 6)
4. Criei uma condição para que: Se dentro da variavel url incluir o que está dentro da variavel href, eu vou adicionar uma classe, passando a propriedade .classList.add("Ativo") que é customizada no CSS para fazer com que a barra embaixo dos links do header sempre esteja ativa quando eu estiver na página de cada um
*/
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("Ativo");
  }
}

links.forEach(ativarLink);

// OBS: Location é uma propriedade do objeto .windows //

if (window.SimpleAnime) {
  new SimpleAnime();
}
