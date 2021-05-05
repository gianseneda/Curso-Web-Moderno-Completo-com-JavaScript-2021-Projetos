//concatenaremos ambos os arquivos da calculadora numa só e também usaremos o BABEL para codificar nosso JS pra versões mais abrangentes

const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
  //todos os arquivos JS **.js
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"], //pega o JS mais novo possível
      })
    )
    .pipe(uglify()) //mimifica os arquivos e deixa numa linha sem espaço
    .pipe(concat("codigo.min.js")) //concatena todos os arquivos
    .pipe(gulp.dest("build"));

  return cb();
}

exports.default = series(padrao);
