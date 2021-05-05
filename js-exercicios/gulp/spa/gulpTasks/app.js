const gulp = require("gulp");
const babel = require("gulp-babel");
const uglifycss = require("gulp-uglifycss");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const { default: gulpfile } = require("../gulpfile");

function appHTML() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

function appCSS() {
  return gulp
    .src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}

function appJS() {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["ENV"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}

function appIMG() {
  return gulp
    .src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/imgs"));
}

gulp.task("appHTML", appHTML); //faço isso para poder me referir à estas funcoes com ''
gulp.task("appIMG", appIMG);
gulp.task("appCSS", appCSS);
gulp.task("appJS", appJS);

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
