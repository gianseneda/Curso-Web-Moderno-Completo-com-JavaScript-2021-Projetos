const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = (cb) => {
  console.log("Tarefa antes 1");
  return cb(); //o proprio gulp completa a CB
};

const antes2 = (cb) => {
  console.log("Tarefa antes 2");
  return cb(); //o proprio gulp completa a CB
};

function copiar(cb) {
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB")); //o pipe espera uma transformacao do arquivo em src e pode-se ter vários pipes como se fossem .then

  //gulp.dest vai criar a pasta B e vai copiar os arquivos lá
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa fim");
  return cb(); //o proprio gulp completa a CB
};

//aqui ele executará as funcoes em serie

module.exports.default = series(parallel(antes1, antes2), copiar, fim); //o gulp precisa de uma TASK sempre que uma funcao dele for chamada
