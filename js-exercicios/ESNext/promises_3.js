//Em programação de computadores, um método de callback é um pedaço de código executável que é passado como parâmetro para algum método, é esperado que o método execute o código do argumento em algum momento.

setTimeout(function () {
  console.log("Executando callback");
  setTimeout(function () {
    console.log("Executando callback");
    setTimeout(function () {
      console.log("Executando callback");
    }, 2000);
  }, 2000);
}, 2000); //tudo callback

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise");
    }, tempo);
    resolve();
  });
}

esperarPor(3000)
  .then(() => esperarPor())
  .then(esperarPor);
