const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1299.49,
  desconto: 0.15,
};

fs.writeFile(
  __dirname + "/aruivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo Salvo");
  }
);
