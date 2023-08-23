/* 1. Criei uma constante parametros para armazenar um array criado pelo new URLSearchParams(Location.search) com os parametros de busca */

// OBS: Eu estou buscando a propriedade .search no objeto location dentro do arquivo seguros.html e orcamento.html//
const parametros = new URLSearchParams(location.search);

//Aqui, é como se eu tivesse fazendo um loop por cada um dos parametros que ele extraiu do .search //
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

// Com essas duas strings, eu vou no HTML e vou verificar quais elementos possuem o nome que foi printado no console(seguro,prata) e a partir dai eu vou ativar eles ou não //

// Para cada loop utilizando a constante parametros (que foi o search que extrai) eu estou fazendo a função ativarProduto //
parametros.forEach(ativarProduto);

// Como que eu mudo o atributo do elemento para checked(que vai ser o atributo que vai tornar o elemento de Bikcraft e Seguro checado)? elemento.checked = true //
