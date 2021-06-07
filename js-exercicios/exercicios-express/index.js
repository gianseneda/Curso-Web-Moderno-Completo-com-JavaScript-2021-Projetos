const express = require("express");
const saudacao = require("./saudacaoMid");
const app = express();
const bodyParser = require("body-parser");
const usuarioAPI = require("./api/usuario");
require("./api/produto")(app, "com param!");

app.use(bodyParser.text()); //interpreta os textos do body
app.use(bodyParser.json()); //interpreta os JSON
app.use(bodyParser.urlencoded({ extended: true })); //interpreta os códigos url do formulário encoded
app.use(saudacao("Guilherme"));

app.post("/usuario", usuarioAPI.salvar);
app.get("/usuario", usuarioAPI.obter);

app.use("/opa", (req, res, next) => {
  console.log("Antes...");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = "";
  // req.on("data", function (parte) {
  //   corpo += parte;
  // });

  // req.on("end", function () {
  //   res.send(corpo);
  // });

  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
}); //params está direto na url

app.get("/opa", (req, resp, next) => {
  resp.json({
    data: [
      [
        { id: 7, name: "Bia", position: 1 },
        { id: 34, name: "Carlos", position: 2 },
        { id: 73, name: "Bia", position: 3 },
      ],
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });

  next();

  // resp.json({
  //   name: "iPad 32Gb",
  //   price: 1899.0,
  //   discount: 0.12,
  // });

  //resp.send("Estou <b>bem</b>!");
});

app.use("/opa", (req, res, next) => {
  console.log("Depois...");
  next();
});

app.listen(3000, () => {
  console.log(" Backend Executando...");
});
