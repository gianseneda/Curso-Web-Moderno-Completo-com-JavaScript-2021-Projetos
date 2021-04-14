const moduloA = require("../../módulo_A"); //posso usar um COPY PATH no arquivo
console.log(moduloA.ola);

const c = require("./Pasta C"); //como temos o arquivo INDEX, apenas o nome da pasta(arquivo) é necessário apra chamar o módulo
console.log(c.ola2);

const http = require("http"); //chama direto pois é de 3ros, do NODE
http
  .createServer((req, res) => {
    res.write("Bom dia");
    res.end();
  })
  .listen(8080); //acessar pelo browser, em localhost:8080
