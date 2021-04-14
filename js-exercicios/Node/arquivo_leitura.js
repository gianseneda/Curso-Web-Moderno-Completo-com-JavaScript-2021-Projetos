const fs = require("fs"); //esse módulo já é nativo no NODE

const caminho = __dirname + "/arquivo.json"; //__dirname é o diretório, pasta em que ta o arquivo

// síncrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assíncrono
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo); //transformando em objeto
  console.log(`${config.db.host}:${config.db.port}`);
}); //ultimo parametro é uma callback

const config = require("./arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  //lendo o diretorio
  console.log("Conteudo da pasta...");
  console.log(arquivos);
});
