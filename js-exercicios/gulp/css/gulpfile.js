const { series, parallel } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError)) //caso haja erro
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}

function copiarHTML(cb) {
  gulp.src("src/index.html").pipe(gulp.dest("build")); //preciso colocar o arquivo HTML na pasta de mesmo nível para ele acessar o CSS e ter o estilo do link
  return cb();
}

exports.default = parallel(transformacaoCSS, copiarHTML);
