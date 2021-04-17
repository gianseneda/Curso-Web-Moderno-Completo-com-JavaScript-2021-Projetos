const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "dados.txt");

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      // erro, conteudo
      resolve(conteudo.toString());
    });
  });
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.split("\n"))
  .then((linhas) => linhas.join(","))
  .then((conteudo) => `O valor final é: ${conteudo}`)
  .then(console.log);
