const porta = 3003; //deve-se declarar uma porta quando há comunicação de rede

const express = require("express"); //esta no node modules instalado pelo npm init
const app = express();
const bodyParser = require("body-parser"); //para interpretar no lado do servidor a requisição do POST
const bancoDeDados = require("./banco_de_dados");

app.use(bodyParser.urlencoded({ extended: true })); //para qualquer requisição usando o EXPRESS, ele passa nesse MIDDLEWARE, caso o padrão de envio for o encoded, ele passa nessa função, para transformar em objeto pra acessarmos com os atributos

app.get("./produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
  next();
});

app.get("./produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id)); //acesso o parametro id dentro da URL
  next();
});

app.post("./produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome, //forma de buscar esses atributos quando usamos metodo post
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

app.get("./produtos", (req, res, next) => {
  //middleware, req - requisicao, res - resposta, next para ir pruma proxima funcao
  res.send({ nome: "Notebook", preco: 123.45 }); // send - Converter para JSON
});
app.put("./produtos:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome, //forma de buscar esses atributos quando usamos metodo post
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

app.delete("./produtos:id", (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto); //JSON
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
