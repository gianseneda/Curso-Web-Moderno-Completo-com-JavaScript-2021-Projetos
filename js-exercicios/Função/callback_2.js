//Exemplo de Callback no Browser
document.getElementsByTagName("body")[0].onclick = function (e) {
  //e = evento
  console.log("O evento ocorreu!");
};
//registrando um evento, neste caso, o click, é o mesmo que chamar uma função no código
