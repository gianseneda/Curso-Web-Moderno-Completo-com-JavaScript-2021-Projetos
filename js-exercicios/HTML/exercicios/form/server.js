const express = require("express"); //exporto a const
const app = express(); //instancio ela
const bodyParser = require("body-parser"); //exporto o body parser

app.use(bodyParser.urlencoded({ extended: true })); //ele vai ler o que vem pela URL através do form

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuário Incluído</h1>");
});

app.post("/usuarios/:id", (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuário Alterado</h1>");
});

app.listen(3003);
