const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(".")); //os arquivos html desta página serão providos estaticamente
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (re, file, callback) {
    callback(null, "./upload");
  },
  filename: function (re, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro");
    }

    res.end("Concluído com sucesso");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.get("/parOuImpar", (req, res) => {
  //req.body - como receber dados
  //req.query //esse precisa de parametros de leitura, como ?id=12
  //req.params //recebe direto um id na url
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "par" : "impar",
  });
});

app.listen(8080, () => console.log("Executando..."));
